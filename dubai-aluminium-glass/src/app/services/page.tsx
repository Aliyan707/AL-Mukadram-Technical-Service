import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceProcess from '@/components/services/ServiceProcess';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServiceProcess />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
