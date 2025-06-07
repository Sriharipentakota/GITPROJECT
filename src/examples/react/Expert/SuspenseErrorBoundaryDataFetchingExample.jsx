/**
 * Suspense and Error Boundaries for Data Fetching Example
 * ------------------------------------------------------
 * Demonstrates loading fallback and error boundary handling with Suspense.
 */
import React, { Suspense } from "react";

// Fake API with Suspense
function fetchData() {
  let status = "pending";
  let result;
  let suspender = fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then(
      (r) => {
        status = "success";
        result = r.value;
      },
      (e) => {
        status = "error";
        result = e;
      }
    );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

const resource = fetchData();

function Joke() {
  const joke = resource.read();
  return <div>{joke}</div>;
}

// Simple Error Boundary (must be class)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red" }}>Failed to load joke.</div>;
    }
    return this.props.children;
  }
}

export default function SuspenseErrorBoundaryDataFetchingExample() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading joke...</div>}>
        <Joke />
      </Suspense>
    </ErrorBoundary>
  );
}