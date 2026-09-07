"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Splash from "@/components/Splash";
import Rail from "@/components/Rail";
import Card from "@/components/Card";
import ProjectModal from "@/components/ProjectModal";
import Seasons from "@/components/Seasons";
import Contact from "@/components/Contact";
import { ToolsChips, BadgeGrid } from "@/components/Badges";
import { projects, Project } from "@/data/projects";
import { led, leadershipCommunity, process as capabilityCards, profileDetails } from "@/data/collections";

export default function Home() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <main className="relative">
      <Splash />
      <div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
      />

      <Nav />
      <Hero />

      <div id="projects">
        <Rail label="Shipped AI Products" title="Enterprise AI Portfolio">
          {projects.map((p, i) => (
            <Card key={p.id} index={i} title={p.title} tag={p.tag} meta={p.meta} outcome={p.outcome} bg={p.bg} onClick={() => setActive(p)} />
          ))}
        </Rail>
      </div>

      <div id="collections">
        <Rail label="Portfolio" title="Programs and Transformations">
          {led.map((p, i) => (
            <Card key={p.id} index={i} title={p.title} tag={p.tag} meta={p.meta} outcome={p.outcome} bg={p.bg} onClick={() => setActive(p)} />
          ))}
        </Rail>
      </div>

      <div id="capabilities">
        <Rail label="How I Deliver" title="Core Competencies">
          {capabilityCards.map((p, i) => (
            <Card key={p.id} index={i} title={p.title} tag={p.tag} meta={p.meta} outcome={p.outcome} bg={p.bg} onClick={() => setActive(p)} />
          ))}
        </Rail>
      </div>

      <div id="leadership">
        <Rail label="Beyond Delivery" title="Leadership and Community">
          {leadershipCommunity.map((p, i) => (
            <Card key={p.id} index={i} title={p.title} tag={p.tag} meta={p.meta} outcome={p.outcome} bg={p.bg} onClick={() => setActive(p)} />
          ))}
        </Rail>
      </div>

      <ToolsChips onSelect={setActive} />

      <div id="profile">
        <Rail label="Profile" title="Education and Languages">
          {profileDetails.map((p, i) => (
            <Card key={p.id} index={i} title={p.title} tag={p.tag} meta={p.meta} outcome={p.outcome} bg={p.bg} onClick={() => setActive(p)} />
          ))}
        </Rail>
      </div>

      <BadgeGrid onSelect={setActive} />
      <Seasons onSelect={setActive} />
      <Contact />

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
