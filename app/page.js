"use client"
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import introMd from '!raw-loader!./data/intro.md';
import news from "@/data/news.json";
import ResearchMini from '@/research/ResearchMini';
import { Card } from "@geist-ui/core";
import Image from "@/components/Image";


import "./style.css";


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-teaser-img">
        <Image src='/assets/landing/datar6.jpg' alt="Teaser" />
      </div>

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
      <div className="home-buttons">
        <a href="/research" className="home-btn">
          Check Our Work
        </a>
        <a href="/team" className="home-btn">
          Meet the Team
        </a>
      </div>
      {/* News Section */}
      <Card className="news-card">
        <h3 className="news-title">News</h3>
        <ul className="news-list">
          {news.slice(0, 5).map((item, index) => (
            <li key={index} className="news-list-item">
              <strong>{item.time}: </strong>
              <p dangerouslySetInnerHTML={{ __html: item.title }} style={{ display: "inline" }} />
            </li>
          ))}
        </ul>
        <div className="news-link">
          <a href="/news" className="news-link-a">
            See all news &rarr;
          </a>
        </div>
      </Card>

      {/* Latest Research Section */}
      <h3 className="featured-title">Featured Research</h3>
      <ResearchMini />
      <div className="featured-link">
        <a href="/research" className="featured-link-a">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
}
