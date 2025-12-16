import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, ArrowRight, Terminal } from "lucide-react";

const featuredProjects = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    description: "A CLI tool for automating deployment workflows",
    tech: ["Rust", "WASM"],
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    description: "Real-time collaborative code editor",
    tech: ["TypeScript", "WebRTC"],
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    description: "Open-source monitoring dashboard",
    tech: ["Go", "React"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="font-mono text-primary text-sm">
            <span className="text-muted-foreground">~/</span>ian
          </div>
          <nav className="flex items-center gap-6 font-mono text-sm">
            <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              /projects
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              /blog
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col justify-center px-6 max-w-4xl mx-auto w-full">
          {/* Terminal intro */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-card border border-border mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up-delay-1">
            Ian <span className="text-gradient">Fogelman</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-up-delay-2">
            Software engineer building tools and exploring ideas.
            <br />
            <span className="text-foreground/80">Open source contributor.</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-16 animate-fade-up-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ianfogelman@gmail.com"
              className="p-2 rounded-md bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Featured Projects */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">#</span> featured_work
              </h2>
              <Link
                to="/projects"
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                view all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} · built with curiosity
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
