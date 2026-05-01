'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const accordionItems = [
  {
    title: 'How I use AI',
    content:
      'I use AI primarily to handle boilerplate code and repetitive tasks, which helps me stay focused on solving core problems. I also use it for code reviews and getting quick feedback on improvements or edge cases. However, I make sure that the overall logic, architecture, and decision-making remain my responsibility. In that way, AI acts as a productivity enhancer rather than a replacement for my thinking.',
  },
  {
    title:"How I Think and learn",
    content:'I make sure I understand the logic before I start coding. When learning something new, I prioritize building strong fundamentals and applying them in different scenarios. I believe in practical learning, so I practice the same concept in multiple ways to be prepared for real-world situations.'
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden px-4 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex w-full items-center justify-between gap-6">
          <h2 className="font-InterFont text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">
            Thoughts
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-black/10 to-transparent dark:from-white/10" />
        </div>

        <div className="space-y-4 ">
          {accordionItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/60 backdrop-blur-md transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-InterFont text-sm uppercase tracking-[0.18em] text-zinc-800 dark:text-zinc-100">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="font-InterFont text-lg text-zinc-500 dark:text-zinc-400"
                  >
                    {isActive ? '-' : '+'}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-black/6 px-6 pb-6 pt-4 dark:border-white/8">
                        <p className="text-zinc-600 dark:text-zinc-400 font-InterFont text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-12 text-center font-InterFont text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600">
          &copy; 2026 Vatsalya. Engine: Next.js.
        </p>
      </div>
    </section>
  );
};

export default Accordion;
