import Link from "next/link";


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



      <h2 className="text-3xl font-bold mb-6">
        Our Academic Services
      </h2>



      <div className="grid md:grid-cols-2 gap-6">


        <Link
          href="/assignment-help"
          className="border rounded-lg p-6 hover:shadow-md"
        >

          <h3 className="text-xl font-bold mb-2">
            Assignment Help
          </h3>

          <p className="text-gray-600">
            Get professional assignment assistance for university projects,
            reports, case studies, and academic tasks.
          </p>

        </Link>




        <Link
          href="/homework-help"
          className="border rounded-lg p-6 hover:shadow-md"
        >

          <h3 className="text-xl font-bold mb-2">
            Homework Help
          </h3>

          <p className="text-gray-600">
            Receive expert homework support with explanations and solutions
            across multiple subjects.
          </p>

        </Link>




        <Link
          href="/essay-writing-service"
          className="border rounded-lg p-6 hover:shadow-md"
        >

          <h3 className="text-xl font-bold mb-2">
            Essay Writing Service
          </h3>

          <p className="text-gray-600">
            Get assistance with academic essays, research essays,
            argumentative writing, and university papers.
          </p>

        </Link>




        <Link
          href="/research-paper-help"
          className="border rounded-lg p-6 hover:shadow-md"
        >

          <h3 className="text-xl font-bold mb-2">
            Research Paper Help
          </h3>

          <p className="text-gray-600">
            Professional research assistance for papers, literature reviews,
            academic reports, and university projects.
          </p>

        </Link>


      </div>



      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Why Choose StudyVertex?
        </h2>


        <ul className="list-disc ml-6 space-y-2">

          <li>
            Experienced subject matter experts
          </li>

          <li>
            Support for multiple academic disciplines
          </li>

          <li>
            Research-based academic assistance
          </li>

          <li>
            Help according to university requirements
          </li>

          <li>
            Student-focused learning support
          </li>

        </ul>


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
