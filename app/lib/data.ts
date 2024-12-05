import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fammet from "@/public/porfolio.jpg";
import community from "@/public/community.jpg";
import esmaz from "@/public/event.jpg";
import todo from "@/public/todolist.jpg";
import anime from "@/public/image.jpg";
import Doc from "@/public/DocStream.jpg";
import Ostore from "@/public/ostore.jpg";
import wednesday from "@/public/wednesday.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fore Media Group, Web Developer (Next.js)",
    location: "Nigeria, Onsite",
    description:
        "Developed and maintained responsive web applications using Next.js, ensuring high performance and seamless user experience. Collaborated with UI/UX designers to implement pixel-perfect designs and enhance overall user interaction. Worked closely with backend developers to consume APIs and optimize application performance. Notable projects include Fatherland Global and Fameet mobile/web app.",
    icon: React.createElement(FaReact),
    date: "October 2023 - February 2024",
},
{
    title: "FRSC, Web Developer",
    location: "Nigeria, Remote",
    description:
        "Collaborated with UI/UX designers to transform design mockups into responsive and user-friendly interfaces. Worked with backend developers to establish effective communication between front-end and back-end components.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 - October 2023",
},
{
    title: "Larava Coding School, Web Developer Intern",
    location: "Nigeria, Intern",
    description:
        "Reviewed students' code for adherence to best practices, tested web applications, and provided constructive feedback to improve functionality. Assisted students in understanding user requirements and encouraged innovative solutions for application development.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2022 - April 2023",
},
{
  title: "Access Bank Plc, Web Developer",
  location: "Nigeria, Web Developer",
  description:
      "Worked closely with UI/UX designers to translate design mock-ups into responsive, user-friendly interfaces, implementing features to improve user engagement and interaction.",
  icon: React.createElement(LuGraduationCap),
  date: "Nov 2019 - Feb 2022",
},


] as const;

export const projectsData = [
  {
    title: "DocStream",
    description:
      "A go to collaborator editor, where multple users can collaborate on a document, and also comment on it",
    tags: ["Next Js","Typescript","Tailwind Css","Liveblocks", "Lexical","Clerk"],
    imageUrl: Doc,
    site:"https://doc-stream-plny.vercel.app/",
  },  {
    title: "Wdnesday with wonder",
    description:
      "A project where one is safe, anonymous and users can openly share and discuss relationship issues, health concerns, lifestyle choices, and questions about sex.",
    tags: ["Next Js","Typescript","Tailwind Css", "FramerIMotion", "React Email"],
    imageUrl: wednesday,
    site:"https://wednesday-with-wonder.vercel.app/",
  },  {
    title: "Maravilla Casual",
    description:
      "A Fullstack ecommerce website ",
    tags: ["Next Js","Typescript","App-write", "Stripe","Tailwind Css","Prisma","MongoDb","Material UI"],
    imageUrl: Ostore,
    site:"https://o-riginal-store.vercel.app/",
  },
  {
    title: "Fameet",
    description:
      "I worked as a React Developer on this startup project which aims to create a virtual space where families connect, explore their roots, and celebrate shared history. NOT YET LIVE",
    tags: ["React", "Next.js", "TypeScript", "Tailwind","Shadcn",],
    imageUrl: fammet,
    site:"NOT YET LIVE",
  },
  {
    title: "FatherLand Community",
    description:
      "Website where Africans unite, providing an Afrocentric lifestyle and diverse products. Members immerse in Africa's rich heritage and experience. NOT YET LIVE",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Shadcn",],
    imageUrl: community,
    site:"NOT YET LIVE",
  },
  {
    title: "Esmaz Events",
    description:
      "An event website where users can host, buy tickets for an event. It has features like filtering, creating events, stripe payments and pagination..",
    tags: ["Next.js","TypeScript", "Mongo DB","Uploadthing","Clerk","Stripe", "Tailwind"],
    imageUrl: esmaz,
    site:"https://esmaz.vercel.app/",
  }, 
  {
    title: "AnimeVault",
    description:
      "A site to view and download anime pictures. It has features like infinite scrolling.",
    tags: ["React", "Next.js", "Shadcn", "Tailwind", "Framer Motion"],
    imageUrl: anime,
    site:"https://anime-vault-pink.vercel.app/",
  },
  {
    title: "TodoList",
    description:
      "A project where users can create and manage tasks by setting due dates, adding notes, prioritizing tasks, and marking them as complete",
    tags: ["HTMl","CSS","JAVASCRIPT", "Bootstrap"],
    imageUrl: todo,
    site:"https://to-do-list-application-beta.vercel.app/",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind Css",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Figma",
  "Prisma",
  "Shadcn",
  "Material UI",
  "App Write",
  "FireBase"
] as const;