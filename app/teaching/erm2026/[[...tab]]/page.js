import Erm2026Client from "./Erm2026Client";

const TAB_SLUGS = ["syllabus", "grading"];

export function generateStaticParams() {
    return [
        { tab: [] },
        ...TAB_SLUGS.map((slug) => ({ tab: [slug] })),
    ];
}

export default async function Page({ params }) {
    const resolved = await params;
    const tab = resolved?.tab?.[0];
    return <Erm2026Client tab={tab} />;
}
