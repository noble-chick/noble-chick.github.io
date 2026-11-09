import { Download, FileText } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { resumeFile } from '@/data/journey';
import { assetUrl } from '@/utils/assetUrl';

export default function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="resume"
            eyebrow="Resume"
            title="Resume"
            description="A full overview of my education, experience, and skills."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FileText size={22} aria-hidden="true" />
              </span>
              <p className="text-base text-zinc-300">
                {resumeFile ? 'Download my resume as a PDF.' : 'My resume will be available here soon.'}
              </p>
            </div>

            {resumeFile && (
              <a
                href={assetUrl(resumeFile)}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <Download size={16} aria-hidden="true" />
                Download resume
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
