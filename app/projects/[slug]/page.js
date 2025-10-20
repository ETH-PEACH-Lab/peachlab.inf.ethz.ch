import pubs from "@/data/pubs.json";
import { blogImports } from "./blogImports";
import ProjectView from "./ProjectView";
import Image from "@/components/Image";
import "./style.css";

export const dynamicParams = false;
export async function generateStaticParams() {
  return pubs.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const pub = pubs.find((p) => p.slug === slug);
  if (!pub) return <div>Not found</div>;

  let blogRaw = null;
  const loader = blogImports[slug];
  if (typeof loader === "function") {
    const mod = await loader();
    blogRaw = typeof mod === "string" ? mod : mod?.default ?? null;
  }

  let ReactMarkdown, remarkGfm, rehypeRaw;
  if (blogRaw) {
    ReactMarkdown = (await import("react-markdown")).default;
    remarkGfm = (await import("remark-gfm")).default;
    rehypeRaw = (await import("rehype-raw")).default;
  }

  return (
    <div className="project-container">
      <div className="project-header">
        <h1 className="project-title">{pub.title}</h1>
        
        <div className="project-meta">
          <div className="project-meta-item">
            <span className="project-meta-label">Authors</span>
            <span className="project-meta-value">{pub.authors}</span>
          </div>
          <div className="project-meta-item">
            <span className="project-meta-label">Venue</span>
            <span className="project-meta-value">{pub.venue_full}</span>
          </div>
        </div>

        {/* Resource Buttons at Top */}
        <ProjectView pub={pub} />

        <div className="project-teaser">
          <Image
            src={pub.teaser}
            alt={pub.title}
          />
        </div>
      </div>

      <div className="project-content">
        {blogRaw && ReactMarkdown ? (
          <article className="project-article">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {blogRaw}
            </ReactMarkdown>
          </article>
        ) : (
          <div className="project-abstract">
            <h2 className="project-abstract-title">Abstract</h2>
            <p className="project-abstract-text">{pub.abstract}</p>
          </div>
        )}
      </div>
    </div>
  );
}
