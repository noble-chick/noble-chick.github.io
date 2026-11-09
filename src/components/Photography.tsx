import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PhotoLightbox from '@/components/PhotoLightbox';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { aboutParagraphs, photoAlbum } from '@/data/journey';

const arrowButtonClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 transition-colors hover:border-emerald-500/60 hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400';

export default function Photography() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="photography" aria-labelledby="photography-heading" className="scroll-mt-20 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="photography"
            eyebrow="Interests"
            title="Beyond the screen"
            description="A few things I enjoy outside of school and work."
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-zinc-300">Moments I have captured</p>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => scrollTrack(-1)} aria-label="Show previous photos" aria-controls="photo-track" className={arrowButtonClass}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollTrack(1)} aria-label="Show next photos" aria-controls="photo-track" className={arrowButtonClass}>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <ul
              id="photo-track"
              ref={trackRef}
              tabIndex={0}
              aria-label="Photo gallery"
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              {photoAlbum.map((photo, index) => (
                <li key={photo.src} className="w-56 shrink-0 snap-start sm:w-64">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="group block w-full overflow-hidden rounded-xl border border-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {openIndex !== null && (
        <PhotoLightbox photos={photoAlbum} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
      )}
    </section>
  );
}
