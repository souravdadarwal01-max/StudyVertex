import Link from "next/link";

export default function ServicesPage() {

  const services = [
    {
      title: "Programming Assignment Help",
      description: "Python, Java, C++, JavaScript and more.",
      icon: "💻",
      slug: "programming-assignment-help",
    },
    {
      title: "Engineering Assignments",
      description: "Mechanical, Civil, Electrical and Electronics.",
      icon: "⚙️",
      slug: "engineering-assignment-help",
    },
    {
      title: "MBA Projects",
      description: "Marketing, HR, Finance and Operations.",
      icon: "📈",
      slug: "mba-assignment-help",
    },
    {
      title: "Nursing Assignments",
      description: "Professional nursing and healthcare writing.",
      icon: "🏥",
      slug: "nursing-assignment-help",
    },
    {
      title: "Statistics Help",
      description: "SPSS, R, Excel and Data Analysis.",
      icon: "📊",
      slug: "statistics-help",
    },
    {
      title: "Essay Writing",
      description: "High-quality essays with proper citations.",
      icon: "📚",
      slug: "essay-writing",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-6">


        <h1 className="text-5xl font-bold text-center text-blue-600">
          Our Services
        </h1>


        <p className="text-center text-gray-600 mt-4 text-lg">
          We provide academic assistance across multiple subjects.
        </p>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


          {services.map((service) => (

            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >

              <div className="text-4xl">
                {service.icon}
              </div>


              <h2 className="text-xl font-bold text-blue-600 mt-4">
                {service.title}
              </h2>


              <p className="text-gray-600 mt-3">
                {service.description}
              </p>



              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}
