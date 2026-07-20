import { notFound } from "next/navigation";

const subjects: Record<
  string,
  {
    title: string;
    description: string;
    topics: string[];
  }
> = {
  "computer-science-it": {
    title: "Computer Science & IT",
    description:
      "Get expert assignment help, programming support, homework assistance and project guidance for Computer Science & IT students.",
    topics: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cyber Security",
    ],
  },

  engineering: {
    title: "Engineering",
    description:
      "Professional engineering assignment help from subject experts.",
    topics: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Robotics",
      "CAD/CAM",
    ],
  },

  mathematics: {
    title: "Mathematics",
    description:
      "Expert mathematics homework, assignments and online tutoring.",
    topics: [
      "Calculus",
      "Algebra",
      "Statistics",
      "Probability",
      "Linear Algebra",
      "Differential Equations",
    ],
  },

  "business-management": {
    title: "Business & Management",
    description:
      "MBA assignments, Marketing, HR, Finance and Operations support.",
    topics: [
      "MBA",
      "Marketing",
      "Finance",
      "Human Resource",
      "Operations",
      "Business Analytics",
    ],
  },

  science: {
    title: "Science",
    description:
      "Assignment help for Physics, Chemistry, Biology and Biotechnology.",
    topics: [
      "Physics",
      "Chemistry",
      "Biology",
      "Biotechnology",
    ],
  },

  "healthcare-nursing": {
    title: "Healthcare & Nursing",
    description:
      "Professional Nursing and Healthcare assignment assistance.",
    topics: [
      "Nursing",
      "Medical Science",
      "Anatomy",
      "Physiology",
      "Pharmacology",
    ],
  },

  "arts-humanities": {
    title: "Arts & Humanities",
    description:
      "Academic support for Literature, History, Psychology and Sociology.",
    topics: [
      "English Literature",
      "History",
      "Psychology",
      "Sociology",
    ],
  },

  "finance-accounting": {
    title: "Finance & Accounting",
    description:
      "Accounting and Finance assignment experts available 24/7.",
    topics: [
      "Accounting",
      "Auditing",
      "Taxation",
      "Corporate Finance",
    ],
  },

  "research-writing": {
    title: "Research & Writing",
    description:
      "Research papers, dissertations, thesis and literature review support.",
    topics: [
      "Research Paper",
      "Literature Review",
      "Dissertation",
      "Thesis Writing",
    ],
  },
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const subject = subjects[slug];

  if (!subject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl p-10">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            StudyVertex Subject
          </span>

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            {subject.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            {subject.description}
          </p>

          <h2 className="mt-10 text-2xl font-bold">
            Topics Covered
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {subject.topics.map((topic) => (
              <div
                key={topic}
                className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center font-medium hover:bg-blue-100 transition"
              >
                {topic}
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            <div className="bg-gray-100 rounded-xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                Why Choose StudyVertex?
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✅ Expert Subject Specialists</li>
                <li>✅ Original Academic Work</li>
                <li>✅ On-Time Delivery</li>
                <li>✅ Affordable Pricing</li>
                <li>✅ 24×7 Student Support</li>
              </ul>

            </div>

            <div className="bg-blue-50 rounded-xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                Our Services
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Assignment Help</li>
                <li>✔ Homework Help</li>
                <li>✔ Project Guidance</li>
                <li>✔ Online Tutoring</li>
                <li>✔ Research Support</li>
              </ul>

            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <a
              href="/submit-assignment"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Submit Assignment
            </a>

            <a
              href="/contact"
              className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Contact Expert
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}