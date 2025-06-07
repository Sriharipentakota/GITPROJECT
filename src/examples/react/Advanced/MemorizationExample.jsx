import React, { useState, useCallback, useMemo } from "react";

/**
 * Memoization (React.memo, useMemo, useCallback) Example
 * ------------------------------------------------------
 * Prevents unnecessary re-renders and computations.
 */
const ExpensiveComponent = React.memo(({ value }) => {
  // Simulate expensive computation
  const computed = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1e7; i++) total += value;
    return total;
  }, [value]);
  return <div>Expensive computed value: {computed}</div>;
});

export default function MemoizationExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  return (
    <div>
      <button onClick={increment}>Increment count: {count}</button>
      <button onClick={() => setOther((o) => o + 1)} style={{ marginLeft: 8 }}>
        Increment other: {other}
      </button>
      <ExpensiveComponent value={count} />
    </div>
  );
}