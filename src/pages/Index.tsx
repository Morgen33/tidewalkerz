import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WaveMarquee from '@/components/WaveMarquee';
import AboutSection from '@/components/AboutSection';
import MarketsSection from '@/components/MarketsSection';
import MusicSection from '@/components/MusicSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <HeroSection />
      <WaveMarquee />
      <AboutSection />
      <MarketsSection />
      <MusicSection />
      <Footer />
    </main>
  );
};

export default Index;
