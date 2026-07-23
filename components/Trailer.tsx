'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StickerCard from './StickerCard';

const YOUTUBE_ID = 'C697IGseMfs';

export default function Trailer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
          Watch Before You Regret It
        </h2>
        <p className="text-ink/70 font-semibold text-lg max-w-2xl mx-auto">
          A short, deeply unnecessary trailer for a game about eating the people next door.
        </p>
      </motion.div>

      <StickerCard rotate={-1} className="overflow-hidden">
        <div className="relative aspect-video bg-ink">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Eat Your Neighbor trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play trailer"
              className="group absolute inset-0 w-full h-full"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Eat Your Neighbor trailer thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors" />
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky border-[3px] border-ink shadow-comic flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="#0A0A0A">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.span>
            </button>
          )}
        </div>
      </StickerCard>
    </section>
  );
}
