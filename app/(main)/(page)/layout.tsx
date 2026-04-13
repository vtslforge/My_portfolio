
import Navbar from '../_components/Navbar';
import PageMotionShell from '../_components/PageMotionShell';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <Navbar />
      <PageMotionShell>
        <main>{children}</main>
      </PageMotionShell>

    </div>
  );
}
