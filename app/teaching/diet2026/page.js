"use client";

import { useState } from "react";
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

export default function Diet2026Page() {
    const [activeTab, setActiveTab] = useState("about");

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