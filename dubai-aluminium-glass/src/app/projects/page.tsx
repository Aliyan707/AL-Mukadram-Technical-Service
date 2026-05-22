import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGallery from '@/components/projects/ProjectsGallery';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGallery />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
