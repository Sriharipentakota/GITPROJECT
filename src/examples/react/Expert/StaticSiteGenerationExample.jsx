/**
 * Static Site Generation (SSG) Example (Simulated)
 * ------------------------------------------------
 * SSG pre-renders pages at build time (e.g., with Next.js getStaticProps).
 * Here we just simulate pre-fetched, static data.
 */
import React from "react";

const staticPosts = [
  { id: 1, title: "Hello World" },
  { id: 2, title: "React SSG Example" },
];

export default function StaticSiteGenerationExample() {
  return (
    <div>
      <strong>SSG Concept:</strong>
      <ul>
        {staticPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p style={{ color: "#888", fontSize: 14 }}>
        (In a real SSG app, this list is generated at build time.)
      </p>
    </div>
  );
}