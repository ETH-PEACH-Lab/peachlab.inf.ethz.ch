"use client";

import { useEffect, useState } from "react";
import { Tabs, Table } from "@geist-ui/core";
import MemberCardMini from "@/team/MemberCardMini";
import "./style.css";
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
    { name: 'Aaron Zeller', title: 'How Data Becomes Information', tag: 'statistics', url: 'https://interactive-blog-statistics.onrender.com' },
    { name: 'Akankshya Ingale', title: 'What really happens when you send a message online?', tag: 'Network', url: 'https://akankshya.com/DesignInEdTech-IndividualBlog/' },
    { name: 'Albert Cerfeda', title: 'How image representation matters: pixels, frequencies, and perception', tag: 'Computer Vision', url: 'https://det.crfda.com', cover: '/assets/teaching/diet-blog-2026/Albert_Cerfeda.png' },
    { name: 'Alessia Lanini', title: 'Hadoop Distributed File Systems', tag: 'Systems', url: 'https://aleni01.github.io/DiET_teaching_blog_hdfs/' },
    { name: 'Alexandra Trofimova', title: 'Ray Tracing Concepts', tag: 'Computer Graphics', url: 'https://alextrofi.github.io/diet-interactive-blog/' },
    { name: 'Aloha Churchill', title: 'What time is it?', tag: 'Systems', url: 'https://aloha-churchill.github.io/clock-synchronization/' },
    { name: 'Inés Araujo Canas', title: 'The Leak', tag: 'Security', url: 'https://ines-araujo.github.io/' },
    { name: 'Krishna Le Moing', title: 'CPU Pipelining', tag: 'CPU Pipeline', url: 'https://krishna3960.github.io/Pipelining_Blog/' },
    { name: 'Leroy Borgeaud dit Avocat', title: 'Convolution Layers', tag: 'Computer Vision', url: 'https://eth-leroy.github.io/' },
    { name: 'Nagyung Kim', title: 'Seeing in Pixels', tag: 'Computer Vision', url: 'https://nkim7.github.io/edutech-blog/' },
    { name: 'Nicolas Stucki', title: 'Peeling the Onion', tag: 'Tor’s onion routing', url: 'https://nyckii.github.io/individual-blog/' },
    { name: 'Rui Wang', title: 'Seeing the World Through Attention', tag: 'Transformer', url: 'https://batfacewayne.github.io/DIET-VIT/' },
    { name: 'Sara Jun', title: "Let's learn all about DNS!", tag: 'DNS', url: 'https://joiningjun.wixsite.com/my-site-2' },
    { name: 'Sergejs Zahovskis', title: 'Enter the matrix: How Computers Count', tag: 'binary', url: 'https://0shean.github.io/binary-world-blog/' },
    { name: 'Shreyas Parida', title: 'How Does The Internet Find A Website?', tag: 'DNS resolution', url: 'https://shreyasfc.github.io/', cover: '/assets/teaching/diet-blog-2026/Shreyas_Parida.png' },
    { name: 'Sophia Kacem', title: 'Cryptex', tag: 'Diffie-Hellman', url: 'https://soso420.github.io/blog-Diffie-Hellman.github.io/character-select.html' },
    { name: 'Wanglei Shen', title: 'EyeTrack Explorer', tag: 'gaze patterns', url: 'https://belown.github.io/individual_blog/' },
    { name: 'Xiaozihan Wang', title: 'The Online Minimization Knapsack Problem & an O(log Δ)-Competitive Algorithm', tag: 'Knapsack Problem', url: 'https://minimal-backpack-problem-blog.vercel.app/' },
    { name: 'Zihan Li', title: 'The Meaning Machine: How Search Engines Read Your Mind', tag: 'Word Vector', url: 'https://nickoverxx11-create.github.io/demo/' },
];

const TAG_COLOR_PALETTE = [
    { background: '#fef3c7', border: '#fcd34d', color: '#92400e' },
    { background: '#dbeafe', border: '#93c5fd', color: '#1e3a8a' },
    { background: '#dcfce7', border: '#86efac', color: '#166534' },
    { background: '#fce7f3', border: '#f9a8d4', color: '#9d174d' },
    { background: '#ede9fe', border: '#c4b5fd', color: '#5b21b6' },
    { background: '#e0f2fe', border: '#7dd3fc', color: '#0c4a6e' },
    { background: '#ffedd5', border: '#fdba74', color: '#9a3412' },
    { background: '#ecfccb', border: '#bef264', color: '#3f6212' },
];

function getTagStyle(tag) {
    const key = (tag || '').toLowerCase();
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
        hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    }
    const picked = TAG_COLOR_PALETTE[hash % TAG_COLOR_PALETTE.length];
    return {
        background: picked.background,
        borderColor: picked.border,
        color: picked.color,
    };
}

export default function Diet2026Page() {
    const [activeTab, setActiveTab] = useState("about");
    const [blogPreviews, setBlogPreviews] = useState({});

    useEffect(() => {
        let cancelled = false;

        const fetchPreviews = async () => {
            const entries = await Promise.all(
                DIET_BLOGS.map(async ({ url }) => {
                    const fallbackImage = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
                    try {
                        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
                        if (!res.ok) return [url, { image: fallbackImage, description: "" }];
                        const data = await res.json();
                        return [url, { image: data.image || fallbackImage, description: data.description || "" }];
                    } catch {
                        return [url, { image: fallbackImage, description: "" }];
                    }
                })
            );

            if (!cancelled) {
                setBlogPreviews(Object.fromEntries(entries));
            }
        };

        fetchPreviews();

        return () => {
            cancelled = true;
        };
    }, []);

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
                return (
                    <div>
                        <h3 style={{ marginTop: 0 }}>Final Blog Posts</h3>
                        <p style={{ color: '#666', marginTop: '0.25rem' }}>Explore the final interactive blogs created by students. Click an entry to open the full post.</p>

                        <div className="diet-final-gallery" size="small">
                            {DIET_BLOGS.map(({ name, title, tag, url, cover }) => {
                                const preview = blogPreviews[url] || {};
                                const thumbnail = cover || preview.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
                                return (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="diet-final-entry-link">
                                        <div className="diet-final-entry">
                                            <img src={thumbnail} alt={`${name} cover`} className="diet-final-thumb" />
                                            <div className="diet-final-meta">
                                                <div className="diet-final-title-row">
                                                    <div className="diet-final-name">{title}</div>
                                                    <span className="diet-final-tag" style={getTagStyle(tag)}>{tag}</span>
                                                </div>
                                                <div className="diet-final-author">Author: {name}</div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <style jsx>{`
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
                            .diet-final-thumb {
                                width: 100%;
                                height: 180px;
                                object-fit: cover;
                                background: #f5f5f5;
                                border-bottom: 1px solid #ededed;
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
                <Tabs value={activeTab} onChange={setActiveTab} style={{ marginBottom: "2rem" }}>
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