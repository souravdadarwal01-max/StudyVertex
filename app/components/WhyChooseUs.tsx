const features = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Receive your assignments before the deadline."
  },
  {
    icon: "🎓",
    title: "Expert Tutors",
    description: "Qualified professionals with subject expertise."
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    description: "Your personal information is always protected."
  },
  {
    icon: "💯",
    title: "Plagiarism Free",
    description: "Every assignment is checked for originality."
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description: "Our support team is available day and night."
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Quality academic help at student-friendly prices."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Why Choose StudyVertex?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          We combine quality, reliability and excellent student support.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}