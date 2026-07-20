export default function AdminDashboard() {
  const assignments = [
    {
      id: "SV-1001",
      student: "John Smith",
      subject: "Computer Science",
      status: "Submitted",
      deadline: "22 July 2026",
    },
    {
      id: "SV-1002",
      student: "Emma Wilson",
      subject: "Management",
      status: "In Progress",
      deadline: "23 July 2026",
    },
    {
      id: "SV-1003",
      student: "David Brown",
      subject: "Finance",
      status: "Completed",
      deadline: "21 July 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-indigo-600 mb-8">
          Admin Dashboard
        </h1>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Students</p>
            <h2 className="text-3xl font-bold mt-2">245</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Assignments</p>
            <h2 className="text-3xl font-bold mt-2">580</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Tutors</p>
            <h2 className="text-3xl font-bold mt-2">18</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$12,450</h2>
          </div>

        </div>

        {/* Assignment Table */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Assignments
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Assignment ID</th>
                  <th className="text-left">Student</th>
                  <th className="text-left">Subject</th>
                  <th className="text-left">Deadline</th>
                  <th className="text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {assignments.map((assignment) => (

                  <tr
                    key={assignment.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">
                      {assignment.id}
                    </td>

                    <td>
                      {assignment.student}
                    </td>

                    <td>
                      {assignment.subject}
                    </td>

                    <td>
                      {assignment.deadline}
                    </td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          assignment.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : assignment.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {assignment.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}