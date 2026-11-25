/* ─── 3D sun / moon ───────────────────────────────────────────────
   A single ray-traced sphere drawn with WebGL, no libraries.
   - The sun is animated noise. The moon is a smooth, glowing blue.
   - Theme changes morph one body into the other.
   - If WebGL is unavailable, the original CSS moon simply stays put.
   ─────────────────────────────────────────────────────────────── */
(() => {
  const host = document.querySelector('.hero-art .moon-decoration');
  const art = host?.closest('.hero-art');
  if (!host || !art) return;

  const CANVAS_RATIO = 1.7;      /* canvas size relative to the sphere, leaves room for glow + orbits */
  const MAX_BUFFER = 1400;       /* longest canvas side in device pixels */
  const MIN_QUALITY = .55;
  const LIGHT = [-.531, .599, .599];

  const canvas = document.createElement('canvas');
  canvas.className = 'celestial-canvas';
  canvas.setAttribute('aria-hidden', 'true');

  const gl = canvas.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
    failIfMajorPerformanceCaveat: true,
  });
  if (!gl || !gl.getExtension('OES_standard_derivatives')) return;
  const highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
  if (!highp || highp.precision === 0) return;

  const VERTEX = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() { vUv = aPos; gl_Position = vec4(aPos, 0., 1.); }
  `;

  const NOISE = `
    float hash(vec3 p) {
      p = fract(p * vec3(.1031, .1030, .0973));
      p += dot(p, p.yxz + 33.33);
      return fract((p.x + p.y) * p.z);
    }
    float vnoise(vec3 x) {
      vec3 i = floor(x), f = fract(x);
      f = f * f * (3. - 2. * f);
      return mix(
        mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
        f.z);
    }
    float fbm(vec3 p) {
      float v = 0., a = .5;
      for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 4.1); a *= .5; }
      return v / .9375;
    }
  `;

  const RENDER = `
    #extension GL_OES_standard_derivatives : enable
    precision highp float;
    varying vec2 vUv;
    uniform mat3 uRot, uTilt;
    uniform vec3 uLight;
    uniform float uTime, uMorph, uWarm, uPx;
    ${NOISE}
    const vec3 RO = vec3(0., 0., 4.);
    const float LENS = .439;

    vec3 sunSurface(vec3 p, vec3 q, vec3 rd) {
      float t = uTime * .035;
      float warp = fbm(q * 1.6 + vec3(t, -t * .6, t * .4));
      float cells = fbm(q * 7.5 + warp * 1.25 + vec3(-t * .8, t, t * .3));
      float fine = vnoise(q * 34. + cells * 2. + t * 2.);
      float s = smoothstep(.22, .78, cells * .72 + fine * .28);
      float mu = max(dot(p, -rd), 0.);
      vec3 dayCol = mix(vec3(1., .76, .3), vec3(1., .95, .72), s);
      vec3 duskCol = mix(vec3(1., .42, .04), vec3(1., .66, .14), s);
      vec3 limbCol = mix(vec3(1., .6, .16), vec3(.95, .25, .03), uWarm);
      vec3 col = mix(limbCol, mix(dayCol, duskCol, uWarm), smoothstep(0., .72, mu));
      col += mix(vec3(1., .97, .86), vec3(1., .62, .16), uWarm) * pow(mu, 3.) * mix(.28, .2, uWarm);
      return col;
    }

    vec3 moonSurface(vec3 p, vec3 rd) {
      float lit = dot(p, uLight);
      vec3 col = mix(vec3(.035, .075, .24), vec3(.2, .42, .95), smoothstep(-.35, .95, lit));
      col = mix(col, vec3(.62, .8, 1.), smoothstep(.55, 1., lit) * .75);
      float rim = pow(1. - max(dot(p, -rd), 0.), 2.6);
      col += vec3(.3, .52, 1.) * rim * (.22 + .5 * smoothstep(-.4, .6, lit));
      col += vec3(.75, .87, 1.) * pow(max(dot(p, normalize(uLight - rd)), 0.), 48.) * .28;
      return col;
    }

    void over(inout vec3 col, inout float a, vec3 src, float srcA) {
      col = src * srcA + col * (1. - srcA);
      a = srcA + a * (1. - srcA);
    }

    void orbit(inout vec3 col, inout float a, vec3 rd, vec3 normal, float radius, float phase, float size,
               float tBody, float bodyCov, vec3 tint) {
      vec3 n = uTilt * normal;
      float denom = dot(rd, n);
      if (abs(denom) > .0001) {
        float t = -dot(RO, n) / denom;
        if (t > 0.) {
          vec3 hit = RO + rd * t;
          float r = length(hit);
          float w = max(fwidth(r), .0005);
          float line = 1. - smoothstep(w * .35, w * 1.35, abs(r - radius));
          if (line > 0.) {
            float depth = smoothstep(-radius, radius, hit.z);
            float hidden = t > tBody ? bodyCov : 0.;
            over(col, a, tint, line * (.13 + .42 * depth) * (1. - hidden));
          }
        }
      }
      vec3 u = normalize(cross(n, vec3(0., 1., 0.)));
      vec3 v = cross(n, u);
      vec3 c = (u * cos(phase) + v * sin(phase)) * radius;
      vec3 oc = c - RO;
      float along = dot(oc, rd);
      float dist = length(oc - rd * along);
      float cov = 1. - smoothstep(size - uPx, size + uPx, dist);
      float halo = exp(-max(dist - size, 0.) * 34.) * .3;
      if (halo > .002 && along < tBody + 2.) over(col, a, tint, halo * (along > tBody ? 1. - bodyCov : 1.));
      if (cov > 0.) {
        float h = sqrt(max(size * size - dist * dist, 0.));
        vec3 sn = normalize(rd * (along - h) + RO - c);
        float lit = .24 + .9 * max(dot(sn, uLight), 0.);
        over(col, a, tint * lit, cov * (along > tBody ? 1. - bodyCov : 1.));
      }
    }

    void main() {
      vec3 rd = normalize(vec3(vUv * LENS, -1.));
      float b = dot(RO, rd);
      float d = sqrt(max(dot(RO, RO) - b * b, 0.));
      float cov = 1. - smoothstep(1. - uPx, 1. + uPx, d);
      float solar = 1. - uMorph;
      vec3 col = vec3(0.);
      float a = 0.;

      float edgeFade = smoothstep(1.58, 1.16, d);
      if (d > .9 && edgeFade > 0.) {
        float out_ = max(d - 1., 0.);
        vec2 ang = normalize(vUv + .0001);
        float rays = .72 + .28 * vnoise(vec3(ang * 3.4, uTime * .07));
        vec3 sunGlow = mix(vec3(1., .75, .34), vec3(1., .44, .07), uWarm);
        float sg = (exp(-out_ * 7.5) * .72 + exp(-out_ * 2.5) * .24) * rays * solar;
        float mg = (exp(-out_ * 11.) * .34 + exp(-out_ * 3.2) * .1) * uMorph;
        vec3 glow = (sunGlow * sg + vec3(.5, .62, 1.) * mg) * edgeFade;
        float ga = clamp(max(glow.r, max(glow.g, glow.b)), 0., 1.);
        col = glow;
        a = ga;
      }

      float tBody = 1e5;
      if (cov > 0.) {
        float h = sqrt(max(1. - d * d, 0.));
        tBody = -b - h;
        vec3 p = normalize(RO + rd * tBody);
        vec3 q = p * uRot;
        vec3 surface;
        if (uMorph <= .001) surface = sunSurface(p, q, rd);
        else if (uMorph >= .999) surface = moonSurface(p, rd);
        else {
          float n = fbm(q * 3.4) - .5;
          float sweep = uMorph * 3.6 - 1.8 - (p.x * .62 + p.y * .62 + n * .55);
          float m = smoothstep(-.16, .16, sweep);
          surface = mix(sunSurface(p, q, rd), moonSurface(p, rd), m);
          surface += vec3(1., .78, .46) * 4. * m * (1. - m) * .75;
        }
        over(col, a, clamp(surface, 0., 1.), cov);
      }

      vec3 tint = mix(mix(vec3(1., .98, .9), vec3(1., .8, .56), uWarm), vec3(.76, .83, 1.), uMorph);
      orbit(col, a, rd, vec3(-.317, .872, .373), 1.2, uTime * .19 + .8, .052, tBody, cov, tint);
      orbit(col, a, rd, vec3(.555, .403, .727), 1.1, -uTime * .13 + 3.6, .028, tBody, cov, tint);

      float dither = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(.06711056, .00583715)))) - .5) / 255.;
      col = clamp(col + dither * a, 0., 1.);
      a = max(a, max(col.r, max(col.g, col.b)));
      gl_FragColor = vec4(col, a);
    }
  `;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('celestial shader:', gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  };

  const program = (fragment) => {
    const vs = compile(gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return null;
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.bindAttribLocation(p, 0, 'aPos');
    gl.linkProgram(p);
    return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
  };

  const renderProgram = program(RENDER);
  if (!renderProgram) return;

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.BLEND);

  const uniform = (name) => gl.getUniformLocation(renderProgram, name);
  const u = {
    light: uniform('uLight'), rot: uniform('uRot'), tilt: uniform('uTilt'),
    time: uniform('uTime'), morph: uniform('uMorph'), warm: uniform('uWarm'), px: uniform('uPx'),
  };

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const themeTargets = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    return { morph: theme === 'night' ? 1 : 0, warm: theme === 'sunset' ? 1 : 0 };
  };

  const start = themeTargets();
  const state = {
    morph: start.morph, warm: start.warm, morphTarget: start.morph, warmTarget: start.warm,
    yaw: -.5, pitch: .16, spin: 0, pitchVel: 0,
    tiltX: 0, tiltY: 0, tiltTargetX: 0, tiltTargetY: 0, dragX: 0, dragY: 0,
    time: 0, last: 0, quality: 1, slowFrames: 0, sampled: 0,
    visible: true, ready: false, raf: 0, dragging: false, pointerX: 0, pointerY: 0, lastMove: 0, dirty: true,
  };

  /* ── Sizing ── */
  const resize = () => {
    const css = host.clientWidth * CANVAS_RATIO;
    if (!css) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = Math.max(2, Math.round(Math.min(css * dpr, MAX_BUFFER) * state.quality));
    if (canvas.width !== size || canvas.height !== size) {
      canvas.width = size;
      canvas.height = size;
    }
    state.dirty = true;
  };

  /* ── Rotation matrices (column order, as WebGL expects) ── */
  const rotation = (yaw, pitch) => {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return new Float32Array([cy, sp * sy, -cp * sy, 0, cp, sp, sy, -sp * cy, cp * cy]);
  };

  const draw = () => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(renderProgram);
    gl.uniform1f(u.time, state.time);
    gl.uniform1f(u.morph, state.morph);
    gl.uniform1f(u.warm, state.warm);
    gl.uniform1f(u.px, (2 / canvas.width) * 4 * .439 * 1.1);
    const scroll = reduceMotionQuery.matches ? 0 : window.scrollY * .0011;
    gl.uniformMatrix3fv(u.rot, false, rotation(state.yaw + state.tiltX + scroll, state.pitch + state.tiltY));
    const orbitTilt = rotation(state.tiltX * .55 + state.dragX, state.tiltY * .55 + state.dragY);
    gl.uniformMatrix3fv(u.tilt, false, orbitTilt);
    const [lx, ly, lz] = LIGHT;
    gl.uniform3f(u.light,
      lx * orbitTilt[0] + ly * orbitTilt[3] + lz * orbitTilt[6],
      lx * orbitTilt[1] + ly * orbitTilt[4] + lz * orbitTilt[7],
      lx * orbitTilt[2] + ly * orbitTilt[5] + lz * orbitTilt[8]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    state.dirty = false;
  };

  const adaptQuality = (dt) => {
    state.sampled += 1;
    if (dt > 26) state.slowFrames += 1;
    if (state.sampled < 45) return;
    if (state.slowFrames > 22 && state.quality > MIN_QUALITY) {
      state.quality = Math.max(MIN_QUALITY, state.quality * .8);
      resize();
    }
    state.sampled = 0;
    state.slowFrames = 0;
  };

  const approach = (value, target, rate, dt) => {
    const next = value + (target - value) * (1 - Math.exp(-rate * dt));
    return Math.abs(target - next) < .0015 ? target : next;
  };

  const needsFrame = () => {
    if (!state.ready || !state.visible || document.hidden) return false;
    if (!reduceMotionQuery.matches) return true;
    return state.dirty || state.dragging || Math.abs(state.spin) > .002 || Math.abs(state.pitchVel) > .002;
  };

  const schedule = () => {
    if (!state.raf && needsFrame()) state.raf = requestAnimationFrame(frame);
  };

  const frame = (now) => {
    state.raf = 0;
    if (!needsFrame()) return;
    const ms = state.last ? Math.min(now - state.last, 100) : 16;
    const dt = ms / 1000;
    state.last = now;
    const reduced = reduceMotionQuery.matches;

    if (reduced) {
      state.morph = state.morphTarget;
      state.warm = state.warmTarget;
    } else {
      state.time += dt;
      state.morph = approach(state.morph, state.morphTarget, 2.6, dt);
      state.warm = approach(state.warm, state.warmTarget, 2.6, dt);
      state.tiltX = approach(state.tiltX, state.tiltTargetX, 4, dt);
      state.tiltY = approach(state.tiltY, state.tiltTargetY, 4, dt);
      if (!state.dragging) {
        state.yaw += dt * .055;
        state.dragX = approach(state.dragX, 0, 1.5, dt);   /* orbits ease back after a drag */
        state.dragY = approach(state.dragY, 0, 1.5, dt);
      }
    }
    if (!state.dragging) {
      state.yaw += state.spin * dt;
      state.pitch = Math.max(-.7, Math.min(.7, state.pitch + state.pitchVel * dt));
      const friction = Math.exp(-3.2 * dt);
      state.spin *= friction;
      state.pitchVel *= friction;
    }

    draw();
    if (!reduced) adaptQuality(ms);
    schedule();
  };

  const wake = () => {
    state.dirty = true;
    state.last = 0;
    schedule();
  };

  /* ── Interaction ── */
  window.addEventListener('themechange', () => {
    const next = themeTargets();
    state.morphTarget = next.morph;
    state.warmTarget = next.warm;
    wake();
  });

  window.addEventListener('pointermove', (event) => {
    if (!finePointerQuery.matches || state.dragging || reduceMotionQuery.matches) return;
    state.tiltTargetX = (event.clientX / window.innerWidth - .5) * .34;
    state.tiltTargetY = (event.clientY / window.innerHeight - .5) * .2;
  }, { passive: true });

  host.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    state.dragging = true;
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;
    state.spin = 0;
    state.pitchVel = 0;
    host.setPointerCapture(event.pointerId);
    host.classList.add('is-dragging');
    wake();
  });

  host.addEventListener('pointermove', (event) => {
    if (!state.dragging) return;
    const scale = 3.2 / Math.max(host.clientWidth, 1);
    const dx = (event.clientX - state.pointerX) * scale;
    const dy = (event.clientY - state.pointerY) * scale;
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;
    state.yaw += dx;
    state.pitch = Math.max(-.7, Math.min(.7, state.pitch + dy));
    state.dragX = Math.max(-.75, Math.min(.75, state.dragX + dx * .6));
    state.dragY = Math.max(-.6, Math.min(.6, state.dragY + dy * .6));
    state.spin = dx * 26;
    state.pitchVel = dy * 26;
    state.lastMove = event.timeStamp;
    state.dirty = true;
    schedule();
  });

  const endDrag = (event) => {
    if (!state.dragging) return;
    state.dragging = false;
    if (event.timeStamp - state.lastMove > 90) {  /* held still before letting go: no throw */
      state.spin = 0;
      state.pitchVel = 0;
    }
    host.classList.remove('is-dragging');
    schedule();
  };
  host.addEventListener('pointerup', endDrag);
  host.addEventListener('pointercancel', endDrag);

  document.addEventListener('visibilitychange', wake);
  reduceMotionQuery.addEventListener('change', wake);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      if (state.visible) wake();
    }, { rootMargin: '120px' }).observe(art);
  }
  if ('ResizeObserver' in window) {
    new ResizeObserver(() => { resize(); wake(); }).observe(host);
  } else {
    window.addEventListener('resize', () => { resize(); wake(); }, { passive: true });
  }

  canvas.addEventListener('webglcontextlost', () => {
    cancelAnimationFrame(state.raf);
    state.ready = false;
    art.classList.remove('orb-ready', 'orb-live');
    canvas.remove();
  });

  /* ── Start: fade the 3D body in over the CSS one ── */
  host.appendChild(canvas);
  resize();
  requestAnimationFrame(() => {
    state.ready = true;
    state.time = 12;
    draw();
    art.classList.add('orb-ready');
    window.setTimeout(() => art.classList.add('orb-live'), 900);
    wake();
  });
})();
