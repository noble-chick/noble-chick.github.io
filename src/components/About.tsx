import { Compass, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const aboutCards = [
  {
    icon: ShieldCheck,
    title: 'Who I am and what I do',
    text: 'I am currently a Business Finance co-op student with the Ontario Public Service, where I review financial information and support reporting. At ICNA Relief Canada, I handled confidential client records, including a spreadsheet-to-database migration, which taught me the importance of accuracy and privacy. I build web applications with Node.js, Express, and TypeScript, and I enjoy investigating how systems work.',
  },
  {
    icon: Compass,
    title: 'Career goals',
    text: 'I am looking for co-op roles in cyber security, governance, risk and compliance, or secure software development, where I can help protect sensitive information while building hands-on skills. Long term, I want a career that combines technical depth with careful, evidence-based work and keeps me learning.',
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="about"
            eyebrow="About me"
            title="Curious about systems. Careful with information."
            description="The experiences and values shaping the kind of security professional I want to become."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {aboutCards.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 80} className="h-full">
              <article className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900 hover:shadow-[0_0_32px_-6px_rgba(16,185,129,0.28)] sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/15">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-50">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
