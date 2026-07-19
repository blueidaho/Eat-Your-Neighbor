'use client';

import { motion } from 'framer-motion';
import StickerCard from './StickerCard';
import EmailForm from './EmailForm';

const LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/eatyourneighborgame' },
  { label: 'TikTok', href: 'https://tiktok.com/@eatyourneighborgame' },
  { label: 'Email Us Directly', href: 'mailto:hello@eatyourneighbor.game' },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <StickerCard rotate={-1} className="p-8 sm:p-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-3xl sm:text-4xl mb-3"
        >
          Nominate a Neighbor. Ask a Question. Say Hi.
        </motion.h2>
        <p className="text-ink/70 font-semibold text-lg mb-8 max-w-xl mx-auto">
          Got feedback, press inquiries, or a neighbor who genuinely deserves a
          spot in the Cemetery expansion? We want to hear about it.
        </p>

        <div className="flex justify-center mb-8">
          <EmailForm compact />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2.5 rounded-full border-[3px] border-ink font-display font-bold bg-white hover:bg-sky transition-colors shadow-comic-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </StickerCard>
    </section>
  );
}
