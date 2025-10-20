"use client"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
// eslint-disable-next-line import/no-webpack-loader-syntax
import thesesMd from '!raw-loader!../data/theses.md';
import { FileText } from 'lucide-react';
import "./style.css";

export default function Theses() {
  return (
    <div className="theses-container">
      {/* <h1 className="theses-title">Thesis Projects</h1> */}

      <div className="theses-content">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="theses-section-title" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="theses-subsection-title" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="theses-category-title" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="theses-paragraph" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="theses-list" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="theses-list-item" {...props} />
            ),
            a: ({ node, ...props }) => {
              const isExternal = !props.href?.startsWith('/');
              return (
                <a 
                  className="theses-link" 
                  {...props} 
                  target={isExternal ? "_blank" : "_self"} 
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {props.children}
                </a>
              );
            },
          }}
        >
          {thesesMd}
        </ReactMarkdown>
      </div>
    </div>
  );
}