"use client";

import type { Project } from "@/data/projects";
import { toolDetails, badgeDetails } from "@/data/collections";

export function ToolsChips({ onSelect }: { onSelect: (item: Project) => void }) {
  return (
    <section id="tools" className="my-16">
      <div className="font-mono text-xs tracking-[0.14em] uppercase text-accent px-[5vw] mb-1.5">AI Stack</div>
      <h2 className="font-display text-[clamp(30px,3.8vw,46px)] px-[5vw] mb-5 tracking-[0.035em]">AI Tools and Platforms</h2>
      <div className="flex gap-2.5 flex-wrap px-[5vw]">
        {toolDetails.map((item) => (
          <button type="button" key={item.id} onClick={() => onSelect(item)} className="group font-mono text-xs px-3.5 py-2 border border-line rounded-full text-inkDim bg-raised hover:border-accentDim hover:text-ink hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all" aria-label={`Open details for ${item.title}`}>
            {item.title} <span className="text-accent opacity-60 group-hover:opacity-100">&#8599;</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function BadgeGrid({ onSelect }: { onSelect: (item: Project) => void }) {
  return (
    <section id="recognition" className="my-16">
      <div className="font-mono text-xs tracking-[0.14em] uppercase text-accent px-[5vw] mb-1.5">Recognition</div>
      <h2 className="font-display text-[clamp(30px,3.8vw,46px)] px-[5vw] mb-2 tracking-[0.035em]">Awards and Recognition</h2>
      <p className="px-[5vw] text-sm leading-relaxed text-inkDim max-w-[800px] mb-6">
        Select an item to view the recognition story and supporting evidence where available.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[18px] px-[5vw]">
        {badgeDetails.map((item) => {
          const documentCount = item.documents?.length ?? 0;
          return (
            <button type="button" key={item.id} onClick={() => onSelect(item)} className="group min-h-[320px] text-left bg-card border border-line rounded-xl overflow-hidden hover:-translate-y-[7px] hover:scale-[1.012] hover:border-accentDim hover:shadow-[0_26px_54px_-24px_rgba(0,0,0,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300" aria-label={`Open ${item.title}`}>
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#202024] to-[#101012]">
                {item.cover && <img src={item.cover} alt={`${item.title} preview`} loading="lazy" className="w-full h-full object-cover block group-hover:scale-[1.035] group-hover:saturate-[1.08] transition-all duration-500" />}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/95" />
                <span className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-[0.12em] uppercase text-white bg-black/60 border border-white/20 px-2 py-1 rounded-full backdrop-blur-sm">{item.tag}</span>
                <span className="absolute right-3.5 bottom-3.5 font-mono text-[9px] tracking-[0.08em] uppercase text-gold bg-black/70 border border-gold/30 px-2 py-1 rounded-full">
                  {documentCount ? `${documentCount} supporting ${documentCount === 1 ? "file" : "files"}` : "Accelerator program"}
                </span>
              </div>
              <div className="p-[18px] pb-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-extrabold text-base leading-snug mb-1.5">{item.title}</div>
                    <div className="text-[10px] leading-relaxed text-inkFaint font-mono uppercase tracking-[0.045em]">{item.meta}</div>
                  </div>
                  <span className="font-mono text-[17px] text-accent opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">&#8599;</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-inkDim">{item.outcome}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
