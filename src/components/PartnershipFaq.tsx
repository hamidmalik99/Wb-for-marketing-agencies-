import React, { useState } from "react";
import { ChevronDown, ChevronRight, HelpCircle, Shield, Award, Users, Percent, Clock } from "lucide-react";

export default function PartnershipFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const FAQS = [
    {
      q: "What types of projects do you accept?",
      a: "I accept all projects that align with my core engineering skillset. This includes custom WordPress and WooCommerce system designs, Webflow/Shopify storefronts, custom React/TypeScript single-page applications, advanced API integrations, webhook handlers, and automated content or AI pipelines."
    },
    {
      q: "How do you guarantee code quality and post-launch maintenance?",
      a: "Every project is developed to modern coding standards, ensuring standard page-speed scores, cross-browser responsiveness, clean semantic structures, and fully type-safe logic when using React/TypeScript. I provide a dedicated 30-day post-launch support window to fix any issues and ensure smooth operation."
    },
    {
      q: "What is your usual turnaround time?",
      a: "Most website builds are delivered within 5–10 business days. Simpler landing pages or custom webhook fixes can be faster, while complex e-commerce portals or deep custom system integrations take a bit longer. I always provide a clear and realistic timeline before starting the work."
    },
    {
      q: "Do you support custom API integrations or custom plugin development?",
      a: "Yes, absolutely. I build custom WordPress plugins, write custom REST endpoint handlers, integrate CRM/appointment systems, connect payment gateways (Stripe/PayPal), and implement third-party automated workflows (such as Make/Zapier/AI pipelines) to simplify business management."
    }
  ];

  const VALUES = [
    {
      icon: <Users className="w-5 h-5 text-green-500" />,
      title: "Flexible Project Capacity",
      desc: "Whether you need a quick feature fix, a brand new site build, or complex backend workflows, I integrate smoothly to act as your reliable technical resource."
    },
    {
      icon: <Percent className="w-5 h-5 text-green-500" />,
      title: "Transparent & Predictable Pricing",
      desc: "I provide clear, fixed-price quotes up front based on your design and requirements. No hidden charges, no unexpected hourly creep — just predictable project pricing."
    },
    {
      icon: <Award className="w-5 h-5 text-green-500" />,
      title: "Direct Developer Contact",
      desc: "No communication gaps, no account managers, and no middle-men. You collaborate directly with the senior engineer writing the code for fast, precise feedback."
    }
  ];

  return (
    <div className="space-y-6" id="faq-root">
      
      {/* Intro section */}
      <div className="border border-green-950/40 bg-green-950/5 p-4 rounded-lg space-y-1">
        <h3 className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
          <Shield className="w-4 h-4" />
          Quality-Assured Project Delivery
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          I operate as an independent systems engineer specializing in end-to-end website builds, customized web app architectures, and advanced API workflow automation. I collaborate directly with corporate clients, business owners, and digital teams around the world.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VALUES.map((val, idx) => (
          <div
            key={idx}
            className="border border-gray-900 bg-gray-950/40 p-4 rounded-lg space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="p-1.5 w-fit rounded bg-gray-950 border border-gray-900">
                {val.icon}
              </div>
              <h4 className="text-xs font-bold text-gray-200 font-mono tracking-tight">{val.title}</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-mono">
                {val.desc}
              </p>
            </div>
            <div className="text-[10px] text-green-600 font-mono mt-2 font-bold uppercase tracking-wider">
              [Value 0{idx + 1}]
            </div>
          </div>
        ))}
      </div>

      {/* Core Project Stats */}
      <div className="bg-green-950/10 border border-green-900/30 rounded p-4 flex flex-wrap gap-4 justify-around text-center">
        <div className="space-y-0.5">
          <span className="block text-lg font-bold text-green-400 font-mono">68+</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Deployed Domains</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-lg font-bold text-green-400 font-mono">100%</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Code Handover Guarantee</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-lg font-bold text-green-400 font-mono">EST/PST & AEST</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Hours Alignment</span>
        </div>
        <div className="space-y-0.5 animate-pulse">
          <span className="block text-lg font-bold text-green-400 font-mono">Active</span>
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-wider block">Accepting Scopes</span>
        </div>
      </div>

      {/* FAQs Collapsible list */}
      <div className="space-y-3">
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block pl-1">
          Frequently Answered Questions
        </span>
        <div className="border border-gray-900 bg-gray-950 rounded-lg overflow-hidden divide-y divide-gray-900">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-gray-950">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex justify-between items-center gap-4 text-xs font-mono font-medium text-gray-300 hover:text-green-400 transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-green-600 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronDown className="w-4 h-4 text-green-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-gray-400 leading-relaxed font-mono border-t border-gray-900/50 bg-black/25">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Response SLA badge */}
      <div className="border border-gray-900 bg-gray-950 p-4 rounded-lg flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-green-500 shrink-0" />
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-gray-200 block">SLA Response Window</span>
            <p className="text-[11px] text-gray-500 font-mono">I answer briefs and support updates within 4 hours during EST, PST, and AEST business hours.</p>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-green-950/20 border border-green-900/30 text-[9px] text-green-400 font-mono uppercase font-semibold shrink-0">
          Global Coverage
        </span>
      </div>

    </div>
  );
}
