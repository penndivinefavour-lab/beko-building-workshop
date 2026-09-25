import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Layers, Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireTypology: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireTypology,
}) => {
  const [showBlueprintOverlay, setShowBlueprintOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState<'concept' | 'specs' | 'climate' | 'materials'>('concept');

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-studio-950/90 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-studio-900 border border-studio-800 shadow-2xl overflow-hidden my-4 max-h-[92dvh] flex flex-col rounded-sm">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-studio-800 bg-studio-950">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-clay-400 bg-clay-500/10 border border-clay-500/30 px-2.5 py-1 uppercase tracking-wider font-medium rounded-sm">
              {project.specs.status}
            </span>
            <span className="text-xs font-mono text-studio-400 hidden sm:inline">
              DOSSIER ID: BBW-{project.year}-{project.id.toUpperCase().slice(0, 6)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowBlueprintOverlay(!showBlueprintOverlay)}
              aria-pressed={showBlueprintOverlay}
              className={`min-h-[40px] text-xs font-mono px-3 py-1.5 border rounded-sm transition-all flex items-center space-x-1.5 ${
                showBlueprintOverlay
                  ? 'bg-sky-950 border-sky-400 text-sky-300'
                  : 'bg-studio-900 border-studio-700 text-studio-200 hover:border-studio-500'
              }`}
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{showBlueprintOverlay ? 'Hide CAD' : 'CAD Overlay'}</span>
            </button>

            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-studio-300 hover:text-white border border-studio-700 hover:border-studio-500 transition-colors rounded-sm active:bg-studio-800"
              aria-label="Close project dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1">
          {/* Main Visual Section with Blueprint Overlay Support */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-studio-950 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              width={1400}
              height={600}
              className={`w-full h-full object-cover transition-all duration-500 ${
                showBlueprintOverlay ? 'filter hue-rotate-180 contrast-125 invert-[0.15]' : ''
              }`}
            />

            {/* Blueprint Grid & Architectural Annotations Overlay */}
            {showBlueprintOverlay && (
              <div className="absolute inset-0 bg-sky-950/40 pointer-events-none p-4 sm:p-6 flex flex-col justify-between" aria-hidden="true">
                <div className="grid grid-cols-6 gap-2 w-full h-full border border-sky-400/40 blueprint-grid">
                  <div className="col-span-4 sm:col-span-2 p-2.5 font-mono text-[10px] text-sky-200 bg-sky-950/90 border border-sky-400/30 m-2 self-start rounded-sm">
                    <p className="font-bold border-b border-sky-400/30 pb-1 mb-1">
                      SECTION 04-A // THERMAL STRATA
                    </p>
                    <p>Load Bearing: {project.specs.structuralSystem.slice(0, 32)}...</p>
                    <p>Passive Cooling: Stack-effect flow</p>
                    <p>Delta T: Δ 6.8°C envelope drop</p>
                  </div>

                  <div className="hidden sm:block col-span-2 col-start-5 p-2.5 font-mono text-[10px] text-sky-200 bg-sky-950/90 border border-sky-400/30 m-2 self-end rounded-sm">
                    <p className="font-bold border-b border-sky-400/30 pb-1 mb-1">
                      SOLAR ALIGNMENT
                    </p>
                    <p>Lat: {project.coordinates.lat.toFixed(4)}°</p>
                    <p>Lng: {project.coordinates.lng.toFixed(4)}°</p>
                    <p>Cantilever Overhang: 2,400 mm</p>
                  </div>
                </div>
              </div>
            )}

            {/* Gradient bottom bar overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-studio-900 via-studio-900/80 to-transparent p-4 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-clay-400 uppercase tracking-wider block mb-1">
                    {project.categoryLabel} — {project.location}
                  </span>
                  <h2 id="modal-project-title" className="font-serif text-2xl sm:text-3xl md:text-4xl text-studio-50 font-normal">
                    {project.title}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-studio-300 block">Gross Built Area</span>
                  <span className="font-serif text-xl sm:text-2xl text-studio-100 font-semibold">
                    {project.specs.grossFloorArea}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dossier Navigation Tabs (Mobile touch target >= 44px) */}
          <div className="px-4 sm:px-6 border-b border-studio-800 bg-studio-950 flex space-x-6 overflow-x-auto text-xs uppercase tracking-wider font-mono scrollbar-none" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'concept'}
              onClick={() => setActiveTab('concept')}
              className={`min-h-[48px] border-b-2 transition-all whitespace-nowrap flex items-center ${
                activeTab === 'concept'
                  ? 'border-clay-500 text-clay-400 font-semibold'
                  : 'border-transparent text-studio-300 hover:text-studio-100'
              }`}
            >
              Architectural Concept
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'specs'}
              onClick={() => setActiveTab('specs')}
              className={`min-h-[48px] border-b-2 transition-all whitespace-nowrap flex items-center ${
                activeTab === 'specs'
                  ? 'border-clay-500 text-clay-400 font-semibold'
                  : 'border-transparent text-studio-300 hover:text-studio-100'
              }`}
            >
              Specs & Engineering
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'climate'}
              onClick={() => setActiveTab('climate')}
              className={`min-h-[48px] border-b-2 transition-all whitespace-nowrap flex items-center ${
                activeTab === 'climate'
                  ? 'border-clay-500 text-clay-400 font-semibold'
                  : 'border-transparent text-studio-300 hover:text-studio-100'
              }`}
            >
              Passive Climate Strategy
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'materials'}
              onClick={() => setActiveTab('materials')}
              className={`min-h-[48px] border-b-2 transition-all whitespace-nowrap flex items-center ${
                activeTab === 'materials'
                  ? 'border-clay-500 text-clay-400 font-semibold'
                  : 'border-transparent text-studio-300 hover:text-studio-100'
              }`}
            >
              Materiality & Tectonics
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-5 sm:p-8 space-y-6">
            {activeTab === 'concept' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-studio-100 font-medium">The Spatial Narrative</h3>
                  <p className="text-studio-200 leading-relaxed text-sm sm:text-base font-sans">
                    {project.description}
                  </p>
                  <p className="text-studio-300 leading-relaxed text-sm sm:text-base font-sans">
                    {project.architecturalConcept}
                  </p>
                </div>

                {project.quote && (
                  <div className="border-l-2 border-clay-500 pl-4 py-2 bg-studio-950/60 italic text-studio-200 text-sm">
                    "{project.quote.text}"
                    <span className="block not-italic font-mono text-xs text-clay-400 mt-1">
                      — {project.quote.author}
                    </span>
                  </div>
                )}

                {/* Study Distinctions */}
                {project.specs.awards && project.specs.awards.length > 0 && (
                  <div className="bg-studio-950 p-4 border border-studio-800 rounded-sm">
                    <div className="flex items-center space-x-2 text-xs font-mono text-bronze-400 uppercase tracking-wider mb-2 font-medium">
                      <Award className="w-4 h-4" aria-hidden="true" />
                      <span>Atelier Recognition & Typology Research</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-studio-200">
                      {project.specs.awards.map((award, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-clay-500 rounded-full" aria-hidden="true"></span>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-studio-100 font-medium">Technical Specification Sheet</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-studio-950 p-4 border border-studio-800">
                    <span className="text-[10px] font-mono text-studio-400 uppercase block">Client / Commission</span>
                    <span className="text-sm font-medium text-studio-100">{project.specs.client}</span>
                  </div>
                  <div className="bg-studio-950 p-4 border border-studio-800">
                    <span className="text-[10px] font-mono text-studio-400 uppercase block">Location & Coordinates</span>
                    <span className="text-sm font-medium text-studio-100">
                      {project.specs.location}, {project.specs.country} ({project.coordinates.lat.toFixed(2)}°, {project.coordinates.lng.toFixed(2)}°)
                    </span>
                  </div>
                  <div className="bg-studio-950 p-4 border border-studio-800">
                    <span className="text-[10px] font-mono text-studio-400 uppercase block">Typology Classification</span>
                    <span className="text-sm font-medium text-studio-100">{project.specs.typology}</span>
                  </div>
                  <div className="bg-studio-950 p-4 border border-studio-800">
                    <span className="text-[10px] font-mono text-studio-400 uppercase block">Gross Built Area (GFA)</span>
                    <span className="text-sm font-medium text-studio-100">{project.specs.grossFloorArea}</span>
                  </div>
                  <div className="bg-studio-950 p-4 border border-studio-800 md:col-span-2">
                    <span className="text-[10px] font-mono text-studio-400 uppercase block">Structural Engineering System</span>
                    <span className="text-sm font-medium text-studio-100">{project.specs.structuralSystem}</span>
                  </div>
                  <div className="bg-studio-950 p-4 border border-clay-500/40 md:col-span-2">
                    <span className="text-[10px] font-mono text-clay-400 uppercase block font-medium">Embodied Carbon Benchmark</span>
                    <span className="text-sm font-medium text-clay-300">{project.specs.embodiedCarbonSaving}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'climate' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-studio-100 font-medium">
                    Climate Physics & Passive Strategies
                  </h3>
                  <p className="text-xs font-mono text-clay-400 mt-1 uppercase">
                    Zone: {project.specs.climateZone}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.specs.passiveStrategies.map((strategy, idx) => (
                    <div key={idx} className="bg-studio-950 p-4 border border-studio-800 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-clay-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="text-xs font-mono text-studio-400 uppercase block">Strategy 0{idx + 1}</span>
                        <p className="text-sm text-studio-200 mt-0.5">{strategy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-studio-950 p-4 border border-studio-800 text-xs font-mono text-studio-300">
                  <strong className="text-studio-100 block mb-1">Workshop Thermodynamics Principle:</strong>
                  All BEKO structures prioritize envelope self-regulation, deep eave cantilevers, and natural stack chimneys prior to introducing active mechanical cooling.
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-studio-100 font-medium">Regional Materials Palette</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.specs.materials.map((mat, idx) => (
                    <div key={idx} className="p-3 bg-studio-950 border border-studio-800 flex items-center space-x-3">
                      <div className="w-3 h-3 bg-clay-500 rounded-sm shrink-0" aria-hidden="true"></div>
                      <span className="text-sm text-studio-200 font-sans">{mat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-clay-950/40 border border-clay-500/40 text-xs text-studio-200 rounded-sm">
                  <span className="font-mono text-clay-400 block uppercase mb-1 font-semibold">Key Innovation:</span>
                  {project.highlightFeature}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-studio-800 bg-studio-950 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-studio-400">
            Year: <span className="text-studio-200">{project.year}</span> | Workshop Lead: <span className="text-studio-200">BEKO Atelier</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => onInquireTypology(project)}
              className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 bg-clay-500 hover:bg-clay-600 text-white text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95 rounded-sm"
            >
              <span>Inquire This Typology</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={onClose}
              className="min-h-[44px] px-4 py-2.5 border border-studio-700 hover:border-studio-500 text-studio-200 text-xs uppercase tracking-wider font-medium transition-colors rounded-sm active:bg-studio-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
