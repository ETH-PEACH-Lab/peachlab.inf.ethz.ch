"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tabs, Table } from "@geist-ui/core";
import MemberCardMini from "@/team/MemberCardMini";
import "../style.css";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// eslint-disable-next-line import/no-webpack-loader-syntax
import blogMd from '!raw-loader!@/data/teaching/diet2026/blog.md';

// eslint-disable-next-line import/no-webpack-loader-syntax
import projectMd from '!raw-loader!@/data/teaching/diet2026/project.md';

// eslint-disable-next-line import/no-webpack-loader-syntax
import aboutMd from '!raw-loader!@/data/teaching/diet2026/about.md';

const DIET_BLOGS = [
    { name: 'Aaron Zeller', title: 'How Data Becomes Information', tag: 'Data Science', consent: true, url: 'https://aaron-zeller.github.io/statistics-blog.io/' },
    { name: 'Akankshya Ingale', title: 'What really happens when you send a message online?', tag: 'Networking', consent: true, url: 'https://akankshya.com/DesignInEdTech-IndividualBlog/' },
    { name: 'Albert Cerfeda', title: 'How image representation matters: pixels, frequencies, and perception', tag: 'Computer Vision', consent: false, url: 'https://det.crfda.com', cover: '/assets/teaching/diet-blog-2026/Albert_Cerfeda.png' },
    { name: 'Alessia Lanini', title: 'Hadoop Distributed File Systems', tag: 'Systems', consent: true, url: 'https://aleni01.github.io/DiET_teaching_blog_hdfs/' },
    { name: 'Alexandra Trofimova', title: 'Ray Tracing Concepts', tag: 'Computer Vision', consent: true, url: 'https://alextrofi.github.io/diet-interactive-blog/' },
    { name: 'Aloha Churchill', title: 'What time is it?', tag: 'Systems', consent: true, url: 'https://aloha-churchill.github.io/clock-synchronization/' },
    { name: 'Inés Araujo Canas', title: 'The Leak', tag: 'Security', consent: true, url: 'https://ines-araujo.github.io/' },
    { name: 'Krishna Le Moing', title: 'CPU Pipelining', tag: 'Systems', consent: true, url: 'https://krishna3960.github.io/Pipelining_Blog/' },
    { name: 'Leroy Borgeaud dit Avocat', title: 'Convolution Layers', tag: 'Computer Vision', consent: true, url: 'https://eth-leroy.github.io/' },
    { name: 'Nagyung Kim', title: 'Seeing in Pixels', tag: 'Computer Vision', consent: true, url: 'https://nkim7.github.io/edutech-blog/' },
    { name: 'Nicolas Stucki', title: 'Peeling the Onion', tag: 'Networking', consent: true, url: 'https://nyckii.github.io/individual-blog/', award: 'best' },
    { name: 'Rui Wang', title: 'Seeing the World Through Attention', tag: 'Computer Vision', consent: true, url: 'https://batfacewayne.github.io/DIET-VIT/' },
    { name: 'Sara Jun', title: "Let's learn all about DNS!", tag: 'Networking', consent: false, url: 'https://joiningjun.wixsite.com/my-site-2' },
    { name: 'Sergejs Zahovskis', title: 'Enter the matrix: How Computers Count', tag: 'Systems', consent: true, url: 'https://0shean.github.io/binary-world-blog/' },
    { name: 'Shreyas Parida', title: 'How Does The Internet Find A Website?', tag: 'Networking', consent: false, url: 'https://shreyasfc.github.io/', cover: '/assets/teaching/diet-blog-2026/Shreyas_Parida.png' },
    { name: 'Sophia Kacem', title: 'Cryptex', tag: 'Security', consent: true, url: 'https://soso420.github.io/blog-Diffie-Hellman.github.io/character-select.html' },
    { name: 'Wanglei Shen', title: 'EyeTrack Explorer', tag: 'Sensing', consent: true, url: 'https://belown.github.io/individual_blog/', award: 'honorable' },
    { name: 'Xiaozihan Wang', title: 'The Online Minimization Knapsack Problem & an O(log Δ)-Competitive Algorithm', tag: 'Algorithms', consent: true, url: 'https://minimal-backpack-problem-blog.vercel.app/', award: 'honorable' },
    { name: 'Zihan Li', title: 'The Meaning Machine: How Search Engines Read Your Mind', tag: 'NLP', consent: true, url: 'https://nickoverxx11-create.github.io/demo/' },
];

