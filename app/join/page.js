"use client"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
// eslint-disable-next-line import/no-webpack-loader-syntax
import joinMd from '!raw-loader!../data/join.md';
import "./style.css";

export default function Join() {
  return (
    <div className="join-container">
      {/* <h1 className="join-title">Join Us</h1> */}

      <div className="join-content">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="join-section-title" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="join-subsection-title" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="join-category-title" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="join-paragraph" {...props} />
            ),
            em: ({ node, ...props }) => (
              <em className="join-emphasis" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="join-list" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="join-list-item" {...props} />
            ),
            a: ({ node, ...props }) => {
              const isExternal = !props.href?.startsWith('/');
              return (
                <a 
                  className="join-link" 
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
          {joinMd}
        </ReactMarkdown>
      </div>
    </div>
  );
}