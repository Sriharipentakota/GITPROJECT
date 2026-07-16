export interface Skill {
  id: string;
  label: string;
  path: 'javascript' | 'playwright' | 'tosca';
  category: string;
  description: string;
  relatedConceptIds: string[];
  prerequisites: string[];
}

export const SKILLS: Skill[] = [
  // JavaScript Skills
  {
    id: 'js-variables',
    label: 'Variables & Scope',
    path: 'javascript',
    category: 'Fundamentals',
    description:
      'Understand how to declare variables using var, let, and const, and reason about block, function, and module scope. Recognize common pitfalls such as hoisting and the temporal dead zone.',
    relatedConceptIds: ['variables', 'scope'],
    prerequisites: [],
  },
  {
    id: 'js-functions',
    label: 'Functions & Closures',
    path: 'javascript',
    category: 'Fundamentals',
    description:
      'Define and invoke functions using declarations, expressions, and arrow syntax, and leverage closures to encapsulate private state. Understand how the lexical environment enables powerful patterns like factories and memoization.',
    relatedConceptIds: ['functions', 'closures'],
    prerequisites: ['js-variables'],
  },
  {
    id: 'js-arrays',
    label: 'Arrays & Iteration',
    path: 'javascript',
    category: 'Data Structures',
    description:
      'Manipulate ordered collections with built-in array methods such as map, filter, reduce, and flat. Choose the right iteration strategy for transforming, filtering, or accumulating data efficiently.',
    relatedConceptIds: ['arrays'],
    prerequisites: ['js-functions'],
  },
  {
    id: 'js-objects',
    label: 'Objects & Prototypes',
    path: 'javascript',
    category: 'Data Structures',
    description:
      'Create and manipulate plain objects using literals, destructuring, and spread syntax, and understand how prototypal inheritance chains behavior across objects. Use ES6 classes as syntactic sugar over the prototype system.',
    relatedConceptIds: ['objects'],
    prerequisites: ['js-functions'],
  },
  {
    id: 'js-async',
    label: 'Async & Promises',
    path: 'javascript',
    category: 'Asynchronous',
    description:
      'Write non-blocking code using Promises, async/await, and the event loop model to handle I/O operations cleanly. Chain asynchronous operations, handle rejection, and coordinate concurrent tasks with Promise.all and Promise.allSettled.',
    relatedConceptIds: ['promises', 'async'],
    prerequisites: ['js-functions'],
  },
  {
    id: 'js-modules',
    label: 'ES Modules',
    path: 'javascript',
    category: 'Tooling',
    description:
      'Organize code into reusable modules using ES import and export syntax, and understand how module resolution works in Node.js and browser environments. Structure a multi-file project for maintainability and tree-shaking.',
    relatedConceptIds: ['modules'],
    prerequisites: ['js-functions'],
  },
  {
    id: 'js-error',
    label: 'Error Handling',
    path: 'javascript',
    category: 'Reliability',
    description:
      'Catch and recover from synchronous errors with try/catch/finally and handle rejected promises gracefully in async code. Create custom error classes and design resilient error propagation strategies for production applications.',
    relatedConceptIds: ['errorhandling'],
    prerequisites: ['js-async'],
  },

  // Playwright Skills
  {
    id: 'pw-selectors',
    label: 'Locators & Selectors',
    path: 'playwright',
    category: 'Core',
    description:
      'Identify page elements reliably using Playwright locators based on role, text, label, placeholder, and CSS or XPath fallbacks. Write resilient selectors that remain stable across UI changes and avoid brittle attribute-based queries.',
    relatedConceptIds: ['locators'],
    prerequisites: [],
  },
  {
    id: 'pw-navigation',
    label: 'Navigation & Pages',
    path: 'playwright',
    category: 'Core',
    description:
      'Navigate between URLs, handle multiple browser contexts and pages, and wait for network activity or DOM readiness before interacting. Manage browser lifecycle including launch, context creation, and teardown within tests.',
    relatedConceptIds: ['navigation'],
    prerequisites: ['pw-selectors'],
  },
  {
    id: 'pw-assertions',
    label: 'Assertions',
    path: 'playwright',
    category: 'Core',
    description:
      'Validate application state using Playwright\'s built-in expect API with auto-retrying assertions for visibility, text content, attribute values, and network responses. Write meaningful assertions that accurately reflect user-facing behavior.',
    relatedConceptIds: ['assertions'],
    prerequisites: ['pw-selectors'],
  },
  {
    id: 'pw-actions',
    label: 'User Actions',
    path: 'playwright',
    category: 'Interaction',
    description:
      'Simulate realistic user interactions including clicks, keyboard input, drag-and-drop, file uploads, and hover events. Handle dynamic UI elements such as dropdowns, dialogs, and iframes with appropriate waiting strategies.',
    relatedConceptIds: ['actions'],
    prerequisites: ['pw-selectors'],
  },
  {
    id: 'pw-api',
    label: 'API Testing',
    path: 'playwright',
    category: 'Advanced',
    description:
      'Send HTTP requests and validate REST API responses directly within Playwright using the APIRequestContext. Combine UI and API calls in the same test to seed data, bypass UI setup steps, and verify backend state.',
    relatedConceptIds: ['api'],
    prerequisites: ['pw-navigation'],
  },
  {
    id: 'pw-pom',
    label: 'Page Object Model',
    path: 'playwright',
    category: 'Architecture',
    description:
      'Encapsulate page-specific selectors and interactions into dedicated Page Object classes to keep tests readable and maintainable. Apply the POM pattern to eliminate duplication and centralize changes when the UI evolves.',
    relatedConceptIds: ['pom'],
    prerequisites: ['pw-actions', 'pw-assertions'],
  },
  {
    id: 'pw-fixtures',
    label: 'Fixtures & Hooks',
    path: 'playwright',
    category: 'Advanced',
    description:
      'Create reusable test fixtures that set up and tear down shared state such as authenticated sessions, database seeds, or custom browser contexts. Compose fixtures to build a clean, modular test infrastructure with minimal boilerplate.',
    relatedConceptIds: ['fixtures'],
    prerequisites: ['pw-pom'],
  },
  {
    id: 'pw-visual',
    label: 'Visual Testing',
    path: 'playwright',
    category: 'Advanced',
    description:
      'Capture full-page and element screenshots and compare them against approved baselines to detect unintended visual regressions. Configure screenshot thresholds, manage baseline images in version control, and integrate visual checks into CI pipelines.',
    relatedConceptIds: ['visual'],
    prerequisites: ['pw-assertions'],
  },

  // Tosca Skills
  {
    id: 'tc-modules',
    label: 'Tosca Modules',
    path: 'tosca',
    category: 'Core',
    description:
      'Scan and configure application UI controls into reusable Tosca Modules that abstract the technical details of element identification. Maintain modules so that a single control change propagates automatically to every test case that references it.',
    relatedConceptIds: ['modules'],
    prerequisites: [],
  },
  {
    id: 'tc-testcases',
    label: 'Test Case Design',
    path: 'tosca',
    category: 'Core',
    description:
      'Build structured test cases in Tosca Commander by combining module actions into logical test steps and test case blocks. Apply reusable Test Case Design (TCD) principles to maximize coverage while minimizing the number of distinct test cases.',
    relatedConceptIds: ['testcases'],
    prerequisites: ['tc-modules'],
  },
  {
    id: 'tc-testdata',
    label: 'Test Data Management',
    path: 'tosca',
    category: 'Data',
    description:
      'Parameterize test cases with dynamic test data using Tosca\'s TCD buffer and external data sources such as Excel sheets and databases. Design data-driven test suites that cover multiple scenarios without duplicating test logic.',
    relatedConceptIds: ['testdata'],
    prerequisites: ['tc-testcases'],
  },
  {
    id: 'tc-traceability',
    label: 'Requirements Traceability',
    path: 'tosca',
    category: 'Governance',
    description:
      'Link test cases to business requirements within Tosca to provide end-to-end coverage visibility and compliance reporting. Use traceability matrices to identify gaps, assess the impact of requirement changes, and demonstrate audit readiness.',
    relatedConceptIds: ['requirements'],
    prerequisites: ['tc-testcases'],
  },
  {
    id: 'tc-regression',
    label: 'Regression Testing',
    path: 'tosca',
    category: 'Strategy',
    description:
      'Organize and execute regression test suites in Tosca to verify that new changes have not broken existing functionality. Prioritize and schedule regression runs using execution lists and integrate them into CI/CD pipelines for continuous quality assurance.',
    relatedConceptIds: ['regression'],
    prerequisites: ['tc-testcases', 'tc-testdata'],
  },
  {
    id: 'tc-api',
    label: 'API Test Design',
    path: 'tosca',
    category: 'Advanced',
    description:
      'Design and execute API test cases in Tosca using the API Testing module to validate REST and SOAP service contracts. Combine API and UI test steps within the same test case to support end-to-end integration scenarios.',
    relatedConceptIds: ['api'],
    prerequisites: ['tc-testcases'],
  },
];
