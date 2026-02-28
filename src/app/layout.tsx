import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saga AI — Intelligent Agents for Healthcare Operations",
  description:
    "AI-powered intake and outreach agents that help healthcare organizations automate patient communication, close care gaps, and reduce staff burden.",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-serif font-bold tracking-tight text-saga-black">
          saga
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#agents" className="text-sm text-saga-gray hover:text-saga-black transition-colors">
            Agents
          </a>
          <a href="#how-it-works" className="text-sm text-saga-gray hover:text-saga-black transition-colors">
            How It Works
          </a>
          <a href="#why-saga" className="text-sm text-saga-gray hover:text-saga-black transition-colors">
            Why Saga
          </a>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-saga-lavender text-saga-black text-sm font-medium hover:bg-saga-lavender-dark transition-colors"
          >
            Get a demo
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-saga-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-2xl font-serif font-bold mb-3">saga</p>
            <p className="text-gray-400 text-sm max-w-xs">
              AI agents for healthcare operations. Built for practices, ACOs, and health systems.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm font-semibold mb-4 text-gray-300">Company</p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">Agents</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#why-saga" className="hover:text-white transition-colors">Why Saga</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-gray-300">Legal</p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Saga Health, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
