'use client';

import { easeIn, motion } from 'framer-motion';
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
    bg: 'bg-blue-500/10',
    logo: <FaReact className="text-blue-500" />,
  },
  {
    label: 'NextJS',
    bg: 'bg-white/5',
    logo: <RiNextjsFill className="text-white" />,
  },
  {
    label: 'Javascript',
    bg: 'bg-yellow-500/10',
    logo: <IoLogoJavascript className="text-yellow-400" />,
  },
  {
    label: 'Typescript',
    bg: 'bg-blue-600/10',
    logo: <BsTypescript className="text-blue-500" />,
  },
  {
    label: 'Motion',
    bg: 'bg-purple-500/10',
    logo: <FiFramer className="text-white" />,
  },
  {
    label: 'Tailwind',
    bg: 'bg-cyan-500/10',
    logo: <RiTailwindCssFill className="text-cyan-400" />,
  },
  {
    label: 'NodeJS',
    bg: 'bg-green-600/10',
    logo: <FaNode className="text-green-600" />,
  },
  {
    label: 'ExpressJS',
    bg: 'bg-gray-500/10',
    logo: <SiExpress className="text-gray-400" />,
  },
  {
    label: 'PostgreSQL',
    bg: 'bg-blue-700/10',
    logo: <BiLogoPostgresql className="text-blue-600" />,
  },
  {
    label: 'MongoDB',
    bg: 'bg-green-500/10',
    logo: <SiMongodb className="text-green-500" />,
  },
  {
    label: 'Git',
    bg: 'bg-orange-500/10',
    logo: <FaGitAlt className="text-orange-600" />,
  },
  {
    label: 'Vercel',
    bg: 'bg-white/5',
    logo: <IoLogoVercel className="text-white" />,
  },
  {
    label: 'Aws',
    bg: 'bg-orange-400/10',
    logo: <FaAws className="text-orange-500" />,
  },
  {
    label: 'Python',
    bg: 'bg-blue-400/10',
    logo: <FaPython className="text-blue-500" />,
  },
  {
    label: 'Docker',
    bg: 'bg-blue-500/10',
    logo: <FaDocker className="text-blue-500" />,
  },
];

  return (
    <main className="space-y-6 md:mt-24">
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: easeIn, duration: 1 }}
        viewport={{ amount: 0.9, once: true }}
        className="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-PoppinsFont font-black text-center">
        TECH
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">STACK</span>
        <h3 className="text-nowrap text-[0.8rem] md:text-[1.05rem] uppercase font-normal lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
          my skillset
        </h3>
      </motion.header>
      {/* -----------------------------------   Skill set   ---------------------------------------------  */}
      <figure className="md:mt-24 flex items-center justify-center">
        <article className="flex justify-center items-center gap-3 flex-wrap xl:w-[60%] font-PoppinsFont">
        {skillsset.map((item, index) => {
          
          return (
            <section
              key={index}
              className={`p-3 gap-3 rounded-4xl flex items-center justify-center ${item.bg}`}>
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
