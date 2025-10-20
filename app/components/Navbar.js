"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useThemeSwitcher } from "../components/Providers";
import "./Navbar.css";

export default function Navbar() {
  const { themeType, setThemeType } = useThemeSwitcher();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [researchInView, setResearchInView] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/#research" },
    { label: "Team", href: "/team" },
    { label: "Publications", href: "/publications" },
    { label: "Teaching", href: "/teaching" },
  ];

  // Detect if research section is in view
  useEffect(() => {
    if (pathname !== "/") {
      setResearchInView(false);
      return;
    }

    const handleScroll = () => {
      const researchSection = document.getElementById("research");
      if (researchSection) {
        const rect = researchSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Consider in view if section is in the viewport
        const inView = rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
        setResearchInView(inView);
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/" && !researchInView;
    if (href === "/#research") return pathname === "/" && researchInView;
    return pathname.startsWith(href);
  };

  const handleNavClick = (e, href) => {
    if (href === "/#research") {
      e.preventDefault();
      closeMobileMenu();
      
      // If already on homepage, just scroll
      if (pathname === "/") {
        const element = document.getElementById("research");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to homepage then scroll
        window.location.href = "/#research";
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Image
            src={themeType === "custom-dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
            width={105}
            height={26}
            alt="PEACH Lab"
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${isActive(link.href) ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="navbar-controls">
          <button
            className="theme-toggle"
            onClick={() => setThemeType(themeType === "custom-dark" ? "custom-light" : "custom-dark")}
            aria-label="Toggle theme"
          >
            {themeType === "custom-dark" ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-menu-link ${isActive(link.href) ? "active" : ""}`}
              onClick={(e) => {
                handleNavClick(e, link.href);
                if (link.href !== "/#research") {
                  closeMobileMenu();
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
          onTouchEnd={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}