const TAG_COLOR_MAP = {
    'data science': { background: '#fde68a', border: '#f59e0b', color: '#78350f' },
    networking: { background: '#bfdbfe', border: '#3b82f6', color: '#1e3a8a' },
    'computer vision': { background: '#fecdd3', border: '#f43f5e', color: '#881337' },
    systems: { background: '#bbf7d0', border: '#22c55e', color: '#14532d' },
    'sensing': { background: '#ddd6fe', border: '#8b5cf6', color: '#4c1d95' },
    security: { background: '#fed7aa', border: '#f97316', color: '#7c2d12' },
    'eye tracking': { background: '#a5f3fc', border: '#06b6d4', color: '#164e63' },
    math: { background: '#fbcfe8', border: '#ec4899', color: '#831843' },
    nlp: { background: '#d9f99d', border: '#84cc16', color: '#365314' },
};

const TAG_FALLBACK_PALETTE = [
    { background: '#fef3c7', border: '#f59e0b', color: '#78350f' },
    { background: '#dbeafe', border: '#3b82f6', color: '#1e3a8a' },
    { background: '#dcfce7', border: '#22c55e', color: '#14532d' },
    { background: '#fce7f3', border: '#ec4899', color: '#831843' },
    { background: '#ede9fe', border: '#8b5cf6', color: '#4c1d95' },
    { background: '#e0f2fe', border: '#06b6d4', color: '#164e63' },
    { background: '#ffedd5', border: '#f97316', color: '#7c2d12' },
    { background: '#ecfccb', border: '#84cc16', color: '#365314' },
];

function getTagStyle(tag) {
    const key = (tag || '').trim().toLowerCase();
    if (TAG_COLOR_MAP[key]) {
        return TAG_COLOR_MAP[key];
    }

    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
        hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    }
    const picked = TAG_FALLBACK_PALETTE[hash % TAG_FALLBACK_PALETTE.length];
    return {
        background: picked.background,
        borderColor: picked.border,
        color: picked.color,
    };
}

function formatTagLabel(tag) {
    if (!tag) {
        return '';
    }
    return tag.charAt(0).toUpperCase() + tag.slice(1);
}

const VALID_TABS = ["about", "syllabus", "blog", "final", "project"];

