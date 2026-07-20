const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my assignment plagiarism free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every assignment is written from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver before deadline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we always deliver before your deadline."
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
              Yes. Every assignment is written from scratch.
            </p>

          </div>



          <div className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold">
              Do you deliver before deadline?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes, we always deliver before your deadline.
            </p>

          </div>


        </div>



        {/* FAQ Schema for Google */}

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
