import type { Metadata } from 'next';
import { Suspense } from 'react';
import './styles/globals.css';
import { Noto_Serif_Display } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import GoogleAnalytics from '@/components/google-analytics';

export const metadata: Metadata = {
  title: 'Vatsalya | Full Stack Developer',
  description:
    'Portfolio of Vatsalya — building modern web apps with React, Next.js, and AI-driven solutions.',
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-K9SYRK8S1Q';

// title font for the titles (testing)
const primaryFont = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--titleFont',
});

const secondaryFont = Inter({
  subsets: ['latin'],
  variable: '--secondaryFont',
});

const HeaderFont = Poppins({
  subsets: ['latin'],
  variable: '--HeaderFont',
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
      className={`antialiased ${primaryFont.variable} ${secondaryFont.variable} ${HeaderFont.variable}`}>
      <body className="min-h-full flex flex-col dark:bg-[#000000]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
