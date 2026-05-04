import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ThemeSection from '@/components/ThemeSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ThemeSection />
        <WhyJoinSection />
      </main>
      <Footer />
    </>
  );
}
