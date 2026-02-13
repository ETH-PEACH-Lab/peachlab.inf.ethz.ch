## Code Clustering

Programming is becoming explosively more popular, with new tools and rapid advances in AI enabling more people than ever to build software. As a result, introductory programming courses have spread beyond computer science programs into many other disciplines and even earlier levels of education. As demand grows and classes become larger, it has become increasingly more difficult for instructors to have a good overview of students' progress, both individually and as a whole. Traditional teaching strategies, such as live coding demonstrations or in-class problem-solving, offer only limited insight. Some students actively participate and receive feedback, while others remain unnoticed, despite actually facing difficulties. 

Not all mistakes are equal as well. Some students might struggle with programming concepts as a whole, while others might have small and easy to fix syntax mistakes they were just not aware of. This is were Code Clustering comes into play, where different student solutions get clustered into similar groups, enabling instructors to better understand common errors, learning progress, and conceptual gaps across their classes.

**What is Code Clustering?**

Code Clustering is a technique used to group pieces of code that are similar or related based on their stucture, syntax, or semantic features. Previous work in the field of code clustering include [1], where code submissions are clustered with an Abstract Syntax Tree (AST) edit distance to evaluate similarity in syntax and functionality. In [2], Piech et al. proposed a method for representing student programs as neural network embeddings and used clustering on the resulting embedding space to enable efficient and scalable feedback generation. Overcode [3] clusters similar, correct code submissions that perform the same computation. Through a visualization, teachers are able understand variations between solutions much easier. Extending on this approach, Head et al. [4] introduce clustering incorrect code solutions based on transformations, rather than limiting the clustering to correct solutions only. 

While the above mentioned tools help with grouping similar solutions together, most of them are not suitable for real-time teaching and have to be used after students have finished working on their assignments, with some only specifically working on executable code. They also only group code submissions togother, and do not give any meaning to their absolute position in the 2D space of the visualization.

Beyond purely code-based approaches, CPVis [5] integrates multimodal learning analytics, such as speech, screen activity, code and more, to analyze collaborative programming among students, providing additional insights into student behaviour and learning patterns. But this too, is primarily intended for post-hoc analysis, rather than real-time teaching.

**VizProg:**

<img src="/assets/teaching/ucpi2025-blogs/VizProg.jpg" alt="User Interface of VizProg[3]" height="300">

There are several challenges when thinking about a system which lets instructors understand and observe students' progress at scale. One difficulty is understanding student's progress at different granularity, such as figuring out if a whole class is struggling with a certain concept, or even noticing that an individual is having difficulties with another topic. Tied to this, is the challenge to validate the progress of students at scale. Often in practice, instructors are often only able to tell whether students managed to solve a specific problem or not. They do not notice when students found a solution, but actually struggled a lot to reach it. while it is good that they did find it in the end, their way of problem solving might still have room for improvement, or they may have only found the solution through countless trial and error without fully understanding why it worked in the end. Last but not least, it is important that instructors are able to give scalable but tailored feedback to students. 

This is where, VizProg [6] comes into play. It is a tool for instructors to use which gives them an overview of all students' codes and where their past and current progress is in relation to a set of possible solutions to a programming exercise. Instructors can see students' progress develop in real-time as it monitors how their code is changing. The solution centered view shows a list of anonymized students who either have the selected solution or might be approaching it. The progress detailed view, lets instructors search for specific students or see the codes of a box selection of students from the 2D map, ordered by most frequent errors. In this view, instructors are also able to send feedback to either individuals or a group of students.

**How VizProg works**

For each programming excercise, VizProg builds a solution space using a set of possible correct solutions supplied by the instructor. It uses OverCode [3] for this clustering. Then, at each keystroke-level update, they perform text-based normalization (e.g. removing extra spaces and comments, renaming variables, etc.) instead of relying on Abstract Syntax Trees which only work on executable code. This normalized text then goes through a forward pass through CodeBERT [7], a pre-trained model which converts code into a vector. This vector is then used to compute the Vector Similarity between students' code and the solution set to determine which solutions the students are moving towards. Calculating the edit distance between two versions, they evaluate how close students are to a correct solution. 



