export default function ServicesPage() {
  const services = [
    "Programming Assignment Help",
    "MBA Assignment Help",
    "Nursing Assignment Help",
    "Engineering Assignment Help",
    "Law Assignment Help",
    "Finance Assignment Help",
    "Essay Writing",
    "Dissertation Help",
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="font-bold text-lg text-blue-600">
                {service}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}