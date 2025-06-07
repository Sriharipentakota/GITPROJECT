import React from "react";

export default function HTMLLinksMediaExample() {
  return (
    <div>
      <h3>Links and Media</h3>
      <p>
        HTML lets you add links, images, and embed videos or audio.
      </p>
      <ul>
        <li><code>&lt;a href=""&gt;</code> - Hyperlink</li>
        <li><code>&lt;img src="" alt=""&gt;</code> - Image</li>
        <li><code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> - Media playback</li>
        <li><code>&lt;iframe&gt;</code> - Embed external content</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<a href="https://www.example.com" target="_blank">Visit Example.com</a>
<img src="https://via.placeholder.com/100" alt="Placeholder" />
<video controls width="200">
  <source src="sample.mp4" type="video/mp4" />
  Your browser does not support video.
</video>
<iframe src="https://www.wikipedia.org" width="220" height="60" title="Wikipedia"></iframe>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border: "1px solid #ccc", padding: 12, background: "#fff"}}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>
        <br />
        <img src="https://via.placeholder.com/100" alt="Placeholder" style={{margin: "0.5em 0"}} />
        <br />
        {/* Video tag won't play without a source, so show as a disabled example */}
        <video controls width="200" style={{marginBottom: 8}}>
          <source src="" type="video/mp4" />
          Your browser does not support video.
        </video>
        <br />
        <iframe src="https://www.wikipedia.org" width="220" height="60" title="Wikipedia" style={{border: "1px solid #eee"}}></iframe>
      </div>
      <p>
        <b>Tip:</b> Always use the <code>alt</code> attribute for images to improve accessibility.
      </p>
    </div>
  );
}