import { Check } from "lucide-react";

const values = [
  "Code quality over quick fixes",
  "Open source by default",
  "Documentation as a first-class citizen",
  "Security built-in, not bolted on",
  "Performance is a feature",
  "Clear communication always",
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-gradient">Bad Experience</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              The name is a reminder of what we're fighting against. Every line of code 
              we write, every system we design, exists to eliminate bad experiences—for 
              developers and users alike.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're a small, focused team of engineers who've worked at places like 
              Stripe, Vercel, and GitHub. We know what good software looks like because 
              we've built it at scale.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Code Block */}
              <div className="absolute inset-0 rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">philosophy.ts</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-muted-foreground">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-foreground">mission</span>{" "}
                    <span className="text-primary">=</span> {"{"}
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-primary">goal</span>:{" "}
                    <span className="text-green-400">"eliminate bad UX"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">method</span>:{" "}
                    <span className="text-green-400">"clean code"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">philosophy</span>:{" "}
                    <span className="text-green-400">"open source"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">result</span>:{" "}
                    <span className="text-green-400">"happy devs"</span>,
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                  <div className="mt-4 text-muted-foreground">
                    <span className="text-purple-400">export</span>{" "}
                    <span className="text-purple-400">default</span>{" "}
                    <span className="text-foreground">mission</span>;
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl -z-10 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
