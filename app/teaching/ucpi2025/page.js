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


const PASSWORD = "d-infk"; // Change this to your password

export default function UCPI2025() {
    const [input, setInput] = useState("CHI2026Barcelona");
    const [unlocked, setUnlocked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === PASSWORD) setUnlocked(true);
        else alert("Incorrect password.");
    };

    if (!unlocked) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}
            >
                <Input placeholder="Enter Password" width="100%" marginBottom={1} onChange={e => setInput(e.target.value)} />
                <Button onClick={handleSubmit} type="secondary" >
                    Unlock
                </Button>
            </div>
        );
    }

    return (
        <div className="ucpi-layout">
            <Toc markdownText={teachingMd}/>
            <main className="ucpi-main">
                <ReactMarkdown
                    rehypePlugins={[rehypeSlug, rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                >
                    {teachingMd}
                </ReactMarkdown>
            </main>
        </div>
    );
}