import React, { useState, useEffect } from 'react';
import { BookOpen, Download, CheckCircle2, X } from 'lucide-react';
import { publications } from '../data/publications';
import { Publication } from '../types';

export const MonographsSection: React.FC = () => {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Lock body scroll and handle Escape key for abstract modal
  useEffect(() => {
    if (!selectedPub) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPub(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPub]);

  const handleDownload = (pub: Publication) => {
    // Generate real client-side research paper summary download
    const paperContent = `# ${pub.title}
## ${pub.subtitle}
Year: ${pub.year}
Publisher / Series: ${pub.outlet}
Category: ${pub.category}

---
### ABSTRACT
${pub.abstract}

### RESEARCH HIGHLIGHTS
- Bioclimatic passive envelope testing across sub-Saharan microclimates.
- Empirically measured thermal mass retention and stack-effect ventilation.
- Material formulations: Stabilized compressed earth, mass timber eucalyptus, oyster-shell pozzolana.

BEKO Building Workshop Architectural Research Press
https://beko-building-workshop.demo
`;

    const blob = new Blob([paperContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pub.id}-beko-monograph.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(pub.id);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <section id="monographs" className="py-20 bg-studio-950 border-t border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-studio-800/80 pb-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Architectural Research & Monographs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 tracking-tight">
              Publications & Discourse
            </h2>
            <p className="text-sm sm:text-base text-studio-300 max-w-xl">
              We publish our building physics data, carbon metrics, and structural
              tests openly to advance the decarbonization of equatorial architecture.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-studio-400">
            Open Access: <span className="text-clay-400 font-semibold">{publications.length} Papers & Monographs</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="bg-studio-900 border border-studio-800 hover:border-clay-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-studio-400 pb-3 mb-4 border-b border-studio-800">
                  <span className="text-clay-400 uppercase font-medium">{pub.category}</span>
                  <span>{pub.year} // {pub.readTime}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-studio-50 font-normal group-hover:text-clay-300 transition-colors mb-2">
                  {pub.title}
                </h3>
                <h4 className="text-xs font-mono text-studio-300 mb-4">
                  {pub.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-studio-300 leading-relaxed font-sans mb-6">
                  {pub.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-studio-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-studio-400 truncate max-w-[220px]">
                  {pub.outlet}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPub(pub)}
                    className="min-h-[44px] px-3 py-2 text-xs uppercase font-mono text-studio-200 hover:text-white flex items-center"
                  >
                    Read Abstract
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(pub)}
                    className="min-h-[44px] inline-flex items-center space-x-1.5 text-xs font-mono px-3.5 py-2 bg-studio-950 border border-studio-700 hover:border-clay-500 text-clay-400 hover:text-clay-300 transition-colors rounded-sm active:bg-studio-900"
                    aria-label={`Download research document for ${pub.title}`}
                  >
                    {downloadSuccess === pub.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-400 font-medium">Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Download Paper</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read Abstract Modal */}
        {selectedPub && (
          <div
            className="fixed inset-0 z-50 bg-studio-950/90 flex items-center justify-center p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="abstract-modal-title"
          >
            <div className="fixed inset-0" onClick={() => setSelectedPub(null)} aria-hidden="true"></div>

            <div className="relative z-10 bg-studio-900 border border-studio-800 max-w-xl w-full p-6 sm:p-8 shadow-2xl rounded-sm">
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-studio-400 hover:text-white"
                aria-label="Close abstract dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-clay-400 uppercase tracking-widest block mb-2 font-medium">
                {selectedPub.category} — {selectedPub.year}
              </span>
              <h3 id="abstract-modal-title" className="font-serif text-2xl text-studio-50 mb-2">
                {selectedPub.title}
              </h3>
              <p className="text-xs font-mono text-studio-400 mb-6">
                Published by: {selectedPub.outlet}
              </p>

              <div className="space-y-4 text-sm text-studio-200 leading-relaxed font-sans border-t border-b border-studio-800 py-4 my-4">
                <p>{selectedPub.abstract}</p>
                <p className="text-xs text-studio-400 font-mono">
                  Full whitepaper includes joinery sections, 24-month temperature logging sensor logs, and compressive strength curves for pozzolanic earthen blocks.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-xs font-mono text-studio-400">{selectedPub.readTime}</span>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(selectedPub);
                    setSelectedPub(null);
                  }}
                  className="min-h-[44px] px-5 py-2.5 bg-clay-500 hover:bg-clay-600 text-white text-xs uppercase font-mono tracking-wider flex items-center space-x-2 rounded-sm active:scale-95"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download Complete Paper</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
