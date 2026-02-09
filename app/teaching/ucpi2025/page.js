"use client";
import { useState } from "react";
import { Button, Input } from "@geist-ui/core";
import ReactMarkdown from 'react-markdown';
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
// eslint-disable-next-line import/no-webpack-loader-syntax
import teachingMd from '!raw-loader!@/data/teaching/ucpi2025.md';
import "./style.css"
import Toc from './Toc.js'
import { blogData } from "./blogData";


const PASSWORD = "d-infk"; 

export default function UCPI2025() {
    const [input, setInput] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [tocOpen, setTocOpen] = useState(false);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === PASSWORD) setUnlocked(true);
        else alert("Incorrect password.");
    };

    if (!unlocked) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}
            >
                <Input.Password  placeholder="Enter Password" fontSize="16px" width="300px" marginBottom={1} onChange={e => setInput(e.target.value)} />
                <Button onClick={handleSubmit} type="secondary" >
                    Unlock
                </Button>
            </div>
        );
    }

    return (
        <div className="ucpi-layout">
            <div className="ucpi-sidebar">
            {/* TOC Drawer Button (visible on mobile) */}
            <button
                className="toc-drawer-btn"
                onClick={() => setTocOpen(!tocOpen)}
            >
               {tocOpen? "×" : "☰"} 
            </button>
            {/* TOC Sidebar/Drawer */}
            <nav className={`toc${tocOpen ? " toc-drawer-open" : ""}`} onClick={() => setTocOpen(false)}>
                <Toc markdownText={teachingMd} />
            </nav>
            </div>
            <main className="ucpi-main">
                <ReactMarkdown
                    rehypePlugins={[rehypeSlug, rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({node, href, children, ...props}) => {
                            // Check if it's a relative link to a blog post
                            if (href && href.startsWith("blog/")) {
                                return (
                                    <a href={`${basePath}/teaching/ucpi2025/${href}/`} {...props} className={props.className}>
                                        {children}
                                    </a>
                                );
                            }
                            return <a href={href} {...props}>{children}</a>;
                        }
                    }}
                >
                    {teachingMd}
                </ReactMarkdown>

                {/* Student Blogs Grid */}
                <h3 id="student-blogs">Student Blogs</h3>
                <div className="blog-grid">
                    {blogData.map((blog) => (
                        <a 
                            key={blog.slug} 
                            href={`${basePath}/teaching/ucpi2025/blog/${blog.slug}/`} 
                            className="blog-card"
                        >
                            <h4>{blog.week}: {blog.title}</h4>
                            <div className="author">{blog.author}</div>
                            <div className="desc">{blog.desc}</div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}