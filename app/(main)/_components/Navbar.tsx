'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuMoon, LuSun } from 'react-icons/lu';
import { RiHome3Line } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { GoPerson } from 'react-icons/go';

const navItems = [
  {
    href: '/',
    label: 'Home',
    Icon: RiHome3Line,
  },
  {
    href: '/about',
    label: 'About',
    Icon: GoPerson,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1.5 shadow-[0_18px_55px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#111111]/85 dark:shadow-[0_18px_55px_rgba(0,0,0,0.36)] sm:bottom-10">
      {navItems.map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={`group flex h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 transition-all duration-300 ease-out sm:min-w-24 sm:px-4 ${
              isActive
                ? 'bg-[#111111] text-white shadow-[0_8px_24px_rgba(17,17,17,0.18)] dark:bg-white dark:text-black dark:shadow-[0_8px_24px_rgba(255,255,255,0.12)]'
                : 'text-black/60 hover:bg-black/5.5 hover:text-black dark:text-white/60 dark:hover:bg-white/8 dark:hover:text-white'
            }`}>
            <Icon className="size-4.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="hidden whitespace-nowrap font-PoppinsFont text-xs font-medium uppercase leading-none tracking-[0.12em] sm:block">
              {label}
            </span>
          </Link>
        );
      })}
      <button
        type="button"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="ml-1 flex size-11 cursor-pointer items-center justify-center rounded-full border border-black/6lack/[0.035] text-black/65 transition-all duration-300 hover:bg-black/7.5 hover:text-black dark:border-white/8 dark:bg-white/6 dark:text-white/70 dark:hover:bg-white/11 dark:hover:text-white">
        {isDark ? <LuSun className="size-4.5" /> : <LuMoon className="size-4.5" />}
      </button>
    </nav>
  );
};

export default Navbar;
