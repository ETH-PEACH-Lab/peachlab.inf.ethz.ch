import { useMemo } from "react";

function extractSecondLevelHeadings(markdownText) {
  const regex = /^###\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = regex.exec(markdownText)) !== null) {
    const text = match[1].trim();
    // Generate an id similar to how rehype-slug does
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ text, id });
  }
  return headings;
}

export default function Toc({ markdownText }) {
  const headings = useMemo(() => extractSecondLevelHeadings(markdownText), [markdownText]);

  return (
    <nav className="toc">
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}