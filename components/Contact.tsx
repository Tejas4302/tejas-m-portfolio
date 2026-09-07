"use client";

import { useState } from "react";
import { contactLinks } from "@/data/collections";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const fallbackCopy = () => {
      const input = document.createElement("textarea");
      input.value = contactLinks.email;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contactLinks.email).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const mailto = `mailto:${contactLinks.email}?subject=${encodeURIComponent("Portfolio conversation - Tejas M")}`;

  return (
    <>
      <section id="contact" className="px-[5vw] py-28 text-center border-t border-line">
        <div className="font-mono text-xs tracking-[0.14em] uppercase text-accent mb-1.5">My List</div>
        <h2 className="font-display text-[clamp(40px,5.5vw,72px)] tracking-[0.035em] mb-4">Let&apos;s Build the Next One</h2>
        <p className="text-inkDim max-w-[560px] mx-auto mb-9 leading-relaxed">
          Open to AI Project Manager roles focused on GenAI platforms, AI-assisted prototyping, and enterprise delivery from discovery through production. Resume, LinkedIn, and inbox are all one click away.
        </p>
        <div className="flex flex-col xs:flex-row justify-center gap-4 max-w-md xs:max-w-none mx-auto">
          <a
            href={mailto}
            onClick={copyEmail}
            title="Copies the email address and opens your mail app"
            className="px-7 py-3.5 text-sm font-extrabold tracking-wide rounded-md flex items-center justify-center gap-2.5 bg-accent text-white hover:bg-[#e8404c] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all w-full xs:w-auto"
          >
            &#9993; {copied ? "Email Copied" : "Email Me"}
          </a>
          <a
            href={contactLinks.resumeFile}
            download="Tejas_M_Resume.pdf"
            className="px-7 py-3.5 text-sm font-extrabold tracking-wide rounded-md flex items-center justify-center gap-2.5 bg-white/[0.08] text-ink border border-line hover:bg-white/[0.14] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all w-full xs:w-auto"
          >
            &#8595; Download Resume
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 text-sm font-extrabold tracking-wide rounded-md flex items-center justify-center gap-2.5 bg-white/[0.08] text-ink border border-line hover:bg-white/[0.14] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all w-full xs:w-auto"
          >
            LinkedIn &#8599;
          </a>
        </div>
      </section>
      <footer className="px-[5vw] py-8 flex justify-between flex-wrap gap-2.5 font-mono text-[11px] text-inkFaint border-t border-line">
        <span>Tejas M | Bengaluru, Karnataka</span>
        <span className="flex gap-3 flex-wrap">
          <a href={mailto} onClick={copyEmail} className="hover:text-ink transition-colors">{contactLinks.email}</a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn &#8599;</a>
        </span>
      </footer>
    </>
  );
}
