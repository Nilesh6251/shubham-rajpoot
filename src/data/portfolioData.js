export const personalInfo = {
  name: "Shubham Rajpoot",
  role: "IT Student | Web Developer & C++ Programmer",
  subRole: "Web Development • C++ • Python • Generative AI",
  shortBio: "Motivated and enthusiastic B.Tech Information Technology student with strong fundamentals in programming languages (C, C++, Python) and web development (HTML, CSS, JavaScript). Seeking opportunities to enhance technical skills, gain practical experience, and contribute to innovative projects.",
  email: "shubhamrajpoot505@gmail.com",
  phone: "+91 9301149634",
  location: "Madhya Pradesh, India",
  github: "https://github.com/shubhamrajpoot",
  linkedin: "https://www.linkedin.com/in/shubham-rajpoot-b7b4a3365",
  resumeUrl: "/resume.pdf",
  profilePhoto: "/profile.png",
  careerObjective: "Motivated and enthusiastic B.Tech student with strong fundamentals in programming languages and web development. Seeking opportunities to enhance technical skills, gain practical experience, and contribute to innovative projects."
};

export const education = {
  institution: "Bachelor of Technology (B.Tech)",
  location: "Information Technology Department",
  degree: "B.Tech in Information Technology",
  duration: "Till 3rd Semester",
  status: "CGPA: 6.0 / 10",
  highlights: [
    "Core focus on Programming Languages: C, C++, Python",
    "Frontend Web Development: HTML, CSS, Modern JavaScript",
    "Data Structures, Algorithmic Logic & File Handling",
    "Continuous Competitive Problem Solving on HackerRank & LeetCode"
  ]
};

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    accent: "indigo",
    skills: [
      { name: "C++ Programming", level: 90, badge: "Advanced Core", detail: "Functions, conditional logic, file handling, class architecture & console systems" },
      { name: "C Language", level: 85, badge: "Proficient", detail: "Procedural syntax, pointers, structured memory management & algorithm design" },
      { name: "Python", level: 80, badge: "Intermediate", detail: "Clean scripting, automation, core data structures & problem solving" }
    ]
  },
  {
    title: "Web Development",
    icon: "Layout",
    accent: "cyan",
    skills: [
      { name: "HTML / HTML5", level: 95, badge: "Mastery", detail: "Semantic document structure, accessible markup & responsive layouts" },
      { name: "CSS / Modern Styling", level: 88, badge: "Proficient", detail: "Flexbox, CSS Grid, animations, media queries & Neo-Brutalist UI" },
      { name: "JavaScript (ES6+)", level: 82, badge: "Intermediate", detail: "DOM manipulation, event handling, dynamic UI rendering & local storage" }
    ]
  },
  {
    title: "Problem Solving & Platforms",
    icon: "Terminal",
    accent: "violet",
    skills: [
      { name: "HackerRank Platform", level: 88, badge: "Certified", detail: "Problem Solving Certificate (March 2025), data structures & algorithmic logic" },
      { name: "LeetCode Practice", level: 85, badge: "Active", detail: "Continuous practice on arrays, strings, two pointers, hashing & recursion" }
    ]
  },
  {
    title: "AI Tools & Certifications",
    icon: "Sparkles",
    accent: "indigo",
    skills: [
      { name: "Generative AI", level: 90, badge: "Certified (June 2025)", detail: "Prompt engineering, LLM-assisted workflows, code prototyping & productivity tools" },
      { name: "CodeAlpha Certified", level: 88, badge: "Verified", detail: "Practical software tasks, structured project submissions & web deliveries" }
    ]
  }
];

export const projects = [
  {
    id: "mini-atm",
    title: "ATM Machine Simulator",
    subtitle: "C++ Console Application",
    type: "Featured C++ System",
    category: "Systems & Security Logic",
    description: "Developed a console-based ATM Machine Simulator in C++. Implemented core features including PIN validation, balance inquiry, cash withdrawal, deposit engine, and transaction management using functions, conditional logic, and file handling.",
    githubUrl: "https://github.com/shubhamrajpoot",
    tags: ["C++", "Functions", "Conditional Logic", "File Handling", "PIN Validation"],
    hasLiveDemo: true,
    features: [
      { title: "PIN Validation", desc: "Multi-attempt security authentication with account lockout handling." },
      { title: "Cash Withdrawal", desc: "Real-time balance checks and boundary validation preventing overdrafts." },
      { title: "Deposit Engine", desc: "Strict positive numeric input validation and immediate balance updates." },
      { title: "File Handling", desc: "Session tracking, transaction management, and persistent ledger logs." }
    ]
  },
  {
    id: "sales-dashboard",
    title: "Interactive Web Analytics Dashboard",
    subtitle: "Frontend Web Application",
    type: "Frontend Web Application",
    category: "Web & Data Visualization",
    description: "Engineered a responsive frontend data dashboard that converts datasets into interactive metrics. Includes real-time KPI counter cards, interactive search filters, dynamic category breakdowns, and a mobile-optimized responsive layout.",
    githubUrl: "https://github.com/shubhamrajpoot",
    tags: ["HTML", "CSS", "JavaScript", "Frontend Dev", "Responsive UI"],
    hasLiveDemo: true,
    features: [
      { title: "Dynamic Search & Filters", desc: "Fast client-side dataset filtering by category, date, and keyword." },
      { title: "Live KPI Metrics", desc: "Displays revenue, orders, and averages with visual trend indicators." },
      { title: "Responsive Layout", desc: "Optimized display across desktop and smartphone viewports." }
    ]
  },
  {
    id: "student-tracker",
    title: "Student Academic & Task Portal",
    subtitle: "Interactive Web Application",
    type: "Web Application",
    category: "Web Development",
    description: "Designed and built an interactive task and coursework management web application for college students. Implemented input validation, subject score calculations, persistent local storage, and clean Neo-Brutalist design tokens.",
    githubUrl: "https://github.com/shubhamrajpoot",
    tags: ["Web Dev", "HTML5", "CSS3", "JavaScript", "Local Storage"],
    hasLiveDemo: true,
    features: [
      { title: "Attendance Margin Calculator", desc: "Real-time status check calculating margin required for target attendance." },
      { title: "Coursework Persistence", desc: "Automated browser local state synchronization ensuring zero data loss on refresh." },
      { title: "Form Validation", desc: "Input sanitization preventing empty or invalid submissions." }
    ]
  }
];

export const certifications = [
  {
    title: "Generative AI Certification",
    issuer: "Specialization Certificate",
    date: "June 2025",
    color: "indigo",
    credentialId: "GENAI-2025-JUN",
    skills: ["Prompt Engineering", "LLM Workflows", "AI-Assisted Coding", "Automated Debugging"]
  },
  {
    title: "Problem Solving Certificate",
    issuer: "HackerRank",
    date: "March 2025",
    color: "purple",
    credentialId: "HR-PS-MAR-2025",
    skills: ["Data Structures", "Algorithms", "Conditional Logic", "Complexity Analysis"]
  },
  {
    title: "CodeAlpha Certificate",
    issuer: "CodeAlpha",
    date: "2025",
    color: "cyan",
    credentialId: "CA-DEV-2025",
    skills: ["Web Development", "Practical Projects", "Code Submissions", "Software Architecture"]
  }
];
