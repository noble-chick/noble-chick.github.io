import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id="experience" eyebrow="Experience" title="Work and volunteering" />
        </Reveal>

        <ol className="relative mt-12 space-y-8 border-l border-zinc-800 pl-8">
          {experiences.map((exp, index) => (
            <li key={`${exp.role}-${exp.organization}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full ring-4 ring-zinc-950 ${
                  index === 0 ? 'bg-emerald-400' : 'bg-zinc-600'
                }`}
              />
              <Reveal delay={index * 80}>
                <p className="text-sm font-medium text-zinc-500">{exp.period}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-50">{exp.role}</h3>
                <p className="mt-1 text-base font-medium text-emerald-400">{exp.organization}</p>
                {exp.unit && <p className="mt-1 text-sm text-zinc-500">{exp.unit}</p>}
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400">{exp.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
