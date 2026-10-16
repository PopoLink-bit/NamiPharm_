import React, { memo } from 'react';
import { ShoppingBag, Sparkles, Award } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onScrollToDecoder: () => void;
  onScrollToProducts: () => void;
}

function Navbar({ onScrollToDecoder, onScrollToProducts }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/40 backdrop-blur-2xl border-b border-white/5 px-4 lg:px-8 py-4.5 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Elegant Circle Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size="sm" layout="horizontal" textColor="text-white group-hover:text-neon-gold transition-colors duration-300" />
        </div>

        {/* Navigation Actions */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={onScrollToDecoder}
            className="text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-all duration-300 uppercase hover:scale-105"
          >
            Dekoder N.S.D.M.D.
          </button>
          <button 
            onClick={onScrollToProducts}
            className="text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-all duration-300 uppercase hover:scale-105"
          >
            Suplementy
          </button>
          <a 
            href="#science"
            className="text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-all duration-300 uppercase hover:scale-105"
          >
            Nauka & Energia
          </a>
        </nav>

        {/* Right side controls - left empty to clean up clutter and remove the boxed button */}
        <div className="flex items-center gap-4">
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);

