import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

const countries = [
  {
    name: "USA",
    href: "/usa-assignment-help",
  },
  {
    name: "UK",
    href: "/uk-assignment-help",
  },
  {
    name: "Australia",
    href: "/australia-assignment-help",
  },
  {
    name: "Canada",
    href: "/canada-assignment-help",
  },
];

export default function Countries() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          GLOBAL SUPPORT
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Assignment Help By Country
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          We provide academic assistance for university students across major
          study destinations around the world.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {countries.map((country) => (

          <Link
            key={country.name}
            href={country.href}
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-blue-100 p-4">
                  <Globe className="h-8 w-8 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {country.name}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Assignment Help for Students
                  </p>
                </div>

              </div>

              <ArrowRight className="h-6 w-6 text-blue-700 transition group-hover:translate-x-1" />

            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}
