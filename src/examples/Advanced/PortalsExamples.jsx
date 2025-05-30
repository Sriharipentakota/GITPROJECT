import React, { useState } from "react";
import { createPortal } from "react-dom";

/**
 * Portals Example
 * ---------------
 * Renders a modal outside the parent DOM hierarchy.
 */
function Modal({ onClose, children }) {
  return createPortal(
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "#0008", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 9999
    }}>
      <div style={{ background: "#222", padding: 24, borderRadius: 8, minWidth: 240 }}>
        {children}
        <button onClick={onClose} style={{ marginTop: 16 }}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default function PortalsExample() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {open && <Modal onClose={() => setOpen(false)}>Hello from a Portal Modal!</Modal>}
    </div>
  );
}