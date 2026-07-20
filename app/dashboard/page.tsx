export default function DashboardPage() {

  const assignments = [
    {
      title: "Marketing Research Report",
      subject: "Management",
      date: "18 July 2026",
      status: "Completed"
    },

    {
      title: "Machine Learning Assignment",
      subject: "Computer Science",
      date: "19 July 2026",
      status: "In Progress"
    },

    {
      title: "Financial Analysis Project",
      subject: "Finance",
      date: "20 July 2026",
      status: "Submitted"
    }
  ];



  return (

    <main className="min-h-screen bg-gray-50 py-12">


      <div className="max-w-6xl mx-auto px-6">



        {/* Welcome Section */}

        <div className="bg-blue-600 text-white rounded-2xl p-8 mb-10">


          <h1 className="text-3xl font-bold">
            Welcome, Student 👋
          </h1>


          <p className="mt-3">
            Track your assignments and get updates from your expert tutor.
          </p>


        </div>






        {/* Profile Card */}


        <div className="grid md:grid-cols-3 gap-6 mb-10">


          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Name
            </h3>

            <p className="text-xl font-semibold">
              John Student
            </p>

          </div>




          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Email
            </h3>

            <p className="text-xl font-semibold">
              student@email.com
            </p>

          </div>





          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Total Assignments
            </h3>

            <p className="text-xl font-semibold">
              3
            </p>

          </div>


        </div>







        {/* Assignment Table */}


        <div className="bg-white rounded-2xl shadow p-8">


          <h2 className="text-2xl font-bold mb-6">
            My Assignments
          </h2>




          <div className="overflow-x-auto">


            <table className="w-full">


              <thead>

                <tr className="border-b text-left">

                  <th className="py-3">
                    Assignment
                  </th>

                  <th>
                    Subject
                  </th>

                  <th>
                    Submitted Date
                  </th>

                  <th>
                    Status
                  </th>

                </tr>

              </thead>




              <tbody>


                {
                  assignments.map((item, index) => (

                    <tr
                      key={index}
                      className="border-b"
                    >

                      <td className="py-4 font-medium">
                        {item.title}
                      </td>


                      <td>
                        {item.subject}
                      </td>


                      <td>
                        {item.date}
                      </td>


                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-sm
                          
                          ${
                            item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            :
                            item.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            :
                            "bg-blue-100 text-blue-700"
                          }

                          `}
                        >

                          {item.status}

                        </span>

                      </td>


                    </tr>

                  ))
                }



              </tbody>


            </table>


          </div>


        </div>






        {/* CTA */}


        <div className="mt-10 text-center">


          <a
            href="/submit-assignment"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Submit New Assignment
          </a>


        </div>



      </div>


    </main>

  );
}