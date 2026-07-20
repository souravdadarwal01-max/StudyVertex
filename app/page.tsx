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


      {/* Trust Bar */}
      <TrustBar />


      {/* Website Statistics */}
      <Statistics />


      {/* Services Section */}
      <Services />


      {/* Subjects Section */}
      <Subjects />


      {/* How It Works */}
      <HowItWorks />


      {/* Why Choose StudyVertex */}
      <WhyChooseUs />


      {/* Student Testimonials */}
      <Testimonials />


      {/* Frequently Asked Questions */}
      <FAQ />


      {/* Final CTA */}
      <CTA />


    </main>

  );
}
