import type { Metadata } from 'next';
import { Suspense } from 'react';
import './styles/globals.css';
import { Noto_Serif_Display } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import GoogleAnalytics from '@/providers/google-analytics';
import SmoothScrollProvider from '@/providers/smoothScroll';
import PageMotionShell from './(main)/_components/PageMotionShell';

export const metadata: Metadata = {
  title: 'Vatsalya Singh',
  description:
    'Portfolio of Vatsalya — building modern web apps with React, Next.js, and AI-driven solutions.',
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-K9SYRK8S1Q';

// title font for the titles (testing)
const primaryFont = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--titleFont',
});
const dancing_Script = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing_Script',
  weight: ['400', '500', '600', '700'],
});

const secondaryFont = Inter({
  subsets: ['latin'],
  variable: '--secondaryFont',
});

const headerFont = Poppins({
  subsets: ['latin'],
  variable: '--headerFont',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`antialiased ${primaryFont.variable} ${secondaryFont.variable} ${headerFont.variable} ${dancing_Script.variable}`}>
      <body className="min-h-full flex flex-col">
              <PageMotionShell>
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem>
            <Suspense fallback={null}>
              <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
            </Suspense>
            {children}
          </ThemeProvider>
        </SmoothScrollProvider>
        </PageMotionShell>
      </body>
    </html>
  );
}
