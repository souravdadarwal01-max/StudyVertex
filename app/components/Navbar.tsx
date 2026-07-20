"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [servicesOpen, setServicesOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);


  return (

    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center">


        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-700"
        >
          StudyVertex
        </Link>




        {/* Menu */}

        <div className="flex gap-6 items-center">


          {/* Home */}

          <Link
            href="/"
            className="hover:text-blue-700"
          >
            Home
          </Link>





          {/* Services Dropdown */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button className="hover:text-blue-700">
              Services ▾
            </button>



            {servicesOpen && (

              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-72 p-3">


                <Link href="/services/assignment-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📚 Assignment Help
                </Link>


                <Link href="/services/essay-writing-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  ✍️ Essay Writing Help
                </Link>


                <Link href="/services/homework-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📝 Homework Help
                </Link>


                <Link href="/services/live-tutor-session"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  👨‍🏫 Live Tutor Sessions
                </Link>


                <Link href="/services/lab-report-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🔬 Lab Report Help
                </Link>


                <Link href="/services/project-report-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📊 Project Report Help
                </Link>


                <Link href="/services/presentation-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🎯 Presentation Help
                </Link>


                <Link href="/services/research-paper-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🔎 Research Paper Help
                </Link>


                <Link href="/services/dissertation-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🎓 Dissertation Help
                </Link>


                <Link href="/services/programming-help"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  💻 Programming Help
                </Link>


              </div>

            )}

          </div>







          {/* Subjects Dropdown */}


          <div
            className="relative"
            onMouseEnter={() => setSubjectsOpen(true)}
            onMouseLeave={() => setSubjectsOpen(false)}
          >


            <button className="hover:text-blue-700">
              Subjects ▾
            </button>



            {subjectsOpen && (

              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-72 p-3">


                <Link href="/subjects/computer-science-it"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  💻 Computer Science & IT
                </Link>


                <Link href="/subjects/engineering"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  ⚙️ Engineering
                </Link>


                <Link href="/subjects/mathematics"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📐 Mathematics
                </Link>


                <Link href="/subjects/business-management"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📈 Business & Management
                </Link>


                <Link href="/subjects/science"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🔬 Science
                </Link>


                <Link href="/subjects/healthcare-nursing"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🏥 Healthcare & Nursing
                </Link>


                <Link href="/subjects/arts-humanities"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  🎨 Arts & Humanities
                </Link>


                <Link href="/subjects/finance-accounting"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  💰 Finance & Accounting
                </Link>


                <Link href="/subjects/research-writing"
                  className="block px-3 py-2 hover:bg-gray-100 rounded">
                  📚 Research & Writing
                </Link>


              </div>

            )}

          </div>






          {/* Blogs */}

          <Link
            href="/blogs"
            className="hover:text-blue-700"
          >
            Blogs
          </Link>






          {/* Contact */}

          <Link
            href="/contact"
            className="hover:text-blue-700"
          >
            Contact Us
          </Link>






          {/* Dashboard */}

          <Link
            href="/dashboard"
            className="hover:text-blue-700"
          >
            Dashboard
          </Link>







          {/* Login */}

          <Link
            href="/login"
            className="bg-gray-100 px-5 py-2 rounded-lg hover:bg-gray-200"
          >
            Login
          </Link>






          {/* Submit Assignment */}

          <Link
            href="/submit-assignment"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
          >
            Submit Assignment
          </Link>



        </div>


      </div>


    </nav>

  );

}
