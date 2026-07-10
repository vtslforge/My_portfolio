'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturedDeployement = () => {
  const timeline = [
    {
      label: 'Concept',
      description: 'Validated the core idea around room-based plant previews.',
      status: 'done',
    },
    {
      label: 'Early Development',
      description: 'Building the upload flow, plant selection, and AI preview loop.',
      status: 'current',
    },
    {
      label: 'Public Release',
      description: 'Deployment polish, feedback passes, and launch-ready workflows.',
      status: 'next',
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative w-full max-w-5xl mx-auto mb-8 border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md overflow-hidden hover:border-blue-500/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        <a
          href="https://github.com/vtslforge/AnekLeaf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block min-h-72 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/10"
        >
          <Image
            src="/Anekleaf.png"
            alt="AnekLeaf deployment preview"
            fill
            sizes="(min-width: 1024px) 58rem, 100vw"
            className="object-cover opacity-90 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            priority={false}
          />
        </a>

        <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {['Next.js', 'ChatGPT API','Cloudinary'].map((item) => (
                <span
                  key={item}
                  className="text-[0.55rem] uppercase tracking-widest font-medium px-2.5 py-1 border border-black/10 dark:border-white/15 rounded bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 drop-shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/vtslforge/AnekLeaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-InterFont text-foreground mb-4 group-hover:text-blue-500 transition-colors">
                AnekLeaf
              </h3>
            </a>

            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed">
              AnekLeaf helps people preview plants inside their own rooms before
              buying them. Users upload a room image, pick plant options, and
              generate realistic AI-powered previews that make the placement
              feel easier to judge.
            </p>
          </div>

          <div className="border-l border-black/10 dark:border-white/10 pl-5">
            <p className="text-[0.62rem] uppercase tracking-[0.22em] font-InterFont text-blue-500 mb-4">
              Timeline
            </p>

            <div className="relative flex flex-col gap-5">
              <div className="absolute left-1 top-2 bottom-2 w-px bg-linear-to-b from-zinc-700 via-blue-500 to-zinc-300 dark:from-zinc-200 dark:via-blue-500 dark:to-zinc-700" />

              {timeline.map((item) => (
                <div key={item.label} className="relative grid grid-cols-[1rem_1fr] gap-4">
                  <span
                    className={`relative z-10 mt-1 size-2.5 rounded-full ring-4 ring-(--background) ${
                      item.status === 'current'
                        ? 'bg-blue-500 shadow-[0_0_22px_rgba(59,130,246,0.7)]'
                        : item.status === 'done'
                          ? 'bg-zinc-800 dark:bg-zinc-100'
                          : 'bg-zinc-300 dark:bg-zinc-700'
                    }`}
                  />

                  <div className={item.status === 'current' ? 'opacity-100' : 'opacity-55'}>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-semibold font-InterFont text-foreground">
                        {item.label}
                      </h4>
                      {item.status === 'current' && (
                        <span className="text-[0.55rem] uppercase tracking-[0.18em] font-medium px-2 py-0.5 border border-blue-500/30 bg-blue-500/10 text-blue-500">
                          Current Progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-InterFont text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedDeployement;
