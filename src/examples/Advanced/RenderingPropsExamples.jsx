import React from "react";

/**
 * Render Props Example
 * --------------------
 * A component provides a function as its child (the "render prop").
 */
function MouseTracker({ render }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  return (
    <div
      style={{ height: 100, border: "1px solid #aaa", marginTop: 8 }}
      onMouseMove={e => setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
    >
      {render(pos)}
    </div>
  );
}

export default function RenderPropsExample() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>Mouse position: {x}, {y}</div>
      )}
    />
  );
}