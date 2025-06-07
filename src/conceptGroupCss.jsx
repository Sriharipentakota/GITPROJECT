// Place in /src/cssConcepts.js or /src/examples/CSS/cssConcepts.js

import CSSIntroExample from "./examples/css/CSSIntroExample";
import CSSSelectorsExample from "./examples/css/CSSSelectorsExample";
import CSSColorsUnitsExample from "./examples/css/CSSColorsUnitsExample";
import CSSBoxModelExample from "./examples/css/CSSBoxModelExample";
import CSSDisplayPositionExample from "./examples/css/CSSDisplayPositionExample";
import CSSFlexboxExample from "./examples/css/CSSFlexboxExample";
import CSSGridExample from "./examples/css/CSSGridExample";
import CSSResponsiveExample from "./examples/css/CSSResponsiveExample";
import CSSPseudoClassesExample from "./examples/css/CSSPseudoClassesExample";
import CSSVariablesExample from "./examples/css/CSSVariablesExample";
import CSSTransitionsExample from "./examples/css/CSSTransitionsExample";
import CSSAnimationsExample from "./examples/css/CSSAnimationsExample";
import CSSBestPracticesExample from "./examples/css/CSSBestPracticesExample";
import CSSAdvancedSelectorsExample from "./examples/css/CSSAdvancedSelectorsExample";

export const cssConceptGroup = {
  title: "CSS",
  concepts: [
    {
      title: "Introduction to CSS",
      description: "Understand what CSS is, how to include it in your HTML, and the purpose of styling web pages.",
      example: CSSIntroExample,
    },
    {
      title: "Selectors & Combinators",
      description: "Learn how to target elements using type, class, id, descendant, child, and attribute selectors.",
      example: CSSSelectorsExample,
    },
    {
      title: "Colors, Units, & Typography",
      description: "Work with colors, font properties, and understand measurement units like px, em, rem, %, etc.",
      example: CSSColorsUnitsExample,
    },
    {
      title: "Box Model",
      description: "Understand content, padding, border, and margin. Explore box-sizing and element sizing.",
      example: CSSBoxModelExample,
    },
    {
      title: "Display & Position",
      description: "Master display values (block, inline, inline-block, none) and positioning (static, relative, absolute, fixed, sticky).",
      example: CSSDisplayPositionExample,
    },
    {
      title: "Flexbox",
      description: "Use Flexbox for 1D layouts. Control alignment, direction, spacing, and order of items.",
      example: CSSFlexboxExample,
    },
    {
      title: "Grid",
      description: "Use CSS Grid for 2D layouts. Define rows, columns, and place items in a grid.",
      example: CSSGridExample,
    },
    {
      title: "Responsive Design & Media Queries",
      description: "Make your site look good on any device using media queries, relative units, and mobile-first design.",
      example: CSSResponsiveExample,
    },
    {
      title: "Pseudo-classes & Pseudo-elements",
      description: "Style elements in specific states (:hover, :active) and part of elements (::before, ::after).",
      example: CSSPseudoClassesExample,
    },
    {
      title: "CSS Variables (Custom Properties)",
      description: "Use reusable values (variables) in CSS for easier theming and maintenance.",
      example: CSSVariablesExample,
    },
    {
      title: "Transitions",
      description: "Create smooth transitions between property changes (like hover effects).",
      example: CSSTransitionsExample,
    },
    {
      title: "Animations",
      description: "Add complex, keyframe-based animations to your elements.",
      example: CSSAnimationsExample,
    },
    {
      title: "Advanced Selectors",
      description: "Use advanced selectors like :nth-child, :not, [attribute^=value], etc.",
      example: CSSAdvancedSelectorsExample,
    },
    {
      title: "Best Practices & Performance",
      description: "Organize your CSS, avoid common pitfalls, and write maintainable, performant styles.",
      example: CSSBestPracticesExample,
    }
  ]
};