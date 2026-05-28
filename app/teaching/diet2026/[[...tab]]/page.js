import Diet2026Client from "./Diet2026Client";

const TAB_SLUGS = ["syllabus", "blog", "final", "project"];

export function generateStaticParams() {
    return [
        { tab: [] },
        ...TAB_SLUGS.map((slug) => ({ tab: [slug] })),
    ];
}

export default async function Page({ params }) {
    const resolved = await params;
    const tab = resolved?.tab?.[0];
    return <Diet2026Client tab={tab} />;
}
