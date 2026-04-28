'use client';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative mt-16">
      
      {/* Background ambient glow matching the accent color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-12">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
          <span className="text-[0.65rem] font-semibold tracking-widest text-zinc-600 dark:text-zinc-300 uppercase">Available for impact</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-InterFont font-black tracking-tighter text-foreground mb-6">
          Vatsalya Singh.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-InterFont max-w-2xl mx-auto leading-relaxed mb-12">
          Software engineer crafting precision tools, scalable systems, and zero-latency interfaces. Focused on React, Next.js, and Node.
        </p>

        <a href="https://github.com/vtslforge" target="_blank" rel="noopener noreferrer">
          <button className="relative group overflow-hidden px-8 py-3 rounded-full bg-foreground text-background  border-foreground/15 hover:border-blue-500/50 transition-colors shadow-none">
            {/* Hover internal glow */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-medium tracking-wide flex items-center gap-3 cursor-pointer">
              Explore Repositories
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
