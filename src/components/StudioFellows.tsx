import React, { useState, useEffect } from 'react';
import { Users, Mail, Phone, Clock } from 'lucide-react';
import { teamMembers, studioOffices } from '../data/team';

export const StudioFellows: React.FC = () => {
  const [cityTimes, setCityTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const timeKigali = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Kigali',
        hour: '2-digit',
        minute: '2-digit',
      }).format(now);
      const timeLagos = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
      }).format(now);
      const timeNairobi = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
      }).format(now);
      const timeLondon = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
      }).format(now);

      setCityTimes({
        Kigali: timeKigali,
        Lagos: timeLagos,
        Nairobi: timeNairobi,
        London: timeLondon,
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="atelier" className="py-20 bg-studio-950 border-t border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-studio-800/80 pb-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Workshop Fellows & Leadership</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 tracking-tight">
              The Atelier & Guilds
            </h2>
            <p className="text-sm sm:text-base text-studio-300 max-w-xl">
              An interdisciplinary collective of architects, thermodynamicists, structural engineers,
              and multi-generational vernacular craft masters.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-studio-400">
            Practice Structure: <span className="text-clay-400 font-semibold">4 Regional Hubs</span>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-studio-900 border border-studio-800 hover:border-clay-500/60 p-6 flex flex-col justify-between transition-all duration-300 group rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-studio-400 uppercase pb-3 mb-4 border-b border-studio-800">
                  <span>{member.studioLocation}</span>
                  <span className="text-clay-400 font-medium">ATELIER FELLOW</span>
                </div>

                <h3 className="font-serif text-lg text-studio-100 font-medium group-hover:text-clay-300 transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-clay-400 block mb-1">
                  {member.role}
                </span>
                <span className="text-[11px] font-mono text-studio-400 block mb-3">
                  {member.credentials}
                </span>

                <p className="text-xs text-studio-300 font-sans leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-studio-800 space-y-2 text-[11px] font-mono text-studio-300">
                <div>
                  <span className="text-studio-400 block text-[10px] uppercase">Specialization:</span>
                  <span className="text-studio-200">{member.focus}</span>
                </div>
                <div>
                  <span className="text-studio-400 block text-[10px] uppercase">Key Lead:</span>
                  <span className="text-clay-400">{member.publicationsOrProjects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Locations Section */}
        <div className="bg-studio-900 border border-studio-800 p-5 sm:p-8 md:p-10 rounded-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-clay-400 uppercase tracking-widest block mb-1">
              // Continental Presence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-studio-50">
              Workshop Hubs & Fabrication Ateliers
            </h3>
            <p className="text-xs sm:text-sm text-studio-300 mt-2">
              Our active fabrication yards and testing workshops operate directly on-ground
              in regional centers to maintain hyper-local material supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioOffices.map((office) => {
              const localTime = cityTimes[office.city] || '--:--';
              return (
                <div
                  key={office.city}
                  className="bg-studio-950 p-5 sm:p-6 border border-studio-800 flex flex-col justify-between space-y-4 rounded-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-clay-400 mb-2">
                      <span className="text-lg font-serif text-studio-100 font-medium">{office.city}</span>
                      <span className="flex items-center text-studio-300 font-mono">
                        <Clock className="w-3.5 h-3.5 mr-1 text-studio-400" aria-hidden="true" />
                        {localTime}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-studio-400 block mb-2">
                      {office.country} — {office.coordinates}
                    </span>

                    <p className="text-xs font-mono text-clay-400/90 mb-2 font-medium">
                      {office.role}
                    </p>

                    <p className="text-xs text-studio-300 font-sans mb-3">
                      {office.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-studio-900 text-xs font-mono space-y-1 text-studio-300">
                    <a
                      href={`tel:${office.tel.replace(/\s+/g, '')}`}
                      className="min-h-[44px] flex items-center space-x-2 text-studio-300 hover:text-white"
                      aria-label={`Call ${office.city} studio: ${office.tel}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-clay-400 shrink-0" aria-hidden="true" />
                      <span>{office.tel}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="min-h-[44px] flex items-center space-x-2 text-studio-300 hover:text-clay-300 truncate"
                      aria-label={`Email ${office.city} studio: ${office.email}`}
                    >
                      <Mail className="w-3.5 h-3.5 text-clay-400 shrink-0" aria-hidden="true" />
                      <span className="truncate">{office.email}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
