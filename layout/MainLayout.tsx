import { FC, ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
  <Navbar />
    {children}
  <Footer />
  </>
);
