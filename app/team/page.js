"use client";

import Link from "next/link";
import { Grid } from "@geist-ui/core";
import members from "@/data/team.json";
import MemberCard from "./MemberCard";
import ImageCarousel from "@/components/ImageCarousel";
import "./style.css";

const currentMembers = members.filter((m) => m.status === "current");
const affiliatedMembers = members.filter((m) => m.status === "affiliated");

export default function Team() {
    return (
        <div>
            <h2>Team</h2>

            <p>For general inquiries about the lab, please contact us at <a href="mailto:peachlab@inf.ethz.ch">peachlab@inf.ethz.ch</a>.</p>
            <h3>Core Members</h3>
            <Grid.Container gap={2} style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
                {currentMembers.map((member) => (
                    <MemberCard member={member} key={member.name} />
                ))}
            </Grid.Container>

            <section style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea", paddingBottom: "20px" }}>

                <h3>Affiliated Members</h3>
                <ul style={{ marginBottom: "20px" }}>
                    {affiliatedMembers.map((member) => (
                        <li key={member.name}>
                            {member.link ? (
                                <a href={member.link} target="_blank" rel="noopener noreferrer">
                                    {member.name}
                                </a>
                            ) : (
                                member.name
                            )}
                            {", "}
                            <span dangerouslySetInnerHTML={{ __html: member.title }} />
                        </li>
                    ))}
                </ul>
            </section>

            <section style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea", paddingBottom: "20px" }}>
                <h3>Join Us</h3>
                <ul>
                    <li>
                        We are always excited to work with motivated and talented students. Please check
                        {" "}
                        <Link href="/join">join us page</Link> for more details.
                    </li>
                    <li>
                        If you are an ETH Zurich student looking for a BSc or MSc thesis, please check
                        {" "}
                        <Link href="/theses">theses page</Link> for more details.
                    </li>
                </ul>
            </section>


            <section style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea", paddingBottom: "20px" }}>

                <h3>Funding & Support</h3>

                <p>Our lab’s research is made possible through the generous support of public funding agencies, foundations, and industry partners. Interested in supporting our work? Get in touch.</p>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "2rem",
                    marginBottom: "20px"
                }}>
                    <a href="https://research.adobe.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/Adobe.png" alt="Adobe Research" className="sponsor-logo" />
                    </a>
                    <a href="https://www.snf.ch/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/snsf.png" alt="Swiss National Science Foundation" className="sponsor-logo" />
                    </a>
                    <a href="https://www.dieter-schwarz-stiftung.de/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/dieter-schwarz.png" alt="Dieter Schwarz Foundation" className="sponsor-logo" />
                    </a>
                    <a href="https://ethz-foundation.ch/en/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/eth-foundation.png" alt="ETH Foundation" className="sponsor-logo" />
                    </a>
                    <a href="https://www.swiss-ai.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/swiss-ai.jpg" alt="Swiss AI" className="sponsor-logo" />
                    </a>
                    <a href="https://ai.ethz.ch/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/sponsors/ai-center.png" alt="ETH AI Center" className="sponsor-logo" />
                    </a>
                </div>
            </section>

            <section style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea", paddingBottom: "20px" }}>
                <h3>Outreach</h3>
                <p>
                    We collaborate with local schools and coding camps to both study and actively support STEM outreach, testing and refining our educational interventions in real-world settings, including 
                    <a href="https://www.edelweiss-school.ch/" target="_blank" rel="noopener noreferrer"> Edelweiss International School</a>, 
                    <a href="https://ingch.ch/en/" target="_blank" rel="noopener noreferrer"> IngCH MINT</a>, 
                    and our 
                    <a href="https://inf.ethz.ch/communication-services/schools-universities.html" target="_blank" rel="noopener noreferrer"> department's communication team</a>.
                    We welcome educators, schools, and organizations interested in STEM outreach to reach out to us for potential collaboration and support.
                </p>            </section>

            <div style={{ marginTop: "4rem" }} />

            <ImageCarousel />
        </div>
    );
}