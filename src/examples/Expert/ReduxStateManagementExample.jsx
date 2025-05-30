/**
 * State Management Libraries Example (Redux)
 * ------------------------------------------
 * Demonstrates a simple Redux pattern using useReducer and Context (no external libraries).
 */
import React, { useReducer, createContext, useContext } from "react";

// Redux-like reducer
function counterReducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

// Context
const CounterContext = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span style={{ margin: "0 8px" }}>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default function ReduxStateManagementExample() {
  return (
    <CounterProvider>
      <Counter />
      <p style={{ color: "#888", fontSize: 14 }}>
        (This simulates Redux using Context and useReducer.)
      </p>
    </CounterProvider>
  );
}