import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Ready to Get Assignment Help?
        </h2>

        <p className="mt-5 text-xl">
          Submit your assignment and receive a free quote today.
        </p>

        <Link
          href="/submit-assignment"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold"
        >
          Submit Assignment
        </Link>

      </div>
    </section>
  );
}