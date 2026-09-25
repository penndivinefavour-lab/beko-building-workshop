import React, { useState } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-950 border-t border-studio-800 text-studio-300 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-studio-800">
          {/* Atelier Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-clay-500/80 bg-studio-900 flex items-center justify-center rounded-sm">
                <span className="font-serif text-lg font-bold text-studio-100">B</span>
              </div>
              <div>
                <span className="font-serif text-base tracking-wider font-semibold text-studio-100 uppercase block">
                  BEKO
                </span>
                <span className="text-[9px] tracking-ultra text-studio-400 uppercase font-sans">
                  Building Workshop
                </span>
              </div>
            </div>

            <p className="text-xs text-studio-300 leading-relaxed font-sans max-w-sm">
              An architectural concept atelier and master construction workshop crafting sustainable,
              passive, and enduring landmarks across Africa and the global south.
            </p>

            <div className="font-mono text-[11px] text-clay-400/90 pt-1 font-medium">
              Concept Hub: 01°57'S 30°04'E // Kiyovu Hill, Kigali
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-studio-100 block font-semibold">
              Selected Works
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#works" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Nyirangarama Ridge</a></li>
              <li><a href="#works" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Kilimani Innovation Hub</a></li>
              <li><a href="#works" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Matemwe Coral Sanctuary</a></li>
              <li><a href="#works" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Eko Arts Pavilion</a></li>
              <li><a href="#works" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Franschhoek Estate</a></li>
            </ul>
          </div>

          {/* Research & Practice */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-studio-100 block font-semibold">
              Practice & Discourse
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#philosophy" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Thermodynamic Manifesto</a></li>
              <li><a href="#materials" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Materiality Laboratory</a></li>
              <li><a href="#estimator" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Scope Estimator Engine</a></li>
              <li><a href="#atelier" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Artisan Guilds & Fellows</a></li>
              <li><a href="#monographs" className="text-studio-300 hover:text-clay-400 transition-colors py-1 inline-block">Open Research Papers</a></li>
            </ul>
          </div>

          {/* Dispatch / Monograph Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-studio-100 block font-semibold">
              The Atelier Dispatch
            </span>
            <p className="text-xs text-studio-300 leading-relaxed font-sans">
              Subscribe to receive quarterly architectural monographs, passive climate engineering data,
              and design case studies.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="architect@domain.com"
                  className="w-full min-h-[44px] bg-studio-900 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs px-3 py-2 outline-none font-sans rounded-l-sm"
                />
                <button
                  type="submit"
                  className="min-h-[44px] px-4 bg-clay-500 hover:bg-clay-600 text-white text-xs uppercase font-mono tracking-wider transition-colors shrink-0 rounded-r-sm font-medium"
                >
                  Subscribe
                </button>
              </div>

              {newsletterSubscribed && (
                <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400 animate-fade-in pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Enrolled for quarterly architectural papers.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-400">
          <div>
            © {new Date().getFullYear()} BEKO Building Workshop. Architectural Concept & Research Portfolio.
          </div>

          <div className="flex items-center space-x-6">
            <span>Speculative Practice</span>
            <span>Bioclimatic Research</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[44px] flex items-center space-x-1 text-studio-300 hover:text-white transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
