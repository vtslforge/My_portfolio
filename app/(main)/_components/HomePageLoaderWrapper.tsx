'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Loader from './Loader';

type HomePageLoaderWrapperProps = {
  children: ReactNode;
};

const LOADER_DURATION_MS = 1200;
const CONTENT_FADE_CLASS = 'transition-opacity duration-700 ease-out';

const HomePageLoaderWrapper = ({ children }: HomePageLoaderWrapperProps) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    // Hold the overlay for a short, client-side-only duration while the page is already mounted underneath.
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADER_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    // Lock scroll while the loader is covering the page so the initial viewport stays stable.
    body.style.overflow = showLoader ? 'hidden' : previousOverflow;
    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [showLoader]);

  return (
    <div className="relative">
      <Loader isVisible={showLoader} />
      {/* Keep the page in the DOM and reveal it with a smooth opacity transition after loading ends. */}
      <div
        className={`${CONTENT_FADE_CLASS} ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default HomePageLoaderWrapper;
