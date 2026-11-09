import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'tehreem-asad',
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'noble-chick',
    href: profile.github,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="contact"
            eyebrow="Contact"
            title="Let's connect"
            description="Open to conversations about co-op opportunities, cyber security, and software projects. The best way to reach me is by email."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="h-full">
                <Reveal delay={index * 80} className="h-full">
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-zinc-950">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-zinc-500">{item.label}</span>
                      <span className="block truncate text-base font-semibold text-zinc-100">{item.value}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400"
                    />
                    {item.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
