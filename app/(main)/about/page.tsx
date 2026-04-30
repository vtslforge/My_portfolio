'use client';
import { motion } from 'framer-motion';
import Navbar from '../_components/Navbar';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { SiYoutubegaming } from 'react-icons/si';
import { PiCookingPot } from 'react-icons/pi';
import { PiCoffee } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  const spotifyTheme = mounted && resolvedTheme === 'light' ? '1' : '0';

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full overflow-x-hidden min-h-screen">
        <section className="flex flex-col gap-16 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-32">
          
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
          <section className="flex flex-col border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 backdrop-blur-md  p-8 md:p-12 relative overflow-hidden">
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
          <section className="flex flex-col gap-6 w-full mt-8">
            <h3 className="text-[0.65rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-500 mb-2 border-b border-black/10 dark:border-white/10 pb-4">
              hobbies
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* Interests Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 flex-col p-6  border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 hover:border-black/10 hover:bg-black/10 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all group">
                  <IoMusicalNotesOutline className="text-2xl text-blue-500 mb-4" />
                  <p className="font-semibold text-foreground text-xs mb-1 uppercase tracking-wider">Music</p>
                  <p className="text-xs text-zinc-500">Synthwave & R&B</p>
                </div>
                
                <div className="flex gap-3 flex-col p-6  border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 hover:border-black/10 hover:bg-black/10 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all group">
                  <PiCoffee className="text-2xl text-purple-500 mb-4" />
                  <p className="font-semibold text-foreground text-xs mb-1 uppercase tracking-wider">Coffee</p>
                  <p className="text-xs text-zinc-500">My personal kerosene</p>
                </div>
                
                <div className="flex gap-3 flex-col p-6  border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 hover:border-black/10 hover:bg-black/10 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all group">
                  <SiYoutubegaming className="text-2xl text-emerald-500 mb-4" />
                  <p className="font-semibold text-foreground text-xs mb-1 uppercase tracking-wider">Gaming</p>
                  <p className="text-xs text-zinc-500">RPGs & Strategy</p>
                </div>
                
                <div className="flex gap-3 flex-col p-6  border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 hover:border-black/10 hover:bg-black/10 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all group">
                  <PiCookingPot className="text-2xl text-orange-500 mb-4" />
                  <p className="font-semibold text-foreground text-xs mb-1 uppercase tracking-wider">Cooking</p>
                  <p className="text-xs text-zinc-500">Trying our new recipies</p>
                </div>
              </div>

              {/* Spotify Embeds */}
              <div className="flex flex-col gap-4 justify-between">
                <div className="overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 opacity-60">
                  <iframe
                    data-testid="embed-iframe-1"
                    src={`https://open.spotify.com/embed/playlist/0pwXPzYUlL9bN9Yh4jv01v?utm_source=generator&theme=${spotifyTheme}`}
                    width="100%"
                    height="152"
                    className="block w-full border-0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title="Spotify Playlist 1"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/40 opacity-60">
                  <iframe
                    data-testid="embed-iframe-2"
                    src={`https://open.spotify.com/embed/playlist/2kCLN1MBkhUdE2Taq9Ha5z?utm_source=generator&theme=${spotifyTheme}`}
                    width="100%"
                    height="152"
                    className="block w-full border-0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title="Spotify Playlist 2"
                  />
                </div>
              </div>
            </div>
          </section>

          <h3 className="text-center mt-20 mb-12 text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600 font-InterFont border-t border-black/5 dark:border-white/5 pt-12">
            cooking more
          </h3>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
