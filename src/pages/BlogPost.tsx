import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Sample blog post content - in a real app, this would come from MDX files
const blogPostsContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "building-cli-tools-with-rust": {
    title: "Building CLI Tools with Rust",
    date: "2024-12-10",
    readTime: "8 min read",
    tags: ["Rust", "CLI", "Development"],
    content: `
## Why Rust for CLI Tools?

Rust has become one of the most popular choices for building command-line tools. Here's why:

- **Performance**: Rust compiles to native code, making it incredibly fast
- **Safety**: The borrow checker prevents common bugs at compile time
- **Great ecosystem**: Libraries like clap, serde, and tokio make development smooth
- **Single binary**: Easy distribution without runtime dependencies

## Getting Started

First, create a new Rust project:

\`\`\`bash
cargo new my-cli-tool
cd my-cli-tool
\`\`\`

Add clap for argument parsing:

\`\`\`toml
[dependencies]
clap = { version = "4.0", features = ["derive"] }
\`\`\`

## Building the Parser

Here's a simple example using clap's derive feature:

\`\`\`rust
use clap::Parser;

#[derive(Parser, Debug)]
#[command(name = "my-tool")]
#[command(about = "A simple CLI tool")]
struct Args {
    #[arg(short, long)]
    name: String,
    
    #[arg(short, long, default_value = "1")]
    count: u8,
}

fn main() {
    let args = Args::parse();
    
    for _ in 0..args.count {
        println!("Hello, {}!", args.name);
    }
}
\`\`\`

## Conclusion

Rust's combination of performance, safety, and excellent tooling makes it an ideal choice for CLI development. The ecosystem continues to grow, making it easier than ever to build professional-grade command-line applications.
    `,
  },
  "webrtc-fundamentals": {
    title: "WebRTC Fundamentals",
    date: "2024-11-28",
    readTime: "12 min read",
    tags: ["WebRTC", "JavaScript", "Real-time"],
    content: `
## Introduction to WebRTC

WebRTC (Web Real-Time Communication) enables peer-to-peer communication directly in browsers without plugins. It's the foundation for video calls, screen sharing, and real-time data transfer.

## Core Components

### 1. MediaStream API

Captures audio and video:

\`\`\`javascript
const stream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
});
\`\`\`

### 2. RTCPeerConnection

The heart of WebRTC - manages the peer connection:

\`\`\`javascript
const pc = new RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});
\`\`\`

### 3. RTCDataChannel

For arbitrary data transfer between peers:

\`\`\`javascript
const channel = pc.createDataChannel('my-channel');
channel.onmessage = (e) => console.log(e.data);
\`\`\`

## The Signaling Process

WebRTC requires a signaling server to exchange connection metadata. The process involves:

1. Create an offer
2. Exchange SDP (Session Description Protocol)
3. Exchange ICE candidates
4. Establish connection

## Conclusion

WebRTC opens up possibilities for building real-time applications directly in the browser. While the API can be complex, understanding these fundamentals will help you build powerful peer-to-peer applications.
    `,
  },
  "thoughts-on-developer-experience": {
    title: "Thoughts on Developer Experience",
    date: "2024-11-15",
    readTime: "5 min read",
    tags: ["DX", "Tooling", "Opinion"],
    content: `
## What is Developer Experience?

Developer Experience (DX) encompasses everything that affects how developers interact with your tool, library, or API. Good DX means developers can accomplish their goals efficiently and enjoyably.

## Key Principles

### 1. Sensible Defaults

Tools should work out of the box. Zero-config setups that "just work" are the gold standard.

### 2. Clear Error Messages

When things go wrong (and they will), errors should:
- Explain what happened
- Suggest how to fix it
- Include relevant context

### 3. Progressive Disclosure

Simple tasks should be simple. Advanced features should be available but not required.

### 4. Fast Feedback Loops

Whether it's hot reloading, incremental compilation, or instant previews - speed matters.

## Examples of Great DX

- **Vite**: Near-instant HMR and sensible defaults
- **Vercel**: Push to deploy with zero configuration
- **Tailwind**: Utility-first CSS with excellent documentation
- **Rust**: Compiler errors that actually help

## The Cost of Poor DX

Bad developer experience isn't just frustrating - it's expensive. Time spent fighting tools is time not spent building features. Poor documentation leads to support burden. Complex setup creates friction for adoption.

## Conclusion

Investing in DX isn't a luxury - it's essential for tools that want to succeed. The best tools disappear into the background, letting developers focus on what they're trying to build.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono">cd ../blog</span>
          </Link>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono rounded-md bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div
            className="
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-foreground
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-foreground
              [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:space-y-2 [&>ul]:my-4 [&>ul]:pl-6
              [&>ul>li]:text-muted-foreground [&>ul>li]:list-disc
              [&>ol]:space-y-2 [&>ol]:my-4 [&>ol]:pl-6
              [&>ol>li]:text-muted-foreground [&>ol>li]:list-decimal
              [&>pre]:bg-card [&>pre]:border [&>pre]:border-border [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>pre]:overflow-x-auto
              [&>pre>code]:font-mono [&>pre>code]:text-sm [&>pre>code]:text-foreground
              [&>code]:font-mono [&>code]:text-sm [&>code]:bg-secondary [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded
            "
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/`{3}(\w+)?\n([\s\S]*?)`{3}/g, '<pre><code>$2</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/^- (.+)$/gm, '<li>$1</li>')
                .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                .replace(/\n\n(?![<])/g, '</p><p>')
                .replace(/^(?![<])(.+)$/gm, '<p>$1</p>')
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
