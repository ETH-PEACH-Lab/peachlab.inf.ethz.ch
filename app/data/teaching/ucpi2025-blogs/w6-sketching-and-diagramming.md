## Sketching and Diagramming: Chisel

### Diagramming data structures, now made simple, structured and dynamic

Imagine you are teaching an intro level algorithm course to a class of first year undergraduate students. On iPad, you draw by hand a diagram to show a core step in the algorithm. Then you switch to computer to run a sample implementation of the algorithm. It finished in 0.01s with results popping up on the screen immediately. This is a typical way to teach algorithm, but students may wonder why not combining two procedures into one. As beginners, students want to see how inputs "evolve" into answer throughout the algorithm, namely, a visualization of datas during execution of program in a way consistent with hand-draw diagrams.

### Earlier Attempts

When I studied intro level algorithms long time ago, compiler built-in debugger was taught to read out variables inside program executions. First set up break points, then call debugger, finally pick up the values one by one. Needless to say, such process is complicated and confusing, a nightmare for beginners. Researchers realized this issue, and "Python Tutor" [1] was developed to visualize simple data structures such as dictionary and linked list. It became an influential work to be adopted in CS1 courses at a few universities. However, its limitation to simple data structures made it hard to proceed to more advanced algorithm courses or competitive programming ones. In these scenarios, data structures are no longer built-in, but heavily user customized in different ways. 

Of course one can hard code visualization for each task using popular visualization frameworks, e.g. D3.js [5], but this require tedious work writing visualization code multiple times in length of the algorithm itself. Is such verbosity really required to describe the visualization we need? Fong et al [2] investigated a few visualization of linked lists from different sources, and showed the existence of different levels of abstractions. In other word, all we need is to capture the commonalities within these levels.

### Central question: 

How to exploit the commonality among different tasks so that a simple unified framework can be designed to visualize most data structures?


### Solution: Abstraction Moves (Chisel)

Introducing Chisel [3], a diagramming language based on Javascript. 

The authors start by sampling diagrams from real world sources. Then, they decompose each visualization procedure that bring code to its diagram, into basic building blocks. Finally, they identify 4 classes of Abstraction moves, each includes a dozen of functions, that are able to capture most of visualization task they have sampled. These 4 classes are explained in detail below.

- Selection. 
Except for initialization steps (display function), the visualization process starts with selection. This class of abstraction moves fixes a subset of data to be operated on in later steps. Chisel provide basic single/range/invert selections on arrays. In addition, special selections on matrix/graph data structures are also provided. Note selections only act on data. Nothing except selector highlight will be changed on diagram until next steps are applied.

- Revisualization.
By default, chisel visualize everything into arrays. Revisualization is a key step interpreting and converting arrays into complex structures such as graphs or matrices. 

- Simplification.
Since chisel visualize real program runtime possibly on large datasets (instead of toy examples on textbooks), the size of diagram may explode. To prevent this while keeping key information correctly displayed, chisel provide hide/clump/abbreviate/fragment to keep/discard middle informations.

- Annotation.
This is the very last step of visualization. After selection, revisualization, and simplification, the structure of diagram has been fixed. User can label an object, draw a line between two, circle a set of object, etc.

<img src="/assets/teaching/ucpi2025-blogs/chisel.png" alt="typical chisel pipeline (figure 1 in [3])" height="1000">

Thanks to abstraction moves, visualization procedures now does not need to entangle with algorithm. An essential design choice of chisel is MVC (model view controller) architecture, where algorithm is model, chisel code is controller, and chisel background is view. This resulted in complete separation of logic and visualization, enabling maximum flexibility in modifying either algorithm or diagram.

### Bijection between data and representations

The chisel pipeline defined by abstraction moves, establishes a one-to-one relationship between data and its representations, and we can expect more out of it. 

- Can this bijection map change of data to change of diagram? Currently chisel renders static diagrams. In class discussion, we joked it as an alternative to tikz diagram drawing package. If chisel could exploit change of data and render continuous animation of diagram from one to another, then this would be a different story - a truly evolving diagram that every beginner dreamed of.

- Can there be backward mappings? i.e. visually edit on the diagram, and modify variable values inside data. This lead to an interactive algorithm playground.

- More generally, consider the diagram as agent and data as LLM output. Can this data "drive" diagram-based agent interfaces? This possibility has been briefly mentioned in [4].

### LLM: A Replace? or an Enhance?

Given the capabilities of LLMs, one can directly prompt LLM with code and instructions, requesting visualizations at specific steps. (Credit to someone who raised this concern during class time discussions.) Will LLM replace chisel? Probably only in basic tasks. In complex ones, while LLM provide images or ASCII arts as mean of visualization at its own probabilistic discretion, chisel is theoretically a "compiler", being robust once its code is correctly written. 

In addition, being a programming language allow LLM to built on it. One can ask LLM to visualize by writing chisel code, just prompt with additional guide of chisel syntax. Such "vibe coding" practice allows one to obtain the efficiency of LLM visualization, as well as the accuracy of chisel visualization.


### Conclusion

Chisel successfully build a framework of Abstraction moves. It made visualization of simple, structured and dynamic. The work is based on data structure settings, but [4] recognize contribution of chisel as "manipulable intermediate representations" in a more general context. Not only itself can be used in companion with LLM to achieve better diagram drawing, but also its philosophy of data-representation bijection opens many possibilities for better visualization or LLM driven applications.

### References

[1] Philip J. Guo. 2013. Online Python Tutor: Embeddable Web-based Program Visualization for Cs Education. In Technical Symposium on Computer Science Education (SIGCSE).

[2] Morgan M Fong, Seth Poulsen, and Geoffrey L Herman. 2021. What’s in a Linked List? A Phenomenographic Study of Data Structure Diagrams. In ASEE Annual Conference and Exposition, Conference Proceedings.

[3] Devamardeep Hayatpur, Brian Hempel, Richard Lin, and Haijun Xia. 2025. The Shapes of Abstraction in Data Structure Diagrams. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25). Association for Computing Machinery, New York, NY, USA, Article 883, 1–12.

[4] Runhua Zhang, Yang Ouyang, Leixian Shen, Yuying Tang, Xiaojuan Ma, Huamin Qu, and Xian Xu. 2025. PaperBridge: Crafting Research Narratives through Human-AI Co-Exploration. In Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST '25). Association for Computing Machinery, New York, NY, USA, Article 126, 1–21. 

[5] Mike Bostock. 2012. D3.js - Data-Driven Documents. http://d3js.org/

### About the Author

Yuchen Zhong is a master student at ETH Zurich. He majors theoretical computer science. Outside school, he enjoys hackathon, innovative products, and human-computer interaction philosophies behind.
