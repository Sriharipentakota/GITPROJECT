import HTMLIntroExample from "./examples/html/HTMLIntroExample";
import HTMLTextFormattingExample from "./examples/html/HTMLTextFormattingExample";
import HTMLSemanticElementsExample from "./examples/html/HTMLSemanticElementsExample";
import HTMLLinksMediaExample from "./examples/html/HTMLLinksMediaExample";
import HTMLTablesExample from "./examples/html/HTMLTablesExample";
import HTMLFormsExample from "./examples/html/HTMLFormsExample";
import HTMLDocumentStructureExample from "./examples/html/HTMLDocumentStructureExample";
import HTMLAdvancedFeaturesExample from "./examples/html/HTMLAdvancedFeaturesExample";
import HTMLPerformanceExample from "./examples/html/HTMLPerformanceExample";
import HTMLAccessibilityExample from "./examples/html/HTMLAccessibilityExample";

export const htmlConceptGroup = {
  title: "HTML",
  concepts: [
    {
      title: "Introduction to HTML",
      description: "Learn the basics of HTML, including the structure of an HTML document and essential tags.",
      example: HTMLIntroExample,
    },
    {
      title: "Text Formatting",
      description: "Use tags to format and style text such as bold, italic, underline, and more.",
      example: HTMLTextFormattingExample,
    },
    {
      title: "Semantic Elements",
      description: "Use semantic tags like <header>, <nav>, <main>, and <footer> for better structure and accessibility.",
      example: HTMLSemanticElementsExample,
    },
    {
      title: "Links and Media",
      description: "Add hyperlinks, images, videos, and embed other media content into your pages.",
      example: HTMLLinksMediaExample,
    },
    {
      title: "Tables",
      description: "Structure and present tabular data using table tags and related attributes.",
      example: HTMLTablesExample,
    },
    {
      title: "Forms and User Input",
      description: "Build forms with input fields, radio buttons, checkboxes, selects, and more for user interaction.",
      example: HTMLFormsExample,
    },
    {
      title: "Document Structure and Metadata",
      description: "Understand the head, meta tags, title, and how to include CSS/JS in your HTML.",
      example: HTMLDocumentStructureExample,
    },
    {
      title: "Advanced Features",
      description: "Explore data attributes, microdata, HTML5 APIs, and using custom attributes.",
      example: HTMLAdvancedFeaturesExample,
    },
    {
      title: "Performance and Best Practices",
      description: "Tips for writing efficient, SEO-friendly, and maintainable HTML.",
      example: HTMLPerformanceExample,
    },
    {
      title: "Accessibility in HTML",
      description: "Make your HTML accessible to everyone using ARIA roles, semantic tags, and best practices.",
      example: HTMLAccessibilityExample,
    }
  ]
};