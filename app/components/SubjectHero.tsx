type Props = {
  title: string;
  description: string;
};

export default function SubjectHero({
  title,
  description,
}: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
          🎓 StudyVertex
        </span>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          {title}
        </h1>

        <p className="text-xl text-blue-100 max-w-3xl mb-10">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="/submit-assignment"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Submit Assignment
          </a>

          <a
            href="/pricing"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            View Pricing
          </a>

        </div>

      </div>
    </section>
  );
}