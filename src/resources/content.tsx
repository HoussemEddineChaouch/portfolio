import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  Certifications,
} from "@/types";

const person: Person = {
  firstName: "Houssem Eddine",
  lastName: "Chaouch",
  name: `Houssem Eddine Chaouch`,
  role: "Full-Stack Developer & UI Designer ",
  avatar: "/images/avatar.jpeg",
  email: "chaouch.eddinehoussem@gmail.com",
  location: "Africa/Tunis",
  languages: ["English", "French", "Arabic", "German (A1)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Occasional posts about full-stack development, AI integration, and UI/UX
      design.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HoussemEddineChaouch",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chaouch-houssem-eddine",
    essential: true,
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/chaouchhoussem4hm",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:chaouch.eddinehoussem@gmail.com`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Building scalable apps at the intersection of AI and great design</>
  ),
  featured: {
    display: true,
    title: <>Featured Project — XFactor</>,
    href: "/work/xfactor-ml-financial-platform",
  },
  subline: (
    <>
      I'm Houssem, a full-stack developer and UI designer from Tunisia. I build
      AI-powered web platforms, craft clean interfaces, and integrate machine
      learning into real-world products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Monastir, Tunisia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Houssem is a Monastir-based full-stack developer and UI designer with
        hands-on experience building AI-powered financial web platforms and
        scalable REST APIs. He has a proven ability to integrate machine
        learning models into production applications — most notably in credit
        evaluation systems for the factoring domain. Currently pursuing a
        Software Engineering degree, with strong foundations in Agile/Scrum
        delivery, database design, and cross-functional collaboration.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Shamash IT",
        timeframe: "Feb 2024 – May 2024",
        role: "Full-Stack Developer – End of Studies Internship",
        achievements: [
          <>
            Designed and implemented a full-stack financial management platform
            (XFactor) for the factoring domain using ReactJS, SQL Server, and
            Prisma ORM.
          </>,
          <>
            Integrated machine learning modules for automated credit scoring and
            decision-making, reducing manual evaluation time significantly.
          </>,
          <>
            Built RESTful APIs and dynamic dashboards for financial KPIs with
            real-time data visualization.
          </>,
          <>
            Collaborated with a cross-functional remote team following Scrum
            methodology with bi-weekly sprints.
          </>,
        ],
        images: [],
      },
      {
        company: "IEEE CS ISSATSO Student Branch",
        timeframe: "Jul 2023 – Nov 2023",
        role: "Graphic Designer & UX Contributor",
        achievements: [
          <>
            Designed creative content and visual branding materials for club
            events and digital campaigns.
          </>,
          <>
            Applied UI/UX principles to enhance member engagement and
            communication design.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "École Polytechnique de Sousse",
        description: (
          <>Software Engineering Cycle – 2nd Year (2024 – Present).</>
        ),
      },
      {
        name: "ISG Sousse",
        description: (
          <>Master's in Information Systems & Decision Support (2021 – 2024).</>
        ),
      },
      {
        name: "ISG Sousse",
        description: <>Bachelor's in Business Intelligence.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Front-End",
        description: (
          <>
            React.js, Next.js, Angular, HTML5, CSS3, Tailwind CSS, Material UI,
            Bootstrap 5, Chart.js, Responsive Design, Vanilla JavaScript.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Back-End & Databases",
        description: (
          <>
            Node.js, Express.js, PHP, Spring Boot, Flask, Microservices, REST
            APIs, JWT / Authentication, RBAC, SQL Server, MySQL, PostgreSQL,
            MongoDB, Prisma ORM, Sequelize.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "AI / ML",
        description: (
          <>
            Machine Learning, NLP, OCR, Computer Vision, Transfer Learning,
            Scikit-learn, TensorFlow, Python, Algorithm Design.
          </>
        ),
        tags: [{ name: "Python", icon: "python" }],
        images: [],
      },
      {
        title: "Design & Tools",
        description: (
          <>
            Figma, Adobe Photoshop, Adobe Illustrator, Adobe XD, UI/UX Design,
            Git, GitHub, Postman, VS Code, JetBrains IDEs, Android Studio,
            Ubuntu (Linux).
          </>
        ),
        tags: [{ name: "Figma", icon: "figma" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on dev, design & AI",
  description: `Articles and insights by ${person.name} — coming soon.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack, AI, and design projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `UI/UX Project Gallery – ${person.name}`,
  description: `A showcase of UI/UX design work by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "XFactor – Financial Dashboard UI",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Careeria – Job Matching Platform UI",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "AquaSens – Irrigation Analytics Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "EckryCar – Car Rental App UI",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Chef'sEye – Food Recommendation UI",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Branding & Visual Design – IEEE ISSATSO",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Wireframing & Prototyping Work",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Mobile-First Responsive Design",
      orientation: "vertical",
    },
  ],
};

const certifications: Certifications = {
  label: "Certifications",
  title: "My Certifications",
  description:
    "Courses and certifications I have completed to sharpen my skills.",
  items: [
    {
      platform: "Udemy",
      title: "React JS — Hooks, Redux, State, Router",
      date: "2024",
      skills: ["React", "Redux", "React Router", "Hooks"],
      link: "https://www.udemy.com/certificate/UC-423b11dd-24ae-4820-9214-34bee220baa9/",
    },
    {
      platform: "Udemy",
      title: "TailwindCSS from A to Z",
      date: "2024",
      skills: ["Tailwind CSS", "Responsive Design", "Utility-First CSS"],
      link: "https://www.udemy.com/certificate/UC-41906aa7-f250-4769-bff1-48589c6791ad/",
    },
    {
      platform: "Coursera",
      title: "Programming with JavaScript",
      date: "2023",
      skills: ["Programming Principles", "OOP", "Jest", "JSON", "& More"],
      link: "https://www.coursera.org/account/accomplishments/certificate/GBR4QJRXNNJZ",
    },
    {
      platform: "Coursera",
      title: "HTML and CSS in depth",
      date: "2023",
      skills: [
        "Data Validation",
        "Accessibility",
        "Bootstrap",
        "UI Components",
      ],
      link: "https://www.coursera.org/account/accomplishments/certificate/FAHQ83BPHRJJ",
    },
    {
      platform: "DataCamp",
      title: "Advanced Git",
      date: "2026",
      skills: [
        "Advanced Merging Strategies",
        "Git History",
        "Advanced Repository Management",
      ],
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/3774602dd7e2b07684a57b61d87e0c86742def24",
    },
  ],
};
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  certifications,
};
