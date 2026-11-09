import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { artifacts } from '@/data/journey';

export default function Artifacts() {
  return (
    <section id="artifacts" aria-labelledby="artifacts-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="artifacts"
            eyebrow="Artifacts & Reflections"
            title="Evidence of growth."
            description="Creative and professional work that shows how I reflect on my experiences and keep improving."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {artifacts.map((artifact, index) => (
            <Reveal key={artifact.title} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 sm:p-8">
                <ul className="flex flex-wrap gap-2" aria-label={`${artifact.title} tags`}>
                  {artifact.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-50">{artifact.title}</h3>

                /* {artifact.image && (
                  <img
                    src={artifact.image.src}
                    alt={artifact.image.alt}
                    loading="lazy"
                    className="mt-5 w-full rounded-xl border border-zinc-800"
                  />
                )} */
                {artifact.image && (
                  <div className="mt-5 aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                  <img
                    src={artifact.image.src}
                    alt={artifact.image.alt}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
                {artifact.video && (
                  <div className="mt-5 aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <iframe
                      src={artifact.video}
                      title={`${artifact.title} video`}
                      className="h-full w-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400">
                  <div>
                    <p className="font-semibold text-zinc-200">What I made</p>
                    <p className="mt-1">{artifact.made}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-200">What I learned</p>
                    <p className="mt-1">{artifact.learned}</p>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-6">
                  {artifact.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
