"use client";

import { useState } from "react";
import { Tabs, Text, Link, Table } from "@geist-ui/core";
import MemberCardMini from "@/team/MemberCardMini";
import "./style.css";

export default function Diet2026Page() {
    const [activeTab, setActiveTab] = useState("about");

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return (
                    <div>
                        <p>Welcome to the Design in Educational Technology FS (Spring Semester) 2026!</p>

                        <p>Educational technology is reshaping how knowledge is shared, making it more accessible and meaningful for learners across diverse contexts. Designing effective educational tools requires an understanding of both how learning happens and how technology can best support it.</p>

                        <p>Through weekly lectures, we’ll learn foundational learning theories that tell us how people learn and inform the design of effective educational tools, explore different topics of educational technologies like intelligent tutoring systems, collaborative learning systems, and learning at scale, as well as emerging approaches like AR/VR, NLP and the critical ethical and social considerations.</p>

                        <p>Beyond the theory, students will work in teams for a semester-long hackathon to address real-world challenges using user-centered design methods, creating their own interactive learning tools and proposing evaluation plans.</p>

                        <h3 style={{marginTop: "2rem"}}>Course Information</h3>
                        <ul>
                            <li><strong>Course Catalogue:</strong> <a href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=199016&semkez=2026S&lang=en" target="_blank" rel="noopener noreferrer">ETH Zurich Course Catalogue</a></li>
                            <li><strong>Lecture Session:</strong> Friday 14:15-16:00, <a href="https://ethz.ch/en/utils/location.html?building=LFW&floor=C&room=4&lang=en" target="_blank" rel="noopener noreferrer">LFW C4</a></li>
                            <li><strong>Exercise Session:</strong> Friday 16:15-17:00, <a href="https://ethz.ch/en/utils/location.html?building=LFW&floor=C&room=4&lang=en" target="_blank" rel="noopener noreferrer">LFW C4</a></li>
                            <li><strong>Moodle:</strong> We post all the course materials and announcements on <a href="https://moodle-app2.let.ethz.ch/course/view.php?id=27992" target="_blank" rel="noopener noreferrer">Course Moodle</a></li>
                        </ul>

                        <h3 style={{marginTop: "2rem"}}>Teaching Team</h3>
                        <p>Please post questions on Moodle if you can, so others can see them and share in the discussion. If you have questions which are not of general interest, please don’t hesitate to contact us directly.</p>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <MemberCardMini slug="awang" />
                            <MemberCardMini slug="lgoswami" />
                            <MemberCardMini slug="ywu" />
                        </div>

                        <h3 style={{marginTop: "2rem"}}>Grading</h3>
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
                        <h3>Individual Blog (30%)</h3>
                        <p><strong>Deadline:</strong> W7 April 3, 11:59 CEST</p>
                        <p><strong>Submission:</strong> A link to the blog + Report to evaluation</p>
                        <h4>Assignment Overview</h4>
                        <p>In this assignment, you will create an <a href="https://explorabl.es/" target="_blank" rel="noopener noreferrer">explorable explanation</a> — an interactive blog post designed to teach a Computer Science concept or mechanism through exploration, interaction, and experimentation.</p>
                        <p>Instead of passively reading explanations, your audience should learn by interacting with your blog. Your goal is to help readers build understanding by manipulating ideas, observing outcomes, and developing intuition about how a system works.</p>
                        <p>You are not only explaining a concept — you are designing a learning experience.</p>
                        <p>An explorable explanation does not have to resemble a traditional article with static diagrams. It can also take the form of an interactive user interface that reveals what is happening inside a computational system and makes otherwise invisible processes understandable.</p>
                        <p>This assignment will comprise 30% of your final grades.</p>

                        <h4>Examples of Explorable Explanations</h4>
                        <ul>
                            <li>Handwriting recognition: <a href="https://jackschaedler.github.io/handwriting-recognition/" target="_blank" rel="noopener noreferrer">https://jackschaedler.github.io/handwriting-recognition/</a></li>
                            <li>Programming concepts: <a href="https://explorabl.es/programming/" target="_blank" rel="noopener noreferrer">https://explorabl.es/programming/</a></li>
                            <li>Lambda Bubble Pop: <a href="https://chrisuehlinger.com/LambdaBubblePop/" target="_blank" rel="noopener noreferrer">https://chrisuehlinger.com/LambdaBubblePop/</a></li>
                            <li>Sight & Light (2D shadows): <a href="https://ncase.me/sight-and-light/" target="_blank" rel="noopener noreferrer">https://ncase.me/sight-and-light/</a></li>
                            <li>Operational Transformation: <a href="https://operational-transformation.github.io/" target="_blank" rel="noopener noreferrer">https://operational-transformation.github.io/</a></li>
                        </ul>
                        <p>These examples teach complex ideas by allowing users to play with and explore the system, rather than only read about it.</p>

                        <h4>Core Tasks</h4>
                        <ol>
                            <li>
                                <p><strong>Pick a Topic and Define Learning Objectives</strong>: Pick ONE Computer Science topic or mechanisms of your own choice and interest that you would like to explain in your blog.</p>
                            </li>
                            <li>
                                <p><strong>Design and Implement the Learning Experience</strong>:
                                Create an interactive blog that helps users achieve your learning objectives. </p>
                            </li>
                            <li>
                                <p><strong>Evaluation with Peers</strong>: 
                                Test your blog with 5 classmates to evaluate whether they understood the concepts.</p>
                            </li>
                        </ol>

                        <h4>Blog Expectations</h4>
                        <p>Your blog should be self-contained and self-explanatory. Meaning, it should be clear from your blog’s presentation how to use the interactive elements, how to adjust these elements and what is being learnt.</p>
                        <p>The explanation of the concept must be accurate and the learning experience should demonstrate intentional design decisions.</p>
                        <p>The blog should be a complete, fully working implementation rather than a prototype or mock-up. All interactive features should function as intended and be usable by readers.</p>
                        <p>You are free to choose a Computer Science topic of your own interest. However, please ensure that the topic is suitable for being designed as an interactive learning experience and that the design and implementation of your blog can realistically be completed before the mid-semester deadline.</p>
                    </div>
                );
            case "project":
                return (
                    <div>
                        <h3>Group Project: A Tool for Learning AI Literacy (60%)</h3>
                        <p><strong>Deadline:</strong> W15 May 29, 11:59 CEST</p>
                        <p><strong>Submission:</strong> A link to the project website</p>
                        <p>In this project, you will design, build, and evaluate an educational tool that helps a specific audience understand an aspect of AI literacy. Your goal is to create something that could realistically be used in a classroom, workshop, or outreach setting.</p>
                       
                        <h4>Project Overview</h4>
                        <p>Examples of Explorable Explanations</p>
                        
                        <h4>Examples of AI Literacy Learning Tools</h4>
                        <p>TBD</p>

                        <h4>Core Tasks</h4>
                        <p>TBD</p>

                        <h4>Deliverables</h4>
                        <p>TBD</p>

                        <h4>Grading Criteria</h4>
                        <p>TBD</p>

                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ width: "100%", margin: "0 auto", padding: "2rem 1rem" }}>
            <h1>Design in Educational Technology 2026</h1>
            <Tabs value={activeTab} onChange={setActiveTab} style={{ marginBottom: "2rem" }}>
                <Tabs.Item label="About" value="about" />
                <Tabs.Item label="Syllabus" value="syllabus" />
                <Tabs.Item label="Individual Blog" value="blog" />
                <Tabs.Item label="Course Project" value="project" />
            </Tabs>
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
    { week: 'W4', date: 'March 13', topic: 'Multimedia Learning', remarks: '', isNoClass: false, isProject: false },
    { week: 'W5', date: 'March 20', topic: 'Embodied and Tangible Learning', remarks: '', isNoClass: false, isProject: false },
    { week: 'W6', date: 'March 27', topic: 'Learning Motivation & Self-Regulation', remarks: '', isNoClass: false, isProject: false },
    { week: 'W7', date: 'April 3', topic: 'Good Friday - no class', remarks: 'Individual blog due', isNoClass: true, isProject: false },
    { week: 'W8', date: 'April 10', topic: 'Week after Easter - no class', remarks: '', isNoClass: true, isProject: false },
    { week: 'W9', date: 'April 17', topic: 'Collaborative and Social Learning', remarks: '', isNoClass: false, isProject: false },
    { week: 'W10', date: 'April 24', topic: 'Project Check-in', remarks: 'Prepare project updates', isNoClass: false, isProject: true },
    { week: 'W11', date: 'May 1', topic: 'Intelligent Tutoring Systems', remarks: '', isNoClass: false, isProject: false },
    { week: 'W12', date: 'May 8', topic: 'Assessment of Learning', remarks: '', isNoClass: false, isProject: false },
    { week: 'W13', date: 'May 15', topic: 'Learning at Scale', remarks: '', isNoClass: false, isProject: false },
    { week: 'W14', date: 'May 22', topic: 'Project Demo Day', remarks: 'Final presentations', isNoClass: false, isProject: true },
    { week: 'W15', date: 'May 29', topic: 'No course', remarks: 'Final deliverable due', isNoClass: true, isProject: false },
  ];

  return (
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
      <Table.Column prop="remarks" label="Remarks" render={(value) => <span>{value}</span>} />
    </Table>
  );
};