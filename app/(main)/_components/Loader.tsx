'use client';

type LoaderProps = {
  isVisible: boolean;
};

const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <div
      aria-hidden={!isVisible}
      // Full-screen fixed overlay so the loader sits above the homepage instead of replacing it.
      className={`fixed inset-0 z-100 flex items-center justify-center bg-(--background)/95 backdrop-blur-sm transition-opacity duration-500 ease-out ${
        isVisible
          ? 'pointer-events-auto visible opacity-100'
          : 'pointer-events-none invisible opacity-0'
      }`}>
      <div className="flex flex-col items-center gap-4">
        {/* Subtle pulse and spin keep the loader animated without feeling heavy. */}
        <div className="h-14 w-14 animate-pulse rounded-full border border-(--foreground)/20 bg-(--foreground)/6 p-2">
          <div className="h-full w-full animate-spin rounded-full border-2 border-(--foreground)/15 border-t-(--foreground)/70" />
        </div>
        <p className="font-HeaderFont text-[0.72rem] md:text-[0.8rem] lg:text-[0.84rem] uppercase tracking-[0.45em] text-(--foreground)/60">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loader;
