"use client";

import { Button, Link } from "@geist-ui/core";
import Image from "@/components/Image";


export default function ProjectView({ pub }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>{pub.title}</h2>

      <p>
        <strong>Authors:</strong> {pub.authors}
      </p>
      <p>
        <strong>Venue:</strong> {pub.venue_full}
      </p>

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Image
          src={pub.teaser}
          alt="teaser"
          style={{ maxWidth: "500px", width: "100%", height: "auto" }}
        />
      </div>

      <div style={{ marginTop: "36px" }}>
        <p style={{ fontWeight: 600, marginBottom: "8px", fontSize: "1.1rem" }}>Abstract</p>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
          {pub.abstract}
        </p>
      </div>

      {pub.paper_link && (
        <div style={{ marginTop: "24px" }}>
          <Link href={pub.paper_link} target="_blank" rel="noopener noreferrer">
            <Button auto size="small">Read the paper →</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
