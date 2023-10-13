import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  nextjs,
  prisma,
  kubernetes,
  flexibble,
  carhub,
  photoose,
  promptopia

} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },



];

const technologies = [
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },

];

const experiences = [
  {
    title: "Full Stack Next.js 13 Developer (Personal Projects)",
    company_name: "Self-Employed",
    icon: nextjs, 
    iconBg: "#61DAFB",
    date: "Jun 2022 - Present",
    points: [
      "Developed and maintained multiple web applications using Next.js 13, React.js and associated technologies as my personal projects.",
      "Utilized responsive design techniques to ensure user-friendly interfaces on various devices.",
      "Implemented modern web development best practices and coding standards.",
    ],
  }
];

const education = [
  {
    title: "Cloud Native Computing",
    from: "PIAIC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Learnt Frontend Development using React.js , Next.js and TypeScript.",
      "Learnt Backend Development using TypeScript, Next.js 13, Prisma ORM, MongoDB and more technologies  .",
      "Learnt Linux System Administration, containerization with Docker and container orchestration with Kubernetes.",
      "Completed all assignment and projects.",
    ],
  },
]
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
  },
];

const projects = [
  {
    name: "Dribble Clone",
    description:
      "A Full Stack Dribble clone made for developers that allows them to share creative designs and projects with the community. I have also implemented full CRUD functionalities so that users can update and delete thier projects.",
    tags: [
      {
        name: "nextjs13",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react18",
        color: "pink-text-gradient",
      },
    ],
    image: flexibble,
    source_code_link: "https://github.com/Muhammad-Saifullah50/flexibble",
    live_demo_link: "https://flexibble-tan.vercel.app/",
  },
  {
    name: "Photo Gallery",
    description:
      "A photo gallery application made on Next.js 13 where users can search from a base gallery of images coming from the Unsplash API, create folders and upload their favourite images to the folders, using mongoDB as the database. ",
    tags: [
      {
        name: "nextjs13",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "crudapi",
        color: "blue-text-gradient",
      },
    ],
    image: photoose,
    source_code_link: "https://github.com/Muhammad-Saifullah50/photo-gallery",
    live_demo_link: 'https://photoose.vercel.app'
  },
  {
    name: "Share Prompts",
    description:
      "A CRUD application made on Next.js 13 where users can share, read the communities' useful AI prompts. The authors of the prompts can also update and deleet their prompts.",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "react18",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/Muhammad-Saifullah50/promptopia",
    live_demo_link: 'https://promptopia-sigma-lime.vercel.app'

  },
  {
    name: "Car Showcase",
    description:
      "A modern car showcase application in which users can search for different cars , apply filters such as company name, models, fuel type etc. This app uses two external APIs for data.",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "react18",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/Muhammad-Saifullah50/carhub",
    live_demo_link: 'https://carhub-nine-jet.vercel.app'

  },
];

export { services, technologies, experiences, testimonials, projects, education };