'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';
import PowBurst from './PowBurst';
import Eyeball from './Eyeball';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink bg-sky/40">
      <Eyeball className="hidden md:block absolute top-10 left-6 w-14 h-14 animate-float" />
      <Eyeball className="hidden md:block absolute bottom-16 left-1/4 w-10 h-10 animate-float [animation-delay:1s]" />
      <Eyeball className="hidden md:block absolute top-24 right-10 w-12 h-12 animate-float [animation-delay:0.5s]" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-ink text-white font-display font-bold px-4 py-2 rounded-2xl mb-6 text-sm md:text-base shadow-comic-sky"
          >
            Coming soon to Kickstarter 🔪
          </motion.div>

          <h1 className="sr-only">Eat Your Neighbor</h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 -ml-2 w-full max-w-md"
          >
            <Image
              src="/images/logo-black-text.png"
              alt=""
              width={947}
              height={653}
              priority
              className="w-full h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold mb-3"
          >
            Your neighbors are terrible. Time to eat them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-ink/70 font-semibold mb-8 max-w-md"
          >
            A dice-and-card party game about betrayal, backyard BBQs, and burying
            the people you used to wave to. 2–6 players. Zero chill.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-display font-bold text-lg mb-3"
          >
            Back it before your neighbors do!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <EmailForm />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative"
        >
          <div className="border-[3px] border-ink rounded-3xl overflow-hidden shadow-comic-lg bg-white">
            <Image
              src="/images/game-board.jpg"
              alt="The Eat Your Neighbor game board, featuring Downtown Nugsville, Nugtopia, Retch Island, and the Cemetery"
              width={1200}
              height={1200}
              priority
              className="w-full h-auto"
            />
          </div>
          <motion.div
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -right-8 w-24 h-24 sm:w-28 sm:h-28"
          >
            <PowBurst className="w-full h-full" />
            <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-ink text-xs sm:text-sm -rotate-12 text-center px-2">
              CHOMP!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
