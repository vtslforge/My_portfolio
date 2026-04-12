'use client';
import { motion } from 'motion/react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FiFramer } from 'react-icons/fi';
import { RiNextjsFill } from 'react-icons/ri';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbApi } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { RiNotionFill } from 'react-icons/ri';
import { TbLayoutDashboard } from 'react-icons/tb';
import { TbServerSpark } from 'react-icons/tb';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const TechStack = () => {
  // Frontend
  const skillsFrontend = [
    { Icon: FaHtml5, label: 'HTML', hoverColor: '#E34F26' },
    { Icon: FaCss3Alt, label: 'CSS', hoverColor: '#1572B6' },
    { Icon: RiTailwindCssFill, label: 'Tailwind', hoverColor: '#06B6D4' },
    { Icon: IoLogoJavascript, label: 'JavaScript', hoverColor: '#F7DF1E' },
    { Icon: SiTypescript, label: 'TypeScript', hoverColor: '#3178C6' },
    { Icon: FaReact, label: 'React', hoverColor: '#61DAFB' },
    { Icon: RiNextjsFill, label: 'Next.js', hoverColor: '#FFFFFF' },
    { Icon: FiFramer, label: 'Framer Motion', hoverColor: '#0055FF' },
  ];
  // Backend & Database
  const skillsBackend = [
    { Icon: FaNode, label: 'Node.js', hoverColor: '#5FA04E' },
    { Icon: SiExpress, label: 'Express', hoverColor: '#FFFFFF' },
    { Icon: BiLogoMongodb, label: 'MongoDB', hoverColor: '#47A248' },
    { Icon: IoLogoFirebase, label: 'Firebase', hoverColor: '#FFCA28' },
    { Icon: TbApi, label: 'REST APIs', hoverColor: '#38BDF8' },
    { Icon: SiMysql, label: 'SQL', hoverColor: '#4479A1' },
  ];
  //Tools & Technologies
  const ToolsTech = [
    { Icon: FaPython, label: 'Python', hoverColor: '#3776AB' },
    { Icon: SiRedux, label: 'Redux', hoverColor: '#764ABC' },
    { Icon: FaGitAlt, label: 'Git & GitHub', hoverColor: '#F05032' },
    { Icon: SiPostman, label: 'Postman', hoverColor: '#FF6C37' },
    { Icon: FaFigma, label: 'Figma', hoverColor: '#F24E1E' },
    { Icon: RiNotionFill, label: 'Notion', hoverColor: '#FFFFFF' },
  ];

  return (
    <main className="space-y-6 md:mt-24">
      <header className="lg:text-[6rem] text-[2rem] md:text-[5rem] font-PoppinsFont font-black text-center">
        TECH
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">
          STACK
        </span>
      </header>
      <figure className="space-y-6 p-3 md:mt-24">
        <h1 className="font-PoppinsFont flex items-center gap-2">
          <TbLayoutDashboard className="text-yellow-400" />
          Frontend
        </h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {skillsFrontend.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square  dark:bg-tech-cardDark-bg bg-tech-cardLight-bg ">
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2  border-tech-cardLight-border cursor-pointer overflow-hidden">
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: '100%',
                          height: '3px',
                          backgroundColor: '#F20AF5',
                          boxShadow:
                            '0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)',
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="absolute bottom-0 left-0"
                    />
                    <motion.div
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="relative z-10">
                      <Icon
                        style={{ color: skill.hoverColor }}
                        className="text-3xl md:text-6xl"
                      />
                    </motion.div>
                    <p className="relative z-10 text-[12px] opacity-85 font-secondaryFont">
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
        <h1 className="font-PoppinsFont flex items-center gap-2 ">
          <TbServerSpark className="text-blue-700" />
          Backend & Database
        </h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {skillsBackend.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg ">
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2 dark:border-tech-cardDark-border border-tech-cardLight-border cursor-pointer overflow-hidden">
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: '100%',
                          height: '3px',
                          backgroundColor: '#F20AF5',
                          boxShadow:
                            '0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)',
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="absolute bottom-0 left-0"
                    />
                    <motion.div
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="relative z-10">
                      <Icon
                        style={{ color: skill.hoverColor }}
                        className="text-3xl md:text-6xl"
                      />
                    </motion.div>
                    <p className="relative z-10 text-[12px] opacity-85 font-secondaryFont">
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
        <h1 className="font-PoppinsFont flex items-center gap-2">
          <HiOutlineWrenchScrewdriver className="text-emerald-700" />
          Tools & Technologies
        </h1>
        <section className="w-full h-auto grid items-center justify-center grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
          {ToolsTech.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.label}
                className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg ">
                <motion.div
                  whileHover="hovered"
                  className="h-full w-full flex flex-col  items-center justify-center gap-2 dark:border-tech-cardDark-border border-tech-cardLight-border cursor-pointer overflow-hidden">
                  <div className="h-full gap-3 w-full flex justify-center items-center flex-col relative overflow-hidden">
                    <motion.div
                      variants={{
                        hovered: {
                          width: '100%',
                          height: '3px',
                          backgroundColor: '#F20AF5',
                          boxShadow:
                            '0 0 24px #F20AF5, 0 0 56px rgba(242, 10, 245, 1), 0 24px 44px 0 rgba(242, 10, 245, 0.98)',
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="absolute bottom-0 left-0"
                    />
                    <motion.div
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="relative z-10">
                      <Icon
                        style={{ color: skill.hoverColor }}
                        className="text-3xl md:text-6xl"
                      />
                    </motion.div>
                    <p className="relative z-10 text-[12px] opacity-85 font-secondaryFont">
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
