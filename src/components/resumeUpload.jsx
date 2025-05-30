import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// List of keywords typically found in resumes
const RESUME_SECTIONS = [
  "education",
  "experience",
  "work experience",
  "professional experience",
  "skills",
  "projects",
  "certifications",
  "contact",
  "summary",
  "profile",
  "languages",
  "achievements",
  "interests",
];

function isResume(text) {
  let hits = 0;
  for (const section of RESUME_SECTIONS) {
    if (text.toLowerCase().includes(section)) {
      hits++;
    }
  }
  // Adjust threshold as needed
  return hits >= 2;
}

async function extractPdfText(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let textContent = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    textContent += content.items.map(item => item.str).join(" ") + "\n";
  }
  return textContent;
}

function ResumeUpload() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    setError("");
    const file = e.target.files[0];
    if (!file) return;

    const ext = file.name.split('.').pop().toLowerCase();
    if (!["docx", "pdf"].includes(ext)) {
      setError("Please upload a .docx or .pdf file.");
      return;
    }

    try {
      let html = "";
      let text = "";

      if (ext === "docx") {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const plainResult = await mammoth.extractRawText({ arrayBuffer });
        text = plainResult.value;
        html = result.value;
      } else if (ext === "pdf") {
        text = await extractPdfText(file);
        // For preview, wrap each line in <div> for basic formatting
        html = text.split("\n").map(line => `<div>${line}</div>`).join("");
      }

      if (!isResume(text)) {
        setError("This is not a resume. Please upload a valid resume file.");
        return;
      }

      sessionStorage.setItem("resumeHtml", html);
      navigate("/resume-preview");
    } catch (err) {
      setError("Error reading document: " + err.message);
    }
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <h3>Upload Resume (.docx or .pdf)</h3>
      <input type="file" accept=".docx,.pdf" onChange={handleFileChange} />
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
}

export default ResumeUpload;