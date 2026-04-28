'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaGitAlt, FaAws, FaPython, FaDocker } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FiFramer } from "react-icons/fi";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const TechStackSection = () => {
  const skillsset = [
    { label: 'React', logo: <FaReact /> },
    { label: 'Next.js', logo: <RiNextjsFill /> },
    { label: 'JavaScript', logo: <IoLogoJavascript /> },
    { label: 'TypeScript', logo: <BsTypescript /> },
    { label: 'Motion', logo: <FiFramer /> },
    { label: 'Tailwind', logo: <RiTailwindCssFill /> },
    { label: 'Node.js', logo: <FaNode /> },
    { label: 'Express', logo: <SiExpress /> },
    { label: 'PostgreSQL', logo: <BiLogoPostgresql /> },
    { label: 'MongoDB', logo: <SiMongodb /> },
    { label: 'Git', logo: <FaGitAlt /> },
    { label: 'Vercel', logo: <IoLogoVercel /> },
    { label: 'AWS', logo: <FaAws /> },
    { label: 'Python', logo: <FaPython /> },
    { label: 'Docker', logo: <FaDocker /> },
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 border-y border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/1">
      <div className="w-full max-w-5xl px-4 flex flex-col items-center text-center">
        <h2 className="text-[0.7rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-400 mb-12">
          Engineering Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {skillsset.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 w-16 md:w-20 group cursor-pointer"
            >
              <div className="text-3xl md:text-4xl text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-100 transition-colors duration-300">
                {item.logo}
              </div>
              <span className="text-[0.65rem] font-medium font-InterFont text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 tracking-wider uppercase transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
