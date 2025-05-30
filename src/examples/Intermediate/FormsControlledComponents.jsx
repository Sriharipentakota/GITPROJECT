import React, { useState } from "react";

/**
 * Forms and Controlled Components Example
 * ---------------------------------------
 * Demonstrates a controlled input where value is tied to state.
 */
export default function FormsControlledComponentsExample() {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You entered: " + value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type something:{" "}
        <input value={value} onChange={handleChange} />
      </label>
      <button type="submit" disabled={!value}>Submit</button>
    </form>
  );
}