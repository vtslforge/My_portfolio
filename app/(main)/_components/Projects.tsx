"use client";
import { motion } from "motion/react";
import Image from "next/image";

const Projects = () => {
  const projectDetails = [
    {
      label: "portfolio",
      image: "/frame1.png",
      title: "PORTFOLIO",
      link: "www.google.com",
      status:"Completed",
    },
    {
      label: "portfolio",
      image: "/frame1.png",
      title: "PORTFOLIO",
      link: "www.google.com",
    },
    {
      label: "portfolio",
      image: "/frame1.png",
      title: "PORTFOLIO",
      link: "www.google.com",
    },
  ];
  return (
    <main className="space-y-6">
      <header className="type-heading-lg">PROJECTS.</header>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {projectDetails.map((project, index) => (
          <figure
            key={index}
            className="aspect-square p-3 rounded-3xl dark:bg-project-cardDark bg-[#e8e4e4]"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden ">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Image
                  height={700}
                  width={700}
                  src={project.image}
                  alt="profile images"
                  className="object-cover h-full w-full"
                />
              </motion.div>
              <div className="flex font-secondaryFont flex-col text-white justify-between items-start p-6 pointer-events-none absolute inset-0 z-40  bg-[linear-gradient(to_top,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_12%,rgba(0,0,0,0.72)_24%,rgba(0,0,0,0.48)_38%,rgba(0,0,0,0.24)_52%,rgba(0,0,0,0.1)_66%,transparent_80%)]">
                <div className="bg-white/20 p-2 px-4 rounded-full">{project.status}</div>
                <div className="flex justify-between w-full">
                  <p className=" text-3xl font-bold opacity-75">
                    {project.title}
                  </p>
                  <p className="cursor-pointer pointer-events-auto">
                    {project.link}
                  </p>
                </div>
              </div>
            </div>
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Projects;
