"use client"
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import epistemicMd from '!raw-loader!@/data/epistemic.md';

export default function Epistemic() {
  return (
    <div>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >
        {epistemicMd}
      </ReactMarkdown>      
    </div>
  );
}