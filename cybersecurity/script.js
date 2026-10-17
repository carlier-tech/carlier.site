/* =========================================================
   CARLIER SECURITY TEAM — interactions
   ========================================================= */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================
     1. MATRIX RAIN BACKDROP
     ======================================================= */
  (function matrixRain() {
    const canvas = $('#matrix');
    if (!canvas || reduced) return;

    const ctx = canvas.getContext('2d');
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\{}[]$#@%&*+='.split('');
    const fontSize = 15;
    let columns, drops;

    function size() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -60);
    }

    function draw() {
      ctx.fillStyle = 'rgba(5, 6, 10, 0.09)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px "Share Tech Mono", monospace';

      for (let i = 0; i < drops.length; i++) {
        const ch = glyphs[(Math.random() * glyphs.length) | 0];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.985 ? '#ff2e88' : '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fillText(ch, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.9;
      }
      requestAnimationFrame(draw);
    }

    size();
    window.addEventListener('resize', size);
    draw();
  })();

  /* =======================================================
     2. CURSOR GLOW
     ======================================================= */
  (function cursorGlow() {
    const glow = $('#cursorGlow');
    if (!glow || reduced) return;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, cx = tx, cy = ty;

    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });

    (function loop() {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      glow.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
  })();

  /* =======================================================
     3. NAV — sticky state, mobile toggle, active link
     ======================================================= */
  (function nav() {
    const bar = $('#nav');
    const toggle = $('#navToggle');
    const links = $('#navLinks');

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    $$('#navLinks a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );

    const onScroll = () => bar.classList.toggle('stuck', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const ids = ['home', 'services', 'about', 'contact'];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        $$('#navLinks a').forEach((a) => {
          const active = a.getAttribute('href') === '#' + en.target.id;
          a.style.color = active ? 'var(--cyan)' : '';
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    ids.forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  })();

  /* =======================================================
     4. LIVE TERMINAL
     ======================================================= */
  (function terminal() {
    const body = $('#termBody');
    if (!body) return;

    const LINES = [
      ['dim',   '$ cst --scan --target 10.0.0.0/8 --depth 4'],
      ['prompt', '[*] Initializing Carlier Defense Grid...'],
      ['ok',    '[+] Nodes online ............ 42/42'],
      ['warn',  '[!] Signature DB outdating... resyncing'],
      ['ok',    '[+] Threat intel feed ...... LIVE'],
      ['bad',   '[-] INTRUSION 203.0.113.44 : 443 BLOCKED'],
      ['prompt','[*] Running heuristic sweep...'],
      ['ok',    '[+] 1,204 anomalies classified'],
      ['dim',   '    lateral-movement ......... none'],
      ['dim',   '    c2-beacon ................ none'],
      ['bad',   '[-] Credential stuffing wave neutralized'],
      ['ok',    '[+] Perimeter hardened ...... 100%'],
      ['prompt', '[*] Root privileges ............ granted'],
      ['ok',    '[+] ALL SYSTEMS NOMINAL — watching'],
      ['', '']
    ];

    let i = 0;
    let node = null;

    function push(cls, text) {
      const span = document.createElement('span');
      span.className = 'ln' + (cls ? ' ' + cls : '');
      span.textContent = text;
      body.appendChild(span);
      while (body.children.length > 17) body.removeChild(body.firstChild);
      return span;
    }

    function typeLine(cls, text, done) {
      const span = push(cls, '');
      let i2 = 0;
      const caret = document.createElement('i');
      caret.className = 'caret';
      span.appendChild(caret);

      (function step() {
        if (i2 <= text.length) {
          caret.remove();
          span.textContent = text.slice(0, i2);
          span.appendChild(caret);
          i2++;
          setTimeout(step, 14 + Math.random() * 16);
        } else {
          caret.remove();
          done && done();
        }
      })();
    }

    function next() {
      if (i >= LINES.length) {
        // idle: random ambient log, keeps the panel alive
        const pool = [
          ['ok',    '[+] Integrity scan ...... 0 anomalies'],
          ['dim',   '    firewall ruleset ..... synced'],
          ['warn',  '[*] New CVE fingerprint: CVE-20XX-4417'],
          ['ok',    '[+] Patched / mitigated in 0.4s'],
          ['bad',   '[-] Botnet C2 ....... severed'],
          ['dim',   '    tls sessions ........ 1,088 active']
        ];
        const [cls, text] = pool[(Math.random() * pool.length) | 0];
        typeLine(cls, text, () => setTimeout(next, 2600));
        return;
      }
      const [cls, text] = LINES[i++];
      if (!text) { next(); return; }
      typeLine(cls, text, () => setTimeout(next, 380));
    }

    if (reduced) {
      LINES.forEach(([c, t]) => { if (t) push(c, t); });
    } else {
      setTimeout(next, 700);
    }
  })();

  /* =======================================================
     5. TICKER — duplicate track for seamless loop
     ======================================================= */
  (function ticker() {
    const track = $('#tickerTrack');
    if (!track || reduced) return;
    track.innerHTML += track.innerHTML;
  })();

  /* =======================================================
     6. COUNTERS
     ======================================================= */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1900;
    const start = performance.now();

    function frame(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent =
        (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString('en-US')) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* =======================================================
     7. REVEAL ON SCROLL
     ======================================================= */
  (function reveal() {
    const items = $$('.reveal, .stat');
    const stats = $$('.stat');
    let counted = new Set();

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -60px 0px' });

    items.forEach((el) => io.observe(el));

    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting || counted.has(en.target)) return;
        counted.add(en.target);
        animateCount(en.target);
        counterIO.unobserve(en.target);
      });
    }, { threshold: 0.5 });

    stats.forEach((el) => {
      const num = $('.stat-num', el);
      if (num) counterIO.observe(num);
    });
  })();

  /* =======================================================
     8. CONTACT FORM  — validation + real delivery
     =======================================================

     HOW TO RECEIVE MESSAGES FOR REAL
     ---------------------------------
     A static page has no server, so it cannot email by itself.
     Set an endpoint below and the form POSTs to it:

       1) Formspree (free, 2 min)
          https://formspree.io/f/xxxxxx  ->  endpoint: 'https://formspree.io/f/xxxxxx'
       2) Web3Forms (free, no signup)
          https://api.web3forms.com/submit  + accessKey  ->  endpoint + accessKey below
       3) Your own API / serverless function
          endpoint: 'https://your-domain.com/api/contact'

     Leave endpoint empty and the form falls back to opening the
     visitor's mail client with everything pre-filled, plus a
     copy-to-clipboard button.
     ======================================================= */
  const CONTACT_CONFIG = {
    endpoint: '',   // e.g. 'https://formspree.io/f/xxxxxx'
    accessKey: '',  // only for Web3Forms
    email: 'soc@carliersecurity.io',
    company: 'Carlier Security Team',
    successMsg: 'MESSAGE TRANSMITTED — SECURE CHANNEL CONFIRMED. WE REPLY WITHIN 24H.'
  };

  (function contactForm() {
    const form = $('#contactForm');
    if (!form) return;

    const status = $('#formStatus');
    const btn = $('#submitBtn');
    const btnLabel = $('span', btn);
    const counter = $('#msgCounter');
    const message = $('#message');
    const honeypot = $('#company_website');
    const BTN_IDLE = btnLabel.textContent;

    /* ---------- validation rules ---------- */
    const RULES = {
      name:    (v) => v.trim().length >= 2,
      email:   (v) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.trim()),
      phone:   (v) => v.trim() === '' || /^[+()\-\s\d]{6,20}$/.test(v.trim()),
      org:     (v) => v.trim().length >= 2,
      service: (v) => v !== '',
      message: (v) => v.trim().length >= 10 && v.trim().length <= 1200
    };

    const fields = $$('input[name], select[name], textarea[name]', form)
      .filter((el) => el.name !== 'company_website');

    const fieldOf = (el) => el.closest('.field');

    function setStatus(text, kind) {
      status.textContent = text || '';
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }

    function validate(el, paint) {
      const rule = RULES[el.name];
      const field = fieldOf(el);
      if (!rule || !field) return true;

      const ok = rule(el.value);

      if (paint) {
        field.classList.toggle('invalid', !ok);
        field.classList.toggle('valid', ok);
        el.setAttribute('aria-invalid', String(!ok));
      } else if (!ok) {
        field.classList.remove('valid');
      }
      return ok;
    }

    /* live feedback while typing */
    fields.forEach((el) => {
      el.addEventListener('blur',  () => { if (el.value.trim()) validate(el, true); });
      el.addEventListener('input', () => {
        if (fieldOf(el).classList.contains('invalid')) validate(el, true);
      });
      el.addEventListener('change', () => validate(el, true));
    });

    /* character counter */
    if (message && counter) {
      const max = 1200;
      message.setAttribute('maxlength', max);
      const upd = () => {
        const n = message.value.length;
        counter.textContent = n + ' / ' + max;
        counter.classList.toggle('warn', n > max * 0.9);
      };
      message.addEventListener('input', upd);
      upd();
    }

    /* ---------- helpers ---------- */
    function busy(on, label) {
      btn.disabled = on;
      btn.classList.toggle('is-loading', on);
      btnLabel.textContent = on ? label : BTN_IDLE;
    }

    function reset() {
      form.reset();
      $$('.field', form).forEach((f) => f.classList.remove('valid', 'invalid'));
      if (counter) counter.textContent = '0 / 1200';
      busy(false);
      btn.classList.remove('is-sent');
    }

    function buildBody(data) {
      return 'Name: ' + data.name +
             '\nEmail: ' + data.email +
             '\nPhone: ' + (data.phone || '—') +
             '\nOrganization: ' + (data.org || '—') +
             '\nService: ' + data.service +
             '\n\nMessage:\n' + data.message;
    }

    function mailtoFallback(data) {
      const href = 'mailto:' + CONTACT_CONFIG.email +
        '?subject=' + encodeURIComponent('New enquiry — ' + data.service) +
        '&body=' + encodeURIComponent(buildBody(data));
      window.location.href = href;
    }

    async function copyFallback(data) {
      const text = buildBody(data);
      try {
        await navigator.clipboard.writeText(text);
        setStatus('MESSAGE COPIED TO CLIPBOARD — PASTE IT INTO AN EMAIL TO ' +
                  CONTACT_CONFIG.email, 'sent');
      } catch (err) {
        setStatus('COPY BLOCKED BY BROWSER. EMAIL US DIRECTLY AT ' + CONTACT_CONFIG.email, 'error');
      }
    }

    /* ---------- submit ---------- */
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      /* bot check: honeypot filled = pretend success, send nothing */
      if (honeypot && honeypot.value.trim() !== '') {
        reset();
        return;
      }

      let ok = true;
      let firstBad = null;
      fields.forEach((el) => {
        if (!validate(el, true) && !firstBad) firstBad = el;
      });
      ok = !firstBad;

      if (!ok) {
        setStatus('TRANSMISSION ABORTED — CHECK THE HIGHLIGHTED FIELDS', 'error');
        firstBad.focus();
        firstBad.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
        return;
      }

      const data = Object.fromEntries(fields.map((el) => [el.name, el.value.trim()]));

      busy(true, 'ENCRYPTING...');
      setStatus('ESTABLISHING SECURE CHANNEL...', 'pending');

      /* ---------- path A: real endpoint configured ---------- */
      if (CONTACT_CONFIG.endpoint) {
        try {
          const payload = Object.assign({}, data, {
            _subject: 'New website enquiry — ' + data.service,
            _reply_to: data.email
          });
          if (CONTACT_CONFIG.accessKey) payload.access_key = CONTACT_CONFIG.accessKey;

          const res = await fetch(CONTACT_CONFIG.endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(payload)
          });

          if (!res.ok) throw new Error('HTTP ' + res.status);

          reset();
          btn.classList.add('is-sent');
          btnLabel.textContent = 'TRANSMIT AGAIN';
          setStatus(CONTACT_CONFIG.successMsg, 'sent');
          return;

        } catch (err) {
          busy(false);
          setStatus('UPLINK FAILED (' + err.message +
                    ') — OPENING YOUR MAIL CLIENT INSTEAD.', 'error');
          mailtoFallback(data);
          return;
        }
      }

      /* ---------- path B: no endpoint — mail client fallback ---------- */
      setTimeout(() => {
        reset();
        btn.classList.add('is-sent');
        btnLabel.textContent = 'SEND ANOTHER';
        setStatus(
          'NO DELIVERY ENDPOINT CONFIGURED — YOUR MAIL CLIENT SHOULD HAVE OPENED. ' +
          'IF NOT, USE THE BUTTONS BELOW.',
          'pending'
        );

        const wrap = document.createElement('div');
        wrap.className = 'fallback-actions';

        const mailBtn = document.createElement('button');
        mailBtn.type = 'button';
        mailBtn.className = 'btn btn-ghost';
        mailBtn.innerHTML = '<span>OPEN MAIL CLIENT</span>';
        mailBtn.addEventListener('click', () => mailtoFallback(data));

        const copyBtn = document.createElement('button');
        copyBtn.type = 'button';
        copyBtn.className = 'btn btn-ghost';
        copyBtn.innerHTML = '<span>COPY MESSAGE</span>';
        copyBtn.addEventListener('click', () => copyFallback(data));

        wrap.appendChild(mailBtn);
        wrap.appendChild(copyBtn);
        status.parentNode.insertBefore(wrap, status.nextSibling);

        // remove previous fallback buttons if the form is resubmitted
        $$('.fallback-actions', form).forEach((el) => {
          if (el !== wrap) el.remove();
        });

        mailtoFallback(data);
      }, 900);
    });
  })();

  /* =======================================================
     9. MISC
     ======================================================= */
  (function misc() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();

    $$('[data-scroll]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const target = $(btn.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      })
    );
  })();

})();