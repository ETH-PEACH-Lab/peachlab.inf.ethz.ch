"use client"; // ✅ Mark as a Client Component

import React from 'react'

import Link from "next/link";
import { Button, useTheme, Tabs, Image } from "@geist-ui/core";
import { Moon, Sun } from "@geist-ui/icons";
import { useRouter, usePathname } from "next/navigation";
import { useThemeSwitcher } from "../components/Providers"; // ✅ Import ThemeContext Hook
import "./Navbar.css"; // ✅ Import custom styles
//Convert HEX to RGBA manually
const addColorAlpha = (hex, alpha) => {
  hex = hex.replace("#", "");
  let r, g, b;

  if (hex.length === 3) {
    // Convert shorthand hex (#fff → #ffffff)
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


export default function Navbar() {
  const { themeType, setThemeType } = useThemeSwitcher(); // ✅ Use theme state from context
  const theme = useTheme()
  const router = useRouter();
  const pathname = usePathname(); // ✅ Get current route
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const currentTab = pathname === "/" ? "" : pathname.split("/")[1];

  const handleTabChange = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <>
      <div className="menu-wrapper">
        <nav className="menu">
          {/* Logo Section */}
          <div className="content">

            <div className="logo">
              <Link href="/"><Image
                src={themeType == "custom-dark" ? `${basePath}/assets/logo-dark.png` : `${basePath}/assets/logo-light.png`}
                height="30px"
                alt="PEACH Lab Logo"
                draggable={false}
                title="Logo"
              /></Link>
            </div>

            {/* Navigation Links */}
            <div className="tabs">
              <Tabs
                value={currentTab}
                leftSpace={0}
                activeClassName="current"
                align="center"
                hideDivider
                hideBorder
                onChange={handleTabChange}>
                <Tabs.Item
                  font="14px"
                  label={"Home"}
                  value={""}
                />
                <Tabs.Item
                  font="14px"
                  label={"Team"}
                  value={"team"}
                />
                <Tabs.Item
                  font="14px"
                  label={"Research"}
                  value={"research"}
                />
                <Tabs.Item
                  font="14px"
                  label={"Publications"}
                  value={"publications"}
                />
                <Tabs.Item
                  font="14px"
                  label={"Teaching"}
                  value={"teaching"}
                />
              </Tabs>
            </div>

            {/* Dark Mode Toggle */}
            <div className="controls">

              <Button auto icon={themeType === "custom-dark" ? <Sun /> : <Moon />} onClick={() => setThemeType(themeType === "custom-dark" ? "custom-light" : "custom-dark")}>
              </Button>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .menu {
          box-shadow: ${theme.type === 'dark'
          ? '0 0 0 1px #333'
          : '0 0 15px 0 rgba(0, 0, 0, 0.1)'};
          background-color: ${addColorAlpha(theme.palette.background, 0.9)};
        }
        .highlight {
          background-color: ${addColorAlpha(theme.palette.background, 0.7)};
        }
      `}</style>
    </>
  );
}