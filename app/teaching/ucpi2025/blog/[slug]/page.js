
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

  return (
    <div className="blog-container">
      {/* Sidebar Navigation */}
      <aside className="blog-sidebar">
        <div style={{ marginBottom: "20px" }}>
          <a href="/teaching/ucpi2025" style={{ color: "#666", textDecoration: "none", fontSize: "0.9rem", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "6px" }}>←</span> Back to Seminar
          </a>
        </div>
        <ul className="blog-nav-list">
          {blogData.map((blog) => (
            <li key={blog.slug} className="blog-nav-item">
              <a 
                href={`/teaching/ucpi2025/blog/${blog.slug}`} 
                className={`blog-nav-link ${slug === blog.slug ? "active" : ""}`}
              >
                <span className="blog-nav-week">{blog.week}</span>
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="blog-content">
        <article className="prose prose-neutral max-w-none custom-blog-styles">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
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
                    src = `${basePath}/assets/teaching/ucpi2025-blogs${relativePath}`;
                  }
                }
                return (
                  <img {...props} src={src} style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '20px auto', display: 'block'}} />
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
  );
}
