import { ArrowUpRight, Github } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="projects"
            eyebrow="Projects"
            title="Selected work"
            description="Academic and personal projects that show how I approach programming, data, and security."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900 hover:shadow-xl hover:shadow-emerald-950/40">
                <div className="aspect-video overflow-hidden border-b border-zinc-800">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">{project.title}</h3>
                  <Github size={20} aria-hidden="true" className="mt-1 shrink-0 text-zinc-500 transition-colors group-hover:text-emerald-400" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                >
                  View on GitHub
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">for {project.title} (opens in a new tab)</span>
                </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
