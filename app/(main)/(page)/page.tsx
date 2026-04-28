import HeroSection from '../_components/HeroSection';
import ProjectsSection from '../_components/ProjectsSection';
import TechStackSection from '../_components/TechStackSection';
import ContactDock from '../_components/ContactDock';

const page = () => {
  return (
      <main className="flex flex-col items-center w-full overflow-x-hidden min-h-screen">
        <section className="flex w-full flex-col gap-0 w-full mb-12">
          <HeroSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactDock />
        </section>
      </main>
  );
};

export default page;
