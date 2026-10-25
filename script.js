// ========================================
// Carlier - Landing Page Interactions
// ========================================

// ========================================
// Internationalization (i18n)
// ========================================

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Technical Stack',
            projects: 'Projects',
            productApps: 'Products and services',
            learnChinese: 'Learn Chinese App',
            learnCantonese: 'Learn Cantonese App',
            learnThai: 'Learn Thai App',
            coinIdentifier: 'Coin Identifier App'
        },
        hero: {
            title1: 'Software Engineering & Product Development',
            title2: '',
            subtitle1: 'Mobile, Web, AI, Cybersecurity, and Infrastructure Engineering',
            highlight1: '',
            subtitle2: '',
            highlight2: '',
            subtitle3: '',
            highlight3: '',
            subtitle4: '',
            subtitle5: '',
            recentReleases: 'Production Solutions'
        },
        about: {
            tag: 'Background',
            title: 'Technical Expertise',
            text1: "Software engineering expertise across Mobile, Web, AI Systems, Cybersecurity, and Infrastructure Engineering.",
            text2: "Delivering production-ready solutions across multiple platforms and technologies.",
            value1: { title: 'Engineering', desc: 'Production-grade implementations with scalability in mind' },
            value2: { title: 'Full-Stack', desc: 'Complete solutions from frontend to infrastructure' },
            value3: { title: 'Performance', desc: 'Optimized systems for reliability and efficiency' }
        },
        skills: {
            tag: 'Technical Stack',
            title: 'Technical Stack',
            mobile: 'Mobile',
            web: 'Web & SaaS',
            business: 'Business Software',
            design: 'Design & Product',
            ai: 'AI & Systems',
            infra: 'Infrastructure'
        },
        projects: {
            tag: 'Featured Work',
            title: "AI mobile Apps",
            view: 'Get the app',
            tags: {
                mobile: 'Mobile App',
                aiScanner: 'AI Scanner',
                aiTutor: 'AI Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'AI-powered coin scanner app for collectors. Instantly identify coins, estimate market values, check rarity, and catalog your collection.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Learn Chinese Cantonese, practice real conversations, and translate in real time with a live AI Chinese Cantonese teacher featuring voice chat, camera-based context, and instant translation support.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Learn Chinese Mandarin, practice real conversations, and translate in real time with a live AI Chinese Mandarin teacher featuring voice chat, camera-based context, and instant translation support.'
            },
            khru: {
                title: 'AI Agent Khru (not published yet)',
                desc: 'Learn Thai, practice real conversations, and translate in real time with a live AI Thai teacher featuring voice chat, camera-based context, and instant translation support.'
            }
        },
        overview: {
            tag: "Concept, Build, Launch, Scale & Ops",
            lead: "Carlier is a software engineering and product development company. We design and build production-grade digital products end to end — from the first concept and architecture through launch, scaling, and ongoing operations.",
            note: "Remote-first and available worldwide, we work across mobile, web, AI systems, cybersecurity, and infrastructure engineering.",
            whatWeDo: "What We Do",
            services: {
                product: { title: "Product engineering", desc: "turning ideas into shipped, production-ready products" },
                ai: { title: "AI & LLM systems", desc: "agentic AI, RAG, orchestration, and AI API integration" },
                cloud: { title: "Cloud & infrastructure", desc: "multi-cloud architecture, containers, Kubernetes, and infrastructure as code" },
                business: { title: "Business software", desc: "B2B SaaS, ERP, CRM, workflow automation, and business intelligence" },
                security: { title: "Cybersecurity & DevSecOps", desc: "secure delivery, CI/CD automation, and systems hardening" },
            },
            howWeWork: "How We Work",
            steps: {
                concept: { title: "Concept", desc: "clarify the problem, users, constraints, and success criteria" },
                build: { title: "Build", desc: "design and implement with scalability, reliability, and maintainability in mind" },
                launch: { title: "Launch", desc: "ship to production with the operational foundations in place" },
                scale: { title: "Scale & Ops", desc: "monitor, optimize, and operate as usage and requirements grow" },
            }
        },
        contact: {
            tag: 'Get In Touch',
            title: "Carlier Tech",
            text: "Available for engineering projects and technical consulting. Contact us to discuss requirements and solutions.",
            location: "Remote-first · Available worldwide · Multilingual support",
        },
        footer: {
            main: "Main",
            mobileApps: "Mobile Apps",
            tagline: 'Engineering scalable technical solutions.',
            home: 'Home',
            about: 'About',
            skills: 'Technical Stack',
            projects: 'Projects',
            contact: 'Contact',
            productApps: 'Products and services',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Learn Cantonese AI App',
                chinese: 'Learn Chinese AI App',
                thai: 'Learn Thai AI App'
            },
            copyright: '© 2026 Carlier. All rights reserved.',
            crafted: 'Crafted with passion',
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        accessibility: {
            skipToMain: 'Skip to main content'
        }
    },
    uk: {
        nav: {
            about: 'Про мене',
            skills: 'Навички',
            projects: 'Проєкти',
            productApps: 'Продукти та послуги',
            learnChinese: 'Вчитись китайською App',
            learnCantonese: 'Вчитись кантонською App',
            learnThai: 'Вчитись тайською App',
            coinIdentifier: 'Coin Identifier App',
            cta: "Зв'язатися"
        },
        hero: {
            title1: 'Концепція, Білд, Запуск, Масштаб та Операції',
            title2: '',
            subtitle1: 'Створюю ',
            highlight1: 'Мобільні додатки',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' ШІ системи та інфраструктура',
            subtitle4: ',що масштабуються.',
            subtitle5: 'Створюю Мобільні додатки, SaaS, ШІ системи та інфраструктура, що масштабуються.',
            recentReleases: 'Останні релізи',
            cta: 'Зв\'язатися'
        },
        about: {
            tag: 'Про компанію',
            title: 'Створюємо продукти, які мають значення',
            text1: "Маємо досвід у мобільній розробці, SaaS, ШІ системах та архітектурі систем. Допомагаємо стартапам і бізнесам втілювати їхні бачення в робочі продукти.",
            text2: "Будь то нативний мобільний додаток, ШІ система, кросплатформне рішення або масштабована SaaS платформа, ми підходимо до кожного проєкту з фокусом на користувацький досвід, продуктивність та бізнес-цілі.",
            value1: { title: 'Виконання', desc: 'Швидке прототипування та ітеративна розробка для швидкого виведення вашого продукту на ринок.' },
            value2: { title: 'Від і до', desc: 'Від дизайну до розгортання, ми керуємо кожним аспектом розробки продукту.' },
            value3: { title: 'Якість', desc: 'Чистий код, продуманий UX і масштабована архітектура в кожному проєкті.' }
        },
        skills: {
            tag: 'Експертиза',
            title: 'Технології, з якими я працюю',
            mobile: 'Мобільна розробка',
            web: 'Web та SaaS',
            business: 'Рішення для бізнесу',
            design: 'Дизайн та продукт',
            ai: 'ШІ системи',
            infra: 'Інфраструктура'
        },
        projects: {
            tag: 'Вибрані роботи',
            title: "ШІ мобільні додатки",
            view: 'Завантажити додаток',
            tags: {
                mobile: 'Мобільний додаток',
                aiScanner: 'ШІ сканер',
                aiTutor: 'ШІ репетитор'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Додаток-сканер монет на основі ШІ для колекціонерів. Миттєво ідентифікуйте монети, оцінюйте їхню ринкову вартість і каталогізуйте свою колекцію.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Спілкуйтесь і практикуйте кантонську в реальному часі з живим ШІ викладачем кантонської з природним голосовим чатом і контекстом на основі камери.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Практикуйте мандаринську в реальному часі з живим ШІ тренером мандаринської за допомогою голосу в реальному часі, практики під керівництвом зору та миттєвих виправлень.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Вчіть українську, практикуйте реальні розмови та перекладайте в реальному часі з живим ШІ-репетитором української з голосовим чатом, контекстом через камеру та миттєвим перекладом.'
            },
            khru: {
                title: 'AI Agent Khru (ще не опубліковано)',
                desc: 'Вчіть і практикуйте тайську в реальному часі з живим ШІ викладачем тайської за допомогою голосового чату, словника на основі камери та структурованих виправлень.'
            }
        },
        overview: {
            tag: "Концепція, Розробка, Запуск, Масштабування та Операції",
            lead: "Carlier — компанія з розробки програмного забезпечення та продуктів. Ми проєктуємо та створюємо цифрові продукти виробничого рівня від початку до кінця — від першої концепції та архітектури до запуску, масштабування та подальшої експлуатації.",
            note: "Працюємо віддалено та по всьому світу — у сферах мобільних застосунків, вебу, AI-систем, кібербезпеки та інфраструктурної інженерії.",
            whatWeDo: "Що ми робимо",
            services: {
                product: { title: "Продуктова інженерія", desc: "перетворюємо ідеї на готові до випуску продукти виробничого рівня" },
                ai: { title: "AI та LLM-системи", desc: "агентний AI, RAG, оркестрація та інтеграція AI API" },
                cloud: { title: "Хмара та інфраструктура", desc: "мультихмарна архітектура, контейнери, Kubernetes та інфраструктура як код" },
                business: { title: "Бізнес-програмне забезпечення", desc: "B2B SaaS, ERP, CRM, автоматизація робочих процесів та бізнес-аналітика" },
                security: { title: "Кібербезпека та DevSecOps", desc: "безпечне постачання, автоматизація CI/CD та зміцнення систем" },
            },
            howWeWork: "Як ми працюємо",
            steps: {
                concept: { title: "Концепція", desc: "уточнюємо проблему, користувачів, обмеження та критерії успіху" },
                build: { title: "Розробка", desc: "проєктуємо та впроваджуємо з урахуванням масштабованості, надійності й підтримуваності" },
                launch: { title: "Запуск", desc: "виводимо в продакшн із закладеними операційними основами" },
                scale: { title: "Масштабування та операції", desc: "моніторимо, оптимізуємо та керуємо в міру зростання навантаження й вимог" },
            }
        },
        contact: {
            tag: 'Зв\'язатися',
            title: "Carlier Tech",
            text: "Доступний для інженерних проєктів та технічних консультацій. Зв'яжіться зі мною, щоб обговорити вимоги та рішення.",
            location: "Віддалено · Доступні по всьому світу · Багатомовна підтримка",
        },
        footer: {
            main: "Основне",
            mobileApps: "Мобільні застосунки",
            tagline: 'Розробка масштабованих технічних рішень.',
            home: 'Головна',
            about: 'Про мене',
            skills: 'Навички',
            projects: 'Проєкти',
            contact: 'Контакти',
            productApps: 'Продукти та послуги',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Вчитись кантонською AI App',
                chinese: 'Вчитись китайською AI App',
                thai: 'Вчитись тайською AI App',
                ukrainian: 'Вчитись українською'
            },
            copyright: '© 2026 Carlier. Всі права захищені.',
            crafted: 'Створено з пристрастю',
            privacy: "Політика конфіденційності",
            terms: "Умови надання послуг"
        },
        accessibility: {
            skipToMain: 'Перейти до основного вмісту'
        }
    },
    th: {
        nav: {
            about: 'เกี่ยวกับ',
            skills: 'ทักษะ',
            projects: 'โปรเจกต์',
            productApps: 'ผลิตภัณฑ์และบริการ',
            learnChinese: 'เรียนภาษาจีน App',
            learnCantonese: 'เรียนภาษากวางตุ้ง App',
            learnThai: 'เรียนภาษาไทย App',
            coinIdentifier: 'Coin Identifier App',
            cta: "ติดต่อเรา"
        },
        hero: {
            title1: 'แนวคิด, สร้าง, เปิดตัว, ขยาย & ดำเนินการ',
            title2: '',
            subtitle1: 'สร้าง ',
            highlight1: 'แอปพลิเคชันมือถือ',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' ระบบ AI และโครงสร้างพื้นฐาน',
            subtitle4: ',ที่สามารถปรับขนาดได้.',
            subtitle5: 'สร้างแอปพลิเคชันมือถือ, SaaS, ระบบ AI และโครงสร้างพื้นฐานที่สามารถปรับขนาดได้',
            recentReleases: 'การเปิดตัวล่าสุด',
            cta: 'ติดต่อเรา'
        },
        about: {
            tag: 'เกี่ยวกับฉัน',
            title: 'สร้างผลิตภัณฑ์ที่มีความหมาย',
            text1: "ฉันเป็นผู้ก่อตั้งและวิศวกรซอฟต์แวร์ที่หลงใหลในการสร้างผลิตภัณฑ์ที่มีผลกระทบ ด้วยความเชี่ยวชาญตั้งแต่การพัฒนาแอปมือถือ, SaaS, ระบบ AI ไปจนถึงสถาปัตยกรรมระบบ ฉันช่วยให้สตาร์ทอัพและธุรกิจต่างๆ บรรลุวิสัยทัศน์ของตน",
            text2: "ไม่ว่าจะเป็นแอปพลิเคชันมือถือแบบเนทีฟ, ระบบ AI, โซลูชันข้ามแพลตฟอร์ม หรือแพลตฟอร์ม SaaS ที่สามารถปรับขนาดได้ ฉันเข้าถึงแต่ละโปรเจกต์โดยให้ความสำคัญกับประสบการณ์ผู้ใช้ ประสิทธิภาพ และเป้าหมายทางธุรกิจ",
            value1: { title: 'การดำเนินการ', desc: 'การสร้างต้นแบบอย่างรวดเร็วและการพัฒนาแบบทำซ้ำเพื่อให้ผลิตภัณฑ์ของคุณออกสู่ตลาดได้อย่างรวดเร็ว.' },
            value2: { title: 'ครบวงจร', desc: 'ตั้งแต่การออกแบบจนถึงการปรับใช้ ฉันจัดการทุกแง่มุมของการพัฒนาผลิตภัณฑ์.' },
            value3: { title: 'คุณภาพ', desc: 'โค้ดที่สะอาด, UX ที่คิดมาอย่างดี และสถาปัตยกรรมที่สามารถปรับขนาดได้ในทุกโปรเจกต์.' }
        },
        skills: {
            tag: 'ความเชี่ยวชาญ',
            title: 'เทคโนโลยีที่ฉันทำงานด้วย',
            mobile: 'การพัฒนามือถือ',
            web: 'เว็บ & SaaS',
            business: 'โซลูชันซอฟต์แวร์ธุรกิจ',
            design: 'การออกแบบ & ผลิตภัณฑ์',
            ai: 'ระบบ AI',
            infra: 'โครงสร้างพื้นฐาน'
        },
        projects: {
            tag: 'ผลงานที่โดดเด่น',
            title: "แอปพลิเคชันมือถือ AI",
            view: 'ดาวน์โหลดแอป',
            tags: {
                mobile: 'แอปพลิเคชันมือถือ',
                aiScanner: 'AI สแกนเนอร์',
                aiTutor: 'AI ติวเตอร์'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'แอปพลิเคชันสแกนเหรียญด้วย AI สำหรับนักสะสม ระบุเหรียญได้ทันที, ประเมินมูลค่าตลาด และจัดหมวดหมู่คอลเล็กชันของคุณ.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'พูดคุยและฝึกฝนภาษากวางตุ้งแบบเรียลไทม์กับครู AI ภาษากวางตุ้งสด พร้อมแชทด้วยเสียงที่เป็นธรรมชาติและบริบทที่อิงตามกล้อง.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'ฝึกฝนภาษาจีนกลางแบบเรียลไทม์กับโค้ช AI ภาษาจีนกลางสด ด้วยเสียงแบบเรียลไทม์, การฝึกฝนที่ชี้นำด้วยการมองเห็น และการแก้ไขในทันที.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'เรียนรู้ภาษายูเครน ฝึกสนทนาจริง และแปลแบบเรียลไทม์กับครู AI ยูเครนสด ด้วยแชทด้วยเสียง, บริบทจากกล้อง และการแปลทันที.'
            },
            khru: {
                title: 'AI Agent Khru (ยังไม่เผยแพร่)',
                desc: 'เรียนรู้และฝึกฝนภาษาไทยแบบเรียลไทม์กับครู AI ภาษาไทยสด ด้วยแชทด้วยเสียง, คำศัพท์ที่อิงตามกล้อง และการแก้ไขที่มีโครงสร้าง.'
            }
        },
        overview: {
            tag: "แนวคิด สร้าง เปิดตัว ขยายขนาด และปฏิบัติการ",
            lead: "Carlier เป็นบริษัทด้านวิศวกรรมซอฟต์แวร์และการพัฒนาผลิตภัณฑ์ เราออกแบบและสร้างผลิตภัณฑ์ดิจิทัลระดับพร้อมใช้งานจริงแบบครบวงจร ตั้งแต่แนวคิดและสถาปัตยกรรมแรกเริ่ม ไปจนถึงการเปิดตัว การขยายขนาด และการดำเนินงานอย่างต่อเนื่อง",
            note: "เราทำงานแบบรีโมตเป็นหลักและพร้อมให้บริการทั่วโลก ครอบคลุมทั้งมือถือ เว็บ ระบบ AI ความปลอดภัยไซเบอร์ และวิศวกรรมโครงสร้างพื้นฐาน",
            whatWeDo: "สิ่งที่เราทำ",
            services: {
                product: { title: "วิศวกรรมผลิตภัณฑ์", desc: "เปลี่ยนไอเดียให้เป็นผลิตภัณฑ์ที่พร้อมส่งมอบและพร้อมใช้งานจริง" },
                ai: { title: "ระบบ AI และ LLM", desc: "AI แบบเอเจนต์ RAG การจัดการลำดับการทำงาน และการเชื่อมต่อ AI API" },
                cloud: { title: "คลาวด์และโครงสร้างพื้นฐาน", desc: "สถาปัตยกรรมหลายคลาวด์ คอนเทนเนอร์ Kubernetes และโครงสร้างพื้นฐานในรูปแบบโค้ด" },
                business: { title: "ซอฟต์แวร์ธุรกิจ", desc: "B2B SaaS, ERP, CRM, การทำงานอัตโนมัติของเวิร์กโฟลว์ และระบบวิเคราะห์ธุรกิจ" },
                security: { title: "ความปลอดภัยไซเบอร์และ DevSecOps", desc: "การส่งมอบอย่างปลอดภัย การทำงานอัตโนมัติของ CI/CD และการเสริมความแข็งแกร่งของระบบ" },
            },
            howWeWork: "วิธีการทำงานของเรา",
            steps: {
                concept: { title: "แนวคิด", desc: "ทำความเข้าใจปัญหา ผู้ใช้งาน ข้อจำกัด และเกณฑ์ความสำเร็จให้ชัดเจน" },
                build: { title: "สร้าง", desc: "ออกแบบและพัฒนาโดยคำนึงถึงการขยายขนาด ความน่าเชื่อถือ และความสามารถในการบำรุงรักษา" },
                launch: { title: "เปิดตัว", desc: "ส่งขึ้นระบบโปรดักชันพร้อมรากฐานด้านการดำเนินงานที่ครบถ้วน" },
                scale: { title: "ขยายขนาดและปฏิบัติการ", desc: "ตรวจสอบ ปรับแต่ง และดำเนินงานตามการเติบโตของปริมาณการใช้งานและความต้องการ" },
            }
        },
        contact: {
            tag: 'ติดต่อเรา',
            title: "Carlier Tech",
            text: "พร้อมรับโครงการวิศวกรรมและงานให้คำปรึกษาทางเทคนิค ติดต่อฉันเพื่อพูดคุยเกี่ยวกับข้อกำหนดและแนวทางแก้ไข",
            location: "รีโมตเป็นหลัก · ให้บริการทั่วโลก · รองรับหลายภาษา",
        },
        footer: {
            main: "หลัก",
            mobileApps: "แอปมือถือ",
            tagline: 'ออกแบบโซลูชันทางเทคนิคที่ขยายได้.',
            home: 'หน้าแรก',
            about: 'เกี่ยวกับ',
            skills: 'ทักษะ',
            projects: 'โปรเจกต์',
            contact: 'ติดต่อ',
            productApps: 'ผลิตภัณฑ์และบริการ',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'เรียนภาษากวางตุ้ง AI App',
                chinese: 'เรียนภาษาจีน AI App',
                thai: 'เรียนภาษาไทย AI App',
                ukrainian: 'เรียนภาษาอุโกครินะ'
            },
            copyright: '© 2026 Carlier. สงวนลิขสิทธิ์.',
            crafted: 'สร้างด้วยความหลงใหล',
            privacy: "นโยบายความเป็นส่วนตัว",
            terms: "ข้อกำหนดการให้บริการ"
        },
        accessibility: {
            skipToMain: 'ข้ามไปยังเนื้อหาหลัก'
        }
    },
    pt: {
        nav: {
            about: 'Sobre',
            skills: 'Competências',
            projects: 'Projetos',
            productApps: 'Produtos e serviços',
            learnChinese: 'Aprender Chinês App',
            learnCantonese: 'Aprender Cantones App',
            learnThai: 'Aprender Tailandês App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Fale Connosco'
        },
        hero: {
            title1: 'Conceito, Construir, Lançar, Escalar & Operações',
            title2: '',
            subtitle1: 'Construímos ',
            highlight1: 'Apps Móveis',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' Sistemas de IA e Infraestrutura',
            subtitle4: ',que escalam.',
            subtitle5: 'Construímos Apps Móveis, SaaS, Sistemas de IA e Infraestrutura que escalam',
            recentReleases: 'Lançamentos recentes',
            cta: 'Fale Connosco'
        },
        about: {
            tag: 'Sobre',
            title: 'Construímos produtos que importam',
            text1: 'Com experiência em desenvolvimento móvel, SaaS, sistemas de IA e arquitetura de sistemas, ajudamos startups e empresas a transformar as suas ideias em produtos robustos e escaláveis.',
            text2: 'Seja uma aplicação móvel nativa, um sistema de IA, uma solução multiplataforma ou uma plataforma SaaS escalável, abordamos cada projeto com foco na experiência do utilizador, no desempenho e nos objetivos de negócio.',
            value1: { title: 'Execução', desc: 'Criação rápida de protótipos e desenvolvimento iterativo para levar o seu produto ao mercado rapidamente.' },
            value2: { title: 'De Ponta a Ponta', desc: 'Do design ao deployment, tratamos de cada aspeto do desenvolvimento de produtos.' },
            value3: { title: 'Qualidade', desc: 'Código limpo, UX bem pensada e arquitetura escalável em cada projeto.' }
        },
        skills: {
            tag: 'Especialização',
            title: 'Tecnologias com as quais trabalho',
            mobile: 'Desenvolvimento Móvel',
            web: 'Web & SaaS',
            business: 'Soluções de Software Empresarial',
            design: 'Design & Produto',
            ai: 'Sistemas de IA',
            infra: 'Infraestrutura'
        },
        projects: {
            tag: 'Trabalhos em Destaque',
            title: 'Apps móveis de IA',
            view: 'Obter a app',
            tags: {
                mobile: 'App Móvel',
                aiScanner: 'Scanner de IA',
                aiTutor: 'Tutor de IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplicação de scanner de moedas com IA para colecionadores. Identifique moedas instantaneamente, estime valores de mercado e catalogue a sua coleção.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Fale e pratique cantonês em tempo real com um tutor de IA ao vivo com chat de voz natural e contexto de câmara.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratique mandarim em tempo real com um tutor de IA ao vivo com voz em tempo real, prática guiada por visão e correções instantâneas.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Aprenda ucraniano, pratique conversas reais e traduza em tempo real com um tutor de IA ucraniano ao vivo, com chat de voz, contexto baseado em câmara e tradução instantânea.'
            },
            khru: {
                title: 'AI Agent Khru (ainda não publicado)',
                desc: 'Aprenda e pratique tailandês em tempo real com um tutor de IA ao vivo com chat de voz, vocabulário baseado em câmara e correções estruturadas.'
            }
        },
        overview: {
            tag: "Conceito, Desenvolvimento, Lançamento, Escala e Operações",
            lead: "A Carlier é uma empresa de engenharia de software e desenvolvimento de produtos. Concebemos e construímos produtos digitais de nível de produção de ponta a ponta — desde o primeiro conceito e arquitetura até ao lançamento, escalabilidade e operações contínuas.",
            note: "Trabalhamos em regime remoto e estamos disponíveis em todo o mundo, atuando em aplicações móveis, web, sistemas de IA, cibersegurança e engenharia de infraestrutura.",
            whatWeDo: "O que fazemos",
            services: {
                product: { title: "Engenharia de produto", desc: "transformamos ideias em produtos prontos a lançar e de nível de produção" },
                ai: { title: "Sistemas de IA e LLM", desc: "IA agêntica, RAG, orquestração e integração de APIs de IA" },
                cloud: { title: "Cloud e infraestrutura", desc: "arquitetura multicloud, contentores, Kubernetes e infraestrutura como código" },
                business: { title: "Software empresarial", desc: "SaaS B2B, ERP, CRM, automação de fluxos de trabalho e business intelligence" },
                security: { title: "Cibersegurança e DevSecOps", desc: "entrega segura, automação de CI/CD e reforço de sistemas" },
            },
            howWeWork: "Como trabalhamos",
            steps: {
                concept: { title: "Conceito", desc: "esclarecemos o problema, os utilizadores, as restrições e os critérios de sucesso" },
                build: { title: "Desenvolvimento", desc: "concebemos e implementamos com escalabilidade, fiabilidade e manutenção em mente" },
                launch: { title: "Lançamento", desc: "colocamos em produção com as bases operacionais já implementadas" },
                scale: { title: "Escala e operações", desc: "monitorizamos, otimizamos e operamos à medida que a utilização e os requisitos crescem" },
            }
        },
        contact: {
            tag: 'Contacte-nos',
            title: 'Carlier Tech',
            text: 'Disponível para projetos de engenharia e consultoria técnica. Contacte-nos para discutir requisitos e soluções.',
            location: "Remoto · Disponível em todo o mundo · Suporte multilingue",
        },
        footer: {
            main: "Principal",
            mobileApps: "Aplicações móveis",
            tagline: 'Engenharia de soluções técnicas escaláveis.',
            home: 'Início',
            about: 'Sobre',
            skills: 'Competências',
            projects: 'Projetos',
            contact: 'Contacto',
            productApps: 'Produtos e serviços',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Aprender Cantones AI App',
                chinese: 'Aprender Chinês AI App',
                thai: 'Aprender Tailandês AI App',
                ukrainian: 'Aprender Ucraniano'
            },
            copyright: '© 2026 Carlier. Todos os direitos reservados.',
            crafted: 'Criado com paixão',
            privacy: "Política de Privacidade",
            terms: "Termos de Serviço"
        },
        accessibility: {
            skipToMain: 'Saltar para o conteúdo principal'
        }
    },
    es: {
        nav: {
            about: 'Sobre',
            skills: 'Habilidades',
            projects: 'Proyectos',
            productApps: 'Productos y servicios',
            learnChinese: 'Aprender Chino App',
            learnCantonese: 'Aprender Cantones App',
            learnThai: 'Aprender Tailandés App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Hablemos'
        },
        hero: {
            title1: 'Concepto, Construcción, Lanzamiento, Escalar & Operaciones',
            title2: '',
            subtitle1: 'Construyendo ',
            highlight1: 'Apps Móviles',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' Sistemas de IA e Infraestructura',
            subtitle4: ',que escalan.',
            subtitle5: 'Construyendo Apps Móviles, SaaS, Sistemas de IA e Infraestructura que escalan',
            recentReleases: 'Lanzamientos recientes',
            cta: 'Ponte en Contacto'
        },
        about: {
            tag: 'Sobre nosotros',
            title: 'Construimos productos que importan',
            text1: 'Con experiencia en desarrollo móvil, SaaS, sistemas de IA y arquitectura de sistemas, ayudamos a startups y empresas a convertir sus ideas en productos sólidos y escalables.',
            text2: 'Ya sea una aplicación móvil nativa, un sistema de IA, una solución multiplataforma o una plataforma SaaS escalable, abordamos cada proyecto con enfoque en la experiencia del usuario, rendimiento y objetivos de negocio.',
            value1: { title: 'Ejecución', desc: 'Prototipado rápido y desarrollo iterativo para llevar tu producto al mercado rápidamente.' },
            value2: { title: 'De Principio a Fin', desc: 'Del diseño al deployment, gestionamos cada aspecto del desarrollo de productos.' },
            value3: { title: 'Calidad', desc: 'Código limpio, UX bien pensada y arquitectura escalable en cada proyecto.' }
        },
        skills: {
            tag: 'Experiencia',
            title: 'Tecnologías con las que trabajo',
            mobile: 'Desarrollo Móvil',
            web: 'Web & SaaS',
            business: 'Soluciones de Software Empresarial',
            design: 'Diseño & Producto',
            ai: 'Sistemas de IA',
            infra: 'Infraestructura'
        },
        projects: {
            tag: 'Trabajos Destacados',
            title: 'Apps móviles de IA',
            view: 'Obtener la app',
            tags: {
                mobile: 'App Móvil',
                aiScanner: 'Escáner de IA',
                aiTutor: 'Tutor de IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplicación de escáner de monedas con IA para coleccionistas. Identifica monedas al instante, estima valores de mercado y cataloga tu colección.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Habla y practica cantonés en tiempo real con un tutor de IA en vivo con chat de voz natural y contexto de cámara.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Practica mandarín en tiempo real con un tutor de IA en vivo con voz en tiempo real, práctica guiada por visión y correcciones al instante.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Aprenda ucraniano, practique conversaciones reales y traduzca en tiempo real con un tutor de IA ucraniano en vivo con chat de voz, contexto basado en cámara y traducción instantánea.'
            },
            khru: {
                title: 'AI Agent Khru (aún no publicado)',
                desc: 'Aprende y practica tailandés en tiempo real con un tutor de IA en vivo con chat de voz, vocabulario basado en cámara y correcciones estructuradas.'
            }
        },
        overview: {
            tag: "Concepto, Desarrollo, Lanzamiento, Escalado y Operaciones",
            lead: "Carlier es una empresa de ingeniería de software y desarrollo de productos. Diseñamos y construimos productos digitales de nivel de producción de principio a fin: desde el primer concepto y la arquitectura hasta el lanzamiento, la escalabilidad y las operaciones continuas.",
            note: "Trabajamos en remoto y estamos disponibles en todo el mundo, abarcando móvil, web, sistemas de IA, ciberseguridad e ingeniería de infraestructura.",
            whatWeDo: "Qué hacemos",
            services: {
                product: { title: "Ingeniería de producto", desc: "convertimos ideas en productos listos para lanzar y de nivel de producción" },
                ai: { title: "Sistemas de IA y LLM", desc: "IA agéntica, RAG, orquestación e integración de API de IA" },
                cloud: { title: "Nube e infraestructura", desc: "arquitectura multinube, contenedores, Kubernetes e infraestructura como código" },
                business: { title: "Software empresarial", desc: "SaaS B2B, ERP, CRM, automatización de flujos de trabajo y business intelligence" },
                security: { title: "Ciberseguridad y DevSecOps", desc: "entrega segura, automatización de CI/CD y refuerzo de sistemas" },
            },
            howWeWork: "Cómo trabajamos",
            steps: {
                concept: { title: "Concepto", desc: "aclaramos el problema, los usuarios, las restricciones y los criterios de éxito" },
                build: { title: "Desarrollo", desc: "diseñamos e implementamos pensando en la escalabilidad, la fiabilidad y el mantenimiento" },
                launch: { title: "Lanzamiento", desc: "desplegamos en producción con las bases operativas ya establecidas" },
                scale: { title: "Escalado y operaciones", desc: "monitorizamos, optimizamos y operamos a medida que crecen el uso y los requisitos" },
            }
        },
        contact: {
            tag: 'Ponte en Contacto',
            title: 'Carlier Tech',
            text: 'Disponible para proyectos de ingeniería y consultoría técnica. Contáctanos para discutir requisitos y soluciones.',
            location: "En remoto · Disponible en todo el mundo · Soporte multilingüe",
        },
        footer: {
            main: "Principal",
            mobileApps: "Aplicaciones móviles",
            tagline: 'Ingeniería de soluciones técnicas escalables.',
            home: 'Inicio',
            about: 'Sobre',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
            productApps: 'Productos y servicios',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Aprender Cantones AI App',
                chinese: 'Aprender Chino AI App',
                thai: 'Aprender Tailandés AI App',
                ukrainian: 'Aprender Ucraniano'
            },
            copyright: '© 2026 Carlier. Todos los derechos reservados.',
            crafted: 'Creado con pasión',
            privacy: "Política de privacidad",
            terms: "Términos del servicio"
        },
        accessibility: {
            skipToMain: 'Saltar al contenido principal'
        }
    },
    fr: {
        nav: {
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            productApps: 'Produits et services',
            learnChinese: 'Apprendre le Chinois App',
            learnCantonese: 'Apprendre le Cantonais App',
            learnThai: 'Apprendre le Thaï App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Discutons'
        },
        hero: {
            title1: 'Concept, Construction, Lancement, Mise à l échelle & Opérations',
            title2: '',
            subtitle1: 'Construire des ',
            highlight1: 'Apps Mobiles',
            subtitle2: ', des ',
            highlight2: 'SaaS',
            subtitle3: ', des ',
            highlight3: ' Systèmes IA et Infrastructure',
            subtitle4: ',qui passent à l\'échelle.',
            subtitle5: 'Construire des Apps Mobiles, des SaaS, Systèmes IA et Infrastructure qui passent à l\'échelle',
            recentReleases: 'Dernières sorties',
            cta: 'Prenez Contact'
        },
        about: {
            tag: 'À Propos',
            title: 'Nous construisons des produits qui comptent',
            text1: 'Avec une expertise couvrant le développement mobile, le SaaS, les systèmes d\'IA et l\'architecture système, nous aidons les startups et les entreprises à transformer leurs idées en produits solides et évolutifs.',
            text2: 'Qu\'il s\'agisse d\'une application mobile native, d\'un système d\'IA, d\'une solution multiplateforme ou d\'une plateforme SaaS scalable, nous abordons chaque projet avec un focus sur l\'expérience utilisateur, la performance et les objectifs business.',
            value1: { title: 'Exécution', desc: 'Prototypage rapide et développement itératif pour mettre votre produit sur le marché rapidement.' },
            value2: { title: 'De A à Z', desc: 'Du design au déploiement, nous gérons chaque aspect du développement produit.' },
            value3: { title: 'Qualité', desc: 'Code propre, UX réfléchie et architecture scalable dans chaque projet.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technical Stack Used',
            mobile: 'Développement Mobile',
            web: 'Web & SaaS',
            business: 'Solutions logicielles d\'entreprise',
            design: 'Design & Produit',
            ai: 'Systèmes d\'IA',
            infra: 'Infrastructure'
        },
        projects: {
            tag: 'Travaux Récents',
            title: 'Apps mobiles IA',
            view: 'Obtenir l\'app',
            tags: {
                mobile: 'App Mobile',
                aiScanner: 'Scanner IA',
                aiTutor: 'Tuteur IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Application de scanner de pièces alimentée par l\'IA pour les collectionneurs. Identifiez instantanément les pièces, estimez les valeurs de marché et cataloguez votre collection.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Parlez et pratiquez le cantonais en temps réel avec un tuteur IA en direct avec chat vocal naturel et contexte de caméra.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratiquez le mandarin en temps réel avec un tuteur IA en direct avec voix en temps réel, pratique guidée par la vision et corrections instantanées.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Apprenez l’ukrainien, pratiquez des conversations réelles et traduisez en temps réel avec un tuteur IA ukrainien en direct avec chat vocal, contexte caméra et traduction instantanée.'
            },
            khru: {
                title: 'AI Agent Khru (pas encore publié)',
                desc: 'Apprenez et pratiquez le thaï en temps réel avec un tuteur IA en direct avec chat vocal, vocabulaire basé sur la caméra et corrections structurées.'
            }
        },
        overview: {
            tag: "Concept, Développement, Lancement, Mise à l’échelle et Opérations",
            lead: "Carlier est une entreprise d’ingénierie logicielle et de développement de produits. Nous concevons et construisons des produits numériques de qualité production de bout en bout — du premier concept et de l’architecture jusqu’au lancement, à la mise à l’échelle et aux opérations continues.",
            note: "En télétravail et disponibles dans le monde entier, nous intervenons sur le mobile, le web, les systèmes d’IA, la cybersécurité et l’ingénierie d’infrastructure.",
            whatWeDo: "Ce que nous faisons",
            services: {
                product: { title: "Ingénierie produit", desc: "transformer des idées en produits prêts à être livrés et de qualité production" },
                ai: { title: "Systèmes d’IA et de LLM", desc: "IA agentique, RAG, orchestration et intégration d’API d’IA" },
                cloud: { title: "Cloud et infrastructure", desc: "architecture multicloud, conteneurs, Kubernetes et infrastructure as code" },
                business: { title: "Logiciels métiers", desc: "SaaS B2B, ERP, CRM, automatisation des workflows et business intelligence" },
                security: { title: "Cybersécurité et DevSecOps", desc: "livraison sécurisée, automatisation CI/CD et durcissement des systèmes" },
            },
            howWeWork: "Notre façon de travailler",
            steps: {
                concept: { title: "Concept", desc: "clarifier le problème, les utilisateurs, les contraintes et les critères de réussite" },
                build: { title: "Développement", desc: "concevoir et mettre en œuvre en tenant compte de l’évolutivité, de la fiabilité et de la maintenabilité" },
                launch: { title: "Lancement", desc: "mettre en production avec les fondations opérationnelles en place" },
                scale: { title: "Mise à l’échelle et opérations", desc: "surveiller, optimiser et exploiter à mesure que l’usage et les besoins augmentent" },
            }
        },
        contact: {
            tag: 'Prenez Contact',
            title: 'Carlier Tech',
            text: 'Disponible pour des projets d\'ingénierie et de consultation technique. Contactez-nous pour discuter des exigences et des solutions.',
            location: "Télétravail · Disponible dans le monde entier · Support multilingue",
        },
        footer: {
            main: "Principal",
            mobileApps: "Applications mobiles",
            tagline: 'Conception de solutions techniques évolutives.',
            home: 'Accueil',
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact',
            productApps: 'Produits et services',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Apprendre le Cantonais AI App',
                chinese: 'Apprendre le Chinois AI App',
                thai: 'Apprendre le Thaï AI App',
                ukrainian: 'Apprendre l\'Ukrainien'
            },
            copyright: '© 2026 Carlier. Tous droits réservés.',
            crafted: 'Conçu avec passion',
            privacy: "Politique de confidentialité",
            terms: "Conditions d’utilisation"
        },
        accessibility: {
            skipToMain: 'Aller au contenu principal'
        }
    },
    'zh-TW': {
        nav: {
            about: '關於',
            skills: '技能',
            projects: '專案',
            productApps: '產品與服務',
            learnChinese: '學習中文 App',
            learnCantonese: '學習粵語 App',
            learnThai: '學習泰語 App',
            coinIdentifier: 'Coin Identifier App',
        cta: '聯繫我們'
        },
        hero: {
            title1: '概念、構建、啟動、擴展 & 運營',
            title2: '',
            subtitle1: '構建',
            highlight1: '移動應用',
            subtitle2: '、',
            highlight2: 'SaaS',
            subtitle3: '、',
            highlight3: ' AI 系統和基礎設施',
            subtitle4: '，實現規模化。',
            subtitle5: '構建移動應用、SaaS、AI 系統和基礎設施，實現規模化',
            recentReleases: '最新發布',
        cta: '聯繫我們'
        },
        about: {
            tag: '關於我們',
            title: '構建有價值的產品',
            text1: '憑藉移動開發、SaaS、AI 系統與系統架構的專業知識，我們協助初創企業與公司將想法轉化為穩健且可擴展的產品。',
            text2: '無論是原生移動應用、AI 系統、跨平台解決方案還是可擴展的 SaaS 平台，我們都以用戶體驗、性能和業務目標為重點來處理每個項目。',
            value1: { title: '執行', desc: '快速原型設計和迭代開發，讓您的產品快速進入市場。' },
            value2: { title: '端到端', desc: '從設計到部署，我們處理產品開發的各個方面。' },
            value3: { title: '品質', desc: '每個項目都注重清晰的代碼、周到的 UX 和可擴展的架構。' }
        },
        skills: {
            tag: '專業領域',
        title: '我們使用的技術',
            mobile: '移動開發',
            web: '網頁與 SaaS',
            business: '企業軟件解決方案',
            design: '設計與產品',
            ai: 'AI 系統',
            infra: '基礎設施'
        },
        projects: {
            tag: '精選作品',
            title: 'AI 行動應用',
            view: '取得應用程式',
            tags: {
                mobile: '行動應用',
                aiScanner: 'AI 掃描器',
                aiTutor: 'AI 導師'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '專為收藏家設計的 AI 硬幣掃描應用。即時識別硬幣、估算市場價值並整理您的收藏。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '透過即時語音聊天與相機輔助上下文，與 AI 粵語老師進行即時粵語對話與練習。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '透過即時語音、視覺引導練習與即時糾錯，與 AI 國語教練進行即時國語練習。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '學習烏克蘭語、練習真實對話，並透過即時語音聊天、相機上下文與即時翻譯，與 AI 烏克蘭語老師進行即時學習。'
            },
            khru: {
                title: 'AI Agent Khru (尚未發佈)',
                desc: '透過語音聊天、基於相機的詞彙練習與結構化糾錯，與 AI 泰語老師進行即時泰語學習與練習。'
            }
        },
        overview: {
            tag: "概念、開發、上線、擴展與營運",
            lead: "Carlier 是一家軟體工程與產品開發公司。我們從最初的構想到架構設計，一路負責產品的上線、擴展與持續營運，端到端打造達到生產級品質的數位產品。",
            note: "我們以遠端優先、服務遍及全球，領域涵蓋行動應用、網頁、AI 系統、資安與基礎設施工程。",
            whatWeDo: "我們做什麼",
            services: {
                product: { title: "產品工程", desc: "將想法轉化為可交付、達到生產級品質的產品" },
                ai: { title: "AI 與 LLM 系統", desc: "代理式 AI、RAG、協作編排與 AI API 整合" },
                cloud: { title: "雲端與基礎設施", desc: "多雲架構、容器、Kubernetes 與基礎設施即程式碼" },
                business: { title: "企業軟體", desc: "B2B SaaS、ERP、CRM、工作流程自動化與商業智慧" },
                security: { title: "資安與 DevSecOps", desc: "安全交付、CI/CD 自動化與系統強化" },
            },
            howWeWork: "我們如何工作",
            steps: {
                concept: { title: "概念", desc: "釐清問題、使用者、限制條件與成功標準" },
                build: { title: "開發", desc: "兼顧擴展性、可靠性與可維護性來設計與實作" },
                launch: { title: "上線", desc: "在營運基礎到位後部署至生產環境" },
                scale: { title: "擴展與營運", desc: "隨著使用量與需求成長進行監控、最佳化與營運" },
            }
        },
        contact: {
            tag: '聯繫我們',
            title: 'Carlier Tech',
            text: '可提供工程專案與技術諮詢服務。請聯繫我們討論需求和解決方案。',
            location: "遠端優先 · 全球皆可服務 · 多語言支援",
        },
        footer: {
            main: "主要",
            mobileApps: "行動應用程式",
            tagline: '工程可擴展技術解決方案。',
            home: '首頁',
            about: '關於',
            skills: '技能',
            projects: '專案',
            contact: '聯繫',
            productApps: '產品與服務',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: '學習粵語 AI App',
                chinese: '學習中文 AI App',
                thai: '學習泰語 AI App',
                ukrainian: '學習烏克蘭語'
            },
            copyright: '© 2026 Carlier. 版權所有。',
            crafted: '用心打造',
            privacy: "隱私權政策",
            terms: "服務條款"
        },
        accessibility: {
            skipToMain: '跳至主要內容'
        }
    },
    'zh-CN': {
        nav: {
            about: '关于',
            skills: '技能',
            projects: '项目',
            productApps: '产品与服务',
            learnChinese: '学习中文 App',
            learnCantonese: '学习粤语 App',
            learnThai: '学习泰语 App',
            coinIdentifier: 'Coin Identifier App',
            cta: '联系我们'
        },
        hero: {
            title1: '概念、构建、启动、扩展 & 运营',
            title2: '',
            subtitle1: '构建',
            highlight1: '移动应用',
            subtitle2: '、',
            highlight2: 'SaaS',
            subtitle3: '、',
            highlight3: ' AI 系统和基础设施',
            subtitle4: '，实现规模化。',
            subtitle5: '构建移动应用、SaaS、AI 系统和基础设施，实现规模化',
            recentReleases: '最新发布',
            cta: '联系我们'
        },
        about: {
            tag: '关于我们',
            title: '构建有价值的产品',
            text1: '凭借移动开发、SaaS、AI 系统与系统架构的专业知识，我们协助初创企业和公司将想法转化为稳健且可扩展的产品。',
            text2: '无论是原生移动应用、AI 系统、跨平台解决方案还是可扩展的 SaaS 平台，我们都以用户体验、性能和业务目标为重点来处理每个项目。',
            value1: { title: '执行', desc: '快速原型设计和迭代开发，让您的产品快速进入市场。' },
            value2: { title: '端到端', desc: '从设计到部署，我们处理产品开发的各个方面。' },
            value3: { title: '品质', desc: '每个项目都注重清晰的代码、周到的 UX 和可扩展的架构。' }
        },
        skills: {
            tag: '专业领域',
            title: '我们使用的技术',
            mobile: '移动开发',
            web: '网页与 SaaS',
            business: '企业软件解决方案',
            design: '设计与产品',
            ai: 'AI 系统',
            infra: '基础设施'
        },
        projects: {
            tag: '精选作品',
            title: 'AI 移动应用',
            view: '获取应用',
            tags: {
                mobile: '移动应用',
                aiScanner: 'AI 扫描器',
                aiTutor: 'AI 导师'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '专为收藏家设计的 AI 硬币扫描应用。即时识别硬币、估算市场价值并整理您的收藏。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '通过即时语音聊天与相机辅助上下文，与 AI 粤语老师进行即时粤语对话与练习。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '通过即时语音、视觉引导练习与即时纠错，与 AI 国语教练进行即时国语练习。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '学习乌克兰语、练习真实对话，并通过即时语音聊天、相机上下文与即时翻译，与 AI 乌克兰语老师进行实时学习。'
            },
            khru: {
                title: 'AI Agent Khru (尚未发布)',
                desc: '通过语音聊天、基于相机的词汇练习与结构化纠错，与 AI 泰语老师进行即时泰语学习与练习。'
            }
        },
        overview: {
            tag: "概念、构建、上线、扩展与运维",
            lead: "Carlier 是一家软件工程与产品开发公司。我们端到端设计和构建生产级数字产品——从最初的概念与架构，到上线、扩展和持续运维。",
            note: "我们以远程优先、服务全球，业务涵盖移动端、Web、AI 系统、网络安全和基础设施工程。",
            whatWeDo: "我们做什么",
            services: {
                product: { title: "产品工程", desc: "将想法转化为可交付、达到生产级质量的产品" },
                ai: { title: "AI 与 LLM 系统", desc: "智能体 AI、RAG、编排与 AI API 集成" },
                cloud: { title: "云与基础设施", desc: "多云架构、容器、Kubernetes 与基础设施即代码" },
                business: { title: "企业软件", desc: "B2B SaaS、ERP、CRM、工作流自动化与商业智能" },
                security: { title: "网络安全与 DevSecOps", desc: "安全交付、CI/CD 自动化与系统加固" },
            },
            howWeWork: "我们如何工作",
            steps: {
                concept: { title: "概念", desc: "明确问题、用户、约束条件与成功标准" },
                build: { title: "构建", desc: "在设计实现时兼顾可扩展性、可靠性与可维护性" },
                launch: { title: "上线", desc: "在运维基础就绪后发布到生产环境" },
                scale: { title: "扩展与运维", desc: "随着使用量和需求增长进行监控、优化与运维" },
            }
        },
        contact: {
            tag: '联系我们',
            title: 'Carlier Tech',
            text: '可提供工程项目与技术咨询服务。请联系我们讨论需求和解决方案。',
            location: "远程优先 · 全球可用 · 多语言支持",
        },
        footer: {
            main: "主要",
            mobileApps: "移动应用",
            tagline: '工程可扩展技术解决方案。',
            home: '首页',
            about: '关于',
            skills: '技能',
            projects: '项目',
            contact: '联系',
            productApps: '产品与服务',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: '学习粤语 AI App',
                chinese: '学习中文 AI App',
                thai: '学习泰语 AI App',
                ukrainian: '学习乌克兰语'
            },
            copyright: '© 2026 Carlier. 版权所有。',
            crafted: '用心打造',
            privacy: "隐私政策",
            terms: "服务条款"
        },
        accessibility: {
            skipToMain: '跳至主要内容'
        }
    },
    hi: {
        nav: {
            about: 'परिचय',
            skills: 'कौशल',
            projects: 'प्रोजेक्ट्स',
            productApps: 'उत्पाद और सेवाएँ',
            learnChinese: 'चीनीज़ सीखें App',
            learnCantonese: 'कैंटोनीज़ सीखें App',
            learnThai: 'थाई सीखें App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'संपर्क करें'
        },
        hero: {
            title1: 'अवधारणा, निर्माण, लॉन्च, स्केल एवं संचालन',
            title2: '',
            subtitle1: '',
            highlight1: 'मोबाइल ऐप्स',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' AI सिस्टम और बुनियादी संरचना',
            subtitle4: ',बना रहे हैं जो स्केल करते हैं।',
            subtitle5: 'मोबाइल ऐप्स, SaaS, AI सिस्टम और बुनियादी संरचना बना रहे हैं जो स्केल करते हैं',
            cta: 'संपर्क करें'
        },
        about: {
            tag: 'हमारे बारे में',
            title: 'मामूली नहीं, असरदार उत्पाद बनाते हैं',
            text1: 'मोबाइल डेवलपमेंट, SaaS, AI सिस्टम और सिस्टम आर्किटेक्चर में विशेषज्ञता के साथ, हम स्टार्टअप्स और व्यवसायों को मजबूत, स्केलेबल उत्पादों में बदलने में मदद करते हैं।',
            text2: 'चाहे वह एक नेटिव मोबाइल ऐप हो, AI सिस्टम, क्रॉस-प्लेटफॉर्म समाधान, या स्केलेबल SaaS प्लेटफॉर्म, हम हर प्रोजेक्ट को यूजर एक्सपीरियंस, परफॉर्मेंस और बिजनेस गोल्स पर फोकस के साथ अप्रोच करते हैं।',
            value1: { title: 'एक्जीक्यूशन', desc: 'रैपिड प्रोटोटाइपिंग और इटरेटिव डेवलपमेंट ताकि आपका उत्पाद जल्दी बाजार में आ सके।' },
            value2: { title: 'एंड-टू-एंड', desc: 'डिजाइन से डिप्लॉयमेंट तक, हम प्रोडक्ट डेवलपमेंट के हर पहलू को संभालते हैं।' },
            value3: { title: 'क्वालिटी', desc: 'हर प्रोजेक्ट में क्लीन कोड, सोची-समझी UX और स्केलेबल आर्किटेक्चर।' }
        },
        skills: {
            tag: 'विशेषज्ञता',
            title: 'टेक्नोलॉजी जिनके साथ मैं काम करता हूं',
            mobile: 'मोबाइल डेवलपमेंट',
            web: 'वेब और SaaS',
            business: 'बिज़नेस सॉफ़्टवेयर समाधान',
            design: 'डिज़ाइन और प्रोडक्ट',
            ai: 'AI सिस्टम',
            infra: 'इन्फ्रास्ट्रक्चर'
        },
        projects: {
            tag: 'विशेष कार्य',
            title: 'AI मोबाइल ऐप्स',
            view: 'ऐप प्राप्त करें',
            tags: {
                mobile: 'मोबाइल ऐप',
                aiScanner: 'AI स्कैनर',
                aiTutor: 'AI ट्यूटर'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'संग्रहकर्ताओं के लिए AI-संचालित सिक्का स्कैनर ऐप। सिक्कों की तुरंत पहचान करें, बाजार मूल्य का अनुमान लगाएं, और संग्रह का कैटलॉग बनाएं।'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'प्राकृतिक वॉयस चैट और कैमरा-आधारित संदर्भ के साथ लाइव AI कैंटोनीज़ शिक्षक के साथ वास्तविक समय में अभ्यास करें।'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'वास्तविक समय की आवाज, विजन-गाइडेड अभ्यास और त्वरित सुधारों के साथ लाइव AI मंदारिन कोच के साथ अभ्यास करें।'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'यूक्रेनी सीखें, वास्तविक बातचीत का अभ्यास करें, और लाइव AI यूक्रेनी शिक्षक के साथ वॉयस चैट, कैमरा-आधारित संदर्भ और त्वरित अनुवाद के साथ वास्तविक समय में अनुवाद करें।'
            },
            khru: {
                title: 'AI Agent Khru (अभी प्रकाशित नहीं हुआ)',
                desc: 'वॉयस चैट, कैमरा-आधारित शब्दावली और संरचित सुधारों के साथ लाइव AI थाई शिक्षक के साथ वास्तविक समय में सीखें और अभ्यास करें।'
            }
        },
        overview: {
            tag: "कल्पना, निर्माण, लॉन्च, स्केल और संचालन",
            lead: "Carlier एक सॉफ़्टवेयर इंजीनियरिंग और प्रोडक्ट डेवलपमेंट कंपनी है। हम शुरुआती कल्पना और आर्किटेक्चर से लेकर लॉन्च, स्केलिंग और निरंतर संचालन तक, प्रोडक्शन-ग्रेड डिजिटल प्रोडक्ट्स को शुरू से अंत तक डिज़ाइन और निर्मित करते हैं।",
            note: "हम रिमोट-फ़र्स्ट हैं और दुनिया भर में उपलब्ध हैं; हम मोबाइल, वेब, AI सिस्टम, साइबर सुरक्षा और इन्फ़्रास्ट्रक्चर इंजीनियरिंग में काम करते हैं।",
            whatWeDo: "हम क्या करते हैं",
            services: {
                product: { title: "प्रोडक्ट इंजीनियरिंग", desc: "विचारों को तैयार, प्रोडक्शन-रेडी प्रोडक्ट्स में बदलना" },
                ai: { title: "AI और LLM सिस्टम", desc: "एजेंटिक AI, RAG, ऑर्केस्ट्रेशन और AI API एकीकरण" },
                cloud: { title: "क्लाउड और इन्फ़्रास्ट्रक्चर", desc: "मल्टी-क्लाउड आर्किटेक्चर, कंटेनर, Kubernetes और इन्फ़्रास्ट्रक्चर ऐज़ कोड" },
                business: { title: "बिज़नेस सॉफ़्टवेयर", desc: "B2B SaaS, ERP, CRM, वर्कफ़्लो ऑटोमेशन और बिज़नेस इंटेलिजेंस" },
                security: { title: "साइबर सुरक्षा और DevSecOps", desc: "सुरक्षित डिलीवरी, CI/CD ऑटोमेशन और सिस्टम हार्डनिंग" },
            },
            howWeWork: "हम कैसे काम करते हैं",
            steps: {
                concept: { title: "कल्पना", desc: "समस्या, उपयोगकर्ताओं, बाधाओं और सफलता के मानदंडों को स्पष्ट करना" },
                build: { title: "निर्माण", desc: "स्केलेबिलिटी, विश्वसनीयता और रखरखाव को ध्यान में रखते हुए डिज़ाइन और कार्यान्वयन" },
                launch: { title: "लॉन्च", desc: "संचालन की बुनियाद तैयार होने पर प्रोडक्शन में लॉन्च करना" },
                scale: { title: "स्केल और संचालन", desc: "उपयोग और आवश्यकताओं के बढ़ने के साथ निगरानी, अनुकूलन और संचालन" },
            }
        },
        contact: {
            tag: 'संपर्क करें',
            title: 'Carlier Tech',
            text: 'इंजीनियरिंग परियोजनाओं और तकनीकी सलाहकार सेवा के लिए उपलब्ध हैं। आवश्यकताओं और समाधानों पर चर्चा करने के लिए हमसे संपर्क करें।',
            location: "रिमोट-फ़र्स्ट · दुनिया भर में उपलब्ध · बहुभाषी सहायता",
        },
        footer: {
            main: "मुख्य",
            mobileApps: "मोबाइल ऐप्स",
            tagline: 'स्केलेबल तकनीकी समाधान इंजीनियरिंग।',
            home: 'होम',
            about: 'परिचय',
            skills: 'कौशल',
            projects: 'प्रोजेक्ट्स',
            contact: 'संपर्क',
            productApps: 'उत्पाद और सेवाएँ',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'कैंटोनीज़ सीखें AI App',
                chinese: 'चीनीज़ सीखें AI App',
                thai: 'थाई सीखें AI App',
                ukrainian: 'यूक्रेनियन सीखें'
            },
            copyright: '© 2026 Carlier. सर्वाधिकार सुरक्षित।',
            crafted: 'जुनून के साथ बनाया गया',
            privacy: "गोपनीयता नीति",
            terms: "सेवा की शर्तें"
        },
        accessibility: {
            skipToMain: 'मुख्य सामग्री पर जाएं'
        }
    },
    ja: {
        nav: {
            about: '概要',
            skills: 'スキル',
            projects: 'プロジェクト',
            productApps: '製品とサービス',
            learnChinese: '中国語を学ぶ App',
            learnCantonese: '広東語を学ぶ App',
            learnThai: 'タイ語を学ぶ App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'お問い合わせ'
        },
        hero: {
            title1: 'コンセプト、ビルド、ローンチ、スケール＆運用',
            title2: '',
            subtitle1: '',
            highlight1: 'モバイルアプリ',
            subtitle2: '、',
            highlight2: 'SaaS',
            subtitle3: '、',
            highlight3: ' AIシステムとインフラ',
            subtitle4: '、を構築し、スケールさせます。',
            subtitle5: 'モバイルアプリ、SaaS、AIシステムとインフラを構築し、スケールさせます',
            recentReleases: '最新のリリース',
            cta: 'お問い合わせ'
        },
        about: {
            tag: '私たちについて',
            title: '意義のある製品を構築する',
            text1: 'モバイル開発、SaaS、AIシステム、システムアーキテクチャにわたる専門知識を持ち、スタートアップや企業がビジョンを現実の製品へと変えるお手伝いをしています。',
            text2: 'ネイティブモバイルアプリ、AIシステム、クロスプラットフォームソリューション、スケーラブルなSaaSプラットフォームのいずれであれ、ユーザー体験、パフォーマンス、ビジネス目標に焦点を当てて各プロジェクトに取り組みます。',
            value1: { title: '実行', desc: '迅速なプロトタイピングと反復的な開発により、製品を迅速に市場に投入します。' },
            value2: { title: 'エンドツーエンド', desc: 'デザインからデプロイメントまで、製品開発のあらゆる側面を担当します。' },
            value3: { title: '品質', desc: 'すべてのプロジェクトでクリーンなコード、熟考されたUX、スケーラブルなアーキテクチャを提供します。' }
        },
        skills: {
            tag: '専門知識',
            title: '使用している技術',
            mobile: 'モバイル開発',
            web: 'WebとSaaS',
            business: 'ビジネスソフトウェアソリューション',
            design: 'デザインとプロダクト',
            ai: 'AIシステム',
            infra: 'インフラ'
        },
        projects: {
            tag: '主な作品',
            title: 'AI モバイルアプリ',
            view: 'アプリを入手',
            tags: {
                mobile: 'モバイルアプリ',
                aiScanner: 'AIスキャナー',
                aiTutor: 'AIチューター'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'コレクター向けのAI搭載コインスキャナーアプリ。コインの即時識別、市場価値の推定、コレクションのカタログ化。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '自然な音声チャットとカメラの文脈を使用して、AI広東語教師とリアルタイムで広東語を練習します。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'リアルタイム音声、視覚ガイド付き練習、即時修正を使用して、AI中国語コーチとリアルタイムで中国語を練習します。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'ウクライナ語を学び、実際の会話を練習し、自然な音声チャット、カメラベースの文脈、即時翻訳を備えたライブ AI ウクライナ語教師とリアルタイムで翻訳しましょう。'
            },
            khru: {
                title: 'AI Agent Khru (まだ公開されていません)',
                desc: '音声チャット、カメラベースの語彙、構造化された修正を使用して、AIタイ語教師とリアルタイムでタイ語を学習・練習します。'
            }
        },
        overview: {
            tag: "構想・開発・ローンチ・拡張・運用",
            lead: "Carlier はソフトウェアエンジニアリングと製品開発を行う企業です。最初の構想とアーキテクチャから、ローンチ、拡張、継続的な運用まで、本番品質のデジタル製品をエンドツーエンドで設計・開発します。",
            note: "リモートファーストで世界各地に対応し、モバイル、Web、AI システム、サイバーセキュリティ、インフラエンジニアリングに取り組んでいます。",
            whatWeDo: "私たちの事業",
            services: {
                product: { title: "プロダクトエンジニアリング", desc: "アイデアを出荷可能な本番品質の製品へと形にします" },
                ai: { title: "AI・LLM システム", desc: "エージェント型 AI、RAG、オーケストレーション、AI API 連携" },
                cloud: { title: "クラウド・インフラ", desc: "マルチクラウド設計、コンテナ、Kubernetes、Infrastructure as Code" },
                business: { title: "ビジネスソフトウェア", desc: "B2B SaaS、ERP、CRM、ワークフロー自動化、ビジネスインテリジェンス" },
                security: { title: "サイバーセキュリティ・DevSecOps", desc: "セキュアなデリバリー、CI/CD 自動化、システムの堅牢化" },
            },
            howWeWork: "進め方",
            steps: {
                concept: { title: "構想", desc: "課題、ユーザー、制約、成功基準を明確にします" },
                build: { title: "開発", desc: "拡張性、信頼性、保守性を考慮して設計・実装します" },
                launch: { title: "ローンチ", desc: "運用基盤を整えたうえで本番環境へリリースします" },
                scale: { title: "拡張・運用", desc: "利用量と要件の増加に合わせて監視、最適化、運用します" },
            }
        },
        contact: {
            tag: 'お問い合わせ',
            title: 'Carlier Tech',
            text: 'エンジニアリングプロジェクトや技術コンサルティングを承っています。要件とソリューションについてご相談ください。',
            location: "リモートファースト · 世界各地に対応 · 多言語サポート",
        },
        footer: {
            main: "メイン",
            mobileApps: "モバイルアプリ",
            tagline: 'スケーラブルな技術ソリューションをエンジニアリング。',
            home: 'ホーム',
            about: '概要',
            skills: 'スキル',
            projects: 'プロジェクト',
            contact: 'お問い合わせ',
            productApps: '製品とサービス',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: '広東語を学ぶ AI App',
                chinese: '中国語を学ぶ AI App',
                thai: 'タイ語を学ぶ AI App',
                ukrainian: 'ウクライナ語を学ぶ'
            },
            copyright: '© 2026 Carlier. All rights reserved.',
            crafted: '情熱を込めて作られました',
            privacy: "プライバシーポリシー",
            terms: "利用規約"
        },
        accessibility: {
            skipToMain: 'メインコンテンツにスキップ'
        }
    },
    ar: {
        nav: {
            about: 'حول',
            skills: 'المهارات',
            projects: 'المشاريع',
            productApps: 'المنتجات والخدمات',
            learnChinese: 'تعلم الصينية App',
            learnCantonese: 'تعلم الكانتونيز App',
            learnThai: 'تعلم الثيين App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'تواصل معنا'
        },
        hero: {
            title1: 'مفهوم، بناء، إطلاق، توسيع & عمليات',
            title2: '',
            subtitle1: 'نبني ',
            highlight1: 'تطبيقات الجوال',
            subtitle2: ' و',
            highlight2: 'SaaS',
            subtitle3: ' و',
            highlight3: ' أنظمة الذكاء الاصطناعي والبنية التحتية',
            subtitle4: '،القابلة للتوسع.',
            subtitle5: 'نبني تطبيقات الجوال وSaaS وأنظمة الذكاء الاصطناعي والبنية التحتية القابلة للتوسع',
            recentReleases: 'الإصدارات الأخيرة',
            cta: 'تواصل معنا'
        },
        about: {
            tag: 'عنا',
            title: 'نبني منتجات ذات أهمية',
            text1: 'بفضل خبرة تمتد من تطوير الجوال وSaaS وأنظمة الذكاء الاصطناعي وهندسة الأنظمة، نساعد الشركات الناشئة والشركات على تحويل أفكارها إلى منتجات قوية وقابلة للتطوير.',
            text2: 'سواء كان تطبيق جوال أصلي، أو نظام ذكاء اصطناعي، أو حل متعدد المنصات، أو منصة SaaS قابلة للتوسع، نتعامل مع كل مشروع مع التركيز على تجربة المستخدم والأداء وأهداف العمل.',
            value1: { title: 'تنفيذ', desc: 'النمذجة السريعة والتطوير التكراري لإدخال منتجك إلى السوق بسرعة.' },
            value2: { title: 'من الألف إلى الياء', desc: 'من التصميم إلى النشر، نتعامل مع كل جانب من جوانب تطوير المنتج.' },
            value3: { title: 'الجودة', desc: 'كود نظيف وتجربة مستخدم مدروسة وهندسة قابلة للتوسع في كل مشروع.' }
        },
        skills: {
            tag: 'الخبرة',
            title: 'التقنيات التي نعمل بها',
            mobile: 'تطوير الجوال',
            web: 'Web وSaaS',
            business: 'حلول برامج الأعمال',
            design: 'التصميم والمنتج',
            ai: 'أنظمة الذكاء الاصطناعي',
            infra: 'البنية التحتية'
        },
        projects: {
            tag: 'أعمال مميزة',
            title: 'تطبيقات AI للجوال',
            view: 'احصل على التطبيق',
            tags: {
                mobile: 'تطبيق جوال',
                aiScanner: 'ماسح ضوئي للذكاء الاصطناعي',
                aiTutor: 'مدرس ذكاء اصطناعي'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'تطبيق ماسح عملات يعمل بالذكاء الاصطناعي لهواة الجمع. يحدد العملات على الفور، ويقدر قيم السوق، ويفهرس مجموعتك.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'تعلم وتدرب على الكانتونية في الوقت الفعلي مع مدرس كانتونيز AI مباشر يتميز بدردشة صوتية طبيعية وسياق مبني على الكاميرا.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'تعلم وتدرب على الماندرين في الوقت الفعلي مع مدرب ماندرين AI مباشر بصوت مباشر، ممارسة موجهة برؤية، وتصحيحات فورية.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'تعلم اللغة الأوكرانية، تدرب على المحادثات الحقيقية، وترجم في الوقت الفعلي مع مدرس أوكراني AI مباشر يتميز بدردشة صوتية وسياق يعتمد على الكاميرا وترجمة فورية.'
            },
            khru: {
                title: 'AI Agent Khru (لم يتم نشره بعد)',
                desc: 'تعلم وتدرب على التايلاندية في الوقت الفعلي مع مدرس تايلاندي AI مباشر يتميز بدردشة صوتية، ومفردات تعتمد على الكاميرا، وتصحيحات منظمة.'
            }
        },
        overview: {
            tag: "الفكرة، البناء، الإطلاق، التوسع والعمليات",
            lead: "Carlier شركة متخصصة في هندسة البرمجيات وتطوير المنتجات. نصمم ونبني منتجات رقمية جاهزة للإنتاج من البداية إلى النهاية — من الفكرة الأولى والهندسة المعمارية وحتى الإطلاق والتوسع والعمليات المستمرة.",
            note: "نعمل عن بُعد ونتوفر في جميع أنحاء العالم، ونغطي تطبيقات الجوال والويب وأنظمة الذكاء الاصطناعي والأمن السيبراني وهندسة البنية التحتية.",
            whatWeDo: "ما نقوم به",
            services: {
                product: { title: "هندسة المنتجات", desc: "تحويل الأفكار إلى منتجات جاهزة للتسليم وبمستوى الإنتاج" },
                ai: { title: "أنظمة الذكاء الاصطناعي ونماذج LLM", desc: "الذكاء الاصطناعي الوكيلي، وRAG، والتنسيق، وتكامل واجهات AI API" },
                cloud: { title: "السحابة والبنية التحتية", desc: "هندسة متعددة السحابات، والحاويات، وKubernetes، والبنية التحتية كشيفرة" },
                business: { title: "برمجيات الأعمال", desc: "B2B SaaS، وERP، وCRM، وأتمتة سير العمل، وذكاء الأعمال" },
                security: { title: "الأمن السيبراني وDevSecOps", desc: "تسليم آمن، وأتمتة CI/CD، وتحصين الأنظمة" },
            },
            howWeWork: "كيف نعمل",
            steps: {
                concept: { title: "الفكرة", desc: "توضيح المشكلة والمستخدمين والقيود ومعايير النجاح" },
                build: { title: "البناء", desc: "التصميم والتنفيذ مع مراعاة قابلية التوسع والموثوقية وسهولة الصيانة" },
                launch: { title: "الإطلاق", desc: "الإطلاق إلى بيئة الإنتاج مع توفر الأسس التشغيلية" },
                scale: { title: "التوسع والعمليات", desc: "المراقبة والتحسين والتشغيل مع نمو الاستخدام والمتطلبات" },
            }
        },
        contact: {
            tag: 'تواصل معنا',
            title: 'Carlier Tech',
            text: 'متاح للمشاريع الهندسية والاستشارات التقنية. تواصل معنا لمناقشة المتطلبات والحلول.',
            location: "عن بُعد · متوفرون عالميًا · دعم متعدد اللغات",
        },
        footer: {
            main: "الرئيسية",
            mobileApps: "تطبيقات الجوال",
            tagline: 'هندسة حلول تقنية قابلة للتطوير.',
            home: 'الرئيسية',
            about: 'حول',
            skills: 'المهارات',
            projects: 'المشاريع',
            contact: 'تواصل',
            productApps: 'المنتجات والخدمات',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'تعلم الكانتونيز AI App',
                chinese: 'تعلم الصينية AI App',
                thai: 'تعلم الثيين AI App',
                ukrainian: 'تعلم الأوكرانية'
            },
            copyright: '© 2026 Carlier. جميع الحقوق محفوظة.',
            crafted: 'صُنع بحب',
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة"
        },
        accessibility: {
            skipToMain: 'انتقل إلى المحتوى الرئيسي'
        }
    },
    de: {
        nav: {
            about: 'Über',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            productApps: 'Produkte und Dienstleistungen',
            learnChinese: 'Chinesisch lernen App',
            learnCantonese: 'Kantonesisch lernen App',
            learnThai: 'Thailändisch lernen App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Lass uns sprechen'
        },
        hero: {
            title1: 'Konzept, Aufbau, Start, Skalierung & Betrieb',
            title2: '',
            subtitle1: 'Ich baue ',
            highlight1: 'Mobile Apps',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' KI-Systeme und Infrastruktur',
            subtitle4: ',die skalieren.',
            subtitle5: 'Mobile Apps, SaaS, KI-Systeme und Infrastruktur bauen, die skalieren',
            recentReleases: 'Neueste Veröffentlichungen',
            cta: 'Kontaktieren'
        },
        about: {
            tag: 'Über uns',
            title: 'Wir bauen Produkte, die zählen',
            text1: 'Mit Expertise in mobiler Entwicklung, SaaS, KI-Systemen und Systemarchitektur unterstützen wir Startups und Unternehmen dabei, ihre Ideen in robuste, skalierbare Produkte zu verwandeln.',
            text2: 'Ob native Mobile-App, KI-System, plattformübergreifende Lösung oder skalierbare SaaS-Plattform – wir gehen jedes Projekt mit Fokus auf Benutzererfahrung, Leistung und Geschäftsziele an.',
            value1: { title: 'Umsetzung', desc: 'Schnelles Prototyping und iterative Entwicklung, um Ihr Produkt schnell auf den Markt zu bringen.' },
            value2: { title: 'End-to-End', desc: 'Vom Design bis zur Deployment kümmern wir uns um jeden Aspekt der Produktentwicklung.' },
            value3: { title: 'Qualität', desc: 'Sauberer Code, durchdachtes UX und skalierbare Architektur in jedem Projekt.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologien, mit denen wir arbeiten',
            mobile: 'Mobile Entwicklung',
            web: 'Web & SaaS',
            business: 'Business-Software-Lösungen',
            design: 'Design & Produkt',
            ai: 'KI-Systeme',
            infra: 'Infrastruktur'
        },
        projects: {
            tag: 'Ausgewählte Arbeiten',
            title: 'KI Mobile Apps',
            view: 'App herunterladen',
            tags: {
                mobile: 'Mobile App',
                aiScanner: 'KI-Scanner',
                aiTutor: 'KI-Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'KI-gesteuerte Münzscanner-App für Sammler. Identifizieren Sie Münzen sofort, schätzen Sie Marktwerte und katalogisieren Sie Ihre Sammlung.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Sprechen und üben Sie Kantonesisch in Echtzeit mit einem live KI-Kantonesisch-Lehrer mit natürlichem Sprachchat und kamerabasiertem Kontext.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Üben Sie Mandarin in Echtzeit mit einem live KI-Mandarin-Coach mit Echtzeit-Stimme, visiongeführter Übung und sofortiger Korrektur.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Lernen Sie Ukrainisch, üben Sie echte Gespräche und übersetzen Sie in Echtzeit mit einem live KI-Ukrainisch-Lehrer mit Sprachchat, kamerabasiertem Kontext und sofortiger Übersetzung.'
            },
            khru: {
                title: 'AI Agent Khru (noch nicht veröffentlicht)',
                desc: 'Lernen und üben Sie Thai in Echtzeit mit einem live KI-Thai-Lehrer mit Sprachchat, kamerabasiertem Wortschatz und strukturierten Korrekturen.'
            }
        },
        overview: {
            tag: "Konzept, Entwicklung, Launch, Skalierung und Betrieb",
            lead: "Carlier ist ein Unternehmen für Software-Engineering und Produktentwicklung. Wir gestalten und entwickeln digitale Produkte in Produktionsqualität von Anfang bis Ende – vom ersten Konzept und der Architektur über den Launch und die Skalierung bis hin zum laufenden Betrieb.",
            note: "Wir arbeiten remote-first und sind weltweit verfügbar – in den Bereichen Mobile, Web, KI-Systeme, Cybersicherheit und Infrastruktur-Engineering.",
            whatWeDo: "Was wir tun",
            services: {
                product: { title: "Produkt-Engineering", desc: "Ideen in auslieferbare, produktionsreife Produkte verwandeln" },
                ai: { title: "KI- und LLM-Systeme", desc: "Agentische KI, RAG, Orchestrierung und KI-API-Integration" },
                cloud: { title: "Cloud und Infrastruktur", desc: "Multi-Cloud-Architektur, Container, Kubernetes und Infrastructure as Code" },
                business: { title: "Business-Software", desc: "B2B-SaaS, ERP, CRM, Workflow-Automatisierung und Business Intelligence" },
                security: { title: "Cybersicherheit und DevSecOps", desc: "sichere Auslieferung, CI/CD-Automatisierung und System-Härtung" },
            },
            howWeWork: "Wie wir arbeiten",
            steps: {
                concept: { title: "Konzept", desc: "Problem, Nutzer, Einschränkungen und Erfolgskriterien klären" },
                build: { title: "Entwicklung", desc: "Design und Umsetzung mit Blick auf Skalierbarkeit, Zuverlässigkeit und Wartbarkeit" },
                launch: { title: "Launch", desc: "in Produktion bringen, mit den nötigen operativen Grundlagen" },
                scale: { title: "Skalierung und Betrieb", desc: "überwachen, optimieren und betreiben, während Nutzung und Anforderungen wachsen" },
            }
        },
        contact: {
            tag: 'Kontaktieren',
            title: 'Carlier Tech',
            text: 'Verfügbar für Ingenieursprojekte und technische Beratung. Kontaktieren Sie uns, um Anforderungen und Lösungen zu besprechen.',
            location: "Remote-first · Weltweit verfügbar · Mehrsprachiger Support",
        },
        footer: {
            main: "Haupt",
            mobileApps: "Mobile Apps",
            tagline: 'Skalierbare technische Lösungen entwickeln.',
            home: 'Startseite',
            about: 'Über',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            contact: 'Kontakt',
            productApps: 'Produkte und Dienstleistungen',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Kantonesisch lernen AI App',
                chinese: 'Chinesisch lernen AI App',
                thai: 'Thailändisch lernen AI App',
                ukrainian: 'Ukrainisch lernen'
            },
            copyright: '© 2026 Carlier. Alle Rechte vorbehalten.',
            crafted: 'Mit Leidenschaft erstellt',
            privacy: "Datenschutzerklärung",
            terms: "Nutzungsbedingungen"
        },
        accessibility: {
            skipToMain: 'Zum Hauptinhalt springen'
        }
    },
    it: {
        nav: {
            about: 'Chi sono',
            skills: 'Competenze',
            projects: 'Progetti',
            productApps: 'Prodotti e servizi',
            learnChinese: 'Impara il Cinese App',
            learnCantonese: 'Impara il Cantonese App',
            learnThai: 'Impara il Thai App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Parliamone'
        },
        hero: {
            title1: 'Concetto, Costruzione, Lancio, Scala & Operazioni',
            title2: '',
            subtitle1: 'Costruiamo ',
            highlight1: 'App Mobile',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' Sistemi IA e Infrastruttura',
            subtitle4: ',che scalano.',
            subtitle5: 'Costruiamo App Mobile, SaaS, Sistemi IA e Infrastruttura che scalano',
            recentReleases: 'Ultime uscite',
            cta: 'Contattaci'
        },
        about: {
            tag: 'Chi siamo',
            title: 'Costruiamo prodotti che contano',
            text1: 'Con competenze che spaziano dallo sviluppo mobile, SaaS, sistemi IA e architettura dei sistemi, aiutiamo startup e aziende a trasformare le loro idee in prodotti robusti e scalabili.',
            text2: 'Che si tratti di un\'app mobile nativa, un sistema IA, una soluzione multipiattaforma o una piattaforma SaaS scalabile, affrontiamo ogni progetto con focus sull\'esperienza utente, performance e obiettivi di business.',
            value1: { title: 'Esecuzione', desc: 'Prototipazione rapida e sviluppo iterativo per portare il tuo prodotto sul mercato velocemente.' },
            value2: { title: 'End-to-End', desc: 'Dal design al deployment, gestiamo ogni aspetto dello sviluppo del prodotto.' },
            value3: { title: 'Qualità', desc: 'Codice pulito, UX ben pensata e architettura scalabile in ogni progetto.' }
        },
        skills: {
            tag: 'Competenze',
            title: 'Tecnologie con cui lavoriamo',
            mobile: 'Sviluppo Mobile',
            web: 'Web & SaaS',
            business: 'Soluzioni Software Aziendali',
            design: 'Design & Prodotto',
            ai: 'Sistemi IA',
            infra: 'Infrastruttura'
        },
        projects: {
            tag: 'Lavori in Evidenza',
            title: 'App mobili AI',
            view: 'Ottieni l\'app',
            tags: {
                mobile: 'App Mobile',
                aiScanner: 'Scanner IA',
                aiTutor: 'Tutor IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'App di scanner di monete alimentata dall\'IA per collezionisti. Identifica le monete istantaneamente, stima i valori di mercato e cataloga la tua collezione.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Parla e pratica il cantonese in tempo reale con un tutor IA cantonese dal vivo con chat vocale naturale e contesto basato sulla fotocamera.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratica il mandarino in tempo reale con un coach IA mandarino dal vivo con voce in tempo reale, pratica guidata dalla visione e correzioni istantanee.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Impara l’ucraino, pratica conversazioni reali e traduci in tempo reale con un tutor IA ucraino dal vivo con chat vocale, contesto basato sulla fotocamera e traduzione istantanea.'
            },
            khru: {
                title: 'AI Agent Khru (non ancora pubblicato)',
                desc: 'Impara e pratica il tailandese in tempo reale con un tutor IA tailandese dal vivo con chat vocale, vocabolario basato sulla fotocamera e correzioni strutturate.'
            }
        },
        overview: {
            tag: "Concetto, Sviluppo, Lancio, Scalabilità e Operazioni",
            lead: "Carlier è un’azienda di ingegneria del software e sviluppo prodotti. Progettiamo e realizziamo prodotti digitali di livello produttivo end-to-end — dal primo concept e dall’architettura fino al lancio, alla scalabilità e alle operazioni continue.",
            note: "Lavoriamo in remoto e siamo disponibili in tutto il mondo, occupandoci di mobile, web, sistemi di IA, cybersicurezza e ingegneria dell’infrastruttura.",
            whatWeDo: "Cosa facciamo",
            services: {
                product: { title: "Ingegneria di prodotto", desc: "trasformiamo le idee in prodotti pronti per la produzione" },
                ai: { title: "Sistemi di IA e LLM", desc: "IA agentica, RAG, orchestrazione e integrazione di API di IA" },
                cloud: { title: "Cloud e infrastruttura", desc: "architettura multicloud, container, Kubernetes e infrastructure as code" },
                business: { title: "Software aziendale", desc: "SaaS B2B, ERP, CRM, automazione dei flussi di lavoro e business intelligence" },
                security: { title: "Cybersicurezza e DevSecOps", desc: "consegna sicura, automazione CI/CD e hardening dei sistemi" },
            },
            howWeWork: "Come lavoriamo",
            steps: {
                concept: { title: "Concetto", desc: "chiariamo il problema, gli utenti, i vincoli e i criteri di successo" },
                build: { title: "Sviluppo", desc: "progettiamo e realizziamo tenendo conto di scalabilità, affidabilità e manutenibilità" },
                launch: { title: "Lancio", desc: "portiamo in produzione con le basi operative già predisposte" },
                scale: { title: "Scalabilità e operazioni", desc: "monitoriamo, ottimizziamo e gestiamo al crescere dell’utilizzo e dei requisiti" },
            }
        },
        contact: {
            tag: 'Contattaci',
            title: 'Carlier Tech',
            text: 'Disponibile per progetti di ingegneria e consulenza tecnica. Contattaci per discutere di requisiti e soluzioni.',
            location: "In remoto · Disponibili in tutto il mondo · Supporto multilingue",
        },
        footer: {
            main: "Principale",
            mobileApps: "App mobile",
            tagline: 'Ingegneria di soluzioni tecniche scalabili.',
            home: 'Home',
            about: 'Chi sono',
            skills: 'Competenze',
            projects: 'Progetti',
            contact: 'Contatto',
            productApps: 'Prodotti e servizi',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Impara il Cantonese AI App',
                chinese: 'Impara il Cinese AI App',
                thai: 'Impara il Thai AI App',
                ukrainian: 'Impara l\'Ucraino'
            },
            copyright: '© 2026 Carlier. Tutti i diritti riservati.',
            crafted: 'Creato con passione',
            privacy: "Informativa sulla privacy",
            terms: "Termini di servizio"
        },
        accessibility: {
            skipToMain: 'Vai al contenuto principale'
        }
    },
    ko: {
        nav: {
            about: '소개',
            skills: '기술',
            projects: '프로젝트',
            productApps: '제품 및 서비스',
            learnChinese: '중국어 배우기 App',
            learnCantonese: '광둥어 배우기 App',
            learnThai: '태국어 배우기 App',
            coinIdentifier: 'Coin Identifier App',
            cta: '연락하기'
        },
        hero: {
            title1: '컨셉, 빌드, 런치, 스케일 & 운영',
            title2: '',
            subtitle1: '구축 중 ',
            highlight1: '모바일 앱',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' AI 시스템 및 인프라',
            subtitle4: ',확장 가능합니다.',
            subtitle5: '확장 가능한 모바일 앱, SaaS, AI 시스템 및 인프라 구축',
            recentReleases: '최근 출시',
            cta: '연락하기'
        },
        about: {
            tag: '소개',
            title: '중요한 제품을 구축합니다',
            text1: '모바일 개발, SaaS, AI 시스템, 시스템 아키텍처에 대한 전문 지식으로 스타트업과 기업이 아이디어를 견고하고 확장 가능한 제품으로 바꿀 수 있도록 지원합니다.',
            text2: '네이티브 모바일 앱, AI 시스템, 크로스 플랫폼 솔루션 또는 확장 가능한 SaaS 플랫폼이든, 사용자 경험, 성능 및 비즈니스 목표에 중점을 두고 모든 프로젝트를 접근합니다.',
            value1: { title: '실행', desc: '제품을 빠르게 시장에 출시하기 위한 빠른 프로토타이핑 및 반복적 개발.' },
            value2: { title: '종단 간', desc: '디자인에서 배포까지 제품 개발의 모든 측면을 처리합니다.' },
            value3: { title: '품질', desc: '모든 프로젝트에서 깔끔한 코드, 신중한 UX 및 확장 가능한 아키텍처.' }
        },
        skills: {
            tag: '전문성',
            title: '우리가 사용하는 기술',
            mobile: '모바일 개발',
            web: '웹 및 SaaS',
            business: '비즈니스 소프트웨어 솔루션',
            design: '디자인 및 제품',
            ai: 'AI 시스템',
            infra: '인프라'
        },
        projects: {
            tag: '주요 작업',
            title: 'AI 모바일 앱',
            view: '앱 받기',
            tags: {
                mobile: '모바일 앱',
                aiScanner: 'AI 스캐너',
                aiTutor: 'AI 튜터'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '수집가를 위한 AI 기반 동전 스캐너 앱. 동전을 즉시 식별하고, 시장 가치를 추정하며, 컬렉션을 카탈로그화하세요.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '자연스러운 음성 채팅과 카메라 기반 컨텍스트로 라이브 AI 광둥어 강사와 실시간으로 광둥어를 말하고 연습하세요.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '실시간 음성, 비전 기반 연습 및 즉시 수정으로 라이브 AI 만다린 코치와 실시간으로 만다린을 연습하세요.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '우크라이나어를 배우고, 실제 대화를 연습하며, 실시간 음성 채팅, 카메라 기반 문맥, 즉각적인 번역 기능을 갖춘 라이브 AI 우크라이나어 튜터와 함께 실시간 번역을 경험하세요.'
            },
            khru: {
                title: 'AI Agent Khru (아직 게시되지 않음)',
                desc: '음성 채팅, 카메라 기반 어휘 및 구조화된 수정으로 라이브 AI 태어 강사와 실시간으로 태어를 배우고 연습하세요.'
            }
        },
        overview: {
            tag: "개념, 구축, 출시, 확장 및 운영",
            lead: "Carlier는 소프트웨어 엔지니어링과 제품 개발 기업입니다. 첫 개념과 아키텍처부터 출시, 확장, 지속적인 운영까지 프로덕션 수준의 디지털 제품을 엔드투엔드로 설계하고 구축합니다.",
            note: "원격 우선으로 전 세계에 서비스를 제공하며 모바일, 웹, AI 시스템, 사이버 보안, 인프라 엔지니어링 분야에서 일합니다.",
            whatWeDo: "주요 업무",
            services: {
                product: { title: "제품 엔지니어링", desc: "아이디어를 출시 가능한 프로덕션 수준의 제품으로 구현" },
                ai: { title: "AI 및 LLM 시스템", desc: "에이전트형 AI, RAG, 오케스트레이션, AI API 통합" },
                cloud: { title: "클라우드 및 인프라", desc: "멀티클라우드 아키텍처, 컨테이너, Kubernetes, 코드형 인프라" },
                business: { title: "비즈니스 소프트웨어", desc: "B2B SaaS, ERP, CRM, 워크플로 자동화, 비즈니스 인텔리전스" },
                security: { title: "사이버 보안 및 DevSecOps", desc: "안전한 배포, CI/CD 자동화, 시스템 강화" },
            },
            howWeWork: "일하는 방식",
            steps: {
                concept: { title: "개념", desc: "문제, 사용자, 제약 조건, 성공 기준을 명확히 합니다" },
                build: { title: "구축", desc: "확장성, 안정성, 유지보수성을 고려해 설계하고 구현합니다" },
                launch: { title: "출시", desc: "운영 기반을 갖춘 상태로 프로덕션에 배포합니다" },
                scale: { title: "확장 및 운영", desc: "사용량과 요구 사항이 늘어남에 따라 모니터링, 최적화, 운영합니다" },
            }
        },
        contact: {
            tag: '연락하기',
            title: 'Carlier Tech',
            text: '엔지니어링 프로젝트 및 기술 컨설팅을 제공합니다. 요구 사항과 솔루션에 대해 논의하기 위해 문의해 주세요.',
            location: "원격 우선 · 전 세계 이용 가능 · 다국어 지원",
        },
        footer: {
            main: "주요",
            mobileApps: "모바일 앱",
            tagline: '확장 가능한 기술 솔루션 엔지니어링.',
            home: '홈',
            about: '소개',
            skills: '기술',
            projects: '프로젝트',
            contact: '연락처',
            productApps: '제품 및 서비스',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: '광둥어 배우기 AI App',
                chinese: '중국어 배우기 AI App',
                thai: '태국어 배우기 AI App',
                ukrainian: '우크라이나어 배우기'
            },
            copyright: '© 2026 Carlier. 모든 권리 보유.',
            crafted: '열정으로 제작',
            privacy: "개인정보 처리방침",
            terms: "서비스 약관"
        },
        accessibility: {
            skipToMain: '주요 콘텐츠로 건너뛰기'
        }
    },
    ru: {
        nav: {
            about: 'О нас',
            skills: 'Навыки',
            projects: 'Проекты',
            productApps: 'Продукты и услуги',
            learnChinese: 'Учить китайский App',
            learnCantonese: 'Учить кантонский App',
            learnThai: 'Учить тайский App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Давайте поговорим'
        },
        hero: {
            title1: 'Концепция, Сборка, Запуск, Масштабирование & Эксплуатация',
            title2: '',
            subtitle1: 'Создаём ',
            highlight1: 'мобильные приложения',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' системы ИИ и инфраструктура',
            subtitle4: ',которые масштабируются.',
            subtitle5: 'Создаём мобильные приложения, SaaS, системы ИИ и инфраструктура, которые масштабируются',
            cta: 'Связаться'
        },
        about: {
            tag: 'О нас',
            title: 'Создаём продукты, которые имеют значение',
            text1: 'С экспертизой в мобильной разработке, SaaS, системах ИИ и системной архитектуре мы помогаем стартапам и компаниям превращать идеи в надёжные и масштабируемые продукты.',
            text2: 'Будь то нативное мобильное приложение, система ИИ, кроссплатформенное решение или масштабируемая SaaS-платформа, мы подходим к каждому проекту с фокусом на пользовательский опыт, производительность и бизнес-цели.',
            value1: { title: 'Исполнение', desc: 'Быстрое прототипирование и итеративная разработка для быстрого вывода вашего продукта на рынок.' },
            value2: { title: 'От начала до конца', desc: 'От дизайна до деплоя мы управляем каждым аспектом разработки продукта.' },
            value3: { title: 'Качество', desc: 'Чистый код, продуманный UX и масштабируемая архитектура в каждом проекте.' }
        },
        skills: {
            tag: 'Экспертиза',
            title: 'Технологии, с которыми мы работаем',
            mobile: 'Мобильная разработка',
            web: 'Веб и SaaS',
            business: 'Корпоративные программные решения',
            design: 'Дизайн и продукт',
            ai: 'Системы ИИ',
            infra: 'Инфраструктура'
        },
        projects: {
            tag: 'Избранные работы',
            title: 'AI мобильные приложения',
            view: 'Скачать приложение',
            tags: {
                mobile: 'Мобильное приложение',
                aiScanner: 'ИИ-сканер',
                aiTutor: 'ИИ-репетитор'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Приложение для сканирования монет на базе ИИ для коллекционеров. Мгновенно идентифицируйте монеты, оценивайте рыночную стоимость и каталогизируйте свою коллекцию.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Говорите и практикуйте кантонский диалект в реальном времени с живым ИИ-преподавателем кантонского с естественным голосовым чатом и контекстом на основе камеры.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Практикуйте мандаринский в реальном времени с живым ИИ-тренером мандаринского с голосом в реальном времени, практикой с визуальным руководством и мгновенными исправлениями.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Изучайте украинский, практикуйте реальные разговоры и переводите в реальном времени с живым ИИ-преподавателем украинского языка с голосовым чатом, контекстом на основе камеры и мгновенным переводом.'
            },
            khru: {
                title: 'AI Agent Khru (еще не опубликовано)',
                desc: 'Учитесь и практикуйте тайский в реальном времени с живым ИИ-преподавателем тайского с голосовым чатом, словарным запасом на основе камеры и структурированными исправлениями.'
            }
        },
        overview: {
            tag: "Концепция, Разработка, Запуск, Масштабирование и Операции",
            lead: "Carlier — компания по разработке программного обеспечения и продуктов. Мы проектируем и создаём цифровые продукты производственного уровня от начала до конца: от первой концепции и архитектуры до запуска, масштабирования и дальнейшей эксплуатации.",
            note: "Мы работаем удалённо и доступны по всему миру — в сферах мобильных приложений, веба, AI-систем, кибербезопасности и инфраструктурной инженерии.",
            whatWeDo: "Что мы делаем",
            services: {
                product: { title: "Продуктовая инженерия", desc: "превращаем идеи в готовые к выпуску продукты производственного уровня" },
                ai: { title: "AI- и LLM-системы", desc: "агентный AI, RAG, оркестрация и интеграция AI API" },
                cloud: { title: "Облако и инфраструктура", desc: "мультиоблачная архитектура, контейнеры, Kubernetes и инфраструктура как код" },
                business: { title: "Бизнес-ПО", desc: "B2B SaaS, ERP, CRM, автоматизация рабочих процессов и бизнес-аналитика" },
                security: { title: "Кибербезопасность и DevSecOps", desc: "безопасная доставка, автоматизация CI/CD и укрепление систем" },
            },
            howWeWork: "Как мы работаем",
            steps: {
                concept: { title: "Концепция", desc: "проясняем проблему, пользователей, ограничения и критерии успеха" },
                build: { title: "Разработка", desc: "проектируем и внедряем с учётом масштабируемости, надёжности и поддерживаемости" },
                launch: { title: "Запуск", desc: "выводим в продакшн с готовыми операционными основами" },
                scale: { title: "Масштабирование и операции", desc: "мониторим, оптимизируем и эксплуатируем по мере роста нагрузки и требований" },
            }
        },
        contact: {
            tag: 'Связаться',
            title: 'Carlier Tech',
            text: 'Доступен для инженерных проектов и технических консультаций. Свяжитесь с нами, чтобы обсудить требования и решения.',
            location: "Удалённо · Доступны по всему миру · Многоязычная поддержка",
        },
        footer: {
            main: "Основное",
            mobileApps: "Мобильные приложения",
            tagline: 'Разработка масштабируемых технических решений.',
            home: 'Главная',
            about: 'О нас',
            skills: 'Навыки',
            projects: 'Проекты',
            contact: 'Контакт',
            productApps: 'Продукты и услуги',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Учить кантонский AI App',
                chinese: 'Учить китайский AI App',
                thai: 'Учить тайский AI App',
                ukrainian: 'Учить украинский'
            },
            copyright: '© 2026 Carlier. Все права защищены.',
            crafted: 'Создано с любовью',
            privacy: "Политика конфиденциальности",
            terms: "Условия обслуживания"
        },
        accessibility: {
            skipToMain: 'Перейти к основному содержанию'
        }
    },
    pl: {
        nav: {
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            productApps: 'Produkty i usługi',
            learnChinese: 'Naucz się chińskiego App',
            learnCantonese: 'Naucz się kantońskiego App',
            learnThai: 'Naucz się tajskiego App',
            coinIdentifier: 'Coin Identifier App',
            cta: 'Porozmawiajmy'
        },

        hero: {
            title1: 'Pomysł, Budowa, Uruchomienie, Skalowanie & Obsługa',
            title2: '',
            subtitle1: 'Tworząc ',
            highlight1: 'Aplikacje mobilne',
            subtitle2: ', ',
            highlight2: 'SaaS',
            subtitle3: ', ',
            highlight3: ' systemy AI i infrastruktura',
            subtitle4: ',które się skalują.',
            subtitle5: 'Tworząc Aplikacje mobilne, SaaS, systemy AI i infrastruktura, które się skalują',
            recentReleases: 'Najnowsze wydania',
            cta: 'Skontaktuj się'
        },
        about: {
            tag: 'O mnie',
            title: 'Buduję produkty, które mają znaczenie',
            text1: 'Jestem założycielem i inżynierem oprogramowania z pasją do tworzenia wpływowych produktów. Dzięki doświadczeniu od rozwoju mobilnego, przez SaaS, systemy AI i architekturę systemów, pomagam startupom i firmom wcielać ich wizje w życie.',
            text2: 'Niezależnie od tego, czy jest to natywna aplikacja mobilna, system AI, rozwiązanie cross-platform, czy skalowalna platforma SaaS — podchodzę do każdego projektu z naciskiem na doświadczenie użytkownika, wydajność i cele biznesowe.',
            value1: { title: 'Realizacja', desc: 'Szybkie prototypowanie i iteracyjny rozwój, aby szybko wprowadzić produkt na rynek.' },
            value2: { title: 'Od A do Z', desc: 'Od designu po wdrożenie — zajmuję się każdym aspektem rozwoju produktu.' },
            value3: { title: 'Jakość', desc: 'Czysty kod, dopracowane UX i skalowalna architektura w każdym projekcie.' }
        },
        skills: {
            tag: 'Ekspertyza',
            title: 'Technologie, z których korzystam',
            mobile: 'Tworzenie aplikacji mobilnych',
            web: 'Web i SaaS',
            business: 'Rozwiązania biznesowe',
            design: 'Design i produkt',
            ai: 'Systemy AI',
            infra: 'Infrastruktura'
        },
        projects: {
            tag: 'Wyróżnione prace',
            title: 'Aplikacje mobilne AI',
            view: 'Pobierz aplikację',
            tags: {
                mobile: 'Aplikacja mobilna',
                aiScanner: 'AI Scanner',
                aiTutor: 'AI Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplikacja do skanowania monet napędzana przez AI dla kolekcjonerów. Natychmiast rozpoznawaj monety, szacuj wartości rynkowe, sprawdzaj rzadkość i kataloguj swoją kolekcję.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Ucz się kantońskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI kantońskiego — z naturalnym czatem głosowym, kontekstem z kamery i natychmiastowym wsparciem tłumaczenia.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Ucz się chińskiego mandaryńskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI mandaryńskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            },
            vchytel: {
                title: 'AI Agent Vchytel (jeszcze nieopublikowany)',
                desc: 'Ucz się języka ukraińskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI języka ukraińskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            },
            khru: {
                title: 'AI Agent Khru (jeszcze nieopublikowany)',
                desc: 'Ucz się tajskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI tajskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            }
        },
        overview: {
            tag: "Koncepcja, Budowa, Wdrożenie, Skalowanie i Operacje",
            lead: "Carlier to firma zajmująca się inżynierią oprogramowania i rozwojem produktów. Projektujemy i tworzymy produkty cyfrowe klasy produkcyjnej od początku do końca — od pierwszej koncepcji i architektury, przez wdrożenie i skalowanie, po bieżącą eksploatację.",
            note: "Pracujemy zdalnie i jesteśmy dostępni na całym świecie — w obszarach mobile, web, systemów AI, cyberbezpieczeństwa i inżynierii infrastruktury.",
            whatWeDo: "Co robimy",
            services: {
                product: { title: "Inżynieria produktu", desc: "zamieniamy pomysły w gotowe do wdrożenia produkty klasy produkcyjnej" },
                ai: { title: "Systemy AI i LLM", desc: "AI agentowe, RAG, orkiestracja i integracja AI API" },
                cloud: { title: "Chmura i infrastruktura", desc: "architektura multi-cloud, kontenery, Kubernetes i infrastruktura jako kod" },
                business: { title: "Oprogramowanie biznesowe", desc: "B2B SaaS, ERP, CRM, automatyzacja przepływów pracy i business intelligence" },
                security: { title: "Cyberbezpieczeństwo i DevSecOps", desc: "bezpieczne dostarczanie, automatyzacja CI/CD i hartowanie systemów" },
            },
            howWeWork: "Jak pracujemy",
            steps: {
                concept: { title: "Koncepcja", desc: "wyjaśniamy problem, użytkowników, ograniczenia i kryteria sukcesu" },
                build: { title: "Budowa", desc: "projektujemy i wdrażamy z myślą o skalowalności, niezawodności i łatwości utrzymania" },
                launch: { title: "Wdrożenie", desc: "wdrażamy do produkcji z gotowymi podstawami operacyjnymi" },
                scale: { title: "Skalowanie i operacje", desc: "monitorujemy, optymalizujemy i obsługujemy wraz ze wzrostem użycia i wymagań" },
            }
        },
        contact: {
            tag: 'Napisz do nas',
            title: 'Carlier Tech',
            text: 'Dostępny do projektów inżynierskich i konsultacji technicznych. Skontaktuj się ze mną, aby omówić wymagania i rozwiązania.',
            location: "Zdalnie · Dostępni na całym świecie · Wsparcie wielojęzyczne",
        },
        footer: {
            main: "Główne",
            mobileApps: "Aplikacje mobilne",
            tagline: 'Inżynieria skalowalnych rozwiązań technicznych.',
            home: 'Strona główna',
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            contact: 'Kontakt',
            productApps: 'Produkty i usługi',
            landing: {
                aiMobileApps: 'AI Mobile Apps',
                cantonese: 'Naucz się kantońskiego AI App',
                chinese: 'Naucz się chińskiego AI App',
                thai: 'Naucz się tajskiego AI App',
                ukrainian: 'Naucz się ukraińskiego'
            },
            copyright: '© 2026 Carlier. Wszelkie prawa zastrzeżone.',
            crafted: 'Stworzone z pasją',
            privacy: "Polityka prywatności",
            terms: "Warunki korzystania z usługi"
        },
        accessibility: {
            skipToMain: 'Przejdź do treści głównej'
        }
    }
};

// Language labels for the switcher
const langLabels = {
    en: 'EN',
    fr: 'FR',
    pt: 'PT',
    es: 'ES',
    th: 'TH',
    hi: 'HI',
    ja: 'JA',
    ar: 'AR',
    'zh-TW': '繁中',
    'zh-CN': '简中',
    de: 'DE',
    it: 'IT',
    ko: 'KO',
    ru: 'RU',
    uk: 'UK',
    pl: 'PL'
};

// ========================================
// i18n Functions
// ========================================

function getStoredLanguage() {
    return localStorage.getItem('preferred-language') || 'en';
}

function setStoredLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
}

function updateCanonical(lang) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;
    const canonicalUrl = new URL(canonical.href);
    if (lang && lang !== 'en') {
        canonicalUrl.searchParams.set('lang', lang);
    } else {
        canonicalUrl.search = '';
    }
    canonical.setAttribute('href', canonicalUrl.toString());
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update footer landing links to point to the right language pages
    // (these pages use ?lang=xx on the main site and should be passed through).
    const langQuery = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    document.querySelectorAll('.footer-landing-link[data-landing]').forEach(a => {
        const baseHref = a.getAttribute('href')?.split('?')[0] || a.getAttribute('href');
        if (baseHref) {
            a.setAttribute('href', `${baseHref}${langQuery}`);
        }
    });


    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update canonical to be self-referencing for non-default languages
    updateCanonical(lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }

        if (value !== undefined) {
            el.textContent = value;
        }
    });

    // Update language switcher UI
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = langLabels[lang];
    }
}

