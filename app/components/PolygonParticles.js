"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

export default function PolygonParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

    const options = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 20,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3
        }
      }
    },
    particles: {
      color: {
        value: "#aaaaaa",
        opacity: 0.6,
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      },
      links: {
        blink: false,
        color: "random",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: { min: 0.5, max: 1 }
      },
      number: {
        value: 300
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        random: false,
        value: { min: 0.05, max: 1 }
      },
      shape: {
        type: "circle"
      },
      size: {
        animation: {
          enable: false,
          speed: 30,
          sync: false
        },
        random: true,
        value: { min: 0.1, max: 1 }
      }
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: "#fff",
          width: 0.5,
          opacity: 0.5
        }
      },
      move: {
        radius: 2
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 1,
      type: "inline",
      position: { x: 40, y: 20 },
      url: "/assets/logo-outline.svg"
    }
  };

  return (
    
    <div style={wrapperStyle}>
      <Particles
        init={particlesInit}
        options={options}
        style={particlesStyle}
      />
    </div>
  );
}

const wrapperStyle = {
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
};

const particlesStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};