import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ThemeSection from '@/components/ThemeSection';
import WhyJoinSection from '@/components/WhyJoinSection';

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
    </>
  );
}
