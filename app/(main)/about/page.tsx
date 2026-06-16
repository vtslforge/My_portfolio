'use client';
import { motion } from 'framer-motion';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { SiSpotify, SiYoutubegaming } from 'react-icons/si';
import { PiCookingPot, PiCoffee, PiGauge, PiInfinity, PiLeaf, PiTreeStructure } from 'react-icons/pi';

const AboutPage = () => {
  const principles = [
    {
      title: 'Performance over clutter',
      icon: PiGauge,
    },
    {
      title: 'Scalability',
      icon: PiTreeStructure,
    },
    {
      title: 'Simplicity wins',
      icon: PiLeaf,
    },
    {
      title: 'Learn endlessly',
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
            <h3 className="text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500 border-b border-black/10 dark:border-white/10 pb-4">
              hobbies
            </h3>

            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative min-h-72 border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-8 md:p-10 overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="absolute right-6 top-6 text-8xl text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                      <IoMusicalNotesOutline />
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-[0.25em] font-InterFont text-blue-500 mb-5">
                      main frequency
                    </p>
                    <h4 className="text-3xl md:text-5xl font-black font-InterFont tracking-tight text-foreground max-w-sm mb-6">
                      Music keeps the pace.
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed max-w-md">
                      Synthwave and R&B sit in the background while I build,
                      write, or reset. It is less about noise and more about
                      keeping a steady rhythm.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 gap-4">
                    {hobbies.slice(1).map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: index * 0.08 }}
                          viewport={{ once: true }}
                          className="group flex items-center gap-5 border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-5 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-black/10 dark:hover:bg-white/5 transition-all duration-300"
                        >
                          <div className="size-11 shrink-0 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                            <Icon className={`text-xl ${item.accent}`} />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-xs mb-1 uppercase tracking-wider">
                              {item.label}
                            </p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md p-6 md:p-8 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="absolute -right-10 -top-14 text-[12rem] text-black/3 dark:text-white/3 pointer-events-none">
                    <SiSpotify />
                  </div>

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex items-start gap-5">
                      <div className="size-16 shrink-0 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground flex items-center justify-center">
                        <SiSpotify className="text-3xl" />
                      </div>

                      <div>
                        <p className="text-[0.62rem] uppercase tracking-[0.25em] font-InterFont text-zinc-500 mb-3">
                          Spotify Profile
                        </p>
                        <h4 className="text-2xl md:text-4xl font-black font-InterFont tracking-tight text-foreground mb-3">
                          Vatsalya&apos;s rotation
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed max-w-xl">
                          A profile view into what I keep on loop while building,
                          writing, and resetting between projects.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      <a
                        href="https://open.spotify.com/user/wqaow9in8y4ite3wdbu85b5tt?si=f002b976183d4ba6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center justify-center gap-2 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-5 py-3 text-[0.65rem] uppercase tracking-[0.2em] font-semibold font-InterFont text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                      >
                        <SiSpotify className="text-base" />
                        Open Profile
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
          </section>

          <section className="relative w-full border pl-3 border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/1 py-12 md:py-14 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center"
            >
              <div>
                <p className="text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Core Principles
                </p>
                <h3 className="text-3xl md:text-5xl font-black font-InterFont tracking-tight text-foreground leading-[0.95] max-w-md">
                  How I keep the work sharp.
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-InterFont leading-relaxed max-w-sm mt-6">
                  Small rules that keep the build focused when the scope gets
                  noisy.
                </p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-10 right-10 top-1/2 h-px bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-linear-to-b from-transparent via-black/10 to-transparent dark:via-white/10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;

                    return (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: index * 0.07 }}
                        viewport={{ once: true }}
                        className="group relative flex items-center gap-5"
                      >
                        <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md text-zinc-500 dark:text-zinc-400 group-hover:border-blue-500/40 group-hover:text-blue-500 transition-colors">
                          <Icon className="text-3xl" />
                          <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-(--background) text-[0.55rem] font-semibold font-InterFont text-zinc-400">
                            0{index + 1}
                          </span>
                        </div>

                        <h4 className="text-base md:text-lg font-semibold font-InterFont text-foreground tracking-tight max-w-44">
                          {principle.title}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>

        </section>
      </main>
    </>
  );
};

export default AboutPage;
