import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { SiGitconnected } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";

const Contact = () => {
  return (
    <main className="space-y-6 mb-18 ">
      <section className="h-auto w-full  flex flex-col md:flex-row gap-3 opacity-85 font-PoppinsFont">
        <article className="flex-1 dark:border-[#1e1e1e] border-[#e4e4e4] border rounded-3xl flex flex-col items-center  justify-center gap-9 py-12">
          <p className="flex items-center gap-3 text-[1rem] md:text-[1.5rem] lg:-text-[2rem] text-center opacity-85 px-6 ">
            Connect with me<SiGitconnected className='text-orange-400' />

          </p>
          <section className="flex gap-3 flex-wrap justify-center font-PoppinsFont ">
            <a
              href="https://www.instagram.com/vtsl.tsx/"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-75 hover:opacity-100 flex items-center gap-2 cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaInstagram className='text-red-600' />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/vtslforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 flex items-center gap-2 cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaLinkedin className='text-blue-600'/>
              LinkedIn
            </a>

            <a
              href="https://x.com/ZoltXero"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 flex items-center gap-2 cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaSquareXTwitter />
              X.com
            </a>
            <a
              href="https://github.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 flex items-center gap-2 cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaGithub />
              Github
            </a>
          </section>
        </article>
        <article className="font-InterFont flex-1 border dark:border-[#1e1e1e] border-[#e4e4e4]  rounded-3xl justify-center items-center text-center flex flex-col gap-9 py-12">
          <p className="flex items-center text-[1rem] md:text-[1.5rem] lg:-text-[2rem] text-center opacity-85 px-6 gap-3">Let’s work together<IoIosGitNetwork className='text-md text-green-500' /></p>
          <a href="mailto:singhvatsalya16@gmail.com">
            <button className="opacity-75 hover:opacity-85 flex items-center gap-2 font-PoppinsFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <MdOutlineMailOutline className='text-red-400' />
              Email

            </button>
          </a>
        </article>
      </section>
      <p className="border-t border-sidebar-border text-sm pt-6 mb-12 opacity-55 text-center">
        © Vatsalya 2026. All rights reserved.
      </p>
    </main>
  );
};

export default Contact;
