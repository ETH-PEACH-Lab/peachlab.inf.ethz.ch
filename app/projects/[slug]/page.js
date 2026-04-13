import pubs from "@/data/pubs.json";
import { blogImports } from "./blogImports";
import ProjectView from "./ProjectView";
import Image from "@/components/Image";

// Slugs that have dedicated static pages (not using this dynamic route)
const staticPageSlugs = ["toio", "multimodal-tutor", "teamwise"];

export const dynamicParams = false;
export async function generateStaticParams() {
  return pubs
    .filter((p) => !staticPageSlugs.includes(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params; // Do NOT destructure with { slug } in async
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
    <div className="mx-auto max-w-3xl px-5 py-8">

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>{pub.title}</h2>

        <p>
          <strong>Authors:</strong> {pub.authors}
        </p>
        <p>
          <strong>Venue:</strong> {pub.venue_full}
        </p>
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Image
            src={pub.teaser_full ? pub.teaser_full : pub.teaser}
            alt="teaser"
            style={{
              maxWidth: "100%",   // don’t overflow horizontally
              height: "auto",     // keep aspect ratio
              maxHeight: "500px", // optional cap for very tall images
              objectFit: "contain"
            }}
          />
        </div>
        {blogRaw && ReactMarkdown ? (
          <article className="prose prose-neutral max-w-none mb-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{blogRaw}</ReactMarkdown>
          </article>
        ) : (<div style={{ marginTop: "36px" }}>
          <p style={{ fontWeight: 600, marginBottom: "8px", fontSize: "1.1rem" }}>Abstract</p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
            {pub.abstract}
          </p>
        </div>)}
        <ProjectView pub={pub} />
      </div>
    </div>
  );
}
