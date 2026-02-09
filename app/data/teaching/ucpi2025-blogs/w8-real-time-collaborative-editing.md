
# CoPrompt — The Next Step in (Collaborative) Programming?

### Setting the Stage

In programming, be it for work or leisure, sooner or later collaborative projects will appear. Likewise, sooner or later any programmer may end up being ever so slightly out of their depth (or tired of boilerplate or of Stack Overflow not being particularly helpful). LLMs have changed, for better or worse, how we interact with code, so much so that sharing specialized prompting techniques is becoming as commonplace as sharing odd quirks about C or hacked-together solutions to surprisingly common problems.

A handful of issues occur in general when doing collaborative programming, or in an environment where programming, code sharing, LLM prompting, and more are integrated into one. Four of these issues were identified and outlined in the very paper that presents CoPrompt, by Feng et al. (2024). These issues mirror challenges documented in prior work on collaborative notebooks such as Jupyter, notably by Wang et al. (2019), who studied how data scientists use computational notebooks for real-time collaboration, and by Quaranta et al. (2022), who discussed best practices for notebook-based collaborative workflows.

### The Ignoble Quartet

There are four main issues, which as outlined in Feng et al.'s (2024) CoPrompt paper are:

1. **Awareness**: Especially as the project grows, it becomes increasingly difficult to keep everything in mind. This refers to subroutines in code, class structure, and notably also prompts.
    
2. **Synchronization**: Everyone has at some point struggled with Git versioning or, worse yet, been forced to update code by hand. A tall order, and one dangerously prone to errors at that. This equally applies to prompts: for example, if one prompt changes, then all prompts following it in the same context may end up breaking due to malformed context. Feng et al. (2024) refer to these as "procedural dependencies". Incidentally, this is a term borrowed from work on multiverse analysis by Liu et al. (2021), who studied how changes in one part of a data pipeline cascade through dependent steps.
    
3. **Feedback and Assistance**: Sometimes you're stuck, can't find anything on the Internet and even your LLM of choice isn't particularly helpful: so you take to pinging your collaborator on Slack on a quarter-hourly basis. Of course, getting frequent (or even one-off, sometimes) pings can rupture your workflow.
    
4. **Reference**: Frequently alterations and fixes have to be copy-pasted, and either these lag behind some of the dependencies in your code or themselves need to still be tailored to fit the rest of the project's structure. This is closely related to the "abstraction matching problem" as mentioned by Liu et al. (2023), where in their study on end-user programmers working with code-generating LLMs the difficulty of figuring out what phrasing the AI will actually understand and produce useful code from is discussed. In essence, it is the reason as to why some people refer to it as prompt _engineering_.

### CoPrompt - The Fix?

But what if prompting, sharing, and editing didn't require ChatGPT and Slack and VSCode open all at the same time, but could rather be integrated into one tool? What if all those core issues could be addressed, merely with good design principles? Enter CoPrompt.

CoPrompt is a novel editor (the introductory paper having been released in May of 2024) which aims to integrate code editor, chat platform, and code-specific LLM open for prompting all into one (Feng et al., 2024).

###### Design Principles

The four core pillars at the center of CoPrompt's design (as described in Feng et al. (2024)) are:

1. **Share**: You can simply select whatever it is you need to share: code, data, some intermediary result. You choose to whom it is you want to share, and everything on their end gets updated with the additional context.
    
2. **Link**: It's common for variable names (among other things) to be changed and updated. Editors like IntelliJ offer the ability to refactor the code on your end directly across all dependencies; the CoPrompt editor does so on everyone's end.
    
3. **Refer**: Instead of needing to dig through code and construct your own context for a given prompt, you can simply refer to a relevant prompt that already pre-establishes the necessary context (assuming, of course, that it already is available).
    
