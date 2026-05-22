import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import Timeline from '@/components/about/Timeline';
import Team from '@/components/about/Team';
import Certifications from '@/components/about/Certifications';
import WhyChooseUs from '@/components/about/WhyChooseUs';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <Timeline />
        <Team />
        <Certifications />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
