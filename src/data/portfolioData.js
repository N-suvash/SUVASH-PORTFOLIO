export const portfolioData = {
  personal: {
    name: "SUVASH",
    title: "Aspiring IT Engineer | Full Stack Developer | Java Developer",
    subtitle: "Passionate about building innovative software solutions, exploring cloud technologies, networking, and developing scalable applications.",
    about: "I am an aspiring IT Engineer eager to build a strong foundation in networking, cloud technologies, and system administration. I enjoy developing practical software solutions and continuously improving my technical skills through internships and project-based learning. My goal is to contribute to innovative IT solutions in automation, security, and cloud computing, and to grow as a versatile engineer capable of solving complex technological challenges.",
    phone: "8220646162",
    email: "suvashsanthosh@gmail.com",
    linkedin: "https://www.linkedin.com/in/suvashn98673b3",
    github: "https://github.com/suvash-n",
    location: "Tamil Nadu, India",
    resumeUrl: "/suvash_resume.pdf",
    stats: [
      { label: "Engineering Degree", value: "B.Tech IT" },
      { label: "Graduation Year", value: "2025" },
      { label: "Academic Score", value: "70% CGPA" },
      { label: "Core Competency", value: "Full Stack & Java" }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      description: "Robust languages powering enterprise backend and algorithm implementations",
      items: [
        { name: "Java", level: 85, tag: "Primary Backend" },
        { name: "Python", level: 80, tag: "AI / Scripting" },
        { name: "JavaScript", level: 88, tag: "Modern ES6+" },
        { name: "C++", level: 75, tag: "Systems / DSA" }
      ]
    },
    {
      category: "Web Development",
      icon: "Globe",
      description: "Modern, dynamic, and responsive front-end development stack",
      items: [
        { name: "React.js", level: 85, tag: "SPA & Hooks" },
        { name: "HTML5", level: 92, tag: "Semantic Markup" },
        { name: "CSS3 / Tailwind", level: 90, tag: "Modern Styling" }
      ]
    },
    {
      category: "Databases",
      icon: "Database",
      description: "Relational and NoSQL persistent storage engines",
      items: [
        { name: "MySQL", level: 82, tag: "Relational & SQL" },
        { name: "MongoDB", level: 78, tag: "Document Store" }
      ]
    },
    {
      category: "Core Fundamentals",
      icon: "Cpu",
      description: "Computer science essentials and architectural principles",
      items: [
        { name: "Data Structures & Algorithms", level: 80, tag: "DSA" },
        { name: "OOP Concepts", level: 88, tag: "Object-Oriented" }
      ]
    },
    {
      category: "Developer Tools",
      icon: "Wrench",
      description: "Daily development workflow, collaboration, and environment",
      items: [
        { name: "GitHub", level: 85, tag: "Version Control" },
        { name: "VS Code", level: 90, tag: "IDE & Tooling" }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "AI Powered Virtual Job Interview Simulator",
      category: "AI & Full Stack",
      featured: true,
      description: "Developed an AI-based simulator to replicate real-time job interviews and enhance candidate preparedness. Integrated NLP and speech recognition to evaluate responses for communication, content, and confidence.",
      keyHighlights: [
        "Replicated real-time interview dynamics with automated simulated questioning",
        "Integrated Natural Language Processing (NLP) & Speech-to-Text recognition",
        "Assesses candidate communication, content relevancy, and confidence scores",
        "Delivers personalized feedback loops and actionable performance metrics"
      ],
      technologies: ["Python", "NLP", "Speech Recognition", "React.js", "REST APIs"],
      githubUrl: "https://github.com/suvash-n",
      liveDemoUrl: "#",
      gradient: "from-purple-600 via-indigo-600 to-blue-500",
      accentGlow: "rgba(168, 85, 247, 0.35)",
      badge: "Featured AI Project"
    },
    {
      id: "project-2",
      title: "E-Commerce Platform Backend",
      category: "Backend & Systems",
      featured: true,
      description: "Built a robust Spring Boot REST API for an online store with Product and Order entities. Implemented CRUD operations, integrated order placement endpoints with stock validation, and comprehensive Postman test coverage.",
      keyHighlights: [
        "Architected enterprise-grade Spring Boot REST API services with modular design",
        "Implemented full CRUD lifecycle management for Product and Order entities",
        "Engineered stock verification algorithms and transactional order placement",
        "Implemented global exception handling (404 not found, validation errors) and Postman test suites"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Postman", "Hibernate"],
      githubUrl: "https://github.com/suvash-n",
      liveDemoUrl: "#",
      gradient: "from-blue-600 via-cyan-600 to-indigo-600",
      accentGlow: "rgba(59, 130, 246, 0.35)",
      badge: "Enterprise Backend"
    }
  ],
  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Novi Tech",
      period: "July 1st – August 1st 2024",
      location: "Coimbatore / Remote",
      type: "Professional Internship",
      certificateImage: "/novitech-internship-cert.jpg",
      certId: "NT_860A996",
      points: [
        "Gained hands-on experience in front-end development using HTML, CSS, JavaScript, and React.",
        "Worked on backend technologies including Node.js, Express, and SQL.",
        "Worked on database integration for dynamic data handling and persistent storage.",
        "Improved problem-solving and coding efficiency through real-time project assignments."
      ],
      skills: ["React.js", "Node.js", "Express", "SQL", "JavaScript", "REST APIs"]
    }
  ],
  education: [
    {
      degree: "B.Tech – Information Technology",
      institution: "PSNA College of Engineering and Technology",
      period: "2021 – 2025",
      score: "CGPA: 70%",
      status: "Graduating 2025",
      description: "Specialized in Computer Networks, Cloud Computing, Database Management Systems, and Software Engineering."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "TKS Matric Higher Secondary School",
      period: "2019 – 2021",
      score: "75%",
      status: "Completed",
      description: "Higher Secondary education with strong focus on Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Nadar Saraswathi Boys Higher Secondary School",
      period: "2018 – 2019",
      score: "65%",
      status: "Completed",
      description: "Foundational secondary school education with academic excellence."
    }
  ],
  certifications: [
    {
      id: "cert-java-fullstack",
      title: "Java Full Stack Training Program",
      issuer: "SLA (Softlogic Systems / Right Way To IT Job)",
      badge: "Grade 'A' Certified",
      icon: "Code2",
      certificateImage: "/java-fullstack-cert.jpg",
      certId: "SLA2025647893",
      issueDate: "22-Aug-2025",
      partners: "Microsoft, Meta, Autodesk, Cisco, Adobe",
      description: "Successful completion of rigorous training in Java Full Stack development with prestigious Grade 'A' at SLA Chennai."
    },
    {
      id: "cert-data-analytics",
      title: "Data Analytics Training Program",
      issuer: "SLA (Softlogic Systems / Right Way To IT Job)",
      badge: "Grade 'A' Certified",
      icon: "BarChart3",
      certificateImage: "/data-analytics-cert.jpg",
      certId: "SLA2025487629",
      issueDate: "22-Aug-2025",
      partners: "Microsoft, Meta, Autodesk, Cisco, Adobe",
      description: "Successful completion of intensive training program on Data Analytics with top honor Grade 'A' at SLA Chennai."
    },
    {
      id: "cert-novitech",
      title: "Full Stack Development Internship Certificate",
      issuer: "NoviTech R&D Private Limited",
      badge: "ISO 9001:2015 Certified",
      icon: "Code",
      certificateImage: "/novitech-internship-cert.jpg",
      certId: "NT_860A996",
      issueDate: "July 1st – August 1st 2024",
      description: "30 Days intensive hands-on internship in Full Stack Development with live project delivery and database integration."
    },
    {
      id: "cert-ibm-js",
      title: "JavaScript Professional Certification",
      issuer: "IBM",
      badge: "Industry Certified",
      icon: "Award",
      description: "Mastery of modern ECMAScript, asynchronous programming, DOM manipulation, and modular architecture."
    }
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency", stars: 5 },
    { name: "Tamil", level: "Native / Bilingual Proficiency", stars: 5 },
    { name: "Kannada", level: "Conversational Proficiency", stars: 4 }
  ]
};
