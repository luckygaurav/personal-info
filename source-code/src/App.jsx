import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  Check,
  ChevronRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import { lazy, Suspense, useEffect, useState } from 'react'
import { portfolio } from './config/portfolio'
import ProfileImage from './components/ProfileImage'

// Keep the Three.js scene outside the first content bundle.
const Scene = lazy(() => import('./components/Scene'))

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionMotion = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
        {align === 'center' && <span className="h-px w-7 bg-aqua/60" />}
        {eyebrow}
        {align === 'center' && <span className="h-px w-7 bg-aqua/60" />}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-[-0.055em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function Nav({ menuOpen, onMenuToggle }) {
  const closeMenu = () => onMenuToggle(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-ink/65 px-4 py-3 backdrop-blur-xl sm:px-5" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-2" aria-label={`${portfolio.name}, home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-aqua font-display text-sm font-bold text-ink shadow-[0_0_22px_rgba(57,231,208,0.28)]">
            {portfolio.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:inline">{portfolio.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white focus-visible:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-aqua md:inline-flex">
          Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => onMenuToggle(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0e111b]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-aqua">
                {item.label} <ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero({ reducedMotion }) {
  return (
    <section id="top" className="relative isolate flex min-h-[760px] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:min-h-screen">
      <div className="hero-grid absolute inset-0 -z-20 opacity-45" />
      <div className="absolute -left-44 top-8 -z-10 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute -right-36 bottom-0 -z-10 h-80 w-80 rounded-full bg-aqua/15 blur-[110px]" />
      <Suspense fallback={null}>
        <Scene reducedMotion={reducedMotion} />
      </Suspense>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.11 } } }}>
          <motion.p variants={sectionMotion} className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            <span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_13px_#39e7d0]" />
            {portfolio.availability}
          </motion.p>
          <motion.h1 variants={sectionMotion} className="font-display text-[clamp(3.35rem,9vw,7.4rem)] font-bold leading-[0.87] tracking-[-0.085em] text-white">
            Curious.
            <span className="block bg-gradient-to-r from-aqua via-white to-[#a992ff] bg-clip-text text-transparent">Creative.</span>
            <span className="block text-white/80">Growing.</span>
          </motion.h1>
          <motion.p variants={sectionMotion} className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Hi, I’m <span className="font-semibold text-white">{portfolio.name}</span> — {portfolio.shortIntro}
          </motion.p>
          <motion.div variants={sectionMotion} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center rounded-full bg-aqua px-5 py-3 text-sm font-bold text-ink transition hover:bg-white focus-visible:bg-white">
              Explore my work <ArrowDownRight className="ml-2 h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a href={`mailto:${portfolio.contact.email}`} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4 text-aqua" /> Get in touch
            </a>
          </motion.div>
          <motion.div variants={sectionMotion} className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-aqua" /> {portfolio.location}</span>
            <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-aqua" /> BCA · IIBM</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.22, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <div className="relative z-10 aspect-[4/4.7] overflow-hidden rounded-[2rem] border border-white/10 bg-panel/75 p-3 shadow-2xl backdrop-blur-sm">
            <ProfileImage src={portfolio.portrait} initials={portfolio.initials} className="h-full w-full" />
            <div className="absolute right-0 top-[14%] rounded-l-2xl border-y border-l border-white/10 bg-ink/80 px-4 py-3 backdrop-blur-xl">
              <p className="font-display text-sm font-semibold text-white">{portfolio.role}</p>
              <p className="mt-1 text-xs text-slate-400">Based in {portfolio.location}</p>
            </div>
            <div className="absolute bottom-8 left-0 rounded-r-2xl border-y border-r border-white/10 bg-ink/80 px-4 py-3 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-xs font-medium text-aqua"><Sparkles className="h-3.5 w-3.5" /> Building in public</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-7 h-32 w-32 rounded-full border border-aqua/30 bg-aqua/10 blur-[1px]" />
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-electric/35 bg-electric/10" />
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <motion.section id="about" className="px-5 py-24 sm:px-8 sm:py-32" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={sectionMotion} transition={{ duration: 0.6 }}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading eyebrow="01 / About" title="A learner with a maker’s mindset." />
        <div className="space-y-7">
          <p className="font-display text-2xl font-medium leading-tight tracking-[-0.045em] text-slate-200 sm:text-3xl">{portfolio.intro}</p>
          <p className="max-w-xl text-base leading-7 text-slate-400">This portfolio is a living record of what I’m exploring. It makes room for early ideas, thoughtful experiments, and the work that comes next.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {portfolio.focusAreas.map((area, index) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <span className="text-xs font-semibold text-aqua">0{index + 1}</span>
                <p className="mt-5 text-sm font-medium text-slate-200">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function Education() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[linear-gradient(115deg,rgba(124,92,255,0.13),rgba(57,231,208,0.05)_50%,rgba(255,255,255,0.025))] p-6 sm:p-9 lg:flex lg:items-center lg:justify-between">
        <div className="flex gap-5">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-aqua"><GraduationCap className="h-6 w-6" /></div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">Education</p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">{portfolio.education.degree}</h3>
            <p className="mt-2 text-sm text-slate-400">{portfolio.education.institution} · {portfolio.education.place}</p>
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-400 lg:mt-0 lg:max-w-[14rem]">{portfolio.education.note}</p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-2/3 -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 / Skills" title="The toolkit I’m growing." description="These are editable starting points—not inflated claims. Update them in the portfolio config as your confidence and work evolve." />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {portfolio.skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group min-h-56 rounded-2xl border border-white/10 bg-[#0e111b] p-5 transition hover:-translate-y-1 hover:border-aqua/35 hover:shadow-glow"
            >
              <div className="flex items-center justify-between"><Code2 className="h-5 w-5 text-aqua" /><span className="rounded-full border border-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500">{skill.sample ? 'Edit me' : skill.level}</span></div>
              <h3 className="mt-12 font-display text-xl font-semibold tracking-[-0.04em] text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{skill.detail}</p>
              <p className="mt-5 text-xs font-medium text-aqua/80">{skill.level}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="03 / Selected work" title="Room for what’s next." description="These cards are clearly marked examples ready for your real work, repository links and case studies." />
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="group inline-flex shrink-0 items-center text-sm font-semibold text-white hover:text-aqua">Visit GitHub <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`project-card project-card--${project.accent} group relative flex min-h-[370px] flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel p-6`}
            >
              <div className="project-orb absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-70 transition duration-500 group-hover:scale-125" />
              <div className="relative flex items-start justify-between gap-4"><span className="rounded-full border border-white/10 bg-ink/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/70">{project.category}</span>{project.sample && <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-aqua">Sample</span>}</div>
              <div className="relative mt-auto">
                <h3 className="font-display text-3xl font-semibold tracking-[-0.055em] text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-300">{tag}</span>)}</div>
                <a href={project.href} className="mt-7 inline-flex items-center text-sm font-semibold text-white transition hover:text-aqua">Replace with project link <ArrowUpRight className="ml-1.5 h-4 w-4" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const from = data.get('email')
    const subject = data.get('subject') || `Portfolio enquiry from ${name}`
    const body = `Hi Lucky,\n\n${message}\n\nFrom: ${name}${from ? ` (${from})` : ''}`
    window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-aqua/10 blur-[130px]" />
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[linear-gradient(130deg,rgba(124,92,255,0.14),rgba(9,12,20,0.96)_45%,rgba(57,231,208,0.08))] p-6 sm:p-10 lg:grid lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="04 / Contact" title="Let’s make something useful." description="Have an idea, opportunity, or a good learning resource to share? I’d love to hear from you." />
          <div className="mt-9 space-y-4">
            <a href={`mailto:${portfolio.contact.email}`} className="contact-link"><Mail className="h-5 w-5 text-aqua" /><span><small>Email</small>{portfolio.contact.email}</span></a>
            <a href={`tel:+91${portfolio.contact.phone}`} className="contact-link"><Phone className="h-5 w-5 text-aqua" /><span><small>Phone</small>+91 {portfolio.contact.phone}</span></a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" aria-label="Lucky Gaurav on LinkedIn" className="social-button"><Linkedin className="h-5 w-5" /></a>
            <a href={portfolio.contact.github} target="_blank" rel="noreferrer" aria-label="Lucky Gaurav on GitHub" className="social-button"><Github className="h-5 w-5" /></a>
            <a href={`mailto:${portfolio.contact.email}`} aria-label={`Email ${portfolio.name}`} className="social-button"><AtSign className="h-5 w-5" /></a>
          </div>
          <a href={portfolio.resumeUrl} download className="mt-8 inline-flex items-center text-sm font-semibold text-slate-200 transition hover:text-aqua"><Download className="mr-2 h-4 w-4" /> Download resume placeholder</a>
        </div>

        <form onSubmit={onSubmit} className="mt-12 rounded-2xl border border-white/10 bg-ink/55 p-5 backdrop-blur-sm lg:mt-0 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">Your name<input name="name" required placeholder="Name" /></label>
            <label className="field-label">Email address<input name="email" type="email" placeholder="you@example.com" /></label>
          </div>
          <label className="field-label mt-4">Subject<input name="subject" placeholder="How can I help?" /></label>
          <label className="field-label mt-4">Message<textarea required value={message} onChange={(event) => setMessage(event.target.value)} rows="5" placeholder="Write your message here..." /></label>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-aqua px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-white focus-visible:bg-white"><Send className="mr-2 h-4 w-4" /> Start an email</button>
          {submitted && <p role="status" className="mt-3 flex items-center gap-1.5 text-xs text-aqua"><Check className="h-4 w-4" /> Your email app should open with your message prepared.</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {portfolio.name}. Built with curiosity.</p>
        <a href="#top" className="inline-flex items-center font-medium text-slate-300 hover:text-aqua">Back to top <ArrowUpRight className="ml-1 h-4 w-4" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = reducedMotion ? 'auto' : 'smooth'
  }, [reducedMotion])

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ink text-slate-100 selection:bg-aqua selection:text-ink">
        <Nav menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
        <Hero reducedMotion={reducedMotion} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  )
}
