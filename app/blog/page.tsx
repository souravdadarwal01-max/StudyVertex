export default function BlogsPage() {

  const blogs = [
    {
      title: "How to Get Assignment Help Online?",
      description:
        "Learn how students can get expert academic support for university assignments.",
    },

    {
      title: "Best Study Tips for University Students",
      description:
        "Improve your productivity with these proven study techniques.",
    },

    {
      title: "How Online Tutors Help Students?",
      description:
        "Understand the benefits of one-to-one online tutoring.",
    },

    {
      title: "Guide to Writing Better Essays",
      description:
        "Learn how to structure academic essays with proper research.",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-6">


        <h1 className="text-5xl font-bold text-center text-blue-700">
          StudyVertex Blogs
        </h1>


        <p className="text-center text-gray-600 mt-4">
          Helpful academic guides, study tips and education resources.
        </p>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


          {blogs.map((blog,index)=>(

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >

              <h2 className="text-xl font-bold text-blue-600">
                {blog.title}
              </h2>


              <p className="mt-4 text-gray-600">
                {blog.description}
              </p>


              <button className="mt-6 text-blue-700 font-semibold">
                Read More →
              </button>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}