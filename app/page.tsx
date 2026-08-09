import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Trailer from '@/components/Trailer';
import About from '@/components/About';
import CardGrid from '@/components/CardGrid';
import RulesFaq from '@/components/RulesFaq';
import CreatorAbout from '@/components/CreatorAbout';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Trailer />
      <About />
      <CardGrid />
      <RulesFaq />
      <CreatorAbout />
      <Contact />
      <Footer />
    </main>
  );
}
