import type { Project } from "@/data/projects";

export const engineeringProjects: Project[] = [
  {
    id: "zero-downtime",
    title: "Zero Downtime",
    tag: "Full-Stack AI Application",
    meta: "Gemini · BigQuery · Firebase · Cloud Run",
    outcome: "Built a manufacturing intelligence application with tenant-aware dashboards, asset-health analytics, and a Gemini-powered copilot grounded in operational data.",
    role: "AI application builder — frontend, APIs, data, and deployment",
    durationLabel: "Build",
    duration: "AI Builder CUP 2026 project",
    stakeholdersLabel: "Use case",
    stakeholders: "Manufacturing operations and maintenance teams",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Gemini", "BigQuery", "SQL", "Firebase Auth", "Firestore", "Cloud Run", "GitHub Actions"],
    chapters: [
      { label: "Problem", text: "Manufacturing teams need a clear view of asset health, alerts, and operational risk. Built a working application around four fictional manufacturing tenants, each with its own asset and operational data, to demonstrate this workflow." },
      { label: "Build", text: "Built the Next.js and React interface with TypeScript and a Node.js/Express API. Used BigQuery SQL transformations for asset health, alerts, and summary metrics, with the backend deployed on Google Cloud Run." },
      { label: "AI Copilot", text: "Integrated Gemini into a conversational copilot and decision briefs. The backend supplies authorized BigQuery summaries, alerts, and recent conversation context so responses can reference operational evidence and explain the signals behind recommendations." },
      { label: "Access", text: "Implemented Firebase authentication, role-based access with custom claims, and backend tenant filtering. Standard users, client admins, and super admins receive different scopes of access to the demo environment." },
      { label: "Delivery", text: "Connected the application to GitHub and added backend syntax and frontend build checks through GitHub Actions. The project demonstrates an end-to-end AI application; its illustrative risk estimates are not claims of measured predictive accuracy or production customer outcomes." }
    ],
    links: [{ label: "View source on GitHub", href: "https://github.com/Tejas4302/zero-downtime-ai" }],
    bg: "from-[#123954] to-[#101d24]"
  },
  {
    id: "ontotrail",
    title: "OntoTrail",
    tag: "Supply-Chain Intelligence Prototype",
    meta: "Ontology · Scenario Planning · Conversational Analytics",
    outcome: "Built an interactive supply-chain prototype that connects suppliers, shipments, inventory, and orders to explore disruptions and recovery decisions.",
    role: "Product discovery and prototype development",
    durationLabel: "Stage",
    duration: "Interactive prototype",
    stakeholdersLabel: "Use case",
    stakeholders: "Supply-chain planners and operations teams",
    tools: ["JavaScript", "Supply-Chain Ontology", "Scenario Modeling", "Local Persistence", "Product Prototyping"],
    chapters: [
      { label: "Problem", text: "Supply-chain decisions depend on relationships across suppliers, inbound shipments, inventory, and customer orders. OntoTrail brings those relationships into one interactive experience to help planners trace disruption impacts." },
      { label: "Prototype", text: "Built a browser-based prototype with synthetic data, deterministic allocation logic, evidence views, and delay and recovery scenarios. Added local persistence and scenario import/export to support repeatable exploration." },
      { label: "Product", text: "Translated the supply-chain problem into user workflows, an ontology, and a demonstrable product experience. The prototype makes the path from a disruption to an operational decision visible and testable." },
      { label: "Next Phase", text: "Designed a roadmap for governed conversational analytics using Snowflake semantic views, Cortex Analyst, and Cortex Search. Live Snowflake AI and authentication are planned integrations, separate from the current local prototype." }
    ],
    bg: "from-[#173b47] to-[#1b2416]"
  }
];

export const engineeringStack = [
  { label: "Applications & APIs", items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express"] },
  { label: "AI & Data", items: ["Gemini", "BigQuery", "SQL", "Firebase Auth", "Firestore"] },
  { label: "Build & Deploy", items: ["AI-Assisted Development", "Cloud Run", "Vercel", "GitHub Actions"] }
];
