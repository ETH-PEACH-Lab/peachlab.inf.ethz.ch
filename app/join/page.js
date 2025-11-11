import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// eslint-disable-next-line import/no-webpack-loader-syntax
import joinMd from '!raw-loader!../data/join.md';

export default function Join() {
  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >{joinMd}</ReactMarkdown>
    </div>
  );
}