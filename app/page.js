"use client";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
// eslint-disable-next-line import/no-webpack-loader-syntax
import introMd from "!raw-loader!./data/intro.md";
import news from "@/data/news.json";
import ResearchMini from "@/research/ResearchMini";
import { Card } from "@geist-ui/core";
import Image from "@/components/Image";

import "./style.css";

const markdownComponents = {
  a: ({ node, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ),
};


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-teaser-img">
        <Image src="/assets/landing/datar6.jpg" alt="Teaser" />
      </div>

      <ReactMarkdown
        components={markdownComponents}
      >
        {introMd}
      </ReactMarkdown>
      <div className="home-buttons">
        <Link href="/research" className="home-btn">
          Check Our Work
        </Link>
        <Link href="/team" className="home-btn">
          Meet the Team
        </Link>
      </div>
      {/* News Section */}
      <Card className="news-card">
        <h3 className="news-title">News</h3>
        <ul className="news-list">
          {news.slice(0, 5).map((item, index) => (
            <li key={index} className="news-list-item">
              <strong>{item.time}: </strong>
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
            </li>
          ))}
        </ul>
        <div className="news-link">
          <Link href="/news" className="news-link-a">
            See all news &rarr;
          </Link>
        </div>
      </Card>

      {/* Latest Research Section */}
      <h3 className="featured-title">Featured Research</h3>
      <ResearchMini />
      <div className="featured-link">
        <Link href="/research" className="featured-link-a">
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}
