

import React, { useState } from "react";

const DEFAULT_CSS = `
.flex-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.flex-item {
  background: #09c;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 2px;
}
`;

export default function CSSFlexboxExample() {
  const [css, setCss] = useState(DEFAULT_CSS);
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <h3>Flexbox</h3>
      <p>
        Flexbox makes 1D layouts easy. Use <code>display: flex</code> and control alignment with <code>justify-content</code> and <code>align-items</code>.
      </p>
      <button onClick={() => setEditing(e => !e)} style={{ marginBottom: 8 }}>
        {editing ? "Close Editor" : "Edit CSS"}
      </button>
      {editing && (
        <textarea
          value={css}
          onChange={e => setCss(e.target.value)}
          style={{ width: "100%", minHeight: 120, fontFamily: "monospace", marginBottom: 12 }}
        />
      )}
      <style>{css}</style>
      <div className="flex-container" style={{ marginBottom: 12 }}>
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>
      <pre style={{ background: '#f4f4f4', padding: 10, borderRadius: 6, whiteSpace: 'pre-wrap' }}>{css}</pre>
    </div>
  );
}