import pubs from '@/data/pubs.json';
import ProjectView from './ProjectView';

export async function generateStaticParams() {
  return pubs.map((pub) => ({ slug: pub.slug }));
}

export default async function ProjectPage({ params }) {
  // Await params.slug in case it's a Promise
  const { slug } = await params;
  const pub = pubs.find(p => p.slug === slug);

  if (!pub) return <div>Not found</div>;

  return <ProjectView pub={pub} />;
}
