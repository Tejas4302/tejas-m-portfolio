"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#leadership", label: "Leadership" },
  { href: "#recognition", label: "Recognition" },
  { href: "#about", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between transition-all duration-300 ${
      scrolled ? "bg-bg/90 backdrop-blur-md border-b border-line py-3.5 px-[5vw]" : "py-5 px-[5vw] border-b border-transparent"
    }`}>
      <div className="font-display text-xl tracking-wide text-accent">TEJAS M.</div>

      <div className="hidden sm:flex gap-8 text-[13px] tracking-wider uppercase text-inkDim">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
        ))}
      </div>

      <button className="sm:hidden relative z-50 w-9 h-9" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        <span className={`absolute left-1.5 right-1.5 h-0.5 bg-ink rounded transition-transform duration-300 ${open ? "top-[15px] rotate-45" : "top-[11px]"}`} />
        <span className={`absolute left-1.5 right-1.5 h-0.5 bg-ink rounded transition-opacity duration-300 top-[18px] ${open ? "opacity-0" : "opacity-100"}`} />
        <span className={`absolute left-1.5 right-1.5 h-0.5 bg-ink rounded transition-transform duration-300 ${open ? "top-[15px] -rotate-45" : "top-[25px]"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }} className="sm:hidden absolute top-16 right-[5vw] left-[5vw] bg-raised border border-line rounded-lg overflow-hidden z-40">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block px-4 py-3.5 text-sm uppercase tracking-wide text-inkDim hover:text-ink transition-colors ${i !== links.length - 1 ? "border-b border-line" : ""}`}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
