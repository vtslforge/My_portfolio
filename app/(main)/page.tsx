import AboutSection from './_components/AboutSection';
import Intro from './_components/Intro';
import TechStack from './_components/TechStack';
import GithubStat from './_components/GithubStat';
import Projects from './_components/Projects';
import Contact from './_components/Contact';
import { RouteReady, SplashProvider } from '@/components/splash-provider';

const page = async () => {
  return (
    <SplashProvider>
      <main className="flex flex-col items-center">
        <RouteReady />
        <Intro />
        <section className="flex flex-col w-[95vw] space-y-15 md:w-[75vw] mt-12">
          <AboutSection />
          <TechStack />
          <GithubStat />
          <Projects />
          <Contact />
        </section>
      </main>
    </SplashProvider>
  );
};

export default page;
