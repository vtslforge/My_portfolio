import SmoothScrollProvider from '@/components/providers/smoothScroll';
import Navbar from './_components/Navbar';
import PageMotionShell from './_components/PageMotionShell';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SmoothScrollProvider>
      <Navbar />
      <PageMotionShell>
        <main>{children}</main>
      </PageMotionShell>
      </SmoothScrollProvider>
    </div>
  );
}
