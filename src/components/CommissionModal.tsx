import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, MapPin, Building, Mail, Phone, User, Calendar, FileText } from 'lucide-react';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    typology?: string;
    area?: number;
    climate?: string;
    sustainability?: string;
    scope?: string;
    estimatedCostRange?: string;
    projectTitle?: string;
  } | null;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({
  isOpen,
  onClose,
  prefillData,
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    organization: '',
    email: '',
    phone: '',
    projectTitle: '',
    typology: 'Private Residence & Villa',
    location: '',
    area: '650',
    deliveryModel: 'Integrated Workshop EPC (Design + Build + Joinery)',
    timeline: 'Autumn 2025',
    budgetGuidance: '$1,000,000 – $2,500,000 USD',
    notes: '',
  });

  const [submittedDossierId, setSubmittedDossierId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        typology: prefillData.typology || prev.typology,
        area: prefillData.area ? prefillData.area.toString() : prev.area,
        deliveryModel: prefillData.scope || prev.deliveryModel,
        budgetGuidance: prefillData.estimatedCostRange || prev.budgetGuidance,
        projectTitle: prefillData.projectTitle
          ? `Inquiry inspired by ${prefillData.projectTitle}`
          : prev.projectTitle,
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `BBW-COM-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedDossierId(generatedId);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmittedDossierId(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-studio-950/90 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="commission-modal-title"
    >
      <div className="fixed inset-0" onClick={handleResetAndClose} aria-hidden="true"></div>

      <div className="relative z-10 w-full max-w-3xl bg-studio-900 border border-studio-800 shadow-2xl my-4 overflow-hidden rounded-sm max-h-[92dvh] flex flex-col">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-studio-800 bg-studio-950 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-clay-500 animate-pulse" aria-hidden="true"></span>
            <span className="font-mono text-xs text-clay-400 uppercase tracking-widest font-medium">
              Studio Commission Protocol
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-studio-300 hover:text-white border border-studio-800 rounded-sm active:bg-studio-800"
            aria-label="Close commission modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          {submittedDossierId ? (
            /* Confirmation Receipt View */
            <div className="p-6 sm:p-10 space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400" aria-hidden="true">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-clay-400 uppercase tracking-widest block font-medium">
                  Dossier Logged Successfully
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-studio-50">
                  Commission Ingestion Confirmed
                </h3>
                <p className="text-sm text-studio-200 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-studio-100">{formData.clientName}</strong>. Your project brief has been recorded for atelier review.
                </p>
              </div>

              {/* Receipt Summary Box */}
              <div className="bg-studio-950 border border-studio-800 p-5 text-left max-w-md mx-auto space-y-2.5 font-mono text-xs rounded-sm">
                <div className="flex justify-between border-b border-studio-800 pb-2">
                  <span className="text-studio-400">DOSSIER REF:</span>
                  <span className="text-clay-400 font-bold">{submittedDossierId}</span>
                </div>
                <div className="flex justify-between border-b border-studio-800 pb-2">
                  <span className="text-studio-400">PROJECT:</span>
                  <span className="text-studio-100 truncate max-w-[200px]">{formData.projectTitle || 'Bespoke Atelier Commission'}</span>
                </div>
                <div className="flex justify-between border-b border-studio-800 pb-2">
                  <span className="text-studio-400">TYPOLOGY & GFA:</span>
                  <span className="text-studio-100">{formData.typology} ({formData.area} m²)</span>
                </div>
                <div className="flex justify-between border-b border-studio-800 pb-2">
                  <span className="text-studio-400">SITE:</span>
                  <span className="text-studio-100">{formData.location || 'Pending Survey'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-studio-400">STUDIO COORD:</span>
                  <span className="text-studio-100">Kigali & London Hubs</span>
                </div>
              </div>

              <div className="text-xs font-mono text-studio-300 pt-2">
                Next Step: Studio coordination will review this brief and reach out to <strong className="text-studio-100">{formData.email}</strong>.
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="min-h-[48px] px-8 py-3 bg-clay-500 text-white text-xs font-mono uppercase tracking-widest hover:bg-clay-600 transition-colors rounded-sm active:scale-95"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            /* Commission Submission Form */
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
              <div>
                <h3 id="commission-modal-title" className="font-serif text-2xl text-studio-50 mb-1">
                  Initiate Project Commission
                </h3>
                <p className="text-xs text-studio-300 font-sans">
                  Please outline your site parameters, typology, and timeline. Our workshop accepts
                  a selective volume of architectural commissions per calendar cycle.
                </p>
              </div>

              {/* Client Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="client-name" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Full Name / Patron *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
                    <input
                      id="client-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Elena Moreau or Dr. K. Adebayo"
                      className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs pl-9 pr-3 py-2.5 outline-none font-sans rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="client-org" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Organization / Foundation
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
                    <input
                      id="client-org"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Private Estate or Cultural Trust"
                      className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs pl-9 pr-3 py-2.5 outline-none font-sans rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="client-email" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Email Correspondence *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
                    <input
                      id="client-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patron@sanctuary.com"
                      className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs pl-9 pr-3 py-2.5 outline-none font-sans rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="client-phone" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Telephone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
                    <input
                      id="client-phone"
                      name="tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 780 ... / +44 79 ..."
                      className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs pl-9 pr-3 py-2.5 outline-none font-sans rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Project Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-studio-800">
                <div className="sm:col-span-2">
                  <label htmlFor="project-title" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Working Project Title or Intent
                  </label>
                  <input
                    id="project-title"
                    name="projectTitle"
                    type="text"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    placeholder="e.g. Lake Kivu Ridge Sanctuary or Coastal Arts Pavilion"
                    className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs px-3 py-2.5 outline-none font-sans rounded-sm"
                  />
                </div>

                <div>
                  <label htmlFor="project-location" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Site Location (City & Country) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-studio-400" aria-hidden="true" />
                    <input
                      id="project-location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Kigali, Rwanda or Lamu, Kenya"
                      className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs pl-9 pr-3 py-2.5 outline-none font-sans rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project-area" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Gross Built Area (m²)
                  </label>
                  <input
                    id="project-area"
                    name="area"
                    type="number"
                    inputMode="numeric"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 text-xs px-3 py-2.5 outline-none font-sans rounded-sm"
                  />
                </div>

                <div>
                  <label htmlFor="project-timeline" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Target Groundbreaking
                  </label>
                  <input
                    id="project-timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. Autumn 2025"
                    className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 text-xs px-3 py-2.5 outline-none font-sans rounded-sm"
                  />
                </div>

                <div>
                  <label htmlFor="project-budget" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                    Anticipated Budget Framework
                  </label>
                  <input
                    id="project-budget"
                    name="budgetGuidance"
                    type="text"
                    value={formData.budgetGuidance}
                    onChange={(e) => setFormData({ ...formData, budgetGuidance: e.target.value })}
                    className="w-full min-h-[44px] bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 text-xs px-3 py-2.5 outline-none font-sans rounded-sm"
                  />
                </div>
              </div>

              {/* Scope Notes */}
              <div>
                <label htmlFor="project-notes" className="text-[11px] font-mono text-studio-300 uppercase tracking-wider block mb-1.5 font-medium">
                  Topographical Conditions & Vision Notes
                </label>
                <textarea
                  id="project-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share specific site topography, climate considerations, or artisanal material preferences..."
                  className="w-full bg-studio-950 border border-studio-800 focus:border-clay-500 text-studio-100 placeholder-studio-500 text-xs p-3 outline-none font-sans rounded-sm"
                ></textarea>
              </div>

              {/* Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-studio-400">
                  Direct Principal Review // Speculative Atelier Protocol
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] px-6 py-3 bg-clay-500 hover:bg-clay-600 text-white font-medium text-xs uppercase tracking-widest inline-flex items-center justify-center space-x-2 transition-all shadow-lg active:scale-95 disabled:opacity-50 rounded-sm"
                >
                  <span>{isSubmitting ? 'Transmitting Brief...' : 'Transmit Commission Brief'}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
