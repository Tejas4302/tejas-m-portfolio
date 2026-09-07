"use client";

import type { KeyboardEvent } from "react";
import type { Project } from "@/data/projects";
import { seasons } from "@/data/collections";

export default function Seasons({ onSelect }: { onSelect: (item: Project) => void }) {
  return (
    <section id="about" className="px-[5vw] py-24 border-t border-line bg-white/[0.015]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <div className="font-mono text-xs tracking-[0.14em] uppercase text-accent mb-1.5">Career Seasons</div>
          <h2 className="font-display text-[clamp(30px,3.8vw,46px)] mb-5 tracking-[0.035em]">The Story So Far</h2>
          <p className="text-inkDim leading-relaxed mb-4 text-[15px]">
            AI Project Manager shipping enterprise GenAI and LLM-powered platforms from discovery and AI-assisted prototyping through governance and production launch.
          </p>
          <p className="text-inkDim leading-relaxed text-[15px]">
            At Bosch, shipped BGSW Goal Tracker and Genie Finance and now lead ORBIT discovery. Earlier at Mu Sigma, drove inbound and outbound sales across Chemical, Automotive, Oil & Gas and Energy verticals and led CRM transformation using HubSpot, Apollo IO and Zoho.
          </p>
          <div className="mt-5 font-mono text-[10px] tracking-[0.1em] uppercase text-accent">Select a season to open the full story</div>
        </div>
        <div>
          {seasons.map((s, i) => (
            <article key={s.num} role="button" tabIndex={0} onClick={() => onSelect(s.detail)} onKeyDown={(event: KeyboardEvent<HTMLElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(s.detail); } }} aria-label={`Open details for ${s.title}`} className={`group flex gap-6 p-5 -mx-5 rounded-xl cursor-pointer hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all ${i !== seasons.length - 1 ? "border-b border-line" : ""}`}>
              <div className="font-display text-[18px] text-accent min-w-[78px] pt-1 tracking-[0.08em]">{s.num}<br /><span className="text-inkFaint font-mono text-[11px]">{s.years}</span></div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3"><h3 className="text-[19px] font-extrabold mb-1">{s.title}</h3><span className="font-mono text-accent opacity-50 group-hover:opacity-100 transition-opacity">&#8599;</span></div>
                <div className="font-mono text-xs text-inkFaint mb-2.5">{s.meta}</div>
                {s.paragraphs.map((p, pi) => <p key={pi} className="text-inkDim text-sm leading-relaxed mb-2">{p}</p>)}
                <div className="flex gap-2 mt-2.5 flex-wrap">{s.scope.map((sc) => <span key={sc} className="font-mono text-[11px] text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/25">{sc}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
