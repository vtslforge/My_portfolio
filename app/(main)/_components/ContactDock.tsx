'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const ContactDock = () => {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-12 px-4 overflow-hidden relative border-t border-black/5 dark:border-white/5 bg-black/1 ">
      <div className="w-full max-w-6xl">
        <div className="w-full flex items-center justify-between gap-6 mb-12">
          <h2 className="text-[0.7rem] font-semibold font-InterFont uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">
            System Telemetry & Uplink
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-black/10 dark:from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full">
          
          {/* GitHub Calendar / Telemetry Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="xl:col-span-2 flex flex-col items-start border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md rounded-3xl p-8 overflow-hidden relative"
          >
            <h3 className="text-foreground text-lg font-bold font-InterFont mb-2">Developer Telemetry</h3>
            <p className="text-zinc-500 font-InterFont text-sm mb-8 line-clamp-1">Continuous deployment & algorithmic contribution history.</p>
            
            <div className="github-calendar-shell w-full overflow-x-auto flex pb-4 no-scrollbar">
              <div className="min-w-175 z-10 no-scrollbar">
                <GitHubCalendar
                  className="no-scrollbar"
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={12}
                  username="vtslforge"
                  year={2026}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact / Uplink Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="xl:col-span-1 flex flex-col justify-between border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="z-10">
              <h3 className="text-2xl font-black font-InterFont text-foreground mb-4 tracking-tight">
                Initiate Contact
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-InterFont text-sm leading-relaxed mb-8">
                Looking to develop scalable solutions or high-performance interfaces? My inbox is strictly open for business and technical collaborations.
              </p>
            </div>

            <div className="z-10 flex flex-col gap-6 mt-auto">
              {/* Social Grid */}
              <div className="flex justify-between items-center px-4 py-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                <a href="https://github.com/vtslforge" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 duration-300">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://x.com/ZoltXero" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors hover:scale-110 duration-300">
                  <FaSquareXTwitter className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/vtslforge/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors hover:scale-110 duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://www.instagram.com/vtsl.tsx/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-500 transition-colors hover:scale-110 duration-300">
                  <FaInstagram className="text-xl" />
                </a>
              </div>

              {/* Call to action */}
              <a href="mailto:singhvatsalya16@gmail.com" className="w-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 rounded-full">
                <button className="cursor-pointer w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-foreground text-background font-bold text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
                  <MdOutlineMailOutline className="text-lg" /> Transmit Request
                </button>
              </a>
            </div>
          </motion.div>

        </div>
        
        <p className="text-[0.65rem] text-center mt-12 text-zinc-600 font-InterFont tracking-[0.3em] uppercase">
          &copy; 2026 Vatsalya. Engine: Next.js.
        </p>
      </div>
    </section>
  );
};

export default ContactDock;
