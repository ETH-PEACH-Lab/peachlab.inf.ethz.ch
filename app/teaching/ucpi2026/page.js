"use client";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Tabs } from "@geist-ui/core";
// eslint-disable-next-line import/no-webpack-loader-syntax
import aboutMd from '!raw-loader!@/data/teaching/ucpi2026/about.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import gradingMd from '!raw-loader!@/data/teaching/ucpi2026/grading.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import syllabusMd from '!raw-loader!@/data/teaching/ucpi2026/syllabus.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import readinglistMd from '!raw-loader!@/data/teaching/ucpi2026/readinglist.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import presentationMd from '!raw-loader!@/data/teaching/ucpi2026/presentation.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import revibeMd from '!raw-loader!@/data/teaching/ucpi2026/revibe.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import blogMd from '!raw-loader!@/data/teaching/ucpi2026/blog.md';
import { blogData } from "./blogData";
import "./style.css";


export default function UCPI2026() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
                    </div>
                );
            case "syllabus":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {syllabusMd}
                        </ReactMarkdown>
                    </div>
                );
            case "reading-list":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {readinglistMd}
                        </ReactMarkdown>
                    </div>
                );
            case "presentation":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {presentationMd}
                        </ReactMarkdown>
                    </div>
                );
            case "revibe":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {revibeMd}
                        </ReactMarkdown>
                    </div>
                );
            case "blogs":
                return (
                    <div>
                        <div className="blog-grid">
                            {blogData.map((blog) => (
                                <a
                                    key={blog.slug}
                                    href={`${basePath}/teaching/ucpi2026/blog/${blog.slug}/`}
                                    className="blog-card"
                                >
                                    <h4>{blog.title}</h4>
                                    <div className="author">{blog.author}</div>
                                    <div className="desc">{blog.desc}</div>
                                </a>
                            ))}
                        </div>

                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {blogMd}
                        </ReactMarkdown>
                    </div>);
            case "grading":
                return (
                    <div>
                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {gradingMd}
                        </ReactMarkdown>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div>
                <h2>Seminar on User-Centered Programming Interfaces, 2026</h2>
                <Tabs value={activeTab} onChange={setActiveTab} style={{ marginBottom: "2rem" }}>
                    <Tabs.Item label="About" value="about" />
                    <Tabs.Item label="Syllabus" value="syllabus" />
                    <Tabs.Item label="Reading List" value="reading-list" />
                    <Tabs.Item label="Paper Presentation" value="presentation" />
                    <Tabs.Item label="Revibing" value="revibe" />
                    <Tabs.Item label="Final Blog Post" value="blogs" />
                    <Tabs.Item label="Grading" value="grading" />
                </Tabs>
                <div className="ucpi-main">
                    {renderContent()}
                </div>
        </div>
    );
}