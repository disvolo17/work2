import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── DATA ────────────────────────────────────────────────────────────────────

const PHOTO_URL = 'https://media.base44.com/images/public/69d3f72b14a1404fda01934e/4358e7988_Airbrush-IMAGE-ENHANCER-1775521875923-1775521875923.png';

const NAME_CHARS_1 = 'ДЕНИС'.split('');
const NAME_CHARS_2 = 'ВОЛОШИН'.split('');

const NAV_ITEMS = [
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'База', href: '#education' },
  { label: 'Контакт', href: '#contact' },
];

const CONTACTS_NAV = [
  { label: 'TG', href: 'https://t.me/disvolo', title: 'Telegram' },
  { label: 'VK', href: 'https://vk.com/disvolo', title: 'VKontakte' },
  { label: 'IG', href: 'https://instagram.com/disvolo', title: 'Instagram' },
  { label: '✉', href: 'mailto:disvolo@bk.ru', title: 'Email' },
];

const ARTISTS = ['БАСТА', 'ЗВЕРИ', 'MACAN', 'ЕГОР КРИД', 'ПОЛИНА ГАГАРИНА', 'SALUKI'];

const SKILLS = [
  { title: 'Планирование', desc: 'Разбивка проекта на этапы, управление ресурсами и жесткий контроль дедлайнов.' },
  { title: 'Коммуникация', desc: 'Синхронизация команды, подрядчиков и заказчика. 80% работы — общение.' },
  { title: 'Управление рисками', desc: 'Вижу «узкие места» заранее и всегда имею рабочий план Б.' },
  { title: 'Логистика туров', desc: 'Организация сложных маршрутов, перелетов и проживания для команд 50+ человек.' },
  { title: 'Координация площадок', desc: 'Связка технических служб, администраций и артистов в реальном времени.' },
  { title: 'Стрессоустойчивость', desc: 'Хладнокровие и быстрое принятие решений в критических ситуациях.' },
  { title: 'Управление бюджетом', desc: 'Контроль P&L, оптимизация расходов и предотвращение кассовых разрывов.' },
  { title: 'Методологии', desc: 'Гибкое применение Agile/Waterfall в зависимости от масштаба и типа проекта.' },
  { title: 'Technical Rider', desc: 'Понимание специфики звукового, светового и видеооборудования.' },
  { title: 'Crisis Management', desc: 'Мгновенная реакция на форс-мажоры: отмены рейсов, технические сбои.' },
  { title: 'Аналитика', desc: 'Сбор данных, анализ эффективности и подготовка Post-Event отчетов.' },
  { title: 'Networking', desc: 'Долгосрочные связи с ключевыми игроками индустрии и подрядчиками.' },
];

const TOOLS = [
  'Bitrix24', 'Trello', 'Jira', 'Notion', 'Asana', 'ClickUp',
  'MS Project', 'MS Office', 'Google Workspace', 'Slack', 'Miro',
  'Figma', 'ChatGPT / Gemini', 'HTML/CSS', 'Управление P&L',
  'Технический продакшн', 'Event-маркетинг', 'Менеджмент артистов',
  'Оценка рисков', 'Разрешение конфликтов', 'Scrum', 'Kanban',
  'WBS / Декомпозиция', 'Ретроспективы', 'OKR / KPI',
  'RACI-матрица', 'Работа с подрядчиками', 'CRM-системы',
];

const EXPERIENCE = [
  {
    period: '2024 — 2025',
    company: 'SOLDOUT',
    items: [
      'Полное управление гастрольными турами артистов первого эшелона в 36+ городах.',
      'Координация работы команды сопровождения (30+ человек) и локальных организаторов.',
      'Разработка и контроль выполнения логистических схем и таймингов пребывания.',
      'Контроль соблюдения технического и бытового райдера на всех площадках тура.',
      'Управление бюджетом проекта, согласование смет и проведение финальных взаиморасчетов.',
    ],
  },
  {
    period: '2024',
    company: 'MTS LIVE',
    items: [
      'Координация масштабных концертных мероприятий в рамках экосистемы МТС.',
      'Взаимодействие с артистами, агентствами и техническими подрядчиками на всех этапах проекта.',
      'Операционное управление event-командой и контроль выполнения задач в сжатые сроки.',
      'Участие в планировании и реализации федеральных шоу-программ с аудиторией 10 000+ человек.',
      'Контроль логистики, транспортировки и размещения артистов и технических бригад.',
    ],
  },
  {
    period: '2023 — 2024',
    company: 'NEBO RECORDS',
    items: [
      'Организация концертов и корпоративных выступлений ключевых артистов лейбла.',
      'Взаимодействие с концертными площадками, техническими службами и кейтерингом.',
      'Подготовка и подписание договоров, контроль документооборота по мероприятиям.',
      'Участие в разработке креативных концепций шоу и контроль их реализации.',
      'Администрирование артистов на съемочных площадках и крупных фестивалях.',
    ],
  },
];

