'use client';
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

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
      stackUsed: ['React', 'NextJS', 'TypeScript', 'motion'],
      image: '/vtslx.png',
      description: 'A sleek portfolio showcasing my work, skills, and experiments in web development',
      link: 'https://github.com/vtslforge/My_portfolio',
      status: 'Beta',
      logo: { text: 'MP', style: { backgroundColor: '#ad7e07' } },
    },
    {
      label: 'ShareApp',
      stackUsed: ['React', 'NextJS', 'TypeScript'],
      image: '/shareapp.png',
      description: 'A minimal text-sharing app designed for quick and effortless content sharing, now in its initial phase',
      link: 'https://github.com/vtslforge/Txtnok',
      status: 'Initial phase',
      logo: { text: 'sa', style: { backgroundColor: '#3f9e59' } },
    },
    {
      label: 'SocialConnect',
      stackUsed: ['React', 'NextJS', 'TypeScript'],
      image: '/capp.png',
      description: 'A centralized dashboard to manage and track insights across your social platforms',
      link: 'https://github.com/vtslforge/socialConnect',
      status: 'beta',
      logo: { text: 'sc', style: { backgroundColor: '#514ea6' } },
    },
  ];
  return (
    <main className="space-y-6">
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: easeIn, duration: 1 }}
        viewport={{ amount: 0.9, once: true }}
        className="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-PoppinsFont font-black text-center uppercase">
        <span>Work</span>
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">Showcase</span>
        <h3 className="text-nowrap text-[0.8rem] md:text-[1.05rem] font-normal lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
          Projects i created
        </h3>
      </motion.header>
      <section className="grid md:mt-24 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-3">
        {projectDetails.map((project, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: easeIn, duration: 1, delay: index * 0.5 }}
            viewport={{ amount: 0.6, once: true }}
            /*--------------------------------------------           Individual cards           ----------------------------------------------------------- */
            className="aspect-square relative pointer-events-none rounded-4xl overflow-hidden flex flex-col p-2 justify-end">
            {/*-------------------------------------------           Inner card box            ----------------------------------------------------------- */}
            <section className="h-full w-full z-10 space-y-3 rounded-4xl p-3 flex flex-col justify-between relative font-PoppinsFont overflow-hidden">
              <article className="h-full flex flex-col justify-between w-[50%]">
                <article className="text-white">
                  {project.stackUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[0.7rem] text-white/60 border p-1 rounded-full px-3 flex-wrap mr-2">
                      {tech}
                    </span>
                  ))}
                </article>
                <p className="text-[1.2rem] text-white font-PoppinsFont opacity-85 w-fit uppercase">{project.label}</p>
                <p className="text-white/60 text-sm font-light font-InterFont">{project.description}</p>
                <a
                  className="pointer-events-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}>
                  <button className=" opacity-60 hover:opacity-100 text-nowrap font-PoppinsFont h-12 aspect-square items-center justify-center flex rounded-full cursor-pointer p-3">
                    View project
                    <GoArrowUpRight />
                  </button>
                </a>
              </article>{' '}
            </section>
            {/*-------------------------------------------           Image section            ----------------------------------------------------------- */}
            <Image
              height={800}
              width={800}
              src={project.image}
              alt="profile images"
              className="rounded-4xl absolute top-1/2 left-1/2 object-cover -translate-x-1/2 -translate-y-1/2 bg-transparent"
            />
          </motion.figure>
        ))}
      </section>
    </main>
  );
};

export default Projects;
