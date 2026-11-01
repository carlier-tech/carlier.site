/* Carlier — legal pages shell behaviour */
(() => {
    "use strict";

    const root = document.documentElement;
    const THEME_KEY = "carlier-legal-theme";

    /* ---------- Theme ---------- */

    const themeToggle = document.getElementById("theme-toggle");
    const themeColor = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
        root.dataset.theme = theme;
        if (themeColor) {
            themeColor.setAttribute("content", theme === "light" ? "#f2f3f5" : "#171719");
        }
        if (themeToggle) {
            const next = theme === "light" ? "dark" : "light";
            themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
            themeToggle.setAttribute("aria-pressed", String(theme === "light"));
        }
    }

    applyTheme(root.dataset.theme === "light" ? "light" : "dark");

    themeToggle?.addEventListener("click", () => {
        const next = root.dataset.theme === "light" ? "dark" : "light";
        applyTheme(next);
        try {
            localStorage.setItem(THEME_KEY, next);
        } catch {}
    });

    /* ---------- Right rail drawer (small screens) ---------- */

    const rail = document.getElementById("rail-right");
    const navToggle = document.getElementById("nav-toggle");
    const backdrop = document.getElementById("rail-backdrop");

    function setRail(open) {
        if (!rail || !navToggle) return;
        rail.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
        if (backdrop) backdrop.hidden = !open;
        document.body.style.overflow = open ? "hidden" : "";
    }

    navToggle?.addEventListener("click", () => {
        setRail(!rail?.classList.contains("open"));
    });

    backdrop?.addEventListener("click", () => setRail(false));

    document.getElementById("rail-close")?.addEventListener("click", () => setRail(false));

    rail?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setRail(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setRail(false);
    });

    /* ---------- Rail note ---------- */

    const note = document.getElementById("rail-note");
    const noteDismiss = document.getElementById("rail-note-dismiss");

    noteDismiss?.addEventListener("click", () => {
        if (note) note.hidden = true;
    });

    /* ---------- Copy buttons ---------- */

    document.querySelectorAll("[data-copy]").forEach((button) => {
        button.addEventListener("click", async () => {
            const value = button.getAttribute("data-copy");
            if (!value) return;
            try {
                await navigator.clipboard.writeText(value);
                button.classList.add("copied");
                window.setTimeout(() => button.classList.remove("copied"), 1600);
            } catch {}
        });
    });
})();
