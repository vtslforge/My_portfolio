'use client';
import Navbar from '../_components/Navbar';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { SiYoutubegaming } from 'react-icons/si';
import { GiEvilBook } from 'react-icons/gi';
import { PiCookingPot } from 'react-icons/pi';
import { PiCoffee } from 'react-icons/pi';

const page = () => {
  return (
    <>
      <Navbar />
      <main className="w-[95vw] flex-col space-y-15 md:w-[75vw] flex mx-auto">
        {/* -------------------------About Header Title-------------------------------------------- */}
        <section className="text-center leading-none uppercase min-h-screen flex flex-col justify-center">
          <h1 className="text-[3.5rem] md:text-[5.75rem] lg:text-[7.75rem] 2xl:text-[10.5rem] font-PoppinsFont font-black">
            aboutme
          </h1>
          <h3 className="text-nowrap mt-9 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
            BEHIND THE SCREEN
          </h3>
          <h2 className="text-nowrap text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-light font-DanceFont lowercase mt-9 ">
            the mind within.
          </h2>
        </section>
        {/* -------------------------about me description section--------------------------------------- */}
        <section className="flex flex-col items-center">
          <h3 className="text-nowrap text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
            A LITTLE ABOUT ME
          </h3>
          <header className="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-PoppinsFont font-black text-center">
            Pleasure to meet
            <span className="text-tech-hover-card-bg font-DanceFont lowercase">
              <span> </span>you.
            </span>
          </header>
          <section className=" mt-12  w-full font-secondaryFont">
            <article className="text-[1rem] md:text-[1.2rem] lg:text-[1.35rem] text-justify opacity-75 flex flex-col gap-6">
              <p>
                My journey into technology began during my early school days, when
                computers sparked a deep curiosity in me. Fascinated by how applications
                run and systems function, I was inspired to explore the world of
                technology—a passion that continues to drive my learning today.
              </p>

              <p>
                I enjoy diving deep into the logic behind what I build, striving to create
                efficient and scalable systems. My goal is to become a well-rounded
                developer capable of delivering complete solutions, from system design to
                full-stack development.
              </p>

              <p>
                I am also expanding my expertise into AI and Machine Learning while
                staying aligned with modern technological advancements. Beyond coding, I
                enjoy cooking, listening to music, writing stories, and gaming.
              </p>
            </article>
          </section>
        </section>
        {/* ---------------------------------Human behind it------------------------------------*/}
        <section>
          <h3 className="text-nowrap mt-9 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
            THE HUMAN BEHIND IT.
          </h3>
          <section className="flex w-full h-auto flex-col mt-3 md:flex-row gap-3">
            <article className="grid grid-cols-2 lg:grid-cols-2 gap-3 flex-1 font-PoppinsFont text-[.8rem] ">
              <div className="rounded-md flex flex-col p-3 gap-3 dark:bg-tech-cardDark-bg bg-tech-cardLight-bg">
                <IoMusicalNotesOutline className="text-lg text-orange-400" />
                <p className="text-[1rem]">Music</p>
                <p className="opacity-75">Synthwave & R&B Enthusiast</p>
              </div>
              <div className="rounded-md flex flex-col p-3 gap-3 dark:bg-tech-cardDark-bg bg-tech-cardLight-bg">
                <GiEvilBook className="text-lg text-blue-600" />
                <p className="text-[1rem]">Story Writing</p>
                <p className="opacity-75">Fictional Novels & Short Stories</p>
              </div>
              <div className="rounded-md flex flex-col p-3 gap-3 dark:bg-tech-cardDark-bg bg-tech-cardLight-bg">
                <SiYoutubegaming className="text-lg text-green-600" />
                <p className="text-[1rem]">Gaming</p>
                <p className="opacity-75">Immersive Stories, RPGs & Strategy</p>
              </div>
              <div className="rounded-md flex flex-col p-3 gap-3 dark:bg-tech-cardDark-bg bg-tech-cardLight-bg ">
                <PiCookingPot className="text-lg text-red-500" />
                <p className="text-[1rem]">Cooking</p>
                <p className="opacity-75">
                  Well, I need to survive… and I enjoy experimenting with new recipes
                </p>
              </div>
              <div className="rounded-md flex flex-col p-3 gap-3 col-span-2 dark:bg-tech-cardDark-bg bg-tech-cardLight-bg">
                <PiCoffee className="text-lg text-amber-300" />
                <p className="text-[1rem]">Coffee</p>
                <p className="opacity-75">My personal kerosene</p>
              </div>
            </article>
            <article className="flex-1 space-y-4">
              {/* Playlist 1 */}
              <div className="overflow-hidden rounded-2xl bg-transparent">
                <iframe
                  data-testid="embed-iframe-1"
                  src="https://open.spotify.com/embed/playlist/0pwXPzYUlL9bN9Yh4jv01v?utm_source=generator&theme=2"
                  width="100%"
                  height="152"
                  className="block w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Spotify Playlist 1"
                />
              </div>

              {/* Playlist 2 */}
              <div className="overflow-hidden rounded-2xl bg-transparent">
                <iframe
                  data-testid="embed-iframe-2"
                  src="https://open.spotify.com/embed/playlist/2kCLN1MBkhUdE2Taq9Ha5z?utm_source=generator&theme=1"
                  width="100%"
                  height="152"
                  className="block w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Spotify Playlist 2"
                />
              </div>
            </article>
          </section>
        </section>
        {/* -------------------------------------------Footer------------------------------------------- */}
        <h3 className="text-nowrap mx-auto mt-12 mb-36 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem] uppercase">
          More To come
        </h3>
      </main>
    </>
  );
};

export default page;
