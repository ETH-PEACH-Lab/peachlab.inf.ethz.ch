import pubs from '@/data/pubs.json';
import { Home, FileText, PlayCircle, GitHub, Quote, Star } from "@geist-ui/icons";
import { Checkbox, Collapse, Card, Grid, Text, Button, Tooltip } from "@geist-ui/core";
import { PubLinks } from "./PubLinks";
import Link from 'next/link';
import "./PubCard.css"

export default function PubCard({ pub, slug }) {
    const publication = pub || pubs.find(p => p.slug === slug);
    if (!publication) return null;

    return (
        <Card width="100%" style={{ marginTop: "20px", padding: "12px" }}>
            <div className="pub-card-content" style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <img
                    src={publication.teaser}
                    alt="teaser"
                    style={{
                        width: "180px",
                        height: "120px",
                        objectFit: "cover",
                        flexShrink: 0
                    }}
                />
                <div style={{ flex: 1 }}>
                    <Link href={`/projects/${publication.slug}`} style={{ color: "inherit", textDecoration: 'none' }}>
                        <Text b style={{ fontSize: "16px" }}>{publication.title}</Text>
                    </Link>
                    <Text style={{ fontSize: "14px", marginTop: "4px" }}>{publication.authors}</Text>
                    <Text type="secondary" style={{ fontSize: "13px", marginTop: "2px" }}>{publication.venue_full}</Text>
                    <PubLinks pub={publication} />
                </div>
            </div>
        </Card>
    );
}