4. **Request**: Whenever you get stuck on a dependency such as a sub-routine not being implemented which wasn't your responsibility to implement, you may find yourself blocked. This allows you to call for help from your collaborator, to move on to another subtask you can do without any dependency, and upon completion of said sub-routine, CoPrompt updates prompt and code to keep everything running smoothly, with as little busy waiting as possible. Interestingly, this is partially touched upon by Wu et al. (2022) in their work on AI Chains, wherein complex tasks are broken into manageable, chainable subtasks for more transparent human-AI interaction.

###### Results and Data

It also seems as though CoPrompt has promising results, at least according to their own study when comparing the omni-integrated IDE to simply using VSCode with Live Share and CoPilot (from here on referred to as the baseline configuration).

Given a handful of tasks in a user study, it was found that when using CoPrompt (Feng et al., 2024):

- Users finish on average three and a half minutes earlier compared to when using the baseline configuration.
- Users also seem to require fewer edits, both for code and for prompts, needing 59% and 33% fewer edits respectively, when compared to the baseline.
- Evaluating CoPrompt versus the baseline on the System Usability Scale (SUS) yielded a score of 90.6 as opposed to 68.9, indicating a 20 point advantage for CoPrompt.
- On a more "human" level, users reported that they felt significantly less frustration when using CoPrompt as opposed to when using the baseline config.

Overall, this all seems promising for (intelligently) integrated IDE-LLM-Messaging apps.

### My Own Two Cents

Of course, CoPrompt is still more prototype than finished product. In fact, I was quite interested in trying it out. Alas, as of December 2025, there was no way to actually test it for myself.

Still, it makes me think: all these results and core pillars seem to be promising, but would reception by the general (read: programming) public really be as positive as the study results suggest?

So far, when using IDEs with LLM integration or ML-model based code prediction/completion, I found myself rather disappointed if not outright frustrated with the result, at least when the complexity of the project superseded mere tutorial-level problems. In particular, VSCode with CoPilot seemed to suggest code that either had me running in circles or not progress at all. IntelliJ's IntelliSense was no less frustrating, as most of the suggestions for variable names at best didn't entirely fit my naming convention preferences, and at worst code snippets seemed to be based on pattern matching more than actually solving anything.

What does inspire some (cautious) confidence in CoPrompt is that it boasts features like a prompt wiki and native communication options with collaborators. I do feel suspicious about its context-aware cascading update features, but then again, many IDEs are capable of natively but manually refactoring code without any issues. The key takeaway is that CoPrompt is a new evolution of a tool, and tools typically require a certain skill floor to wield properly, especially if they're powerful.

###### About the Author

Hi, my name is Mark Sosman. I'm a computer science student with an immense passion for programming, math, and teaching.

### Further Reading and References

Feng, L., Yen, R., You, Y., Fan, M., Zhao, J., & Lu, Z. (2024). [CoPrompt: Supporting Prompt Sharing and Referring in Collaborative Natural Language Programming](https://dl.acm.org/doi/10.1145/3613904.3642212).

Liu, M. X., Sarkar, A., Negreanu, C., Zorn, B., Williams, J., Toronto, N., & Gordon, A. D. (2023). ["What It Wants Me To Say": Bridging the Abstraction Gap Between End-User Programmers and Code-Generating Large Language Models](https://dl.acm.org/doi/10.1145/3544548.3580817). 

Liu, Y., Kale, A., Althoff, T., & Heer, J. (2021). [Boba: Authoring and Visualizing Multiverse Analyses](https://ieeexplore.ieee.org/document/9216579).

Quaranta, L., Calefato, F., & Lanubile, F. (2022). [Eliciting Best Practices for Collaboration with Computational Notebooks](https://dl.acm.org/doi/10.1145/3512934). 

Wang, A. Y., Mittal, A., Brooks, C., & Oney, S. (2019). [How Data Scientists Use Computational Notebooks for Real-Time Collaboration](https://dl.acm.org/doi/10.1145/3359141).

Wu, T., Terry, M., & Cai, C. J. (2022). [AI Chains: Transparent and Controllable Human-AI Interaction by Chaining Large Language Model Prompts](https://dl.acm.org/doi/10.1145/3491102.3517582).
