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
      "Get expert help for programming, software development, databases, networking and advanced computer science subjects.",
    topics: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "Machine Learning",
      "Artificial Intelligence",
      "Cyber Security",
      "Data Science",
    ],
  },

  engineering: {
    title: "Engineering",
    description:
      "Professional academic support for all engineering disciplines from experienced subject experts.",
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
      "Assignment help for calculus, algebra, statistics, probability and advanced mathematics.",
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
      "Academic guidance for MBA, management, HR, finance, marketing and business analytics.",
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
      "Expert tutoring and assignment help in science-related subjects.",
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
      "Professional nursing and healthcare academic assistance from qualified experts.",
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
      "High-quality academic support for arts, literature and social sciences.",
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
      "Professional support for accounting, taxation, auditing and finance.",
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
      "Expert assistance for research papers, dissertations, theses and academic writing.",
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

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-5">
            StudyVertex Subject
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {subject.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            {subject.description}
          </p>

          <h2 className="mt-10 text-2xl font-bold">
            Topics Covered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            {subject.topics.map((topic) => (
              <div
                key={topic}
                className="bg-blue-50 rounded-xl p-4 text-center font-medium text-gray-700 hover:bg-blue-100 transition"
              >
                {topic}
              </div>
            ))}

          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            <div className="bg-gray-100 rounded-xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                Why StudyVertex?
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✅ Subject Experts</li>
                <li>✅ Original Academic Work</li>
                <li>✅ 24×7 Student Support</li>
                <li>✅ Affordable Pricing</li>
                <li>✅ Timely Delivery</li>
              </ul>

            </div>

            <div className="bg-blue-50 rounded-xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                Need Academic Help?
              </h3>

              <p className="text-gray-700 leading-7">
                Our experienced tutors provide assignment help, homework support,
                project guidance and online tutoring for students worldwide.
              </p>

            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="/submit-assignment"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Submit Assignment
            </a>

            <a
              href="/contact"
              className="border border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
            >
              Contact an Expert
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}
