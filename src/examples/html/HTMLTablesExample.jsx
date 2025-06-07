import React from "react";

export default function HTMLTablesExample() {
  return (
    <div>
      <h3>HTML Tables</h3>
      <p>
        Tables organize data into rows and columns using tags like <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>.
      </p>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>24</td></tr>
    <tr><td>Bob</td><td>30</td></tr>
  </tbody>
</table>`}
      </pre>
      <h4>Live Render:</h4>
      <table style={{borderCollapse: "collapse", width: "60%"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid #888", padding: 6}}>Name</th>
            <th style={{border: "1px solid #888", padding: 6}}>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: "1px solid #888", padding: 6}}>Alice</td>
            <td style={{border: "1px solid #888", padding: 6}}>24</td>
          </tr>
          <tr>
            <td style={{border: "1px solid #888", padding: 6}}>Bob</td>
            <td style={{border: "1px solid #888", padding: 6}}>30</td>
          </tr>
        </tbody>
      </table>
      <p>
        <b>Tip:</b> Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;th&gt;</code> for better accessibility and styling.
      </p>
    </div>
  );
}