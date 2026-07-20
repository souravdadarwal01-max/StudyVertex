const services = [
  {
    title: "Programming Assignment Help",
    icon: "💻",
    description: "Python, Java, C++, JavaScript and more."
  },
  {
    title: "Engineering Assignments",
    icon: "⚙️",
    description: "Mechanical, Civil, Electrical and Electronics."
  },
  {
    title: "MBA Projects",
    icon: "📈",
    description: "Marketing, HR, Finance and Operations."
  },
  {
    title: "Nursing Assignments",
    icon: "🏥",
    description: "Professional nursing and healthcare writing."
  },
  {
    title: "Statistics Help",
    icon: "📊",
    description: "SPSS, R, Excel and Data Analysis."
  },
  {
    title: "Essay Writing",
    icon: "📚",
    description: "High-quality essays with proper citations."
  }
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          We provide academic assistance across multiple subjects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              <button className="mt-8 text-blue-600 font-semibold">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}