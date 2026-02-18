"use client"
import { Grid } from "@geist-ui/core";
import members from "@/data/team.json"
import MemberCard from "./MemberCard";
import ImageCarousel from "@/components/ImageCarousel";


export default function Team() {
    return (
        <div style={{ maxWidth: "55rem", margin: "auto" }}>
            <h2>Team</h2>
            <h3>Core Members</h3>
            <Grid.Container gap={2} style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
                {members.map((member, index) => {
                    if (member.status === "current")
                        return <MemberCard member={member} key={index}></MemberCard>
                })}
            </Grid.Container>
            <h3>Affiliated Members</h3>
            <ul style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
                {members.map((member, index) => {
                    if (member.status === "affiliated")
                        return <li key={index}><a href={member.link} target="_blank" rel="noopener noreferrer">{member.name}</a>, <span dangerouslySetInnerHTML={{ __html: member.title }} />
                        </li>
                })}
            </ul>
            {/* <h3>Alumni and Past Visitors</h3>
            <ul style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
                {members.map((member, index) => {
                    if (member.status === "left")
                        return <li key={index}><p><a href={member.link} target="_blank" rel="noopener noreferrer">{member.name}</a>, <span dangerouslySetInnerHTML={{ __html: member.title }} />
                        </p></li>
                })}
            </ul> */}
            <h3>Join Us</h3>
            <ul>
                <li>We are always excited to work with motivated and talented students. Please check <a href="/join">join us page</a> for more details.</li>
                <li>If you are an ETH Zurich student looking for a BSc or MSc thesis, please check <a href="/theses">theses page</a> for more details.</li>
            </ul>
            <div style={{ marginTop: "4rem" }}></div>

            <ImageCarousel />

            {/* <hr />
            <h3>Collaborations and Sponsorship</h3>
            <ul>
                <li>If you are interested in collaborating with us or sponsoring our research, please reach out to the PI directly.</li>
            </ul> */}
            </div>
        );  
}