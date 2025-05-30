// Can be improved for more edge cases
const SECTION_HEADINGS = [
  "personal information",
  "contact information",
  "education",
  "experience",
  "work experience",
  "professional experience",
  "skills",
  "projects",
  "certifications",
  "languages",
  "interests",
  "objective",
  "summary",
  "profile",
  "achievements"
];

function normalize(str) {
  return str.trim().replace(/:$/, "").toLowerCase();
}

export function parseResumeSections(text) {
  const lines = text.split(/\r?\n/);
  const result = {};
  let currentSection = "info";
  result[currentSection] = [];

  lines.forEach(line => {
    const norm = normalize(line);
    if (SECTION_HEADINGS.includes(norm)) {
      currentSection = norm;
      result[currentSection] = [];
    } else if (line.trim() !== "") {
      result[currentSection].push(line.trim());
    }
  });
  // Join lines for each section
  Object.keys(result).forEach(key => {
    result[key] = result[key].join("\n");
  });
  return result;
}