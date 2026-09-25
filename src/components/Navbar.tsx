import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight, Clock, MapPin, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenCommission: () => void;
  isBlueprintMode: boolean;
  onToggleBlueprint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommission,
  isBlueprintMode,
  onToggleBlueprint,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTimeKigali, setCurrentTimeKigali] = useState('');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Kigali is UTC+2
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Kigali',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setCurrentTimeKigali(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Works', href: '#works' },
    { label: 'Philosophy & Craft', href: '#philosophy' },
    { label: 'Materiality Lab', href: '#materials' },
    { label: 'Project Estimator', href: '#estimator' },
    { label: 'Atelier & Team', href: '#atelier' },
    { label: 'Monographs', href: '#monographs' },
  ];

  return (
    <>
      {/* Studio Top Operational Status Bar */}
      <div className="w-full bg-studio-950 border-b border-studio-800 text-[11px] tracking-wider text-studio-400 py-2 px-4 sm:px-8 flex flex-wrap justify-between items-center transition-colors">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-clay-400 font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-clay-500 animate-pulse mr-2" aria-hidden="true"></span>
            CONCEPT ATELIER
          </span>
          <span className="hidden md:inline-flex items-center text-studio-300">
            <MapPin className="w-3 h-3 mr-1 text-bronze-400" aria-hidden="true" />
            Kigali / Lagos / Nairobi / London
          </span>
          <span className="hidden lg:inline-flex items-center font-mono text-studio-300">
            <Clock className="w-3 h-3 mr-1 text-studio-400" aria-hidden="true" />
            Kigali {currentTimeKigali} CAT
          </span>
        </div>

        <div className="flex items-center space-x-3 ml-auto">
          <button
            onClick={onToggleBlueprint}
            aria-pressed={isBlueprintMode}
            className={`inline-flex items-center min-h-[32px] px-3 py-1 text-[11px] uppercase font-mono tracking-wider rounded border transition-all ${
              isBlueprintMode
                ? 'bg-sky-950 text-sky-300 border-sky-400 shadow-sm'
                : 'bg-studio-900 text-studio-200 border-studio-700 hover:border-clay-500 hover:text-white'
            }`}
            title="Toggle CAD / Blueprint Architectural Rendering"
          >
            <Layers className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            {isBlueprintMode ? 'CAD Mode: ON' : 'Drafting Overlay'}
          </button>
          <span className="hidden sm:inline text-studio-400 text-[11px]">
            Inquiries: <strong className="text-studio-200">Open 2025/2026</strong>
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-studio-950/95 border-b border-studio-800 shadow-xl py-3'
            : 'bg-studio-950/90 border-b border-studio-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-clay-500 rounded p-1"
            aria-label="BEKO Building Workshop Home"
          >
            <div className="w-10 h-10 border border-clay-500/80 bg-studio-900 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:border-clay-400 shrink-0">
              <span className="font-serif text-xl font-bold tracking-tighter text-studio-100 group-hover:scale-105 transition-transform">
                B
              </span>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-clay-500" aria-hidden="true"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider font-semibold text-studio-50 uppercase leading-none group-hover:text-clay-300 transition-colors">
                BEKO
              </span>
              <span className="text-[10px] tracking-ultra text-studio-400 uppercase font-sans mt-0.5">
                Building Workshop
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-studio-300 hover:text-clay-400 transition-colors py-1 relative font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-clay-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#estimator"
              className="text-xs tracking-wider uppercase font-mono text-studio-300 hover:text-white px-3.5 py-2.5 border border-studio-800 hover:border-studio-600 transition-all rounded-sm hidden lg:inline-block min-h-[40px] flex items-center"
            >
              Estimator
            </a>
            <button
              onClick={onOpenCommission}
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-clay-500 hover:bg-clay-600 text-white px-4 py-2.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-clay-500/20 active:scale-[0.98] min-h-[40px]"
            >
              <span>Commission Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Action & Menu Button (Minimum 44x44px touch targets) */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenCommission}
              className="sm:hidden text-xs uppercase tracking-wider font-semibold bg-clay-500 text-white px-3.5 py-2.5 rounded-sm min-h-[44px] flex items-center active:scale-95"
            >
              Commission
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2 text-studio-300 hover:text-white border border-studio-800 rounded-sm flex items-center justify-center active:bg-studio-900"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Ensures 100dvh and proper touch interaction) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[90px] bottom-0 z-50 bg-studio-950 border-t border-studio-800 flex flex-col p-6 xl:hidden overflow-y-auto animate-fade-in"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2 my-auto">
            <p className="text-[11px] font-mono tracking-widest text-clay-400 uppercase mb-3">
              // Studio Navigation Index
            </p>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-serif text-studio-100 hover:text-clay-400 py-3.5 border-b border-studio-900 transition-colors min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-studio-500">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-studio-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="w-full min-h-[48px] bg-clay-500 text-white font-medium text-center uppercase tracking-widest text-xs flex items-center justify-center space-x-2 active:bg-clay-600 rounded-sm"
            >
              <span>Initiate Studio Commission</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="flex justify-between items-center text-xs text-studio-400 font-mono pt-2">
              <span>01°57'S 30°04'E</span>
              <button
                onClick={onToggleBlueprint}
                className="text-clay-400 hover:underline flex items-center min-h-[44px] px-2 py-1"
              >
                <Layers className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                {isBlueprintMode ? 'CAD Mode: ON' : 'Drafting Overlay'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