export default function Diet2026Client({ tab }) {
    const router = useRouter();
    const initialTab = VALID_TABS.includes(tab) ? tab : "about";
    const [activeTab, setActiveTab] = useState(initialTab);
    const [selectedTag, setSelectedTag] = useState("all");
    const finalBlogTags = Array.from(new Set(DIET_BLOGS.map(({ tag }) => tag)));

    useEffect(() => {
        const next = VALID_TABS.includes(tab) ? tab : "about";
        setActiveTab(next);
    }, [tab]);

    const handleTabChange = (value) => {
        setActiveTab(value);
        const path = value === "about" ? "/teaching/diet2026" : `/teaching/diet2026/${value}`;
        router.replace(path, { scroll: false });
    };

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {aboutMd}
                        </ReactMarkdown>

                        <h4 style={{ marginTop: "2rem" }}>Teaching Team</h4>
                        <p>Please post questions on Moodle if you can, so others can see them and share in the discussion. If you have questions which are not of general interest, please don’t hesitate to contact us directly.</p>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <MemberCardMini slug="awang" />
                            <MemberCardMini slug="lgoswami" />
                            <MemberCardMini slug="ywu" />
                        </div>

                        <h4 style={{ marginTop: "2rem" }}>Grading</h4>
                        <p>The grading consists of individual components (40%) and group project components (60%).</p>
                        <ul>
                            <li><strong>Individual Components (40%)</strong>
                                <ul>
                                    <li>In-class Quizzes (10%)</li>
                                    <li>Individual Blog (30%)</li>
                                </ul>
                            </li>
                            <li><strong>Project Components (60%)</strong>
                                <ul>
                                    <li>Deliverable (50%)</li>
                                    <li>Demo Day (10%)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                );
            case "syllabus":
                return (
                    <div>
                        <p>Please find the weekly topics below. We expect you to come and attend the lecture sessions in person. For readings, lecture slides, lecture notes, and recordings, please check our course <a href="https://moodle-app2.let.ethz.ch/course/view.php?id=27992" target="_blank" rel="noopener noreferrer">Moodle</a>.</p>
                        <SyllabusTable />
                    </div>
                );
            case "blog":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {blogMd}
                        </ReactMarkdown>
                    </div>
                );
            case "project":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {projectMd}
                        </ReactMarkdown>
                    </div>
                );
            case "final":
                const visibleBlogs = selectedTag === "all"
                    ? DIET_BLOGS
                    : DIET_BLOGS.filter(({ tag }) => tag === selectedTag);

                return (
                    <div>
                        <h3 style={{ marginTop: 0 }}>Final Blog Posts</h3>
                        <p style={{ color: '#666', marginTop: '0.25rem' }}>Congratulations on finishing your final blogs! Browse by topic below. (P.S. Open posts were shared with permission, locked posts are private, and the posts are listed in no particular order.)</p>

                        <div className="diet-final-filter-nav" role="tablist" aria-label="Filter by topic tag">
                            <button
                                type="button"
                                className={`diet-final-filter-pill${selectedTag === 'all' ? ' active' : ''}`}
                                onClick={() => setSelectedTag('all')}
                            >
                                All
                            </button>
                            {finalBlogTags.map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    className={`diet-final-filter-pill${selectedTag === tag ? ' active' : ''}`}
                                    style={getTagStyle(tag)}
                                    onClick={() => setSelectedTag(tag)}
                                >
                                    {formatTagLabel(tag)}
                                </button>
                            ))}
                        </div>

                        <div className="diet-final-gallery" size="small">
                            {visibleBlogs.map(({ name, title, tag, consent, url, cover, award }) => {
                                const thumbnail = cover || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
                                const awardLabel = award === 'best' ? 'Best Blog Award' : award === 'honorable' ? 'Honorable Mention' : null;
                                const awardIcon = award === 'best' ? '🏆' : award === 'honorable' ? '🎖️' : null;
                                const card = (
                                    <div className={`diet-final-entry${!consent ? ' diet-final-entry-locked' : ''}`}>
                                        <img src={thumbnail} alt={`${name} cover`} className="diet-final-thumb" />
                                        {award && (
                                            <span
                                                className={`diet-final-award diet-final-award-${award}`}
                                                title={awardLabel}
                                                aria-label={awardLabel}
                                            >
                                                <span className="diet-final-award-icon" aria-hidden="true">{awardIcon}</span>
                                                <span className="diet-final-award-label">{awardLabel}</span>
                                            </span>
                                        )}
                                        <div className="diet-final-meta">
                                            <div className="diet-final-title-row">
                                                <div className="diet-final-name">{title}</div>
                                                <span className="diet-final-tag" style={getTagStyle(tag)}>{formatTagLabel(tag)}</span>
                                            </div>
                                            <div className="diet-final-author">Author: {name}</div>
                                        </div>
                                        {!consent && (
                                            <div className="diet-final-overlay" aria-hidden="true">
                                                <span className="diet-final-lock" />
                                            </div>
                                        )}
                                    </div>
                                );

                                if (!consent) {
                                    return (
                                        <div key={url} className="diet-final-entry-link diet-final-entry-link-disabled" aria-disabled="true">
                                            {card}
                                        </div>
                                    );
                                }

                                return (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="diet-final-entry-link">
                                        {card}
                                    </a>
                                );
                            })}
                        </div>

                        <style jsx>{`
                            .diet-final-filter-nav {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 8px;
                                margin: 12px 0 14px;
                            }
                            .diet-final-filter-pill {
                                font-size: 12px;
                                line-height: 1;
                                padding: 7px 10px;
                                border-radius: 999px;
                                border: 1px solid #d1d5db;
                                background: #f9fafb;
                                color: #374151;
                                font-weight: 600;
                                cursor: pointer;
                                transition: transform 0.14s ease, box-shadow 0.14s ease, border-color 0.14s ease;
                            }
                            .diet-final-filter-pill:hover {
                                transform: translateY(-1px);
                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
                            }
                            .diet-final-filter-pill.active {
                                border-color: #111827;
                                box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
                            }
                            .diet-final-gallery {
                                display: grid;
                                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                                gap: 14px;
                                margin: 18px 0 32px;
                            }
                            .diet-final-entry-link {
                                display: block;
                                text-decoration: none;
                                color: inherit;
                            }
                            .diet-final-entry {
                                display: flex;
                                flex-direction: column;
                                align-items: start;
                                position: relative;
                                border: 1px solid #ececec;
                                border-radius: 10px;
                                overflow: hidden;
                                background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
                                transition: border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
                            }
                            .diet-final-entry-link:hover .diet-final-entry {
                                transform: translateY(-2px);
                                border-color: #d6d6d6;
                                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
                            }
                            .diet-final-entry-link-disabled {
                                cursor: not-allowed;
                            }
                            .diet-final-entry-link-disabled:hover .diet-final-entry {
                                transform: none;
                                border-color: #ececec;
                                box-shadow: none;
                            }
                            .diet-final-entry-locked {
                                filter: grayscale(0.35);
                            }
                            .diet-final-thumb {
                                width: 100%;
                                height: 180px;
                                object-fit: cover;
                                background: #f5f5f5;
                                border-bottom: 1px solid #ededed;
                            }
                            .diet-final-award {
                                position: absolute;
                                top: 10px;
                                left: 10px;
                                display: inline-flex;
                                align-items: center;
                                gap: 5px;
                                padding: 5px 10px;
                                border-radius: 999px;
                                font-size: 11px;
                                font-weight: 700;
                                line-height: 1;
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
                                backdrop-filter: blur(4px);
                                z-index: 1;
                            }
                            .diet-final-award-best {
                                background: linear-gradient(135deg, #fde68a 0%, #f59e0b 100%);
                                color: #78350f;
                                border: 1px solid #d97706;
                            }
                            .diet-final-award-honorable {
                                background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
                                color: #1f2937;
                                border: 1px solid #6b7280;
                            }
                            .diet-final-award-icon {
                                font-size: 13px;
                                line-height: 1;
                            }
                            .diet-final-meta {
                                width: 100%;
                                padding: 10px 12px 12px;
                                min-width: 0;
                            }
                            .diet-final-title-row {
                                display: flex;
                                align-items: center;
                                flex-wrap: nowrap;
                                gap: 6px;
                                margin-bottom: 4px;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                            .diet-final-name {
                                font-weight: 700;
                                line-height: 1.35;
                                margin-right: 4px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                min-width: 0;
                            }
                            .diet-final-tag {
                                flex-shrink: 0;
                                font-size: 11px;
                                line-height: 1;
                                padding: 5px 8px;
                                border-radius: 999px;
                                border: 1px solid transparent;
                                font-weight: 600;
                            }
                            .diet-final-overlay {
                                position: absolute;
                                inset: 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: rgba(243, 244, 246, 0.62);
                            }
                            .diet-final-lock {
                                position: relative;
                                width: 18px;
                                height: 14px;
                                border-radius: 3px;
                                background: #6b7280;
                            }
                            .diet-final-lock::before {
                                content: '';
                                position: absolute;
                                left: 3px;
                                top: -10px;
                                width: 12px;
                                height: 10px;
                                border: 3px solid #6b7280;
                                border-bottom: 0;
                                border-radius: 8px 8px 0 0;
                                box-sizing: border-box;
                            }
                            .diet-final-lock::after {
                                content: '';
                                position: absolute;
                                left: 8px;
                                top: 5px;
                                width: 2px;
                                height: 4px;
                                border-radius: 1px;
                                background: #d1d5db;
                            }
                            .diet-final-author {
                                font-size: 13px;
                                color: #555;
                                line-height: 1.45;
                            }
                            @media (max-width: 520px) {
                                .diet-final-thumb {
                                    width: 100%;
                                    height: 160px;
                                }
                            }
                        `}</style>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Design in Educational Technology 2026</h2>
            <div>
                <Tabs value={activeTab} onChange={handleTabChange} style={{ marginBottom: "2rem" }}>
                    <Tabs.Item label="About" value="about" />
                    <Tabs.Item label="Syllabus" value="syllabus" />
                    <Tabs.Item label="Individual Blog" value="blog" />
                    <Tabs.Item label="Final Blog Post" value="final" />
                    <Tabs.Item label="Course Project" value="project" />
                </Tabs>
            </div>
            <div style={{ minHeight: "200px" }}>
                {renderContent()}
            </div>
        </div>
    );
}

