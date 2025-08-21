import researchData from '@/data/research.json';
import { Card, Text } from "@geist-ui/core";
import Link from 'next/link';
import Image from "@/components/Image";


export default function ResearchMini() {
  const featured = [0, 1, 2];
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", textAlign:"left" }}>
      {researchData.map((item, index) =>
        featured.includes(index) ? (
          <Link
            key={index}
            href={`/research#${item.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              style={{
                width: "260px",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                height:"350px"
              }}
              hoverable
            >
              <Image
                src={item.teaser}
                alt={item.theme}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "1rem 0", width: "100%", textAlign: "center" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem"}}>{item.theme}</h4>
                <Text style={{ color: "#555", fontSize: "0.9rem" }}>{item.subtitle}</Text>
              </div>
            </Card>
          </Link>
        ) : null
      )}
    </div>
  );
}