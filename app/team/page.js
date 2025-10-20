"use client"
import members from "@/data/team.json"
import MemberCard from "./MemberCard";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import "./style.css";

export default function Team() {
    const currentMembers = members.filter(m => m.status === "current");
    const collaborators = members.filter(m => m.status === "collaborator");
    const alumni = members.filter(m => m.status === "left");

    return (
        <div className="team-container">
            {/* <h1 className="team-title">Team</h1> */}

            {/* Core Members */}
            <section className="team-section">
                <h2 className="team-section-title">Core Members</h2>
                <div className="team-grid">
                    {currentMembers.map((member, index) => (
                        <MemberCard member={member} key={index} />
                    ))}
                </div>
            </section>

            {/* Collaborators */}
            {collaborators.length > 0 && (
                <section className="team-section">
                    <h2 className="team-section-title">Affiliated Members</h2>
                    <ul className="team-simple-list">
                        {collaborators.map((member, index) => (
                            <li key={index} className="team-simple-item">
                                {member.link ? (
                                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="team-simple-link">
                                        {member.name}
                                    </a>
                                ) : (
                                    <span className="team-simple-name">{member.name}</span>
                                )}
                                {member.title && (
                                    <span className="team-simple-title" dangerouslySetInnerHTML={{ __html: `, ${member.title}` }} />
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Join Section */}
            <section className="team-join-section">
                <h2 className="team-section-title">Join Us</h2>
                <div className="team-join-cards">
                    <div className="team-join-card">
                        <h3 className="team-join-card-title">Students & Researchers</h3>
                        <p>We are always excited to work with motivated and talented students.</p>
                        <Link href="/join" className="team-join-link">
                            Learn more about joining →
                        </Link>
                    </div>
                    <div className="team-join-card">
                        <h3 className="team-join-card-title">Thesis Projects</h3>
                        <p>ETH Zürich students looking for BSc or MSc thesis opportunities.</p>
                        <Link href="/theses" className="team-join-link">
                            View thesis topics →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="team-gallery-section">
                <h2 className="team-section-title">Lab Photos</h2>
                <ImageCarousel />
            </section>
        </div>
    );
}