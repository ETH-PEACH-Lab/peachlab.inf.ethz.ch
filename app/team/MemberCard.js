"use client"
import Image from "next/image";
import { Globe, Linkedin, Mail, Sparkles, Users, Brain, Code, MessageSquare, BookOpen, Presentation } from "lucide-react";

// Map topics to cute icons
const topicIcons = {
  "Social Learning": Users,
  "Automated Essay Assessment": BookOpen,
  "Code Comprehension": Code,
  "Human AI Interaction": Brain,
  "Live Coding": Code,
  "Agent-based Simulation": Sparkles,
  "Multimodal Retrieval and Generation": MessageSquare,
  "Visual-based Tutoring System": Presentation,
  "Tangible Educational Game": Users,
};

// Obfuscate email
const obfuscateEmail = (email) => {
  if (!email) return "";
  return email
    .replace("@", " [at] ")
    .replace(/\./g, " [dot] ");
};

export default function MemberCard({ member }) {
    const primaryLink = member.link || member.linkedin;
    const showWebsite = !!member.link;
    const showLinkedIn = !!member.linkedin;
    const showEmail = !!member.email;
    const TopicIcon = member.topics ? topicIcons[member.topics] : null;

    return (
        <div className="member-card">
            {/* Image */}
            {primaryLink ? (
                <a 
                    href={primaryLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="member-image-link"
                >
                    <Image
                        src={member.avatar || "/assets/default-avatar.png"}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="member-image"
                        style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "1",
                            objectFit: "cover",
                            borderRadius: "8px"
                        }}
                    />
                </a>
            ) : (
                <Image
                    src={member.avatar || "/assets/default-avatar.png"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="member-image"
                    style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }}
                />
            )}

            {/* Content */}
            <div className="member-info">
                <div className="member-header">
                    <h3 className="member-name">
                        {primaryLink ? (
                            <a href={primaryLink} target="_blank" rel="noopener noreferrer">
                                {member.name}
                            </a>
                        ) : (
                            member.name
                        )}
                    </h3>
                    
                    {/* Icon Links */}
                    {(showWebsite || showLinkedIn) && (
                        <div className="member-icon-links">
                            {showWebsite && (
                                <a href={member.link} target="_blank" rel="noopener noreferrer" className="member-icon-btn" title="Website">
                                    <Globe size={16} strokeWidth={2} />
                                </a>
                            )}
                            {showLinkedIn && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-icon-btn" title="LinkedIn">
                                    <Linkedin size={16} strokeWidth={2} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
                
                <p className="member-title">{member.title}</p>
                
                {/* {member.topics && (
                    <div className="member-topic-badge">
                        {TopicIcon && <TopicIcon size={12} strokeWidth={2} />}
                        <span>{member.topics}</span>
                    </div>
                )} */}

                {showEmail && (
                    <div className="member-email">
                        <Mail size={12} strokeWidth={2} />
                        <span>{obfuscateEmail(member.email)}</span>
                    </div>
                )}
            </div>
        </div>
    );
}