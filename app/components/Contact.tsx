export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Need Help With Your Assignment?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Connect with our expert tutors and get personalized academic support.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Contact StudyVertex
            </h3>

            <div className="space-y-5 text-gray-700">

              <p>
                📧 Email:
                <br />
                <span className="font-medium">
                  support@studyvertex.com
                </span>
              </p>


              <p>
                💬 WhatsApp:
                <br />
                <span className="font-medium">
                  +91 XXXXX XXXXX
                </span>
              </p>


              <p>
                ⏰ Support Hours:
                <br />
                Monday - Saturday (9 AM - 9 PM)
              </p>

            </div>


            <a
              href="https://wa.me/"
              className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>

          </div>



          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send Your Query
            </h3>


            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <textarea
                placeholder="Tell us about your assignment..."
                rows={5}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}