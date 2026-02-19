"use client"

import MemberCardMini from "../../team/MemberCardMini";
import "./style.css";

export default function TutorPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
            {/* Hero Section */}
            <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    A Multimodal AI Tutor with Visual Scaffolds for Early Math and Programming Education
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                    What if AI could draw ideas while it teaches?
                </p>
            </section>

            {/* Our Vision */}
            <section style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>
                    Early learners often struggle to build mental models from text alone. Think about how teachers actually teach: they draw diagrams, sketch ideas, break problems into pictures, and make invisible thinking visible. Creating these visuals takes time and expertise, which makes high-quality teaching difficult to scale. By teaching AI to generate pedagogically meaningful visuals, we hope to make high-quality tutoring more accessible, support teachers rather than replace them, and make learning more intuitive and engaging. We believe the future of AI tutoring is not just conversational — it is visual, interactive, and human-centered.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    We are developing a multimodal AI tutor that explains math and programming with step-by-step visuals and interactive dialogue. Instead of presenting learners with a wall of text, the tutor can transform story problems into simple diagrams, highlight quantities and relationships, and walk through solutions step by step while conversing with the learner. The goal is to make AI tutoring feel less like chatting with a bot and more like learning with a teacher who can draw, explain, and adapt in real time.
                </p>
            </section>

            {/* What We're Exploring */}
            <section style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What We're Exploring</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Building a visual AI tutor is not a single problem but a collection of research questions that span artificial intelligence, education, and human-computer interaction.
                </p>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '1rem' }}>Technical Challenges</h3>
                <p style={{ marginBottom: '1rem' }}>
                    On the technical side, we are studying what today's multimodal models can actually do and where they still struggle. One core question is <span style={{ backgroundColor: '#ffcb2055', padding: '0.2em 0.4em', fontWeight: 600 }}>how well current models can generate educational visuals that are truly correct</span>. It is not enough for an image to look plausible; it must contain the right number of objects, represent relationships accurately, and follow pedagogical design principles. We are also investigating how well models can understand visuals created by students themselves. In other words, we want to know whether AI can reliably draw and interpret the right thing, rather than something that merely looks convincing.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Another major technical challenge is multimodal tutoring itself. Real teaching combines speech, writing, and drawing, yet most AI systems still operate primarily through text. We are studying <span style={{ backgroundColor: '#ffcb2055', padding: '0.2em 0.4em', fontWeight: 600 }}>how models can generate tutoring dialogues that naturally mix explanations and visuals, guide learners step by step, and adapt as a problem unfolds</span>. This requires understanding how visual reasoning and language generation interact during learning.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    We are also comparing <span style={{ backgroundColor: '#ffcb2055', padding: '0.2em 0.4em', fontWeight: 600 }}>different approaches for generating educational visuals</span>. One approach relies on end-to-end multimodal models that directly generate the final image. Another approach generates a structured visual language or domain-specific representation and then renders the image from that structure. A third approach uses parameterized templates that guarantee correctness. By studying these alternatives side by side, we aim to understand which methods are most reliable, scalable, and useful in real educational settings.
                </p>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '1rem' }}>Human-Centered Design Challenges</h3>
                <p style={{ marginBottom: '1rem' }}>
                    On the human-computer interaction side, our research focuses on how these tools fit into real teaching and learning practices. A key question is <span style={{ backgroundColor: '#ffcb2055', padding: '0.2em 0.4em', fontWeight: 600 }}>how to balance automation and teacher control</span>. Teachers need AI systems that are helpful and efficient but also transparent and editable. We are exploring when teachers want automation, when they want control, and how interfaces can support both without increasing workload or reducing trust.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Ultimately, the most important question is <span style={{ backgroundColor: '#ffcb2055', padding: '0.2em 0.4em', fontWeight: 600 }}>whether visual AI tutors actually help students learn</span>. We are conducting studies with teachers and students to understand how the visuals affect comprehension, how learners interact with the tutor, and what kinds of support are most effective. These studies also help us identify where AI still fails and how to design better systems for real classrooms.
                </p>
            </section>

            {/* Related Projects */}
            <section style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related Projects</h2>
                <ul style={{ marginLeft: '2rem'}}>
                    <li><a href="/projects/math2visual/" style={{ color: '#0070f3', textDecoration: 'none' }}>Math2Visual</a>: Generating pedagogically meaningful visuals for math word problems</li>
                    <li><a href="https://eth-peach-lab.github.io/merlin-docs/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>Project Merlin</a>: A domain-specific language for algorithm visualization</li>
                </ul>
            </section>

            {/* Team */}
            <section style={{ marginTop: '3rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Team</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Principal Investigators</h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap',  marginTop: '1rem' }}>
                        {['awang', 'msachan'].map((member, idx) => (
                            <MemberCardMini key={idx} slug={member} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Team Members</h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap',  marginTop: '1rem' }}>
                        {['jwang', 'hdo'].map((member, idx) => (
                            <MemberCardMini key={idx} slug={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsorship */}
            <section style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sponsorship</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Supported by the <strong>Swiss AI Initiative Large Project</strong> and <strong>ETH AI Center</strong>.
                </p>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <a href="https://www.swiss-ai.org/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://ai.ethz.ch/about-us/Our-Initiatives/_jcr_content/par/twocolumn_154992132/par_left/image/image.imageformat.1286.1391828461.jpg"
                            alt="Swiss AI Initiative Logo"
                            style={{ maxWidth: '150px', height: 'auto', objectFit: 'cover', objectPosition: 'center top', marginTop: '-35px' }}
                        />
                    </a>
                    <a href="https://www.ai.ethz.ch/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://ai.ethz.ch/_jcr_content/orginfo/imageLogo.imageformat.1564x880.193735214.png"
                            alt="ETH AI Center Logo"
                            style={{ maxWidth: '150px', height: 'auto' }}
                        />
                    </a>
                </div>
            </section>
        </div>
    );
}