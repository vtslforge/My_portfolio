'use client';
import { motion } from 'framer-motion';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { SiSpotify, SiYoutubegaming } from 'react-icons/si';
import { PiCookingPot, PiCoffee, PiGauge, PiInfinity, PiLeaf, PiTreeStructure } from 'react-icons/pi';

const AboutPage = () => {
  const principles = [
    {
      title: 'Performance over clutter',
      detail: 'Every interface should earn its weight in clarity, speed, or utility.',
      icon: PiGauge,
    },
    {
      title: 'Scalability',
      detail: 'I plan around systems that can grow without becoming difficult to reason about.',
      icon: PiTreeStructure,
    },
    {
      title: 'Simplicity wins',
      detail: 'The best solution is usually the one with fewer moving parts and cleaner ownership.',
      icon: PiLeaf,
    },
    {
      title: 'Learn endlessly',
      detail: 'I keep learning close to the work so new tools become practical, not decorative.',
      icon: PiInfinity,
    },
  ];
  const hobbies = [
    {
      label: 'Music',
      detail: 'Synthwave, R&B, and pattern-heavy listening sessions.',
      icon: IoMusicalNotesOutline,
      accent: 'text-blue-500',
    },
    {
      label: 'Coffee',
      detail: 'The small ritual that keeps long build sessions moving.',
      icon: PiCoffee,
      accent: 'text-amber-500',
    },
    {
      label: 'Gaming',
      detail: 'RPGs and strategy games with systems worth dissecting.',
      icon: SiYoutubegaming,
      accent: 'text-emerald-500',
    },
    {
      label: 'Cooking',
      detail: 'Trying new recipes and tuning them like small experiments.',
      icon: PiCookingPot,
      accent: 'text-orange-500',
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center w-full overflow-x-hidden min-h-screen">
        <section className="flex flex-col gap-16 w-full max-w-5xl mx-auto px-4 pb-32">
          
          {/* -------------------------About Header Title-------------------------------------------- */}
          <section className="text-center min-h-[40vh] flex flex-col justify-center items-center relative mt-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-zinc-600 dark:text-zinc-300 uppercase">Behind the surface</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-InterFont font-black tracking-tighter text-foreground z-10">
                About Me.
              </h1>
            </motion.div>
          </section>

          {/* -------------------------about me description section--------------------------------------- */}
          <section className="flex flex-col border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none rounded-full" />
            
            <h3 className="text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500 mb-8 z-10 w-full border-b border-black/10 dark:border-white/10 pb-4">
              the human behind
            </h3>
            
            <article className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed flex flex-col gap-6 z-10">
              <p>
                My journey into technology began during my early school days, when computers sparked a deep curiosity in me. Fascinated by how applications run and systems function, I was inspired to explore the lower-level mechanics—a drive that formed the foundation of my engineering mindset today.
              </p>
              <p>
                I thrive on diving deep into the logic behind what I build. I don&apos;t just want things to work; I demand efficient, highly optimized, and scalable systems. My primary directive is to operate as a well-rounded developer capable of executing complete architectures, spanning from database design to high-performance client rendering.
              </p>
              <p>
                Currently, I am expanding my domain expertise into AI and Machine Learning to stay ahead of the computational curve. When I step away from the terminal, you can find me analyzing music patterns, writing fiction, cooking, or immersing myself in strategy and role-playing games.
              </p>
            </article>
          </section>

          {/* ---------------------------------Human behind it------------------------------------*/}
          <section className="flex flex-col gap-8 w-full mt-8">
            <div className="w-full flex items-center justify-between gap-6">
              <h2 className="text-[0.7rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">
                hobbies
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-black/10 dark:from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex min-h-72 flex-col justify-between overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-8 transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="absolute -right-8 -top-8 text-[9rem] text-blue-500/8 transition-colors duration-300 group-hover:text-blue-500/14">
                  <IoMusicalNotesOutline />
                </div>

                <div className="relative z-10">
                  <p className="mb-5 text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500">
                    main frequency
                  </p>
                  <h3 className="mb-5 max-w-xs text-xl md:text-2xl font-bold font-InterFont tracking-tight text-foreground">
                    Music keeps the pace steady.
                  </h3>
                  <p className="max-w-sm text-sm font-InterFont leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Synthwave and R&B stay in the background while I build, write, or reset between long sessions.
                  </p>
                </div>

                <a
                  href="https://open.spotify.com/user/wqaow9in8y4ite3wdbu85b5tt?si=f002b976183d4ba6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-10 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-foreground px-5 py-2.5 text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80"
                >
                  <SiSpotify className="text-base" />
                  Open Profile
                </a>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hobbies.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      viewport={{ once: true }}
                      className="group relative min-h-40 overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-blue-500/40"
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                          <Icon className={`text-xl ${item.accent}`} />
                        </div>
                        <span className="font-InterFont text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mb-2 font-InterFont text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-500">
                        {item.label}
                      </h3>
                      <p className="font-InterFont text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative w-full py-12 md:py-14 overflow-hidden">
            <div className="w-full flex items-center justify-between gap-6 mb-12">
              <h2 className="text-[0.7rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">
                Core Principles
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-black/10 dark:from-white/10 to-transparent" />
            </div>

            <div className="relative border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md overflow-hidden">
              <div className="absolute right-0 top-0 h-56 w-56 bg-blue-500/5 blur-[80px] pointer-events-none rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex min-h-72 flex-col justify-between border-b border-black/5 p-8 dark:border-white/10 lg:border-b-0 lg:border-r"
                >
                  <div>
                    <p className="mb-5 text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500">
                      operating rules
                    </p>
                    <h3 className="mb-5 max-w-sm text-2xl md:text-3xl font-bold font-InterFont tracking-tight text-foreground leading-tight">
                      Sharp work comes from small constraints.
                    </h3>
                    <p className="max-w-sm text-sm font-InterFont leading-relaxed text-zinc-600 dark:text-zinc-400">
                      These are the filters I use before a feature, system, or interface earns more complexity.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-3">
                    <div className="border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
                      <p className="font-InterFont text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                        bias
                      </p>
                      <p className="mt-2 font-InterFont text-sm font-semibold tracking-tight text-foreground">
                        Build lean
                      </p>
                    </div>
                    <div className="border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
                      <p className="font-InterFont text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                        measure
                      </p>
                      <p className="mt-2 font-InterFont text-sm font-semibold tracking-tight text-foreground">
                        Ship clear
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="relative p-6 md:p-8">
                  <div className="absolute bottom-8 left-12 top-8 w-px bg-linear-to-b from-transparent via-black/10 to-transparent dark:via-white/10" />
                  <div className="flex flex-col gap-4">
                    {principles.map((principle, index) => {
                      const Icon = principle.icon;

                      return (
                        <motion.div
                          key={principle.title}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45, delay: index * 0.06 }}
                          viewport={{ once: true }}
                          className="group relative grid grid-cols-[3rem_1fr] gap-4"
                        >
                          <div className="relative z-10 flex size-12 items-center justify-center border border-black/10 dark:border-white/10 bg-(--background) text-zinc-500 transition-colors group-hover:border-blue-500/40 group-hover:text-blue-500">
                            <Icon className="text-2xl" />
                          </div>

                          <div className="border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 p-5 transition-all duration-300 group-hover:border-blue-500/40">
                            <div className="mb-3 flex items-center justify-between gap-4">
                              <h3 className="font-InterFont text-sm md:text-base font-semibold tracking-tight text-foreground">
                                {principle.title}
                              </h3>
                              <span className="font-InterFont text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                                0{index + 1}
                              </span>
                            </div>
                            <p className="font-InterFont text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {principle.detail}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
