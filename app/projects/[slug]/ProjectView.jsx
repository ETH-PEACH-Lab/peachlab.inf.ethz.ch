"use client";

import { Button, Link } from "@geist-ui/core";

export default function ProjectView({ pub }) {
  return (
    <div>
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
