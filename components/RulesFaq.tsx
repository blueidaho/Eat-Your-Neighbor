'use client';

import { motion } from 'framer-motion';

const RULES = [
  {
    q: 'How many players?',
    a: '2–6. More neighbors means more casualties, so we recommend the full six if your friend group can handle the betrayal.',
  },
  {
    q: "What's a \"Nug\"?",
    a: 'Your family, if your family were small, round, defenseless jellybeans with tiny eyes that trust you completely. That trust is a resource. Spend it wisely.',
  },
  {
    q: 'How do you actually win?',
    a: 'Have more living Nugs than anyone else when the last card is drawn. Grief is not a tiebreaker. Neither is calling a family meeting.',
  },
  {
    q: 'Is this appropriate for kids?',
    a: "Depends entirely on the kid. And the neighbor. We're not your HOA.",
  },
  {
    q: 'How long is a game?',
    a: "About 30 minutes. Longer if someone flips the table after 'Bye Karen.' We've seen it happen. We did not clean it up.",
  },
  {
    q: 'Do I need to actually hate my neighbors to play?',
    a: "No, but it helps. For best results, play immediately after an HOA meeting or a 7am leaf-blower incident.",
  },
  {
    q: "What's in the box?",
    a: 'One board, six Home cards, over 80 event cards, a fistful of dice, and the crushing weight of what you did to get here.',
  },
];

export default function RulesFaq() {
  return (
    <section id="rules" className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-block bg-sky border-[3px] border-ink rounded-2xl px-5 py-2 rotate-1.5 shadow-comic-sm mb-4 font-display font-bold">
          Official-ish Rulebook
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl">
          The Rules (Allegedly)
        </h2>
      </motion.div>

      <div className="space-y-4">
        {RULES.map((rule, i) => (
          <motion.details
            key={rule.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group bg-white border-[3px] border-ink rounded-2xl px-6 py-4 shadow-comic-sm open:shadow-comic transition-shadow"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-bold text-lg sm:text-xl">
              <span>
                <span className="text-skyDark mr-2">§{i + 1}</span>
                {rule.q}
              </span>
              <span className="shrink-0 w-8 h-8 rounded-full border-[3px] border-ink flex items-center justify-center font-bold group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 font-semibold text-ink/75 leading-relaxed">
              {rule.a}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
