import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const Contact = () => {
  return (
    <main className="space-y-6 mb-18 ">
             <header className="sectionHeader">CONTACT<span className='text-tech-hover-card-bg'>.</span></header>
      <section className="h-auto w-full  flex flex-col md:flex-row gap-3">
        <article className="flex-1 border rounded-3xl flex flex-col items-center  justify-center gap-9 py-12">
          <p className="w-full h-fit text-center text-2xl">
            Connect with me across social platforms
          </p>
          <section className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/vtsl.tsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-1 gap-2 items-center border h-12 w-26 justify-center rounded-full cursor-pointer bg-gray-600">
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/vtslforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-1 gap-2 items-center border h-12 w-26 justify-center rounded-full cursor-pointer bg-gray-600">
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://x.com/ZoltXero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-1 gap-2 items-center border h-12 w-26 justify-center rounded-full cursor-pointer bg-gray-600">
              <FaSquareXTwitter />
              X.com
            </a>
            <a
              href="https://github.com/vtslforge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-1 gap-2 items-center border h-12 w-26 justify-center rounded-full cursor-pointer bg-gray-600">
              <FaGithub />
              Github
            </a>
          </section>
        </article>
        <article className="font-secondaryFont flex-1 border rounded-3xl justify-center items-center text-center flex flex-col gap-9 py-12">
          <p className="text-2xl">Let’s work together</p>
          <a href="mailto:singhvatsalya16@gmail.com">
            <button className="flex p-1 gap-2 items-center border h-12 w-26 justify-center rounded-full cursor-pointer bg-gray-600">
              <MdOutlineMailOutline />
              Email
            </button>
          </a>
        </article>
      </section>
      <p className="border-t border-sidebar-border pt-6 opacity-75 text-center">
        © Vatsalya 2026. All rights reserved.
      </p>
    </main>
  );
};

export default Contact;
