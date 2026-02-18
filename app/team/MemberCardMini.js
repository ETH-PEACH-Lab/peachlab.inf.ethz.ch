"use client"
import { Text, Link, Image } from "@geist-ui/core";
import React from "react";
import members from "@/data/team.json";

const MemberCardMini = ({ slug }) => {
    const member = members.find((m) => m.slug === slug);

    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <div style={{ border: "1px solid #eaeaea", padding: "1rem", borderRadius: "8px", textAlign: "center", width: "180px" }}>
            <a href={member.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                    src={member.avatar}
                    alt={`${member.name}'s avatar`}
                    style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "0.5rem" }}
                />
                <h4 style={{ margin: "0.5rem 0" }}>{member.name}</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{member.title}</p>
            </a>
        </div>
    );
};

export default MemberCardMini;



