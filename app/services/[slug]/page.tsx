import { notFound } from "next/navigation";

const services: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "assignment-help": {
    title: "Assignment Help",
    description:
      "Get expert assignment help from qualified academic professionals across multiple subjects. Receive personalized guidance, plagiarism-free solutions, and timely assistance for your university assignments.",
  },

  "essay-writing-help": {
    title: "Essay Writing Help",
    description:
      "Professional essay writing support for argumentative, descriptive, analytical and research essays with proper formatting and citations.",
  },

  "homework-help": {
    title: "Homework Help",
    description:
      "Complete your homework with expert guidance in mathematics, science, engineering, business and many other subjects.",
  },

  "live-tutor-session": {
    title: "Live Tutor Sessions",
    description:
      "Book one-to-one live sessions with experienced tutors for personalized academic support and concept clarification.",
  },

  "lab-report-help": {
    title: "Lab Report Help",
    description:
      "Professional assistance with laboratory reports including analysis, calculations, formatting and academic writing.",
  },

  "project-report-help": {
    title: "Project Report Help",
    description:
      "Expert support for university project reports including research, documentation, report writing and presentation.",
  },

  "presentation-help": {
    title: "Presentation Help",
    description:
      "Create impressive PowerPoint presentations with professional design, research-backed content and speaker notes.",
  },

  "research-paper-help": {
    title: "Research Paper Help",
    description:
      "Receive expert guidance for research papers including topic selection, literature review, citations and formatting.",
  },

  "dissertation-help": {
    title: "Dissertation Help",
    description:
      "Complete dissertation assistance including proposal writing, research methodology, data analysis and final editing.",
  },

  "programming-help": {
    title: "Programming Help",
    description:
      "Programming help for Python, Java, C, C++, JavaScript, SQL, Machine Learning, Data Science and other computer science subjects.",
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
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-5">
          StudyVertex Services
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {service.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {service.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Why Choose StudyVertex?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✅ Subject Matter Experts</li>
              <li>✅ Personalized One-to-One Assistance</li>
              <li>✅ 100% Original Academic Work</li>
              <li>✅ On-Time Delivery</li>
              <li>✅ Affordable Pricing</li>
              <li>✅ 24×7 Student Support</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Our Promise
            </h2>

            <p className="text-gray-600 leading-7">
              Our experienced academic experts help students from universities
              around the world by providing high-quality educational guidance,
              research support, project assistance and tutoring services across
              a wide range of subjects.
            </p>
          </div>

        </div>

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="/submit-assignment"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Submit Your Assignment
          </a>

          <a
            href="/contact"
            className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Contact an Expert
          </a>

        </div>

      </div>
    </main>
  );
}
