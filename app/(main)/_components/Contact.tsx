import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { SiGitconnected } from 'react-icons/si';
import { IoIosGitNetwork } from 'react-icons/io';

const Contact = () => {
  return (
    <main className="space-y-6 mb-18 ">
      
      <section className="h-auto w-full flex flex-col md:flex-row gap-3 opacity-85 font-PoppinsFont">
        {/* design here -  */}
        <article className="relative flex-1 rounded-3xl px-6 py-12 border border-[#2d2d2d]">
          <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b57a1f] bg-[#0d0d0d] shadow-[0_0_0_5px_#111111]">
            <SiGitconnected className="text-[1.55rem] text-[#f0a21e]" />
          </div>
          <div className="relative flex h-full flex-col items-center justify-center gap-11">
            <p className="px-6 pt-5 text-center text-[2rem] font-semibold tracking-[-0.06em] md:text-[2.7rem] lg:text-[3.35rem]">
              Connect with <span className="text-[#f0a21e]">me</span>
            </p>
          <section className="flex w-full justify-center font-PoppinsFont text-[0.92rem] md:text-[1rem] lg:text-[1.08rem]">
            <a
              href="https://www.instagram.com/vtsl.tsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-3 px-4 py-3 text-center transition-opacity hover:opacity-100 md:px-5">
              <FaInstagram className="text-[3rem] text-[#f02828]" />
              <span className="text-[1rem]">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vtslforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-3 border-l border-white/10 px-4 py-3 text-center transition-opacity hover:opacity-100 md:px-5">
              <FaLinkedin className="text-[3rem] text-[#1d8cf8]" />
              <span className="text-[1rem]">LinkedIn</span>
            </a>

            <a
              href="https://x.com/ZoltXero"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-3 border-l border-white/10 px-4 py-3 text-center transition-opacity hover:opacity-100 md:px-5">
              <FaSquareXTwitter className="text-[3rem] dark:text-white text-black" />
              <span className="text-[1rem]">X.com</span>
            </a>
            <a
              href="https://github.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-3 border-l border-white/10 px-4 py-3 text-center transition-opacity hover:opacity-100 md:px-5">
              <FaGithub className="text-[3rem] dark:text-white text-black" />
              <span className="text-[1rem]">Github</span>
            </a>
          </section>
          </div>
        </article>
        {/* design ends here -  */}
        <article className="font-InterFont flex-1 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-3xl justify-center items-center text-center flex flex-col gap-9 py-12">
          <p className="flex items-center text-[1rem] md:text-[1.2rem] lg:text-[1.35rem] text-center opacity-85 px-6 gap-3">
            Let&apos;s work together
            <IoIosGitNetwork className="text-[1rem] md:text-[1.15rem] lg:text-[1.25rem] text-green-500" />
          </p>
          <a href="mailto:singhvatsalya16@gmail.com">
            <button className="opacity-75 hover:opacity-85 flex items-center gap-2 font-PoppinsFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full text-[0.92rem] md:text-[1rem] lg:text-[1.08rem]">
              <MdOutlineMailOutline className="text-red-400" />
              Email
            </button>
          </a>
        </article>
      </section>
      <p className="border-t border-sidebar-border text-[0.8rem] md:text-[0.88rem] lg:text-[0.95rem] pt-6 mb-12 opacity-55 text-center">
        &copy; Vatsalya 2026. All rights reserved.
      </p>
      
    </main>
  );
};

export default Contact;
