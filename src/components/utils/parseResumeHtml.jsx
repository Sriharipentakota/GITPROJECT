const SECTION_HEADINGS = [
  "education",
  "experience",
  "training experience",
  "system experience",
  "language skills",
  "skills", // optional extra
  "projects", // optional extra
];

function isSectionHeading(line) {
  const text = line.trim().replace(/:$/, "").toLowerCase();
  return SECTION_HEADINGS.includes(text);
}

export default function parseResumeHtml(html) {
  // Convert HTML to lines
  const container = document.createElement('div');
  container.innerHTML = html;

  // Flatten all text nodes into lines
  let lines = [];
  Array.from(container.childNodes).forEach((el) => {
    if (el.textContent) {
      el.textContent.split('\n').forEach(l => {
        const trimmed = l.trim();
        if (trimmed) lines.push(trimmed);
      });
    }
  });

  // Identify where section headings are
  let sections = [];
  for (let i = 0; i < lines.length; i++) {
    if (isSectionHeading(lines[i])) {
      sections.push({ name: lines[i].trim().replace(/:$/, ""), index: i });
    }
  }

  // If no headings found, treat the whole thing as personalInfo
  if (sections.length === 0) {
    return { personalInfo: lines.join('\n') };
  }

  // Personal info is everything before the first heading
  const personalInfo = lines.slice(0, sections[0].index).join('\n');

  // Now extract each section
  const data = { personalInfo };
  for (let i = 0; i < sections.length; i++) {
    const sectionName = sections[i].name.replace(/:$/, "").toLowerCase().replace(/\s+/g, '');
    const start = sections[i].index + 1;
    const end = i + 1 < sections.length ? sections[i + 1].index : lines.length;
    data[sectionName] = lines.slice(start, end);
  }

  // For compatibility with your components:
  return {
    personalInfo: data.personalInfo,
    education: data.education || [],
    experience: data.experience || [],
    trainingExperience: data.trainingexperience || [],
    systemExperience: data.systemexperience || [],
    languageSkills: data.languageskills || [],
    skills: data.skills || [],
    projects: data.projects || []
  };
}