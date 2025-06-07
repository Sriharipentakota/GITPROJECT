import React, { useState } from "react";

/**
 * React Router Example (Simulated)
 * --------------------------------
 * Demonstrates the idea of client-side navigation.
 * (For a real app, use react-router-dom, but here we simulate navigation.)
 */
function Home() {
  return <div>Home Page</div>;
}
function About() {
  return <div>About Page</div>;
}

export default function ReactRouterExample() {
  const [route, setRoute] = useState("home");
  return (
    <div>
      <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")} style={{ marginLeft: 8 }}>
        About
      </button>
      <div style={{ marginTop: 16 }}>
        {route === "home" ? <Home /> : <About />}
      </div>
    </div>
  );
}