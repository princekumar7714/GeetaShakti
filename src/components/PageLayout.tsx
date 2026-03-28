import { ReactNode } from "react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ChatbotWidget from "@/components/ChatbotWidget";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumb?: string;
}

export default function PageLayout({ children, title, breadcrumb }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Banner */}
      <div className="relative bg-primary py-16 md:py-24">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 mb-3">
            <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
            <span>›</span>
            <span className="text-accent">{breadcrumb || title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">{title}</h1>
        </div>
      </div>
      {children}
      <FooterSection />
      <ChatbotWidget />
    </div>
  );
}
