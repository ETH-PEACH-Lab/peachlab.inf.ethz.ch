**Revibing** is the practice of reimplementing an interactive system described in a research paper using AI-assisted and agentic coding tools. The idea is introduced in [Revibing Code from Papers: Reimplementing HCI Artifacts](https://arxiv.org/abs/2608.00450) (Adar et al., 2026) and is the subject of the [Revibing HCI](https://revibe-hci.github.io/) workshop at UIST 2026.

#### Why revibe?

Most technical HCI research is published as a paper and a video figure. The software itself is usually gone: "software artifacts for most technical HCI projects are unavailable, which makes it hard to extend prior work, use them as strong baselines, or replicate results."

This is a particular problem for a seminar on programming interfaces, where the contribution of a paper is often an *interaction* rather than a result. A screenshot of a structured editor or a sketch-based code tool tells you what the interface looks like, but not what it feels like to use, where it breaks down, or which details the authors had to get right for it to work at all.

Agentic coding tools have made it realistic to rebuild these systems in a few hours. Adar et al. introduce **revibeability** as a measure of how successfully a system can be reimplemented from its paper alone; across ten recent UIST systems rebuilt with tools such as Claude, Cursor, and Gemini, the reported mean revibeability was 94.1%, in many cases producing code good enough to serve as a strong baseline.

#### What you will do

For your assigned paper, rebuild the interactive prototype before your presentation and demonstrate it live in class. Your revibe does not need to be a complete or production-quality system. Aim to reproduce:

* the core interactions the paper claims as its contribution;
* enough of the interface that the audience can see how the system behaves from a user's perspective;
* at least one example or scenario from the paper, so we can compare your version against what the authors reported.

The goal is to **reproduce the original interaction, not to redesign or improve it**. If you have ideas for extensions, save them for the discussion.

#### What to pay attention to

Revibing is useful here because of what goes wrong, not only what works. While rebuilding, keep notes on:

* **Underspecified details.** Which design decisions did you have to make yourself because the paper did not say? These gaps are often where the real design work lives.
* **What resisted reimplementation.** Reported failure points include drag-and-drop interactions, dependencies on models or services that no longer exist, and agent-introduced scope creep.
* **What the paper made look easy.** If something took you far longer than the paper suggests, that is worth reporting.
* **Where your version diverges.** Be explicit about what you left out and why.

Bring these observations to the discussion. Your experience rebuilding the system is evidence about the design that the paper alone cannot give us.

#### Further reading

- [Revibing Code from Papers: Reimplementing HCI Artifacts](https://arxiv.org/abs/2608.00450): Eytan Adar, Yoonjoo Lee, Nina Lei, Q. Vera Liao, and Weirui Peng. 2026. arXiv:2608.00450.
- [Revibing HCI](https://revibe-hci.github.io/): workshop at UIST 2026
