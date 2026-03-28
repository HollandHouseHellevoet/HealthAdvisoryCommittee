'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/10" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-baseline gap-1.5" aria-label="HAC RojasReport.com home">
            <span className="font-cormorant font-bold text-2xl sm:text-3xl text-orange">HAC</span>
            <span className="font-source text-cream text-sm sm:text-base">RojasReport.com</span>
          </Link>
          <p className="hidden lg:block font-source text-xs text-cream/60 uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
            Healthcare Advisory Committee Intelligence
          </p>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="font-source text-sm text-cream/80 hover:text-orange transition-colors">Committee</Link>
            <Link href="/#members" className="font-source text-sm text-cream/80 hover:text-orange transition-colors">Members</Link>
            <Link href="/pattern-analysis" className="font-source text-sm text-cream/80 hover:text-orange transition-colors">Pattern Analysis</Link>
            <a href="https://dutchrojas.substack.com" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/80 hover:text-orange transition-colors">Substack</a>
          </nav>

          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setMenuOpen(false)} className="font-source text-cream/80 hover:text-orange transition-colors">Committee</Link>
              <Link href="/#members" onClick={() => setMenuOpen(false)} className="font-source text-cream/80 hover:text-orange transition-colors">Members</Link>
              <Link href="/pattern-analysis" onClick={() => setMenuOpen(false)} className="font-source text-cream/80 hover:text-orange transition-colors">Pattern Analysis</Link>
              <a href="https://dutchrojas.substack.com" target="_blank" rel="noopener noreferrer" className="font-source text-cream/80 hover:text-orange transition-colors">Substack</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
