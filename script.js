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
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'hero.badge': 'Available for new projects',
    'hero.title': 'Software and websites <em>built around your business</em>.',
    'hero.lede': 'I’m <a class="lede-link" href="https://www.linkedin.com/in/melek-maazaoui/" target="_blank" rel="noopener" aria-label="Melek Maazaoui on LinkedIn (opens in a new tab)">Melek Maazaoui</a>, a developer based in Tunis. I build custom management and automation software, and websites that turn visitors into customers.',
    'hero.cta1': 'See my work',
    'hero.cta2': 'Get in touch',
    'hero.stat2': 'Custom-built, no templates',
    'hero.stat3': 'to get your first ideas',
    'sec.projects.title': 'Real work, for <em>real clients</em>.',
    'sec.projects.sub': "Every project starts from the client's identity — their colours, their menu, their atmosphere — and turns it into an online experience.",
    'proj.view': 'Details',
    'case.visit': 'Visit the live site',
    'proj.live': 'Live',
    'p.garrara.type': 'Trilingual corporate website',
    'p.garrara.desc': 'Redesign for an energy and agri-food trader: a 31-product catalogue and online quote requests, in English, French and Arabic.',
    'p.eightin.type': 'Website + digital menu',
    'p.eightin.desc': 'A café-bakery in Boumhal: full menu with search, a “pay at the counter” order ticket, and prices editable from an admin area.',
    'p.sinda.type': 'Office automation',
    'p.sinda.status': 'In progress',
    'p.sinda.desc': 'An agent that fills in the SINDA2000 customs application from an Excel file — every value is checked, nothing is validated without a human.',
    'p.mornaco.type': 'Showcase website',
    'p.mornaco.desc': "The printed menu's identity — turquoise, cream, neon violet — turned into a one-page site carrying the full menu: 11 categories, ~200 items.",
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
    's3.title': 'Business software &amp; automation',
    's3.desc': 'Tools that fit the way you work: management, tracking, invoicing, automated data entry. Web, desktop or Android, fully custom.',
    's3.i1': 'Real-time data',
    's3.i2': 'Automated data entry',
    's3.i3': 'Human validation',
    's4.title': 'Launch &amp; follow-up',
    's4.desc': 'I handle everything: hosting, domain name — and I stay available after delivery.',
    's4.i1': 'Deployment (Vercel)',
    's4.i2': 'Domain name',
    's4.i3': 'Post-delivery support',
    'sec.method.kicker': 'Process',
    'sec.method.title': 'Clear, efficient, <em>hassle-free</em>.',
    'm1.title': 'Discovery',
    'm1.desc': 'We talk about your business, your customers and what the tool or website needs to achieve.',
    'm2.title': 'Proposal',
    'm2.desc': 'You receive a mockup and a clear quote, with a precise scope and timeline.',
    'm3.title': 'Build',
    'm3.desc': 'I build the site while you follow the progress — your feedback is folded in as we go.',
    'm4.title': 'Launch',
    'm4.desc': 'Going live, final checks — and I stay around for what comes next.',
    'sec.about.kicker': 'About',
    'about.role': 'Developer — Tunis',
    'about.p1': 'I build custom business software and websites for companies, cafés and restaurants. My approach: understand your world and the way you work, then turn it into simple, effective tools.',
    'about.p3': 'No ready-made templates. No generic solutions. Every site is crafted with care, from the first idea to the last detail.',
    'about.stack.label': 'Tools &amp; technologies',
    'about.langs.label': 'Languages',
    'about.lang1': 'Arabic',
    'about.lang2': 'French',
    'about.lang3': 'English',
    'tl1.title': 'Freelance — websites &amp; online ordering',
    'tl1.desc': 'Garrara, Eight’In, Mister M Coffee, Ejry &amp; Jarry, Mornaco: showcase sites, online menus, ordering and e-commerce for Tunisian and international businesses.',
    'tl2.title': 'Business tools &amp; automation',
    'tl2.desc': 'Caisse Tracker (cash tracking per field agent) and SINDA Agent, automated data entry into the SINDA2000 customs application.',
    'sec.contact.kicker': 'Contact',
    'contact.title': 'Have a project in mind? <em>Let’s talk.</em>',
    'contact.sub': 'Describe what you need in a few lines: I’ll reply within 24 hours with first ideas.',
    'footer.credit': 'designed &amp; built by hand',
    'footer.top': 'Back to top',
    'case.context': 'Context',
    'case.work': 'What I did',
    'case.stack': 'Stack',
    'd.garrara.ctx': 'Garrara International Trading (GIT), an oil, gas and agri-food trader based in Djibouti with offices in Togo, Tunisia and Morocco, needed a website matching its international reach.',
    'd.garrara.w1': 'A complete corporate site: Energy and Agribusiness divisions, a network spanning North, West and East Africa, leadership and commitments.',
    'd.garrara.w2': 'A filterable 31-product catalogue and a quote request form (product, quantity, Incoterm, destination port) emailed through a serverless function.',
    'd.garrara.w3': 'Three real languages — English, French and right-to-left Arabic — light and dark modes, and HTTP security headers.',
    'd.eightin.ctx': 'Eight’In Flour &amp; Coffee, a café and bakery in Boumhal (southern suburbs of Tunis), wanted an online menu true to its Instagram identity and easy to update.',
    'd.eightin.w1': 'Tabbed menu (Drinks, Sweet &amp; Brunch, Savory) in accordion cards, instant menu search and a featured selection.',
    'd.eightin.w2': 'A cart with a “pay at the counter” ticket to show at checkout; items and prices managed from an admin page backed by Supabase, with a built-in fallback menu.',
    'd.eightin.w3': 'Navy and sky-blue identity taken from the shop sign, a “brush stroke” motif, and a bilingual French / English site.',
    'd.sinda.w1': 'An automation agent: the team picks an Excel file, clicks Start, and the agent fills SINDA2000 row by row.',
    'd.sinda.w2': 'Safety first: every value is read back before and after entry, no dialog is confirmed without reading its text, and the agent stops rather than guesses.',
    'd.sinda.w3': 'A mandatory trial mode before real mode; the final validation always stays with the professional.',
    'd.mornaco.ctx': 'MORNACO had a strong visual identity on its printed menu — turquoise, cream, neon violet — but no online presence at all.',
    'd.mornaco.w1': "One-page site faithfully carrying over the printed menu's identity, down to the neon sign recreated in CSS.",
    'd.mornaco.w2': 'Complete menu — 11 categories, around 200 items — with tabs, every price editable from a single file.',
    'd.mornaco.w3': "Integration of the venue's real photos, optimised for mobile and performance.",
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
    'd.misterm.w3': 'Black, gold and cream identity, designed for a warm room with a family corner and a big screen.',
    'nav.software': 'Software',
    'nav.sites': 'Websites',
    'hero.statSoft': 'business software tools<br>in development',
    'hero.statSites': 'websites live',
    'sec.soft.kicker': 'Business software',
    'sec.soft.title': 'Tools that do the work <em>for you</em>.',
    'sec.soft.sub': 'Built with the teams who use them, around the way they actually work — with the final validation always in the professional’s hands.',
    'soft.tag': 'Software',
    'sec.sites.kicker': 'Websites · 5 live',
    'proj.visit': 'Visit',
    'contact.p1': 'Reply within 24 hours',
    'contact.p2': 'Your information stays private',
    'contact.direct': 'Or write directly to',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone / WhatsApp',
    'form.phoneHint': '· for a faster reply',
    'form.message': 'Describe what you need',
    'form.submit': 'Send my request',
    'form.ph.name': 'Your name',
    'form.ph.email': 'you@example.com',
    'form.ph.message': 'E.g. we enter our invoices by hand and want to track each agent’s expenses…'
  };

  /* Version arabe (العربية) — affichée de droite à gauche (dir="rtl").
     Les noms de marques, de clients et de technologies restent en caractères latins. */
  var AR = {
    'a11y.skip': 'الانتقال إلى المحتوى',
    'nav.services': 'الخدمات',
    'nav.about': 'من أنا',
    'nav.contact': 'تواصل',
    'nav.cta': 'لنتحدث',
    'hero.badge': 'متاح لمشاريع جديدة',
    'hero.title': 'برمجيات ومواقع ويب <em>مصمَّمة لنشاطك</em>.',
    'hero.lede': 'أنا <a class="lede-link" href="https://www.linkedin.com/in/melek-maazaoui/" target="_blank" rel="noopener" aria-label="Melek Maazaoui على LinkedIn (يُفتح في علامة تبويب جديدة)">Melek Maazaoui</a>، مطوّر مقيم في تونس. أصمّم برمجيات تصرّف وأتمتة حسب الطلب، ومواقع ويب تحوّل الزوّار إلى عملاء.',
    'hero.cta1': 'اكتشف أعمالي',
    'hero.cta2': 'تواصل معي',
    'hero.stat2': 'تصميم خاص، بلا قوالب جاهزة',
    'hero.stat3': 'لتلقّي أولى الأفكار',
    'sec.projects.title': 'عمل ملموس، <em>لعملاء حقيقيين</em>.',
    'sec.projects.sub': 'ينطلق كل مشروع من هوية العميل — ألوانه وقائمته وأجوائه — ليحوّلها إلى تجربة على الإنترنت.',
    'proj.view': 'التفاصيل',
    'case.visit': 'زيارة الموقع',
    'proj.live': 'متاح الآن',
    'p.garrara.type': 'موقع مؤسساتي بثلاث لغات',
    'p.garrara.desc': 'إعادة تصميم موقع شركة تجارة في الطاقة والمواد الغذائية: كتالوج من 31 منتجاً وطلب عروض أسعار عبر الإنترنت، بالإنجليزية والفرنسية والعربية.',
    'p.eightin.type': 'موقع + قائمة رقمية',
    'p.eightin.desc': 'مقهى ومخبزة في بومهل: قائمة كاملة مع بحث، وتذكرة «الطلب عند الصندوق»، وأسعار قابلة للتعديل من فضاء الإدارة.',
    'p.sinda.type': 'أتمتة مكتبية',
    'p.sinda.status': 'قيد الإنجاز',
    'p.sinda.desc': 'وكيل يملأ تطبيق SINDA2000 الديواني آلياً انطلاقاً من ملف Excel — كل قيمة يتم التحقق منها، ولا شيء يُصادَق عليه دون الإنسان.',
    'p.mornaco.type': 'موقع تعريفي',
    'p.mornaco.desc': 'هوية القائمة المطبوعة — فيروزي وكريمي وبنفسجي نيون — تحوّلت إلى موقع من صفحة واحدة يضم القائمة كاملة: 11 فئة ونحو 200 صنف.',
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
    's3.title': 'برمجيات مهنية وأتمتة',
    's3.desc': 'أدوات تتلاءم مع طريقة عملك: تصرّف، ومتابعة، وفوترة، وإدخال آلي للبيانات. للويب أو الحاسوب أو أندرويد، حسب الطلب بالكامل.',
    's3.i1': 'بيانات في الوقت الفعلي',
    's3.i2': 'إدخال آلي للبيانات',
    's3.i3': 'مصادقة بشرية',
    's4.title': 'الإطلاق والمتابعة',
    's4.desc': 'أتكفّل بكل شيء: الاستضافة واسم النطاق — وأبقى متاحاً بعد التسليم.',
    's4.i1': 'النشر (Vercel)',
    's4.i2': 'اسم النطاق',
    's4.i3': 'دعم بعد التسليم',
    'sec.method.kicker': 'المنهجية',
    'sec.method.title': 'واضح وفعّال <em>ودون تعقيد</em>.',
    'm1.title': 'الحوار',
    'm1.desc': 'نتحدث عن نشاطك وعملائك وما يجب أن تحقّقه الأداة أو الموقع.',
    'm2.title': 'العرض',
    'm2.desc': 'تستلم نموذجاً أولياً وعرض سعر واضحاً، مع نطاق عمل وآجال محددة.',
    'm3.title': 'التطوير',
    'm3.desc': 'أبني الموقع وتتابع تقدّمه — وتُدمج ملاحظاتك أولاً بأول.',
    'm4.title': 'الإطلاق',
    'm4.desc': 'النشر على الإنترنت والتحقق النهائي — وأبقى متاحاً لما بعد ذلك.',
    'sec.about.kicker': 'من أنا',
    'about.role': 'مطوّر — تونس',
    'about.p1': 'أصمّم برمجيات مهنية ومواقع ويب حسب الطلب للشركات والمقاهي والمطاعم. منهجيتي: فهم عالمك وطريقة عملك، ثم تحويلهما إلى أدوات بسيطة وفعّالة.',
    'about.p3': 'لا قوالب جاهزة. لا حلول عامة. كل موقع يُصمَّم بعناية، من الفكرة الأولى حتى آخر تفصيل.',
    'about.stack.label': 'الأدوات والتقنيات',
    'about.langs.label': 'اللغات',
    'about.lang1': 'العربية',
    'about.lang2': 'الفرنسية',
    'about.lang3': 'الإنجليزية',
    'tl1.title': 'عمل مستقل — مواقع ويب وطلب عبر الإنترنت',
    'tl1.desc': 'Garrara وEight’In وMister M Coffee وEjry &amp; Jarry وMornaco: مواقع تعريفية، وقوائم على الإنترنت، وطلب وتجارة إلكترونية لشركات تونسية ودولية.',
    'tl2.title': 'أدوات مهنية وأتمتة',
    'tl2.desc': 'Caisse Tracker (متابعة الصندوق لكل عون ميداني) وSINDA Agent، إدخال آلي للبيانات في تطبيق SINDA2000 الديواني.',
    'sec.contact.kicker': 'تواصل',
    'contact.title': 'لديك مشروع؟ <em>لنتحدث.</em>',
    'contact.sub': 'صِف حاجتك في بضعة أسطر: أردّ عليك خلال 24 ساعة بأولى الأفكار.',
    'footer.credit': 'صُمّم وطُوّر يدوياً',
    'footer.top': 'العودة إلى الأعلى',
    'case.context': 'السياق',
    'case.work': 'ما أنجزته',
    'case.stack': 'التقنيات',
    'd.garrara.ctx': 'احتاجت شركة Garrara International Trading (GIT)، المتخصصة في تجارة النفط والغاز والمواد الغذائية ومقرها جيبوتي مع مكاتب في التوغو وتونس والمغرب، إلى موقع يليق بنشاطها الدولي.',
    'd.garrara.w1': 'موقع مؤسساتي متكامل: قسما الطاقة والصناعات الغذائية، وشبكة تغطي شمال أفريقيا وغربها وشرقها، والحوكمة والالتزامات.',
    'd.garrara.w2': 'كتالوج من 31 منتجاً قابل للتصفية، واستمارة طلب عرض سعر (المنتج، الكمية، Incoterm، ميناء الوصول) تُرسَل بالبريد الإلكتروني عبر دالة serverless.',
    'd.garrara.w3': 'ثلاث لغات حقيقية — الإنجليزية والفرنسية والعربية من اليمين إلى اليسار — مع وضع فاتح وداكن، وترويسات أمان HTTP.',
    'd.eightin.ctx': 'أراد Eight’In Flour &amp; Coffee، المقهى والمخبزة في بومهل (الضاحية الجنوبية لتونس)، قائمة على الإنترنت وفيّة لهويته على Instagram وسهلة التحديث.',
    'd.eightin.w1': 'قائمة بتبويبات (المشروبات، Sweet &amp; Brunch، Savory) في بطاقات قابلة للطي، وبحث فوري في القائمة، وتشكيلة مختارة.',
    'd.eightin.w2': 'سلة مع تذكرة «الطلب عند الصندوق» تُعرض عند الدفع؛ الأصناف والأسعار تُدار من صفحة إدارة مرتبطة بـ Supabase، مع قائمة احتياطية مدمجة.',
    'd.eightin.w3': 'هوية بالأزرق الداكن والسماوي مستوحاة من لافتة المحل، وزخرفة «ضربات الفرشاة»، وموقع بلغتين: الفرنسية والإنجليزية.',
    'd.sinda.w1': 'وكيل أتمتة: يختار الفريق ملف Excel، ويضغط على «ابدأ»، فيملأ الوكيل SINDA2000 سطراً بسطر.',
    'd.sinda.w2': 'الأمان أولاً: كل قيمة تُقرأ قبل الإدخال وبعده، ولا تُؤكَّد أي نافذة حوار دون قراءة نصها، ويتوقف الوكيل بدل أن يخمّن.',
    'd.sinda.w3': 'وضع تجريبي إلزامي قبل الوضع الحقيقي؛ والمصادقة النهائية تبقى دائماً للمهني.',
    'd.mornaco.ctx': 'كانت لـ MORNACO هوية بصرية قوية على قائمتها المطبوعة — فيروزي وكريمي وبنفسجي نيون — لكن دون أي حضور على الإنترنت.',
    'd.mornaco.w1': 'موقع من صفحة واحدة ينقل بأمانة هوية القائمة المطبوعة، حتى اللافتة المضيئة أُعيد إنشاؤها بـ CSS.',
    'd.mornaco.w2': 'قائمة كاملة — 11 فئة ونحو 200 صنف — مع تبويبات، وكل الأسعار قابلة للتعديل من ملف واحد.',
    'd.mornaco.w3': 'دمج الصور الحقيقية للمحل، مع تحسين للهاتف وللأداء.',
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
    'd.misterm.w3': 'هوية بالأسود والذهبي والكريمي، مصمّمة لقاعة دافئة مع ركن عائلي وشاشة كبيرة.',
    'nav.software': 'البرمجيات',
    'nav.sites': 'مواقع الويب',
    'hero.statSoft': 'برمجيات مهنية<br>قيد التطوير',
    'hero.statSites': 'مواقع ويب منشورة',
    'sec.soft.kicker': 'برمجيات مهنية',
    'sec.soft.title': 'أدوات تقوم بالعمل <em>بدلاً عنك</em>.',
    'sec.soft.sub': 'مصمَّمة مع الفرق التي تستعملها، وفق طريقة عملها الفعلية — مع إبقاء المصادقة النهائية دائماً بيد المهني.',
    'soft.tag': 'برمجية',
    'sec.sites.kicker': 'مواقع الويب · 5 منشورة',
    'proj.visit': 'زيارة',
    'contact.p1': 'ردّ خلال 24 ساعة',
    'contact.p2': 'معلوماتك تبقى سرّية',
    'contact.direct': 'أو راسلني مباشرة على',
    'form.name': 'الاسم',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف / واتساب',
    'form.phoneHint': '· لردّ أسرع',
    'form.message': 'صِف حاجتك',
    'form.submit': 'إرسال طلبي',
    'form.ph.name': 'اسمك',
    'form.ph.email': 'you@example.com',
    'form.ph.message': 'مثال: نُدخل فواتيرنا يدوياً ونريد متابعة مصاريف كل عون…'
  };

  var META = {
    fr: {
      title: 'Melek Maazaoui — Logiciels métier & sites web sur mesure à Tunis',
      desc: 'Logiciels de gestion et d\'automatisation, sites vitrines et commande en ligne pour entreprises, cafés et restaurants. Développeur basé à Tunis — sur-mesure, sans template.',
      langGroup: 'Langue',
      menuLabel: 'Ouvrir le menu',
      closeLabel: 'Fermer',
      themeToDark: 'Passer en mode sombre',
      themeToLight: 'Passer en mode clair',
      copied: 'Copié !',
      formSending: 'Envoi en cours…',
      formOk: 'Merci ! Votre demande est bien envoyée. Je vous réponds sous 24 h.',
      formRequired: 'Merci d’indiquer votre nom, votre email et votre besoin.',
      formEmail: 'Cette adresse email ne semble pas valide.',
      formShort: 'Décrivez votre besoin en quelques mots de plus.',
      formRate: 'Trop de demandes envoyées. Réessayez dans quelques minutes.',
      formErr: 'L’envoi n’a pas fonctionné. Écrivez-moi directement à melekmaazaoui41@gmail.com.'
    },
    en: {
      title: 'Melek Maazaoui — Custom business software & websites in Tunis',
      desc: 'Management and automation software, showcase websites and online ordering for companies, cafés and restaurants. Developer based in Tunis — custom work, no templates.',
      langGroup: 'Language',
      menuLabel: 'Open menu',
      closeLabel: 'Close',
      themeToDark: 'Switch to dark mode',
      themeToLight: 'Switch to light mode',
      copied: 'Copied!',
      formSending: 'Sending…',
      formOk: 'Thank you! Your request has been sent. I’ll reply within 24 hours.',
      formRequired: 'Please enter your name, your email and what you need.',
      formEmail: 'This email address doesn’t look valid.',
      formShort: 'Please describe what you need in a few more words.',
      formRate: 'Too many requests sent. Please try again in a few minutes.',
      formErr: 'Sending failed. Please write to me directly at melekmaazaoui41@gmail.com.'
    },
    ar: {
      title: 'Melek Maazaoui — برمجيات مهنية ومواقع ويب حسب الطلب في تونس',
      desc: 'برمجيات تصرّف وأتمتة، ومواقع تعريفية، وطلب عبر الإنترنت للشركات والمقاهي والمطاعم. مطوّر مقيم في تونس — مشاريع حسب الطلب، بلا قوالب جاهزة.',
      langGroup: 'اللغة',
      menuLabel: 'فتح القائمة',
      closeLabel: 'إغلاق',
      themeToDark: 'التبديل إلى الوضع الداكن',
      themeToLight: 'التبديل إلى الوضع الفاتح',
      copied: 'تم النسخ!',
      formSending: 'جارٍ الإرسال…',
      formOk: 'شكراً! تم إرسال طلبك. سأردّ عليك خلال 24 ساعة.',
      formRequired: 'يُرجى إدخال اسمك وبريدك الإلكتروني وحاجتك.',
      formEmail: 'يبدو أن عنوان البريد الإلكتروني غير صالح.',
      formShort: 'يُرجى وصف حاجتك ببضع كلمات إضافية.',
      formRate: 'تم إرسال طلبات كثيرة. أعِد المحاولة بعد بضع دقائق.',
      formErr: 'تعذّر الإرسال. راسلني مباشرة على melekmaazaoui41@gmail.com.'
    }
  };

  var FR = {};
  var i18nNodes = document.querySelectorAll('[data-i18n]');
  i18nNodes.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in FR)) FR[k] = el.innerHTML;
  });

  var phNodes = document.querySelectorAll('[data-i18n-ph]');
  phNodes.forEach(function (el) {
    var k = el.getAttribute('data-i18n-ph');
    if (!(k in FR)) FR[k] = el.getAttribute('placeholder');
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
    phNodes.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (v != null) el.setAttribute('placeholder', v);
    });
    var langField = document.querySelector('#contact-form input[name="lang"]');
    if (langField) langField.value = lang;
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

  /* ============ Formulaire de contact ============
     Envoyé en JSON par POST à /api/contact (fonction Vercel qui transmet par e-mail).
     Sans JavaScript, le formulaire s'envoie quand même nativement. */
  var form = document.getElementById('contact-form');
  if (form && window.fetch) {
    var statusEl = document.getElementById('form-status');
    var submitBtn = form.querySelector('.form-submit');
    var EMAIL_OK = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;

    function showStatus(kind, key) {
      statusEl.textContent = (META[currentLang] || META.fr)[key];
      statusEl.className = 'form-status' + (kind ? ' is-' + kind : '');
    }
    function markInvalid(field, bad) {
      if (bad) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var name = f.name.value.trim();
      var email = f.email.value.trim();
      var message = f.message.value.trim();
      markInvalid(f.name, !name);
      markInvalid(f.email, !email || !EMAIL_OK.test(email));
      markInvalid(f.message, message.length < 10);
      if (!name || !email || !message) { showStatus('err', 'formRequired'); return; }
      if (!EMAIL_OK.test(email)) { showStatus('err', 'formEmail'); f.email.focus(); return; }
      if (message.length < 10) { showStatus('err', 'formShort'); f.message.focus(); return; }

      var payload = {
        name: name,
        email: email,
        phone: f.phone.value.trim(),
        message: message,
        lang: currentLang,
        website: f.website.value
      };
      submitBtn.disabled = true;
      showStatus('', 'formSending');
      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (res.ok && data.ok) {
            form.reset();
            showStatus('ok', 'formOk');
          } else if (res.status === 429) {
            showStatus('err', 'formRate');
          } else if (data.error === 'invalid_email') {
            showStatus('err', 'formEmail');
          } else if (data.error === 'too_short_message') {
            showStatus('err', 'formShort');
          } else if (data.error && data.error.indexOf('missing_') === 0) {
            showStatus('err', 'formRequired');
          } else {
            showStatus('err', 'formErr');
          }
        });
      }).catch(function () {
        showStatus('err', 'formErr');
      }).then(function () {
        submitBtn.disabled = false;
      });
    });
  }

  /* ============ Année ============ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
