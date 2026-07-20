import Link from "next/link";
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


    <section className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Our Academic Help Services
  </h2>

  <div className="grid md:grid-cols-2 gap-5">

    <Link
      href="/assignment-help"
      className="border rounded-lg p-5 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">
        Assignment Help
      </h3>
      <p>
        Get expert assignment assistance for university and college students
        across different subjects.
      </p>
    </Link>


    <Link
      href="/homework-help"
      className="border rounded-lg p-5 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">
        Homework Help
      </h3>
      <p>
        Professional homework support to help students complete academic tasks
        effectively.
      </p>
    </Link>


    <Link
      href="/essay-writing-service"
      className="border rounded-lg p-5 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">
        Essay Writing Service
      </h3>
      <p>
        Get assistance with academic essays, research writing, and university
        projects.
      </p>
    </Link>


    <Link
      href="/research-paper-help"
      className="border rounded-lg p-5 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">
        Research Paper Help
      </h3>
      <p>
        Expert research assistance for papers, reports, and academic studies.
      </p>
    </Link>

  </div>

</section>


<section className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Assignment Help By Country
  </h2>


  <div className="grid md:grid-cols-2 gap-4">


    <Link
      href="/usa-assignment-help"
      className="border p-4 rounded-lg"
    >
      Assignment Help USA
    </Link>


    <Link
      href="/uk-assignment-help"
      className="border p-4 rounded-lg"
    >
      Assignment Help UK
    </Link>


    <Link
      href="/australia-assignment-help"
      className="border p-4 rounded-lg"
    >
      Assignment Help Australia
    </Link>


    <Link
      href="/canada-assignment-help"
      className="border p-4 rounded-lg"
    >
      Assignment Help Canada
    </Link>


  </div>

</section>


<section className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Subject Expertise
  </h2>


  <div className="grid md:grid-cols-2 gap-4">


    <Link
      href="/engineering-assignment-help"
      className="border p-4 rounded-lg"
    >
      Engineering Assignment Help
    </Link>


    <Link
      href="/mba-assignment-help"
      className="border p-4 rounded-lg"
    >
      MBA Assignment Help
    </Link>


    <Link
      href="/computer-science-assignment-help"
      className="border p-4 rounded-lg"
    >
      Computer Science Assignment Help
    </Link>


    <Link
      href="/nursing-assignment-help"
      className="border p-4 rounded-lg"
    >
      Nursing Assignment Help
    </Link>


  </div>

</section>
    </main>

  );
}
