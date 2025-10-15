// app/projects/[slug]/blogImports.js
// Use raw-loader (or MDX) but always wrap in a function that returns a module-like object
// eslint-disable-next-line import/no-webpack-loader-syntax
import spark from '!raw-loader!@/data/blog/spark.md';
import emotion from '!raw-loader!@/data/blog/emotion.md';
// import teaching from '!raw-loader!@/data/blog/teaching.md';

export const blogImports = {
  spark: async () => ({ default: spark }),
  emotion: async () => ({ default: emotion }),
  // teaching: async () => ({ default: teaching }),
  // add more slugs...
};
