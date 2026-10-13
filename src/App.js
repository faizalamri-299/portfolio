import React from 'react';
import { profile, stats, experience, featured, projects, skills, education } from './content';

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 448 512" fill="currentColor" className="h-5 w-5">
    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
);

const Tag = ({ children }) => (
  <li className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
    {children}
  </li>
);

const Section = ({ id, index, eyebrow, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <p className="font-mono text-xs font-medium uppercase tracking-widest text-amber-700 dark:text-amber-400">{index} / {eyebrow}</p>
    <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    <div className="mt-10">{children}</div>
  </section>
);

const ContactButtons = ({ inverted = false }) => (
  <div className="flex flex-wrap gap-3">
    <a
      href={`mailto:${profile.email}`}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
        inverted
          ? 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
          : 'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300'
      }`}
    >
      <MailIcon /> {profile.email}
    </a>
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
        inverted
          ? 'border-zinc-600 text-white hover:border-zinc-400'
          : 'border-zinc-300 hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500'
      }`}
    >
      <LinkedInIcon /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
    </a>
  </div>
);

const Portfolio = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-zinc-950"
    >
      Skip to content
    </a>

    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-stone-50/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Faizal<span className="text-amber-600 dark:text-amber-400">.</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href} className={item.href === '#contact' ? '' : 'hidden md:block'}>
                <a href={item.href} className="inline-flex min-h-11 items-center rounded-md px-3 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    <main id="main">
      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-end gap-12 px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-28 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-500" />
            {profile.location}
          </p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-amber-700 sm:text-2xl dark:text-amber-400">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">{profile.summary}</p>
          <div className="mt-8">
            <ContactButtons />
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end bg-white p-6 dark:bg-zinc-900">
              <dt className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section id="projects" index="01" eyebrow="Work" title="Selected projects">
        <article className="reveal rounded-3xl bg-zinc-900 p-8 text-white sm:p-10 dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-amber-400">Currently leading</p>
          <h3 className="mt-2 text-3xl font-bold">{featured.name}</h3>
          <p className="text-lg text-zinc-300">{featured.tagline}</p>
          <p className="mt-4 max-w-2xl text-zinc-300">{featured.description}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {featured.groups.map((g) => (
              <div key={g.title}>
                <h4 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-400">{g.title}</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {g.items.map((m) => (
                    <li key={m} className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium ring-1 ring-white/10">{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
            {featured.stack.map((t) => (
              <li key={t} className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">{t}</li>
            ))}
          </ul>
        </article>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.name} className="reveal flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">{p.client}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>
              <ul aria-label="Tech stack" className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => <Tag key={t}>{t}</Tag>)}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" index="02" eyebrow="Experience" title="Where I've worked">
        <ol className="relative space-y-12 border-l border-zinc-300 pl-8 dark:border-zinc-700">
          {experience.map((job) => (
            <li key={`${job.role}-${job.period}`} className="reveal relative">
              <span aria-hidden="true" className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-stone-50 bg-amber-500 dark:border-zinc-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{job.period}</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {job.company}
                {job.place && ` · ${job.place}`}
              </p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-zinc-700 marker:text-amber-500 dark:text-zinc-300">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" index="03" eyebrow="Toolbox" title="Skills & education">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <dl className="space-y-6">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-semibold">{s.group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((i) => <Tag key={i}>{i}</Tag>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.title} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{e.period}</p>
                <h3 className="mt-1 font-bold">{e.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.school}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section id="contact" aria-labelledby="contact-title" className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-zinc-900 px-8 py-16 text-white sm:px-12 dark:ring-1 dark:ring-zinc-800">
          <h2 id="contact-title" className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something <span className="text-amber-400">together.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">
            Have a system to build, migrate or scale? Email me or connect on LinkedIn.
          </p>
          <div className="mt-8">
            <ContactButtons inverted />
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      © {new Date().getFullYear()} {profile.name} · {profile.location}
    </footer>
  </>
);

export default Portfolio;
