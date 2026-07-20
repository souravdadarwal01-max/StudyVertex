import { notFound } from "next/navigation";


const services: Record<string, {
  title: string;
  description: string;
}> = {

  "programming-assignment-help": {
    title: "Programming Assignment Help",
    description:
      "Get expert programming assignment help for Python, Java, C++, JavaScript and other programming languages.",
  },

  "engineering-assignment-help": {
    title: "Engineering Assignment Help",
    description:
      "Professional engineering assignment support for Mechanical, Civil, Electrical and Electronics students.",
  },

  "mba-assignment-help": {
    title: "MBA Assignment Help",
    description:
      "Get assistance with MBA projects, case studies, marketing, HR, finance and management assignments.",
  },

  "nursing-assignment-help": {
    title: "Nursing Assignment Help",
    description:
      "Receive professional nursing and healthcare assignment guidance from subject experts.",
  },

  "statistics-help": {
    title: "Statistics Help",
    description:
      "Get help with SPSS, R, Excel, statistics analysis and research data interpretation.",
  },

  "essay-writing": {
    title: "Essay Writing Help",
    description:
      "High-quality essay writing support with proper academic structure and citations.",
  },

  "dissertation-help": {
    title: "Dissertation Help",
    description:
      "Expert dissertation guidance for research, writing, editing and formatting.",
  },

};


export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const service = services[slug];


  if (!service) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">


        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          {service.title}
        </h1>


        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>


        <div className="mt-8">

          <h2 className="text-2xl font-bold">
            Why Choose StudyVertex?
          </h2>


          <ul className="mt-4 space-y-3 text-gray-600">

            <li>✅ Expert academic tutors</li>
            <li>✅ Personalized one-to-one guidance</li>
            <li>✅ Support for university students worldwide</li>
            <li>✅ Quality academic assistance</li>

          </ul>


        </div>


        <a
          href="/submit-assignment"
          className="inline-block mt-10 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
        >
          Submit Your Assignment
        </a>


      </div>


    </main>
  );
}
