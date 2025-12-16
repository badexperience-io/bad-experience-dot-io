import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

// This would typically come from your MDX files or a CMS
const blogPosts = [
  {
    slug: "building-cli-tools-with-rust",
    title: "Building CLI Tools with Rust",
    excerpt: "A deep dive into creating performant command-line tools using Rust and its ecosystem.",
    date: "2024-12-10",
    readTime: "8 min read",
    tags: ["Rust", "CLI", "Development"],
  },
  {
    slug: "webrtc-fundamentals",
    title: "WebRTC Fundamentals",
    excerpt: "Understanding peer-to-peer communication in the browser and building real-time applications.",
    date: "2024-11-28",
    readTime: "12 min read",
    tags: ["WebRTC", "JavaScript", "Real-time"],
  },
  {
    slug: "thoughts-on-developer-experience",
    title: "Thoughts on Developer Experience",
    excerpt: "Why DX matters and how to build tools that developers actually want to use.",
    date: "2024-11-15",
    readTime: "5 min read",
    tags: ["DX", "Tooling", "Opinion"],
  },
];

const Blog = () => {
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
            <span className="text-primary font-mono">/</span>blog
          </h1>
          <p className="text-muted-foreground">
            Writing about code, tools, and ideas.
          </p>
        </header>

        {/* Blog posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-soft transition-all">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span className="font-mono">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {post.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h2>

                  <p className="text-muted-foreground mt-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
