'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StickerCard from './StickerCard';

export default function CreatorAbout() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <StickerCard rotate={2} className="overflow-hidden order-2 md:order-1 mx-auto max-w-sm md:max-w-none">
          <Image
            src="/images/creator-photo.jpg"
            alt="Ted, the creator of Eat Your Neighbor"
            width={1544}
            height={1158}
            className="w-full h-auto"
          />
        </StickerCard>

        <div className="order-1 md:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl sm:text-5xl mb-6"
          >
            Meet Your Neighbor
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-lg font-semibold text-ink/80"
          >
            <p>
              One guy. No committee. Nobody else to blame.
            </p>
            <p>
              I grew up in a family that never met a board game it didn&apos;t
              want to play until 1am. Somewhere in there, an idea showed up
              and refused to leave: what if the pieces could land on each
              other&apos;s spaces and just&hellip; eat one another? That was
              the whole spark. I ran with it.
            </p>
            <p>
              99% of every card, every drawing, every rule in this box came
              out of my own head and my own hands. There&apos;s no studio and
              no focus group softening the jokes.
            </p>
            <p className="text-ink font-bold">
              If something in this game is too much, that&apos;s on me. If
              something in this game is exactly right, that&apos;s also me,
              so I&apos;ll go ahead and take the credit for that part.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
