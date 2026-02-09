# W4 - In Situ Visualization

### Seeing Programs While They Run: In Situ Visualizations for Program Understanding

Programming often feels like working with a blindfold on. You write code, run it, observe the output, and then mentally reconstruct how the program’s internal state must have evolved to produce what you see. When things go wrong, this mental simulation becomes even harder. Debuggers, logs, and breakpoints promise relief, but they often push programmers into separate views, forcing constant context switching.

This tension between *writing code* and *understanding what it actually does* is the central problem tackled by **in situ visualizations**: techniques that embed visual representations of runtime behavior directly into source code. Instead of asking programmers to jump between editors, consoles, and debuggers, these tools bring the program’s behavior to where attention already is, the code itself.

In this post, I explore the idea of in situ visualizations through the lens of *Augmenting Code with In Situ Visualizations to Aid Program Understanding*, a CHI 2018 paper by Hoffswell, Satyanarayan, and Heer [1]. I’ll explain what in situ visualizations are, why they matter, how this paper structures their design space, and what this line of research suggests for the future of programming interfaces, especially in an era shaped by AI.

---

### Why Program Understanding Is So Hard

Modern development environments offer powerful debugging tools, but many of them separate *program state* from *program text*. Variables appear in side panels, timelines appear in other windows, and logs scroll by elsewhere. Prior research shows that these separations come with cognitive costs: programmers spend significant time switching contexts, lose their sense of “flow,” and may remain unaware of errors for long stretches of time. More broadly, Ko et al. describe multiple “learning barriers” that arise when people try to understand and modify programs [5].

This is particularly problematic during exploratory programming, when developers are still forming hypotheses about how their code behaves. At this stage, even small mismatches between expectation and reality can go unnoticed simply because the evidence is hidden behind extra steps.

The core insight behind in situ visualization is simple but powerful: **if runtime behavior is what programmers need to reason about, why not show it right next to the code that produces it?**

---

### What Are In Situ Visualizations?

In situ visualizations are small, embedded graphics placed directly within the source code editor. They visualize properties such as:

- the current value of a variable,
- how a value changes over time,
- the distribution of a dataset,
- or whether a variable has recently been updated.

Crucially, these visualizations are *contextual* and *lightweight*. They are not full-fledged charts demanding the programmer’s full attention, but subtle cues that support quick inspection and comparison.

The CHI 2018 paper explores this idea concretely by embedding visualizations into a code editor for **Vega**, a declarative visualization language. As the program runs, histograms, line charts, and change indicators appear alongside variable definitions, updating live as the user interacts with the output visualization.

---

### Designing Embedded Visualizations: A Design Space

A major contribution of the paper is a **design space** that organizes in situ visualizations along three dimensions:

1. **Data type**  
   - *Value variables* (single numbers, strings, or objects)  
   - *Set variables* (collections of values, such as datasets)

2. **Level of detail**  
   - *Data*: showing actual values or distributions  
   - *Change*: showing whether and how much something changed

3. **Temporality**  
   - *Snapshot*: what the value looks like right now  
   - *Sequence*: how it has evolved over time  

From these dimensions, the authors derive a set of visual encodings, exact values, line charts, horizon charts, histograms, indicators, and timelines. Eeach suited to different understanding tasks.

What’s notable is that the paper does not argue for a single “best” visualization. Instead, it frames design as a matter of **task-dependent trade-offs**, emphasizing that what works for quick debugging may differ from what works for learning or performance analysis.

---

### Placement Matters More Than You Think

Embedding visualizations into code is not just about *what* to show, but *where* to show it. The paper explores twelve placement strategies, including inline, margin-based, above-line, and expandable overlays.

These placements are evaluated along competing goals:

- **Comparability**: can multiple variables be compared easily?
- **Salience**: does the visualization attract attention when it should?
- **Unobtrusiveness**: does it avoid disrupting code reading?

