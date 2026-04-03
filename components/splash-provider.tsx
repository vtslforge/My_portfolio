'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type SplashContextValue = {
  markReady: () => void;
};

const SplashContext = createContext<SplashContextValue | null>(null);
const SPLASH_DURATION_MS = 3000;

// Provides a route-scoped splash session that resets on pathname changes.
export function SplashProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <SplashSession key={pathname}>{children}</SplashSession>;
}

// Holds the splash until both the minimum delay and route-ready signal complete.
function SplashSession({ children }: { children: React.ReactNode }) {
  const [timerDone, setTimerDone] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setTimerDone(true), SPLASH_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const value = useMemo(
    () => ({
      markReady: () => setPageReady(true),
    }),
    [],
  );

  return (
    <SplashContext.Provider value={value}>
      <div className="relative min-h-full flex-1">
        {children}
        {!timerDone || !pageReady ? (
          <main className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-background text-foreground">
            <section className="flex flex-col items-center gap-2 text-center">
              <p className="font-primaryFont text-4xl tracking-[0.18em] uppercase">
                vtsl.exe
              </p>
              <p className="font-secondaryFont text-sm tracking-[0.55em] uppercase text-foreground/65">
                Loading
              </p>
            </section>
          </main>
        ) : null}
      </div>
    </SplashContext.Provider>
  );
}

export function useSplashReady() {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error('useSplashReady must be used within SplashProvider');
  }

  return context;
}

// Marks the current route as mounted so the splash can dismiss once the timer ends.
export function RouteReady() {
  const { markReady } = useSplashReady();

  useEffect(() => {
    markReady();
  }, [markReady]);

  return null;
}
