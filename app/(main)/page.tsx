import HeroSection from './_components/HeroSection';
import ProjectsSection from './_components/ProjectsSection';
import TechStackSection from './_components/TechStackSection';
import ContactDock from './_components/ContactDock';
import Accordion from './_components/Accordion';

const page = () => {
  return (
      <main className="flex flex-col items-center w-full overflow-x-hidden min-h-screen">
        <section className="flex w-full flex-col gap-0 mb-12">
          <HeroSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactDock />
          <Accordion/>
        </section>
      </main>
  );
};

export default page;
