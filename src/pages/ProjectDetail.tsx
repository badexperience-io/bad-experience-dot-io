import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";

const projectsData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  date: string;
  features: string[];
}> = {
  "project-alpha": {
    name: "Project Alpha",
    description: "A CLI tool for automating deployment workflows",
    longDescription: "Project Alpha is a command-line tool designed to simplify and automate deployment workflows across multiple cloud providers. Built with Rust for performance and compiled to WebAssembly for browser-based tooling.",
    tech: ["Rust", "WASM", "Docker", "AWS", "GCP"],
    github: "https://github.com",
    demo: "https://example.com",
    date: "2024",
    features: [
      "Multi-cloud support (AWS, GCP, Azure)",
      "Configuration as code with YAML/TOML",
      "Parallel deployment pipelines",
      "Rollback capabilities",
      "Secret management integration",
    ],
  },
  "project-beta": {
    name: "Project Beta",
    description: "Real-time collaborative code editor",
    longDescription: "A real-time collaborative code editor that enables multiple developers to work on the same codebase simultaneously. Built with WebRTC for peer-to-peer connections and Monaco editor for a VS Code-like experience.",
    tech: ["TypeScript", "WebRTC", "Monaco", "Y.js", "Node.js"],
    github: "https://github.com",
    date: "2024",
    features: [
      "Real-time cursor tracking",
      "Conflict-free replicated data types (CRDTs)",
      "Syntax highlighting for 50+ languages",
      "Integrated terminal",
      "Voice chat support",
    ],
  },
  "project-gamma": {
    name: "Project Gamma",
    description: "Open-source monitoring dashboard",
    longDescription: "An open-source monitoring dashboard for tracking application metrics, performance, and system health. Built with Go for the backend and React for the frontend, with InfluxDB for time-series data storage.",
    tech: ["Go", "React", "InfluxDB", "Grafana", "Prometheus"],
    github: "https://github.com",
    demo: "https://example.com",
    date: "2023",
    features: [
      "Real-time metric visualization",
      "Custom dashboard builder",
      "Alerting and notifications",
      "Multi-tenant support",
      "Prometheus/Grafana compatible",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono">cd ../projects</span>
          </Link>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span className="font-mono">{project.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {project.name}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm font-mono rounded-md bg-secondary text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-sm">Source</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-mono text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">#</span> Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">#</span> Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary font-mono mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;
