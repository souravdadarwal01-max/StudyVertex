export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Expert Assignment Help for Students Worldwide
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Get personalized academic support from expert tutors.
            One-to-one guidance for assignments, projects, homework,
            essays and research work.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <a
              href="/submit-assignment"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Submit Assignment
            </a>

            <a
              href="/login"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700"
            >
              Student Login
            </a>

          </div>

        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Services
          </h2>

          <p className="text-center text-gray-600 mt-3">
            Academic support designed for university students worldwide.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-10">


            <div className="p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-bold text-blue-700">
                Assignment Help
              </h3>

              <p className="mt-3 text-gray-600">
                Get expert guidance for university assignments,
                case studies and academic projects.
              </p>
            </div>


            <div className="p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-bold text-blue-700">
                Homework Help
              </h3>

              <p className="mt-3 text-gray-600">
                Receive support from subject experts for
                difficult homework and coursework.
              </p>
            </div>


            <div className="p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-bold text-blue-700">
                Online Tutors
              </h3>

              <p className="mt-3 text-gray-600">
                Connect with experienced tutors for personalized
                learning assistance.
              </p>
            </div>


          </div>

        </div>

      </section>



      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            How StudyVertex Works
          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-10">


            <div>
              <div className="text-4xl font-bold text-blue-700">
                1
              </div>
              <h3 className="font-bold mt-3">
                Submit Requirement
              </h3>
              <p className="text-gray-600">
                Share your assignment details.
              </p>
            </div>


            <div>
              <div className="text-4xl font-bold text-blue-700">
                2
              </div>
              <h3 className="font-bold mt-3">
                Connect Expert
              </h3>
              <p className="text-gray-600">
                We match you with the right tutor.
              </p>
            </div>


            <div>
              <div className="text-4xl font-bold text-blue-700">
                3
              </div>
              <h3 className="font-bold mt-3">
                Get Support
              </h3>
              <p className="text-gray-600">
                Receive personalized academic guidance.
              </p>
            </div>


          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold">
          Need Help With Your Assignment?
        </h2>

        <p className="mt-4 text-gray-600">
          Submit your requirement and get started today.
        </p>


        <a
          href="/submit-assignment"
          className="inline-block mt-6 bg-green-600 text-white px-10 py-3 rounded-lg font-semibold"
        >
          Get Started
        </a>

      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">

        <h3 className="text-xl font-bold">
          StudyVertex
        </h3>

        <p className="mt-2 text-gray-400">
          Academic support platform for students worldwide.
        </p>

      </footer>


    </main>
  );
}
