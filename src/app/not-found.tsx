import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-10">
        <h1 className="font-display text-[72px] font-bold text-accent leading-none mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-bold text-text mb-3">
          Page not found
        </h2>
        <p className="text-text-2 mb-8 max-w-[400px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-text text-white text-sm font-semibold hover:opacity-85 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
