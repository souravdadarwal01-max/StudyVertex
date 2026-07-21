import Link from "next/link";
import {
  Cpu,
  Briefcase,
  Stethoscope,
  Wrench,
  ArrowRight,
} from "lucide-react";

const subjects = [
  {
    title: "Engineering",
    href: "/engineering-assignment-help",
    icon: Wrench,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "MBA",
    href: "/mba-assignment-help",
    icon: Briefcase,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Computer Science",
    href: "/computer-science-assignment-help",
    icon: Cpu,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Nursing",
    href: "/nursing-assignment-help",
    icon: Stethoscope,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function SubjectsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          SUBJECTS
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Subject Expertise
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Our academic experts provide assistance across multiple disciplines
          to help students achieve better grades.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {subjects.map((subject) => {
          const Icon = subject.icon;

          return (
            <Link
              key={subject.title}
              href={subject.href}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className={`rounded-full p-4 ${subject.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {subject.title}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Assignment Help
                    </p>
                  </div>

                </div>

                <ArrowRight className="h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

              </div>
            </Link>
          );
        })}

      </div>

    </section>
  );
}
