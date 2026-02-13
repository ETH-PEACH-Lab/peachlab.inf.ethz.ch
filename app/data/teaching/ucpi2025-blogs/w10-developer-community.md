## Developer Community

The developer communitiy consist of multiple communities of practice, defined as “groups of people informally bound together by shared expertise and passion for a joint enterprise.” [2] Research has long examined how these communities can function effectively and support skill development. 

But in recent years, the widespread adoption of AI systems such as ChatGPT, Gemini, and Claude has introduced major changes that also affect these communities. Before analyzing what this could mean, we first get a feeling what communities of practice are by briefly examining two research studies conducted within such communities.

### #TidyTuseday

One such community of practice is #TidyTuesday, a weekly Twitter-based data science project for R users. A study from North Carolina State University and Microsoft Corporation analysed this community and showed that the project’s regular rhythm and shared datasets motivate participation and help participants practise data wrangling, visualisation, and communication skills. By publicly sharing code and results, participants learn from each other and adopt best practices. Interviews with 26 participants reveal that #TidyTuesday fosters a strong sense of belonging and supports both technical learning and community building. [1]

### Social Q&A

Q&A platforms such as Stack Overflow play a central role in helping programmers when documentation and search engines fall short. They also fall unter the definition of a communitie of practice. Asking a first question on such a plattform is often intimidating for newcomers. While communities have developed effective norms over time, these rules are rarely explicit, leading many technically valid novice questions to be poorly received due to formatting, missing context, or cultural mismatches. Because feedback typically arrives publicly and after posting, often via downvotes or negative comments, many newcomers disengage after their first attempt. 

To address this issue, a study by North Carolina State University in collaboration with Stack Exchange introduced a just-in-time mentorship intervention. Selected novice users were invited into a private “Help Room” before posting, where experienced mentors provided real-time guidance on improving question clarity, structure, formatting, and tone, without answering the question directly. 

The results showed that mentored questions achieved significantly higher scores, around a 50% increase on average, and were less likely to be poorly rated or closed. Novices also reported feeling more confident and more willing to participate again. While the approach clearly improves both question quality and newcomer experience without lowering standards, it relies heavily on the availability of mentors and rapid feedback, making it difficult to scale sustainably, especially for smaller platforms. [2]

### The Rise of AI

These are just two examples of communities of practice, and there are many more. But the release of ChatGPT by OpenAI sparked a new trend and ushered in a new era of AI. As already teased in the introduction, this development also reached communities of practice. This became especially visible in how large language models such as ChatGPT or Gemini have rapidly transformed how developers seek help and how they have transformed the community of practice around Stack Overflow. Instead of posting a question publicly, waiting for feedback, and risking downvotes or closure, users can now paste an error message or a code snippet directly into an LLM and receive an immediate, tailored response. As these models continue to improve, their answers are not only fast but increasingly context-aware. For many programmers, especially when dealing with standard errors or recurring patterns, the incentive to ask a public question on platforms like Stack Overflow has largely disappeared.

This shift is not merely anecdotal. In addition to a studie that has been conducted [3], a simple look at [Stack Overflow’s statistics](https://x.com/marcgravell/status/1922922817143660783?ref=blog.pragmaticengineer.com) is already revealing that user activity on Stack Overflow has declined so sharply that participation levels have fallen back to those observed around 2009, the year the platform was founded.

<img src="/assets/teaching/ucpi2025-blogs/images/stackoverflow-users.png" alt="name of the image" height="400">

*Question volume has dropped to levels comparable to those at Stack Overflow's launch in 2009. Source: Stack Overflow Data Explorer (SEDE) / [Marc Gravell on X](https://x.com/marcgravell/status/1922922817143660783?ref=blog.pragmaticengineer.com)*

At first glance, one might assume that the end of Stack Overflow is near. However, the situation is more complex. Even though AI-generated answers are becoming increasingly capable, studies show that they are still frequently incorrect, and users continue to prefer in some cases human-generated answers over those produced by AI. [4]

A very recent study presents an even more nuanced picture. A large-scale analysis of two years of Stack Overflow data shows that AI has sustainably shifted posts toward longer and more complex questions, as simpler and repetitive problems are increasingly handled by AI tools. While this development raises questions about the future role of collaborative Q&A platforms, the findings suggest that they will remain relevant by evolving toward more sophisticated topics and new forms of help-seeking. [5]

### Conclusion

Various communities of practice play an important role within the developer community, whether for acquiring programming skills or for finding answers to concrete problems. These communities are not untouched by AI and are undergoing fundamental changes. However, this does not mean they will disappear in the future. Some may fade away, others may become even more important, and many will simply evolve.

Stack Overflow, in particular, illustrates what this transformation can look like. Rather than disappearing, the community’s focus is shifting toward answering and discussing larger and more complex questions, while short and simple questions are increasingly handled by AI tools that can tailor responses directly to a user’s specific problem. Whether Q&A platforms will eventually disappear entirely as AI capabilities continue to grow remains an open question.

AI also offers new opportunities beyond question answering. In the mentoring experiment mentioned earlier, one of the main challenges was finding enough mentors to support such an onboarding process. AI could provide a potential solution here. Even if it cannot fully answer a question, it could help users formulate their questions in a way that complies with community guidelines.

Finally, the social aspect should not be overlooked. Despite the availability of AI, maintaining and developing programming skills remains a challenge, as AI-generated code still requires careful review. Existing communities of practice, such as #TidyTuesday, therefore continue to play an important role. One of their key strengths lies in the community aspect itself, which helps participants stay engaged and motivated to keep learning.

Overall, it will be interesting to see how this landscape continues to evolve in the future.

### Sources

[1] Shrestha, N., Barik, T., & Parnin, C. (2021). Remote, but connected: How #TidyTuesday provides an online community of practice for data scientists. Proceedings of the ACM on Human-Computer Interaction, 5(CSCW1), Article 52, 1–31. https://doi.org/10.1145/3449126

[2] Ford, D., Lustig, K., Banks, J., & Parnin, C. (2018). “We don’t do that here”: How collaborative editing with mentors improves engagement in social Q&A communities. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (Paper 608, pp. 1–12). Association for Computing Machinery. https://doi.org/10.1145/3173574.3174182

[3] Burtch, G., Lee, D., & Chen, Z. (2024). The consequences of generative AI for online knowledge communities. Scientific Reports, 14, Article 10413. https://doi.org/10.1038/s41598-024-61221-0

[4] Kabir, S., Udo-Imeh, D. N., Kou, B., & Zhang, T. (2024). Is Stack Overflow obsolete? An empirical study of the characteristics of ChatGPT answers to Stack Overflow questions. In Proceedings of the CHI Conference on Human Factors in Computing Systems (pp. 1–17). Association for Computing Machinery. https://doi.org/10.1145/3613904.3642596

[5] Helic, D., & Santos, T. (2025). Stack Overflow is not dead yet: Crowd answers still matter. arXiv. https://arxiv.org/abs/2509.05879

### About the Author

David Märki is a Computer Science MSc student at ETH Zurich who also occasionally turns to AI instead of Stack Overflow.