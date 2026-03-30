import AboutSection from "./_components/AboutSection";
import Intro from "./_components/Intro";
import TechStack from "./_components/TechStack";
import GithubStat from "./_components/GithubStat";
import Projects from "./_components/Projects";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="mt-6 flex justify-center">
      <section className="flex flex-col w-[95vw] space-y-15 md:w-[75vw]">
        <Intro />
        <AboutSection />
        <TechStack />
        <GithubStat />
        <Projects/>
      </section>
    </main>
  );
};

export default page;
