'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuMoon } from 'react-icons/lu';
import { RiHome3Line } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { GoPerson } from 'react-icons/go';

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <main className="z-50 h-auto border dark:border-[#1e1e1e]/50 border-[#e4e4e4]/50 dark:bg-[#191919]/70 bg-white/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] fixed bottom-10 left-1/2 -translate-x-1/2 w-fit rounded-full p-1 flex items-center justify-center gap-1">
      <Link
        href="/"
        className={`h-9 flex items-center justify-center rounded-full aspect-square ${pathname === '/' ? '' : ''}`}>
        <RiHome3Line className="" />
      </Link>

      <Link
        href="/about"
        className={`h-9 flex items-center justify-center rounded-full aspect-square ${pathname === '/about' ? '' : ''}`}>
        <GoPerson />
      </Link>

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="h-9 flex items-center cursor-pointer justify-center rounded-full aspect-square">
        <LuMoon />
      </button>
      <p className="px-2 text-nowrap text-[0.78rem] md:text-[0.85rem] lg:text-[0.9rem] font-PoppinsFont text-green-700">
        Work in Progress
      </p>
    </main>
  );
};

export default Navbar;
