import Link from "next/link";

export default function Subjects() {
  const subjects = [
    {
      icon: "💻",
      name: "Programming",
      link: "/programming",
    },
    {
      icon: "📈",
      name: "MBA",
      link: "/mba",
    },
    {
      icon: "🏥",
      name: "Nursing",
      link: "/nursing",
    },
    {
      icon: "⚙️",
      name: "Engineering",
      link: "/engineering",
    },
    {
      icon: "⚖️",
      name: "Law",
      link: "/law",
    },
    {
      icon: "💰",
      name: "Finance",
      link: "/finance",
    },
    {
      icon: "📊",
      name: "Accounting",
      link: "/accounting",
    },
    {
      icon: "📢",
      name: "Marketing",
      link: "/marketing",
    },
    {
      icon: "🧠",
      name: "Psychology",
      link: "/psychology",
    },
    {
      icon: "📚",
      name: "Dissertation",
      link: "/dissertation",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-600">
          Subjects We Cover
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Get expert help in more than 100 academic subjects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">

          {subjects.map((subject) => (
            <Link
              key={subject.name}
              href={subject.link}
              className="bg-white rounded-xl shadow hover:shadow-xl transition hover:-translate-y-2 p-8 text-center"
            >
              <div className="text-5xl">
                {subject.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {subject.name}
              </h3>

              <p className="mt-3 text-blue-600 font-semibold">
                Learn More →
              </p>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}