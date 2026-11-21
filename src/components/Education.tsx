import { Award, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="education"
            eyebrow="Education and training"
            title="Building a foundation in cyber security"
            description="My academic path combines technical learning with practical experience in data, systems, and responsible information handling."
          />
        </Reveal>

        <Reveal delay={80}>
          <article className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors duration-300 hover:border-zinc-700 sm:p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <GraduationCap size={24} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-500">2024 – Present</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-50">{profile.education.degree}</h3>
                <p className="mt-2 text-base font-medium text-emerald-400">{profile.education.school}</p>
                <p className="mt-3 text-sm text-zinc-400">Expected graduation: {profile.education.graduation.replace('Expected ', '')}</p>

                <div className="mt-5 border-t border-zinc-800 pt-5">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="shrink-0 text-emerald-400" aria-hidden="true" />
                    <h4 className="font-semibold text-zinc-100">Tendenda Via Scholar</h4>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
