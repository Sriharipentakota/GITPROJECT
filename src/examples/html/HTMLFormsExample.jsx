import React from "react";

export default function HTMLFormsExample() {
  return (
    <div>
      <h3>HTML Forms & Inputs</h3>
      <p>
        Forms collect user input using tags like <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>, etc.
      </p>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<form>
  <label>Name: <input type="text" name="name" /></label>
  <label>Age: <input type="number" name="age" /></label>
  <label>
    Gender:
    <select name="gender">
      <option>Male</option>
      <option>Female</option>
    </select>
  </label>
  <button type="submit">Submit</button>
</form>`}
      </pre>
      <h4>Live Render:</h4>
      <form onSubmit={e => e.preventDefault()} style={{background: "#fff", padding: 16, borderRadius: 6, border: "1px solid #eee"}}>
        <label>
          Name:
          <input type="text" name="name" style={{margin: "0 8px 8px 4px"}} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" style={{margin: "0 8px 8px 4px"}} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" style={{margin: "0 8px 8px 4px"}}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        <b>Tip:</b> Always pair <code>&lt;label&gt;</code> with form controls for accessibility.
      </p>
    </div>
  );
}