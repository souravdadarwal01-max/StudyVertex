export const subjects = {
  "computer-science-it": {
    icon: "💻",
    title: "Computer Science & IT",
    description:
      "Programming, Software Development, AI, Data Science and IT Assignment Help.",

    subjects: [
      "Computer Science",
      "Information Technology",
      "Software Engineering",
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cyber Security",
      "Cloud Computing",
      "Database Management",
      "Operating Systems",
      "Computer Networks",
    ],
  },

  engineering: {
    icon: "⚙️",
    title: "Engineering",
    description:
      "Professional Engineering Assignment Help for university students.",

    subjects: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Chemical Engineering",
      "Computer Engineering",
      "Automobile Engineering",
      "Industrial Engineering",
      "Robotics",
      "CAD/CAM",
      "Thermodynamics",
      "Fluid Mechanics",
    ],
  },

  mathematics: {
    icon: "📐",
    title: "Mathematics",
    description:
      "Mathematics assignment experts.",

    subjects: [
      "Calculus",
      "Algebra",
      "Statistics",
      "Probability",
      "Linear Algebra",
      "Differential Equations",
      "Numerical Methods",
      "Discrete Mathematics",
    ],
  },

  "business-management": {
    icon: "📈",
    title: "Business & Management",
    description:
      "MBA and Business Management assignment help.",

    subjects: [
      "MBA",
      "Marketing",
      "Finance",
      "Human Resource",
      "Operations Management",
      "Business Analytics",
      "Entrepreneurship",
      "Supply Chain",
    ],
  },

  science: {
    icon: "🔬",
    title: "Science",
    description:
      "Physics, Chemistry and Biology assignment help.",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Biotechnology",
      "Environmental Science",
    ],
  },

  "healthcare-nursing": {
    icon: "🏥",
    title: "Healthcare & Nursing",
    description:
      "Healthcare and Nursing assignment experts.",

    subjects: [
      "Nursing",
      "Medical Science",
      "Pharmacology",
      "Anatomy",
      "Physiology",
      "Public Health",
    ],
  },

  "arts-humanities": {
    icon: "🎨",
    title: "Arts & Humanities",
    description:
      "Arts and Humanities assignment help.",

    subjects: [
      "English Literature",
      "History",
      "Psychology",
      "Sociology",
      "Political Science",
      "Geography",
    ],
  },

  "finance-accounting": {
    icon: "💰",
    title: "Finance & Accounting",
    description:
      "Finance and Accounting assignment help.",

    subjects: [
      "Accounting",
      "Auditing",
      "Taxation",
      "Corporate Finance",
      "Investment",
    ],
  },

  "research-writing": {
    icon: "📚",
    title: "Research & Writing",
    description:
      "Research paper and dissertation writing services.",

    subjects: [
      "Research Paper",
      "Dissertation",
      "Thesis",
      "Literature Review",
      "Essay Writing",
      "Case Study",
    ],
  },
};

export type SubjectSlug = keyof typeof subjects;
