export default function Testimonials() {
  const reviews = [
    {
      name: "John Smith",
      country: "Australia 🇦🇺",
      course: "Programming",
      review:
        "Excellent work! My assignment was delivered before the deadline.",
    },
    {
      name: "Emily Johnson",
      country: "Canada 🇨🇦",
      course: "MBA",
      review:
        "Very professional service. Highly recommended for MBA students.",
    },
    {
      name: "David Wilson",
      country: "United Kingdom 🇬🇧",
      course: "Engineering",
      review:
        "The expert explained every concept clearly. Amazing support.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-600">
          What Our Students Say
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Trusted by students from Australia, UK, USA and Canada.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-100 rounded-xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 text-gray-700 italic">
                "{review.review}"
              </p>

              <hr className="my-6" />

              <h3 className="font-bold text-xl">
                {review.name}
              </h3>

              <p className="text-gray-500">
                {review.country}
              </p>

              <p className="text-blue-600 font-semibold mt-2">
                {review.course}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}