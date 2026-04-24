'use client';
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';

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
    // {
    //   label: 'CollegeMedia',
    //   image: '/cm.png',
    //   description: 'All-in-one app for Presidency University',
    //   link: 'https://github.com/vtslforge/collegeMedia',
    //   status: 'completed Mar 20, 2026',
    //   logo: { text: 'cm', style: { backgroundColor: '#bf5ab0' } },
    // },
  ];
  return (
    <main className="space-y-6">
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: easeIn, delay:0.5, duration: 1 }}
        className="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-PoppinsFont font-black text-center uppercase">
        Work
        <span className="text-tech-hover-card-bg font-DanceFont lowercase">Showcase</span>
      </motion.header>
      <section className="grid md:mt-24 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
        {projectDetails.map((project, index) => (
          <motion.figure
            key={index}
            initial={{opacity: 0 }}
            whileInView={{ opacity:1}}
            transition={{ease:easeIn, delay:0.5, duration:1}}
            /*--------------------------------------------           Individual cards           ----------------------------------------------------------- */
            className="aspect-square relative pointer-events-none rounded-4xl overflow-hidden flex flex-col p-2 justify-end">
            {/*-------------------------------------------           Inner card box            ----------------------------------------------------------- */}
            <section  className="h-[40%] w-full bg-[#ffffff66] z-10 rounded-4xl p-3 relative">
              {/* [clip-path:polygon(32.74%_30.8%,34.5%_23%,73.25%_23%,73.25%_73%,23.25%_73%,23.25%_30.8%)] */}
              {/* <div className='h-10 w-10 bg-amber-700 absolute rounded-full '></div> */}
              {/* <p className='text-black'>{project.label}</p> */}
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
