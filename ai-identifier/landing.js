/* AI Identifier — landing page interactions */
(() => {
  const root = document.documentElement;
  const THEME_KEY = "ai-identifier-theme";
  const NOTE_KEY = "ai-identifier-note-dismissed";

  /* ---------- theme ---------- */
  const themeToggle = document.getElementById("theme-toggle");

  function syncThemeLabel() {
    if (!themeToggle) return;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
  }

  syncThemeLabel();

  themeToggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    syncThemeLabel();
  });

  /* ---------- left rail note ---------- */
  const note = document.getElementById("rail-note");
  const noteDismiss = document.getElementById("rail-note-dismiss");

  try {
    if (localStorage.getItem(NOTE_KEY) === "1" && note) {
      note.classList.add("hidden");
    }
  } catch (e) {}

  noteDismiss?.addEventListener("click", () => {
    note?.classList.add("hidden");
    try {
      localStorage.setItem(NOTE_KEY, "1");
    } catch (e) {}
  });

  /* ---------- mobile file-tree drawer ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const railRight = document.getElementById("rail-right");
  const backdrop = document.getElementById("rail-backdrop");
  const desktopQuery = window.matchMedia("(min-width: 1181px)");

  function setDrawer(open) {
    if (!railRight || !navToggle || !backdrop) return;
    railRight.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close file tree" : "Open file tree");
    backdrop.hidden = !open;
    document.body.classList.toggle("drawer-open", open);
  }

  navToggle?.addEventListener("click", () => {
    setDrawer(!railRight?.classList.contains("open"));
  });

  backdrop?.addEventListener("click", () => setDrawer(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawer(false);
  });

  const closeDrawerOnDesktop = (event) => {
    if (event.matches) setDrawer(false);
  };

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", closeDrawerOnDesktop);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(closeDrawerOnDesktop);
  }

  /* Close the drawer after choosing a file or section on mobile. */
  railRight?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1180) setDrawer(false);
    });
  });

  /* ---------- terminal replay ---------- */
  const terminal = document.querySelector(".terminal");
  const replay = document.getElementById("term-replay");
  let replayTimer;

  replay?.addEventListener("click", () => {
    if (!terminal) return;
    terminal.classList.remove("replay");
    void terminal.offsetWidth;
    terminal.classList.add("replay");
    window.clearTimeout(replayTimer);
    replayTimer = window.setTimeout(() => terminal.classList.remove("replay"), 2300);
  });

  /* ---------- active section in tabs + file tree ---------- */
  const editor = document.getElementById("editor-scroll");
  const sections = editor ? [...editor.querySelectorAll("[data-section]")] : [];
  const treeLinks = [...document.querySelectorAll("[data-ft]")];
  const tabLinks = [...document.querySelectorAll("[data-tab]")];

  const tabForSection = {
    readme: "readme",
    why: "readme",
    how: "readme",
    scan: "scan",
    features: "scan",
    pricing: "pricing",
    faq: "faq",
    download: "faq"
  };

  function setActive(sectionId) {
    treeLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.ft === sectionId);
    });

    const tabId = tabForSection[sectionId] || "readme";
    tabLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.tab === tabId);
    });

    document.querySelectorAll(".rail-left [data-section]").forEach((link) => {
      link.classList.toggle("selected", link.dataset.section === sectionId);
    });
  }

  let ticking = false;

  function updateActive() {
    if (!editor || !sections.length) return;

    const line = editor.getBoundingClientRect().top + 90;
    let current = sections[0].dataset.section;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) {
        current = section.dataset.section;
      }
    }

    if (editor.scrollTop + editor.clientHeight >= editor.scrollHeight - 3) {
      current = sections[sections.length - 1].dataset.section;
    }

    setActive(current);
    ticking = false;
  }

  function requestActiveUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActive);
  }

  editor?.addEventListener("scroll", requestActiveUpdate, { passive: true });
  window.addEventListener("resize", requestActiveUpdate, { passive: true });
  window.addEventListener("hashchange", requestActiveUpdate);
  updateActive();

  /* ---------- keep tab clicks visually immediate ---------- */
  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      tabLinks.forEach((tab) => tab.classList.toggle("active", tab === link));
    });
  });
})();
