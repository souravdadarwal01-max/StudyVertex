"use client";

import Link from "next/link";
import { useState } from "react";
import { subjects } from "@/lib/subjects";

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



        <div className="flex gap-6 items-center">


          {/* Home */}

          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>




          {/* Services */}

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


                {[
                  ["Assignment Help","assignment-help"],
                  ["Essay Writing Help","essay-writing-help"],
                  ["Homework Help","homework-help"],
                  ["Live Tutor Sessions","live-tutor-session"],
                  ["Lab Report Help","lab-report-help"],
                  ["Project Report Help","project-report-help"],
                  ["Presentation Help","presentation-help"],
                  ["Research Paper Help","research-paper-help"],
                  ["Dissertation Help","dissertation-help"],
                  ["Programming Help","programming-help"],

                ].map(([name,slug])=>(

                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    {name}
                  </Link>

                ))}


              </div>

            )}

          </div>







          {/* Subjects Multi Dropdown */}

 <div
  className="relative"
  onMouseEnter={() => setSubjectsOpen(true)}
  onMouseLeave={() => setSubjectsOpen(false)}
>
  <button className="hover:text-blue-700">
    Subjects ▾
  </button>

  {subjectsOpen && (
    <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl w-80 p-3">

      {Object.entries(subjects).map(([slug, category]) => (

        <div
          key={slug}
          className="group relative"
        >

          <Link
            href={`/subjects/${slug}`}
            className="flex justify-between items-center px-4 py-3 rounded-lg hover:bg-gray-100 font-medium"
          >
            <span>
              {category.icon} {category.title}
            </span>

            <span>›</span>
          </Link>

          <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-xl rounded-xl w-72 p-4">

            {category.subjects.map((subject) => (

              <Link
                key={subject}
                href={`/subjects/${slug}`}
                className="block px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700"
              >
                {subject}
              </Link>

            ))}

          </div>

        </div>

      ))}

    </div>
  )}

</div>





                {/* Computer Science */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  💻 Computer Science & IT →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">


                    <p>Python</p>
                    <p>Java</p>
                    <p>C++</p>
                    <p>JavaScript</p>
                    <p>Artificial Intelligence</p>
                    <p>Machine Learning</p>
                    <p>Data Science</p>
                    <p>Cyber Security</p>


                  </div>

                </div>







                {/* Engineering */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  ⚙️ Engineering →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Mechanical Engineering</p>
                    <p>Civil Engineering</p>
                    <p>Electrical Engineering</p>
                    <p>Electronics Engineering</p>
                    <p>Robotics</p>
                    <p>CAD/CAM</p>

                  </div>

                </div>







                {/* Mathematics */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  📐 Mathematics →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Calculus</p>
                    <p>Algebra</p>
                    <p>Statistics</p>
                    <p>Probability</p>
                    <p>Linear Algebra</p>
                    <p>Differential Equations</p>

                  </div>

                </div>







                {/* Business */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  📈 Business & Management →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>MBA</p>
                    <p>Marketing</p>
                    <p>Finance</p>
                    <p>Human Resource Management</p>
                    <p>Operations Management</p>
                    <p>Business Analytics</p>

                  </div>

                </div>







                {/* Science */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  🔬 Science →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Physics</p>
                    <p>Chemistry</p>
                    <p>Biology</p>
                    <p>Biotechnology</p>

                  </div>

                </div>








                {/* Healthcare */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  🏥 Healthcare & Nursing →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Nursing</p>
                    <p>Medical Science</p>
                    <p>Pharmacology</p>
                    <p>Anatomy</p>
                    <p>Physiology</p>

                  </div>

                </div>








                {/* Arts */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  🎨 Arts & Humanities →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>English Literature</p>
                    <p>History</p>
                    <p>Psychology</p>
                    <p>Sociology</p>

                  </div>

                </div>








                {/* Finance */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  💰 Finance & Accounting →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Accounting</p>
                    <p>Auditing</p>
                    <p>Taxation</p>
                    <p>Corporate Finance</p>

                  </div>

                </div>







                {/* Research */}

                <div className="group relative px-3 py-2 hover:bg-gray-100 rounded">

                  📚 Research & Writing →

                  <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-64 p-3">

                    <p>Research Paper</p>
                    <p>Literature Review</p>
                    <p>Dissertation</p>
                    <p>Thesis Writing</p>

                  </div>

                </div>




              </div>

            )}


          </div>







          {/* Blogs */}

          <Link href="/blogs" className="hover:text-blue-700">
            Blogs
          </Link>





          {/* Contact */}

          <Link href="/contact" className="hover:text-blue-700">
            Contact Us
          </Link>





          {/* Dashboard */}

          <Link href="/dashboard" className="hover:text-blue-700">
            Dashboard
          </Link>





          {/* Login */}

          <Link
            href="/login"
            className="bg-gray-100 px-5 py-2 rounded-lg"
          >
            Login
          </Link>






          {/* Submit */}

          <Link
            href="/submit-assignment"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Submit Assignment
          </Link>



        </div>


      </div>

    </nav>

  );

}
