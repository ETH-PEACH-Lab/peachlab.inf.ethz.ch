"use client"
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import epistemicMd from '!raw-loader!@/data/epistemic.md';
import "./style.css";

export default function Epistemic() {
  return (
    <div className="epistemic-container">
      {/* <h1 className="epistemic-title">Our Research Approach</h1> */}
      
      <div className="epistemic-content">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="epistemic-section-title" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="epistemic-paragraph" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="epistemic-emphasis" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="epistemic-link" {...props} target="_blank" rel="noopener noreferrer">
                {props.children}
              </a>
            ),
            ul: ({ node, ...props }) => (
              <ul className="epistemic-list" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="epistemic-list-item" {...props} />
            ),
          }}
        >
          {epistemicMd}
        </ReactMarkdown>
      </div>
    </div>
  );
}