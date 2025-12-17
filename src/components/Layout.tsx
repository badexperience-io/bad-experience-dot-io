import { ReactNode } from "react";
import Navbar from "@/components/Navbar"; // Adjust path if needed

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;