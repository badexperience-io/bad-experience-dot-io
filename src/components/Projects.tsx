import { ExternalLink, GitFork, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "nexus-cli",
    description: "A blazing fast CLI tool for managing microservices. Zero config, maximum productivity.",
    stars: "4.2k",
    forks: "312",
    language: "Rust",
    color: "bg-orange-500",
  },
  {
    name: "flow-state",
    description: "Lightweight state management for React with built-in devtools and time-travel debugging.",
    stars: "3.8k",
    forks: "245",
    language: "TypeScript",
    color: "bg-blue-500",
  },
  {
    name: "quantum-db",
    description: "Next-gen database driver with automatic query optimization and real-time sync.",
    stars: "2.1k",
    forks: "156",
    language: "Go",
    color: "bg-cyan-500",
  },
  {
    name: "shadow-auth",
    description: "Zero-trust authentication library with biometric support and hardware key integration.",
    stars: "1.9k",
    forks: "89",
    language: "TypeScript",
    color: "bg-purple-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open Source <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in giving back. Check out our open source contributions 
            used by thousands of developers worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${project.color}`} />
                  <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <GitFork className="h-4 w-4" />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center gap-1.5 ml-auto">
                  <div className={`w-2.5 h-2.5 rounded-full ${project.color}`} />
                  <span className="text-muted-foreground">{project.language}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
