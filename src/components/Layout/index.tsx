import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
