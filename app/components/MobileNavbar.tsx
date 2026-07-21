"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4">

        <Link
          href="/"
          className="text-xl font-bold text-blue-700"
        >
          StudyVertex
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menu */}
      {open && (
        <div className="border-t bg-white">

          <Link
            href="/"
            className="block px-5 py-4 border-b"
          >
            Home
          </Link>

          <Link
            href="/blogs"
            className="block px-5 py-4 border-b"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="block px-5 py-4 border-b"
          >
            Contact Us
          </Link>

          <Link
            href="/submit-assignment"
            className="block m-4 rounded-lg bg-blue-700 text-white text-center py-3"
          >
            Submit Assignment
          </Link>

        </div>
      )}
    </nav>
  );
}
