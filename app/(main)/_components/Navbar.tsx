'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuMoon } from 'react-icons/lu';
import { RiHome3Line } from 'react-icons/ri';
// import { RiBloggerLine } from 'react-icons/ri';
// import { FaGithub } from 'react-icons/fa';
import { useTheme } from 'next-themes';
const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <main className="z-50 h-auto border dark:border-[#1e1e1e] border-[#e4e4e4]   dark:bg-tech-cardDark-bg element fixed bottom-10 left-1/2 -translate-x-1/2 w-fit rounded-full p-1 flex items-center justify-center gap-1 bg-tech-cardLight-bg">
      <Link
        href="/"
        className={`h-9 flex items-center justify-center rounded-full aspect-square ${pathname === '/' ? '' : ''}`}>
        <RiHome3Line className="" />
      </Link>

      {/* <Link
        href="/blog"
        className={`h-9 flex items-center justify-center rounded-full aspect-square ${pathname === '/blog' ? '' : ''}`}>
        <RiBloggerLine />
      </Link>

      <Link
        href="/github"
        className={`h-9 flex items-center justify-center rounded-full aspect-square ${pathname === '/github' ? '' : ''}`}>
        <FaGithub />
      </Link> */}

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="h-9 flex items-center cursor-pointer justify-center rounded-full aspect-square">
        <LuMoon />
      </button>
      <p className="px-2 text-nowrap text-[.8rem] font-PoppinsFont text-green-700">
        Work in Progress
      </p>
    </main>
  );
};

export default Navbar;
