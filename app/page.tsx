import PageLayout from '../src/components/layout/page-layout';
import HeroSection from '../src/features/home/components/hero-section';
import WhyUsSection from '../src/features/home/components/why-us-section';
import FeaturesSection from '../src/features/home/components/features-section';
import SecureAccessSection from '../src/features/home/components/secure-access-section';
import TestimonialsSection from '../src/features/home/components/testimonials-section';
import BillingInfrastructureSection from '../src/features/home/components/billing-infrastructure-section';

export default function HomePage() {
  return (
    <PageLayout title="Visit www.pixelrocket.store to learn how to become a frontend web developer">
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <SecureAccessSection />
      <TestimonialsSection />
      <BillingInfrastructureSection />
    </PageLayout>
  );
}