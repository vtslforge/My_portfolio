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
    <main className="z-50 w-fit h-auto border dark:border-[#1e1e1e]/50 border-[#e4e4e4]/50 dark:bg-[#191919]/70 bg-white/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full p-1 flex items-center justify-center gap-1">
      <Link
        href="/"
        className={`flex items-center rounded-full p-2 gap-1 px-3 text-black dark:text-white justify-center ${pathname === '/' ? 'bg-blue-500 text-white' : ''}`}>
        <RiHome3Line className='opacity-75' />
        {pathname === '/' && <p className='font-PoppinsFont uppercase leading-relaxed text-sm font-normal opacity-75'>Home</p>}
      </Link>

      <Link
        href="/about"
        className={`flex items-center rounded-full p-2 gap-1 px-3 text-black dark:text-white justify-center ${pathname === '/about' ? 'bg-blue-500 text-white' : ''}`}>
        <GoPerson className='opacity-75' />
        {pathname === '/about' && <p className='font-PoppinsFont uppercase leading-relaxed text-sm font-normal opacity-75'>About</p>}

      </Link>

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex items-center cursor-pointer justify-center rounded-full aspect-square opacity-75 p-3">
        <LuMoon />
      </button>
    </main>
  );
};

export default Navbar;
