'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StickerCard from './StickerCard';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <StickerCard rotate={-2} className="overflow-hidden">
          <Image
            src="/images/gameplay-photo.jpg"
            alt="The Eat Your Neighbor board mid-game on a wooden table, with colorful player pawns, dice, event cards, and a Home card marked Buried in the foreground"
            width={2856}
            height={2142}
            className="w-full h-auto"
          />
        </StickerCard>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl sm:text-5xl mb-6"
          >
            Okay, so what
            <span className="relative inline-block ml-3">
              is
              <svg
                className="absolute left-0 -bottom-1 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 6 Q50 12 100 4" stroke="#7DD3FC" strokeWidth="6" fill="none" />
              </svg>
            </span>{' '}
            this?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-lg font-semibold text-ink/80"
          >
            <p>
              Every player raises a family of adorable little blobs called{' '}
              <strong className="text-ink">Nugs</strong>. You keep them safe at
              home. You feed them. You love them.
            </p>
            <p>
              Then everyone else&apos;s dice, cards, and questionable life choices
              try to get your Nugs run over, roasted, or shipped straight to the
              cemetery.
            </p>
            <p>
              It&apos;s part board game, part card game, part &ldquo;why is my
              own mother laughing at my Nug&apos;s funeral.&rdquo; We playtested
              it on actual neighbors. Several relationships did not survive.
              The game did.
            </p>
            <p className="text-ink font-bold">
              No experience required. Mild trust issues recommended.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
