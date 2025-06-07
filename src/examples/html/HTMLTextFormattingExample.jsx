import React from "react";

export default function HTMLTextFormattingExample() {
  return (
    <div>
      <h3>Text Formatting in HTML</h3>
      <p>
        HTML provides tags to format text for structure, emphasis, or style.
      </p>
      <ul>
        <li><code>&lt;b&gt;</code> or <code>&lt;strong&gt;</code> for <b>bold</b> text</li>
        <li><code>&lt;i&gt;</code> or <code>&lt;em&gt;</code> for <i>italic</i> text</li>
        <li><code>&lt;u&gt;</code> for <u>underlined</u> text</li>
        <li><code>&lt;mark&gt;</code> for <mark>highlighted</mark> text</li>
        <li><code>&lt;small&gt;</code> for <small>smaller</small> text</li>
        <li><code>&lt;del&gt;</code> for <del>deleted</del> text</li>
        <li><code>&lt;ins&gt;</code> for <ins>inserted</ins> text</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<p>This is <b>bold</b> and <i>italic</i> text.</p>
<p><u>Underlined</u> and <mark>highlighted</mark> text.</p>
<p><del>Deleted</del> and <ins>inserted</ins> text.</p>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border: "1px solid #ccc", padding: 12, background: "#fff", marginBottom: 8}}>
        <p>This is <b>bold</b> and <i>italic</i> text.</p>
        <p><u>Underlined</u> and <mark>highlighted</mark> text.</p>
        <p><del>Deleted</del> and <ins>inserted</ins> text.</p>
      </div>
      <p>
        <b>Tip:</b> Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for semantic emphasis, which helps with accessibility.
      </p>
    </div>
  );
}