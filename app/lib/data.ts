import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fammet from "@/public/porfolio.jpg";
import community from "@/public/community.jpg";
import esmaz from "@/public/event.jpg";
import todo from "@/public/todolist.jpg";
import anime from "@/public/image.jpg";

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
    title: "Graduated Coding school",
    location: "Nigeria",
    description:
      "I graduated after 6 months of studying. I immediately found a job as an intern front-end developer and also developing myself along the way.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Nigeria",
    description:
      "I worked as a front-end developer with FRSC also developing my skills along the way.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "Nigeria",
    description:
      "Frontend developer working at fatherland global community as a React Developer (NextJs), also a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fameet",
    description:
      "I worked as a React Developer on this startup project which aims to create a virtual space where families connect, explore their roots, and celebrate shared history.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind","Shadcn",],
    imageUrl: fammet,
    site:"NOT YET LIVE",
  },
  {
    title: "FatherLand Community",
    description:
      "Website where Africans unite, providing an Afrocentric lifestyle and diverse products. Members immerse in Africa's rich heritage and experience.",
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
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Figma"
] as const;