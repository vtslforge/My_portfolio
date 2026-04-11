import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const Contact = () => {
  return (
    <main className="space-y-6 mb-18 ">
      <section className="h-auto w-full  flex flex-col md:flex-row gap-3 opacity-85">
        <article className="flex-1 border rounded-3xl flex flex-col items-center  justify-center gap-9 py-12">
          <p className="w-full h-fit px-3  text-center text-xl ">
            Connect with me across social platforms, and feel free to share any feedback
            or report issues
          </p>
          <section className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/vtsl.tsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 dark:text-white text-black text-sm md:text-base border border-gray-300 dark:border-white/60 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.8)] shadow-[2px_2px_0px_#ccc8c8] rounded-full dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/vtslforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 dark:text-white text-black text-sm md:text-base border border-gray-300 dark:border-white/60 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.8)] shadow-[2px_2px_0px_#ccc8c8] rounded-full dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://x.com/ZoltXero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 dark:text-white text-black text-sm md:text-base border border-gray-300 dark:border-white/60 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.8)] shadow-[2px_2px_0px_#ccc8c8] rounded-full dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <FaSquareXTwitter />
              X.com
            </a>
            <a
              href="https://github.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 dark:text-white text-black text-sm md:text-base border border-gray-300 dark:border-white/60 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.8)] shadow-[2px_2px_0px_#ccc8c8] rounded-full dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <FaGithub />
              Github
            </a>
          </section>
        </article>
        <article className="font-secondaryFont flex-1 border rounded-3xl justify-center items-center text-center flex flex-col gap-9 py-12">
          <p className="text-xl">Let’s work together</p>
          <a href="mailto:singhvatsalya16@gmail.com">
            <button className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 dark:text-white text-black text-sm md:text-base border border-gray-300 dark:border-white/60 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.8)] shadow-[2px_2px_0px_#ccc8c8] rounded-full dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <MdOutlineMailOutline />
              Email
            </button>
          </a>
        </article>
      </section>
      <p className="border-t border-sidebar-border text-sm pt-6 mb-12 opacity-75 text-center">
        © Vatsalya 2026. All rights reserved.
      </p>
    </main>
  );
};

export default Contact;
