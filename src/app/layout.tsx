import type { Metadata } from "next";
import NavDemoButton from "@/components/NavDemoButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saga AI — Intelligent Agents for Healthcare Operations",
  description:
    "AI-powered intake and outreach agents that help healthcare organizations automate patient communication, close care gaps, and reduce staff burden.",
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-card border-b border-border">
      <div className="max-w-[1200px] mx-auto px-10 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-2xl font-bold text-text no-underline">saga</a>
        <div className="flex items-center gap-8">
          <NavDemoButton />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-text text-bg py-14">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-start max-md:flex-col max-md:gap-8">
        <div>
          <div className="font-display text-[22px] font-bold mb-2">saga</div>
          <div className="text-[13px] text-text-3 max-w-[260px] leading-relaxed">AI agents for healthcare operations. Built for practices, ACOs, and health systems.</div>
        </div>
        <div className="flex gap-14">
          <div>
            <p className="text-[11px] font-semibold text-[#b0a89f] mb-3 uppercase tracking-wide">Company</p>
            <a href="#" className="block text-sm text-text-3 no-underline mb-2 hover:text-bg">About</a>
            <a href="#" className="block text-sm text-text-3 no-underline mb-2 hover:text-bg">Careers</a>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-[#b0a89f] mb-3 uppercase tracking-wide">Legal</p>
            <a href="/privacy-policy" className="block text-sm text-text-3 no-underline mb-2 hover:text-bg">Privacy Policy</a>
            <a href="/terms-and-conditions" className="block text-sm text-text-3 no-underline mb-2 hover:text-bg">Terms of Service</a>
            <a href="/sms-consent" className="block text-sm text-text-3 no-underline mb-2 hover:text-bg">SMS Policy</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-8 pt-6 px-10 border-t border-[#3d3732] text-xs text-text-2">
        &copy; {new Date().getFullYear()} Saga Health, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
