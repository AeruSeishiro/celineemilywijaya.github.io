/* ─── Realistic clouds ────────────────────────────────────────────
   Each cloud is a small 3D volume: light is traced through it once
   with WebGL, in a day and a sunset lighting, and saved to a plain
   canvas. The GPU context is then released and the existing CSS drift
   moves the images, so the clouds cost almost nothing while the page
   runs. If WebGL is unavailable, the original CSS clouds stay.
   ─────────────────────────────────────────────────────────────── */
(() => {
  const sky = document.getElementById('sky');
  const clouds = sky ? Array.from(sky.querySelectorAll('.cloud')) : [];
  if (!clouds.length) return;

  const WIDTH = window.innerWidth < 760 ? 380 : 600;
  const HEIGHT = Math.round(WIDTH / 2.1);
  const STRIPS = 6;              /* each cloud is painted over several frames */
  const PUFFS = 9;
  const SEEDS = [3.1, 17.4, 42.7, 8.9, 29.3, 56.2];

  const LIGHTING = {
    day: { dir: [-.335, .864, .375], sun: [.38, .37, .35], sky: [.71, .79, .92], absorb: 8, scatter: .25 },
    /* dusky body with only the sun-facing edges glowing, so light text stays readable on top */
    sunset: { dir: [.975, -.09, .2], sun: [.52, .21, .035], sky: [.3, .16, .29], absorb: 38, scatter: .04 },
  };

  const surface = document.createElement('canvas');
  surface.width = WIDTH;
  surface.height = HEIGHT;
  const gl = surface.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: true,
    preserveDrawingBuffer: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
    failIfMajorPerformanceCaveat: true,
  });
  if (!gl) return;
  const highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
  if (!highp || highp.precision === 0) return;

  const VERTEX = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() { vUv = aPos; gl_Position = vec4(aPos, 0., 1.); }
  `;

  const FRAGMENT = `
    precision highp float;
    varying vec2 vUv;
    uniform vec4 uPuffs[${PUFFS}];
    uniform vec3 uLight, uSunCol, uSkyCol;
    uniform float uSeed, uAbsorb, uScatter;

    float hash(vec3 p) {
      p = fract(p * vec3(.1031, .1030, .0973));
      p += dot(p, p.yxz + 33.33);
      return fract((p.x + p.y) * p.z);
    }
    float noise(vec3 x) {
      vec3 i = floor(x), f = fract(x);
      f = f * f * (3. - 2. * f);
      return mix(
        mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
        f.z);
    }
    float shape(vec3 p) {
      float field = -1.;
      for (int i = 0; i < ${PUFFS}; i++) {
        vec4 s = uPuffs[i];
        float v = 1. - length(p - s.xyz) / s.w;
        float h = clamp(.5 + .5 * (v - field) / .34, 0., 1.);
        field = mix(field, v, h) + .34 * h * (1. - h);
      }
      return field;
    }
    /* cauliflower detail for what you see */
    float detail(vec3 p) {
      float v = 0., a = .5;
      vec3 q = p * 5.2 + uSeed;
      for (int i = 0; i < 4; i++) {
        v += a * (1. - abs(2. * noise(q) - 1.));
        q = q * 2.13 + vec3(1.7, 9.2, 4.1);
        a *= .5;
      }
      return v / .9375;
    }
    /* smoother version for light, so shading stays soft */
    float coarse(vec3 p) {
      return .65 * noise(p * 4.2 + uSeed) + .35 * noise(p * 9.1 + uSeed + 3.);
    }
    float carve(vec3 p, float s, float n) {
      float wobble = noise(vec3(p.xz * 3.4, uSeed)) - .5;
      float base = smoothstep(-.31, -.13, p.y + wobble * .11 + (n - .5) * .05);
      return clamp((s + (n - .56) * .62 - (1. - base) * .9) * 3.4, 0., 1.);
    }
    float densityView(vec3 p) {
      float s = shape(p);
      return s < -.42 ? 0. : carve(p, s, detail(p));
    }
    float densityLight(vec3 p) {
      float s = shape(p);
      return s < -.42 ? 0. : carve(p, s, .53 + (coarse(p) - .5) * .5);
    }

    void main() {
      const float STEP_SIZE = .025;
      vec2 uv = vec2(vUv.x, vUv.y / 2.1);
      float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(.06711056, .00583715))));
      vec3 p = vec3(uv, .352 - jitter * STEP_SIZE);
      vec3 col = vec3(0.);
      float through = 1.;

      for (int i = 0; i < 28; i++) {
        float rho = densityView(p);
        if (rho > .01) {
          float depth = 0.;
          for (int j = 1; j <= 4; j++) depth += densityLight(p + uLight * float(j) * .062);
          depth *= .062;
          float sunLit = exp(-depth * uAbsorb) + uScatter * exp(-depth * 2.5);
          float ambient = mix(.78, 1., smoothstep(-.26, .18, p.y));
          vec3 source = uSunCol * sunLit + uSkyCol * ambient;
          float a = 1. - exp(-rho * STEP_SIZE * 26.);
          col += through * a * source;
          through *= 1. - a;
          if (through < .015) break;
        }
        p.z -= STEP_SIZE;
      }

      float alpha = 1. - through;
      float frame = smoothstep(1., .92, abs(vUv.x)) * smoothstep(1., .9, abs(vUv.y));
      gl_FragColor = vec4(min(col, vec3(alpha)) * frame, alpha * frame);
    }
  `;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    console.warn('clouds shader:', gl.getShaderInfoLog(shader));
    return null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT);
  if (!vs || !fs) return;
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.bindAttribLocation(program, 0, 'aPos');
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.viewport(0, 0, WIDTH, HEIGHT);
  gl.clearColor(0, 0, 0, 0);
  const u = {
    puffs: gl.getUniformLocation(program, 'uPuffs'),
    light: gl.getUniformLocation(program, 'uLight'),
    sun: gl.getUniformLocation(program, 'uSunCol'),
    sky: gl.getUniformLocation(program, 'uSkyCol'),
    seed: gl.getUniformLocation(program, 'uSeed'),
    absorb: gl.getUniformLocation(program, 'uAbsorb'),
    scatter: gl.getUniformLocation(program, 'uScatter'),
  };

  const random = (seed, n) => {
    const v = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };

  /* A flat-based row of overlapping spheres, tallest near the middle */
  const puffsFor = (seed) => {
    const data = new Float32Array(PUFFS * 4);
    for (let i = 0; i < PUFFS; i += 1) {
      const t = i / (PUFFS - 1);
      const envelope = Math.sin(Math.PI * (t * .9 + .05)) ** .75;
      const radius = (.075 + .2 * envelope) * (.78 + .44 * random(seed, i * 4 + 1));
      data[i * 4] = -.72 + 1.44 * t + (random(seed, i * 4) - .5) * .14;
      data[i * 4 + 1] = -.18 + radius * (.42 + .26 * random(seed, i * 4 + 2));
      data[i * 4 + 2] = (random(seed, i * 4 + 3) - .5) * .22;
      data[i * 4 + 3] = radius;
    }
    return data;
  };

  const prepare = (index, variant) => {
    const seed = SEEDS[index % SEEDS.length];
    const light = LIGHTING[variant];
    gl.disable(gl.SCISSOR_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.SCISSOR_TEST);
    gl.uniform4fv(u.puffs, puffsFor(seed));
    gl.uniform3fv(u.light, light.dir);
    gl.uniform3fv(u.sun, light.sun);
    gl.uniform3fv(u.sky, light.sky);
    gl.uniform1f(u.seed, seed);
    gl.uniform1f(u.absorb, light.absorb);
    gl.uniform1f(u.scatter, light.scatter);
  };

  const store = (index, variant) => {
    const sprite = document.createElement('canvas');
    sprite.width = WIDTH;
    sprite.height = HEIGHT;
    sprite.className = `cloud-sprite cloud-sprite--${variant}`;
    /* average four slightly offset copies to smooth out render grain */
    const context = sprite.getContext('2d');
    context.globalCompositeOperation = 'lighter';
    context.globalAlpha = .25;
    [[-.6, -.6], [.6, -.6], [-.6, .6], [.6, .6]].forEach(([x, y]) => context.drawImage(surface, x, y));
    clouds[index].appendChild(sprite);
  };

  /* Paint the lighting on screen first, then the other one */
  const current = document.documentElement.getAttribute('data-theme') === 'sunset' ? 'sunset' : 'day';
  const other = current === 'sunset' ? 'day' : 'sunset';
  const queue = [
    ...clouds.map((_, index) => [index, current]),
    ...clouds.map((_, index) => [index, other]),
  ];
  const stripHeight = Math.ceil(HEIGHT / STRIPS);
  let job = 0;
  let strip = 0;
  let finished = false;

  surface.addEventListener('webglcontextlost', () => {
    if (finished) return;
    finished = true;
    if (job < clouds.length) {
      sky.querySelectorAll('.cloud-sprite').forEach((sprite) => sprite.remove());
      sky.classList.remove('has-real-clouds');
    }
    sky.classList.remove('clouds-pending');
  });

  sky.classList.add('clouds-pending');

  const step = () => {
    if (finished) return;
    const [index, variant] = queue[job];
    if (strip === 0) prepare(index, variant);
    gl.scissor(0, strip * stripHeight, WIDTH, stripHeight);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    strip += 1;

    if (strip >= STRIPS) {
      gl.finish();
      store(index, variant);
      strip = 0;
      job += 1;
      if (job === clouds.length) {
        sky.classList.add('has-real-clouds');
        sky.classList.remove('clouds-pending');
      }
      if (job === queue.length) {
        finished = true;
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return;
      }
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
})();
