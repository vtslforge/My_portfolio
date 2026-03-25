"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
const Navbar = () => {
  const pathname = usePathname();
  const MotionButton = motion.button;
  const { theme, setTheme } = useTheme();
  return (
    <main className="dark:bg-[#2a2621] element border dark:border-0 fixed bottom-10 left-1/2 -translate-x-1/2 h-auto w-fit rounded-full p-1 flex items-center justify-center gap-1 bg-white">
      <Link
        href="/"
        className={`flex items-center justify-center cursor-pointer aspect-square h-10 flex-1 w-10 rounded-full bg-transparent text-black hover:bg-amber-600 ${pathname === "/" ? "" : ""}`}
      >
        <RiHome3Line />
      </Link>

      <Link
        href="/blog"
        className={`flex items-center justify-center cursor-pointer aspect-square h-10 flex-1 w-10 rounded-full bg-transparent text-black hover:bg-amber-600 ${pathname === "/blog" ? "" : ""}`}
      >
        <RiBloggerLine />
      </Link>

      <Link
        href="/github"
        className={`flex items-center justify-center cursor-pointer aspect-square h-10 flex-1 w-10 rounded-full bg-transparent text-black hover:bg-amber-600 ${pathname === "/github" ? "" : ""}`}
      >
        <FaGithub />
      </Link>

      <MotionButton
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer h-10 w-10 flex items-center justify-center aspect-square rounded-full bg-transparent text-black hover:bg-amber-600"
      >
        <GiMoon />
      </MotionButton>
    </main>
  );
};

export default Navbar;
