const steps = [
  {
    number: "01",
    title: "Upload Assignment",
    description:
      "Submit your assignment details and upload the files securely.",
    icon: "📤",
  },
  {
    number: "02",
    title: "Receive a Quote",
    description:
      "We'll review your requirements and send you a fair price.",
    icon: "💰",
  },
  {
    number: "03",
    title: "Expert Starts Working",
    description:
      "A qualified tutor begins your assignment immediately.",
    icon: "👨‍🏫",
  },
  {
    number: "04",
    title: "Download Solution",
    description:
      "Receive your completed assignment before the deadline.",
    icon: "📥",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Getting help is quick and easy.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-6xl">
                {step.icon}
              </div>

              <div className="text-blue-600 font-bold text-xl mt-6">
                Step {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-3">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}