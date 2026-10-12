"use client";

import { Button, Link } from "@geist-ui/core";
import { useThemeSwitcher } from "../../components/Providers";
import "./style.css";

const BIBTEX = `@article{wang2026chatcommunity,
  author  = {Wang, Junling and Goswami, Lahari and Umbelino, Gustavo Kreia and Chau, Kiara and Sachan, Mrinmaya and Wang, April},
  title   = {Bridging Instead of Replacing Online Coding Communities with AI through Community-Enriched Chatbot Designs},
  journal = {Proceedings of the ACM on Human-Computer Interaction (PACM HCI), CSCW 2026},
  volume  = {10},
  number  = {2},
  year    = {2026},
  doi     = {10.1145/3788044}
}`;

export default function ChatCommunityPage() {
  const { themeType } = useThemeSwitcher();
  const isDarkMode = themeType === "custom-dark";

  return (
    <div className={`cc-container ${isDarkMode ? "dark-mode" : ""}`}>
      <header className="cc-header">
        <h1 className="cc-title">
          Bridging Instead of Replacing Online Coding Communities with AI
          through Community-Enriched Chatbot Designs
        </h1>

        <div className="cc-meta">
          <p>
            Junling Wang, Lahari Goswami, Gustavo Kreia Umbelino, Kiara Chau,
            Mrinmaya Sachan, April Yi Wang
          </p>
          <p>ETH Zürich</p>
          <p className="cc-venue">
            PACM HCI, CSCW 2026 · <span className="cc-award">Best Paper Award</span>
          </p>
        </div>

        <div className="cc-buttons">
          <Link href="https://doi.org/10.1145/3788044" target="_blank" rel="noopener noreferrer">
            <Button auto>🔗 DOI</Button>
          </Link>
          <Link href="https://arxiv.org/abs/2601.18697" target="_blank" rel="noopener noreferrer">
            <Button auto>📄 Paper</Button>
          </Link>
          <Link href="https://github.com/ETH-PEACH-Lab/ChatCommunity" target="_blank" rel="noopener noreferrer">
            <Button auto>💻 Code</Button>
          </Link>
        </div>
      </header>

      {/* Teaser */}
      <section className="cc-section">
        <img
          src="/assets/chatcommunity/overview.png"
          alt="ChatCommunity system overview"
          className="cc-figure"
        />
        <p className="cc-caption">
          Overview of ChatCommunity. The interface shows the chat response, a
          source panel that previews retrieved Kaggle posts with social signals
          (e.g., author and engagement metrics), and controls for customizing
          retrieval. We evaluate four conditions: Community-Enriched AI (Alpha),
          RAG baseline (Beta), GPT-4o (Gamma), and manual browsing on Kaggle
          (Delta).
        </p>
      </section>

      {/* Abstract */}
      <section className="cc-section cc-abstract">
        <h2 className="cc-section-title">Abstract</h2>
        <p className="cc-abstract-text">
          LLM-based chatbots such as ChatGPT are increasingly used to support
          coding tasks, but they typically provide isolated answers with little
          support for social learning or contextual grounding. In contrast,
          online coding communities like Kaggle foster learning through
          peer-generated content, discussion, and shared practices. As reliance
          on LLMs grows, however, participation in these communities risks being
          reduced, weakening their collaborative value.
        </p>
        <p className="cc-abstract-text">
          We introduce <b>Community-Enriched AI</b>, a design paradigm that
          embeds social learning dynamics from online coding communities into
          LLM-based chatbots by surfacing user-generated content alongside
          social signals. We instantiate this paradigm in <b>ChatCommunity</b>,
          a retrieval-augmented chatbot built on Kaggle resources. Across two
          studies with data science learners (N=28; N=12), we show that
          Community-Enriched AI increases trust, encourages engagement with
          community content, and effectively supports learners in completing
          data science tasks. Our findings highlight how AI assistance can{" "}
          <em>bridge—rather than replace—</em>online coding communities.
        </p>
      </section>

      {/* How it works */}
      <section className="cc-section">
        <h2 className="cc-section-title">How it Works</h2>
        <p className="cc-text">
          ChatCommunity uses a retrieval-augmented generation (RAG) pipeline
          over Kaggle notebooks. Notebook content is chunked and indexed with
          competition and social metadata, retrieved and ranked based on
          user-selected criteria (relevance, votes, or views), and then used to
          generate responses with an LLM. Retrieved sources are displayed
          alongside the answer with their associated community signals.
        </p>
        <img
          src="/assets/chatcommunity/pipeline.png"
          alt="ChatCommunity retrieval-augmented generation pipeline"
          className="cc-figure"
        />
      </section>

      {/* Demo */}
      <section className="cc-section">
        <h2 className="cc-section-title">System Demo</h2>
        <div className="cc-video-frame">
          <iframe
            src="https://www.youtube.com/embed/7e9dYA0fOQ8"
            title="ChatCommunity demo video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="cc-caption">
          Demo video illustrating ChatCommunity&apos;s interface, retrieval
          workflow, and community-enriched interactions.
        </p>
      </section>

      {/* BibTeX */}
      <section className="cc-section">
        <h2 className="cc-section-title">BibTeX</h2>
        <pre className="cc-bibtex">
          <code>{BIBTEX}</code>
        </pre>
      </section>
    </div>
  );
}
