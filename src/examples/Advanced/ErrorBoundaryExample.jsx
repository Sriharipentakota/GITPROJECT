import React from "react";

/**
 * Error Boundaries Example
 * ------------------------
 * Only class components can be error boundaries.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red" }}>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

// This component throws an error when clicked
function BuggyComponent() {
  const [crash, setCrash] = React.useState(false);
  if (crash) throw new Error("Crashed!");
  return <button onClick={() => setCrash(true)}>Crash me!</button>;
}

export default function ErrorBoundaryExample() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}