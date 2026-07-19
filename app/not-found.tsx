import Link from 'next/link';
import Eyeball from '@/components/Eyeball';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-sky/30">
      <Eyeball className="w-20 h-20 mb-6 animate-wiggle" />
      <h1 className="font-display font-extrabold text-5xl mb-4">404: Nug Missing</h1>
      <p className="text-lg font-semibold text-ink/70 max-w-md mb-8">
        This page got sent to the Cemetery. We checked under the porch. It&apos;s
        not there either.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-2xl border-[3px] border-ink bg-white font-display font-bold shadow-comic-sm hover:bg-sky transition-colors"
      >
        Back to Safety
      </Link>
    </main>
  );
}
