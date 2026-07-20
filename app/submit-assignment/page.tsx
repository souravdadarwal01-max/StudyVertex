"use client";

import { useState } from "react";

export default function SubmitAssignmentPage() {

  const [fileName, setFileName] = useState("");

  function handleFileChange(e: any) {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  }


  return (
    <main className="min-h-screen bg-gray-50 py-16">

      <div className="max-w-6xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900">
            Submit Your Assignment
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Upload your assignment and get expert academic support.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-10">


          {/* Assignment Form */}

          <div className="bg-white shadow-lg rounded-2xl p-8">


            <h2 className="text-2xl font-semibold mb-6">
              Assignment Details
            </h2>



            <form
              action="https://formsubmit.co/your-email@gmail.com"
              method="POST"
              encType="multipart/form-data"
              className="space-y-5"
            >


              {/* Form Settings */}

              <input
                type="hidden"
                name="_subject"
                value="New Assignment Submission - StudyVertex"
              />


              <input
                type="hidden"
                name="_captcha"
                value="false"
              />


              <input
                type="hidden"
                name="_template"
                value="table"
              />



              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-lg px-4 py-3"
              />



              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3"
              />



              <input
                name="phone"
                type="tel"
                placeholder="WhatsApp Number"
                required
                className="w-full border rounded-lg px-4 py-3"
              />



              <select
                name="subject"
                required
                className="w-full border rounded-lg px-4 py-3"
              >

                <option>
                  Select Subject
                </option>

                <option>
                  Engineering
                </option>

                <option>
                  Computer Science
                </option>

                <option>
                  Management
                </option>

                <option>
                  Finance
                </option>

                <option>
                  Other
                </option>

              </select>




              <textarea
                name="message"
                rows={4}
                placeholder="Describe your assignment requirements"
                required
                className="w-full border rounded-lg px-4 py-3"
              />





              {/* File Upload */}

              <div>

                <label className="block font-medium mb-2">
                  Upload Assignment File
                </label>


                <input
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onChange={handleFileChange}
                  className="w-full border rounded-lg p-3"
                />


                {
                  fileName && (
                    <p className="mt-2 text-green-600">
                      Selected: {fileName}
                    </p>
                  )
                }


              </div>





              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Assignment
              </button>



            </form>


          </div>






          {/* Right Side */}

          <div className="space-y-6">


            <div className="bg-white shadow-lg rounded-2xl p-8">


              <h2 className="text-2xl font-semibold mb-5">
                Need Quick Help?
              </h2>


              <p className="text-gray-600 mb-6">
                For urgent assignments, directly contact our support team.
              </p>




              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>



              <a
                href="mailto:your-email@gmail.com"
                className="block text-center mt-4 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50"
              >
                Send Email
              </a>


            </div>






            <div className="bg-blue-600 text-white rounded-2xl p-8">


              <h3 className="text-2xl font-bold">
                Why Choose StudyVertex?
              </h3>



              <ul className="mt-5 space-y-3">

                <li>
                  ✅ Expert Subject Specialists
                </li>

                <li>
                  ✅ Human-Written Solutions
                </li>

                <li>
                  ✅ On-Time Delivery
                </li>

                <li>
                  ✅ Affordable Pricing
                </li>

              </ul>


            </div>



          </div>


        </div>


      </div>


    </main>
  );
}