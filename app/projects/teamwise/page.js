"use client";
import { useState } from "react";
import "./style.css";

export default function TeamwisePage() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="teamwise-container">
      <header className="teamwise-header">
        <h1 className="teamwise-title">
          TeamWise: Exploring Virtually Embodied AI Facilitation for Video-Based
          Team Onboarding
        </h1>

        <div className="teamwise-meta">
          <p>
            Akhila Obilisetty<sup>1*</sup>, Mikkeline Elleby<sup>2*</sup>,
            Anthony Tang<sup>3</sup>, April Yi Wang<sup>2</sup>
          </p>
          <p>
            <sup>1</sup>University of Zurich, Switzerland
            <br />
            <sup>2</sup>ETH Zurich, Switzerland
            <br />
            <sup>3</sup>Singapore Management University, Singapore
            <br />
            *Equal contribution
          </p>
        </div>

        <section className="teamwise-section teamwise-abstract">
          <p className="teamwise-abstract-text">
            AI tools are increasingly used to help new remote teams get started
            and work together, but most of these tools are text-based. To
            explore a different approach, we created TeamWise, an AI facilitator
            that joins video onboarding meetings as an on-screen avatar.
            TeamWise guides teams through a set of simple, low-pressure
            activities designed to help them get to know each other, build
            awareness, and create a sense of team identity.
          </p>
        </section>
      </header>

      {/* The Problem */}
      <section className="teamwise-section teamwise-problem-section">
        <div className="teamwise-problem-content">
          <div className="teamwise-problem-image">
            <img
              src="/assets/teamwise/problem%20team.jpeg"
              alt="Newly formed remote team in an awkward early meeting moment"
              className="teamwise-problem-photo"
            />
          </div>

          <div className="teamwise-problem-text">
            <p>
              When people join a new online team, the first few minutes can feel
              uncertain. It is often unclear who should speak first, how to
              break the ice, or how to build a natural flow of conversation.
            </p>

            <h4 className="teamwise-problem-subheading">Why this matters</h4>

            <p>
              These early moments shape how a team begins working together.
              Prior work suggests that structured onboarding can improve early
              interactions, but there is still an open question around how AI
              can support this in a way that feels natural and effective.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="teamwise-section teamwise-solution-section">
        <h2 className="teamwise-section-title">The Solution: Meet TeamWise</h2>

        {/* <h3 className="teamwise-solution-subtitle">Meet TeamWise</h3> */}

        <section className="teamwise-video-section">
          <div className="teamwise-video-frame">
            {playVideo ? (
              <iframe
                src="https://www.youtube.com/embed/D9msW34swa0?autoplay=1"
                title="TeamWise video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="teamwise-video-thumbnail"
                onClick={() => setPlayVideo(true)}
                aria-label="Play TeamWise video"
              >
                <span className="teamwise-play-button" />
              </button>
            )}
          </div>
        </section>

        <div className="teamwise-solution-text">
          <p>
            TeamWise is an embodied AI facilitator designed for team onboarding
            in live video meetings. It joins the meeting as a participant and
            helps newly formed teams get started through lightweight, structured
            activities. Its responses are generated in real time based on the
            ongoing conversation and meeting state.
          </p>

          <p>TeamWise supports early interaction by:</p>
        </div>

        <div className="teamwise-features-grid">
          <div className="teamwise-feature-card">
            <p>Encouraging equitable participation</p>
          </div>
          <div className="teamwise-feature-card">
            <p>Waiting patiently before responding</p>
          </div>
          <div className="teamwise-feature-card">
            <p>Acknowledging participants</p>
          </div>
          <div className="teamwise-feature-card">
            <p>Managing the flow of conversation</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="teamwise-section teamwise-how-section">
        <h2 className="teamwise-section-title">How it Works</h2>

        <p className="teamwise-how-intro">
          TeamWise guides teams through three lightweight onboarding activities:
        </p>

        <div className="teamwise-activities-image">
          <img
            src="/assets/teamwise/activities.png"
            alt="Three onboarding activities: Name & Memory Chain, Fun Skill Sharing, Shared Preference Consensus"
            className="teamwise-activities-diagram"
          />
        </div>

        <p className="teamwise-activities-description">
          Each activity builds social connection while requiring minimal time
          commitment. Name & Memory Chain encourages early participation and
          helps people remember each other. Fun Skill Sharing creates comfort
          through low-stakes personal disclosure. Shared Preference Consensus
          surfaces common ground and collective identity.
        </p>
      </section>

      {/* Research Focus */}
      <section className="teamwise-section teamwise-focus-section">
        <h2 className="teamwise-section-title">Research Focus</h2>

        <h3>
          {/* <span className="teamwise-rq-tag">RQ</span> */}
          RQ: How does visual embodiment shape team interaction?
        </h3>
        <h3 className="teamwise-rq-inline"></h3>
        <div className="teamwise-focus-panel">
          <div className="teamwise-br-columns">
            <div className="teamwise-br-group">
              <h3>Benefits</h3>
              <div className="teamwise-chip-row teamwise-chip-row-benefits">
                <span>Engagement</span>
                <span>Co-presence</span>
                <span>Social presence</span>
              </div>
            </div>

            <div className="teamwise-br-group">
              <h3>Risks</h3>
              <div className="teamwise-chip-row teamwise-chip-row-risks">
                <span>Over-trust</span>
                <span>Discomfort</span>
                <span>Higher expectations</span>
              </div>
            </div>
          </div>
        </div>

        <p className="teamwise-focus-caption">
          Embodiment can strengthen engagement and social connection, but it can
          also create discomfort or over-trust. We study where this tradeoff
          helps or hurts early team interactions.
        </p>
      </section>

      {/* Real-time Pipeline */}
      <section className="teamwise-section teamwise-pipeline-section">
        <h2 className="teamwise-section-title">
          Real-time Facilitation Pipeline
        </h2>

        <p>
          Participant speech is transcribed, then sent to an LLM with meeting
          state to generate TeamWise&apos;s next response in real time.
        </p>

        <div className="teamwise-pipeline-image-wrap">
          <img
            src="/assets/teamwise/pipeline.png"
            alt="Pipeline: participant speech to speech-to-text, LLM with meeting state, text-to-speech, and avatar response"
            className="teamwise-pipeline-image"
          />
        </div>
      </section>

      {/* User Study */}
      <section className="teamwise-section teamwise-study-section">
        <h2 className="teamwise-section-title">User Study</h2>

        <h3 className="teamwise-study-subtitle">Early participant feedback</h3>
        <p className="teamwise-study-text">
          We tested the avatar-guided condition in a formative study, and
          participants described the facilitator as natural and supportive.
          Example feedback included:
        </p>

        <div className="teamwise-testimonials">
          <blockquote className="teamwise-testimonial-card">
            <p>&ldquo;She was pleasant and the tone was friendly&rdquo;</p>
          </blockquote>

          <blockquote className="teamwise-testimonial-card">
            <p>
              &ldquo;I was very impressed how natural the voice and the
              behaviour of the AI&rdquo;
            </p>
          </blockquote>
        </div>

        {/* <p className="teamwise-study-text">
          The full-scale study will compare two conditions:
        </p>

        <div className="teamwise-condition-cards">
          <article className="teamwise-condition-card">
            <span className="teamwise-condition-label">Condition A</span>
            <h4>Voice-guided onboarding</h4>
          </article>

          <article className="teamwise-condition-card">
            <span className="teamwise-condition-label">Condition B</span>
            <h4>Avatar-guided onboarding</h4>
          </article>
        </div> */}

        <h3 className="teamwise-study-subtitle">Next Steps</h3>
        <p>
          We plan to test the two conditions in a full-scale study to compare
          how voice-guided and avatar-guided onboarding shape early team
          interactions.
        </p>

        <div className="teamwise-condition-cards">
          <article className="teamwise-condition-card">
            <span className="teamwise-condition-label">Condition A</span>
            <h4>Voice-guided onboarding</h4>
          </article>

          <article className="teamwise-condition-card">
            <span className="teamwise-condition-label">Condition B</span>
            <h4>Avatar-guided onboarding</h4>
          </article>
        </div>
      </section>

      {/* Publications */}
      <section className="teamwise-section teamwise-publications-section">
        <h2 className="teamwise-section-title">Publications</h2>

        <div className="teamwise-publications-card">
          <p className="teamwise-publications-links">
            <span className="teamwise-publication-link-item">
              <span
                className="teamwise-publication-link-icon"
                aria-hidden="true"
              >
                📄
              </span>
              <a href="/assets/paper/CHI26_TeamWise_Poster.pdf" className="teamwise-publication-link">
                Paper
              </a>
            </span>

            <span className="teamwise-publication-divider">|</span>

            <span className="teamwise-publication-link-item">
              <span
                className="teamwise-publication-link-icon"
                aria-hidden="true"
              >
                🎥
              </span>
              <a
                href="https://youtu.be/jCdIswX6igU?si=RjgTXtlAOJ-crf3Y"
                target="_blank"
                rel="noopener noreferrer"
                className="teamwise-publication-link"
              >
                Video
              </a>
            </span>
          </p>

          <p className="teamwise-publication-citation">
            <strong>Citation:</strong> Obilisetty, V. A. R., Elleby, M., Tang,
            A., &amp; Wang, A. Y. (2026). TeamWise: Exploring virtually embodied
            AI facilitation for video-based team onboarding. In Extended
            Abstracts of the 2026 CHI Conference on Human Factors in Computing
            Systems (CHI EA &rsquo;26)
          </p>
        </div>
      </section>
    </div>
  );
}
