import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const Contact = () => {
  return (
    <main className="space-y-6 mb-18 ">
      <section className="h-auto w-full  flex flex-col md:flex-row gap-3 opacity-85 font-PoppinsFont">
        <article className="flex-1 dark:border-[#1e1e1e] border-[#e4e4e4] border rounded-3xl flex flex-col items-center  justify-center gap-9 py-12">
          <p className="w-full h-fit px-3 opacity-55  text-center text-xl ">
            Connect with me across social platforms, and feel free to share any feedback
            or report issues
          </p>
          <section className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/vtsl.tsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/vtslforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://x.com/ZoltXero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaSquareXTwitter />
              X.com
            </a>
            <a
              href="https://github.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <FaGithub />
              Github
            </a>
          </section>
        </article>
        <article className="font-secondaryFont flex-1 border dark:border-[#1e1e1e] border-[#e4e4e4]  rounded-3xl justify-center items-center text-center flex flex-col gap-9 py-12">
          <p className="text-xl opacity-55">Let’s work together</p>
          <a href="mailto:singhvatsalya16@gmail.com">
            <button className="flex items-center gap-2 font-HeaderFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
              <MdOutlineMailOutline />
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
