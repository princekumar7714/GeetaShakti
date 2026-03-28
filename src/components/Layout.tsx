import { Navbar } from "./Navbar";
import TopBar from "./TopBar";
import FooterSection from "./FooterSection";
import Announcements from "./Announcements";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      {children}
      <FooterSection />
      <Announcements />
    </div>
  );
}
