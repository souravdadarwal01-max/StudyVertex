export default function Statistics() {
  const stats = [
    {
      number: "10,000+",
      title: "Assignments Delivered",
    },
    {
      number: "500+",
      title: "Academic Experts",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
    {
      number: "24/7",
      title: "Student Support",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-blue-50 rounded-xl p-8 text-center shadow hover:shadow-xl transition"
            >

              <h2 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-4 text-lg text-gray-700">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
