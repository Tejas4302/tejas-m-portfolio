export type Chapter = {
  label: string;
  text: string;
};

export type ProjectDocument = {
  label: string;
  note: string;
  href: string;
  downloadName: string;
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  meta: string;
  outcome: string;
  bg: string;
  role: string;
  duration: string;
  stakeholders: string;
  tools: string[];
  chapters: Chapter[];
  roleLabel?: string;
  durationLabel?: string;
  stakeholdersLabel?: string;
  cover?: string;
  documents?: ProjectDocument[];
};

export const projects: Project[] = [
  {
    "id": "goaltracker",
    "title": "BGSW Goal Tracker",
    "tag": "Shipped - Enterprise AI",
    "meta": "D2D Insights Center / REDLake (IWA) | Roughly 300 users",
    "outcome": "Rolled out a quarterly goal-management platform now used by department heads across all departments at BGSW.",
    "role": "AI Project Manager - discovery, Lastenheft, prototyping, roadmap, and delivery",
    "duration": "Discovery through production rollout",
    "stakeholders": "HR, Enterprise Architecture, engineering, and cross-functional teams",
    "tools": [
      "ChatGPT",
      "Claude",
      "Emergent",
      "Jira",
      "Requirements Engineering"
    ],
    "chapters": [
      {
        "label": "Discovery",
        "text": "Led requirements discovery with HR through stakeholder interviews and authored the Lastenheft, translating quarterly goal-management needs into prioritized workflows and functional requirements."
      },
      {
        "label": "Prototype",
        "text": "Built an AI-assisted prototype using ChatGPT, Claude, and Emergent to validate high-risk workflows with stakeholders before engineering investment and refine the production scope."
      },
      {
        "label": "Roadmap",
        "text": "Partnered with Enterprise Architecture and cross-functional teams to decompose requirements, estimate effort and dependencies, and translate the agreed scope into a phased roadmap, Jira backlog, and sprint plan through productionization."
      },
      {
        "label": "Rollout",
        "text": "Following production rollout, the platform is used by department heads across all departments at BGSW - roughly 300 users."
      }
    ],
    "bg": "from-[#3a1620] to-[#171215]"
  },
  {
    "id": "geniefinance",
    "title": "Genie Finance",
    "tag": "Shipped - Azure OpenAI",
    "meta": "Enterprise AI Finance Platform | Around 200 users",
    "outcome": "Delivered an Azure OpenAI-based finance platform through enterprise security, UAT, and production-readiness gates.",
    "role": "AI Project Manager - requirements, technical workstreams, governance, and release",
    "duration": "Discovery through production launch",
    "stakeholders": "CTG, Enterprise Architecture, development, cybersecurity, CSRO, and penetration-testing teams",
    "tools": [
      "Azure OpenAI",
      "Azure",
      "Jira",
      "UAT",
      "BIA/DR"
    ],
    "chapters": [
      {
        "label": "Discovery",
        "text": "Led requirements discovery with CTG (Controlling) stakeholders and authored the Lastenheft for an Azure OpenAI-based finance platform, translating business needs into prioritized functional and enterprise requirements."
      },
      {
        "label": "Workstreams",
        "text": "Partnered with Enterprise Architecture, development, cybersecurity, CSRO, and penetration-testing teams to break the solution into technical workstreams, identify dependencies, estimate implementation effort, and establish the delivery roadmap."
      },
      {
        "label": "Readiness",
        "text": "Drove execution across Dev, QA, and Production, identity and security integration, security assessments, penetration testing, BIA/DR, UAT, and production readiness."
      },
      {
        "label": "Launch",
        "text": "Following launch, Genie Finance is used by the CTG team - around 200 employees."
      },
      {
        "label": "Recognition",
        "text": "The delivery was recognized with the BGSW Shabash Excellence Award."
      }
    ],
    "bg": "from-[#1c2a3a] to-[#131720]"
  },
  {
    "id": "orbit",
    "title": "ORBIT",
    "tag": "Initiation / Discovery - In Progress",
    "meta": "Enterprise GenAI Analytics | HR and Finance",
    "outcome": "Leading discovery for conversational \"vibe analytics\" use cases and a prioritized next-phase scope.",
    "role": "AI Project Manager - discovery and initiation",
    "duration": "In progress",
    "stakeholders": "HR and Finance stakeholders",
    "tools": [
      "GenAI Analytics",
      "Stakeholder Interviews",
      "Requirements Engineering",
      "Roadmapping"
    ],
    "chapters": [
      {
        "label": "Opportunity",
        "text": "Working with HR and Finance stakeholders to explore how GenAI-driven, conversational \"vibe analytics\" can let users interact with and derive insights from their own business data more intuitively."
      },
      {
        "label": "Discovery",
        "text": "Focusing discovery on the highest-value HR and Finance use cases and clarifying data and user requirements, rather than defining a full enterprise build upfront."
      },
      {
        "label": "Scope",
        "text": "Using those findings to shape the initial scope and roadmap for the next phase."
      },
      {
        "label": "Success",
        "text": "Near-term success is defined as validating that identified use cases solve meaningful user problems and establishing a clear, prioritized scope. Adoption, insight-generation efficiency, and user value will become measurable KPIs as the solution moves toward implementation."
      }
    ],
    "bg": "from-[#241c3a] to-[#161320]"
  }
];
