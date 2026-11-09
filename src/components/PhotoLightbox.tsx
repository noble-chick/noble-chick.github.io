import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoLightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const navButton =
  'absolute top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/80 p-3 text-zinc-100 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400';

export default function PhotoLightbox({ photos, index, onClose, onNavigate }: PhotoLightboxProps) {
  const total = photos.length;
  const photo = photos[index];

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % total);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + total) % total);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, total, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-zinc-950/95 p-4 backdrop-blur-sm sm:p-12"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-4 top-4 rounded-full border border-zinc-700 bg-zinc-900/80 p-3 text-zinc-100 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <X size={20} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index - 1 + total) % total);
        }}
        aria-label="Previous photo"
        className={`${navButton} left-4`}
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>

      <img
        src={photo.src}
        alt={photo.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index + 1) % total);
        }}
        aria-label="Next photo"
        className={`${navButton} right-4`}
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
