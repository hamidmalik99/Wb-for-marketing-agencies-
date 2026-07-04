import React, { useState } from "react";
import { Sparkles, Copy, Check, Terminal, Code2, Clock, Play } from "lucide-react";
import { AnalysisResponse } from "../types";

export default function ProposalTool() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Pre-fill button options for clients to test easily
  const PREFILLS = [
    {
      title: "Full-stack Developer for Automation Agency",
      desc: "Looking for an experienced React & Node.js developer to integrate the Gemini API for content generation and set up automated workflows connecting Webflow to Airtable via webhooks. Must know how to handle API rate limiting and write clean TypeScript code."
    },
    {
      title: "AI Chatbot Integration",
      desc: "We need to connect our support team with an intelligent chatbot on WhatsApp. The bot should answer customer inquiries based on our corporate PDF guides. We prefer a Node.js backend using vector database search."
    }
  ];

  const handlePrefill = (title: string, desc: string) => {
    setJobTitle(title);
    setJobDescription(desc);
  };

  const startLoaderAnimation = () => {
    setLoadingStep(0);
    const steps = [
      "Connecting to server-side API proxy...",
      "Analyzing job description context...",
      "Synthesizing customized web architecture...",
      "Formulating high-converting cover letter...",
      "Assembling timeline milestones & stack suggestions..."
    ];
    
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < steps.length) {
        setLoadingStep(current);
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return interval;
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);
    const loaderInterval = startLoaderAnimation();

    try {
      const response = await fetch("/api/analyze-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, jobDescription }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with analysis server.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while generating the proposal.");
    } finally {
      clearInterval(loaderInterval);
      setLoading(false);
    }
  };

  const copyProposal = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadingMessages = [
    "Connecting to server-side API proxy...",
    "Analyzing job description context...",
    "Synthesizing customized web architecture...",
    "Formulating high-converting cover letter...",
    "Assembling timeline milestones & stack suggestions..."
  ];

  return (
    <div className="space-y-6" id="proposal-tool-root">
      {/* Introduction */}
      <div className="border border-green-950/40 bg-green-950/5 p-4 rounded-lg space-y-2">
        <h3 className="text-sm font-semibold text-green-400 flex items-center gap-2">
          <Terminal className="w-4 h-4" id="terminal-icon" />
          Interactive Client Demo: AI Strategy & Proposal Engine
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          This live tool demonstrates my ability to build **secure, server-side AI integrations**. 
          Paste any Upwork job description below. The backend securely accesses the Gemini API to 
          parse technical requirements, formulate an expert-level solution architecture, recommend 
          an automation stack, and craft an authentic, direct, high-converting cover letter.
        </p>
      </div>

      {/* Prefills */}
      <div className="space-y-2">
        <span className="text-xs text-gray-500 font-medium">Quick Test Templates (Click to fill):</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {PREFILLS.map((p, idx) => (
            <button
              key={idx}
              id={`prefill-btn-${idx}`}
              type="button"
              onClick={() => handlePrefill(p.title, p.desc)}
              className="text-left p-3 rounded-lg border border-gray-800 bg-gray-900/40 hover:border-green-800 hover:bg-green-950/10 transition text-xs space-y-1 group"
            >
              <span className="font-semibold text-gray-300 group-hover:text-green-400 flex items-center gap-1.5">
                <Play className="w-3 h-3 text-green-500 opacity-60" />
                {p.title}
              </span>
              <p className="text-gray-500 line-clamp-1">{p.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleAnalyze} className="space-y-4" id="analysis-form">
        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Job Title (Optional)</label>
          <input
            id="job-title-input"
            type="text"
            placeholder="e.g., Full-Stack Web App with Make.com automation"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full bg-gray-950 border border-gray-800 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Upwork Job Description</label>
          <textarea
            id="job-desc-input"
            rows={5}
            required
            placeholder="Paste raw Upwork description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full bg-gray-950 border border-gray-800 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition resize-none"
          />
        </div>

        <button
          id="submit-analysis-btn"
          type="submit"
          disabled={loading || !jobDescription.trim()}
          className="w-full flex items-center justify-center gap-2 bg-green-900/20 hover:bg-green-900/40 text-green-400 border border-green-700/50 hover:border-green-500 rounded px-4 py-2.5 text-xs font-semibold font-mono tracking-wide cursor-pointer transition disabled:opacity-40"
        >
          <Sparkles className="w-4 h-4" />
          {loading ? "ARCHITECTING SOLUTION..." : "ANALYZE & GENERATE PROPOSAL"}
        </button>
      </form>

      {/* Loading Screen */}
      {loading && (
        <div className="border border-green-800/30 bg-gray-950/60 p-6 rounded-lg text-center space-y-4" id="loader-box">
          <div className="flex justify-center items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            <span className="text-xs font-mono text-green-400 uppercase tracking-widest font-semibold">Running Local Engine</span>
          </div>
          <div className="max-w-xs mx-auto text-xs text-gray-400 font-mono">
            {loadingMessages[loadingStep] || "Processing backend AI request..."}
          </div>
          {/* Visual mock code log */}
          <div className="text-[10px] text-green-700 font-mono overflow-hidden text-left bg-black p-3 rounded border border-gray-900 h-24 select-none">
            <div className="animate-pulse">&gt; POST /api/analyze-job HTTP/1.1</div>
            <div>&gt; Host: localhost:3000</div>
            <div>&gt; Payload: {JSON.stringify({ title: jobTitle }).slice(0, 40)}...</div>
            <div className="text-green-600">&gt; Invoking Gemini 3.5 Flash server-side...</div>
            <div className="text-green-500">&gt; Formulating customized JSON schema response</div>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="p-3 border border-red-950 bg-red-950/20 text-red-400 rounded text-xs font-mono" id="error-box">
          [ERROR] {error}
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="space-y-6 animate-fadeIn" id="results-container">
          {/* Proposal Cover Letter */}
          <div className="border border-gray-800 bg-gray-950 rounded-lg overflow-hidden">
            <div className="bg-gray-900/60 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-green-500" />
                Tailored Cover Letter
              </span>
              <button
                id="copy-proposal-btn"
                type="button"
                onClick={copyProposal}
                className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-green-400 transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy Letter
                  </>
                )}
              </button>
            </div>
            <div className="p-4">
              <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
                {result.proposal}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strategy */}
            <div className="border border-gray-800 bg-gray-900/20 p-4 rounded-lg space-y-3">
              <span className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                Custom Solution Strategy
              </span>
              <ul className="space-y-2 text-xs text-gray-400">
                {result.strategy.map((s, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-green-600 font-bold">{idx + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Timeline */}
            <div className="space-y-4">
              {/* Timeline */}
              <div className="border border-gray-800 bg-gray-900/20 p-4 rounded-lg space-y-3">
                <span className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Estimated Milestones
                </span>
                <div className="space-y-2">
                  {result.milestones.map((m, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs border-b border-gray-900 pb-1.5">
                      <span className="text-gray-400">{m.phase}</span>
                      <span className="text-green-500 font-semibold font-mono">{m.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Tools */}
              <div className="border border-gray-800 bg-gray-900/20 p-4 rounded-lg space-y-2">
                <span className="text-xs font-semibold text-green-400">Recommended Automation Stack</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {result.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-gray-950 border border-gray-800 text-[10px] text-gray-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
