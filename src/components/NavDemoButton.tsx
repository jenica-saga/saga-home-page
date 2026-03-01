'use client';

export default function NavDemoButton() {
  const handleClick = () => {
    // Dispatch a custom event that the page component listens for
    window.dispatchEvent(new CustomEvent('open-demo-modal'));
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-6 py-2.5 rounded-full bg-text text-white text-sm font-semibold cursor-pointer hover:opacity-85 transition-opacity"
    >
      Book a demo
    </button>
  );
}
