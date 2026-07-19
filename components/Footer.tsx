import Eyeball from './Eyeball';

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Eyeball className="w-8 h-8" />
          <span className="font-display font-extrabold text-lg">
            Eat Your Neighbor
          </span>
        </div>

        <p className="text-center text-sm font-semibold text-ink/60 max-w-md">
          No actual neighbors were harmed in the making of this game. The Nugs,
          however, had a rough time. &copy; {new Date().getFullYear()} Eat Your
          Neighbor. All rights reserved, all casseroles disputed.
        </p>

        <p className="text-sm font-bold text-ink/40 italic">
          Not HOA-approved.
        </p>
      </div>
    </footer>
  );
}
