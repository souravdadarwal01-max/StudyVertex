import Link from "next/link";

export default function Services() {

  const services = [
    {
      icon: "💻",
      title: "Programming Assignment Help",
      description:
        "Python, Java, C++, JavaScript and more.",
      link:
        "/services/programming-assignment-help",
    },

    {
      icon: "⚙️",
      title: "Engineering Assignment Help",
      description:
        "Mechanical, Civil, Electrical and Electronics.",
      link:
        "/services/engineering-assignment-help",
    },

    {
      icon: "📈",
      title: "MBA Assignment Help",
      description:
        "Marketing, HR, Finance and Operations.",
      link:
        "/services/mba-assignment-help",
    },

    {
      icon: "🏥",
      title: "Nursing Assignment Help",
      description:
        "Professional nursing and healthcare writing.",
      link:
        "/services/nursing-assignment-help",
    },

    {
      icon: "📊",
      title: "Statistics Help",
      description:
        "SPSS, R, Excel and Data Analysis.",
      link:
        "/services/statistics-help",
    },

    {
      icon: "📚",
      title: "Essay Writing Help",
      description:
        "High-quality essays with proper citations.",
      link:
        "/services/essay-writing",
    },
  ];


  return (

    <section className="py-16 px-6 bg-white">

      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>


        <p className="text-center text-gray-600 mt-3">
          We provide academic assistance across multiple subjects.
        </p>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white border rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >


              <div className="text-4xl">
                {service.icon}
              </div>


              <h3 className="text-xl font-bold text-blue-700 mt-4">
                {service.title}
              </h3>


              <p className="text-gray-600 mt-3">
                {service.description}
              </p>



              <Link
                href={service.link}
                className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}
