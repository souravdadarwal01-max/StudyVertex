import { notFound } from "next/navigation";
import { subjects, SubjectSlug } from "@/lib/subjects";
import SubjectHero from "../../components/SubjectHero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(subjects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const data = subjects[slug as SubjectSlug];

  if (!data) {
    return {
      title: "Subject Not Found | StudyVertex",
    };
  }

  return {
    title: `${data.title} | StudyVertex`,
    description: data.description,
  };
}

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params;

  const data = subjects[slug as SubjectSlug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <SubjectHero
        title={data.title}
        description={data.description}
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Available Subjects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.subjects.map((subject) => (
            <div
              key={subject}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {subject}
              </h3>

              <p className="text-gray-600">
                Professional assignment help from experienced academic experts.
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose StudyVertex?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              ✅ 100% Plagiarism-Free Work
            </div>

            <div className="border rounded-xl p-6">
              ⏰ On-Time Delivery
            </div>

            <div className="border rounded-xl p-6">
              👨‍🏫 Subject Matter Experts
            </div>

            <div className="border rounded-xl p-6">
              💬 24×7 Student Support
            </div>
          </div>
        </section>
      </main>
    </>
  );
}