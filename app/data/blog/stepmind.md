

<div style="margin-top:20px;"></div>

#### AI as a Black Box in Data Visualization
As AI-powered tools increasingly generate data visualizations from natural language (NL2Vis), they lower the barrier to data exploration. With a simple prompt like <em>“Show me sales trends by year”</em>, users can quickly obtain charts that once required SQL, scripting, or visualization expertise. However, most AI-generated visualizations are black boxes: users see only the final chart—without insight into how data was transformed, whether the interpretation is correct, or how to fix mistakes when the output is wrong. This limits trust, learning, and meaningful control.
We observe three gaps in current AI-driven data analysis workflows through the lens of the Gulf of Envisioning:
<br/>
<u>Capability Gap</u>: NL2Vis tools rarely provide modifiable, stepwise explanations, limiting users’ ability to inspect or adjust the AI’s reasoning.<br/>
<u>Instruction Gap</u>: Stepwise systems often rely on text templates that presume technical literacy, misaligned with many users’ mental models.<br/>
<u>Intentionality Gap</u>: Programming-centric tools restrict direct edits to the underlying workflow, forcing iterative prompting instead of transparent refinement.<br/>

#### StepMIND Framework and Design Principles
StepMIND addresses these gaps by combining four ideas: multimodal explanations (visual, textual, instructional), real-time bidirectional editing, a familiar spreadsheet/code interface, and stepwise refinement. Together, these enable a flexible interaction cycle (<strong>T↔D↔C↔I↔T</strong>) that supports inspection, correction, and learning across levels of abstraction.

##### Stepwise Refinement
<div style="float:right; width:25%; max-width:220px; margin:4px 0 8px 24px; text-align:center;">
  <img src="/assets/blog/stepmind/stepwise.png" alt="Stepwise Execution Interface" style="width:100%; height:auto; border-radius:8px;" />
</div>
This stepwise approach enables users to verify, modify, and understand visualizations at a granular level by breaking the process into discrete stages such as data selection, filtering, aggregation, and rendering. In our setup, LLMs generate an initial instruction sequence from natural language and data (<strong>T→I</strong>). To improve control and transparency, StepMIND decomposes this instruction into ordered sub-steps (<strong>I1, I2, …, In</strong>) and executes them sequentially, producing intermediate data content states (<strong>C1, C2, …, Cn</strong>). Users can refine the visual output by inspecting and editing a specific step (e.g., adjusting a filter or a threshold slider), and the system updates the corresponding intermediate and final states accordingly.
<div style="clear:both;"></div>


<h5 style="clear:both; margin:12px 0;">Multimodal Grounding</h5>
<div style="float:right; width:25%; max-width:220px; margin:4px 0 8px 24px; text-align:center;">
  <img src="/assets/blog/stepmind/multimodel.png" alt="Multimodal Synchronization" style="width:100%; height:auto; border-radius:8px;" />
</div>
To support users of varying expertise, StepMIND provides multimodal explanations at each step. From every instruction <strong>In</strong>, the system prompts the LLM to generate a self-explanation in natural language <strong>Tn</strong> (<strong>In→Tn</strong>). The textual explanation at each step, combined with the current data content, yields direct manipulation elements <strong>Dn</strong> (e.g., sliders, selectors), enabling spreadsheet-style interactions that act on the underlying content (<strong>Dn→Cn</strong>). Novice users benefit from these grounded, interactive explanations without needing technical knowledge, while expert users can read and edit structured notations (e.g., SQL-/VQL-like clauses) alongside visual outputs to enable fine-grained control, verification, and debugging of complex operations.
<div style="clear:both;"></div>

<h5 style="clear:both; margin:12px 0;">Bidirectional Editing</h5>
<div style="float:right; width:15%; max-width:120px; margin:4px 0 8px 24px; text-align:center;">
  <img src="/assets/blog/stepmind/bid.png" alt="Bidirectional Architecture" style="width:100%; height:auto; border-radius:8px;" />
</div>

