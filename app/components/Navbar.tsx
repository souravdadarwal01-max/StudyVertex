import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link 
          href="/"
          className="text-2xl font-bold text-blue-700"
        >
          StudyVertex
        </Link>


        <div className="flex gap-6 items-center">

          <Link href="/">
            Home
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/contact">
            Contact Us
          </Link>

          <Link
            href="/login"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}
