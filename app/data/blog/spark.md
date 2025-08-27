In live programming classes, “How’s everyone doing?” is a hard question. Multi-file web tasks, nested subgoals, and event-driven behavior make it tough to tell who’s stuck, who’s almost there, and why. 
In our VL/HCC 2025 paper, we present SPARK, a monitoring dashboard that turns messy, non-linear work into checkpoints with tiny tests, then visualizes progress and output differences at classroom scale.

#### What is the core idea?
Instead of streaming raw code (overwhelming) or waiting for final submissions (too late), SPARK lets instructors define checkpointed steps (with optional nesting) and attach lightweight testing code.
A server runs these tests periodically, and the dashboard shows where each student stands per checkpoint, over time.
In parallel, instructors can inspect intermediate outputs (DOM properties, clustered screenshots) to understand how students implemented a step, not just whether it passed.

#### Design Highlight #1 — Progress Visualization

<figure style="margin:0 auto; width:fit-content; text-align:center; padding: 20px 0px;">
  <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
    <img src="/assets/blog/spark/spark1.gif" alt="left" style="max-width:360px; width:100%; border-radius:8px;">
    <img src="/assets/blog/spark/spark2.gif" alt="right" style="max-width:360px; width:100%; border-radius:8px;">
  </div>
  <figcaption style="margin-top:8px; font-size:0.9rem; color:#6b7280;">
    Each dot is a student at a given time; shaded bands reveal clusters/bottlenecks. Hover to trace one learner, brush to select a cohort, click to pin and bring their code boxes to the top.
  </figcaption>
</figure>


The Progress Visualization summarizes class state at a glance:

- **Checkpoint trajectories**: Each student is a dot that moves from 0 to 100% on a checkpoint. Shaded bands reveal where many students cluster, so bottlenecks pop out immediately. Hovering traces one learner’s path; brushing selects cohorts. Clicking locks the selection and brings their code boxes to the top.

- **Time slider**: Scrub through classroom time to see waves of progress (e.g., everyone nails layout, stalls on JS interactivity). This helps decide when to pause, re-explain, or regroup. 

**Why this matters**: Prior tools either cluster code states or show raw streams, but don’t map non-linear workflows to meaningful steps you control. Checkpoints visualize structured progress without constraining student paths.

#### Design Highlight #2 - Components Inspector
<figure style="margin:0 auto; width:fit-content; text-align:center; padding: 20px 0px;">
  <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
    <img src="/assets/blog/spark/spark3.png" alt="left" style="max-width:800px; width:100%; border-radius:8px;">
  </div>
  <figcaption style="margin-top:8px; font-size:0.9rem; color:#6b7280;">
The Components Inspector is structured according to checkpoints. Each task is linked to a corresponding inspector board that includes two key features: the Element Inspector and the Element Previewer. 
The inspector automatically simulates interactions before performing the inspection. 
Screenshots of identical elements are grouped together to facilitate easier analysis.  </figcaption>
</figure>


The second idea works like the browser developer support tools that lets you query and inspect a DOM element, but with multiple implementations:
- **Element Inspector:** Query any CSS/DOM property across the class (e.g., widths, attributes). The panel shows distributions and which students match a given predicate—then one click surfaces those students’ code boxes for help. 

- **Element Preview:** SPARK can simulate interactions (e.g., click “Add”) before taking screenshots. We then cluster similar outputs so you can skim common patterns and outliers at a glance. This is especially valuable for event-driven web UI where correctness is about behavior, not just structure.

#### How well does it work?
Using a keystroke-replay dataset from 22 learners on two web tasks, we ran a within-subjects study with 16 instructors comparing SPARK to a baseline code view. With SPARK, participants:

- Identified student challenges more accurately on quiz questions
- Reported fewer “unsure” judgments and higher confidence
- Preferred SPARK’s ability to inspect outputs and understand variations, not just pass/fail.

We made this dataset available if you are curious to try or build on top of our work.

<div style="background:#f3f4f6;border-radius:10px;padding:5px 30px; margin-top:20px;">
  <p><strong>About the team.</strong> This work was led by
    <a href="https://inonnno.github.io/Yinuo.me/" target="_blank" rel="noopener noreferrer">Yinuo Yang</a>
    while she was an undergraduate research assistant at the University of Michigan. She has just started her PhD at the University of Notre Dame, and will present the paper at VL/HCC 2025 in October in Raleigh, North Carolina.
  </p>
</div>
