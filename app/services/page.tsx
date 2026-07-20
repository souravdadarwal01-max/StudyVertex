import Link from "next/link";

export default function ServicesPage() {

  const services = [
    {
      name: "Programming Assignment Help",
      slug: "programming-assignment-help",
    },
    {
      name: "MBA Assignment Help",
      slug: "mba-assignment-help",
    },
    {
      name: "Nursing Assignment Help",
      slug: "nursing-assignment-help",
    },
    {
      name: "Engineering Assignment Help",
      slug: "engineering-assignment-help",
    },
    {
      name: "Law Assignment Help",
      slug: "law-assignment-help",
    },
    {
      name: "Finance Assignment Help",
      slug: "finance-assignment-help",
    },
    {
      name: "Essay Writing",
      slug: "essay-writing",
    },
    {
      name: "Dissertation Help",
      slug: "dissertation-help",
    },
  ];


  return (
    <main className="min-h-screen py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">


        <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">
          Our Services
        </h1>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {services.map((service) => (

            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              <h2 className="font-bold text-lg text-blue-600">
                {service.name}
              </h2>

              <p className="mt-3 text-gray-600">
                Get expert help from qualified tutors.
              </p>


            </Link>

          ))}


        </div>


      </div>

    </main>
  );
}
