import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build
            <span className="text-gradient block">Something Great</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. 
            Let's discuss how we can help bring your vision to life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Mail className="h-5 w-5" />
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <MessageSquare className="h-5 w-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Email */}
          <p className="mt-10 text-muted-foreground">
            Or email us directly at{" "}
            <a
              href="mailto:hello@badexperience.io"
              className="text-primary hover:underline"
            >
              hello@badexperience.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
