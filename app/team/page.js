"use client";

import Link from "next/link";
import { Grid } from "@geist-ui/core";
import members from "@/data/team.json";
import MemberCard from "./MemberCard";
import ImageCarousel from "@/components/ImageCarousel";

const currentMembers = members.filter((m) => m.status === "current");
const affiliatedMembers = members.filter((m) => m.status === "affiliated");

export default function Team() {
    return (
        <div>
            <h2>Team</h2>

            <h3>Core Members</h3>
            <Grid.Container gap={2} style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
                {currentMembers.map((member) => (
                    <MemberCard member={member} key={member.name} />
                ))}
            </Grid.Container>

            <h3>Affiliated Members</h3>
            <ul style={{ marginBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
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

            <div style={{ marginTop: "4rem" }} />

            <ImageCarousel />
        </div>
    );
}