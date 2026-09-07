"use client";

import type { KeyboardEvent } from "react";

type CardProps = {
  title: string;
  tag: string;
  meta: string;
  outcome: string;
  bg: string;
  index: number;
  onClick: () => void;
};

export default function Card({ title, tag, meta, outcome, bg, index, onClick }: CardProps) {
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${title}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className="group relative flex-none w-[340px] max-w-[85vw] scroll-snap-start bg-card border border-line rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-accentDim hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div className={`relative h-[150px] flex items-end p-4 bg-gradient-to-br ${bg}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3.5 left-3.5 font-mono text-[10px] tracking-[0.12em] uppercase text-gold bg-black/55 border border-gold/35 rounded px-2 py-1 z-10">
          {tag}
        </div>
        <div className="absolute top-1.5 right-3.5 font-display text-[48px] tracking-wide text-white/[0.14]">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-[48px] h-[48px] rounded-full bg-accent flex items-center justify-center shadow-[0_0_26px_rgba(214,48,60,0.55)] text-white translate-y-1 group-hover:translate-y-0 transition-transform">
            <span className="translate-x-px">&#9654;</span>
          </div>
        </div>
      </div>
      <div className="p-4 relative">
        <div className="text-[17px] font-extrabold tracking-[-0.01em] mb-1.5">{title}</div>
        <div className="font-mono text-[11px] text-inkFaint mb-2.5">{meta}</div>
        <div className="text-[13px] text-inkDim leading-relaxed">{outcome}</div>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-accent opacity-70 group-hover:opacity-100 transition-opacity">
          Open story <span aria-hidden="true">&#8594;</span>
        </div>
      </div>
    </article>
  );
}
