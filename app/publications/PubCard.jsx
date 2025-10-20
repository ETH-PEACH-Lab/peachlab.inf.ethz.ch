import pubs from '@/data/pubs.json';
import { Card, Text } from "@geist-ui/core";
import { PubLinks } from "./PubLinks";
import Link from 'next/link';
import "./PubCard.css"
import Image from "@/components/Image";

export default function PubCard({ pub, slug, hideButtons = false }) {
    const publication = pub || pubs.find(p => p.slug === slug);
    if (!publication) return null;

    // Link to project page if it exists, otherwise to publication detail page
    const imageLink = publication.project_link || `/projects/${publication.slug}`;

    return (
        <div className="pub-card">
            <div className="pub-card-content">
                <a 
                    href={imageLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-image-link"
                >
                    <Image
                        src={publication.teaser}
                        alt={publication.title}
                        width={140}
                        height={93}
                        className="pub-card-image"
                        style={{
                            width: "140px",
                            height: "93px",
                            objectFit: "cover",
                            borderRadius: "6px"
                        }}
                    />
                </a>
                <div className="pub-card-text-wrapper">
                    <div className="pub-card-text">
                        <a 
                            href={`/projects/${publication.slug}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pub-card-title"
                        >
                            <div style={{ fontSize: "15.5px", fontWeight: "600", lineHeight: "1.35", margin: 0, padding: 0 }}>{publication.title}</div>
                        </a>
                        <div className="pub-card-authors" style={{ fontSize: "13.5px", lineHeight: "1.4", margin: 0, padding: 0 }}>{publication.authors}</div>
                        <div className="pub-card-venue" style={{ fontSize: "12.5px", lineHeight: "1.4", margin: 0, padding: 0, opacity: 0.7 }}>{publication.venue_full}</div>
                        {!hideButtons && <PubLinks pub={publication} />}
                    </div>
                </div>
            </div>
        </div>
    );
}