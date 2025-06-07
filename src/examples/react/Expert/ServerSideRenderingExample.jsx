/**
 * Server-Side Rendering (SSR) Example (Simulated)
 * -----------------------------------------------
 * Real SSR in React is done with frameworks like Next.js and cannot be fully demoed in a client-only app.
 * This example demonstrates the concept by showing "Server Data" that would have been fetched/inserted on the server.
 */
import React from "react";

export default function ServerSideRenderingExample() {
  // Imagine this data is fetched on the server and returned as initial HTML
  const serverData = "This string was rendered on the server!";
  return (
    <div>
      <strong>SSR Concept:</strong>
      <p>{serverData}</p>
      <p style={{ color: "#888", fontSize: 14 }}>
        (In a real SSR app, this would be pre-rendered HTML from the server.)
      </p>
    </div>
  );
}