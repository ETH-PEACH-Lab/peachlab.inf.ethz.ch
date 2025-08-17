import pubs from '@/data/pubs.json';
import { Card, Text } from "@geist-ui/core";
import Link from 'next/link';

export default function PubCardMini({ pub, slug }) {
    const publication = pub || pubs.find(p => p.slug === slug);
    if (!publication) return null;

    return (
        <Card width="100%" style={{ marginTop: "20px", padding: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <img
                    src={publication.teaser}
                    alt="teaser"
                    style={{
                        width: "100%",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }}
                />
                <Link href={`/projects/${publication.slug}`} style={{ color: "inherit", textDecoration: 'none', width: "100%" }}>
                    <Text b style={{ fontSize: "16px", textAlign: "center", marginTop: "8px" }}>
                        {publication.title}
                    </Text>
                </Link>
            </div>
        </Card>
    );
}