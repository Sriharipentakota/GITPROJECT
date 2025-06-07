import React from "react";

export default function HTMLSemanticElementsExample() {
  return (
    <div>
      <h3>Semantic HTML Elements</h3>
      <p>
        Semantic elements clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO.
      </p>
      <ul>
        <li><code>&lt;header&gt;</code> - Top section or heading</li>
        <li><code>&lt;nav&gt;</code> - Navigation links</li>
        <li><code>&lt;main&gt;</code> - Main content</li>
        <li><code>&lt;section&gt;</code> - Thematic grouping</li>
        <li><code>&lt;article&gt;</code> - Independent content</li>
        <li><code>&lt;aside&gt;</code> - Sidebar content</li>
        <li><code>&lt;footer&gt;</code> - Page/footer info</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>First Post</h2>
    <p>This is a blog post.</p>
  </article>
  <aside>
    <p>Related links</p>
  </aside>
</main>
<footer>
  <p>&copy; 2025 My Blog</p>
</footer>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border: "1px solid #ccc", padding: 12, background: "#fff"}}>
        <header style={{borderBottom: "1px solid #eee", paddingBottom: 4}}>
          <h1>My Blog</h1>
          <nav>
            <a href="#home">Home</a> | <a href="#about">About</a>
          </nav>
        </header>
        <main style={{display: "flex", gap: 20, margin: "1em 0"}}>
          <article style={{flex: 1}}>
            <h2>First Post</h2>
            <p>This is a blog post.</p>
          </article>
          <aside style={{width: 150, background: "#f7f7f7", padding: 8, borderRadius: 4}}>
            <p>Related links</p>
          </aside>
        </main>
        <footer style={{borderTop: "1px solid #eee", marginTop: 10, paddingTop: 4}}>
          <p>&copy; 2025 My Blog</p>
        </footer>
      </div>
      <p>
        <b>Tip:</b> Use semantic elements to make your pages more accessible and easier to maintain.
      </p>
    </div>
  );
}