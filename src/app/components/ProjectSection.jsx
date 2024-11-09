"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "React portfolio website",
    description:
      "A React portfolio website is a personal platform to showcase your skills, projects, and experience in a visually engaging way.",
    image: "images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description:
      "A Photography Portfolio Website is a visual showcase designed to display your best photos and creative work, making it easy for clients and visitors to explore your style and portfolio.",
    image: "images/projects/project6.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "An E-commerce Application is a digital platform that enables users to browse, purchase, and manage products or services online, offering features like product listings, a shopping cart, secure checkout, and order tracking.",
    image: "images/projects/project4.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "A Food Ordering Website is an online platform that allows users to explore menus, customize orders, and conveniently place food orders for delivery or pickup, often including features like user accounts, payment options, and real-time order tracking.",
    image: "images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description:
      "A React Firebase Template is a starter project that combines React for building user interfaces with Firebase for backend services like authentication, database, and hosting, providing a ready-made foundation for developing full-stack web applications quickly and efficiently.",
    image: "images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Frontend portfolio website",
    description:
      "A Frontend Portfolio Website is a personal site designed to showcase a developer’s UI/UX skills, projects, and technical expertise in frontend technologies, highlighting their ability to create visually appealing and interactive web experiences.",
    image: "images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  return (
    <>
      <motion.h2 
        className="text-center text-4xl font-bold text-white mt-8 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectSection;
