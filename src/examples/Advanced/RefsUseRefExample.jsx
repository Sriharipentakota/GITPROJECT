import React, { useRef } from "react";

/**
 * Refs and useRef Hook Example
 * ----------------------------
 * Accesses and focuses an input directly.
 */
export default function RefsUseRefExample() {
  const inputRef = useRef();

  const focusInput = () => inputRef.current && inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput} style={{ marginLeft: 8 }}>
        Focus Input
      </button>
    </div>
  );
}