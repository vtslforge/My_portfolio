import HomePageLoaderWrapper from '../_components/HomePageLoaderWrapper';
import AboutSection from '../_components/AboutSection';
import Intro from '../_components/Intro';
import TechStack from '../_components/TechStack';
import GithubStat from '../_components/GithubStat';
import Projects from '../_components/Projects';
import Contact from '../_components/Contact';

const page = () => {
  return (
    <HomePageLoaderWrapper>
      <main className="flex flex-col items-center">
        <Intro />
        <section className="flex w-[95vw] flex-col space-y-15 md:w-[75vw]">
          <Projects />
          <TechStack />
          <GithubStat />
          <AboutSection />
          <Contact />
        </section>
      </main>
    </HomePageLoaderWrapper>
  );
};

export default page;