const EDUCATION = [
  { period: '2017 — 2021', title: 'РЭУ Плеханова', subtitle: 'Гостиничное дело' },
  { period: '2021 — 2022', title: 'Военная служба', badge: 'МЕДАЛЬ ЗА ПАРАД 2022' },
];

const CONTACTS_FOOTER = [
  { label: 'Telegram', sub: '@disvolo', href: 'https://t.me/disvolo' },
  { label: 'VKontakte', sub: 'vk.com/disvolo', href: 'https://vk.com/disvolo' },
  { label: 'Instagram', sub: '@disvolo', href: 'https://instagram.com/disvolo' },
  { label: 'Email', sub: 'disvolo@bk.ru', href: 'mailto:disvolo@bk.ru' },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const charVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  show: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: 0.5 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const skillItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <div id="skills">
        <Skills />
        <ToolsGrid />
      </div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="contact"><ContactFooter /></div>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 md:py-5">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-mono text-xs tracking-[0.3em] text-foreground hover:text-primary transition-colors">
            Денис Волошин
          </button>
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.label} onClick={() => handleClick(item.href)} className="font-mono text-[11px] tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase">
                {item.label}
              </button>
            ))}
            <div className="w-px h-4 bg-border" />
            {CONTACTS_NAV.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" title={c.title} className="font-mono text-[11px] tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300">
                {c.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 w-6">
            <span className={`h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
            {NAV_ITEMS.map((item, i) => (
              <motion.button key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(item.href)} className="font-display text-3xl font-bold text-foreground hover:text-primary transition-colors">
                {item.label}
              </motion.button>
            ))}
            <div className="flex gap-6 mt-4">
              {CONTACTS_NAV.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">{c.title}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background — warm sunset palette from photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d0a06 0%, #1a1008 40%, #0f0c0a 100%)' }} />
        <motion.div className="absolute bottom-0 right-0 w-[900px] h-[700px] rounded-full opacity-30"
          animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.38, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(ellipse, #c8701a 0%, #e8920a 20%, transparent 65%)', filter: 'blur(90px)', transform: 'translate(20%, 30%)' }} />
        <motion.div className="absolute bottom-1/4 right-1/3 w-[600px] h-[500px] rounded-full opacity-15"
          animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 65%)', filter: 'blur(120px)' }} />
        <motion.div className="absolute -top-20 right-0 w-[700px] h-[500px] rounded-full opacity-20"
          animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.25, 0.18] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ background: 'radial-gradient(ellipse, #1e3a5f 0%, #2563a8 30%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to top, hsl(240 7% 5%), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,4,0.85) 0%, rgba(10,8,4,0.4) 40%, transparent 70%)' }} />
      </div>

      {/* Photo */}
      <motion.div initial={{ opacity: 0, x: 80, scale: 1.05 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full w-1/2 md:w-2/5 z-[2] pointer-events-none">
        <motion.img src={PHOTO_URL} alt="Денис Волошин" className="w-full h-full object-cover object-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0.92) 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.92) 20%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(240 7% 5%) 0%, transparent 50%)' }} />
      </motion.div>

      {/* Mouse glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: `radial-gradient(500px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,255,194,0.05), transparent 60%)` }} />

      {/* Status */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.04 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-10 flex items-center gap-2 px-4 py-2 border border-border rounded-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
        <span className="font-mono text-[10px] md:text-xs tracking-wider text-muted-foreground uppercase">Открыт для проектов</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <p className="font-mono text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4">Tour & Event Management</p>
        </motion.div>
        <div style={{ perspective: '800px' }}>
          <div className="font-display leading-[0.85] tracking-tight overflow-hidden" style={{ fontSize: 'clamp(2.8rem, 10vw, 10rem)' }}>
            <div className="flex flex-wrap">
              {NAME_CHARS_1.map((ch, i) => (
                <motion.span key={i} custom={i} variants={charVariants} initial="hidden" animate="show"
                  style={{ display: 'inline-block', WebkitTextStroke: '1px hsl(240 5% 90%)', color: 'transparent' }}>
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap">
              {NAME_CHARS_2.map((ch, i) => (
                <motion.span key={i} custom={NAME_CHARS_1.length + i} variants={charVariants} initial="hidden" animate="show"
                  style={{ display: 'inline-block', color: 'hsl(240 5% 90%)' }}>
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }} className="mt-8 flex flex-wrap gap-6 md:gap-10">
          {[
            { val: '100+', label: 'концертов', colored: true },
            { val: '40+', label: 'городов России', colored: true },
            { val: '2+', label: 'года опыта', colored: false },
          ].map(({ val, label, colored }, i) => (
            <motion.div key={label} className="flex flex-col"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}>
              <span className={`font-display text-3xl md:text-5xl font-bold ${colored ? 'text-primary' : 'text-foreground'}`}>{val}</span>
              <span className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase mt-1">{label}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-6 flex items-center gap-4">
          <div className="w-12 h-px bg-primary" />
          <p className="font-mono text-xs text-muted-foreground tracking-wider">Проджект менеджер · Координатор · Управленец</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────

function Marquee() {
  const doubled = [...ARTISTS, ...ARTISTS];
  return (
    <section className="py-16 md:py-24 border-t border-b border-border overflow-hidden">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-8">Работал с</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {doubled.map((artist, i) => (
              <span key={i} className="inline-block mx-4 md:mx-8 font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground/20 hover:text-primary transition-colors duration-500 cursor-default">
                {artist}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative z-10">
        <SectionHeader number="01" title="Навыки" />
        <motion.div variants={skillContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-12">
          {SKILLS.map((skill) => (
            <motion.div key={skill.title} variants={skillItem} className="bg-background p-6 md:p-8 group hover:bg-card transition-colors duration-500">
              <h3 className="font-body text-sm font-semibold tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors duration-500">{skill.title}</h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── TOOLS ────────────────────────────────────────────────────────────────────

function ToolsGrid() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeader number="02" title="Инструменты" />
        <div className="flex flex-wrap gap-2 md:gap-3 mt-10">
          {TOOLS.map((tool, i) => (
            <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.025, duration: 0.4 }}
              className="px-4 py-2 border border-border font-mono text-xs tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default">
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="relative z-10">
        <SectionHeader number="03" title="Опыт" />
        <div className="space-y-0 mt-16">
          {EXPERIENCE.map((exp, i) => (
            <motion.div key={exp.company} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group">
              <div className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase">{exp.period}</span>
                <h3 className="font-display text-2xl md:text-4xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-500">{exp.company}</h3>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <ul className="space-y-3">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <SectionHeader number="04" title="База" />
      <div className="space-y-0 mt-16">
        {EDUCATION.map((edu, i) => (
          <motion.div key={edu.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border-t border-border py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase">{edu.period}</span>
            </div>
            <div className="md:col-span-9 flex flex-wrap items-center gap-4">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{edu.title}</h3>
              {edu.subtitle && <span className="font-mono text-xs text-muted-foreground">— {edu.subtitle}</span>}
              {edu.badge && <span className="px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] font-bold tracking-wider uppercase">{edu.badge}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT FOOTER ───────────────────────────────────────────────────────────

function ContactFooter() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">05</p>
        <h2 className="font-display font-bold leading-[0.9] tracking-tight text-foreground mb-16" style={{ fontSize: 'clamp(2.5rem,8vw,8rem)' }}>
          Связаться<br />
          <span style={{ WebkitTextStroke: '1px hsl(240 5% 90%)', color: 'transparent' }}>со мной</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {CONTACTS_FOOTER.map((c, i) => (
            <motion.a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background p-8 group hover:bg-card transition-colors duration-500 flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-500">{c.label}</span>
              <span className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-500">{c.sub}</span>
              <span className="font-mono text-xs text-muted-foreground mt-auto pt-4">→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <div className="mt-16 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground">© 2026</span>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground">Денис Волошин — Portfolio</span>
      </div>
    </section>
  );
}

// ─── SHARED ───────────────────────────────────────────────────────────────────

function SectionHeader({ number, title }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="flex items-center gap-4">
      <span className="font-mono text-xs text-primary tracking-wider">{number}</span>
      <div className="w-8 h-px bg-primary" />
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
    </motion.div>
  );
}
