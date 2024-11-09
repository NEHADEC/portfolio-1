"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCIPT</li>
        <li>TYPESCRIPT</li>
        <li>NODE.JS</li>
        <li>NEXT.JS</li>
        <li>REACT</li>
        <li>EXPRESS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "eduction",
    content: (
      <ul className="list-disc pl-2">
        <li>Governor initiative </li>
        <li>collage of khatoon-e-pakistan karachi</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frountend Developer</li>
        <li>AWS professional cloud Developer</li>
        
      </ul>
    )
  }

]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about'className="text-white">
      {" "}
      <div className="md:grid md:grid-cols-2 gap-8 items-centerpy-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About.jpg"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            "I am a passionate Frontend Developer with a strong foundation in
            UI/UX design, web development, and game development. With a keen eye
            for detail and user-centric design, I aim to create innovative and
            responsive websites that offer seamless user experiences. Whether
            it's developing a visually appealing interface, building interactive
            web applications, or crafting immersive games, I combine my
            technical skills with creativity to deliver solutions that are both
            functional and engaging."
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
                {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("eduction")}
              active={tab === "education"}>
                {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
                {" "}
              Certifications{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab). content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
