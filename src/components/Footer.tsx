import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.education.degree}, {profile.education.school}</p>
      </div>
    </footer>
  );
}
