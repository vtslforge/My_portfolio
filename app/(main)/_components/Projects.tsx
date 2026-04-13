'use client';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  type Logo = {
    text: string;
    style?: React.CSSProperties;
  };

  type projectDetails = {
    label: string;
    image: string;
    description: string;
    link: string;
    status: string;
    logo: Logo;
  };
  const projectDetails = [
    {
      label: 'Portfolio',
      image: '/Frame1.png',
      description: 'My personal portfolio the one you are browsing',
      link: 'https://github.com/vtslforge/My_portfolio',
      status: 'Beta',
      logo: { text: 'MP', style: { backgroundColor: '#ad7e07' } },
    },
    {
      label: 'ShareApp',
      image: '/share.png',
      description: 'Text sharing app currently in very initial phase',
      // link: 'https://github.com/vtslforge/My_portfolio',
      status: 'Initial phase',
      logo: { text: 'sa', style: { backgroundColor: '#3f9e59' } },
    },
    {
      label: 'SocialConnect',
      image: '/sc.png',
      description: 'A centralized web app where you can manage your social apps insight',
      link: 'https://github.com/vtslforge/socialConnect',
      status: 'beta',
      logo: { text: 'sc', style: { backgroundColor: '#514ea6' } },
    },
    {
      label: 'CollegeMedia',
      image: '/cm.png',
      description: 'All-in-one app for Presidency University',
      link: 'https://github.com/vtslforge/collegeMedia',
      status: 'completed Mar 20, 2026',
      logo: { text: 'cm', style: { backgroundColor: '#bf5ab0' } },
    },
  ];
  return (
    <main className="space-y-6">
      <header className="lg:text-[6rem] text-[2rem]  md:text-[5rem] font-PoppinsFont font-black text-center uppercase">
        Work
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">Showcase</span>
      </header>
      <section className="grid md:mt-24 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
        {projectDetails.map((project, index) => (
          <figure
            key={index}
            className="aspect-square dark:bg-tech-cardDark-bg bg-tech-cardLight-bg relative overflow-hidden pointer-events-none rounded-md">
            <div className="z-30 pointer-events-auto aspect-square h-[70%] translate-21 hover:translate-0 hover:h-full object-cover hover:rounded-sm transition-transform bg-transparent absolute bottom-0 right-0  rounded-full overflow-hidden  ">
              <Image
                height={800}
                width={800}
                src={project.image}
                alt="profile images"
                className="bg-black"
              />
            </div>
            <div className="z-10 pointer-events-none h-fit absolute w-full flex items-center justify-between px-3 font-PoppinsFont">
              <span
                className="rounded-lg uppercase my-3 aspect-square h-16 justify-center w-16 p-1 text-2xl lg:text-4xl flex items-center text-white"
                style={project.logo.style}>
                {project.logo.text}
              </span>
              <span className="uppercase border p-1 rounded-full opacity-55  md:text-[.7rem] text-[.6rem] px-2">
                {project.status}
              </span>
            </div>
            <div className="p-3 gap-1 font-PoppinsFont justify-center z-10 pointer-events-none h-40 w-[50%] lg:w-[60%] absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-start">
              <p className="opacity-85 uppercase">{project.label}</p>
              <p className="text-[.65rem] md:text-[.85rem] opacity-55">
                {project.description}
              </p>
            </div>
            <div className="z-10 flex items-center px-3 gap-3  h-fit mb-3 w-[40%] absolute bottom-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-fit p-3 bg-gray-800 aspect-square rounded-full text-white cursor-pointer pointer-events-auto flex items-center justify-center">
                <GoArrowUpRight />
              </a>
              {/* <span className='h-full aspect-square rounded-full border cursor-pointer pointer-events-auto flex items-center justify-center'>More</span> */}
            </div>
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Projects;
