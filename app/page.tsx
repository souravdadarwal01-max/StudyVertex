import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import TrustBar from "./components/TrustBar";
import Statistics from "./components/Statistics";
import Subjects from "./components/Subjects";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">


      {/* Hero Section */}
      <Hero />


      {/* Trust Section */}
      <TrustBar />


      {/* Statistics */}
      <Statistics />


      {/* Services */}
      <Services />


      {/* Subjects */}
      <Subjects />


      {/* How It Works */}
      <HowItWorks />


      {/* Why Choose Us */}
      <WhyChooseUs />


      {/* Testimonials */}
      <Testimonials />


      {/* FAQ */}
      <FAQ />


      {/* Call To Action */}
      <CTA />


    </main>
  );
}
