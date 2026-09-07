import { ReactNode } from "react";

export default function Rail({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="my-16">
      <div className="font-mono text-xs tracking-[0.14em] uppercase text-accent px-[5vw] mb-1.5">{label}</div>
      <h2 className="font-display text-[clamp(26px,3.4vw,40px)] px-[5vw] mb-5 tracking-wide">{title}</h2>
      <div className="rail flex gap-4.5 overflow-x-auto px-[5vw] pb-7" style={{ scrollSnapType: "x proximity" }}>
        {children}
      </div>
    </section>
  );
}
