"use client";

import { useState } from "react";

export default function SubmitAssignmentPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Assignment submitted successfully!");

    console.log({
      name,
      email,
      subject,
      details,
    });
  }


  return (

    <main className="min-h-screen bg-gray-100 py-16 px-6">


      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">


        <h1 className="text-4xl font-bold text-center text-blue-700">
          Submit Your Assignment
        </h1>


        <p className="text-center text-gray-600 mt-3">
          Get expert academic support from qualified tutors.
        </p>



        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-10"
        >


          {/* Name */}

          <div>

            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3"
            />

          </div>



          {/* Email */}

          <div>

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3"
            />

          </div>



          {/* Subject Category */}

          <div>

            <label className="block font-semibold mb-2">
              Select Subject Category
            </label>


            <select
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3 bg-white"
            >

              <option value="">
                Choose Subject
              </option>


              <option value="Computer Science & IT">
                Computer Science & IT
              </option>


              <option value="Engineering">
                Engineering
              </option>


              <option value="Mathematics">
                Mathematics
              </option>


              <option value="Business & Management">
                Business & Management
              </option>


              <option value="Science">
                Science
              </option>


              <option value="Healthcare & Nursing">
                Healthcare & Nursing
              </option>


              <option value="Arts & Humanities">
                Arts & Humanities
              </option>


              <option value="Finance & Accounting">
                Finance & Accounting
              </option>


              <option value="Research & Writing">
                Research & Writing
              </option>


            </select>

          </div>




          {/* Assignment Details */}

          <div>

            <label className="block font-semibold mb-2">
              Assignment Details
            </label>


            <textarea

              placeholder="Describe your assignment requirement"

              value={details}

              onChange={(e)=>setDetails(e.target.value)}

              required

              rows={5}

              className="w-full border rounded-lg px-4 py-3"

            />

          </div>




          {/* Submit Button */}

          <button

            type="submit"

            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"

          >

            Submit Assignment

          </button>



        </form>


      </div>


    </main>

  );
}
