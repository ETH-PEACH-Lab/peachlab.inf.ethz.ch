"use client"
import React, { useState } from "react";
import gallery from "@/data/gallery.json";
import Image from "@/components/Image";

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const goToImage = (idx) => setCurrent(idx);

  if (!gallery.length) return null;

  return (
    <div style={{
      position: "relative",
      maxWidth: "600px",
      margin: "2rem auto",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      background: "#fff"
    }}>
      <Image
        src={gallery[current].src}
        alt={gallery[current].alt || `Gallery image ${current + 1}`}
        style={{ width: "100%", height: "350px", objectFit: "cover", display: "block" }}
      />
      {/* <div style={{
        position: "absolute",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        padding: "4px 12px",
        borderRadius: "8px",
        fontSize: "1rem"
      }}>
        {gallery[current].caption || ""}
      </div> */}
      {/* Dots navigation */}
      <div style={{
        position: "absolute",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
        marginTop: "32px"
      }}>
        {gallery.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToImage(idx)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: idx === current ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              display: "inline-block"
            }}
          />
        ))}
      </div>
    </div>
  );
}