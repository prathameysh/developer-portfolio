export const user = {
  // Personal Info
  name: "Prathamesh",
  title: "MERN Stack Developer",
  tagline: "Building real-world projects, one commit at a time.",
  bio: "I'm a passionate Computer Science undergraduate with a strong foundation in full-stack development. I love creating efficient, scalable solutions and am always eager to learn new technologies. Currently seeking internship opportunities to apply my skills in real-world projects.",
  location: "India",
  funFact:
    "I solve at least one coding problem every day and have solved 500+ problems on various platforms!",

  // Contact & Social
  email: "your.email@example.com",
  phone: "+91 12345 67890",
  resumeLink:
    "https://drive.google.com/file/d/18apQXCd6Ggf09wSPvBjT5KymDd8lST6t/view?usp=sharing",
  github: "https://github.com/prathameysh",
  linkedin: "https://www.linkedin.com/in/prathamesh-gavatre-8362b9271/",
  leetcode: "https://leetcode.com/u/prathameysh",
  twitter: "https://twitter.com/yourhandle",

  // Skills
  skills: {
    languages: ["C++", "Java", "JavaScript", "Python", "TypeScript"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    tools: ["Git", "VS Code", "Postman", "AWS", "Vercel", "Docker"],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Project Management",
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/prathameysh/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      image: "/assets/projects/ecommerce.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/prathameysh/taskmanager",
      demo: "https://taskmanager-demo.vercel.app",
      image: "/assets/projects/taskmanager.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts and interactive charts.",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "https://github.com/prathameysh/weather-app",
      demo: "https://weather-dashboard-demo.vercel.app",
      image: "/assets/projects/weather.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Code Snippet Manager",
      description:
        "Developer tool for organizing and sharing code snippets with syntax highlighting.",
      tech: ["Vue.js", "Firebase", "Prism.js", "Vuetify"],
      github: "https://github.com/prathameysh/snippet-manager",
      demo: "https://snippets-demo.vercel.app",
      image: "/assets/projects/snippets.jpg",
      featured: false,
    },
  ],

  // Timeline
  timeline: [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      organization: "Your University",
      period: "2021 - 2025",
      description:
        "Pursuing Bachelor's degree with focus on Data Structures, Algorithms, and Software Engineering.",
      type: "education",
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      period: "2023",
      description:
        "Certified in cloud computing fundamentals and AWS services.",
      type: "certification",
    },
    {
      id: 3,
      title: "TCS Career Edge Certification",
      organization: "Tata Consultancy Services",
      period: "2023",
      description:
        "Completed comprehensive training in enterprise software development.",
      type: "certification",
    },
    {
      id: 4,
      title: "Open Source Contributor",
      organization: "Various Projects",
      period: "2022 - Present",
      description:
        "Contributing to open-source projects and maintaining personal repositories.",
      type: "experience",
    },
  ],
};
