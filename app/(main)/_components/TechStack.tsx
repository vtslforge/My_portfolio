"use client";
import { motion } from "motion/react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";




const TechStack = () => {
  // Frontend
  const skillsFrontend = [
    { Icon: FaHtml5, label: "HTML" },
    { Icon: FaCss3Alt, label: "CSS" },
    { Icon: RiTailwindCssFill, label: "Tailwind" },
    { Icon: IoLogoJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: FaReact, label: "React" },
    { Icon: RiNextjsFill, label: "Next.js" },
    { Icon: FiFramer, label: "Framer Motion" },
  ];
  // Backend & Database
  const skillsBackend = [
    { Icon: FaNode, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
    { Icon: BiLogoMongodb, label: "MongoDB" },
    { Icon: IoLogoFirebase, label: "Firebase" },
    { Icon: TbApi, label: "REST APIs" },
    { Icon: SiMysql, label: "SQL" },
  ];
  //Tools & Technologies
  const ToolsTech = [
    { Icon: FaPython, label: "Python" },
    { Icon: SiRedux, label: "Redux" },
    { Icon: FaGitAlt, label: "Git & GitHub" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: FaFigma, label: "Figma" },
    { Icon: RiNotionFill, label: "Notion" },
  ];

  return (
    <main className="space-y-6">
      <header className="type-heading-lg">TECH STACK.</header>
      <figure className="space-y-6 p-3">
        <h1 className="type-heading-md">Frontend</h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {skillsFrontend.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg "
              >
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2 dark:border-tech-cardDark-border border-tech-cardLight-border cursor-pointer overflow-hidden"
                >
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: "100%",
                          height: "3px",
                          backgroundColor: "#F20AF5",
                          boxShadow:
                            "0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)",
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0"
                    />
                    <Icon className="relative z-10 text-4xl md:text-6xl" />
                    <p className="relative z-10 text-sm opacity-80 font-secondaryFont">
                      {skill.label}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </section>
      </figure>
      <figure className="space-y-6 p-3">
        <h1 className="type-heading-md">Backend & Database</h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {skillsBackend.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg "
              >
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2 dark:border-tech-cardDark-border border-tech-cardLight-border cursor-pointer overflow-hidden"
                >
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: "100%",
                          height: "3px",
                          backgroundColor: "#F20AF5",
                          boxShadow:
                            "0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)",
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0"
                    />
                    <Icon className="relative z-10 text-4xl md:text-6xl" />
                    <p className="relative z-10 text-sm opacity-80 font-secondaryFont">
                      {skill.label}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </section>
      </figure>
      <figure className="space-y-6 p-3">
        <h1 className="type-heading-md">Tools & Technologies</h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {ToolsTech.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg "
              >
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2 dark:border-tech-cardDark-border border-tech-cardLight-border cursor-pointer overflow-hidden"
                >
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: "100%",
                          height: "3px",
                          backgroundColor: "#F20AF5",
                          boxShadow:
                            "0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)",
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0"
                    />
                    <Icon className="relative z-10 text-4xl md:text-6xl" />
                    <p className="relative z-10 text-sm opacity-80 font-secondaryFont">
                      {skill.label}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </section>
      </figure>
    </main>
  );
};

export default TechStack;
