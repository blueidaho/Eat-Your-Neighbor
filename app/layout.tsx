import type { Metadata } from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eatyourneighbor.com'),
  title: 'Eat Your Neighbor — Your neighbors are terrible. Time to eat them.',
  description:
    "A party game of dice, cards, and neighborhood cannibalism. Sign up to get notified the second we launch on Kickstarter — before your neighbors do.",
  openGraph: {
    title: 'Eat Your Neighbor',
    description: 'Your neighbors are terrible. Time to eat them.',
    images: ['/images/game-board.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-body text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
