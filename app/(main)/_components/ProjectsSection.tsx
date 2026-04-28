'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection = () => {
  const projectDetails = [
    {
      label: 'Portfolio / V1',
      stack: ['Next.js', 'Motion'],
      image: '/vtslx.png',
      description: 'A cutting-edge portfolio architecture demonstrating high-performance React patterns.',
      link: 'https://github.com/vtslforge/My_portfolio',
    },
    {
      label: 'ShareApp Console',
      stack: ['NextJs', 'Supabase'],
      image: '/shareapp.png',
      description: 'Zero-latency ephemeral text sharing built for rapid data traversal.',
      link: 'https://github.com/vtslforge/Txtnok',
    },
    {
      label: 'SocialConnect Hub',
      stack: ['Next.js', 'Firebase'],
      image: '/capp.png',
      description: 'Centralized telemetry and insight generation across integrated social platforms.',
      link: 'https://github.com/vtslforge/socialConnect',
    },
  ];

  return (
    <section className="w-full flex flex-col py-32 items-center relative">
      <div className="w-full flex items-center justify-between gap-6 mb-16 max-w-5xl px-4">
        <h2 className="text-[0.7rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">
          Featured Deployments
        </h2>
        <div className="h-px auto flex-1 bg-linear-to-r from-black/10 dark:from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl px-4">
        {projectDetails.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* The Image Mask */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-black/5 dark:border-white/10">
              <Image
                height={500}
                width={800}
                src={project.image}
                alt={project.label}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
            </a>

            {/* Content Plate */}
            <div className="p-8 flex flex-col flex-1 z-10">
              <div className="flex items-center gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-[0.55rem] uppercase tracking-widest font-medium px-2.5 py-1 border border-black/10 dark:border-white/15 rounded bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 drop-shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold font-InterFont text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                  {project.label}
                </h3>
              </a>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
