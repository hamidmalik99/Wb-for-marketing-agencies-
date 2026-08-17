import { ArrowUpRight, Menu, X, Check, Mail, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HAMID_PROFILE } from '../data/projectsData';

interface NavbarProps {
  onOpenContact: (prefillSubject?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export default function Navbar({ onOpenContact, onNavigateTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HAMID_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: 'Projects', target: 'projects-section' },
    { label: 'About', target: 'about-section' },
    { label: 'Case Studies', target: 'projects-section' },
    { label: 'Process', target: 'process-section' },
    { label: 'Estimator', target: 'estimator-section' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
          : 'bg-transparent border-b border-white/5 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Name & Title in Bold Typography */}
        <button
          id="nav-brand-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group text-left flex items-center gap-3 text-white transition-all focus:outline-hidden"
        >
          <div className="w-9 h-9 bg-white/5 border border-white/10 text-[#CCFF00] flex items-center justify-center font-black text-sm tracking-tighter group-hover:border-[#CCFF00] transition-colors">
            HA
          </div>
          <div>
            <div className="text-xl font-bold tracking-tighter text-white leading-none">
              HAMID ALI ASAD
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CCFF00] mt-1">
              Websites & Automations
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-neutral-400 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onNavigateTo(link.target)}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => onOpenContact()}
            className="text-[#CCFF00] hover:text-[#e5ff66] font-bold transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA and Availability */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Quick Copy Email */}
          <button
            id="nav-copy-email-btn"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span className="text-[#CCFF00]">Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Get In Touch Pill Button */}
          <button
            id="nav-get-in-touch-btn"
            onClick={() => onOpenContact()}
            className="flex items-center gap-2 px-5 py-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black text-[11px] font-black uppercase tracking-widest rounded-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="nav-mobile-contact-btn"
            onClick={() => onOpenContact()}
            className="px-3.5 py-1.5 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest rounded-sm"
          >
            Contact
          </button>
          <button
            id="nav-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 mb-1 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#CCFF00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-ping"></span>
              Available for AU / UK / US projects
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateTo(link.target);
                }}
                className="text-left py-2 text-sm uppercase tracking-widest font-semibold text-neutral-300 hover:text-[#CCFF00] transition-all"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 bg-[#CCFF00] text-black text-center font-black uppercase tracking-widest text-xs rounded-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 border border-white/10"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#CCFF00]" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : `Copy ${HAMID_PROFILE.email}`}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
