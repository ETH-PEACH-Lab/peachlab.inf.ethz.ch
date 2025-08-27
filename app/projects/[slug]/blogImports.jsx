// app/projects/[slug]/blogImports.js
// Use raw-loader (or MDX) but always wrap in a function that returns a module-like object
import spark from '!raw-loader!@/data/blog/spark.md';
// import teaching from '!raw-loader!@/data/blog/teaching.md';

export const blogImports = {
  spark: async () => ({ default: spark }),
  // teaching: async () => ({ default: teaching }),
  // add more slugs...
};