**Outlook**

VizProg shows promising results in helping instructors understand the progress of their students better. Compared to an adapted OverCode in a user study, instructors were able to find issues earlier and give more specific feedback to students. They experienced less context switching and also had a better strategy for who and what feedback to give in VizProg. However, there is still room for improvement in the tool, as the viusalization which updates at a keystroke-level in real-time can be overwhelming to look at. VizProg also only focuses on the code itself, disregarding comments which may include commented out code or pseudo code. While they may seem insignificant, these are key details which show a student's understanding of the problem. Additionally, it may not always be relevant to know which solution students are approaching, thus a different view with all the students on one axis, and their distance to any solution on the other, could prove to be of use.

While VizProg was mainly intended for real-time teaching purposes, it might also be useful for checking for plagiarism, especially in larger programming problems where the chance of two students having the exact same solution is significantly lower. Another interesing potential use case, would be to teach students about different program behaviours with slight changes in code, using VizProg as a direct teaching tool instead. Instead of a solution space where the outputs are the same, one could make each "correct" solution slightly different and demonstrate in class how slight changes makes the output jump from one value to the next. If adapted to recognize patterns across a codebase and an added ability to jump to said patterns in the code, one could also use the tool to detect coding patterns in a companies' codebase, spotting repetitive mistakes or even bottlenecks.

Overall, VizProg demonstrates how combining code clustering, real-time visualization, and instructor-guided analysis can not only enhance teaching and feedback in programming courses but also opens the door to broader applications in learning analytics, code comprehension, and software quality monitoring.


### References

[1]: Jonathan Huang, Chris Piech, Andy Nguyen, and Leonidas Guibas. 2013. Syntactic and functional variability of a million code submissions in a machine learning mooc. In AIED 2013 Workshops Proceedings Volume, Vol. 25. Citeseer.

[2]: Chris Piech, Jonathan Huang, Andy Nguyen, Mike Phulsuksombati, Mehran Sahami, and Leonidas Guibas. 2015. Learning program embeddings to propagate feedback on student code. In International conference on machine Learning. PMLR, 1093–1102

[3]: Elena L Glassman, Jeremy Scott, Rishabh Singh, Philip J Guo, and Robert C Miller. 2015. OverCode: Visualizing variation in student solutions to programming problems at scale. ACM Transactions on Computer-Human Interaction (TOCHI) 22, 2 (2015), 1–35.

[4]: Andrew Head, Elena Glassman, Gustavo Soares, Ryo Suzuki, Lucas Figueredo, Loris D’Antoni, and Björn Hartmann. 2017. Writing reusable code feedback at scale with mixed-initiative program synthesis. In Proceedings of the Fourth (2017) ACM Conference on Learning@ Scale. 89–98.

[5]: Gefei Zhang, Shenming Ji, Yicao Li, Jingwei Tang, Jihong Ding, Meng Xia, Guodao Sun, and Ronghua Liang. 2025. CPVis: Evidence-based Multimodal Learning Analytics for Evaluation in Collaborative Programming. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems.

[6]: Ashley Ge Zhang, Yan Chen, and Steve Oney. 2023. VizProg: Identifying Misunderstandings By Visualizing Students’ Coding Progress. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–16.

[7]: Zhangyin Feng, Daya Guo, Duyu Tang, Nan Duan, Xiaocheng Feng, Ming Gong, Linjun Shou, Bing Qin, Ting Liu, Daxin Jiang, et al . 2020. Codebert: A pre-trained model for programming and natural languages. arXiv preprint arXiv:2002.08155 (2020).

### About the Author

Melanie Woon is a computer science master's student at ETH Zurich, majoring in Visual and Interactive Computing with an interest in graphics, user experience, and programming education.
