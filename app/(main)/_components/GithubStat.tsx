'use client';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CURRENT_YEAR = 2026;
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const GithubStat = () => {
  const { theme: currentTheme } = useTheme();

  return (
    <section className="space-y-6">
      <section className="w-full gap-4 flex justify-center items-center">
        <section className="overflow-x-scroll no-scrollbar flex justify-start">
          <div className="">
            <GitHubCalendar
              colorScheme={currentTheme === 'dark' ? 'dark' : 'light'}
              blockSize={16}
              blockMargin={7}
              fontSize={12}
              username="vtslforge"
              year={CURRENT_YEAR}
            />
          </div>
        </section>
      </section>
      {/* -------------------------------------- Git hub stat -------------------------------------------------------- */}
      <section className="flex w-full flex-col mt-12 gap-6 lg:flex-row items-center justify-center">
        <Image
          height={200}
          width={500}
          unoptimized
          src="https://streak-stats.demolab.com?user=vtslforge&theme=transparent&hide_border=true&card_width=500&card_height=200"
          alt="GitHub Streak"
        />
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vtslforge&theme=transparent&show_icons=true&hide_border=true&layout=compact"
          alt="Top Languages"
          width={500}
          height={200}
          unoptimized
          style={{ width: 500, height: 'auto' }}
        />
      </section>
    </section>
  );
};

export default GithubStat;
