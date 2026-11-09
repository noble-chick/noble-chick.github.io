import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { goals } from '@/data/journey';

export default function Goals() {
  return (
    <section id="goals" aria-labelledby="goals-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="goals"
            eyebrow="Future Goals"
            title="Where I am headed"
            description="Goals in cyber security and computer science that I am working toward."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <Reveal key={goal.title} delay={index * 60} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900 hover:shadow-[0_0_32px_-6px_rgba(16,185,129,0.4)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{goal.area}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-50">{goal.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{goal.description}</p>
                <p className="mt-5 text-xs font-medium text-zinc-500">
                  Target: <span className="text-zinc-300">{goal.target}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
