"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-[5vw] overflow-hidden">
      <div
        className="absolute -inset-[10%] z-0 animate-[drift_22s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(214,48,60,0.35), transparent 40%), radial-gradient(circle at 85% 70%, rgba(217,164,65,0.12), transparent 45%)",
        }}
      />
      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="relative z-10 flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-accent mb-4">
        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(214,48,60,0.6)]" />
        Now Featuring
      </motion.div>

      <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp} className="relative z-10 font-display text-[clamp(56px,11vw,148px)] leading-[0.9] tracking-wide">
        TEJAS M
      </motion.h1>

      <motion.p custom={2} initial="hidden" animate="show" variants={fadeUp} className="relative z-10 text-[clamp(16px,2.2vw,22px)] text-inkDim max-w-[760px] mt-5 leading-relaxed">
        <b className="text-ink font-semibold">AI Project Manager shipping enterprise GenAI and LLM-powered platforms end-to-end.</b>{" "}
        From discovery and AI-assisted prototyping through model and vendor evaluation, security governance, and production launch.
      </motion.p>

      <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="relative z-10 flex flex-col xs:flex-row gap-4 mt-9 w-full max-w-md xs:max-w-none">
        <a href="#projects" className="px-7 py-3.5 text-sm font-bold tracking-wide rounded flex items-center justify-center gap-2.5 bg-accent text-white hover:bg-[#e8404c] hover:-translate-y-0.5 transition-all w-full xs:w-auto">
          ▶ View AI Portfolio
        </a>
        <a href="#about" className="px-7 py-3.5 text-sm font-bold tracking-wide rounded flex items-center justify-center gap-2.5 bg-white/[0.08] text-ink border border-line hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all w-full xs:w-auto">
          Career Story
        </a>
      </motion.div>

      <div className="absolute bottom-9 left-[5vw] z-10 flex items-center gap-2.5 font-mono text-[11px] text-inkFaint tracking-wider uppercase">
        <div className="w-px h-9 bg-gradient-to-b from-inkFaint to-transparent animate-pulse" />
        Scroll
      </div>
    </header>
  );
}
