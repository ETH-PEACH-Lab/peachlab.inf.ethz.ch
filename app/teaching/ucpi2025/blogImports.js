/* eslint-disable import/no-webpack-loader-syntax */

export const blogImports = {
  "visual-debugging": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w4-visual-debugging.md"),
  "in-situ-visualization": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w4-in-situ-visualization.md"),
  "structured-editors": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w5-structured-editors.md"),
  "task-decomposition": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w5-Task-Decomposition.md"),
  "sketching-and-diagramming": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w6-sketching-and-diagramming.md"),
  "programming-by-demonstration": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w6-programming-by-demonstration.md"),
  "meta-code": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w7-meta-code.md"),
  "computational-notebooks": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w7-computational-notebooks.md"),
  "version-management": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w8-version-management.md"),
  "real-time-collaborative-editing": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w8-real-time-collaborative-editing.md"),
  "programming-interactive-articles": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w9-programming-interactive-articles.md"),
  "programming-scenes": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w9-programming-scenes.md"),
  "developer-community": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w10-developer-community.md"),
  "code-clustering": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w11-code-clustering.md"),
  "code-tutorials": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w11-code-tutorials.md"),
  "no-code-environment": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w12-no-code-environment.md"),
  "accessibility": () => import("!raw-loader!../../data/teaching/ucpi2025/blog/w12-accessibility.md"),
};
