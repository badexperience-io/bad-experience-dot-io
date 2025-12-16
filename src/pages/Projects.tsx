import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    description: "A CLI tool for automating deployment workflows with support for multiple cloud providers.",
    tech: ["Rust", "WASM", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    description: "Real-time collaborative code editor with support for multiple programming languages.",
    tech: ["TypeScript", "WebRTC", "Monaco"],
    github: "https://github.com",
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    description: "Open-source monitoring dashboard for tracking application metrics and performance.",
    tech: ["Go", "React", "InfluxDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "project-delta",
    name: "Project Delta",
    description: "A static site generator optimized for developer blogs and documentation.",
    tech: ["Node.js", "Markdown", "Tailwind"],
    github: "https://github.com",
  },
  {
    slug: "project-epsilon",
    name: "Project Epsilon",
    description: "Browser extension for enhanced GitHub code review workflows.",
    tech: ["TypeScript", "Chrome API", "React"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono">cd ~</span>
          </Link>

          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary font-mono">/</span>projects
          </h1>
          <p className="text-muted-foreground">
            A collection of things I've built, contributed to, or am currently working on.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block"
                  >
                    <h2 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h2>
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
