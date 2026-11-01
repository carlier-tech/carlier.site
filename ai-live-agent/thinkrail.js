/* Shared behaviour for the AI Live Agent ThinkRail-style pages. */
(function () {
  var root = document.documentElement;

  /* Theme: dark is the default; an explicit choice is remembered. */
  var toggle = document.getElementById('theme-toggle');
  try {
    var saved = localStorage.getItem('ala-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function syncLabel() {
    if (!toggle) return;
    toggle.setAttribute(
      'aria-label',
      root.getAttribute('data-theme') === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
    );
  }
  syncLabel();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ala-theme', next); } catch (e) {}
      syncLabel();
    });
  }

  /* Mobile right-rail drawer. */
  var navToggle = document.getElementById('nav-toggle');
  var rail = document.getElementById('rail-right');
  var backdrop = document.getElementById('rail-backdrop');

  function closeRail() {
    if (rail) rail.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && rail) {
    navToggle.addEventListener('click', function () {
      var open = rail.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeRail);
  if (rail) {
    rail.addEventListener('click', function (ev) {
      if (ev.target.closest('a') && window.matchMedia('(max-width: 1180px)').matches) closeRail();
    });
  }

  /* Dismiss the rails note. */
  var dismiss = document.getElementById('rail-note-dismiss');
  if (dismiss) {
    dismiss.addEventListener('click', function () {
      var note = dismiss.closest('.rail-note');
      if (note) note.style.display = 'none';
    });
  }

  /* Copy buttons. */
  document.querySelectorAll('.copy-btn[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy');
      var done = function () {
        btn.classList.add('copied');
        setTimeout(function () { btn.classList.remove('copied'); }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else {
        done();
      }
    });
  });

  /* Highlight the outline row for the section in view. */
  var editor = document.getElementById('editor-scroll');
  var rows = Array.prototype.slice.call(document.querySelectorAll('.filetree .ft-row'));
  if (editor && 'IntersectionObserver' in window && rows.length) {
    var map = {};
    rows.forEach(function (row) {
      var href = row.getAttribute('href') || '';
      if (href.charAt(0) !== '#') return;
      var section = document.getElementById(href.slice(1));
      if (section) map[href.slice(1)] = row;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var row = map[entry.target.id];
        if (!row) return;
        rows.forEach(function (r) { r.classList.remove('active'); });
        row.classList.add('active');
      });
    }, { root: editor, rootMargin: '-12% 0px -72% 0px', threshold: 0 });
    Object.keys(map).forEach(function (id) { observer.observe(document.getElementById(id)); });
  }
})();
