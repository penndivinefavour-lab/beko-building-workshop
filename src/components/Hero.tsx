import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sun, Wind } from 'lucide-react';
import { assetPath } from '../lib/assetPath';

interface HeroProps {
  onOpenCommission: () => void;
  onExploreWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommission, onExploreWorks }) => {
  return (
    <section className="relative min-h-[88dvh] flex flex-col justify-between overflow-hidden bg-studio-950 pt-6 pb-10">
      {/* Background Architectural Photography with Optimized WebP & Vignette */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={assetPath('/assets/hero.webp')} type="image/webp" />
          <img
            src={assetPath('/assets/hero.jpg')}
            alt="BEKO Building Workshop Speculative Architecture"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.1] scale-100"
          />
        </picture>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/60 to-studio-950/80"></div>
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" aria-hidden="true"></div>
      </div>

      {/* Top Survey Grid Telemetry */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-wider text-studio-400 border-b border-studio-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 bg-clay-500 rounded-full" aria-hidden="true"></span>
            <span>ATELIER SPECIFICATION // VER. 2025.4</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-studio-300">
            <span>LATITUDE 01°57'S // ELEVATION 1,567M</span>
            <span>PASSIVE EQUATORIAL DESIGN</span>
          </div>
          <div className="text-bronze-400 font-medium">
            AFRICAN ARCHITECTURAL RESEARCH
          </div>
        </div>
      </div>

      {/* Central Hero Headline & Proposition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-studio-900 border border-clay-500/40 text-clay-300 text-xs uppercase tracking-wider font-mono">
              <Compass className="w-3.5 h-3.5 text-clay-400" aria-hidden="true" />
              <span>Sustainable Architecture & Craft Workshop</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-studio-50 leading-[1.1] tracking-tight">
              Rooted in Soil. <br />
              <span className="font-normal italic text-clay-400">Sculpted by Light.</span> <br />
              Built to Endure Eras.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-studio-200 max-w-2xl font-light leading-relaxed">
              BEKO Building Workshop explores passive climate engineering,
              indigenous earth block and mass timber assemblies, and master artisanal craft across
              equatorial Africa and the global south.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onExploreWorks}
                className="group inline-flex items-center space-x-3 bg-studio-100 hover:bg-white text-studio-950 px-6 py-3.5 font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-lg active:scale-95 min-h-[48px] rounded-sm"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-clay-600" aria-hidden="true" />
              </button>

              <a
                href="#estimator"
                className="inline-flex items-center space-x-2 border border-studio-700 hover:border-clay-500 bg-studio-950 hover:bg-studio-900 text-studio-200 hover:text-white px-6 py-3.5 font-medium text-xs uppercase tracking-widest transition-all duration-300 min-h-[48px] rounded-sm"
              >
                <span>Project Scope Engine</span>
                <ArrowUpRight className="w-4 h-4 text-studio-400" aria-hidden="true" />
              </a>

              <button
                onClick={onOpenCommission}
                className="inline-flex items-center text-xs uppercase tracking-widest text-clay-400 hover:text-clay-300 font-semibold underline underline-offset-8 px-2 py-3 transition-colors min-h-[44px]"
              >
                Book Studio Inquiry →
              </button>
            </div>
          </div>

          {/* Right Floating Dossier / Workshop Manifest Card */}
          <div className="lg:col-span-4 bg-studio-900 border border-studio-800 p-6 rounded-sm shadow-2xl relative">
            <div className="absolute -top-3 left-6 px-2.5 py-0.5 bg-clay-500 text-white font-mono text-[10px] uppercase tracking-widest font-semibold">
              Featured Case Study
            </div>

            <div className="flex items-center justify-between border-b border-studio-800 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono text-studio-400 uppercase tracking-wider block">Prototype</span>
                <h2 className="font-serif text-studio-100 text-base font-semibold">Nyirangarama Ridge</h2>
              </div>
              <span className="text-[11px] font-mono text-clay-400 border border-clay-500/40 px-2 py-0.5">
                Kigali, Rwanda
              </span>
            </div>

            <p className="text-xs text-studio-300 leading-relaxed mb-4 font-sans">
              Stabilized volcanic earth blocks pressed with zero kiln firing, cooled passively via stack-effect ventilation light towers.
            </p>

            <div className="grid grid-cols-2 gap-3 text-[11px] font-mono border-t border-studio-800 pt-3 text-studio-300">
              <div className="flex items-center space-x-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                <span>-58% Embodied CO2</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Wind className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>100% Passive Airflow</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-studio-800 flex items-center justify-between text-xs">
              <span className="text-studio-400 font-mono">Structural: CEB Masonry</span>
              <a
                href="#works"
                className="text-clay-400 hover:text-clay-300 font-medium inline-flex items-center space-x-1 py-1"
              >
                <span>Inspect Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-studio-800/80 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="border-l-2 border-clay-500 pl-4">
            <div className="font-serif text-2xl sm:text-3xl text-studio-100 font-medium tracking-tight">
              24<span className="text-clay-400">+</span>
            </div>
            <div className="text-[11px] uppercase tracking-wider text-studio-300 font-sans mt-0.5">
              Built Studies & Sanctuaries
            </div>
          </div>

          <div className="border-l-2 border-studio-700 pl-4">
            <div className="font-serif text-2xl sm:text-3xl text-studio-100 font-medium tracking-tight">
              -48<span className="text-clay-400">%</span>
            </div>
            <div className="text-[11px] uppercase tracking-wider text-studio-300 font-sans mt-0.5">
              Average Embodied Carbon
            </div>
          </div>

          <div className="border-l-2 border-studio-700 pl-4">
            <div className="font-serif text-2xl sm:text-3xl text-studio-100 font-medium tracking-tight">
              100<span className="text-clay-400">%</span>
            </div>
            <div className="text-[11px] uppercase tracking-wider text-studio-300 font-sans mt-0.5">
              Passive Climate Design
            </div>
          </div>

          <div className="border-l-2 border-studio-700 pl-4">
            <div className="font-serif text-2xl sm:text-3xl text-studio-100 font-medium tracking-tight">
              04
            </div>
            <div className="text-[11px] uppercase tracking-wider text-studio-300 font-sans mt-0.5">
              Regional Atelier Hubs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
