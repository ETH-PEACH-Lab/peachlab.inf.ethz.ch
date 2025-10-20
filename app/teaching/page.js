"use client"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
// eslint-disable-next-line import/no-webpack-loader-syntax
import teachingMd from '!raw-loader!@/data/teaching.md';
import "./style.css";

export default function Teaching() {
  return (
    <div className="teaching-container">
      <h1 className="teaching-title">Teaching</h1>
      
      <div className="teaching-notice">
        <p>
          We offer thesis projects to current bachelor and master students at ETH Zürich. 
          Please check our <Link href="/theses" className="teaching-notice-link">thesis opportunities page</Link> for more details.
        </p>
      </div>

      <div className="teaching-content">
        <ReactMarkdown
          components={{
            h3: ({ node, ...props }) => (
              <h3 className="teaching-semester-title" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="teaching-list" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="teaching-list-item" {...props} />
            ),
            a: ({ node, ...props }) => {
              const isInternal = props.href?.startsWith('./');
              return (
                <a 
                  className="teaching-link" 
                  {...props} 
                  href={isInternal ? props.href.replace('./', '/teaching/') : props.href}
                  target={isInternal ? "_self" : "_blank"} 
                  rel={isInternal ? undefined : "noopener noreferrer"}
                >
                  {props.children}
                </a>
              );
            },
          }}
        >
          {teachingMd}
        </ReactMarkdown>
      </div>
    </div>
  );
}