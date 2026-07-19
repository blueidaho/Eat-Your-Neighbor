'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'loading' | 'success' | 'error';

const LOADING_LINES = [
  'Setting the table...',
  'Sharpening the forks...',
  'Asking Karen to leave...',
];

export default function EmailForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.error ?? "That didn't work. Even the Nugs are confused.");
        return;
      }

      setStatus('success');
      setMessage("You're on the list. We'll howl when it's time to feast.");
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('The carrier pigeon got eaten. Try again?');
    }
  }

  return (
    <div className={compact ? 'w-full max-w-md' : 'w-full max-w-lg'}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 sm:gap-0"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.nug@example.com"
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 px-5 py-4 rounded-2xl sm:rounded-r-none border-[3px] border-ink bg-white text-ink placeholder:text-ink/40 font-bold focus:outline-none focus:ring-4 focus:ring-sky/60 disabled:opacity-60"
        />
        <motion.button
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-6 py-4 rounded-2xl sm:rounded-l-none border-[3px] border-ink bg-sky font-display font-bold text-ink shadow-comic-sm hover:bg-skyDark transition-colors disabled:opacity-70 whitespace-nowrap -mt-0 sm:ml-[-3px]"
        >
          {status === 'loading'
            ? LOADING_LINES[Math.floor(Math.random() * LOADING_LINES.length)]
            : status === 'success'
            ? "You're In!"
            : 'Sign Up Now'}
        </motion.button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 font-bold text-sm ${
            status === 'error' ? 'text-red-600' : 'text-ink'
          }`}
        >
          {message}
        </motion.p>
      )}
      <p className="mt-2 text-xs text-ink/50 font-semibold">
        No spam. Just one email when we go live on Kickstarter. Probably some confetti emojis.
      </p>
    </div>
  );
}
