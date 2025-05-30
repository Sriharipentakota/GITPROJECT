import React, { useState } from "react";

/**
 * Lifting State Up Example
 * ------------------------
 * Two child components share state via their common parent.
 */
function TemperatureInput({ value, onChange, label }) {
  return (
    <div>
      <label>
        {label}: <input value={value} onChange={e => onChange(e.target.value)} />
      </label>
    </div>
  );
}

export default function LiftingStateUpExample() {
  const [temp, setTemp] = useState("");

  return (
    <div>
      <TemperatureInput value={temp} onChange={setTemp} label="Celsius" />
      <TemperatureInput value={temp && (temp * 9/5 + 32).toFixed(2)} onChange={() => {}} label="Fahrenheit" />
      <p>{temp && `That's ${(temp * 9/5 + 32).toFixed(2)}°F!`}</p>
    </div>
  );
}