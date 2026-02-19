## Task Decomposition: ChainForge

### Introduction

In the last few years, large language models (LLM) have moved from research labs to everyday workflows with incredible speed. ChatGPT alone reaches more than 700 million weekly users [1]. LLMs help users draft emails, generate code, analyze data and even assist with medical diagnoses. However, this rapid development has raised serious questions regarding the correctness and reliability of these tools.

For example, asking an LLM the same question twice might lead to two very different answers. For coding or drafting emails, this might not be an issue, but for medical and legal analysis, this unpredictability can lead to serious consequences like misdiagnosis or false recommendations.

To address this problem, one would need to evaluate LLMs. However, evaluating large language models requires knowledge of APIs, machine learning, and programming. However, most LLM users do not possess these technical skills [2]. This challenge highlight the need for powerful and accessible tools that help users gain a more comprehensive understanding of LLM behaviour, beyond a single prompt or chat. This is where ChainForge comes in.

### ChainForge

Released in 2023, ChainForge is an open-source visual toolkit designed to make prompt evaluation accessible for everyone. Instead of writing code to test prompts, users build visual pipelines by connecting nodes that represent different input types, multiple models and processor nodes. This allows users to systematically evaluate their hypotheses based on individual criteria [2]. 
Figure 1 shows an example of a pipeline that evaluates LLM performance on basic math problems across different models. 

<img src="w5_chain.png" alt="Ground truth evaluation for math problems" height="300">

<p align="center"><em>Figure 1: Ground truth evaluation for math problems</em></p>

ChainForge's real strength lies in its prompt template system. Instead of testing just one static prompt users can generate templates with variables. A computer science professor might create the following template: Generate a coding example about {topic} in {programming language}. The professor can then specify the topics (e.g. algorithm, data structure) and the languages (Python, Java etc.). ChainForge will then automatically generate all possible combinations and test them across the chosen model. Furthermore, it is also possible to send a prompt multiple times to the same model, in order to check the consistency of answers.

ChainForge also allows more complex pipelines. Users can create data processing pipelines. For example, users could create a pipeline that takes a datasheet, transforms it using a processing node and finally use a LLM to create an informative summary that analyses the results of the evaluation [2].

If you want to explore ChainForge yourself, you can try it directly in your browser at chainforge.ai/play.

### Related tools

ChainForge isn't the only tool tackling prompt engineering challenges. Prompt-Aid also contains a visual interface but focuses on iteratively improving a single prompt. When you enter a prompt in Prompt-Aid, it uses keyword extraction and paraphrasing to suggest improvement. For example, it will suggest using a synonym because it leads to clearer and more reliable results. Consequently, it helps in optimizing a specific use case but fails to compare models or consistency across multiple tests [3]. However, Prompt-Aid and ChainForge can work together by first using Prompt-Aid to generate a great prompt and then use ChainForge to systematically test it.

Another tool proposes two distinct decomposition methods, Stepwise and Phasewise. The Stepwise mode breaks tasks into three editable phases: defining input and output assumptions, creating an execution plan and finally writing the code. Meanwhile, Phasewise, splits problems into subgoals with paired assumptions and code blocks. These assumptions and code blocks are then individually editable. In contrast to ChainForge, these methods work well with structured workflows [4].

Other tools address specific evaluation aspects. ChatEval uses LLMs to evaluate other LLMs' output. Essentially models are grading the output of other models. EvalLM enables interactive prompt testing with user-defined criteria allowing users to compare generated outputs.

### Use Cases

While ChainForge was designed for systematic prompt testing [2], users have discovered creative applications that extend beyond its original purpose. One interesting example is StarCharm, an LLM-powered mod creator for the farming game Stardew Valley. Traditionally modders write character dialogue, schedules and behaviours manually, which is a time-consuming process. StarCharm makes this process more accessible by letting players describe their desired character in natural language and then the system automatically creates a complete playable NPC mod [5].

<img src="w5_chain2.png" alt="System architecture of the StarCharM tool" height="300">

<p align="center"><em>Figure 2: System architecture of the StarCharM tool</em></p>

StarCharm uses ChainForge's template system as its generation engine. The template contains variables for character traits, relationship dynamics and daily schedules. Players can describe their characters, which StarCharm uses to fill their templates. These are then sent to an LLM, afterwards the outputs are transformed into configuration files compatible with Stardew Valley's Content Patcher modding tool [5]. In other words, the same template could be used to generate a mysterious wizard or a funny merchant.

### Future

ChainForge and similar tools highlight the need for end-user LLMOps solutions. Tools that help users evaluate and customize AI systems without coding or machine learning knowledge. In the future, prompt engineering may move away from being a traditional programming task towards one where users express their intentions using plain language. This approach aligns with "vibe coding", where users express what they want without needing to know how to code.

Another possibility is that prompt engineering might disappear as LLMs get better. They might optimize themselves autonomously. Similar to ChatEval, future LLMs could first evaluate their own prompts and then improve them to guarantee optimal responses.

Overall, we will likely see a mixture of both approaches. Prompt engineering will become easier while LLM will become better at optimizing prompts. However, I think for some high-stakes fields such as healthcare, human evaluation will remain the standard. This is in part because of the serious consequences and because people demand transparency and control before trusting AI with critical health decisions.

### References

[1] OpenAI. (2025, September 15). How people are using ChatGPT. <https://openai.com/de-DE/index/how-people-are-using-chatgpt/>

[2] Arawjo, I., Swoopes, C., Vaithilingam, P., Wattenberg, M., & Glassman, E. L. (2024). ChainForge: A visual toolkit for prompt engineering and LLM hypothesis testing. Proceedings of the CHI Conference on Human Factors in Computing Systems, 1-18

[3] Mishra, A., Danzy, B., Soni, U., Arunkumar, A., Huang, J., Kwon, B. C., & Bryan, C. (2025). PromptAid: Visual prompt exploration, perturbation, testing and iteration for large language models. IEEE Transactions on Visualization and Computer Graphics, 31(10), 6946-6962.

[4] Kazemitabaar, M., Williams, J., Drosos, I., Grossman, T., Henley, A. Z., Negreanu, C., & Sarkar, A. (2024). Improving steering and verification in AI-assisted data analysis with interactive task decomposition. Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology, 1-19.

[5] Zand Miralvand, H., Ronagh Nikghalb, M., Darandeh, M., Khan, A., Arawjo, I., & Cheng, J. (2025).
Democratizing game modding with GenAI: A case study of StarCharM, a Stardew Valley character maker. Proceedings of the ACM on Human-Computer Interaction, 9(6), Article GAMES017

