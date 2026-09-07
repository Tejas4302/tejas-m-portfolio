"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);

    if (mq.matches) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const revealScroll = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2300);
    const hide = setTimeout(() => setVisible(false), 2900);

    return () => {
      clearTimeout(revealScroll);
      clearTimeout(hide);
      document.body.style.overflow = "";
    };
  }, []);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative font-display text-[clamp(48px,10vw,120px)] tracking-wide text-ink"
          >
            TEJAS M
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className="absolute left-0 -bottom-2.5 h-[3px] bg-accent shadow-[0_0_16px_rgba(214,48,60,0.6)]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-inkFaint mt-6"
          >
            AI Project Manager
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
