/* ============================================================
   Melek Maazaoui — Portfolio
   Interactions : i18n FR/EN, nav, reveals, dialogs, contact
   ============================================================ */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ i18n ============
     Le HTML contient le texte français (source de vérité).
     Les dictionnaires ci-dessous contiennent les versions anglaise (EN) et arabe (AR).
     Le français est capturé depuis le DOM au chargement. */

  var EN = {
    'a11y.skip': 'Skip to content',
    'nav.projects': 'Work',
    'nav.services': 'Services',
    'nav.method': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'hero.badge': 'Available for new projects',
    'hero.title': 'Websites that turn <em>visitors into customers</em>.',
    'hero.lede': "I'm <a class=\"lede-link\" href=\"https://www.linkedin.com/in/melek-maazaoui/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Melek Maazaoui on LinkedIn (opens in a new tab)\">Melek Maazaoui</a>, a freelance web developer based in Tunis. I build showcase websites, online ordering platforms and custom digital solutions that help businesses, restaurants and cafés strengthen their online presence and enhance their image.",
    'hero.lede2': 'My goal: turn your ideas into modern, elegant and effective web experiences, designed around your needs and those of your customers.',
    'hero.cta1': 'See my work',
    'hero.cta2': 'Get in touch',
    'hero.stat1': 'Projects built',
    'hero.stat2': 'Custom-built, no templates',
    'hero.stat3': 'Response time',
    'mq.1': 'Showcase websites',
    'mq.2': 'QR digital menus',
    'mq.3': 'Web applications',
    'mq.4': 'Custom design',
    'mq.5': 'WhatsApp booking',
    'mq.6': 'Deployment &amp; support',
    'mq.7': 'AI tools',
    'sec.projects.kicker': 'Selected work',
    'sec.projects.title': 'Real work, for <em>real clients</em>.',
    'sec.projects.sub': "Every project starts from the client's identity — their colours, their menu, their atmosphere — and turns it into an online experience.",
    'proj.view': 'View project',
    'case.visit': 'Visit the live site',
    'case.wip': 'Coming soon',
    'p.bisou.type': 'Website + online ordering',
    'p.bisou.live': 'Live',
    'p.bisou.desc': 'Much more than a showcase: table ordering by QR code, a cart, and real-time order tracking.',
    'p.mornaco.type': 'Showcase website',
    'p.mornaco.desc': "The printed menu's identity — turquoise, cream, neon violet — turned into a one-page site carrying the full menu: 11 categories, ~200 items.",
    'p.tarkan.type': 'Restaurant website',
    'p.tarkan.desc': "Four pages, a photo gallery and WhatsApp booking for the first Turkish restaurant in Tunis' southern suburbs.",
    'p.porche.type': 'Fine pâtisserie website',
    'p.porche.status': 'In progress',
    'p.porche.desc': 'Cream, black and gold for a fine pâtisserie in Ennasr — signature Cubissimo collection and online ordering included.',
    'p.ps5.type': 'Desktop &amp; mobile application',
    'p.ps5.status': 'In progress',
    'p.ps5.desc': "Managing a gaming café's PS5 stations and billiard tables: timers, slice-based billing, printable receipts, mobile access.",
    'p.douane.type': 'Management software · AI',
    'p.douane.status': 'In progress',
    'p.douane.desc': 'Complete software for a customs brokerage office, assisted by 10 AI agents — AI drafts, the licensed broker validates.',
    'p.caisse.type': 'Management application',
    'p.caisse.status': 'In progress',
    'p.caisse.desc': 'Tracking cash handed to field agents and its justification by invoice, per-company budgets and automatic reminders.',
    'p.ejrijarri.type': 'E-commerce website',
    'p.ejrijarri.desc': 'A Tunisian football card game: 330 cards, online shop and cash-on-delivery anywhere in Tunisia.',
    'p.misterm.type': 'Website + online ordering',
    'p.misterm.desc': 'Tea room and restaurant in Mornag: full menu, cart, real-time order tracking and a staff area.',
    'sec.services.kicker': 'Services',
    'sec.services.title': 'Discover what I can <em>create for you</em>.',
    's1.title': 'Showcase website',
    's1.desc': 'A fast, elegant site true to your identity, designed to convince in seconds.',
    's1.i1': 'Custom design',
    's1.i2': 'Mobile &amp; tablet ready',
    's1.i3': 'Basic local SEO',
    's2.title': 'Digital menu &amp; QR',
    's2.desc': 'Your menu one scan away, editable in real time — no more reprints.',
    's2.i1': 'QR code on the table',
    's2.i2': 'Simple admin panel',
    's2.i3': 'Ordering cart',
    's3.title': 'Apps &amp; business tools',
    's3.desc': 'Tools that fit the way you actually work: management, billing, AI assistants.',
    's3.i1': 'Web, desktop or Android',
    's3.i2': 'Real-time data',
    's3.i3': 'Fully custom',
    's4.title': 'Launch &amp; follow-up',
    's4.desc': 'I handle everything: hosting, domain name — and I stay available after delivery.',
    's4.i1': 'Deployment (Vercel)',
    's4.i2': 'Domain name',
    's4.i3': 'Post-delivery support',
    'sec.method.kicker': 'Process',
    'sec.method.title': 'Clear, efficient, <em>hassle-free</em>.',
    'm1.title': 'Discovery',
    'm1.desc': 'We talk about your business, your customers and what the site needs to achieve.',
    'm2.title': 'Proposal',
    'm2.desc': 'You receive a mockup and a clear quote, with a precise scope and timeline.',
    'm3.title': 'Build',
    'm3.desc': 'I build the site while you follow the progress — your feedback is folded in as we go.',
    'm4.title': 'Launch',
    'm4.desc': 'Going live, final checks — and I stay around for what comes next.',
    'sec.about.kicker': 'About',
    'sec.about.title': 'Behind every project, <em>attention to detail</em>.',
    'about.role': 'Web developer — Tunis',
    'about.p1': 'As a freelance web developer, I design modern, custom websites for cafés, restaurants and businesses that want to grow their online presence and stand out.',
    'about.p2': 'My approach: understand your world, your identity and your needs, and turn them into a unique web experience. From your visual identity to your services, every element is designed to reflect your business and make future customers want to discover you.',
    'about.p3': 'No ready-made templates. No generic solutions. Every site is crafted with care, from the first idea to the last detail.',
    'about.stack.label': 'Tools &amp; technologies',
    'about.langs.label': 'Languages',
    'about.lang1': 'Arabic',
    'about.lang2': 'French',
    'about.lang3': 'English',
    'tl1.title': 'Freelance — websites &amp; online ordering for hospitality',
    'tl1.desc': 'BISOU (live), Le Porche, Mornaco, Tarkan: showcase sites, full menus and table ordering for Tunisian venues.',
    'tl2.title': 'Business tools &amp; AI',
    'tl2.desc': 'PS5 Manager (gaming café, desktop + mobile) and Douane Manager, customs management software assisted by 10 AI agents.',
    'sec.contact.kicker': 'Contact',
    'contact.title': 'Have a project in mind? <em>Let’s talk.</em>',
    'contact.sub': 'Tell me about your business in a few lines — I reply within 24 hours with first ideas.',
    'contact.copy': 'Copy email',
    'contact.time': 'Local time',
    'contact.avail': 'Available for new projects',
    'contact.city': 'Tunis, Tunisia',
    'footer.credit': 'designed &amp; built by hand',
    'footer.top': 'Back to top',
    'case.context': 'Context',
    'case.work': 'What I did',
    'case.stack': 'Stack',
    'd.bisou.ctx': 'The BISOU café wanted more than a showcase site: letting customers order from their table and follow their order live.',
    'd.bisou.w1': 'Menu by category with a floating cart and checkout, order confirmation by scanning a QR code at the table.',
    'd.bisou.w2': 'Real-time order tracking (pending → preparing → ready → served) and an admin panel for the staff.',
    'd.bisou.w3': 'In production on Vercel with Supabase — every update deploys automatically.',
    'd.mornaco.ctx': 'MORNACO had a strong visual identity on its printed menu — turquoise, cream, neon violet — but no online presence at all.',
    'd.mornaco.w1': "One-page site faithfully carrying over the printed menu's identity, down to the neon sign recreated in CSS.",
    'd.mornaco.w2': 'Complete menu — 11 categories, around 200 items — with tabs, every price editable from a single file.',
    'd.mornaco.w3': "Integration of the venue's real photos, optimised for mobile and performance.",
    'd.tarkan.ctx': "The first Turkish restaurant in Tunis' southern suburbs, highly rated — but without any website.",
    'd.tarkan.w1': 'Four-page site: home, tabbed menu, lightbox gallery, contact with WhatsApp booking.',
    'd.tarkan.w2': 'Terracotta and gold palette inspired by charcoal cooking, with a custom-drawn Ottoman motif.',
    'd.tarkan.w3': 'Scroll animations that respect reduced-motion preferences.',
    'd.porche.ctx': 'Le Porche, a fine pâtisserie and café lounge in Ennasr (Ariana), needed an online presence matching its high-end positioning.',
    'd.porche.w1': 'A strict cream, black and gold identity with elegant typography — luxury through restraint.',
    'd.porche.w2': 'A menu of 49 creations across 8 categories, including the signature Cubissimo collection and specialty coffee options.',
    'd.porche.w3': "Full online ordering (cart, checkout, tracking) reusing BISOU's proven system.",
    'd.ps5.ctx': 'A gaming café needed to manage its PS5 stations and billiard tables — FIFA/EA FC sessions, play time, billing — with no suitable software on the market.',
    'd.ps5.w1': 'Real-time timers per station, slice-based billing with editable rates, prorated billiards, history and CSV export.',
    'd.ps5.w2': 'Automatic FIFA/EA FC match detection through the PSN API, printable receipts (80 mm thermal), 100% local data (SQLite).',
    'd.ps5.w3': "Windows desktop app (Electron) + mobile access over the café's WiFi: installable PWA and Android APK.",
    'd.douane.ctx': 'A customs brokerage office was managing files, declarations and invoicing by hand — a slow, error-prone process.',
    'd.douane.w1': 'Complete software: an 11-step file pipeline, client management, invoicing with VAT and fee schedule, legal archiving.',
    'd.douane.w2': '10 specialised AI agents (document extraction, HS classification, duty calculation, declaration drafting…) — AI drafts, the licensed broker always validates.',
    'd.douane.w3': '100% French interface, full demo mode without an API key, complete data backup and restore.',
    'd.caisse.ctx': 'A company was handing cash to its field agents with no reliable way to track amounts justified by invoice.',
    'd.caisse.w1': 'Per-agent tracking of cash handed out and supporting invoices, with expense categories and an instant visual status.',
    'd.caisse.w2': 'Per-company cash budget with automatic countdown and overspend warnings, history and summary.',
    'd.caisse.w3': 'PIN-protected access, automatic SMS reminders to agents, installable app (PWA).',
    'd.ejrijarri.ctx': 'A physical card game built around Tunisian football needed an online shop to sell nationwide.',
    'd.ejrijarri.w1': "Showcase and shop: the game presented at a glance (330 cards, 12 categories, 7 special cards) with the rules front and centre.",
    'd.ejrijarri.w2': 'Online ordering with cash on delivery, shipping anywhere in Tunisia.',
    'd.ejrijarri.w3': 'Festive design in football colours, built to convince in seconds on mobile.',
    'd.misterm.ctx': 'Mister M, a tea room and restaurant in Mornag, wanted its full menu online and smooth ordering from the table.',
    'd.misterm.w1': 'Full menu across 9 categories — coffee, ice treats, mojitos, pastries, crêpes, restaurant and shisha — with cart and online ordering.',
    'd.misterm.w2': 'Real-time order tracking (received → preparing → ready → served) and a dedicated staff area.',
    'd.misterm.w3': 'Black, gold and cream identity, designed for a warm room with a family corner and a big screen.'
  };

  /* Version arabe (العربية) — affichée de droite à gauche (dir="rtl").
     Les noms de marques, de clients et de technologies restent en caractères latins. */
  var AR = {
    'a11y.skip': 'الانتقال إلى المحتوى',
    'nav.projects': 'المشاريع',
    'nav.services': 'الخدمات',
    'nav.method': 'المنهجية',
    'nav.about': 'من أنا',
    'nav.contact': 'تواصل',
    'nav.cta': 'لنتحدث',
    'hero.badge': 'متاح لمشاريع جديدة',
    'hero.title': 'مواقع ويب تحوّل <em>الزوار إلى عملاء</em>.',
    'hero.lede': 'أنا <a class="lede-link" href="https://www.linkedin.com/in/melek-maazaoui/" target="_blank" rel="noopener" aria-label="Melek Maazaoui على LinkedIn (يُفتح في علامة تبويب جديدة)">Melek Maazaoui</a>، مطوّر مواقع ويب مستقل مقيم في تونس. أصمّم مواقع تعريفية، ومنصات للطلب عبر الإنترنت، وحلولاً رقمية حسب الطلب تساعد الشركات والمطاعم والمقاهي على تعزيز حضورها على الإنترنت وإبراز صورتها.',
    'hero.lede2': 'هدفي: تحويل أفكاركم إلى تجارب ويب عصرية وأنيقة وفعّالة، مصمّمة وفق احتياجاتكم واحتياجات عملائكم.',
    'hero.cta1': 'شاهد مشاريعي',
    'hero.cta2': 'تواصل معي',
    'hero.stat1': 'مشاريع منجزة',
    'hero.stat2': 'تصميم خاص، بلا قوالب جاهزة',
    'hero.stat3': 'مدة الرد',
    'mq.1': 'مواقع تعريفية',
    'mq.2': 'قوائم رقمية QR',
    'mq.3': 'تطبيقات ويب',
    'mq.4': 'تصميم حسب الطلب',
    'mq.5': 'الحجز عبر واتساب',
    'mq.6': 'النشر والدعم',
    'mq.7': 'أدوات الذكاء الاصطناعي',
    'sec.projects.kicker': 'مشاريع مختارة',
    'sec.projects.title': 'عمل ملموس، <em>لعملاء حقيقيين</em>.',
    'sec.projects.sub': 'ينطلق كل مشروع من هوية العميل — ألوانه وقائمته وأجوائه — ليحوّلها إلى تجربة على الإنترنت.',
    'proj.view': 'عرض المشروع',
    'case.visit': 'زيارة الموقع',
    'case.wip': 'قريباً',
    'p.bisou.type': 'موقع + طلب عبر الإنترنت',
    'p.bisou.live': 'متاح الآن',
    'p.bisou.desc': 'أكثر من مجرد واجهة: طلب من الطاولة عبر رمز QR، وسلة طلبات، وتتبّع الطلب في الوقت الفعلي.',
    'p.mornaco.type': 'موقع تعريفي',
    'p.mornaco.desc': 'هوية القائمة المطبوعة — فيروزي وكريمي وبنفسجي نيون — تحوّلت إلى موقع من صفحة واحدة يضم القائمة كاملة: 11 فئة ونحو 200 صنف.',
    'p.tarkan.type': 'موقع مطعم',
    'p.tarkan.desc': 'أربع صفحات، ومعرض صور، وحجز عبر واتساب لأول مطعم تركي في الضاحية الجنوبية لتونس.',
    'p.porche.type': 'موقع محل حلويات فاخرة',
    'p.porche.status': 'قيد الإنجاز',
    'p.porche.desc': 'الكريمي والأسود والذهبي لمحل حلويات فاخرة في النصر — مع مجموعة Cubissimo المميزة والطلب عبر الإنترنت.',
    'p.ps5.type': 'تطبيق للحاسوب والهاتف',
    'p.ps5.status': 'قيد الإنجاز',
    'p.ps5.desc': 'إدارة أجهزة PS5 وطاولات البلياردو في مقهى ألعاب: توقيت، وفوترة حسب الشرائح، وإيصالات قابلة للطباعة، ونفاذ عبر الهاتف.',
    'p.douane.type': 'برنامج تصرّف · ذكاء اصطناعي',
    'p.douane.status': 'قيد الإنجاز',
    'p.douane.desc': 'برنامج متكامل لمكتب وكيل ديواني، يساعده 10 وكلاء ذكاء اصطناعي — الذكاء الاصطناعي يقترح، والوكيل المعتمد يصادق.',
    'p.caisse.type': 'تطبيق تصرّف',
    'p.caisse.status': 'قيد الإنجاز',
    'p.caisse.desc': 'متابعة الأموال النقدية المسلّمة للأعوان الميدانيين وتبريرها بالفواتير، مع ميزانيات لكل شركة وتذكيرات آلية.',
    'p.ejrijarri.type': 'موقع تجارة إلكترونية',
    'p.ejrijarri.desc': 'لعبة بطاقات تونسية حول كرة القدم: 330 بطاقة، ومتجر على الإنترنت، والدفع عند الاستلام في كامل أنحاء تونس.',
    'p.misterm.type': 'موقع + طلب عبر الإنترنت',
    'p.misterm.desc': 'قاعة شاي ومطعم في مرناق: قائمة كاملة، وسلة طلبات، وتتبّع الطلب في الوقت الفعلي، وفضاء خاص بالفريق.',
    'sec.services.kicker': 'الخدمات',
    'sec.services.title': 'اكتشف ما يمكنني <em>إنجازه لك</em>.',
    's1.title': 'موقع تعريفي',
    's1.desc': 'موقع سريع وأنيق يعكس هويتك، مصمّم ليُقنع في ثوانٍ.',
    's1.i1': 'تصميم حسب الطلب',
    's1.i2': 'متوافق مع الهاتف واللوحة',
    's1.i3': 'تحسين أساسي للظهور المحلي',
    's2.title': 'قائمة رقمية ورمز QR',
    's2.desc': 'قائمتك على بُعد مسح واحد، قابلة للتعديل فوراً — وداعاً لإعادة الطباعة.',
    's2.i1': 'رمز QR على الطاولة',
    's2.i2': 'لوحة إدارة بسيطة',
    's2.i3': 'سلة طلبات',
    's3.title': 'تطبيقات وأدوات مهنية',
    's3.desc': 'أدوات تتلاءم مع طريقة عملك: التصرّف، والفوترة، والمساعدات الذكية.',
    's3.i1': 'ويب أو حاسوب أو أندرويد',
    's3.i2': 'بيانات في الوقت الفعلي',
    's3.i3': 'حسب الطلب بالكامل',
    's4.title': 'الإطلاق والمتابعة',
    's4.desc': 'أتكفّل بكل شيء: الاستضافة واسم النطاق — وأبقى متاحاً بعد التسليم.',
    's4.i1': 'النشر (Vercel)',
    's4.i2': 'اسم النطاق',
    's4.i3': 'دعم بعد التسليم',
    'sec.method.kicker': 'المنهجية',
    'sec.method.title': 'واضح وفعّال <em>ودون تعقيد</em>.',
    'm1.title': 'الحوار',
    'm1.desc': 'نتحدث عن نشاطك وعملائك وما يجب أن يحققه الموقع.',
    'm2.title': 'العرض',
    'm2.desc': 'تستلم نموذجاً أولياً وعرض سعر واضحاً، مع نطاق عمل وآجال محددة.',
    'm3.title': 'التطوير',
    'm3.desc': 'أبني الموقع وتتابع تقدّمه — وتُدمج ملاحظاتك أولاً بأول.',
    'm4.title': 'الإطلاق',
    'm4.desc': 'النشر على الإنترنت والتحقق النهائي — وأبقى متاحاً لما بعد ذلك.',
    'sec.about.kicker': 'من أنا',
    'sec.about.title': 'وراء كل مشروع، <em>عناية بأدق التفاصيل</em>.',
    'about.role': 'مطوّر ويب — تونس',
    'about.p1': 'بصفتي مطوّر ويب مستقلاً، أصمّم مواقع عصرية وحسب الطلب للمقاهي والمطاعم والشركات التي ترغب في تطوير حضورها على الإنترنت والتميّز.',
    'about.p2': 'منهجيتي: فهم عالمك وهويتك واحتياجاتك لتحويلها إلى تجربة ويب فريدة. من هويتك البصرية إلى خدماتك، كل عنصر مدروس ليعكس نشاطك ويشجّع عملاءك المستقبليين على اكتشافك.',
    'about.p3': 'لا قوالب جاهزة. لا حلول عامة. كل موقع يُصمَّم بعناية، من الفكرة الأولى حتى آخر تفصيل.',
    'about.stack.label': 'الأدوات والتقنيات',
    'about.langs.label': 'اللغات',
    'about.lang1': 'العربية',
    'about.lang2': 'الفرنسية',
    'about.lang3': 'الإنجليزية',
    'tl1.title': 'عمل مستقل — مواقع وطلب عبر الإنترنت لقطاع المطاعم',
    'tl1.desc': 'BISOU (متاح الآن)، Le Porche، Mornaco، Tarkan: مواقع تعريفية، وقوائم كاملة، وطلب من الطاولة لمحلات تونسية.',
    'tl2.title': 'أدوات مهنية وذكاء اصطناعي',
    'tl2.desc': 'PS5 Manager (مقهى ألعاب، حاسوب + هاتف) و Douane Manager، برنامج تصرّف ديواني يساعده 10 وكلاء ذكاء اصطناعي.',
    'sec.contact.kicker': 'تواصل',
    'contact.title': 'لديك مشروع؟ <em>لنتحدث.</em>',
    'contact.sub': 'حدّثني عن نشاطك في بضعة أسطر — أردّ خلال 24 ساعة بأولى الأفكار.',
    'contact.copy': 'نسخ البريد',
    'contact.time': 'التوقيت المحلي',
    'contact.avail': 'متاح لمشاريع جديدة',
    'contact.city': 'تونس العاصمة، تونس',
    'footer.credit': 'صُمّم وطُوّر يدوياً',
    'footer.top': 'العودة إلى الأعلى',
    'case.context': 'السياق',
    'case.work': 'ما أنجزته',
    'case.stack': 'التقنيات',
    'd.bisou.ctx': 'أراد مقهى BISOU أكثر من مجرد موقع تعريفي: تمكين زبائنه من الطلب من طاولتهم ومتابعة طلبهم مباشرة.',
    'd.bisou.w1': 'قائمة حسب الفئات مع سلة عائمة وإتمام للطلب، وتأكيد الطلب بمسح رمز QR على الطاولة.',
    'd.bisou.w2': 'تتبّع الطلب في الوقت الفعلي (قيد الانتظار ← قيد التحضير ← جاهز ← تم التقديم) ولوحة إدارة للفريق.',
    'd.bisou.w3': 'في الإنتاج على Vercel مع Supabase — كل تحديث يُنشر تلقائياً.',
    'd.mornaco.ctx': 'كانت لـ MORNACO هوية بصرية قوية على قائمتها المطبوعة — فيروزي وكريمي وبنفسجي نيون — لكن دون أي حضور على الإنترنت.',
    'd.mornaco.w1': 'موقع من صفحة واحدة ينقل بأمانة هوية القائمة المطبوعة، حتى اللافتة المضيئة أُعيد إنشاؤها بـ CSS.',
    'd.mornaco.w2': 'قائمة كاملة — 11 فئة ونحو 200 صنف — مع تبويبات، وكل الأسعار قابلة للتعديل من ملف واحد.',
    'd.mornaco.w3': 'دمج الصور الحقيقية للمحل، مع تحسين للهاتف وللأداء.',
    'd.tarkan.ctx': 'أول مطعم للأطباق التركية في الضاحية الجنوبية لتونس، يحظى بتقييمات ممتازة — لكن دون أي موقع ويب.',
    'd.tarkan.w1': 'موقع من أربع صفحات: الرئيسية، وقائمة بتبويبات، ومعرض صور، وصفحة تواصل مع الحجز عبر واتساب.',
    'd.tarkan.w2': 'ألوان الطين المحروق والذهبي مستوحاة من الطهي على الفحم، مع زخرفة عثمانية مرسومة خصيصاً.',
    'd.tarkan.w3': 'حركات عند التمرير تحترم تفضيلات تقليل الحركة.',
    'd.porche.ctx': 'احتاج Le Porche، محل الحلويات الفاخرة والمقهى في النصر (أريانة)، إلى حضور على الإنترنت يليق بمكانته الراقية.',
    'd.porche.w1': 'هوية صارمة بالكريمي والأسود والذهبي، وخطوط أنيقة — الفخامة في البساطة.',
    'd.porche.w2': 'قائمة من 49 إبداعاً في 8 فئات، منها مجموعة Cubissimo المميزة وخيارات القهوة المختصة.',
    'd.porche.w3': 'طلب كامل عبر الإنترنت (سلة، إتمام الطلب، تتبّع) يعتمد على نظام BISOU المجرَّب.',
    'd.ps5.ctx': 'احتاج مقهى ألعاب إلى إدارة أجهزة PS5 وطاولات البلياردو — جلسات FIFA/EA FC، ومدة اللعب، والفوترة — دون وجود برنامج مناسب في السوق.',
    'd.ps5.w1': 'توقيت فوري لكل جهاز، وفوترة حسب الشرائح بأسعار قابلة للتعديل، وبلياردو بالتناسب، وسجل وتصدير CSV.',
    'd.ps5.w2': 'رصد آلي لمباريات FIFA/EA FC عبر واجهة PSN، وإيصالات قابلة للطباعة (حرارية 80 مم)، وبيانات محلية 100% (SQLite).',
    'd.ps5.w3': 'تطبيق لحاسوب Windows (Electron) + نفاذ عبر الهاتف على شبكة WiFi المقهى: تطبيق PWA قابل للتثبيت وملف APK لأندرويد.',
    'd.douane.ctx': 'كان مكتب وكيل ديواني يدير الملفات والتصاريح والفوترة يدوياً — عملية بطيئة وعرضة للأخطاء.',
    'd.douane.w1': 'برنامج متكامل: مسار ملف من 11 مرحلة، وإدارة الحرفاء، وفوترة مع الأداء على القيمة المضافة والتعريفة، وأرشفة قانونية.',
    'd.douane.w2': '10 وكلاء ذكاء اصطناعي متخصصين (استخراج الوثائق، التصنيف التعريفي، احتساب المعاليم، إعداد التصاريح…) — الذكاء الاصطناعي يقترح، والوكيل المعتمد يصادق دائماً.',
    'd.douane.w3': 'واجهة بالفرنسية بالكامل، ووضع تجريبي كامل دون مفتاح API، ونسخ احتياطي واسترجاع كامل للبيانات.',
    'd.caisse.ctx': 'كانت شركة تسلّم أموالاً نقدية لأعوانها الميدانيين دون وسيلة موثوقة لمتابعة المبالغ المبرَّرة بالفواتير.',
    'd.caisse.w1': 'متابعة لكل عون للأموال المسلّمة والفواتير المبرِّرة، مع فئات للمصاريف وحالة مرئية فورية.',
    'd.caisse.w2': 'ميزانية صندوق لكل شركة مع خصم آلي وتنبيه عند التجاوز، وسجل وحصيلة.',
    'd.caisse.w3': 'نفاذ محمي برمز PIN، وتذكيرات آلية بالرسائل القصيرة للأعوان، وتطبيق قابل للتثبيت (PWA).',
    'd.ejrijarri.ctx': 'احتاجت لعبة بطاقات حول كرة القدم التونسية إلى متجر على الإنترنت للبيع في كامل البلاد.',
    'd.ejrijarri.w1': 'واجهة ومتجر: تقديم اللعبة في لمحة (330 بطاقة، 12 فئة، 7 بطاقات خاصة) مع القواعد في الواجهة.',
    'd.ejrijarri.w2': 'طلب عبر الإنترنت مع الدفع عند الاستلام، وشحن إلى كامل أنحاء تونس.',
    'd.ejrijarri.w3': 'تصميم احتفالي بألوان كرة القدم، مصمّم ليُقنع في ثوانٍ على الهاتف.',
    'd.misterm.ctx': 'أرادت Mister M، قاعة الشاي والمطعم في مرناق، قائمة كاملة على الإنترنت وطلباً سلساً من الطاولة.',
    'd.misterm.w1': 'قائمة كاملة في 9 فئات — قهوة، مثلجات، موهيتو، حلويات، كريب، مطعم وشيشة — مع سلة وطلب عبر الإنترنت.',
    'd.misterm.w2': 'تتبّع الطلب في الوقت الفعلي (مُستلَم ← قيد التحضير ← جاهز ← تم التقديم) وفضاء مخصص للفريق.',
    'd.misterm.w3': 'هوية بالأسود والذهبي والكريمي، مصمّمة لقاعة دافئة مع ركن عائلي وشاشة كبيرة.'
  };

  var META = {
    fr: {
      title: 'Melek Maazaoui — Développeur web freelance à Tunis',
      desc: 'Sites vitrines, menus digitaux QR et outils métier pour cafés, restaurants et commerces. Développeur web freelance basé à Tunis — projets sur-mesure, sans template.',
      langGroup: 'Langue',
      menuLabel: 'Ouvrir le menu',
      closeLabel: 'Fermer',
      themeToDark: 'Passer en mode sombre',
      themeToLight: 'Passer en mode clair',
      copied: 'Copié !'
    },
    en: {
      title: 'Melek Maazaoui — Freelance web developer in Tunis',
      desc: 'Showcase websites, QR digital menus and business tools for cafés, restaurants and local businesses. Freelance web developer based in Tunis — custom work, no templates.',
      langGroup: 'Language',
      menuLabel: 'Open menu',
      closeLabel: 'Close',
      themeToDark: 'Switch to dark mode',
      themeToLight: 'Switch to light mode',
      copied: 'Copied!'
    },
    ar: {
      title: 'Melek Maazaoui — مطوّر مواقع ويب مستقل في تونس',
      desc: 'مواقع تعريفية، وقوائم رقمية QR، وأدوات مهنية للمقاهي والمطاعم والمحلات. مطوّر مواقع ويب مستقل مقيم في تونس — مشاريع حسب الطلب، بلا قوالب جاهزة.',
      langGroup: 'اللغة',
      menuLabel: 'فتح القائمة',
      closeLabel: 'إغلاق',
      themeToDark: 'التبديل إلى الوضع الداكن',
      themeToLight: 'التبديل إلى الوضع الفاتح',
      copied: 'تم النسخ!'
    }
  };

  var FR = {};
  var i18nNodes = document.querySelectorAll('[data-i18n]');
  i18nNodes.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in FR)) FR[k] = el.innerHTML;
  });

  var DICTS = { fr: FR, en: EN, ar: AR };
  var currentLang = 'fr';
  var langSwitch = document.getElementById('lang-switch');
  var langBtns = langSwitch ? langSwitch.querySelectorAll('[data-lang]') : [];
  var menuBtn = document.getElementById('menu-toggle');
  var metaDesc = document.querySelector('meta[name="description"]');

  function updateLangButtons(lang) {
    langBtns.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    if (langSwitch) langSwitch.setAttribute('aria-label', META[lang].langGroup);
  }

  function setLang(lang) {
    if (!DICTS[lang]) lang = 'fr';
    var dict = DICTS[lang];
    i18nNodes.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = META[lang].title;
    if (metaDesc) metaDesc.setAttribute('content', META[lang].desc);
    updateLangButtons(lang);
    menuBtn.setAttribute('aria-label', META[lang].menuLabel);
    document.querySelectorAll('.case-close').forEach(function (btn) {
      btn.setAttribute('aria-label', META[lang].closeLabel);
    });
    currentLang = lang;
    updateThemeButton();
    try { localStorage.setItem('lang', lang); } catch (e) { /* stockage indisponible */ }
    updateClock();
  }

  /* ============ Thème clair / sombre ============
     Le site s'ouvre en mode clair (posé dans <head>, sans flash).
     Ici : le bouton soleil/lune et la mémorisation du choix du visiteur. */
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function updateThemeButton() {
    if (!themeBtn) return;
    var dark = currentTheme() === 'dark';
    var labels = META[currentLang] || META.fr;
    themeBtn.setAttribute('aria-label', dark ? labels.themeToLight : labels.themeToDark);
    themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  function applyTheme(theme, animate) {
    if (animate && !reduceMotion) {
      root.classList.add('theme-anim');
      setTimeout(function () { root.classList.remove('theme-anim'); }, 400);
    }
    root.setAttribute('data-theme', theme);
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0B1220' : '#F6F8FC');
    updateThemeButton();
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
      try { localStorage.setItem('theme', next); } catch (e) { /* stockage indisponible */ }
    });
  }

  updateThemeButton();

  var storedLang = null;
  try { storedLang = localStorage.getItem('lang'); } catch (e) { /* stockage indisponible */ }
  var navLang = (navigator.language || 'fr').toLowerCase();
  var initialLang = DICTS[storedLang] ? storedLang
    : navLang.indexOf('fr') === 0 ? 'fr'
    : navLang.indexOf('ar') === 0 ? 'ar'
    : 'en';
  if (initialLang !== 'fr') setLang(initialLang);
  else updateLangButtons('fr');

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) setLang(lang);
    });
  });

  /* ============ Header on scroll ============ */
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ Mobile menu ============ */
  var mobileMenu = document.getElementById('mobile-menu');

  function toggleMenu(open) {
    var isOpen = typeof open === 'boolean' ? open : mobileMenu.hidden;
    mobileMenu.hidden = !isOpen;
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  }

  menuBtn.addEventListener('click', function () { toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileMenu.hidden) toggleMenu(false);
  });

  /* ============ Scroll spy ============ */
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (a) {
    var sec = document.querySelector(a.getAttribute('href'));
    if (sec) sections.push({ link: a, sec: sec });
  });
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sections.forEach(function (s) {
          s.link.setAttribute('aria-current', String(s.sec === entry.target));
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s.sec); });
  }

  /* ============ Reveal on scroll ============ */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      var i = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty('--reveal-delay', Math.min(i * 70, 280) + 'ms');
        entry.target.classList.add('in');
        ro.unobserve(entry.target);
        i++;
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { ro.observe(el); });

    /* Filet de sécurité : si l'observer ne s'est jamais déclenché
       (webview qui ne rend pas, etc.), on affiche tout. */
    var revealFailsafe = function () {
      setTimeout(function () {
        if (document.visibilityState !== 'visible') return;
        if (!document.querySelector('.reveal.in')) {
          reveals.forEach(function (el) { el.classList.add('in'); });
        }
      }, 800);
    };
    revealFailsafe();
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') revealFailsafe();
    });
  }

  /* ============ Compteurs ============ */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (reduceMotion) { el.textContent = target; return; }
    var start = null;
    var dur = 1100;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        co.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ============ Dialogs études de cas ============ */
  document.querySelectorAll('[data-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dlg = document.getElementById(btn.getAttribute('data-dialog'));
      if (!dlg) return;
      if (typeof dlg.showModal === 'function') {
        dlg.showModal();
        document.body.classList.add('no-scroll');
      }
    });
  });
  document.querySelectorAll('dialog.case').forEach(function (dlg) {
    dlg.querySelector('.case-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
    dlg.addEventListener('close', function () {
      document.body.classList.remove('no-scroll');
    });
  });

  /* ============ Copier l'email ============ */
  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    var copyLabel = copyBtn.querySelector('[data-i18n]');
    var icCopy = copyBtn.querySelector('.ic-copy');
    var icCheck = copyBtn.querySelector('.ic-check');
    var copyTimer = null;

    function showCopied() {
      copyLabel.textContent = META[currentLang].copied;
      icCopy.hidden = true;
      icCheck.hidden = false;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () {
        copyLabel.innerHTML = DICTS[currentLang]['contact.copy'];
        icCopy.hidden = false;
        icCheck.hidden = true;
      }, 2000);
    }

    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied, function () { fallbackCopy(email); });
      } else {
        fallbackCopy(email);
      }
    });

    function fallbackCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showCopied(); } catch (e) { /* copie impossible */ }
      document.body.removeChild(ta);
    }
  }

  /* ============ Heure locale (Tunis) ============ */
  var timeEl = document.getElementById('local-time');
  function updateClock() {
    if (!timeEl) return;
    try {
      timeEl.textContent = new Intl.DateTimeFormat({ fr: 'fr-FR', en: 'en-GB', ar: 'ar-TN' }[currentLang], {
        timeZone: 'Africa/Tunis',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date());
    } catch (e) {
      timeEl.textContent = new Date().toLocaleTimeString().slice(0, 5);
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  /* ============ Année ============ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
