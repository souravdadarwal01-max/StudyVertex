const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my assignment plagiarism free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every assignment is written from scratch and prepared according to your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver assignments before the deadline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We focus on timely delivery and complete assignments according to your required deadline."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects does StudyVertex provide assignment help for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "StudyVertex provides assignment help for engineering, management, computer science, nursing, law, finance, and many other academic subjects."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get urgent assignment help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. StudyVertex provides urgent assignment assistance depending on your deadline and requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Which countries does StudyVertex serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "StudyVertex helps students from countries including the USA, UK, Australia, Canada, and New Zealand."
      }
    },
    {
      "@type": "Question",
      "name": "How can I place an assignment help order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact StudyVertex through the website, share your assignment requirements, and receive assistance from our academic experts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide research paper and essay writing help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. StudyVertex provides research paper assistance, essay writing support, reports, and other academic writing services."
      }
    }
  ]
};



export default function FAQ() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>


        <div className="space-y-6">


          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Is my assignment plagiarism free?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. Every assignment is written from scratch and prepared according to your requirements.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Do you deliver assignments before the deadline?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. We focus on timely delivery and complete assignments according to your required deadline.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              What subjects does StudyVertex provide assignment help for?
            </h3>

            <p className="mt-2 text-gray-600">
              StudyVertex provides assignment help for engineering, management, computer science, nursing, law, finance, and many other subjects.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Can I get urgent assignment help?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. StudyVertex provides urgent assignment assistance depending on your deadline and requirements.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Which countries does StudyVertex serve?
            </h3>

            <p className="mt-2 text-gray-600">
              StudyVertex helps students from countries including the USA, UK, Australia, Canada, and New Zealand.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              How can I place an assignment help order?
            </h3>

            <p className="mt-2 text-gray-600">
              You can contact StudyVertex through the website, share your assignment requirements, and receive assistance from our academic experts.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Do you provide research paper and essay writing help?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. StudyVertex provides research paper assistance, essay writing support, reports, and other academic writing services.
            </p>

          </div>


        </div>



        {/* FAQ Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />


      </div>

    </section>
  );
}
