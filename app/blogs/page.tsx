import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    {
      title: "How to Get Assignment Help Online?",
      description:
        "Learn how students can get expert academic support for university assignments and projects.",
      slug: "how-to-get-assignment-help-online",
      category: "Assignment Help",
    },
    {
      title: "Best Study Tips for University Students",
      description:
        "Improve your productivity, manage your time and achieve better academic results.",
      slug: "best-study-tips-for-university-students",
      category: "Study Tips",
    },
    {
      title: "Benefits of Online Tutors for Students",
      description:
        "Understand how one-to-one online tutoring helps students learn better.",
      slug: "benefits-of-online-tutors",
      category: "Online Learning",
    },
    {
      title: "How to Write a Perfect Academic Essay?",
      description:
        "A complete guide to writing structured essays with proper research and citations.",
      slug: "how-to-write-perfect-academic-essay",
      category: "Essay Writing",
    },
    {
      title: "MBA Assignment Writing Guide",
      description:
        "Learn how to prepare MBA assignments, case studies and business reports.",
      slug: "mba-assignment-writing-guide",
      category: "MBA",
    },
    {
      title: "Engineering Students Assignment Guide",
      description:
        "Tips and resources for completing engineering assignments successfully.",
      slug: "engineering-assignment-guide",
      category: "Engineering",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          StudyVertex Blogs
        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Academic guides, study tips and resources for students worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              <span className="text-sm text-blue-600 font-semibold">
                {blog.category}
              </span>

              <h2 className="text-xl font-bold mt-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-4">
                {blog.description}
              </p>

              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
              >
                Read More →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
