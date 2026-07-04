import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { DEV_NAME, DEV_TITLE, DEV_BIO, SKILL_GROUPS } from "./data";
import ProjectList from "./components/ProjectList";
import PartnershipFaq from "./components/PartnershipFaq";

export default function App() {
  const [contactMessage, setContactMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim() || !contactEmail.trim()) return;

    setIsSubmitting(true);
    // Simulate secure delivery log
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setContactMessage("");
      setContactEmail("");
      setContactName("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#e5e7eb] flex flex-col justify-between font-mono selection:bg-green-500 selection:text-black" id="app-root">
      
      {/* Top clean navigation / header status */}
      <header className="border-b border-gray-900 bg-black/40 backdrop-blur px-4 py-3 sm:px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-200 tracking-tight font-mono">
              <span className="text-green-400 font-bold">Portfolio</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-gray-400 font-mono">
            <span className="hidden sm:inline text-gray-600">EST/PST & AEST Hours Alignment</span>
            <a
              href="mailto:hamid@hamidbuilds.dev"
              className="hover:text-green-400 transition flex items-center gap-1 cursor-pointer font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-green-500" />
              info@hamidbuilds.dev
            </a>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left column: Profile and Skills sidebar */}
        <section className="lg:col-span-4 space-y-6" id="sidebar-section">
          
          {/* Developer identity and short bio */}
          <div className="border border-gray-800 bg-gray-900/10 p-5 rounded-lg space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase block font-mono">
                Available for Contract Hire
              </span>
              <h1 className="text-xl font-bold text-gray-100 tracking-tight font-mono">{DEV_NAME}</h1>
              <p className="text-xs font-bold text-green-400 tracking-tight font-mono">{DEV_TITLE}</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-mono">
              {DEV_BIO}
            </p>
            
            {/* Timezone & Working Hours Matrix */}
            <div className="bg-black/40 border border-gray-900 rounded p-3.5 space-y-2">
              <span className="text-[9px] text-green-500 font-bold uppercase tracking-wider block font-mono">
                Working Hours Alignment
              </span>
              <div className="space-y-1.5 text-[11px] font-mono text-gray-400">
                <div className="flex justify-between border-b border-gray-950 pb-1">
                  <span>🇺🇸 EST (New York)</span>
                  <span className="text-gray-300">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-950 pb-1">
                  <span>🇺🇸 PST (Los Angeles)</span>
                  <span className="text-gray-300">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>🇦🇺 AEST (Sydney/Melb)</span>
                  <span className="text-green-400 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills List */}
          <div className="border border-gray-800 bg-gray-900/10 p-5 rounded-lg space-y-4">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-mono">
              Technical Skill Matrix
            </span>
            <div className="space-y-4">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="text-[10px] text-green-500 font-bold tracking-wider font-mono uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-gray-950 border border-gray-800 text-[10px] text-gray-400 font-mono"
                        title={`Proficiency: ${skill.level}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Right column: Main Interactive Workspace */}
        <section className="lg:col-span-8 flex flex-col gap-6" id="workspace-section">
          
          {/* Main stacked viewport */}
          <div className="flex-1 bg-black/10 border border-gray-900 rounded-lg p-5 space-y-8">
            <ProjectList />
            <div className="border-t border-gray-900 pt-8">
              <PartnershipFaq />
            </div>
          </div>

          {/* Bottom direct CTA box: Scoping call / secure contact form */}
          <div className="border border-gray-800 bg-gray-900/10 p-5 rounded-lg space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider block font-mono">
                Contact
              </span>
              <h2 className="text-sm font-semibold text-gray-200">
                🚀 Have a project idea, custom web design, or workflow to build?
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                Send me the details or brief. I'll get back to you with a direct response, a fixed price, and an honest timeline within 4 business hours. No spam, no sales calls.
              </p>
            </div>

            {/* Terminal Contact form */}
            <form onSubmit={handleContactSubmit} className="space-y-3" id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your Name / Company"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="bg-gray-950 border border-gray-800 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition"
                />
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="bg-gray-950 border border-gray-800 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition animate-fadeIn"
                />
                <input
                  id="contact-msg"
                  type="text"
                  required
                  placeholder="E.g., WordPress site with Make.com webhook"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="bg-gray-950 border border-gray-800 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition"
                />
              </div>
              <div className="flex justify-between items-center gap-3">
                <span className="text-[10px] text-gray-500 font-mono">
                  * All briefs and requirements are handled with complete confidentiality.
                </span>
                <button
                  id="send-contact-btn"
                  type="submit"
                  disabled={isSubmitting || !contactEmail || !contactMessage || !contactName}
                  className="flex items-center gap-2 px-4 py-2 bg-green-900/20 hover:bg-green-900/40 text-green-400 border border-green-700/50 hover:border-green-500 rounded text-xs font-semibold cursor-pointer font-mono transition disabled:opacity-40 whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "TRANSMITTING..." : "SEND BRIEF →"}
                </button>
              </div>
            </form>

            {isSuccess && (
              <div className="p-3 border border-green-900 bg-green-950/20 text-green-400 rounded text-xs font-mono" id="contact-success">
                [SUCCESS] Brief dispatch signal received. Hamid will reply directly at {contactEmail} within 4 hours. 👋
              </div>
            )}
          </div>

        </section>

      </main>

      {/* Humble Footer */}
      <footer className="border-t border-gray-950 bg-black/60 py-4 px-6 text-center text-xs text-gray-600 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Hamid. Deployed on secure server-side infrastructure for global clients and partners.</span>
          <span className="text-gray-700">EST/PST & AEST Hours Support Coverage</span>
        </div>
      </footer>

    </div>
  );
}
