export const subjects = {
  engineering: {
    title: "Engineering Assignment Help",
    description:
      "Professional Engineering assignment help for university students worldwide.",

    subjects: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Chemical Engineering",
      "Computer Engineering",
      "Software Engineering",
      "Automobile Engineering",
      "Aerospace Engineering",
      "Industrial Engineering",
      "Environmental Engineering",
      "Petroleum Engineering",
      "Mining Engineering",
      "Biomedical Engineering",
      "Robotics Engineering",
    ],
  },

  "computer-science-it": {
    title: "Computer Science & IT Assignment Help",

    description:
      "Programming, software development and IT assignment experts.",

    subjects: [
      "Computer Science",
      "Information Technology",
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "React",
      "Node.js",
      "Artificial Intelligence",
      "Machine Learning",
      "Cyber Security",
      "Cloud Computing",
      "Database",
      "Operating Systems",
      "Computer Networks",
    ],
  },

  mathematics: {
    title: "Mathematics Assignment Help",

    description:
      "Expert Mathematics tutors for school, college and university assignments.",

    subjects: [
      "Calculus",
      "Algebra",
      "Statistics",
      "Probability",
      "Geometry",
      "Linear Algebra",
      "Discrete Mathematics",
      "Numerical Methods",
      "Trigonometry",
      "Differential Equations",
    ],
  },

  "business-management": {
    title: "Business & Management Assignment Help",

    description:
      "MBA, BBA and Business Management assignment assistance.",

    subjects: [
      "MBA",
      "Marketing",
      "Human Resource",
      "Business Strategy",
      "Project Management",
      "Operations Management",
      "Supply Chain",
      "Leadership",
      "Entrepreneurship",
      "Business Analytics",
    ],
  },

  science: {
    title: "Science Assignment Help",

    description:
      "Professional science assignment solutions.",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Environmental Science",
      "Earth Science",
      "Astronomy",
    ],
  },

  "healthcare-nursing": {
    title: "Healthcare & Nursing Assignment Help",

    description:
      "Nursing and healthcare assignment experts.",

    subjects: [
      "Nursing",
      "Public Health",
      "Pharmacology",
      "Medical Science",
      "Healthcare Management",
      "Anatomy",
      "Physiology",
    ],
  },

  "arts-humanities": {
    title: "Arts & Humanities Assignment Help",

    description:
      "Assignments for arts, literature and humanities students.",

    subjects: [
      "History",
      "English Literature",
      "Philosophy",
      "Political Science",
      "Sociology",
      "Anthropology",
      "Geography",
    ],
  },

  "finance-accounting": {
    title: "Finance & Accounting Assignment Help",

    description:
      "Finance and Accounting experts for university students.",

    subjects: [
      "Accounting",
      "Corporate Finance",
      "Taxation",
      "Auditing",
      "Investment",
      "Economics",
      "Financial Management",
    ],
  },

  "research-writing": {
    title: "Research & Writing Help",

    description:
      "Research papers, dissertations and academic writing support.",

    subjects: [
      "Essay Writing",
      "Dissertation",
      "Research Proposal",
      "Case Study",
      "Thesis",
      "Literature Review",
      "Report Writing",
      "Referencing",
    ],
  },
};

export type SubjectSlug = keyof typeof subjects;