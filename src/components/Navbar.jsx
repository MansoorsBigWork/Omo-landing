import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
        <nav
          className={clsx(
            'pointer-events-auto transition-all duration-300 w-full max-w-[900px] rounded-full px-6 py-3 flex items-center justify-between',
            scrolled
              ? 'bg-canvas/80 backdrop-blur-xl border border-omo-orange/20 shadow-sm'
              : 'bg-transparent border border-transparent'
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5 font-display font-bold text-2xl text-obsidian tracking-tight group">
            <span>OMO</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-body font-medium text-obsidian/80">
            <a href="#how" className="hover:text-omo-orange transition-colors duration-150">How It Works</a>
            <a href="#jimmy" className="hover:text-omo-orange transition-colors duration-150">Jimmy</a>
            <a href="#omoships" className="hover:text-omo-orange transition-colors duration-150">OMOships</a>
            <a href="#students" className="hover:text-omo-orange transition-colors duration-150">For Students</a>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://tally.so/r/D4VZ8q"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-omo-orange text-white font-body font-bold rounded-full px-6 py-2.5 transition-all duration-200 hover:scale-105 hover:shadow-button-glow"
            >
              Join OMO Today
            </a>
            <button
              className="md:hidden text-obsidian p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas/90 backdrop-blur-xl pt-28 px-6 flex flex-col gap-6 md:hidden">
          <a href="#how" className="text-2xl font-display font-bold text-obsidian active:text-omo-orange" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#jimmy" className="text-2xl font-display font-bold text-obsidian active:text-omo-orange" onClick={() => setMobileMenuOpen(false)}>Jimmy</a>
          <a href="#omoships" className="text-2xl font-display font-bold text-obsidian active:text-omo-orange" onClick={() => setMobileMenuOpen(false)}>OMOships</a>
            <a href="#students" className="text-2xl font-display font-bold text-obsidian active:text-omo-orange" onClick={() => setMobileMenuOpen(false)}>For Students</a>
          <a 
            href="https://tally.so/r/D4VZ8q" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-omo-orange text-white text-center font-body font-bold rounded-full px-6 py-4 w-full" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Join OMO Today
          </a>
        </div>
      )}
    </>
  );
}
