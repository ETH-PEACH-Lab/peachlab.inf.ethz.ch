# Meta Code

Clear and informative tutorials are a great starting point for learning a new programming language or API. *Creating* such tutorials means combining several elements in a manner that helps learners understand new concepts. Keeping track of everything is tricky. 

When designing tools to help tutorial authors, meta code comes in handy. Operating directly on the code that is to be explained, meta code can extract useful information about the program, and better link explanations and code. In this blog, I discuss various tools that leverage meta programming in different ways to facilitate programming tutorial authoring. 



## Tutorial Authoring – a Wishlist

Most written programming tutorials combine code with text and other resources (e.g. diagrams). To make them engaging and easy to read, authors should keep code snippets short and break up longer text with other elements [(Head et al., 2020)](#torii). Therefore, a tutorial author has to develop and maintain multiple resource types in parallel, namely:
- the source program(s) the tutorial is based on (optional)
- code snippets – excerpts of the source program shown in the tutorial
- outputs produced by running parts of the code
- prose explanations, as well as any other elements for illustration

These resources are closely interrelated and need to be kept in sync with each other – a tedious, error-prone task if no appropriate tool support is available. 
Furthermore, learners benefit from interacting with the presented code, especially if they can explore the effects of modifications on outputs directly. [(Head et al., 2020)](#torii)

From these considerations, I derive our wishlist:  
1. Tool-supported synchronisation of resources
2. Flexible (pedagogically optimal) order of presentation 
3. Interactivity



## Literate Programming

Donald Knuth [(1984)](#litprog) proposed Literate Programming and the *Web* system to write better documented programs. 
*Web* programs combine a programming language (e.g. Pascal) and a document formatting language (e.g. Tex).
They are written in an order that best fits teaching, rather than being strictly *top-down* or *bottom-up*. 
*Web* leverages meta programming to transform *Web* programs into compilable Tex and Pascal files. Since both files stem from the same *Web* source, consistency is ensured. 

These ideas of integrating code and textual descriptions into a single document have inspired most of the tools discussed below. 



## Tutorial Authoring Tools

There are two approaches to creating tutorials ([Head et al., 2020](#torii); [Wang et al., 2023](#colaroid)):
1. **Reference-based:**  
    the tutorial is based on an already finished reference implementation
2. **Simultaneous:**  
    the tutorial is written simultaneously with writing the program from scratch


### Reference-based Tutorial Authoring
**Torii** is a prototype tutorial editor that follows the first approach: the tutorial creator copies snippets from reference source code into the tutorial [(Head et al., 2020)](#torii). Torii applies meta programming to address the needs for consistency and flexible presentation identified in our wishlist as follows:

1. **Consistency** of resources: 
    - Torii links code snippets to the source program lines from where they were copied. 
    - Code edits are automatically propagated...  
        - ...from snippets to generated outputs.  
        - ...between source and snippets – both directions. 

2. **Flexibility** in presentation: 
    - Snippets can be *split*, *copied*, *duplicated*, and *reordered*. *Syntactically incomplete* snippets are allowed. 
    - *Program snapshots* for every output element ensure that the corresponding (partial) code remains executable regardless. They consist of all the code that appeared before the respective output element, deduplicated and in order.
    - With these snapshots, Torii can simulate the code that a reader following along should have at any given point in the tutorial. 
    - Synchronisation of an individual snippet can be turned off, while it stays on for other copies of the same snippet (*localised edits*). 

While the edit synchronisation feature was well received by test users, the snapshots and localised edits were considered unintuitive. [(Head et al., 2020)](#torii) 

These issues appear to be mitigated by the following tools, which provide a clear timeline of code modification steps. 


### Simultaneous Tutorial Authoring

**Storyteller** and **Colaroid** are tools that use meta code to track the steps of a program as it is created. 
As a result, they provide a clear timeline of changes, with each step comprising changes in several places across the program. Thus, programs are explained in the order of their creation, showing learners how to approach a problem. 

**Storyteller** is an editor plugin for *worked examples* that records programming progress at keystroke granularity. Instructors select the interesting steps, mark important code sections, and add explanations. Learners can view these annotated highlights in a playback. 
However, Storyteller includes neither outputs nor affordances for tinkering with the code. [(Mahoney, 2018)](#storyteller) 

**Colaroid** is a Visual Studio Code extension designed as a *temporal-based notebook* – a new twist on the notebook model [(Wang et al., 2023)](#colaroid). 
Every cell represents an incremental step and consists of three components: 
1. description (explanation & rationale behind the code)
2. code preview of changes made from the previous state
3. output of the code in this state (which users can play around with)
    - *optional:* recorded sample interactions with output

Upon creation, a new cell automatically references all new edits, then the author adds explanations. Under the hood, Colaroid combines *git* and a JSON file to track each step's changes. 
When code is altered in hindsight, consistency is preserved by propagating these modifications to all the later cells. 
Furthermore, learners can load a cell's state into their editor and experiment with alternative code. [(Wang et al., 2023)](#colaroid)


### Comparison with Computational Notebooks

In recent years, computational notebooks (e.g. Jupyter Notebooks) have been widely adopted in programming classes in various forms [(Johnson, 2020)](#jupyter), including for programming tutorials [(Head et al., 2020)](#torii). To round up the presentation of novel tools, let us  discuss their added benefits compared to the familiar Jupyter notebooks. 

While changes made to code in notebooks are reflected in outputs after rerunning a cell, there is no support for consistency with a separate reference code file, unlike in Torii. 
Like both Torii and Colaroid, computational notebooks allow learners to tinker with the code and outputs. 
However, due to their hidden state, Jupyter notebooks enforce a linear order of cell execution. To keep everything functioning, it is recommended to frequently restart the kernel and run all cells [(Johnson, 2020)](#jupyter). This does not allow for a flexible, pedagogical presentation order. Consequently, they are not suitable for tutorials in all domains [(Head et al., 2020)](#torii).
Some programming tasks might better be explained by presenting a simple base program and gradually refining it to reach the final result. This is well supported by all three of the tools presented above. 



## The Future 
Colaroid provides good support for simultaneously programming and authoring. 
Since a lot of professional tutorial authors are required to use reference implementations [(Head et al., 2020)](#torii), I think it would be interesting to extend Colaroid with reference support. 

Looking back at the different techniques seen above, such an extended version of Colaroid could ideally...
- track which parts are already included in the tutorial.
- map tutorial code to the corresponding source code lines (similar to Torii).
- track the differences between the final source code and the current state in the tutorial. This would allow authors to start with a simplified version of the code, then refine it until the reference and tutorial code match up. The visualisation of these differences in the tool could be similar to a *git diff*. 

I am curious to see how meta programming further facilitates tutorial authoring in the future. 



## References
<a id="torii">[Head et al., 2020]</a> 
Andrew Head, Jason Jiang, James Smith, Marti A. Hearst, and Björn Hartmann. 2020. *Composing Flexibly-Organized Step-by-Step Tutorials from Linked Source Code, Snippets, and Outputs.* In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). Association for Computing Machinery, New York, NY, USA, 1–12. https://doi.org/10.1145/3313831.3376798.

<a id="litprog">[Knuth, 1984]</a> 
D. E. Knuth, *Literate Programming*, The Computer Journal, Volume 27, Issue 2, 1984, Pages 97–111.

<a id="colaroid">[Wang et al., 2023]</a> 
April Yi Wang, Andrew Head, Ashley Ge Zhang, Steve Oney, and Christopher Brooks. 2023. *Colaroid: A Literate Programming Approach for Authoring Explorable Multi-Stage Tutorials.* In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23). Association for Computing Machinery, New York, NY, USA, Article 798, 1–22. https://doi.org/10.1145/3544548.3581525

<a id="storyteller">[Mahoney, 2018]</a> 
Mark Mahoney. 2018. *Storyteller: a tool for creating worked examples.* J. Comput. Sci. Coll. 34, 1 (October 2018), 137–144.

<a id="jupyter">[Johnson, 2020]</a> 
Jeremiah W. Johnson. 2020. *Benefits and Pitfalls of Jupyter Notebooks in the Classroom.* In Proceedings of the 21st Annual Conference on Information Technology Education (SIGITE '20). Association for Computing Machinery, New York, NY, USA, 32–37. https://doi.org/10.1145/3368308.3415397



---
**Author: O. Furrer**  
A computer science master's student at ETH Zürich, majoring in Secure and Reliable Systems, with an interest in programming languages, intuitive user interfaces, and clear programming teaching materials. 
