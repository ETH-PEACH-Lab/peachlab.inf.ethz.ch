"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { useThemeSwitcher } from "./Providers";
import "./Footer.css";

export default function Footnote() {
  const { themeType } = useThemeSwitcher();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Lab Title */}
        {/* <div className="footer-section footer-brand">
          <h3 className="footer-lab-title">
            Programming, Education, and Computer-Human Interaction (PEACH) Lab @ ETH Zürich
          </h3>
        </div> */}

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h4 className="footer-title">Contact</h4>
          <div className="footer-contact-item">
            <MapPin size={16} strokeWidth={2} />
            <div>
              <p>CAB F 63</p>
              <p>Universitätstrasse 6</p>
              <p>8092 Zürich, Switzerland</p>
            </div>
          </div>
          <div className="footer-contact-item footer-website">
            <Mail size={16} strokeWidth={2} />
            <div>
              <a href="https://aprilwang.me/" target="_blank" rel="noopener noreferrer">Prof. April Wang</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <nav className="footer-nav">
            <Link href="/team">Team</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/teaching">Teaching</Link>
            <Link href="/join">Join Us</Link>
          </nav>
        </div>

        {/* Affiliations */}
        <div className="footer-section footer-affiliations">
          <h4 className="footer-title">Part of</h4>
          <nav className="footer-nav">
            <a href="https://ethz.ch/en.html" target="_blank" rel="noopener noreferrer">
              ETH Zürich
            </a>
            <a href="https://inf.ethz.ch/" target="_blank" rel="noopener noreferrer">
              D-INFK
            </a>
            <a href="https://iis.inf.ethz.ch/" target="_blank" rel="noopener noreferrer">
              Institute IIS
            </a>
          </nav>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PEACH Lab, ETH Zürich. All rights reserved.</p>
      </div>
    </footer>
  );
}