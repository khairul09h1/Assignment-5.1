import { useState } from 'react';

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

/**
 * Sticky site navbar.
 * - Desktop: logo left, links centered, auth buttons right.
 * - Mobile: hamburger left, logo centered, auth buttons right,
 *   with a slide-down panel holding the nav links.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile hamburger (left) */}
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-slate-700 hover:text-slate-900"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Brand: left on desktop, centered on mobile */}
          <a
            href="#home"
            className="flex items-center gap-2 md:mr-auto absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <span className="w-8 h-8 rounded-lg brand-gradient-bg text-white font-bold text-sm flex items-center justify-center">
              DS
            </span>
            <span className="font-bold text-lg text-slate-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </a>

          {/* Desktop nav links (centered) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={
                  i === 0
                    ? 'text-sm font-medium brand-gradient-text'
                    : 'text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors'
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Auth buttons (right) */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              type="button"
              className="hidden sm:inline text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Sign In
            </button>
            <button
              type="button"
              className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 border-t border-slate-100 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-2 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="sm:hidden mt-2 px-2 py-2 text-left text-sm font-medium text-slate-700"
            >
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
