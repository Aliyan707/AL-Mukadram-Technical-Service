import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';
import LoadingScreen from '@/components/common/LoadingScreen';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import QuotationCalculator from '@/components/home/QuotationCalculator';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <QuotationCalculator />
        <Statistics />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
