import React, { Suspense, useState } from "react";

/**
 * Code Splitting & Lazy Loading Example
 * -------------------------------------
 * Loads a component only when you click the button.
 */
const LazyComponent = React.lazy(() =>
  Promise.resolve({
    default: () => <div>This component was loaded lazily!</div>,
  })
);

export default function CodeSplittingLazyLoadingExample() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Load Component</button>
      <div style={{ marginTop: 16 }}>
        {show && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
}