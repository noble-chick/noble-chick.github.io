import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { portraitPath } from '@/data/journey';
import { assetUrl } from '@/utils/assetUrl';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:scale-[0.98]';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="animate-fade-up text-sm font-medium text-emerald-400" style={{ animationDelay: '0ms' }}>
            {profile.education.degree} · {profile.education.graduation}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up mt-4 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            {profile.name}
          </h1>
          <p
            className="animate-fade-up mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Cyber Security student at {profile.education.school}. {profile.tagline}
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
            <a
              href="#projects"
              className={`${buttonBase} group bg-emerald-500 text-zinc-950 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20`}
            >
              View projects
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-zinc-700 text-zinc-100 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900`}
            >
              <Github size={16} aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-zinc-700 text-zinc-100 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900`}
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="animate-fade-up flex justify-center" style={{ animationDelay: '320ms' }}>
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-emerald-400/35 blur-3xl" />
            <img
              src={assetUrl(portraitPath)}
              alt="Portrait of Tehreem Asad"
              width={288}
              height={288}
              className="relative h-56 w-56 rounded-full border-4 border-zinc-800 object-cover object-[50%_30%] shadow-2xl sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
