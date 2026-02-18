"use client";

import members from "@/data/team.json";

const cardStyle = {
    border: "1px solid #eaeaea",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    width: "180px",
};

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
};

const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0.5rem",
};

const nameStyle = {
    margin: "0.5rem 0",
};

const titleStyle = {
    margin: 0,
    fontSize: "0.9rem",
    color: "#666",
};

const MemberCardMini = ({ slug }) => {
    const member = members.find((m) => m.slug === slug);

    if (!member) {
        return <div>Member not found</div>;
    }

    const { name, title, avatar, link } = member;

    return (
        <div style={cardStyle}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                <img
                    src={avatar}
                    alt={`${name}'s avatar`}
                    style={avatarStyle}
                />
                <h4 style={nameStyle}>{name}</h4>
                <p style={titleStyle}>{title}</p>
            </a>
        </div>
    );
};

export default MemberCardMini;



