export default function SubjectPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {


  const subjectName = params.slug
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());


  return (

    <main className="min-h-screen bg-gray-100 py-20 px-6">


      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">


        <h1 className="text-5xl font-bold text-blue-700">
          {subjectName}
        </h1>


        <p className="mt-6 text-lg text-gray-600">

          Get expert help in {subjectName}.
          Our tutors provide assignment assistance,
          project guidance, homework support and
          academic solutions.

        </p>


        <div className="mt-8">

          <a
            href="/submit-assignment"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Get Help Now
          </a>

        </div>


      </div>


    </main>

  );

}
