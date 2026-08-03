import type { Metadata } from 'next';
import Script from 'next/script';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-S3S0093DPD';

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
  title: 'Eat Your Neighbor — Your Neighbors Are Terrible',
  description:
    "A party game of dice, cards, and neighborhood cannibalism. Sign up to get notified the second we launch on Kickstarter — before your neighbors do.",
  openGraph: {
    title: 'Eat Your Neighbor',
    description: 'Your neighbors are terrible. Time to eat them.',
    images: ['/images/game-board.jpg'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eat Your Neighbor',
    url: 'https://eatyourneighbor.com',
    logo: 'https://eatyourneighbor.com/images/logo-black-text.png',
    sameAs: [
      'https://instagram.com/offension_entertainment',
      'https://tiktok.com/@offension_entertainment',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Eat Your Neighbor',
    url: 'https://eatyourneighbor.com',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-body text-ink antialiased overflow-x-hidden">
        {children}
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
