import { Button, Tooltip, Link } from "@geist-ui/core";
import { FileText, PlayCircle, Github, Monitor, ExternalLink, Paperclip, Award } from "@geist-ui/icons";

export function PubLinks({ pub }) {

  return (
    <>
  {(pub.paper_link || pub.project_link || pub.video_link || pub.preprint_link || pub.pdf_link || pub.code_link) ? (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
      {pub.project_link && (
        <Tooltip text="Project Page">
          <Link href={pub.project_link} target="_blank">
            <Button auto icon={<Monitor />} size="small" className="pub-link-button">
              Project
            </Button>
          </Link>
        </Tooltip>
      )}
      {pub.paper_link && (
        <Tooltip text="DOI">
          <Link href={pub.paper_link} target="_blank">
            <Button auto icon={<ExternalLink />} size="small" className="pub-link-button">
              DOI
            </Button>
          </Link>
        </Tooltip>
      )}
      {pub.video_link && (
        <Tooltip text="Video">
          <Link href={pub.video_link} target="_blank">
            <Button auto icon={<PlayCircle />} size="small" className="pub-link-button">
              Video
            </Button>
          </Link>
        </Tooltip>
      )}
      {pub.preprint_link && (
        <Tooltip text="PrePrint">
          <Link href={pub.preprint_link} target="_blank">
            <Button auto icon={<Paperclip />} size="small" className="pub-link-button">
              PrePrint
            </Button>
          </Link>
        </Tooltip>
      )}
      {pub.pdf_link && (
        <Tooltip text="PDF">
          <Link href={pub.pdf_link} target="_blank">
            <Button auto icon={<FileText />} size="small" className="pub-link-button">
              PDF
            </Button>
          </Link>
        </Tooltip>
      )}
      {pub.code_link && (
        <Tooltip text="Code">
          <Link href={pub.code_link} target="_blank">
            <Button auto icon={<Github />} size="small" className="pub-link-button">
              Code
            </Button>
          </Link>
        </Tooltip>
      )}
    </div>
  ) : (
    <div style={{ fontStyle: "italic", color: "#999", fontSize: "14px", marginTop: "6px" }}>
      To Appear
    </div>
  )}

  {pub.award && (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "14px",
      fontWeight: 500,
      marginTop: "10px",
      color: pub.award_type === "best" ? "#C14444" : "#A66B00"
    }}
  >
    <Award
      size={16}
      style={{
        color: pub.award_type === "best" ? "#C14444" : "#A66B00"
      }}
    />
    <span>{pub.award}</span>
  </div>
)}
</>
  )
}