function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    const langToggle = document.querySelector('.lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langSwitcher || !langToggle) return;

    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
    });

    // Prevent clicks inside the switcher from closing it via the document listener
    langSwitcher.addEventListener('click', (e) => e.stopPropagation());

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langSwitcher.classList.remove('active');
    });

    // Language selection
    langOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setStoredLanguage(lang);
            updateContent(lang);
            langSwitcher.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const preferredLang = getStoredLanguage();
    updateContent(preferredLang);
    initLanguageSwitcher();

    // ========================================
    // Product Apps Dropdown
    // ========================================
    const productsWrapper = document.getElementById('products-nav-item');
    const productsToggle = document.getElementById('products-toggle');

    if (productsWrapper && productsToggle) {
        productsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = productsWrapper.classList.toggle('active');
            productsToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close when clicking outside
        document.addEventListener('click', () => {
            productsWrapper.classList.remove('active');
            productsToggle.setAttribute('aria-expanded', 'false');
        });

        // Prevent clicks inside the dropdown from closing it
        productsWrapper.addEventListener('click', (e) => e.stopPropagation());
    }

    // ========================================
    // Navigation Scroll Effect
    // ========================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Scroll Reveal Animations
    // ========================================
    const revealElements = document.querySelectorAll(
        '.section-header, .about-content, .about-visual, .skill-category, .project-card, .contact-content, .contact-form-wrapper'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ========================================
    // Parallax Effect for Gradient Orbs
    // ========================================
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    });



    // ========================================
    // Counter Animation for Stats
    // ========================================
    const stats = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const text = element.textContent;
        const numericPart = parseInt(text.replace(/[^0-9]/g, ''));
        const suffix = text.replace(/[0-9]/g, '');

        if (isNaN(numericPart)) return;

        const duration = 2000;
        const step = timestamp => {
            if (!element.dataset.startTime) {
                element.dataset.startTime = timestamp;
            }

            const progress = timestamp - element.dataset.startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const current = Math.floor(easeOutQuart * numericPart);

            element.textContent = current + suffix;

            if (percentage < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = text;
            }
        };

        requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ========================================
    // Typing Effect for Code Block
    // ========================================
    const codeContent = document.querySelector('.code-content code');

    if (codeContent) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a subtle animation when code block comes into view
                    entry.target.parentElement.style.animation = 'fadeInUp 0.8s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(codeContent);
    }

    // ========================================
    // Hover Effects Enhancement
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ========================================
    // Keyboard Navigation
    // ========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
            // Close products dropdown
            if (productsWrapper && productsWrapper.classList.contains('active')) {
                productsWrapper.classList.remove('active');
                productsToggle && productsToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // ========================================
    // Prefers Reduced Motion
    // ========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable parallax and complex animations
        orbs.forEach(orb => {
            orb.style.animation = 'none';
        });

        document.querySelectorAll('.scroll-indicator').forEach(el => {
            el.style.display = 'none';
        });
    }
});

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
