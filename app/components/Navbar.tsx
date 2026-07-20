"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600"
        >
          StudyVertex
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link href="/services" className="hover:text-indigo-600">
            Services
          </Link>

          <Link href="/pricing" className="hover:text-indigo-600">
            Pricing
          </Link>

          <Link href="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </Link>

          <Link href="/admin" className="hover:text-indigo-600">
            Admin
          </Link>

          <Link href="/blog" className="hover:text-indigo-600">
            Blog
          </Link>

          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-indigo-600">
            Contact
          </Link>

          <Link
            href="/login"
            className="hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="hover:text-indigo-600"
          >
            Signup
          </Link>

          <Link
            href="/submit-assignment"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Submit Assignment
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link href="/" className="block">
            Home
          </Link>

          <Link href="/services" className="block">
            Services
          </Link>

          <Link href="/pricing" className="block">
            Pricing
          </Link>

          <Link href="/dashboard" className="block">
            Dashboard
          </Link>

          <Link href="/admin" className="block">
            Admin
          </Link>

          <Link href="/blog" className="block">
            Blog
          </Link>

          <Link href="/about" className="block">
            About
          </Link>

          <Link href="/contact" className="block">
            Contact
          </Link>

          <Link href="/login" className="block">
            Login
          </Link>

          <Link href="/signup" className="block">
            Signup
          </Link>

          <Link
            href="/submit-assignment"
            className="block text-center bg-emerald-600 text-white py-3 rounded-lg"
          >
            Submit Assignment
          </Link>

        </div>
      )}
    </nav>
  );
}