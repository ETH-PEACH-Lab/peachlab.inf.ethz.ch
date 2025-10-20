import { Link as GeistLink } from "@geist-ui/core";
import { FileText, Video, Github, Layout, Link as LinkIcon, FileCode, Award } from "lucide-react";

export function PubLinks({ pub }) {
  // If there's a paper link, don't show PDF link (official journal is better)
  const showPdf = !pub.paper_link && pub.pdf_link;
  
  // Determine award type class
  const getAwardClass = () => {
    if (!pub.award_type) return "honorable";
    if (pub.award_type.toLowerCase().includes("best")) return "best";
    return "honorable";
  };
  
  return (
    <>
          {pub.award && (
        <div style={{ marginTop: "-0.25rem", marginBottom: "1rem" }} className={`pub-award ${getAwardClass()}`}>
          <Award size={16} strokeWidth={2} style={{ marginRight: "0.25rem", transform: "translateY(1.5px)" }} className="award-icon" />
          <span>{pub.award}</span>
        </div>
      )}
      {(pub.paper_link || pub.project_link || pub.video_link || pub.preprint_link || showPdf || pub.code_link) ? (
        <div className="pub-links-container">
          {pub.project_link && (
            <a href={pub.project_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <Layout size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">Project</span>
            </a>
          )}
          {pub.paper_link && (
            <a href={pub.paper_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <LinkIcon size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">Paper</span>
            </a>
          )}
          {pub.video_link && (
            <a href={pub.video_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <Video size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">Video</span>
            </a>
          )}
          {pub.preprint_link && (
            <a href={pub.preprint_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <FileCode size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">Preprint</span>
            </a>
          )}
          {showPdf && (
            <a href={pub.pdf_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <FileText size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">PDF</span>
            </a>
          )}
          {pub.code_link && (
            <a href={pub.code_link} target="_blank" rel="noopener noreferrer" className="pub-link-btn">
              <Github size={16} strokeWidth={2} className="btn-icon" />
              <span className="btn-text">Code</span>
            </a>
          )}
        </div>
      ) : (
        <div className="pub-to-appear">To Appear</div>
      )}
    </>
  );
}
