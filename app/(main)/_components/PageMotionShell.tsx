"use client";

import { motion, useScroll } from "motion/react";

type PageMotionShellProps = {
  children: React.ReactNode;
};

const PageMotionShell = ({ children }: PageMotionShellProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#F20AF5", 
        }}
      />
      {children}
    </>
  );
};

export default PageMotionShell;
