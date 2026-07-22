import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Assignment Help Online | StudyVertex",
  description:
    "Learn how to get reliable assignment help online. Discover expert tips, academic support, and writing guidance for students.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <span className="text-blue-700 font-semibold">
          Assignment Help
        </span>

        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          How to Get Assignment Help Online
        </h1>

        <p className="mt-4 text-gray-600">
          Published by StudyVertex
        </p>

        <img
          src="/blog-assignment-help.jpg"
          alt="Assignment Help Online"
          className="w-full rounded-xl mt-8"
        />

        <div className="mt-10 space-y-6 text-gray-700 leading-8">

          <p>
            University assignments require proper research, planning,
            and academic writing skills. Many students struggle because
            of deadlines, multiple subjects, and part-time jobs.
          </p>

          <h2 className="text-2xl font-bold text-blue-700">
            Why Students Need Assignment Help
          </h2>

          <p>
            Professional assignment guidance helps students understand
            difficult topics, improve grades, and submit work before
            deadlines.
          </p>

          <h2 className="text-2xl font-bold text-blue-700">
            Benefits of Online Assignment Help
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Expert academic writers</li>
            <li>On-time delivery</li>
            <li>Plagiarism-free content</li>
            <li>Affordable pricing</li>
            <li>24/7 student support</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700">
            Conclusion
          </h2>

          <p>
            Choosing a trusted academic platform like StudyVertex can
            help students complete assignments efficiently while
            improving their understanding of the subject.
          </p>

        </div>

      </article>
    </main>
  );
}