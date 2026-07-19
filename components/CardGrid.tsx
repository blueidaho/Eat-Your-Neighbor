'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StickerCard from './StickerCard';

const CARDS = [
  {
    src: '/images/card-bye-karen.jpg',
    alt: '"Bye Karen" event card — move 1 Nug of your choice straight to the cemetery',
    rotate: -3,
  },
  {
    src: '/images/card-road-kill.jpg',
    alt: '"Road Kill" event card — move 10 spaces and eat all Nugs along the way',
    rotate: 2,
  },
  {
    src: '/images/card-take-a-dump.jpg',
    alt: '"Take a Dump" event card — bury all Nugs you have eaten but not yet buried',
    rotate: -2,
  },
  {
    src: '/images/card-toast.jpg',
    alt: '"Toast" event card — roll doubles and send a family member to the cemetery',
    rotate: 3,
  },
  {
    src: '/images/card-neighborhood-bbq.jpg',
    alt: '"Neighborhood BBQ" event card — high roller buries everyone at the BBQ',
    rotate: -1.5,
  },
];

const HOMES = [
  { src: '/images/home-blue.jpg', alt: 'Blue player home card' },
  { src: '/images/home-green.jpg', alt: 'Green player home card' },
  { src: '/images/home-orange.jpg', alt: 'Orange player home card' },
  { src: '/images/home-purple.jpg', alt: 'Purple player home card' },
  { src: '/images/home-red.jpg', alt: 'Red player home card' },
  { src: '/images/home-yellow.jpg', alt: 'Yellow player home card' },
];

export default function CardGrid() {
  return (
    <section id="cards" className="bg-ink text-white py-20 md:py-28 border-y-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
            Ways to Ruin Someone&apos;s Tuesday
          </h2>
          <p className="text-white/70 font-semibold text-lg max-w-2xl mx-auto">
            A small, deeply unhinged sample of the {'>'}80 cards standing between
            your Nugs and a peaceful afternoon.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CARDS.map((card, i) => (
            <StickerCard
              key={card.src}
              rotate={card.rotate}
              delay={i * 0.05}
              className="overflow-hidden"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={1100}
                height={800}
                className="w-full h-auto"
              />
            </StickerCard>
          ))}

          <StickerCard rotate={1.5} delay={0.25} className="flex flex-col items-center justify-center p-6 text-ink text-center bg-sky">
            <p className="font-display font-extrabold text-2xl mb-2">
              ...and 75 more.
            </p>
            <p className="font-bold text-ink/70">
              We ran out of room. Not out of bad ideas.
            </p>
          </StickerCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-2">
            Pick a Home. Pretend It&apos;s Safe.
          </h3>
          <p className="text-white/70 font-semibold">
            Six colors of false security for your Nugs to live in.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {HOMES.map((home, i) => (
            <motion.div
              key={home.src}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
              className="border-[3px] border-white rounded-2xl overflow-hidden shadow-comic-sky bg-white"
            >
              <Image
                src={home.src}
                alt={home.alt}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
