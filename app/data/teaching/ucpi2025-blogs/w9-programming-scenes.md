# W10 - Building Worlds with Prompts

Have you ever tried to describe an intricate fantasy landscape to someone and found yourself running out of words? Now imagine trying to communicate that vision to an AI: sketching a little here, adjusting a region there, refining your prompt with each iteration. That's the promise of **WorldSmith**, a tool that sits at the intersection of creative coding, generative AI, and human-computer interaction [1].

---

## Why World Building Is Hard

When storytellers, game designers, or even filmmakers sit down to build fictional worlds, they face a peculiar challenge. Creating rich worlds demands both artistic vision and technical execution. However, for independent creators like students and indie game developers, these barriers have been prohibitively high.

The digital landscape makes this even harder: a static image doesn't capture hierarchy and relationships. A single text-to-image prompt might generate something visually striking, but rarely captures the nuance of what you actually want. You want to say "this city is medieval but with advanced technology", or "these characters should feel related despite being from different cultures". Text alone struggles with these layered concepts.

Most generative AI tools hit a wall here. They give you a "click once" experience: write a prompt, get an image, done. If you don't like it, you start over. No history, no iteration, no way to build on your ideas incrementally. This disconnect between creative intention and AI output has been a persistent frustration for designers using these models.

---

## Introducing WorldSmith: Multi-Modal Iterative Prompting

WorldSmith, developed by researchers at Autodesk (Dang, Brudy, Fitzmaurice, and Anderson, 2023), challenges this paradigm. The core insight is simple but powerful: the best way to co-create with generative AI is to give the system multiple languages for expression. Not just text, but also sketches, regions, and visual hierarchy.

The tool works by decomposing your world into a grid of tiles (typically four), each representing a different region of your fictional world. Within each tile, you can engage in three kinds of interaction:

1. **Text-to-Image Generation**: Describe what you want, as with any AI tool. But the difference is that your prompt builds on previous iterations.

2. **Region-Based Filling**: Outline specific areas on the canvas and describe what should go there. Want a castle on the left side and a forest on the right? Draw rough regions and let the AI respect those boundaries.

3. **Sketching**: Provide rough sketches with annotations. This is especially powerful for creatives who think visually.

But the real innovation lies in the ytree-based history system. Every edit, every regeneration is recorded as a checkpoint. You can revert to earlier versions or branch off into new directions, without losing your work. This fundamentally changes how iteration feels: instead of a linear "accept or reject" loop, it becomes a tree of creative possibilities.

---

## What the User Study Revealed

The researchers tested WorldSmith with 13 novice world builders in a study.

Most participants, despite having no prior experience with the tool, could compose complex and multi-layered worlds. Some combined text descriptions with hand sketches, others created hierarchical compositions (establishing overall mood first, then refining regions). Most of them took advantage of the branching history to explore variations. Crucially, users found the "non-textual interactions" particularly expressive. Sketches and region-based prompts conveyed nuance that text alone could not.

This points to a broader truth often missed in the rush to deploy generative AI: generative models aren't best used as replacements for human creativity; they're best used as collaborators. The tool that gives you the richest interaction modalities will yield richer results. A tool that constrains you to typing is a tool that constrains your ability to express what's actually in your head.

---

## The Broader Ecosystem: Beyond World Building

Stepping back, it's worth noting what WorldSmith sits within. Generative AI has become present in creative tools. Image generation (DALL-E, Midjourney, Stable Diffusion) has spawned a growing ecosystem of tools designed to help collaboration with these models more effectively. A recent study found that even modest adjustments to prompts substantially improved the similarity of regenerated images to targets, validated through both human perception and quantitative metrics [2].

Other tools exist for example to assist fashion designers in generating design variations, or offer interfaces for exploratory creative work [3]. The common pattern across all of them: expressivity and control matter more than convenience.

---

## Looking Forward: What's Next for Creative Coding

Here's where things get speculative but worth thinking about:

**Collaborative Worldbuilding at Scale**  
Imagine a future where multiple storytellers use WorldSmith simultaneously, each working on different regions of a shared world. The tool could merge their edits and manage conflicts. This would make the creation of large-scale fictional universes more accessible, something currently reserved for well-funded studios with teams of concept artists.

**Embodied Creative Interfaces**  
Today, we sketch on a 2D canvas. But AR/VR could allow creators to stand inside their worlds as they build them, making spatial relationships and scale intuitive in ways a flat screen cannot. The same iterative-prompting paradigm could transfer to 3D environments, where you're walking through regions and adjusting them in real time.

**Integration with Narrative and Logic**  
Characters have relationships and histories. Future tools could link visual generation to narrative databases, ensuring that the world created is consistent with the story being told. Imagine a system where changing a character's background automatically adjusts the visual appearance of the world they inhabit, or where inconsistencies between narrative and visual elements are flagged automatically.

---

## Closing Thoughts

WorldSmith won't replace concept artists, and it shouldn't. By offering multiple modalities (text, sketching, regional composition) and by making iteration reversible, it treats generative AI not as a black box but as a collaborative partner.

For computer science students and creative technologists, the lesson is clear: **the future of creative tools isn't about "more AI," it's about better interaction design.** The challenge isn't building a better image generator (that problem is largely solved), it's designing interfaces that let humans and AI systems think together.

If you've ever struggled to turn a vague idea into a concrete visual, WorldSmith could help. It shows that the future of programming isn't less human, it's more human.

---

## References

\\[1] Dang, H., Brudy, F., Fitzmaurice, G., & Anderson, F. (2023). Worldsmith: Iterative and expressive prompting for world building with a generative AI. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1-17). [https://dl.acm.org/doi/10.1145/3586183.3606772](https://dl.acm.org/doi/10.1145/3586183.3606772)

\\[2] Trinh, K., et al. (2025). A picture is worth a thousand prompts? Efficacy of iterative prompt refinement for image regeneration. *Proceedings of the IJCAI 2025*. [https://arxiv.org/abs/2504.20340](https://arxiv.org/abs/2¨504.20340)

\\[3] ACM UIST. (2023). Spellburst: A node-based interface for exploratory creative coding. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology*. [https://dl.acm.org/doi/10.1145/3586183.3606719](https://dl.acm.org/doi/10.1145/3586183.3606719)

---

### About the Author

My name is Omar and I'm a computer science student specializing in database technologies and systems security. I love what I do and I hope you do too!
