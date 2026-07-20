import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          StudyVertex
        </h2>

        <p className="mt-3 text-gray-400">
          Assignment Help for Students Worldwide.
        </p>

        <div className="flex gap-6 mt-8">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/contact">Contact</Link>

        </div>

        <hr className="my-8 border-gray-700"/>

        <p className="text-center text-gray-400">
          © 2026 StudyVertex. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}