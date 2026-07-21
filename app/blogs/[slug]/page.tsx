import { notFound } from "next/navigation";
import { getBlog } from "@/lib/mdx";


export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  console.log("Slug:", slug);

const blog = getBlog(slug);

console.log("Blog:", blog);


  if (!blog) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-gray-100 py-20">

      <article className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-blue-700">
          {blog.data.title}
        </h1>


        <p className="mt-4 text-gray-600">
          {blog.data.description}
        </p>


        <div className="mt-8 text-gray-800 leading-8">
          {blog.content}
        </div>


      </article>

    </main>
  );
}