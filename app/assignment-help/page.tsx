export const metadata = {
  title: "Assignment Help Service | StudyVertex",
  description:
    "Get expert assignment help for university students worldwide. StudyVertex provides academic assistance for assignments, reports and projects.",
};

export default function AssignmentHelp() {
  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold">
        Online Assignment Help Service
      </h1>

      <p className="mt-4">
        StudyVertex provides professional assignment help
        for students worldwide. Get expert assistance with
        university assignments, reports and academic projects.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Why Choose StudyVertex?
      </h2>

      <ul className="list-disc ml-6 mt-3">
        <li>Expert academic assistance</li>
        <li>Original and plagiarism-free work</li>
        <li>Multiple subject support</li>
        <li>Timely delivery</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">
        Subjects We Cover
      </h2>

      <p className="mt-3">
        Engineering, MBA, Computer Science, Management,
        Nursing, Law and other academic fields.
      </p>

    </main>
  );
}
