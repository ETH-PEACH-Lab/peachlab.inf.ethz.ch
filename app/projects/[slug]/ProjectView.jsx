"use client";

import { PubLinks } from "@/publications/PubLinks";

export default function ProjectView({ pub }) {
  return (
    <div className="project-links-top">
      <PubLinks pub={pub} />
    </div>
  );
}
