import React, { useState } from "react";
import { GitBranch, Workflow, ChevronRight, Check, Zap, ArrowRight, Clock } from "lucide-react";
import { WORKFLOW_RECIPES } from "../data";

export default function WorkflowRecipes() {
  const [activeRecipe, setActiveRecipe] = useState(WORKFLOW_RECIPES[0].id);

  const selected = WORKFLOW_RECIPES.find((r) => r.id === activeRecipe) || WORKFLOW_RECIPES[0];

  return (
    <div className="space-y-6" id="workflow-recipes-root">
      {/* Intro block */}
      <div className="border border-gray-800 bg-gray-900/10 p-4 rounded-lg space-y-1">
        <h3 className="text-xs font-semibold text-green-400">Pre-Built Automation Recipes</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          I build and deploy production-ready workflow automation architectures. 
          Below are two blueprints of automations currently running in the wild, helping agencies 
          scale lead generation and content pipelines without human bottlenecking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation Sidebar List */}
        <div className="lg:col-span-1 flex flex-col gap-2">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider pl-1">Select Blueprint:</span>
          {WORKFLOW_RECIPES.map((r) => (
            <button
              key={r.id}
              id={`recipe-btn-${r.id}`}
              type="button"
              onClick={() => setActiveRecipe(r.id)}
              className={`text-left p-3.5 rounded-lg border text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                activeRecipe === r.id
                  ? "border-green-800 bg-green-950/10 text-green-400 font-semibold"
                  : "border-gray-800 bg-gray-900/20 hover:border-gray-700 text-gray-400"
              }`}
            >
              <span className="truncate">{r.title}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${activeRecipe === r.id ? "text-green-400" : "text-gray-600"}`} />
            </button>
          ))}
        </div>

        {/* Detailed Blueprint Visualizer */}
        <div className="lg:col-span-2 border border-gray-800 bg-gray-900/10 rounded-lg p-5 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex flex-wrap justify-between items-start gap-2 border-b border-gray-900 pb-3">
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-gray-200">{selected.title}</h4>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="text-green-600">⚡ TRIGGER:</span>
                  <span className="font-mono text-gray-400">{selected.trigger}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-green-950/20 border border-green-900/30 text-[10px] text-green-400 font-mono">
                <Clock className="w-3 h-3 text-green-500" />
                Saves {selected.timeSaved}
              </div>
            </div>

            {/* Steps Sequential Visual Flow */}
            <div className="space-y-4">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Execution Pipeline Flow:</span>
              <div className="relative border-l border-green-950/60 ml-3 pl-5 space-y-6">
                {selected.steps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring timeline indicator */}
                    <span className="absolute -left-[26px] top-0.5 w-3 h-3 rounded-full bg-black border-2 border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors"></span>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-gray-300 font-mono">
                          {step.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed font-mono text-[11px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prompt/Call to action */}
          <div className="border-t border-gray-900 pt-3 mt-4 text-[11px] text-gray-500 font-mono flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-green-500 shrink-0" />
            <span>This blueprint can be custom-cloned, adapted to your CRM API, and deployed in less than 72 hours.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
