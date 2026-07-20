export default function Services() {

  const services = [
    {
      title: "Assignment Help",
      description:
        "Get expert support for university assignments, coursework and academic projects.",
      link: "/services/assignment-help",
      icon: "📚",
    },

    {
      title: "Essay Writing Help",
      description:
        "Professional essay writing support with proper structure, research and citations.",
      link: "/services/essay-writing-help",
      icon: "✍️",
    },

    {
      title: "Homework Help",
      description:
        "Get personalized homework assistance from experienced academic experts.",
      link: "/services/homework-help",
      icon: "📝",
    },

    {
      title: "Live Tutor Sessions",
      description:
        "One-to-one online tutoring sessions for better understanding of concepts.",
      link: "/services/live-tutor-session",
      icon: "👨‍🏫",
    },

    {
      title: "Lab Report Help",
      description:
        "Complete assistance for science and engineering laboratory reports.",
      link: "/services/lab-report-help",
      icon: "🔬",
    },

    {
      title: "Project Report Help",
      description:
        "Support for academic projects, documentation and final year reports.",
      link: "/services/project-report-help",
      icon: "📊",
    },


    {
      title: "Presentation Help",
      description:
        "Create professional academic and business presentations.",
      link: "/services/presentation-help",
      icon: "🎯",
    },


    {
      title: "Research Paper Help",
      description:
        "Research assistance, literature reviews and academic formatting.",
      link: "/services/research-paper-help",
      icon: "🔎",
    },


    {
      title: "Dissertation Help",
      description:
        "Expert guidance for dissertation planning, writing and formatting.",
      link: "/services/dissertation-help",
      icon: "🎓",
    },


    {
      title: "Programming Help",
      description:
        "Coding assistance for Python, Java, C++, JavaScript and more.",
      link: "/services/programming-help",
      icon: "💻",
    },

  ];


  return (

    <section className="py-16 px-6">


      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>


        <p className="text-center text-gray-600 mt-3">
          Professional academic assistance for students worldwide.
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-10">


          {services.map((service)=>(
            
            <a
              key={service.title}
              href={service.link}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
            >


              <div className="text-4xl">
                {service.icon}
              </div>


              <h3 className="text-xl font-bold text-blue-700 mt-4">
                {service.title}
              </h3>


              <p className="text-gray-600 mt-3">
                {service.description}
              </p>


              <span className="inline-block mt-5 text-blue-700 font-semibold">
                Learn More →
              </span>


            </a>

          ))}


        </div>


      </div>


    </section>

  );
}
