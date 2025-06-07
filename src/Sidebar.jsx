import React, { useState, useEffect } from "react";

export default function Sidebar({title, groups, selected, onSelect, open, setOpen }) {
  const [openGroups, setOpenGroups] = useState(() =>
    groups?.reduce((acc, g) => ({ ...acc, [g.title]: true }), {})
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  // Update isMobile on window resize
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Sidebar overlay for mobile only */}
      {isMobile && open && (
        <div
          className="sidebar-overlay"
          style={{
            display: "block",
            position: "fixed",
            zIndex: 1001,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#0006"
          }}
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className="sidebar"
        style={{
          width: 300,
          background: "#222",
          color: "#fff",
          padding: "1rem 0.5rem",
          boxSizing: "border-box",
          overflowY: "auto",
          borderRight: "1px solid #111",
          height: "100vh",
          zIndex: 1002,
          position: "fixed",
          left: 0,
          top: 0,
          transition: "transform 0.25s",
          transform: isMobile
            ? open
              ? "translateX(0)"
              : "translateX(-105%)"
            : "none",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: 24, margin: "0 0 1.5rem" }}>
          {title || "Concepts"}
        </h1>
        {groups?.map((group) => (
          <div key={group.title}>
            <div
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                background: "#2d2d2d",
                borderRadius: 4,
                marginBottom: 2,
                marginTop: 8,
                userSelect: "none",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() =>
                setOpenGroups((g) => ({
                  ...g,
                  [group.title]: !g[group.title],
                }))
              }
            >
              <span
                style={{
                  marginRight: 8,
                  fontSize: 18,
                  display: "inline-block",
                  width: 20,
                }}
              >
                {openGroups[group.title] ? "▼" : "▶"}
              </span>
              {group.title}
            </div>
            {openGroups[group.title] && (
              <ul style={{ listStyle: "none", paddingLeft: 24, margin: 0 }}>
                {group.concepts.map((concept) => (
                  <li key={concept.title}>
                    <button
                      style={{
                        background:
                          selected.group === group.title &&
                            selected.concept.title === concept.title
                            ? "#0af"
                            : "transparent",
                        color:
                          selected.group === group.title &&
                            selected.concept.title === concept.title
                            ? "#fff"
                            : "#ddd",
                        border: "none",
                        padding: "0.5rem 0",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        fontSize: 16,
                        borderRadius: 3,
                        marginBottom: 1,
                      }}
                      onClick={() => {
                        onSelect(group.title, concept);
                        if (isMobile) setOpen(false); // Only close on mobile
                      }}
                    >
                      {concept.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <style>{`
          .sidebar {
            transition: transform 0.25s;
          }
          @media (max-width:700px) {
            .sidebar {
              position: fixed !important;
              height: 100vh;
              left: 0;
              top: 0;
              min-width: 220px;
              width: 80vw;
              max-width: 340px;
              box-shadow: 2px 0 12px #0002;
            }
          }
          @media (max-width:500px) {
            .sidebar {
              width: 96vw;
              max-width: 100vw;
              min-width: 150px;
            }
          }
        `}</style>
      </aside>
    </>
  );
}