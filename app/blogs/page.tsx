import Link from "next/link";
import { getBlogs } from "@/lib/mdx";

export default function BlogsPage() {
  const blogs = getBlogs();

  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-blue-700">
          StudyVertex Blogs
        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Academic guides, study tips and resources for students worldwide.
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Category (Optional) */}
              {"category" in blog && blog.category && (
                <span className="text-sm text-blue-600 font-semibold">
                  {blog.category as string}
                </span>
              )}

              {/* Title */}
              <h2 className="text-xl font-bold mt-3">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4">
                {blog.description}
              </p>

              {/* Read More */}
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