Unlike traditional unidirectional refinement, StepMIND supports seamless bidirectional editing between textual descriptions and visual interfaces. Users move between instruction and explanation (<strong>I↔T</strong>), explanation and direct manipulation (<strong>T↔D</strong>), and ultimately across all components (<strong>I↔T↔D↔C</strong>). For example, clicking on a chart element can trigger related query changes, and updating a textual clause immediately reflects in the visualization. This tight binding creates an efficient, intuitive loop for data exploration and correction.
<div style="clear:both;"></div>

##### Familiar Interaction Models
<div style="float:right; width:15%; max-width:120px; margin:4px 0 8px 24px; text-align:center;">
  <img src="/assets/blog/stepmind/sheet.png" alt="Spreadsheet View" style="width:100%; height:auto; border-radius:8px;" />
</div>
StepMIND draws from familiar paradigms like spreadsheet-based manipulation and block-structured pipelines to lower the barrier for non-experts. Users who prefer tabular interfaces can interact directly with data (<strong>T↔D↔C</strong>), while those with programming backgrounds can refine workflows via code and instruction (<strong>T↔I↔C</strong>). By combining text, GUI, and structured instructions, StepMIND forms a closed refinement loop (<strong>T↔D↔C↔I↔T</strong>) that supports a broad spectrum of users in exploring and interpreting data effectively.
<div style="clear:both;"></div>


#### STAGE: StepMIND in Action

To demonstrate the framework, we built STAGE, an AI-assisted data visualization system based on StepMIND. In STAGE, users can enter a natural language question, view a step-by-step explanation of how the visualization was generated, interactively adjust filters, aggregations, and chart types, and switch seamlessly between explanations, visual controls, and query code. For example, if a user asks for “popular product categories” but later realizes the chart should show total sales instead of counts, they can modify the SELECT/GROUP BY step—without rewriting the entire prompt.

<div style="text-align:center; border:1px solid #e5e7eb; padding:12px; border-radius:8px; width:fit-content; margin:20px auto;">
   <a href="https://stage.peachlab-cntr1.inf.ethz.ch/" style="color:#0073e6; text-decoration:underline;" target="_blank" rel="noopener noreferrer"><strong>Try STAGE</strong></a>
</div>
<figure style="margin:0 auto; width:fit-content; text-align:center; padding: 12px 0;">
  <div style="display:flex; justify-content:center;">
    <img src="/assets/blog/stepmind/screenshot4.png" alt="STAGE interface overview" style="max-width:900px; width:100%; border-radius:10px; border:1px solid #e5e7eb; box-shadow:0 6px 18px rgba(0,0,0,0.08);" />
  </div>
  <figcaption style="margin-top:8px; font-size:0.9rem; color:#6b7280;">STAGE overview: switch between Explanations, Visual Controls, and VQL to inspect and refine results step by step.</figcaption>
</figure>


#### Generalizability Beyond STAGE
While STAGE serves as a concrete instantiation of StepMIND, the framework itself is designed to be domain-agnostic and extendable across AI-driven tasks. Its modular architecture supports integration into interactive query systems, explainable AI tooling, and domain-specific copilots (e.g., slide creation, creative editing). By ensuring adaptability across diverse contexts, StepMIND promotes interpretable, interactive, and user-centric AI workflows beyond data visualization. We also look forward to seeing more works and practices built on the StepMIND framework.




<div style="background:#f3f4f6;border-radius:10px;padding:8px 30px; margin-top:20px;">
  <p style="margin:6px 0;">
    📄 <a href="https://doi.org/10.1145/3742413.3789070" style="color:#0073e6; text-decoration:underline;" target="_blank" rel="noopener noreferrer">Paper (DOI)</a>
    ｜ 📹 <a href="#" style="color:#0073e6; text-decoration:underline; pointer-events:none; opacity:0.7;" aria-disabled="true">Video (coming soon)</a>
  </p>
  <p style="margin:6px 0;">
    <strong>Citation</strong>: Wu, Y., Wan, Y., El‑Assady, M., &amp; Wang, A. Y. (2026). StepMIND: A Visual Framework for Stepwise, Multimodal, and Bidirectional Explanations of AI‑Generated Data Analysis Pipeline. In Proceedings of the 31th International Conference on Intelligent User Interfaces (IUI 2026).
  </p>
</div>
