'use client';

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FiFramer } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";




const TechStack = () => {
  const skillsset = [
    {
      label: 'React',
      logo: <FaReact className="text-blue-600"/>,
    },
    {
      label: 'NextJS',
      logo: <RiNextjsFill className="text-white" />,
    },
    {
      label: 'Javascript',
      logo: <IoLogoJavascript className="text-yellow-400"/>,
    },
    {
      label: 'Typescript',
      logo: <BsTypescript className="text-blue-500"/>,
    },
    {
      label: 'Motion',
      logo: <FiFramer className="text-black"/>,
    },
    {
      label: 'Tailwind',
      logo: <RiTailwindCssFill className="text-cyan-400"/>,
    },
    {
      label: 'NodeJS',
      logo: <FaNode className="text-green-600"/>,
    },
    {
      label: 'ExpressJS',
      logo: <SiExpress className="text-gray-700"/>,
    },
    {
      label: 'PostgreSQL',
      logo: <BiLogoPostgresql className="text-blue-600"/>,
    },
    {
      label: 'MongoDB',
      logo: <SiMongodb className="text-green-500"/>,
    },
    {
      label: 'Git',
      logo: <FaGitAlt className="text-orange-600"/>,
    },
    {
      label: 'Vercel',
      logo: <IoLogoVercel className="text-black"/>,
    },
    {
      label: 'Aws',
      logo: <FaAws className="text-orange-500"/>,
    },
    {
      label: 'Python',
      logo: <FaPython className="text-blue-500"/>,
    },
    {
      label: 'Docker',
      logo: <FaDocker className="text-blue-500"/>,
    },
  ];

  return (
    <main className="space-y-6 md:mt-24">
      <header className="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-PoppinsFont font-black text-center">
        TECH
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">STACK</span>
        <h3 className="text-nowrap text-[0.8rem] md:text-[1.05rem] uppercase font-normal lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
          my skillset
        </h3>
      </header>
      {/* -----------------------------------   Skill set   ---------------------------------------------  */}
      <figure className="md:mt-24 flex items-center justify-center">
        <article className="flex justify-center items-center gap-3 flex-wrap xl:w-[60%] font-PoppinsFont">
        {skillsset.map((item, index) => {
          
          return (
            <section
              key={index}
              className="p-3 gap-3 border dark:border-[#535353] rounded-4xl flex items-center justify-center">
              <span className="text-2xl">{item.logo}</span>
              <span className="opacity-85">{item.label}</span>
            </section>
          );
        })}
        </article>
      </figure>
    </main>
  );
};

export default TechStack;
