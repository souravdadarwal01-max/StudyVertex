import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  FileText,
  GraduationCap,
  ArrowRight,
} from "lucide-react";


export const metadata = {
  title: "Academic Help Services | Assignment, Homework & Essay Help - StudyVertex",
  description:
    "Explore StudyVertex academic help services including assignment help, homework help, essay writing service, and research paper assistance for students worldwide.",
};



// Service Page Schema

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  "name": "StudyVertex Academic Services",

  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Assignment Help",
      "url": "https://studyvertex.in/assignment-help"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Homework Help",
      "url": "https://studyvertex.in/homework-help"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Essay Writing Service",
      "url": "https://studyvertex.in/essay-writing-service"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Research Paper Help",
      "url": "https://studyvertex.in/research-paper-help"
    }
  ]
};



export default function ServicesPage() {

  return (

    <main className="max-w-6xl mx-auto px-6 py-12">


      <h1 className="text-4xl font-bold mb-6">
        Academic Help Services For Students Worldwide
      </h1>


      <p className="text-gray-700 mb-10">
        StudyVertex provides professional academic assistance services for
        university and college students worldwide. Our experts help students
        manage academic challenges with assignment support, homework guidance,
        essay writing assistance, and research paper help.
      </p>



     {/* Services */}

<section className="mt-16">

  <div className="text-center mb-12">

    <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
      OUR SERVICES
    </span>

    <h2 className="mt-4 text-4xl font-bold">
      Our Academic Help Services
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-gray-600">
      Explore our complete range of academic assistance designed to help
      students excel in assignments, homework, essays and research papers.
    </p>

  </div>

  <div className="grid gap-8 md:grid-cols-2">

    {/* Assignment */}

    <Link
      href="/assignment-help"
      className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-start gap-5">

        <div className="rounded-full bg-blue-100 p-4">
          <ClipboardCheck className="h-8 w-8 text-blue-700" />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold">
            Assignment Help
          </h3>

          <p className="mt-2 text-gray-600">
            Professional support for assignments, reports,
            case studies and academic projects.
          </p>

        </div>

        <ArrowRight className="mt-2 h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

      </div>
    </Link>

    {/* Homework */}

    <Link
      href="/homework-help"
      className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-start gap-5">

        <div className="rounded-full bg-green-100 p-4">
          <BookOpen className="h-8 w-8 text-green-700" />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold">
            Homework Help
          </h3>

          <p className="mt-2 text-gray-600">
            Step-by-step homework guidance across
            multiple university subjects.
          </p>

        </div>

        <ArrowRight className="mt-2 h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

      </div>
    </Link>

    {/* Essay */}

    <Link
      href="/essay-writing-service"
      className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-start gap-5">

        <div className="rounded-full bg-yellow-100 p-4">
          <FileText className="h-8 w-8 text-yellow-700" />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold">
            Essay Writing Service
          </h3>

          <p className="mt-2 text-gray-600">
            Expert assistance with essays,
            argumentative writing and university papers.
          </p>

        </div>

        <ArrowRight className="mt-2 h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

      </div>
    </Link>

    {/* Research */}

    <Link
      href="/research-paper-help"
      className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-start gap-5">

        <div className="rounded-full bg-purple-100 p-4">
          <GraduationCap className="h-8 w-8 text-purple-700" />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold">
            Research Paper Help
          </h3>

          <p className="mt-2 text-gray-600">
            Research assistance for dissertations,
            literature reviews and academic papers.
          </p>

        </div>

        <ArrowRight className="mt-2 h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

      </div>
    </Link>

  </div>

</section>



      {/* Why Choose StudyVertex */}

<section className="mt-20">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose StudyVertex?
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold mb-2">
        Expert Academic Writers
      </h3>
      <p className="text-gray-600">
        Work with experienced subject experts from various academic disciplines.
      </p>
    </div>

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold mb-2">
        Multiple Subjects Covered
      </h3>
      <p className="text-gray-600">
        Get academic assistance across engineering, management, nursing, law,
        computer science and many more.
      </p>
    </div>

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold mb-2">
        Research-Based Support
      </h3>
      <p className="text-gray-600">
        Every solution is prepared with proper research and academic standards.
      </p>
    </div>

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold mb-2">
        Student-Focused Assistance
      </h3>
      <p className="text-gray-600">
        Our goal is to help students understand concepts and improve academic performance.
      </p>
    </div>

  </div>

</section>
      {/* Services Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />


    </main>

  );

}
