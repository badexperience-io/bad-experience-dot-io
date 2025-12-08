import { Code2, Layers, Rocket, Shield, Terminal, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your exact requirements. From MVPs to enterprise systems.",
  },
  {
    icon: Layers,
    title: "Open Source Solutions",
    description: "Leverage the power of open source. We build, contribute to, and maintain OSS projects.",
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    description: "CLIs, SDKs, and APIs that developers actually want to use. Clean, documented, and fast.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Make your applications blazing fast. We optimize code, databases, and infrastructure.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security reviews and vulnerability assessments for your codebase.",
  },
  {
    icon: Zap,
    title: "Technical Consulting",
    description: "Strategic guidance on architecture, technology choices, and engineering best practices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we handle every aspect of software development 
            with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
