/*
 * Site content — edit this file to update the portfolio without touching layout code.
 *
 * profile.links: leave a URL as an empty string ("") and its button is hidden.
 * profile.cvPath: set to a real file path (e.g. "assets/Joseph_Waweru_CV.pdf") after you add
 *   the PDF to the project; while it is empty, no "Download CV" button is shown.
 * education: add the university name and years in the education list below.
 * foundations: subjects from the degree, shown under Skills. Remove any you did not study.
 * skills: remove any technology you have not used, or move it to another group.
 * projects: status is shown on each card. Use "Concept" or "Prototype" until a project is real,
 *   then change it to "Live" or "Shipped" and add genuine repo / demo URLs.
 */

export const profile = {
  name: "Joseph Waweru",
  title: "Software Developer & AI Engineer",
  email: "josekariiz2018@gmail.com",
  phone: "+255 744 976 150",
  phoneHref: "+255744976150",
  location: "Dar es Salaam, Tanzania",
  cvPath: "",
  links: {
    github: "",
    linkedin: "",
  },
};

/*
 * Education. Add the university name and years when you have them; empty fields are hidden.
 */
export const education = [
  {
    degree: "Bachelor of Mathematics and Computer Science",
    institution: "",
    years: "",
  },
];

export const skills = [
  {
    group: "Frontend",
    icon: "layout",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "Authentication and authorization"],
  },
  {
    group: "Artificial intelligence",
    icon: "brain-circuit",
    items: [
      "Large language models",
      "AI API integration",
      "Prompt engineering",
      "Retrieval-augmented generation",
      "AI agents and workflow automation",
      "Embeddings and vector search",
    ],
  },
  {
    group: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    group: "Tools and deployment",
    icon: "git-branch",
    items: ["Git and GitHub", "Docker", "Vercel", "CI/CD", "Environment configuration", "Cloud deployment"],
  },
];

/*
 * Foundations from the Bachelor of Mathematics and Computer Science.
 * These are the core subjects of the degree. Remove any you did not study, or add others.
 */
export const foundations = [
  {
    group: "Computer science",
    icon: "cpu",
    items: [
      "Data structures and algorithms",
      "Object-oriented programming",
      "Programming in C, C++, Java, and Python",
      "Database systems and SQL",
      "Operating systems",
      "Computer networks",
      "Computer architecture",
      "Software engineering",
      "Theory of computation",
      "Artificial intelligence and machine learning",
    ],
  },
  {
    group: "Mathematics",
    icon: "sigma",
    items: [
      "Discrete mathematics",
      "Linear algebra",
      "Calculus",
      "Probability and statistics",
      "Numerical methods",
      "Differential equations",
      "Mathematical logic and proofs",
      "Optimisation",
    ],
  },
];

export const projects = [
  {
    id: "knowledge-assistant",
    title: "AI-powered knowledge assistant",
    status: "Concept",
    icon: "book-open",
    summary: "Answers questions from a set of supplied documents, with references back to the source passages.",
    tags: ["Python", "LLM APIs", "Embeddings", "RAG", "Vector search"],
    features: [
      "Document ingestion and chunking",
      "Semantic retrieval with embeddings",
      "Context-grounded answers",
      "Source references for every answer",
    ],
    repo: "",
    demo: "",
  },
  {
    id: "support-platform",
    title: "AI customer support platform",
    status: "Concept",
    icon: "message-square",
    summary: "Handles common customer questions from a knowledge base and hands harder cases to a human agent.",
    tags: ["React", "Node.js", "REST APIs", "LLM integration"],
    features: [
      "Conversational chat interface",
      "Searchable support knowledge base",
      "Escalation workflow to human agents",
      "Conversation history for follow-up",
    ],
    repo: "",
    demo: "",
  },
  {
    id: "business-dashboard",
    title: "Intelligent business dashboard",
    status: "Concept",
    icon: "bar-chart-3",
    summary: "A single view of day-to-day operations with KPIs, filters, and exportable reports.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Interactive charts",
      "KPI summary cards",
      "Date and category filtering",
      "Scheduled and on-demand reports",
    ],
    repo: "",
    demo: "",
  },
  {
    id: "api-platform",
    title: "Developer API platform",
    status: "Concept",
    icon: "braces",
    summary: "A structured REST backend with secure authentication, validation, and published documentation.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "JWT authentication",
      "Request validation",
      "OpenAPI documentation",
      "Consistent error handling",
    ],
    repo: "",
    demo: "",
  },
  {
    id: "document-summarizer",
    title: "AI document summarizer",
    status: "Concept",
    icon: "file-text",
    summary: "Turns long documents into structured summaries and a short list of key points.",
    tags: ["Python", "NLP", "LLM APIs", "React"],
    features: [
      "PDF and text upload",
      "Section-by-section summaries",
      "Key-point extraction",
      "Copy and export of results",
    ],
    repo: "",
    demo: "",
  },
  {
    id: "workflow-automation",
    title: "Workflow automation system",
    status: "Concept",
    icon: "workflow",
    summary: "Runs repetitive business tasks on a schedule or in response to events, with a clear run history.",
    tags: ["Python", "Node.js", "REST APIs", "Scheduled jobs"],
    features: [
      "Task orchestration",
      "Event-based triggers",
      "Structured logging",
      "Run status and retry tracking",
    ],
    repo: "",
    demo: "",
  },
];

export const approach = [
  { title: "Understand the problem", icon: "search", text: "Clarify who the users are, what they need, and what success looks like before writing code." },
  { title: "Design the system", icon: "pen-tool", text: "Plan the architecture, data model, and user experience so each part has a clear job." },
  { title: "Build in small modules", icon: "boxes", text: "Write readable, modular code that is easy to test, review, and change later." },
  { title: "Test the edges", icon: "shield-check", text: "Check functionality, security, and edge cases, including what happens when things fail." },
  { title: "Ship and improve", icon: "rocket", text: "Deploy, monitor real usage, and iterate based on what the data and users show." },
];
