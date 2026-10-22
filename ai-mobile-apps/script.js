// ============================================================
// AI Mobile Apps — compatibility layer
// ============================================================

(function () {
    const fallbackTranslations = {
        en: {
            skipToMain: 'Skip to main content',
            nav: { home: 'Home', about: 'About', skills: 'Skills', aiApps: 'Mobile Apps', cta: 'Technical Capabilities' },
            hero: {
                eyebrow: 'Technical Solutions',
                title: 'Mobile Applications',
                subtitle: 'Mobile applications for language learning and identification.'
            },
            grid: { tag: 'Applications', title: 'Available Applications' },
            apps: {
                getOnPlay: 'Get on Google Play',
                tagMobile: 'Mobile App',
                tagAiTutor: 'AI Tutor',
                tagAiScanner: 'AI Scanner',
                tagFeatured: 'Latest',
                vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrainian', desc: 'Learn Ukrainian, practice real conversations, and translate in real time with a live AI Ukrainian teacher.', chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Instant Translation', chip4: 'Flutter' },
                lousi: { title: 'AI Agent Lousi', tag: 'Cantonese', desc: 'Learn Cantonese, practice real conversations, and translate in real time with a live AI Cantonese teacher.', chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Cantonese', chip4: 'Flutter' },
                laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Learn Mandarin, practice real conversations, and translate in real time with a live AI Mandarin teacher.', chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Mandarin', chip4: 'Flutter' },
                khru: { title: 'AI Agent Khru', tag: 'Thai', desc: 'Learn Thai, practice real conversations, and translate in real time with a live AI Thai teacher.', chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Thai', chip4: 'Flutter' },
                coin: { title: 'Coin Identifier', tag: 'AI Scanner', desc: 'AI-powered coin scanner app for collectors.', chip1: 'AI Vision', chip2: 'Coin Valuation', chip3: 'Rarity Check', chip4: 'Collection Catalog', chip5: 'Flutter' }
            },
            cta: {
                title: 'Carlier Tech',
                text: 'We develop AI-native mobile applications from specification to App Store and Google Play deployment.',
                btnPrimary: 'Get in Touch',
                btnSecondary: 'Back to Home'
            },
            footer: {
                tagline: 'Engineering scalable technical solutions.',
                home: 'Home', about: 'About', skills: 'Skills', aiApps: 'AI Apps', contact: 'Contact',
                chinese: 'Learn Chinese AI App', cantonese: 'Learn Cantonese AI App', coin: 'Coin Identifier',
                copyright: '© 2026 Carlier. All rights reserved.',
                crafted: 'Crafted with passion'
            }
        },
        fr: {
            skipToMain: 'Aller au contenu principal',
            nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', aiApps: 'Apps IA', cta: 'Discutons' },
            hero: { eyebrow: 'Applications Mobiles', title: 'Applications Mobiles', subtitle: 'Des applications mobiles pour l’apprentissage des langues et l’identification.' },
            grid: { tag: 'Toutes les Apps', title: 'Parcourir la Collection' },
            apps: {
                getOnPlay: 'Obtenir sur Google Play',
                tagMobile: 'App Mobile', tagAiTutor: 'Tuteur IA', tagAiScanner: 'Scanner IA', tagFeatured: 'Dernier',
                vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrainien', desc: 'Apprenez l’ukrainien avec un tuteur IA en direct.', chip1: 'Chat Vocal', chip2: 'Contexte Caméra', chip3: 'Traduction', chip4: 'Flutter' },
                lousi: { title: 'AI Agent Lousi', tag: 'Cantonais', desc: 'Apprenez le cantonais avec un tuteur IA en direct.', chip1: 'Chat Vocal', chip2: 'Contexte Caméra', chip3: 'Cantonais', chip4: 'Flutter' },
                laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Apprenez le mandarin avec un tuteur IA en direct.', chip1: 'Chat Vocal', chip2: 'Contexte Caméra', chip3: 'Mandarin', chip4: 'Flutter' },
                khru: { title: 'AI Agent Khru', tag: 'Thaï', desc: 'Apprenez le thaï avec un tuteur IA en direct.', chip1: 'Chat Vocal', chip2: 'Contexte Caméra', chip3: 'Thaï', chip4: 'Flutter' },
                coin: { title: 'Coin Identifier', tag: 'Scanner IA', desc: 'Application de scan de pièces alimentée par l’IA.', chip1: 'Vision IA', chip2: 'Valorisation', chip3: 'Rareté', chip4: 'Catalogue', chip5: 'Flutter' }
            },
            cta: { title: 'Une idée d’app ?', text: 'Nous concevons des applications mobiles IA du concept au store.', btnPrimary: 'Nous contacter', btnSecondary: 'Retour à l’accueil' },
            footer: { tagline: 'Construire des produits qui font la différence.', home: 'Accueil', about: 'À propos', skills: 'Compétences', aiApps: 'Apps IA', contact: 'Contact', chinese: 'Apprendre le Chinois AI App', cantonese: 'Apprendre le Cantonais AI App', coin: 'Coin Identifier', copyright: '© 2026 Carlier. Tous droits réservés.', crafted: 'Créé avec passion' }
        },
        de: {
            skipToMain: 'Zum Hauptinhalt springen',
            nav: { home: 'Startseite', about: 'Über', skills: 'Fähigkeiten', aiApps: 'KI Apps', cta: 'Lass uns sprechen' },
            hero: { eyebrow: 'Mobile Apps', title: 'Mobile Anwendungen', subtitle: 'Mobile Anwendungen für Sprachenlernen und Identifikation.' },
            grid: { tag: 'Alle Apps', title: 'Die Kollektion entdecken' },
            apps: {
                getOnPlay: 'Bei Google Play herunterladen', tagMobile: 'Mobile App', tagAiTutor: 'KI-Tutor', tagAiScanner: 'KI-Scanner', tagFeatured: 'Neueste',
                vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrainisch', desc: 'Lernen Sie Ukrainisch mit einem live KI-Lehrer.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Übersetzung', chip4: 'Flutter' },
                lousi: { title: 'AI Agent Lousi', tag: 'Kantonesisch', desc: 'Lernen Sie Kantonesisch mit einem live KI-Lehrer.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Kantonesisch', chip4: 'Flutter' },
                laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Lernen Sie Mandarin mit einem live KI-Lehrer.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Mandarin', chip4: 'Flutter' },
                khru: { title: 'AI Agent Khru', tag: 'Thai', desc: 'Lernen Sie Thai mit einem live KI-Lehrer.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Thai', chip4: 'Flutter' },
                coin: { title: 'Coin Identifier', tag: 'KI-Scanner', desc: 'KI-gestützte Münzscanner-App für Sammler.', chip1: 'KI-Sicht', chip2: 'Wertschätzung', chip3: 'Seltenheit', chip4: 'Sammlungs-Katalog', chip5: 'Flutter' }
            },
            cta: { title: 'App-Idee?', text: 'Wir entwickeln AI-native mobile Apps vom Konzept bis zum Store.', btnPrimary: 'Kontakt aufnehmen', btnSecondary: 'Zurück zur Startseite' },
            footer: { tagline: 'Produkte bauen, die einen Unterschied machen.', home: 'Startseite', about: 'Über', skills: 'Fähigkeiten', aiApps: 'KI Apps', contact: 'Kontakt', chinese: 'Chinesisch lernen AI App', cantonese: 'Kantonesisch lernen AI App', coin: 'Coin Identifier', copyright: '© 2026 Carlier. Alle Rechte vorbehalten.', crafted: 'Mit Leidenschaft erstellt' }
        },
        es: {
            skipToMain: 'Saltar al contenido principal',
            nav: { home: 'Inicio', about: 'Sobre', skills: 'Habilidades', aiApps: 'Apps IA', cta: 'Hablemos' },
            hero: { eyebrow: 'Apps Móviles', title: 'Aplicaciones Móviles', subtitle: 'Aplicaciones móviles para aprender idiomas e identificación.' },
            grid: { tag: 'Todas las Apps', title: 'Explorar la Colección' },
            apps: {
                getOnPlay: 'Obtener en Google Play', tagMobile: 'App Móvil', tagAiTutor: 'Tutor IA', tagAiScanner: 'Escáner IA', tagFeatured: 'Nuevo',
                vchytel: { title: 'AI Agent Vchytel', tag: 'Ucraniano', desc: 'Aprende ucraniano con un tutor IA en directo.', chip1: 'Chat de voz', chip2: 'Contexto cámara', chip3: 'Traducción', chip4: 'Flutter' },
                lousi: { title: 'AI Agent Lousi', tag: 'Cantonés', desc: 'Aprende cantonés con un tutor IA en directo.', chip1: 'Chat de voz', chip2: 'Contexto cámara', chip3: 'Cantonés', chip4: 'Flutter' },
                laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarín', desc: 'Aprende mandarín con un tutor IA en directo.', chip1: 'Chat de voz', chip2: 'Contexto cámara', chip3: 'Mandarín', chip4: 'Flutter' },
                khru: { title: 'AI Agent Khru', tag: 'Tailandés', desc: 'Aprende tailandés con un tutor IA en directo.', chip1: 'Chat de voz', chip2: 'Contexto cámara', chip3: 'Tailandés', chip4: 'Flutter' },
                coin: { title: 'Coin Identifier', tag: 'Escáner IA', desc: 'Aplicación para coleccionistas con IA.', chip1: 'Visión IA', chip2: 'Valoración', chip3: 'Rareza', chip4: 'Catálogo', chip5: 'Flutter' }
            },
            cta: { title: '¿Tienes una idea?', text: 'Diseñamos apps móviles IA del concepto al store.', btnPrimary: 'Contáctanos', btnSecondary: 'Volver al inicio' },
            footer: { tagline: 'Construimos productos que marcan la diferencia.', home: 'Inicio', about: 'Sobre', skills: 'Habilidades', aiApps: 'Apps IA', contact: 'Contacto', chinese: 'Aprender chino AI App', cantonese: 'Aprender cantonés AI App', coin: 'Coin Identifier', copyright: '© 2026 Carlier. Todos los derechos reservados.', crafted: 'Creado con pasión' }
        }
    };

    const appTranslations = (typeof window !== 'undefined' && window.translations) ? window.translations : fallbackTranslations;
    const langLabels = {
        en: 'EN', fr: 'FR', de: 'DE', es: 'ES', pt: 'PT', it: 'IT',
        uk: 'UK', ru: 'RU', th: 'TH', 'zh-TW': '繁中', 'zh-CN': '简中',
        hi: 'HI', ja: 'JA', ko: 'KO', ar: 'AR', pl: 'PL'
    };
    const rtlLangs = new Set(['ar']);

    function getStoredLanguage() {
        const params = new URLSearchParams(window.location.search);
        const qLang = params.get('lang');
        if (qLang && appTranslations[qLang]) return qLang;
        const stored = localStorage.getItem('preferred-language');
        return (stored && appTranslations[stored]) ? stored : 'en';
    }

    function setStoredLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    function applyTranslations(lang) {
        const t = appTranslations[lang] || appTranslations.en;
        if (!t) return;

        document.documentElement.dir = rtlLangs.has(lang) ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        const setText = (sel, value) => {
            const el = document.querySelector(sel);
            if (el && value !== undefined) el.textContent = value;
        };
        const setAll = (sel, value) => {
            document.querySelectorAll(sel).forEach(el => {
                if (value !== undefined) el.textContent = value;
            });
        };

        setText('.skip-link', t.skipToMain);
        setText('[data-i18n="nav.home"]', t.nav.home);
        setText('[data-i18n="nav.about"]', t.nav.about);
        setText('[data-i18n="nav.skills"]', t.nav.skills);
        setText('[data-i18n="nav.aiApps"]', t.nav.aiApps);
        setText('[data-i18n="nav.cta"]', t.nav.cta);
        setText('[data-i18n="hero.eyebrow"]', t.hero.eyebrow);
        setText('[data-i18n="hero.title"]', t.hero.title);
        setText('[data-i18n="hero.subtitle"]', t.hero.subtitle);
        setText('[data-i18n="grid.tag"]', t.grid.tag);
        setText('[data-i18n="grid.title"]', t.grid.title);
        setAll('[data-i18n="apps.getOnPlay"]', t.apps.getOnPlay);

        const appKeys = ['vchytel', 'lousi', 'laoshi', 'khru', 'coin'];
        appKeys.forEach(key => {
            const a = t.apps[key];
            if (!a) return;
            setText(`[data-i18n="apps.${key}.title"]`, a.title);
            setText(`[data-i18n="apps.${key}.tag"]`, a.tag);
            setText(`[data-i18n="apps.${key}.desc"]`, a.desc);
            ['chip1', 'chip2', 'chip3', 'chip4', 'chip5'].forEach(chip => {
                if (a[chip] !== undefined) setText(`[data-i18n="apps.${key}.${chip}"]`, a[chip]);
            });
        });

        setAll('[data-i18n="apps.tagMobile"]', t.apps.tagMobile);
        setAll('[data-i18n="apps.tagAiTutor"]', t.apps.tagAiTutor);
        setAll('[data-i18n="apps.tagAiScanner"]', t.apps.tagAiScanner);
        setAll('[data-i18n="apps.tagFeatured"]', t.apps.tagFeatured);

        setText('[data-i18n="cta.title"]', t.cta.title);
        setText('[data-i18n="cta.text"]', t.cta.text);
        setText('[data-i18n="cta.btnPrimary"]', t.cta.btnPrimary);
        setText('[data-i18n="cta.btnSecondary"]', t.cta.btnSecondary);

        setText('[data-i18n="footer.tagline"]', t.footer.tagline);
        setText('[data-i18n="footer.home"]', t.footer.home);
        setText('[data-i18n="footer.about"]', t.footer.about);
        setText('[data-i18n="footer.skills"]', t.footer.skills);
        setText('[data-i18n="footer.aiApps"]', t.footer.aiApps);
        setText('[data-i18n="footer.contact"]', t.footer.contact);
        setText('[data-i18n="footer.chinese"]', t.footer.chinese);
        setText('[data-i18n="footer.cantonese"]', t.footer.cantonese);
        setText('[data-i18n="footer.coin"]', t.footer.coin);
        setText('[data-i18n="footer.copyright"]', t.footer.copyright);
        setText('[data-i18n="footer.crafted"]', t.footer.crafted);

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        const currentLangEl = document.querySelector('.current-lang');
        if (currentLangEl) currentLangEl.textContent = langLabels[lang] || lang.toUpperCase();
    }

    function initLanguageSwitcher() {
        const switcher = document.querySelector('.language-switcher');
        const toggle = document.querySelector('.lang-toggle');
        if (!switcher || !toggle) return;

        toggle.addEventListener('click', e => {
            e.stopPropagation();
            switcher.classList.toggle('active');
        });

        document.addEventListener('click', () => switcher.classList.remove('active'));

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                setStoredLanguage(lang);
                applyTranslations(lang);
                switcher.classList.remove('active');
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const lang = getStoredLanguage();
        applyTranslations(lang);
        initLanguageSwitcher();

        const nav = document.querySelector('.nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                nav.classList.toggle('scrolled', window.scrollY > 50);
            }, { passive: true });
        }

        const navToggleBtn = document.getElementById('nav-toggle-btn');
        const navMenu = document.getElementById('nav-menu');
        if (navToggleBtn && navMenu) {
            navToggleBtn.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('active');
                navToggleBtn.classList.toggle('active', isOpen);
                navToggleBtn.setAttribute('aria-expanded', String(isOpen));
            });

            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggleBtn.classList.remove('active');
                    navToggleBtn.setAttribute('aria-expanded', 'false');
                });
            });

            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggleBtn.classList.remove('active');
                    navToggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            revealEls.forEach(el => io.observe(el));
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.gradient-orb').forEach(o => o.style.animation = 'none');
        }
    });
})();
