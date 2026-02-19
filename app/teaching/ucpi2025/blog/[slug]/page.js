
import { blogImports } from "../../blogImports";
import { blogData } from "../../blogData";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ClientNote from "./ClientNote";
import "./blog.css";

export async function generateStaticParams() {
  return Object.keys(blogImports).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const loader = blogImports[slug];

  if (!loader) {
    return <div>Blog post not found.</div>;
  }

  const mod = await loader();
  const content = typeof mod === "string" ? mod : mod?.default;
  
  // Find metadata for the current blog
  const currentBlog = blogData.find(b => b.slug === slug);
  const authorName = currentBlog ? currentBlog.author : "a student";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Build sidebar items grouped by week so each week label appears once
  const sidebarItems = [];
  let currentWeekLabel = null;

  blogData.forEach((blog) => {
    if (blog.week !== currentWeekLabel) {
      currentWeekLabel = blog.week;
      sidebarItems.push(
        <li key={`week-${currentWeekLabel}`} className="blog-nav-week-item">
          <div className="blog-nav-week-label">{currentWeekLabel}</div>
        </li>
      );
    }

    sidebarItems.push(
      <li key={blog.slug} className="blog-nav-item">
        <a
          href={`${basePath}/teaching/ucpi2025/blog/${blog.slug}/`}
          className={`blog-nav-link ${slug === blog.slug ? "active" : ""}`}
        >
          {blog.title}
        </a>
      </li>
    );
  });

  return (
    <div>
    <div style={{ marginBottom: "20px" }}>
          <a href={`${basePath}/teaching/ucpi2025/`} style={{ color: "#666", textDecoration: "none", fontSize: "0.9rem", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "6px" }}>←</span> Back to Seminar
          </a>
        </div>
    <div className="blog-container">
      {/* Sidebar Navigation */}
      <aside className="blog-sidebar">
  
        <ul className="blog-nav-list">
          {sidebarItems}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="blog-content">
        <article className="prose prose-neutral max-w-none custom-blog-styles">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({node, children, ...props}) => {
                // Check if this is the first h2 (main title)
                const isFirstH2 = node.position?.start?.line <= 5;
                return (
                  <>
                    <h2 {...props}>{children}</h2>
                    {isFirstH2 && currentBlog && (
                      <p className="blog-byline">by {authorName}</p>
                    )}
                  </>
                );
              },
              img: ({node, ...props}) => {
                let src = props.src;
                if (src) {
                  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                  
                  // Case 1: Absolute path starting with /assets/
                  if (src.startsWith("/assets/")) {
                    src = `${basePath}${src}`;
                  } 
                  // Case 2: Relative path (not http, not /, or starts with ./)
                  else if (!src.startsWith("http") && (!src.startsWith("/") || src.startsWith("./"))) {
                     // Handle ./ prefix if present
                    const relativePath = src.startsWith("./") ? src.substring(1) : `/${src}`;
                    src = `${basePath}/assets/teaching/ucpi-blog-2025/blogs${relativePath}`;
                  }
                }
                
                // Build custom style object, respecting height/width attributes if provided
                const widthStr = props.width ? String(props.width) : null;
                const heightStr = props.height ? String(props.height) : null;
                
                const customStyle = {
                  maxWidth: widthStr ? (widthStr.includes('%') || widthStr.includes('px') ? widthStr : `${widthStr}px`) : '100%',
                  height: heightStr ? (heightStr.includes('%') || heightStr.includes('px') ? heightStr : `${heightStr}px`) : 'auto',
                  borderRadius: '8px',
                  margin: '20px auto',
                  display: 'block'
                };
                
                return (
                  <img {...props} src={src} alt={props.alt || ""} style={customStyle} />
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
        
        <div style={{ marginTop: "60px", borderTop: "1px solid #eaeaea", paddingTop: "20px" }}>
          <ClientNote label={false} type="secondary">
            This blog post was written by <b>{authorName}</b>, a student of the UCPI 2025 seminar. 
          </ClientNote>
        </div>
      </main>
    </div>
    </div>
  );
}
