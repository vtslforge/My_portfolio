'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RiHome3Line } from 'react-icons/ri';
import { RiBloggerLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
const Navbar = () => {
  const pathname = usePathname();
  const MotionButton = motion.button;
  const { theme, setTheme } = useTheme();
  return (
    <main className=" z-50 dark:bg-tech-cardDark-bg element fixed bottom-10 left-1/2 -translate-x-1/2 h-auto w-fit rounded-full p-1 flex items-center justify-center gap-1 bg-tech-cardLight-bg">
      <Link
        href="/"
        className={`navbarChild ${pathname === '/' ? '' : ''}`}>
        <RiHome3Line />
      </Link>

      <Link
        href="/blog"
        className={`navbarChild ${pathname === '/blog' ? '' : ''}`}>
        <RiBloggerLine />
      </Link>

      <Link
        href="/github"
        className={`navbarChild ${pathname === '/github' ? '' : ''}`}>
        <FaGithub />
      </Link>

      <MotionButton
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="navbarChild">
        <GiMoon />
      </MotionButton>
    </main>
  );
};

export default Navbar;
