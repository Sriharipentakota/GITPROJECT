// BEGINNER
import JSXExample from "./examples/Beginner/JSXExamples";
import ComponentsExample from "./examples/Beginner/ComponentsExamples";
import PropsExample from "./examples/Beginner/PropsExamples";
import StateExample from "./examples/Beginner/StateExamples";
import RenderingElementsExample from "./examples/Beginner/RenderingExamples";
import HandlingEventsExample from "./examples/Beginner/HandlingEvents";

// INTERMEDIATE
import ComponentLifecycleExample from "./examples/Intermediate/ComponentLifeCycleExample";
import UseEffectExample from "./examples/Intermediate/UseEffectExample";
import ConditionalRenderingExample from "./examples/Intermediate/ConditionalRendering";
import ListsAndKeysExample from "./examples/Intermediate/ListsAndKeysExample";
import FormsControlledComponentsExample from "./examples/Intermediate/FormsControlledComponents";
import LiftingStateUpExample from "./examples/Intermediate/LiftingStateUpExample";
import PropDrillingExample from "./examples/Intermediate/PropsDrilling";

// ADVANCED
import ContextAPIExample from "./examples/Advanced/ContextApiExample";
import CustomHookExample from "./examples/Advanced/CustomhookExample";
import RefsUseRefExample from "./examples/Advanced/RefsUseRefExample";
import ErrorBoundaryExample from "./examples/Advanced/ErrorBoundaryExample";
import HigherOrderComponentExample from "./examples/Advanced/HighOrderComponent";
import RenderPropsExample from "./examples/Advanced/RenderingPropsExamples";
import ReactRouterExample from "./examples/Advanced/ReactRouterExample";
import CodeSplittingLazyLoadingExample from "./examples/Advanced/CodeSplittingAndLazyloading";
import MemoizationExample from "./examples/Advanced/MemorizationExample";
import PortalsExample from "./examples/Advanced/PortalsExamples";


//Expert
import ServerSideRenderingExample from "./examples/Expert/ServerSideRenderingExample";
import StaticSiteGenerationExample from "./examples/Expert/StaticSiteGenerationExample";
import ConcurrentModeExample from "./examples/Expert/ConcurrentModeExample";
import SuspenseErrorBoundaryDataFetchingExample from "./examples/Expert/SuspenseErrorBoundaryDataFetchingExample";
import ReduxStateManagementExample from "./examples/Expert/ReduxStateManagementExample";

export const conceptGroups = [
  {
    title: "Beginner",
    concepts: [
      {
        title: "JSX (JavaScript XML)",
        description:
          "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes it easier to write and visualize the structure of your React components. While JSX is not required to use React, it is commonly used because it makes the code more readable and expressive.",
        example: JSXExample,
      },
      {
        title: "Components",
        description:
          `Components are reusable building blocks of React apps. They can be functions or classes that return UI elements
`,
        example: ComponentsExample,
      },
      {
        title: "Props (Properties)",
        description:
          "Props are how you pass data from a parent component to a child component.",
        example: PropsExample,
      },
      {
        title: "State",
        description:
          "State lets a component keep track of local, changeable data. Managed with useState in function components.",
        example: StateExample,
      },
      {
        title: "Rendering Elements",
        description:
          "React renders elements to the DOM based on what the component returns.",
        example: RenderingElementsExample,
      },
      {
        title: "Handling Events",
        description:
          "You can attach event handlers like onClick and onChange to elements in React.",
        example: HandlingEventsExample,
      },
    ],
  },
  {
    title: "Intermediate",
    concepts: [
      {
        title: "Component Lifecycle (Class Components)",
        description:
          "Lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount let you run code at specific points in a class component's life.",
        example: ComponentLifecycleExample,
      },
      {
        title: "useEffect Hook",
        description:
          "The useEffect hook runs side effects in functional components, such as data fetching, subscriptions, or manual DOM changes.",
        example: UseEffectExample,
      },
      {
        title: "Conditional Rendering",
        description:
          "Render components or elements based on certain conditions using JavaScript expressions.",
        example: ConditionalRenderingExample,
      },
      {
        title: "Lists and Keys",
        description:
          "Render dynamic lists of data using JavaScript array methods, and use unique keys to help React identify list items.",
        example: ListsAndKeysExample,
      },
      {
        title: "Forms and Controlled Components",
        description:
          "In controlled components, form data is handled by React state, allowing you to control user inputs.",
        example: FormsControlledComponentsExample,
      },
      {
        title: "Lifting State Up",
        description:
          "Move state to a common ancestor so that multiple components can share and modify the same data.",
        example: LiftingStateUpExample,
      },
      {
        title: "Prop Drilling",
        description:
          "Pass data through multiple layers of components via props, often leading to deeply nested prop chains.",
        example: PropDrillingExample,
      },
    ],
  },
  {
    title: "Advanced",
    concepts: [
      {
        title: "Context API",
        description:
          "Context provides a way to share values like themes or authentication across the component tree without prop drilling.",
        example: ContextAPIExample,
      },
      {
        title: "Custom Hooks",
        description:
          "Custom hooks let you extract and reuse logic across multiple components.",
        example: CustomHookExample,
      },
      {
        title: "Refs and useRef Hook",
        description:
          "Refs give you access to DOM elements or persist values across renders without causing re-renders.",
        example: RefsUseRefExample,
      },
      {
        title: "Error Boundaries",
        description:
          "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.",
        example: ErrorBoundaryExample,
      },
      {
        title: "Higher-Order Components (HOC)",
        description:
          "A higher-order component is a function that takes a component and returns a new component, adding extra behavior.",
        example: HigherOrderComponentExample,
      },
      {
        title: "Render Props",
        description:
          "A technique for sharing code between components using a prop whose value is a function.",
        example: RenderPropsExample,
      },
      {
        title: "React Router",
        description:
          "React Router enables navigation and routing in single-page React applications. (Simulated here, for demo purposes.)",
        example: ReactRouterExample,
      },
      {
        title: "Code Splitting and Lazy Loading",
        description:
          "Dynamically load components only when needed to optimize performance, using React.lazy and Suspense.",
        example: CodeSplittingLazyLoadingExample,
      },
      {
        title: "Memoization (React.memo, useMemo, useCallback)",
        description:
          "Optimize performance by preventing unnecessary re-renders or computations using memoization techniques.",
        example: MemoizationExample,
      },
      {
        title: "Portals",
        description:
          "Portals let you render children into a DOM node outside the parent component's DOM hierarchy.",
        example: PortalsExample,
      },
    ],
  },

  {
    title: "Expert",
    concepts: [
      {
        title: "Server-Side Rendering (SSR)",
        description: "Render React components on the server for faster load and SEO. (Simulated here.)",
        example: ServerSideRenderingExample,
      },
      {
        title: "Static Site Generation (SSG)",
        description: "Pre-render pages at build time; served as static files. (Simulated here.)",
        example: StaticSiteGenerationExample,
      },
      {
        title: "Concurrent Mode",
        description: "Concurrent features allow React to interrupt rendering for a smoother UX.",
        example: ConcurrentModeExample,
      },
      {
        title: "Suspense and Error Boundaries for Data Fetching",
        description: "Handle async loading and errors elegantly in the UI.",
        example: SuspenseErrorBoundaryDataFetchingExample,
      },
      {
        title: "State Management Libraries (Redux)",
        description: "Manage complex state with Redux or similar (simulated here with Context/useReducer).",
        example: ReduxStateManagementExample,
      },
    ]
  }

];