"use client"
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import researchMd from '!raw-loader!@/data/research.md';

import researchData from '@/data/research.json';
import { Collapse, Text } from "@geist-ui/core";
import PubCard from '@/publications/PubCard';

import InteractiveChart from './InteractiveChart';
import "./style.css";

export default function Research() {
  return (
    <div style={{ textAlign: "left"}}>
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
      <div className="illustration">
      {/* Place chart in the middle */}
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
        <InteractiveChart />
      </div>
      <div style={{color:"gray", fontStyle:"italic", textAlign:"center", marginBottom:"32px"}}>
        Well-designed systems balance usability with opportunities for productive cognitive effort.
      </div>
      </div>
        <div style={{marginBottom: "64px"}}>
      {researchData.map((item, index) => (
        index !==3 &&
        <div key={index}>
          <Collapse id={item.slug} title={item.theme} subtitle={item.subtitle} initialVisible>
            <Text>{item.description}</Text>
            <p style={{fontWeight:"bold"}}>Highlights:</p>
                        {index === 3 && (
              <div style={{marginTop: "16px"}}>More coming soon.</div>
            )}
            {index !== 3 && 
              item.projects && item.projects.map((slug) => (
                <PubCard key={slug} slug={slug} />
              ))
            }
          </Collapse>
        </div>
      ))}
      </div>
      <div> Curious how prototypes lead to knowledge? Read more about our <a href="/epistemic" target="_self">research approaches</a>. </div>
    </div>
  );
}