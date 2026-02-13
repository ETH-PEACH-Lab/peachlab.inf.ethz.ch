## Programming by Demonstration

### Introduction

Every software engineer knows this moment: you have to make the exact same kind of change in dozens or even hundreds of source files. Maybe a function signature has changed, a library API deprecated one of its calls, variable names were standardized, or formatting conventions updated. Making these changes manually is boring, repetitive, and error prone but trying to automate the process by writing a transformation script can feel like overkill and might introduce its own bugs.

There is a frustrating “murky middle” where neither approach feels right: there are too many changes to do manually, but not enough to justify writing complex automation. This is the situation that the ReCode [1] tool aims to solve with an interactive, example-based workflow.

### Why Current Code Transformation Tools Fall Short

Given that this situation comes up so often, you might think someone has already solved it and there must be already a tool out there for it. And to some extent, that is true. But existing code transformation tools generally fall into two broad categories:

- **Text based find and replace:** Built in editor tools let you match text or use regular expressions, but treating code as plain text ignores its structure. This severely limits what you can do and can easily lead to mistakes.
- **Structural / AST aware tools:** These tools work with the abstract syntax tree (AST) [2] of the code, which understands its structure rather than just the text. They are more accurate, but they often require learning new domain specific languages or writing complex transformation scripts.

In practice, many developers find there is a steep trade off between power, effort, and risk. Most avoid tools they don’t fully understand or trust, and end up defaulting back to manually changing the code.

### The reCode Approach

<img src="/assets/teaching/ucpi2025-blogs/img/Screenshot%202025-10-23%20082711.png" alt="overview" height="200">

The reCode tool reframes this problem by combining the familiar find and replace workflow with programming by example. Instead of forcing you to write scripts or elaborate regular expressions, reCode watches how you edit a few instances of the change you want to make and then tries to infer a general transformation that applies to the rest of the codebase.

From the user’s point of view, the workflow has three steps:

1. **Search for relevant locations.** You start with a simple search term, like a snippet of text or an identifier, to find places in the code that might need the change.
2. **Perform an example edit.** In one of those locations, you make the change you want directly in the editor.
3. **Generalize and inspect.** reCode analyzes your edit and suggests similar changes elsewhere. It shows these suggestions in a diff style UI (like for git), allowing you to accept, reject, or refine them before applying anything.

This workflow balances automation with control: you show what you want to change, and the system figures out how to apply that pattern more broadly. Developers don’t need to learn new tools or languages since reCode is a simple extension for VS Code, which keeps the friction low.

### How reCode Generalizes Edits Under the Hood

Rather than treating code as plain text, reCode looks at the structure of your edits and captures patterns that go beyond simple string matching. The generalization happens in two main steps.

First, reCode builds an abstract syntax tree (AST) for the code before and after your edit. This lets it capture the structural difference between the original and modified versions. Second, reCode uses a tool called ReFazer [3], which takes pairs of ASTs as input and encodes the edit operation in a domain specific language. That encoded transformation is then used by reCode to transform the remaining ASTs across the codebase. Because this process is iterative, the more example input-output edits you provide, the more accurate the ReFazer transformation becomes.

### The Future: AI and Code Transformation

With the rise of large language models and AI-assisted coding tools, some might wonder whether tools like reCode are still useful. After all, modern AI systems can generate or rewrite code based on natural language prompts.

However, there are several reasons why reCode still has advantages:

- **Guaranteed structural correctness.** Because reCode works with the syntactic structure of code, its suggestions are grounded in the AST and avoid many incorrect or nonsensical proposals that AI models might produce.
- **Interactive oversight.** Instead of blindly trusting an AI’s output, developers can guide and refine suggestions with immediate feedback.
- **Effective for semi-structured edits.** For repetitive transformations that follow clear structural patterns, reCode’s example-based approach can be faster and more reliable than prompting an AI and then verifying the output manually.

So while AI might be a contender and can be used for similar tasks, it lacks the structure-aware approach that still gives reCode its edge.

### Conclusion

Code transformations caused by renaming APIs, updating signatures, and refactoring patterns at scale are some of the least enjoyable and most error prone parts of everyday software engineering. The two most natural solutions, manual edits and automation scripts, both have major drawbacks. Tools like reCode, which use programming by demonstration, offer a practical middle ground: developers show a few examples of what they want to change, and the system generalizes and proposes those changes interactively. This reduces manual work while keeping clarity and control in the developer’s hands.

### References

[1]: https://dl.acm.org/doi/10.1145/3472749.3474748 “reCode : A Lightweight Find and Replace Interaction in the IDE for Transforming Code by Example”

[2]: https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38 “Abstract Syntax Tree (AST) - Explained in Plain English”

[3]: https://dl.acm.org/doi/10.1145/3428287 “Feedback driven semi supervised synthesis of program transformations”
