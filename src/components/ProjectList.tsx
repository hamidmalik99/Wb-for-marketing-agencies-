import React, { useState } from "react";
import { ExternalLink, Layers, Globe, Network, Search } from "lucide-react";
import { CMS_PROJECTS, INDUSTRY_GROUPS } from "../data";

export default function ProjectList() {
  const [activeFilter, setActiveFilter] = useState<"cms" | "sectors">("cms");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter industry groups based on search term
  const filteredSectors = INDUSTRY_GROUPS.filter(
    (group) =>
      group.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.links.some((link) => link.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6" id="project-list-root">
      
      {/* Visual Header / Introduction */}
      <div className="border border-green-950/40 bg-green-950/5 p-4 rounded-lg space-y-1">
        <h3 className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" />
          Verified Works & Production Catalog
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed font-mono">
          Explore custom-built WordPress & WooCommerce systems, web apps, and workflow integrations designed for premium clients, or search the verified sector index of 68+ live domains.
        </p>
      </div>

      {/* Sub-navigation Filters */}
      <div className="flex flex-wrap gap-2 border-b border-gray-900 pb-3" id="portfolio-sub-filters">
        <button
          id="filter-cms"
          type="button"
          onClick={() => setActiveFilter("cms")}
          className={`px-3 py-1.5 rounded text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
            activeFilter === "cms"
              ? "bg-green-900/20 border border-green-700/60 text-green-400"
              : "bg-gray-950 border border-gray-900 text-gray-500 hover:text-gray-300"
          }`}
        >
          <Globe className="w-3.5 h-3.5 inline mr-1" />
          Featured WordPress & Web Builds
        </button>
        <button
          id="filter-sectors"
          type="button"
          onClick={() => setActiveFilter("sectors")}
          className={`px-3 py-1.5 rounded text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
            activeFilter === "sectors"
              ? "bg-green-900/20 border border-green-700/60 text-green-400"
              : "bg-gray-950 border border-gray-900 text-gray-500 hover:text-gray-300"
          }`}
        >
          <Network className="w-3.5 h-3.5 inline mr-1" />
          Industry Domain Directory (68+ Live)
        </button>
      </div>

      {/* VIEW: Live Agency Websites */}
      {activeFilter === "cms" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn" id="cms-websites-view">
          {CMS_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              id={`cms-card-${idx}`}
              className="border border-gray-850 bg-gray-900/20 rounded-lg overflow-hidden flex flex-col justify-between hover:border-green-900 transition-all group"
            >
              {/* Screenshot mock box */}
              <div className="bg-gray-950 h-32 relative flex items-center justify-center border-b border-gray-900 overflow-hidden">
                {/* Embedded microlink live screenshot screenshot with referrer safe tracking */}
                <img
                  loading="lazy"
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex gap-1.5 flex-wrap">
                  {project.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded bg-black/80 border border-gray-800 text-[8px] text-green-400 font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="px-1.5 py-0.5 rounded bg-black/80 border border-gray-800 text-[8px] text-gray-400 font-mono">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Title & info description */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-gray-200 tracking-tight font-mono line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                    Engineered with pixel-precision layouts, high performance page speeds, and clean semantic code structures.
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-green-500 hover:text-green-400 font-bold font-mono tracking-tight mt-1 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  ✦ Visit Live Domain
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW: Sector URL Index */}
      {activeFilter === "sectors" && (
        <div className="space-y-4 animate-fadeIn" id="sector-url-view">
          
          {/* Search bar inside URL Index */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
            <input
              id="sector-search"
              type="text"
              placeholder="Filter 68+ clients by industry or domain keyword (e.g. 'Law', 'Real Estate', 'au')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded pl-9 pr-4 py-2 text-xs text-gray-300 focus:outline-none focus:border-green-500 font-mono transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="industry-groups-container">
            {filteredSectors.map((group, idx) => (
              <div
                key={idx}
                className="border border-gray-900 bg-gray-950/60 p-4 rounded-lg space-y-2.5"
              >
                <span className="text-[10px] text-green-500 font-bold tracking-wider font-mono uppercase block border-b border-gray-900 pb-1.5">
                  {group.category}
                </span>
                <div className="flex flex-col gap-1.5">
                  {group.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={`https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-green-400 transition-colors font-mono flex items-center justify-between group"
                    >
                      <span className="truncate group-hover:underline">↳ {link}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredSectors.length === 0 && (
            <div className="text-center py-6 text-xs text-gray-500 font-mono">
              No index domains matched your search filter term.
            </div>
          )}
        </div>
      )}

    </div>
  );
}
