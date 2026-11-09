import { useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

function SkillIcon({ slug }: { slug: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={`https://skillicons.dev/icons?i=${slug}`}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-5 w-5"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="skills"
            eyebrow="Skills"
            title="Technical skills"
            description="Technologies I have studied and used in coursework and projects. I am still building depth in many of them."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 60} className="h-full">
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-zinc-700">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-emerald-500/50 hover:text-zinc-50"
                    >
                      {skill.icon && <SkillIcon slug={skill.icon} />}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
