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





          {/* Blogs */}

          <Link href="/blogs" className="hover:text-blue-700">
            Blogs
          </Link>





          {/* Contact */}

          <Link href="/contact" className="hover:text-blue-700">
            Contact Us
          </Link>





          {/* Submit Assignment CTA */}

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
