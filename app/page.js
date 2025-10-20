"use client"
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import introMd from '!raw-loader!./data/intro.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import researchMd from '!raw-loader!./data/research.md';
import news from "@/data/news.json";
import researchData from '@/data/research.json';
import { Card, Text } from "@geist-ui/core";
import Image from "@/components/Image";
import Link from "next/link";
import InteractiveChart from '@/research/InteractiveChart';
import PubCard from '@/publications/PubCard';
import { Sparkles, Users, Globe, TrendingUp, MessageSquare } from 'lucide-react';

import "./style.css";

// Map research themes to icons
const themeIcons = {
  'thinking-assistant': Sparkles,
  'thinking-takes-two': Users,
  'accessible-complex-domains': Globe,
  'measuring-cognitive-engagement': TrendingUp,
  'communicating-and-presenting-computational-work': MessageSquare,
};


export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash === "#research") {
      setTimeout(() => {
        const element = document.getElementById("research");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="unified-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <Image src='/assets/landing/datar6.jpg' alt="PEACH Lab" />
        </div>
        
        <div className="intro-content">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer">
                  {props.children}
                </a>
              ),
            }}
          >
            {introMd}
          </ReactMarkdown>
        </div>

        <div className="cta-buttons">
          <a href="/publications" className="cta-btn primary">
            <span className="btn-text">View Publications</span>
          </a>
          <a href="/team" className="cta-btn secondary">
            <span className="btn-text">Meet the Team</span>
          </a>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2 className="section-title">Latest News</h2>
        <div className="news-content">
          <ul className="news-list">
            {news.slice(0, 5).map((item, index) => (
              <li key={index} className="news-item">
                <span className="news-date">{item.time}</span>
                <div className="news-text" dangerouslySetInnerHTML={{ __html: item.title }} />
              </li>
            ))}
          </ul>
          <Link href="/news" className="section-link">
            View all news →
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="research-section">
        <h2 className="section-title">Research</h2>
        
        <div className="research-intro">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer">
                  {props.children}
                </a>
              ),
            }}
          >
            {researchMd}
          </ReactMarkdown>
        </div>

        <div className="research-chart">
          <InteractiveChart />
          <p className="chart-caption">
            Well-designed systems balance usability with opportunities for productive cognitive effort.
          </p>
        </div>

        <div className="research-themes">
          <h3 className="subsection-title">Research Themes</h3>
          {researchData.map((theme, index) => {
            const IconComponent = themeIcons[theme.slug];
            return (
            <div key={index} className="theme-card" id={theme.slug}>
              <div className="theme-header">
                {IconComponent && (
                  <div className="theme-icon">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                )}
                <div className="theme-header-text">
                  <h4 className="theme-title">{theme.theme}</h4>
                  <p className="theme-subtitle">{theme.subtitle}</p>
                </div>
              </div>
              <p className="theme-description">{theme.description}</p>
              
              {theme.projects && theme.projects.length > 0 && (
                <div className="theme-projects">
                  <h5 className="projects-title">Key Publications</h5>
                  {theme.projects.map((slug) => (
                    <PubCard key={slug} slug={slug} hideButtons={true} />
                  ))}
                </div>
              )}
              
              {/* {index === 3 && (
                <p className="coming-soon">More coming soon.</p>
              )} */}
            </div>
          );
          })}
        </div>

        <div className="research-footer">
          <p>
            Curious how prototypes lead to knowledge? Read more about our{' '}
            <Link href="/epistemic">research approaches</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
