export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">

        <h1 className="text-5xl font-bold">
          Expert Assignment Help for Students Worldwide
        </h1>

        <p className="mt-6 text-xl">
          Get personalized academic support from expert tutors.
          One-to-one guidance for assignments, projects and homework.
        </p>

        <a
          href="/submit-assignment"
          className="inline-block mt-8 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold"
        >
          Submit Your Assignment
        </a>

      </section>


      {/* Services */}
      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold">
              Assignment Help
            </h3>
            <p>
              Professional guidance for university assignments.
            </p>
          </div>


          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold">
              Homework Help
            </h3>
            <p>
              Get support from subject experts.
            </p>
          </div>


          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold">
              Online Tutors
            </h3>
            <p>
              Connect with experienced tutors.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Need Help With Your Assignment?
        </h2>

        <a
          href="/submit-assignment"
          className="inline-block mt-6 bg-emerald-600 text-white px-8 py-3 rounded-lg"
        >
          Get Started
        </a>

      </section>

    </main>
  );
}