For example, placing visualizations in the margin improves alignment and comparison, while expandable inline visualizations minimize disruption at the cost of discoverability. There is no universally optimal choice. Only informed design decisions.

This attention to placement highlights a broader lesson in user-centered interface design: *small UI decisions can dramatically shape how people think.*

---

### Does It Actually Help?

To test their ideas, the authors conducted a user study with 18 novice Vega users. Participants answered program-understanding questions with and without in situ visualizations [1].

The results were modest but meaningful:
- Participants using in situ visualizations scored higher overall.
- They reported significantly better speed and accuracy.
- Qualitative feedback suggested that seeing values change “at a glance” helped connect code, data, and behavior.

Interestingly, participants could often solve tasks even without the visualizations, but doing so required more probing, more interaction, and more cognitive effort. In situ visualizations didn’t replace reasoning; they **reduced friction**.

---

### Connections to Broader Research

This work builds on a long tradition of research in program visualization and learnable programming. Tools like **Online Python Tutor** visualize execution for learners [3], while systems like **Theseus** and Bret Victor’s *Learnable Programming* argue for always-on visual feedback as a foundation for understanding [2].

What distinguishes in situ visualization is its *integration*. Instead of teaching programming through separate visual explanations, it treats runtime behavior as a first-class annotation of code, much like comments, but dynamic and data-driven. Always-on visualizations have also been explored as a way to address misconceptions while programming [4].

---

### Looking Forward: In Situ Visualization in the Age of AI

As AI-powered programming tools become more common, in situ visualization may become even more important.

Large language models can generate code quickly, but they often obscure *why* a program behaves the way it does. Embedded visualizations could act as a counterbalance, helping programmers validate, steer, and trust AI-generated code by making its behavior visible as it runs.

Recent systems like WaitGPT explore monitoring and steering conversational LLM agents in data analysis using on-the-fly code visualization [6].

Imagine an AI assistant that not only writes code, but automatically chooses and places in situ visualizations to explain its reasoning. Or environments where visual feedback adapts based on whether the programmer is debugging, learning, or refactoring.

In that future, understanding code may feel less like detective work and more like a conversation with the program itself.

---

### Final Thoughts

In situ visualizations challenge a long-standing assumption in programming tools: that understanding happens *after* execution, in separate views. By embedding runtime behavior directly into code, they narrow the gap between intent and effect.

The CHI 2018 paper does not claim to solve all debugging or comprehension problems. But it offers something just as valuable: a principled way to think about how code, data, and visualization can coexist in a single interface.

As programming becomes more accessible and more automated, designing interfaces that help humans *stay in the loop* will only grow in importance.

---

### References

\[1] Hoffswell, Jeffrey, Arvind Satyanarayan, and Jeffrey Heer. "Augmenting code with in situ visualizations to aid program understanding." In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (CHI '18) (2018). https://doi.org/10.1145/3173574.3174106.

\[2] Victor, Bret. "Learnable programming: Designing a programming system for understanding programs." Online essay (2012). http://worrydream.com/LearnableProgramming/.

\[3] Guo, Philip J. "Online Python Tutor: Embeddable web-based program visualization for CS education." In Proceedings of the 44th ACM Technical Symposium on Computer Science Education (SIGCSE '13) (2013): 579–584.

\[4] Lieber, T., Joel Brandt, and Robert C. Miller. "Addressing misconceptions about code with always-on programming visualizations." In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '14) (2014): 2481–2490.

\[5] Ko, Andrew J., Brad A. Myers, and Htet Htet Aung. "Six learning barriers in end-user programming systems." In Proceedings of the 2004 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC 2004) (2004): 199–206.

\[6] Xie, L., Zheng, C., Xia, H., Qu, H., and Zhu-Tian, C. "WaitGPT: Monitoring and Steering Conversational LLM Agent in Data Analysis with On-the-Fly Code Visualization." In Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST '24) (2024): Article 119, 1–14.
