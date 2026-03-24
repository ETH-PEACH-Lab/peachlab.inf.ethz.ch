import { noteImports, noteSlugs } from "./noteImports";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const dynamicParams = false;

export async function generateStaticParams() {
  return noteSlugs.map((slug) => ({ slug }));
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  
  const loader = noteImports[slug];
  if (!loader) {
    return <div>Note not found</div>;
  }

  const mod = await loader();
  const content = typeof mod === "string" ? mod : mod?.default ?? "";

  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <article className="prose prose-neutral max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
