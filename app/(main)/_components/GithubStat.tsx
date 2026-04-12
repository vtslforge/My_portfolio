/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import dynamic from 'next/dynamic';
import { IoLogoGithub } from 'react-icons/io5';

const CURRENT_YEAR = 2026;
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const GithubStat = () => {
  const theme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="space-y-6">
      <section className="grid w-full gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)] lg:items-stretch">
        <section className="w-full overflow-x-auto rounded-2xl border dark:border-[#1e1e1e] border-[#e4e4e4]   p-2 sm:p-3">
          <div className="min-w-max">
            <GitHubCalendar
              theme={theme}
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              username="vtslforge"
              year={CURRENT_YEAR}
            />
          </div>
        </section>
        <section className="flex w-full flex-col justify-between gap-3">
          <pre className="min-h-42.5 overflow-hidden rounded-2xl border dark:border-[#1e1e1e] border-[#e4e4e4] p-4 text-sm leading-7 text-white sm:p-5">
            <code className="flex flex-wrap">
              <span className="text-emerald-400">console.log</span>
              <span className="text-gray-600">
                (&quot;Small commits. Big progress.&quot;);
              </span>
              {'\n'}
              <span className="text-gray-600">// Built one line at a time.</span>
            </code>
          </pre>
          <a
            href="https://github.com/vtslforge"
            target="_blank"
            rel="noreferrer"
              className="opacity-85 hover:opacity-100 w-fit flex items-center gap-2 font-PoppinsFont cursor-pointer px-6 py-3 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full">
            GitHub
            <IoLogoGithub />
          </a>
        </section>
      </section>
    </section>
  );
};

export default GithubStat;
