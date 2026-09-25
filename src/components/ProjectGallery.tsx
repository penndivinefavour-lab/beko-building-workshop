import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, Grid, List, MapPin, Compass, X } from 'lucide-react';
import { Project } from '../types';
import { projects, projectFilters } from '../data/projects';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onSelectProject,
  onInquireProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'ledger'>('grid');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.specs.materials.some((m) => m.toLowerCase().includes(q)) ||
        project.specs.typology.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="works" className="py-20 bg-studio-950 relative border-t border-studio-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-studio-800/80 pb-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Selected Works & Case Studies // 2020–2025</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 tracking-tight">
              Selected Architectural Works
            </h2>
            <p className="text-sm sm:text-base text-studio-300 max-w-xl">
              Monolithic, climate-attuned structures that dialogue with the topography,
              geology, and cultural rituals of their regions.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-studio-400">
            Cataloged: <span className="text-clay-400 font-semibold">{filteredProjects.length}</span> of {projects.length} Works
          </div>
        </div>

        {/* Controls Bar: Filters, Search, and View Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist" aria-label="Filter by project typology">
            {projectFilters.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selectedCategory === tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`min-h-[44px] px-4 py-2.5 text-xs uppercase tracking-wider font-mono transition-all whitespace-nowrap border rounded-sm flex items-center ${
                  selectedCategory === tab.id
                    ? 'bg-clay-500 text-white border-clay-500 shadow-sm'
                    : 'bg-studio-900 text-studio-300 border-studio-800 hover:border-studio-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Layout toggle */}
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 sm:w-72">
              <label htmlFor="project-search" className="sr-only">Search projects</label>
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
              <input
                id="project-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by city, material, stone..."
                className="w-full min-h-[44px] bg-studio-900 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-400 text-xs pl-9 pr-10 py-2.5 outline-none font-sans rounded-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-studio-400 hover:text-studio-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Layout Toggle (Desktop & Tablet) */}
            <div className="hidden sm:flex border border-studio-800 bg-studio-900 p-0.5 rounded-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`min-w-[40px] min-h-[40px] flex items-center justify-center ${
                  viewMode === 'grid' ? 'bg-studio-800 text-white' : 'text-studio-400 hover:text-studio-200'
                }`}
                title="Grid Presentation"
                aria-label="Grid layout"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('ledger')}
                className={`min-w-[40px] min-h-[40px] flex items-center justify-center ${
                  viewMode === 'ledger' ? 'bg-studio-800 text-white' : 'text-studio-400 hover:text-studio-200'
                }`}
                title="Monograph Ledger Table"
                aria-label="Table ledger layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-studio-800 p-8">
            <p className="font-serif text-lg text-studio-200">No architectural works match your query.</p>
            <p className="text-xs font-mono text-studio-400 mt-2">
              Try searching for "earth", "timber", "Kigali", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 min-h-[44px] px-5 py-2.5 bg-studio-900 border border-studio-700 text-xs uppercase font-mono text-studio-200 hover:text-white rounded-sm active:bg-studio-800"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid View Presentation */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col bg-studio-900 border border-studio-800 hover:border-clay-500/70 transition-all duration-300 overflow-hidden shadow-xl rounded-sm"
              >
                {/* Image Container with Hover Scale */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-studio-950 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.92] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" aria-hidden="true"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    <span className="bg-studio-950/95 border border-studio-700 text-[10px] font-mono text-studio-200 px-2.5 py-1 uppercase tracking-wider rounded-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-clay-600 text-white text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-medium rounded-sm">
                      {project.specs.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-studio-200">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-clay-400" aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="bg-studio-950/90 px-2 py-0.5 text-[11px] text-studio-300 rounded-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-serif text-xl text-studio-50 font-medium group-hover:text-clay-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-studio-300 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Highlights / Specs Strip */}
                  <div className="space-y-2.5 pt-3 border-t border-studio-800 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-studio-300">
                      <span>Area: <strong className="text-studio-100">{project.specs.grossFloorArea}</strong></span>
                      <span className="text-clay-400 font-medium">{project.specs.embodiedCarbonSaving}</span>
                    </div>

                    <p className="text-[11px] text-studio-400 italic line-clamp-1">
                      {project.highlightFeature}
                    </p>
                  </div>

                  {/* Card Action Buttons (Ensuring 44px touch targets on mobile) */}
                  <div className="pt-2 flex items-center justify-between border-t border-studio-800/80">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="min-h-[44px] text-xs uppercase tracking-wider font-mono text-clay-400 hover:text-clay-300 inline-flex items-center space-x-1 font-semibold group/btn"
                    >
                      <span>View Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                    </button>

                    <button
                      onClick={() => onInquireProject(project)}
                      className="min-h-[44px] text-xs font-mono text-studio-300 hover:text-white underline underline-offset-4 flex items-center"
                    >
                      Inquire Typology
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Monograph Ledger / Table View */}
        {viewMode === 'ledger' && (
          <div className="border border-studio-800 overflow-x-auto bg-studio-900 rounded-sm">
            <table className="w-full text-left border-collapse text-xs font-mono min-w-[650px]">
              <thead>
                <tr className="border-b border-studio-800 bg-studio-950 text-studio-300 text-[11px] uppercase tracking-wider">
                  <th className="p-4">Project Title</th>
                  <th className="p-4">Typology</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Year</th>
                  <th className="p-4">GFA</th>
                  <th className="p-4">Carbon Impact</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Dossier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-studio-800/60">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="hover:bg-studio-850 cursor-pointer transition-colors"
                  >
                    <td className="p-4 font-serif text-sm font-medium text-studio-100">
                      {project.title}
                    </td>
                    <td className="p-4 text-studio-200">{project.categoryLabel}</td>
                    <td className="p-4 text-studio-300">{project.location}</td>
                    <td className="p-4 text-studio-200">{project.year}</td>
                    <td className="p-4 text-studio-100">{project.specs.grossFloorArea}</td>
                    <td className="p-4 text-clay-400">{project.specs.embodiedCarbonSaving}</td>
                    <td className="p-4">
                      <span className="text-[10px] px-2 py-0.5 bg-studio-800 border border-studio-700 text-studio-200 rounded">
                        {project.specs.status}
                      </span>
                    </td>
                    <td className="p-4 text-right text-clay-400 hover:text-clay-300">
                      <span className="inline-flex items-center space-x-1 min-h-[44px]">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
