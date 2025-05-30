import React from "react";
import { useNavigate } from "react-router-dom";

function ResumePreview() {
  const navigate = useNavigate();
  const resumeHtml = sessionStorage.getItem("resumeHtml");

  if (!resumeHtml) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>No resume found. Please upload your resume first.</p>
        <button onClick={() => navigate("/")}>Go to Upload</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", background: "#fff", borderRadius: "8px", maxWidth: "850px", margin: "auto" }}>
      <h2>Resume Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
    </div>
  );
}

export default ResumePreview;