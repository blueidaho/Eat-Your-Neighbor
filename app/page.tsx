import Hero from '@/components/Hero';
import About from '@/components/About';
import CardGrid from '@/components/CardGrid';
import RulesFaq from '@/components/RulesFaq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CardGrid />
      <RulesFaq />
      <Contact />
      <Footer />
    </main>
  );
}
