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
import aboutMd from '!raw-loader!@/data/teaching/erm2026/about.md';

// eslint-disable-next-line import/no-webpack-loader-syntax
import detailsMd from '!raw-loader!@/data/teaching/erm2026/details.md';

// eslint-disable-next-line import/no-webpack-loader-syntax
import gradingMd from '!raw-loader!@/data/teaching/erm2026/grading.md';

const LECTURES = [
    {
        phase: 'Ask',
        date: '24.09',
        question: 'What is your research question?',
        colors: { background: '#dbeafe', border: '#3b82f6', color: '#1e3a8a' },
        details: [
            'Types of research questions (causal, descriptive, exploratory); types of claims (causal vs. correlational vs. descriptive)',
            'Experiments vs. observational evidence',
            'What counts as evidence in different CS domains; common pitfalls in empirical claims',
            'Identifying the unit of analysis: people, tasks, datasets, repositories, systems, runs, etc.',
        ],
    },
    {
        phase: 'Design',
        question: 'What study can answer your question?',
        colors: { background: '#ede9fe', border: '#8b5cf6', color: '#4c1d95' },
        details: [
            'Controlled experiments and quasi-experiments; within-subject vs. between-subject designs',
            'Observational, field, trace/log, and benchmarking studies',
            'Randomization, control, and confounds; reasoning about causal claims and internal validity',
            'Sampling strategy and sample-size considerations',
            'Replication, repeated runs, and sources of dependence in empirical data',
        ],
    },
    {
        phase: 'Measure',
        question: 'How will you measure it?',
        colors: { background: '#dcfce7', border: '#22c55e', color: '#14532d' },
        details: [
            'Operationalization; IV/DV; construct validity and its threats',
            'Instrumentation in CS: logs, benchmarks, datasets, human evaluation, system metrics',
            'Behavioral, performance, and self-report measures; Likert scales and validated scales',
            'Ground truth, measurement reliability, and benchmark/dataset selection',
            'Data quality',
        ],
    },
    {
        phase: 'Analyze',
        question: 'What does the data show?',
        colors: { background: '#fef3c7', border: '#f59e0b', color: '#78350f' },
        details: [
            'EDA, descriptives, and visualization',
            'Effect size, CI, and statistical inference; regression/test selection',
            'Independent, repeated, and nested observations',
            'Comparing performance across tasks, datasets, or experimental runs',
            'Qualitative coding and themes; mixed-method integration',
        ],
    },
    {
        phase: 'Reason',
        question: 'What can you legitimately claim?',
        colors: { background: '#fce7f3', border: '#ec4899', color: '#831843' },
        details: [
            'Correlation vs. causation; confounding; alternative explanations',
            'Internal / construct / external validity',
            'Generalization across people, datasets, workloads, repositories, and environments',
            'Uncertainty; multiple comparisons; researcher degrees of freedom; robustness',
            'Sensitivity to analytical and experimental choices',
        ],
    },
    {
        phase: 'Communicate',
        question: 'How do you communicate your research results?',
        colors: { background: '#e0f2fe', border: '#06b6d4', color: '#164e63' },
        details: [
            'Results writing; figures/tables; claim–evidence alignment; limitations',
            'Ethics and open science: preregistration, reproducibility, data/code/material sharing',
            'Reporting computational experiments: configurations, environments, random seeds, and reproducibility',
            'AI-assisted research disclosure',
        ],
    },
];

const WorkflowStepper = () => (
    <div className="erm-stepper" aria-label="Course workflow: Ask, Design, Measure, Analyze, Reason, Communicate">
        {LECTURES.map(({ phase, question, colors }, index) => (
            <div
                key={phase}
                className="erm-stepper-item"
                style={{ background: colors.background, borderColor: colors.border, color: colors.color }}
            >
                <span className="erm-stepper-step">WEEK {index + 1}</span>
                <span className="erm-stepper-label">{phase}</span>
                <span className="erm-stepper-sub">{question}</span>
            </div>
        ))}
    </div>
);

const SyllabusTable = () => {
    const data = [
        ...LECTURES.map(({ phase, date, question, details }, index) => ({
            week: `${index + 1}`,
            date: date || 'TBD',
            topic: phase.toUpperCase(),
            question,
            details,
        })),
        { week: '7', date: 'TBD', topic: 'Student Presentations', question: '', details: [] },
    ];

    return (
        <div className="erm2026-table-wrapper">
            <Table data={data}>
                <Table.Column prop="week" label="Week" render={(value) => <span>{value}</span>} />
                <Table.Column prop="date" label="Date" render={(value) => <span>{value}</span>} />
                <Table.Column prop="topic" label="Topic" render={(value) => <strong>{value}</strong>} />
                <Table.Column
                    prop="details"
                    label="Details"
                    render={(value, rowData) => (
                        <div className="erm-details-cell">
                            {rowData.question && <strong>{rowData.question}</strong>}
                            {value && value.length > 0 && (
                                <ul className="erm-details-list">
                                    {value.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                />
            </Table>
        </div>
    );
};

const VALID_TABS = ["about", "syllabus", "grading"];

export default function Erm2026Client({ tab }) {
    const router = useRouter();
    const initialTab = VALID_TABS.includes(tab) ? tab : "about";
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        const next = VALID_TABS.includes(tab) ? tab : "about";
        setActiveTab(next);
    }, [tab]);

    const handleTabChange = (value) => {
        setActiveTab(value);
        const path = value === "about" ? "/teaching/erm2026" : `/teaching/erm2026/${value}`;
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

                        <WorkflowStepper />

                        <ReactMarkdown
                            rehypePlugins={[rehypeSlug, rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {detailsMd}
                        </ReactMarkdown>

                        <h4 style={{ marginTop: "2rem" }}>Teaching Team</h4>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <MemberCardMini slug="awang" />
                            <MemberCardMini slug="ywu" />
                            <MemberCardMini slug="hdo" />
                        </div>
                    </div>
                );
            case "syllabus":
                return (
                    <div>
                        <p>
                            The course consists of six in-person, 2-hour lectures. The dates of the six
                            lectures will be agreed upon with the enrolled students at the beginning of
                            the course.
                        </p>
                        <SyllabusTable />
                    </div>
                );
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
            <h2>Empirical Research Methods for Computer Science 2026</h2>
            <div>
                <Tabs value={activeTab} onChange={handleTabChange} style={{ marginBottom: "2rem" }}>
                    <Tabs.Item label="About" value="about" />
                    <Tabs.Item label="Syllabus" value="syllabus" />
                    <Tabs.Item label="Grading" value="grading" />
                </Tabs>
            </div>
            <div style={{ minHeight: "200px" }}>
                {renderContent()}
            </div>
        </div>
    );
}
