"use client";

import dynamic from "next/dynamic";

const PolygonParticles = dynamic(() => import("@/components/PolygonParticles"), {
  ssr: false,
});

export default function ParticlesSection() {
  return (
    <div style={{ height: "300px", position: "relative"}}>
      <PolygonParticles />
    </div>
  );
}
