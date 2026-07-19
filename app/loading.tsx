import Eyeball from '@/components/Eyeball';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-sky/30">
      <Eyeball className="w-14 h-14 animate-wiggle" />
      <p className="font-display font-bold text-xl">Rounding up the Nugs...</p>
    </div>
  );
}