const SyllabusTable = () => {
    const data = [
        { week: 'W1', date: 'Feb 20', topic: 'Course Overview', remarks: '', isNoClass: false, isProject: false },
        { week: 'W2', date: 'Feb 27', topic: 'Learner-Centered Design', remarks: 'Team formation due', isNoClass: false, isProject: false },
        { week: 'W3', date: 'March 6', topic: 'The Science of Learning', remarks: '', isNoClass: false, isProject: false },
        { week: 'W4', date: 'March 13', topic: 'Multimedia Learning', remarks: 'Guest: <a href="https://people.inf.ethz.ch/sverrirt/">Dr. Sverrir Thorgeirsson</a>', isNoClass: false, isProject: false },
        { week: 'W5', date: 'March 20', topic: 'Assessment of Learning', remarks: 'Guest: <a href="https://doheejin.github.io/about_me/">Dr. Heejin Do</a>', isNoClass: false, isProject: false },
        { week: 'W6', date: 'March 27', topic: 'Learning Motivation & Self-Regulation', remarks: 'Guest: <a href="https://patricialvesoliveira.com/">Prof. Patrícia Alves-Oliveira</a>', isNoClass: false, isProject: false },
        { week: 'W7', date: 'April 3', topic: 'Good Friday - no class', remarks: 'Individual blog due', isNoClass: true, isProject: false },
        { week: 'W8', date: 'April 10', topic: 'Week after Easter - no class', remarks: '', isNoClass: true, isProject: false },
        { week: 'W9', date: 'April 17', topic: 'Intelligent Tutoring Systems', remarks: 'Guest: <a href="https://lre.inf.ethz.ch/">Prof. Mrinmaya Sachan</a>', isNoClass: false, isProject: false },
        { week: 'W10', date: 'April 24', topic: 'Embodied and Tangible Learning', remarks: 'Guest: <a href="https://juliachatain.com/">Prof. Julia Chatain</a>', isNoClass: false, isProject: false },
        { week: 'W11', date: 'May 1', topic: 'Labour Day - no class', remarks: '', isNoClass: true, isProject: false },
        { week: 'W12', date: 'May 8', topic: 'Collaborative and Social Learning', remarks: 'Guest: <a href="https://belearn.swiss/en/research-practice/projects/arguemate/">Dr. Chenyang Wang</a>', isNoClass: false, isProject: false },
        { week: 'W13', date: 'May 15', topic: 'Learning at Scale', remarks: 'Guest: <a href="https://www.juditmm.com/">Dr. Judit Martínez Moreno</a> from <a href="https://sparkli.ai/">Sparkli</a>', isNoClass: false, isProject: false },
        { week: 'W14', date: 'May 22', topic: 'Project Demo Day', remarks: 'Final presentations', isNoClass: false, isProject: true },
        { week: 'W15', date: 'May 29', topic: 'No class', remarks: 'Final deliverable due', isNoClass: true, isProject: false },
    ];

    return (
        <div className="diet2026-table-wrapper">
            <Table
                data={data}
                rowClassName={(rowData) =>
                    rowData.isNoClass
                        ? 'no-class-row'
                        : rowData.isProject
                            ? 'project-row'
                            : ''
                }
            >
                <Table.Column prop="week" label="Week" render={(value) => <span>{value}</span>} />
                <Table.Column prop="date" label="Date" render={(value) => <span>{value}</span>} />
                <Table.Column prop="topic" label="Topic" render={(value) => <strong>{value}</strong>} />
                <Table.Column prop="remarks" label="Remarks" render={(value) => <span dangerouslySetInnerHTML={{ __html: value }} />} />
            </Table>
        </div>
    );
};
