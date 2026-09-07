"use client";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [chapter, setChapter] = useState(0);
  const isRecognitionItem = project?.id.startsWith("badge-") ?? false;
  const hasChapters = !isRecognitionItem && (project?.chapters.length ?? 0) > 0;

  useEffect(() => {
    setChapter(0);
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-[5vh] pb-[8vh]"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="w-[min(960px,92vw)] bg-raised rounded-xl overflow-hidden border border-line"
          >
            <div className={`relative h-[230px] flex items-end p-8 bg-gradient-to-br ${project.bg}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-raised" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.1), var(--tw-gradient-to) 96%)" }} />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center"
              >
                ✕
              </button>
              <div className="relative z-[2]">
                <div className="font-mono text-[11px] tracking-wider uppercase text-gold mb-2">{project.tag}</div>
                <div className="font-display text-[clamp(28px,4vw,42px)]">{project.title}</div>
              </div>
            </div>

            <div className="p-5 sm:p-9">
              {project.documents?.length && project.cover ? (
                <section
                  aria-label="Supporting recognition evidence"
                  className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-5 p-3.5 sm:p-5 mb-8 bg-gradient-to-br from-white/[0.04] to-white/[0.015] border border-line rounded-xl"
                >
                  <div className="relative min-h-[210px] sm:min-h-[240px] overflow-hidden rounded-lg border border-white/10 bg-[#0d0d10]">
                    <img src={project.cover} alt={`Preview of ${project.title}`} className="absolute inset-0 w-full h-full object-cover" />
                    <span className="absolute left-3 bottom-3 font-mono text-[9px] tracking-[0.1em] uppercase text-white bg-black/75 border border-white/20 rounded-full px-2.5 py-1.5">
                      Verified from uploaded supporting {project.documents.length === 1 ? "file" : "files"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <h3 className="font-extrabold text-[15px] mb-1">Attached evidence</h3>
                      <p className="text-xs leading-relaxed text-inkDim">Open the original evidence in a new tab or download a copy.</p>
                    </div>
                    {project.documents.map((doc, index) => (
                      <div key={doc.href} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 border border-line rounded-lg bg-black/15">
                        <div className="min-w-0">
                          <div className="text-xs font-bold leading-snug">{String(index + 1).padStart(2, "0")} · {doc.label}</div>
                          <div className="text-[9px] font-mono leading-relaxed text-inkFaint mt-1">{doc.note}</div>
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          <a
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none text-center px-2.5 py-2 rounded-md bg-white/[0.07] text-ink border border-line font-mono text-[9px] uppercase tracking-wide hover:bg-white/[0.14] hover:border-accentDim transition-colors"
                          >
                            View
                          </a>
                          <a
                            href={doc.href}
                            download={doc.downloadName}
                            className="flex-1 sm:flex-none text-center px-2.5 py-2 rounded-md bg-white/[0.07] text-ink border border-line font-mono text-[9px] uppercase tracking-wide hover:bg-white/[0.14] hover:border-accentDim transition-colors"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="flex gap-6 flex-wrap font-mono text-xs text-inkDim mb-7">
                <span>
                  {project.roleLabel ?? "Role"}
                  <b className="block font-body text-[13px] font-bold text-ink mt-0.5">{project.role}</b>
                </span>
                <span>
                  {project.durationLabel ?? "Duration"}
                  <b className="block font-body text-[13px] font-bold text-ink mt-0.5">{project.duration}</b>
                </span>
                <span>
                  {project.stakeholdersLabel ?? "Stakeholders"}
                  <b className="block font-body text-[13px] font-bold text-ink mt-0.5">{project.stakeholders}</b>
                </span>
              </div>

              {isRecognitionItem ? null : hasChapters ? (
                <>
                  {/* Signature chapter scrubber for projects and other story-based items */}
                  <div className="mb-7">
                    <div className="relative h-1 bg-line rounded mb-3.5">
                      <div
                        className="absolute left-0 top-0 h-full bg-accent rounded transition-all duration-300"
                        style={{ width: `${project.chapters.length > 1 ? (chapter / (project.chapters.length - 1)) * 100 : 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between -mt-2 mb-2.5">
                      {project.chapters.map((c, i) => (
                        <div
                          key={c.label}
                          className={`w-4 h-4 rounded-full border-2 bg-raised transition-colors ${
                            i <= chapter ? "border-accent" : "border-line"
                          } ${i === chapter ? "bg-accent" : ""}`}
                        />
                      ))}
                    </div>
                    <div className="hidden sm:flex justify-between">
                      {project.chapters.map((c, i) => (
                        <button
                          key={c.label}
                          onClick={() => setChapter(i)}
                          className={`flex-1 font-mono text-[10px] tracking-wide uppercase text-center transition-colors ${
                            i === chapter ? "text-accent font-semibold" : "text-inkFaint hover:text-ink"
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="min-h-[150px]">
                    <div className="font-mono text-[11px] text-accent tracking-wide uppercase mb-2.5">
                      Chapter {chapter + 1} / {project.chapters.length} - {project.chapters[chapter].label}
                    </div>
                    <div className="text-base leading-relaxed">{project.chapters[chapter].text}</div>
                  </div>

                  <div className="flex justify-between mt-7">
                    <button
                      onClick={() => setChapter((c) => Math.max(0, c - 1))}
                      disabled={chapter === 0}
                      className="bg-white/[0.06] border border-line text-ink px-4.5 py-2.5 rounded-md text-sm font-semibold disabled:opacity-30 hover:bg-white/[0.12] transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setChapter((c) => Math.min(project.chapters.length - 1, c + 1))}
                      disabled={chapter === project.chapters.length - 1}
                      className="bg-white/[0.06] border border-line text-ink px-4.5 py-2.5 rounded-md text-sm font-semibold disabled:opacity-30 hover:bg-white/[0.12] transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </>
              ) : (
                <div className="rounded-lg border border-line bg-white/[0.025] p-5">
                  <div className="font-mono text-[11px] text-accent tracking-wide uppercase mb-2.5">Overview</div>
                  <div className="text-base leading-relaxed">{project.outcome}</div>
                </div>
              )}

              <div className="flex gap-2 flex-wrap mt-7 pt-6 border-t border-line">
                {project.tools.map((t) => (
                  <div key={t} className="font-mono text-xs px-3.5 py-2 border border-line rounded-full text-inkDim bg-raised">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
