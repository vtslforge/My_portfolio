'use client';
import { motion } from 'motion/react';
import { IoArrowForwardSharp } from 'react-icons/io5';
import Image from 'next/image';

const Projects = () => {
  const projectDetails = [
    {
      label: 'Portfolio',
      image: '/Frame1.png',
      title: 'Portfolio',
      link: 'https://github.com/vtslforge/My_portfolio',
      status: 'Beta',
    },
    {
      label: 'ShareApp',
      image: '/share.png',
      title: 'ShareApp (Unnamed)',
      // link: 'https://github.com/vtslforge/My_portfolio',
      status: 'Initial phase',
    },
    {
      label: 'SocialConnect',
      image: '/sc.png',
      title: 'SocialConnect',
      link: 'https://github.com/vtslforge/socialConnect',
      status: 'beta',
    },
    {
      label: 'CollegeMedia',
      image: '/cm.png',
      title: 'CollegeMedia',
      link: 'https://github.com/vtslforge/collegeMedia',
      status: 'completed',
    },
  ];
  return (
    <main className="space-y-6">
      <header className="lg:text-[6rem] text-[2rem]  md:text-[5rem] font-PoppinsFont font-black text-center uppercase">
          Work<span className="text-tech-hover-card-bg font-DanceFont lowercase">Showcase</span>
        </header>
      <section className="grid md:mt-24 grid-cols-1 md:grid-cols-2 w-full gap-3">
        {projectDetails.map((project, index) => (
          <figure
            key={index}
            className="aspect-square p-1 rounded-3xl dark:bg-[#545454] bg-[#e8e4e4]">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-transparent ">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}>
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
                  <p className=" text-3xl font-bold opacity-75">{project.title}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer pointer-events-auto">
                    <div className="bg-white/20 h-12 w-12  flex items-center justify-center rounded-full ">
                      <IoArrowForwardSharp className="-rotate-45" />
                    </div>
                  </a>
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
