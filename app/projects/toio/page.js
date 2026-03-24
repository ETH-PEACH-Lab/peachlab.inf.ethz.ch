"use client";

import { Link } from "@geist-ui/core";
import { useThemeSwitcher } from "../../components/Providers";
import "./style.css";

export default function ToioPage() {
    const { themeType } = useThemeSwitcher();
    const isDarkMode = themeType === "custom-dark";
    
    return (
        <div className={`toio-container ${isDarkMode ? "dark-mode" : ""}`}>
            {/* Title */}
            <header className="toio-header">
                <h1 className="toio-title">
                    Pokémon AI Adventure
                </h1>
                
                <div className="toio-meta">
                    <p>Project Team: Zihan Li, Lahari Goswami, and April Wang</p>
                    {/* <p>Supervised by: 
                        <Link href="https://aprilwang.me" target="_blank" className="link">Prof. Dr. April Yi Wang</Link>
                    </p> */}
                    {/* <p>ETH Zürich</p>
                    <p>2026</p> */}
                </div>

                {/* Buttons */}
                {/* TBD, either add document in the repo or add a link for it */}
                {/* <div className="buttons">
                    <Link href="/path/to/thesis.pdf" target="_blank">
                        <Button auto>📄 Thesis</Button>
                    </Link>
                </div> */}
            {/* Abstract */}
            <section className="toio-section toio-abstract">
                <p className="toio-abstract-text">
                    Pokémon AI Adventure is a tangible toolkit that teaches foundational AI literacy to children aged 9-15. Our primary research goal is to bridge the conceptual gap between rule-based logic and data-driven machine learning. Through a playful, hands-on journey, children act the role as a "Pokémon Trainer," using physical components to build, test, and compare different AI models. This process allows them to experientially learn how different AIs "think" and make decisions to solve challenges in the world of Pokémon.
                </p>
            </section>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <iframe 
                        width="900" 
                        height="600" 
                        src="https://www.youtube.com/embed/b4aeyXHE_G8" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </header>


            {/* A Quest on Rules and Data */}
            <section className="toio-section">
                <h2 className="toio-section-title">A Quest on Rules and Data</h2>
                <div className="toio-quest-content">
                    <div className="toio-quest-image">
                        <img
                            src="/assets/toio/gameboard.png"
                            alt="Game Board"
                            className="toio-board-image"
                        />
                    </div>
                    <div className="toio-quest-text">
                        <p>
                            Pokémon AI Adventure invites players into the world of Novara—a planet composed of diverse environments, each inhabited by different Pokémon.
                        </p>
                        <p>
                            Throughout the quest, players assist Professor Oak in 
                            constructing, testing, and comparing two AI partners: one driven by explicit human-authored rules, and the other trained from data.
                        </p>
                        <p>
                            By making design choices and examining their outcomes, players learn that AI behavior emerges from human decisions about rules, data, and interpretation rather than from magic or autonomy.
                        </p>
                        <p>
                            The mission is not only to catch Pokémon, but to explain why an AI succeeds, fails, or behaves unexpectedly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet RuleBot & DataBot */}
            <section className="toio-section">
                <h2 className="toio-section-title">Meet RuleBot & DataBot</h2>
                <div className="toio-bots-container">
                    <div className="toio-bot-card">
                        <div className="toio-bot-icon">
                            <img src="/assets/toio/rulebot.png" alt="RuleBot" />
                        </div>
                        <h3>Meet RuleBot: Rule-Based AI</h3>
                        <p>
                            <strong>RuleBot</strong> follows instructions exactly as written.
                        </p>
                        <ul>
                            <li>Every decision it makes comes from explicit, human-defined rules.</li>
                            <li>If rules are too strict, <strong>RuleBot</strong> may fail to recognize valid Pokémon.</li>
                            <li>If rules are too general, <strong>RuleBot</strong> may misclassify valid Pokémon.</li>
                        </ul>
                    </div>
                    
                    <div className="toio-bot-card">
                        <div className="toio-bot-icon">
                            <img src="/assets/toio/databot.png" alt="DataBot" />
                        </div>
                        <h3>Meet DataBot: Data-Driven AI</h3>
                        <p>
                            <strong>DataBot</strong> does not follow predefined rules.
                        </p>
                        <ul>
                            <li>Instead, it learns patterns from examples.</li>
                            <li>You train <strong>DataBot</strong> by selecting datasets, not instructions.</li>
                            <li><strong>DataBot</strong> builds an internal model from examples to make predictions.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Lab Zone */}
            <section className="toio-section">
                <h2 className="toio-section-title">Lab Zone</h2>
                
                <div className="toio-lab-subsection">
                    <h3>Clue Cards & Package Cards: Teaching the AI</h3>
                    <div className="toio-lab-content">
                        <div className="toio-lab-text">
                            <p>These cards are the primary way players shape AI behavior:</p>
                            <ul>
                                <li><strong>Clue Cards</strong> define explicit features and rules for RuleBot.</li>
                                <li><strong>Package Cards</strong> provide training examples for DataBot.</li>
                            </ul>
                            <p>
                                Scanning different combinations changes how each AI understands Pokémon. Every scan represents a design decision, and every decision has consequences.
                            </p>
                        </div>
                        <div className="toio-lab-image">
                            <img
                                src="/assets/toio/cardset.png"
                                alt="Clue and Package Cards"
                                className="toio-cards-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="toio-lab-subsection">
                    <h3>Light Board: Visualizing the AI Model</h3>
                    <div className="toio-lab-content">
                        <div className="toio-lab-text">
                            <p>
                                The Light Board represents the "brain" of the AI.
                            </p>
                            <ul>
                                <li>Each light indicates the importance of a feature or learned pattern.</li>
                                <li>As rules or datasets change, the lights shift in response.</li>
                            </ul>
                            <p>
                                This makes AI reasoning visible and inspectable, allowing players to see how their choices reshape the internal model.
                            </p>
                        </div>
                        <div className="toio-lab-image">
                            <img
                                src="/assets/toio/lightboard.png"
                                alt="Light Board"
                                className="toio-lightboard-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Play Zone */}
            <section className="toio-section">
                <h2 className="toio-section-title">Play Zone</h2>
                
                <div className="toio-play-subsection">
                    <h3>Wild Pokémon Encounter: Testing the Model</h3>
                    <div className="toio-play-content">
                        <div className="toio-play-text">
                            <p>
                                A wild Pokémon appears—and the AI must make a decision.
                            </p>
                            <p>
                                This is where training meets reality.
                            </p>
                            <p>
                                The AI applies what it has learned to a completely new case.
                            </p>
                            <ul>
                                <li>Sometimes it succeeds.</li>
                                <li>Sometimes it fails.</li>
                            </ul>
                            <p>
                                Each outcome reveals something about how the model was built.
                            </p>
                        </div>
                        <div className="toio-play-image">
                            <img
                                src="/assets/toio/play.png"
                                alt="Wild Pokémon Encounter"
                                className="toio-encounter-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="toio-play-subsection">
                    <h3>Prediction Results: Reflecting on Outcomes</h3>
                    <div className="toio-play-content">
                        <div className="toio-play-text">
                            <p>
                                The Results Panel displays the AI's final prediction. Players can:
                            </p>
                            <ul>
                                <li>Compare outcomes across different models</li>
                                <li>Examine confidence and accuracy</li>
                                <li>Reflect on why a specific decision was made</li>
                                <li>Was the result shaped by the rules?</li>
                                <li>The data </li>
                                <li>Or something important that was missing?</li>
                            </ul>
                        </div>
                        <div className="toio-play-image">
                            <img
                                src="/assets/toio/prediction.png"
                                alt="Prediction Results Panel"
                                className="toio-results-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="toio-section">
                <h2 className="toio-section-title">Publications</h2>
                <div className="toio-publication">
                    <p className="toio-pub-links">
                        📄 <Link href="#" target="_blank" className="toio-pub-link disabled">Paper (coming soon)</Link>
                        ｜ 📹 <Link href="#" target="_blank" className="toio-pub-link disabled">Video (coming soon)</Link>
                    </p>
                    <p className="toio-pub-citation">
                        <strong>Citation</strong>: Li, Z., Goswami, L., Feng, Y., Williams, K., &amp; Wang, A. Y. (2026). "Rules or Data? Gotta Catch 'Em All!": A Tangible Game for Youth AI Literacy. In Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2026 Interactive Demo).
                    </p>
                </div>
            </section>

        </div>
    )
}