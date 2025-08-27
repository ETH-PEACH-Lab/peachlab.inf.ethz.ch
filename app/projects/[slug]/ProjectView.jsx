"use client";

import { Button, Link } from "@geist-ui/core";

export default function ProjectView({ pub }) {
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "24px" }}>
        {pub.paper_link && (
          <Link href={pub.paper_link} target="_blank" rel="noopener noreferrer">
            <Button auto size="small">Read the paper →</Button>
          </Link>
        )}
        {pub.project_link && (
          <Link href={pub.project_link} target="_blank" rel="noopener noreferrer">
            <Button auto size="small">View project →</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
