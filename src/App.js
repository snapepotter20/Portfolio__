import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { portfolioData } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function App() {
  const appRef = useRef(null);
  const contactRef = useRef(null);
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const [menuOpen, setMenuOpen] = useState(false);
  const [manualActiveSection, setManualActiveSection] = useState("");
  const [projectTag, setProjectTag] = useState("All");
  const deferredProjectTag = useDeferredValue(projectTag);

  useEffect(() => {
    const node = appRef.current;

    if (!node) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      node.style.setProperty("--pointer-x", `${clientX}px`);
      node.style.setProperty("--pointer-y", `${clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (deferredProjectTag === "All") {
      return portfolioData.projects;
    }

    return portfolioData.projects.filter((project) =>
      project.tags.includes(deferredProjectTag)
    );
  }, [deferredProjectTag]);

  const handleProjectTagChange = (tag) => {
    startTransition(() => {
      setProjectTag(tag);
    });
  };

  useEffect(() => {
    if (manualActiveSection && activeSection === manualActiveSection) {
      setManualActiveSection("");
    }
  }, [activeSection, manualActiveSection]);

  const currentActiveSection = manualActiveSection || activeSection;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      setManualActiveSection(sectionId);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    setManualActiveSection("contact");
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={appRef} className="min-h-screen bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-pointer-glow" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-cyan">
              SK
            </div>
            <p className="text-sm font-medium text-white/90">Sahil Kumar</p>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 md:flex">
            {navItems.map((item) => {
              const isActive = currentActiveSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-cyan text-slate-950"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="hidden rounded-full border border-cyan/60 bg-cyan/10 px-5 py-2 text-sm font-medium text-cyan transition hover:bg-cyan hover:text-slate-950 md:inline-flex"
            >
              Let&apos;s Build
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-ink/95 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:border-cyan/40 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <section
          id="about"
          className="grid min-h-[calc(100vh-88px)] items-center gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-sm text-orange">
              <span className="h-2 w-2 rounded-full bg-orange" />
              {portfolioData.location}
            </div>

            <div className="space-y-5">
              <p className="font-display text-sm uppercase tracking-[0.35em] text-white/60">
                React Engineer • Full Stack Builder • System Thinker
              </p>
              <h1 className="max-w-4xl font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                {portfolioData.hero.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
                {portfolioData.hero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {portfolioData.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-panel"
                >
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-base font-semibold text-slate-950 transition hover:translate-y-[-1px]"
              >
                Start A Conversation
                <FiArrowRight />
              </button>
              <a
                href={portfolioData.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base text-white/84 transition hover:border-cyan/50 hover:text-white"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-cyan/25 via-transparent to-orange/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[42px] border border-white/12 bg-panel p-5 shadow-panel">
              <div className="grid gap-5">
                <div className="rounded-[34px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                        Current Identity
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">
                        Associate Software Engineer
                      </h2>
                      <p className="mt-2 text-sm text-white/62">
                        Bosch Global Software Technologies
                      </p>
                    </div>
                    <img
                      src={portfolioData.hero.image}
                      alt="Sahil Kumar portrait"
                      className="h-24 w-24 rounded-[26px] object-cover ring-1 ring-white/10 sm:h-28 sm:w-28"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <SignalCard
                    icon={<FiCode size={20} />}
                    label="Frontend"
                    value="React, Redux Toolkit, Angular, TypeScript"
                  />
                  <SignalCard
                    icon={<FiLayers size={20} />}
                    label="Backend"
                    value="Spring Boot, Node.js, REST APIs, JWT, RBAC"
                  />
                </div>

                <div className="rounded-[34px] border border-white/10 bg-slate-950/65 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Focus Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {portfolioData.focusAreas.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...fadeInUp} className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-panel">
            <SectionLabel eyebrow="Profile" title="Built for teams that care about scale, speed, and clarity." />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="rounded-[34px] border border-white/10 bg-panel p-6 shadow-panel"
          >
            <p className="text-lg leading-8 text-white/72">
              {portfolioData.summary}
            </p>
          </motion.div>
        </section>

        <section id="experience" className="py-14">
          <motion.div {...fadeInUp} className="mb-8">
            <SectionLabel
              eyebrow="Experience"
              title="Real product work, not just demo projects."
              description="From Bosch production systems to secure full-stack applications, each role sharpened how I think about scale, maintainability, and user experience."
            />
          </motion.div>

          <div className="grid gap-6">
            {portfolioData.experience.map((role, index) => (
              <motion.article
                key={role.company + role.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.08 * index }}
                className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-panel"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/55">
                      <FiBriefcase size={14} />
                      {role.type}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-white/65">{role.company}</p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white/70">
                    {role.period}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <ul className="space-y-3 text-white/72">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                      Core Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {role.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-orange/20 bg-orange/10 px-3 py-2 text-sm text-orange"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <motion.div {...fadeInUp} className="mb-8">
            <SectionLabel
              eyebrow="Projects"
              title="Selected builds with product thinking and backend depth."
              description="The filter below is powered with React state, `startTransition`, `useDeferredValue`, and `useMemo` so interactions stay smooth even as project data grows."
            />
          </motion.div>

          <div className="mb-8 flex flex-wrap gap-3">
            {portfolioData.projectFilters.map((tag) => {
              const isActive = projectTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleProjectTagChange(tag)}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan text-slate-950"
                      : "border border-white/12 bg-white/5 text-white/72 hover:border-cyan/40 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.06 * index }}
                className="group overflow-hidden rounded-[34px] border border-white/10 bg-panel shadow-panel"
              >
                <div className="relative overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-white/70">
                      {project.description}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-white/66">
                    {project.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                        <span className="leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                    >
                      Frontend Repo
                    </a>
                    {project.backendSource ? (
                      <a
                        href={project.backendSource}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-cyan/40 hover:text-white"
                      >
                        Backend Repo
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-cyan/40 hover:text-white"
                      >
                        Live Preview
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-14">
          <motion.div {...fadeInUp} className="mb-8">
            <SectionLabel
              eyebrow="Skills"
              title="Grouped around how I actually work."
              description="Instead of listing every tool equally, this layout organizes skills by what they help me deliver."
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.05 * index }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-panel"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                  {group.title}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan/18 bg-cyan/10 px-4 py-2 text-sm text-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="proof" className="py-14">
          <motion.div {...fadeInUp} className="mb-8">
            <SectionLabel
              eyebrow="Proof"
              title="Education, achievements, and public profiles."
              description="A quick snapshot of the signals that support the work."
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <motion.article
              {...fadeInUp}
              className="rounded-[34px] border border-white/10 bg-panel p-6 shadow-panel"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Education
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {portfolioData.education.degree}
              </h3>
              <p className="mt-2 text-white/65">{portfolioData.education.school}</p>
              <p className="mt-4 text-sm text-white/55">
                {portfolioData.education.period} • CGPA {portfolioData.education.cgpa}
              </p>
            </motion.article>

            <motion.article
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.08 }}
              className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-panel"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Achievements
              </p>
              <ul className="mt-5 space-y-4">
                {portfolioData.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-white/72">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.profiles.map((profile, index) => (
              <motion.a
                key={profile.label}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.05 * index }}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-panel transition hover:border-cyan/40 hover:bg-white/8"
              >
                <div className="flex items-center gap-3 text-cyan">
                  {profile.icon}
                  <span className="text-sm uppercase tracking-[0.24em] text-white/45">
                    {profile.label}
                  </span>
                </div>
                <p className="mt-4 text-lg font-medium text-white">
                  {profile.handle}
                </p>
                <p className="mt-2 text-sm text-white/55">{profile.note}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contact" ref={contactRef} className="py-14">
          <motion.div
            {...fadeInUp}
            className="overflow-hidden rounded-[42px] border border-white/12 bg-panel p-8 shadow-panel sm:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-orange">
                  Contact
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl">
                  Let&apos;s build something that feels sharp, useful, and impossible to ignore.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  I enjoy working on frontend-heavy products, secure full-stack
                  platforms, and systems where performance and maintainability both
                  matter. If your team is building something ambitious, I&apos;d love to
                  contribute.
                </p>
              </div>

              <div className="grid gap-4">
                <ContactCard
                  icon={<FiMail size={18} />}
                  label="Email"
                  value={portfolioData.contact.email}
                  href={`mailto:${portfolioData.contact.email}`}
                />
                <ContactCard
                  icon={<FiPhone size={18} />}
                  label="Phone"
                  value={portfolioData.contact.phone}
                  href={`tel:${portfolioData.contact.phone}`}
                />
                <ContactCard
                  icon={<FiLinkedin size={18} />}
                  label="LinkedIn"
                  value="sahil-kumar-5487561ba"
                  href={portfolioData.links.linkedin}
                />
                <ContactCard
                  icon={<FiGithub size={18} />}
                  label="GitHub"
                  value="snapepotter20"
                  href={portfolioData.links.github}
                />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45 sm:px-8 lg:px-10">
        Crafted in React, styled with Tailwind CSS, and shaped around real work
        from Sahil Kumar&apos;s resume.
      </footer>
    </div>
  );
}

function SectionLabel({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan">{eyebrow}</p>
      <h2 className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-8 text-white/68">{description}</p>
      ) : null}
    </div>
  );
}

function SignalCard({ icon, label, value }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 text-cyan">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
          {icon}
        </span>
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{label}</p>
      </div>
      <p className="mt-4 text-base leading-7 text-white/78">{value}</p>
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-[28px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan/40 hover:bg-white/8"
    >
      <div className="flex items-center gap-3 text-cyan">
        {icon}
        <span className="text-sm uppercase tracking-[0.24em] text-white/45">
          {label}
        </span>
      </div>
      <p className="mt-3 text-lg font-medium text-white">{value}</p>
    </a>
  );
}

export default App;
