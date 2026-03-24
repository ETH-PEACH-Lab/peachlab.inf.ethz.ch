// app/notes/[slug]/noteImports.js
// Import all markdown files from app/data/notes/

// eslint-disable-next-line import/no-webpack-loader-syntax
import visit from '!raw-loader!@/data/notes/visit.md';

export const noteImports = {
  visit: async () => ({ default: visit }),
  // Add more notes here as needed
};

// List of all available note slugs for static generation
export const noteSlugs = Object.keys(noteImports);
