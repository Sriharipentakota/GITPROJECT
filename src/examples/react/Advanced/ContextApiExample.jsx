import React, { createContext, useContext } from "react";

/**
 * Context API Example
 * -------------------
 * Shares a value globally without prop drilling.
 */
const MyContext = createContext();

function Child() {
  // Consume context value
  const value = useContext(MyContext);
  return <div>Context value: <b>{value}</b></div>;
}

export default function ContextAPIExample() {
  return (
    <MyContext.Provider value="Shared by Context!">
      <Child />
    </MyContext.Provider>
  );
}