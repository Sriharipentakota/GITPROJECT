import type { Concept } from '../types';

export const TYPESCRIPT_CONCEPTS: Concept[] = [
{
  id:'typebasics',
  title:'Type Annotations & Basic Types',
  icon:'🔷',
  explain:`<p><strong>TypeScript</strong> is a superset of JavaScript that adds a <em>static type system</em> checked at compile time. A <strong>type annotation</strong> tells the compiler what kind of value a variable, parameter, or return value should hold, using a colon followed by the type: <code>let age: number = 30;</code>.</p>
<p>TypeScript's basic types mirror JavaScript's runtime types plus a few compiler-only additions: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>symbol</code>, and the special types <code>any</code> (opts out of checking — avoid it), <code>unknown</code> (safe top type — must be narrowed before use), <code>void</code> (function returns nothing), and <code>never</code> (function never returns, e.g. it always throws).</p>
<p>Type checking happens only at <em>compile time</em> — annotations are erased when TypeScript compiles down to plain JavaScript. This means TypeScript catches type mistakes before your code ever runs, but it adds zero runtime overhead.</p>`,
  syntax:`<span class="kw">let</span> name: <span class="kw">string</span> = <span class="str">"Alice"</span>;
<span class="kw">let</span> age: <span class="kw">number</span> = <span class="num">30</span>;
<span class="kw">let</span> isActive: <span class="kw">boolean</span> = <span class="kw">true</span>;

<span class="cmt">// Special types</span>
<span class="kw">let</span> anything: <span class="kw">any</span>;      <span class="cmt">// opts out of checking — avoid</span>
<span class="kw">let</span> safe: <span class="kw">unknown</span>;      <span class="cmt">// must narrow before use</span>
<span class="kw">function</span> <span class="fn-name">log</span>(msg: <span class="kw">string</span>): <span class="kw">void</span> { <span class="cmt">// returns nothing</span>
  console.<span class="fn-name">log</span>(msg);
}
<span class="kw">function</span> <span class="fn-name">fail</span>(): <span class="kw">never</span> { <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"boom"</span>); }`,
  examples:[
    {label:'Basic annotated declarations',code:`<span class="kw">let</span> title: <span class="kw">string</span> = <span class="str">"Mastery Lab"</span>;
<span class="kw">let</span> version: <span class="kw">number</span> = <span class="num">5</span>;
<span class="kw">let</span> released: <span class="kw">boolean</span> = <span class="kw">true</span>;
<span class="cmt">// title = 42;  // ✗ Type 'number' is not assignable to 'string'</span>
console.<span class="fn-name">log</span>(title, version, released);`,out:'"Mastery Lab" 5 true'},
    {label:'any vs unknown safety',code:`<span class="kw">let</span> a: <span class="kw">any</span> = <span class="num">5</span>;
a.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// ✗ compiles, crashes at runtime</span>

<span class="kw">let</span> u: <span class="kw">unknown</span> = <span class="num">5</span>;
<span class="cmt">// u.toUpperCase();      // ✗ compile error: must narrow first</span>
<span class="kw">if</span> (<span class="kw">typeof</span> u === <span class="str">"string"</span>) {
  u.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// ✓ narrowed to string</span>
}`,out:'any: runtime crash | unknown: compile-time safety'},
    {label:'void and never in functions',code:`<span class="kw">function</span> <span class="fn-name">printLine</span>(msg: <span class="kw">string</span>): <span class="kw">void</span> {
  console.<span class="fn-name">log</span>(msg); <span class="cmt">// no return value</span>
}
<span class="kw">function</span> <span class="fn-name">assertNever</span>(x: <span class="kw">never</span>): <span class="kw">never</span> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"Unexpected: "</span> + x);
}
<span class="fn-name">printLine</span>(<span class="str">"Hello"</span>); <span class="cmt">// "Hello"</span>`,out:'"Hello"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="tb-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/>
    </marker>
  </defs>
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="13" font-family="monospace" font-weight="bold">Type Annotation Anatomy</text>
  <rect x="60" y="35" width="90" height="34" rx="5" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="105" y="57" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="monospace">let age</text>
  <text x="150" y="57" fill="#9aa5b4" font-size="14" font-family="monospace">:</text>
  <rect x="165" y="35" width="80" height="34" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="205" y="57" text-anchor="middle" fill="#4ade80" font-size="12" font-family="monospace">number</text>
  <text x="255" y="57" fill="#9aa5b4" font-size="14" font-family="monospace">=</text>
  <rect x="270" y="35" width="60" height="34" rx="5" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="300" y="57" text-anchor="middle" fill="#f78c6c" font-size="12" font-family="monospace">30</text>
  <text x="105" y="82" text-anchor="middle" fill="#5c6878" font-size="10">identifier</text>
  <text x="205" y="82" text-anchor="middle" fill="#5c6878" font-size="10">type annotation</text>
  <text x="300" y="82" text-anchor="middle" fill="#5c6878" font-size="10">value</text>
  <line x1="60" y1="110" x2="420" y2="110" stroke="#2d3456" stroke-width="1"/>
  <rect x="20" y="125" width="100" height="30" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="70" y="145" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">any</text>
  <rect x="135" y="125" width="100" height="30" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="185" y="145" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">unknown</text>
  <rect x="250" y="125" width="100" height="30" rx="4" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="300" y="145" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">void</text>
  <rect x="365" y="125" width="100" height="30" rx="4" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="415" y="145" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">never</text>
  <text x="70" y="172" text-anchor="middle" fill="#5c6878" font-size="9">no checking</text>
  <text x="185" y="172" text-anchor="middle" fill="#5c6878" font-size="9">must narrow</text>
  <text x="300" y="172" text-anchor="middle" fill="#5c6878" font-size="9">returns nothing</text>
  <text x="415" y="172" text-anchor="middle" fill="#5c6878" font-size="9">never returns</text>
  <text x="240" y="198" text-anchor="middle" fill="#5c6878" font-size="10">Compile-time checks — erased at runtime</text>
</svg>`,
  analogy:`<div class="analogy-icon">🏷️</div>
<p>Type annotations are like <strong>shipping labels on boxes</strong>. Before a package leaves the warehouse (before your code compiles), the label declares exactly what's supposed to be inside — "books," "fragile glass," "liquids." If someone tries to put the wrong item in a labeled box, the inspector (the TypeScript compiler) catches it before the truck ever leaves. <code>any</code> is an unlabeled box nobody inspects; <code>unknown</code> is a sealed box you must open and verify before using what's inside.</p>`,
  flow:[
    '<span><strong>Write annotation:</strong> Declare the expected type after a colon — <code>let age: number;</code></span>',
    '<span><strong>Assign a value:</strong> TypeScript checks the value matches the declared type — <code>age = 30;</code></span>',
    '<span><strong>Compiler verifies:</strong> Any mismatch (e.g. <code>age = "old"</code>) is flagged as a compile-time error, before running</span>',
    '<span><strong>Type erasure:</strong> During compilation to JS, all annotations are stripped — <code>tsc</code> outputs plain <code>let age = 30;</code></span>',
    '<span><strong>Runtime behaves like JS:</strong> At runtime there is no type information left — types exist only to help you during development</span>',
  ]
},
{
  id:'interfaces',
  title:'Interfaces & Type Aliases',
  icon:'📐',
  explain:`<p>An <strong>interface</strong> describes the <em>shape</em> of an object — which properties it must have and what type each property is. A <strong>type alias</strong> (<code>type</code>) gives a name to any type, including object shapes, unions, tuples, or primitives. Both let you write <code>function greet(user: User)</code> instead of repeating the full shape everywhere.</p>
<p>Interfaces and type aliases overlap heavily for object shapes, but differ in a few ways: interfaces support <strong>declaration merging</strong> (declaring the same interface twice merges the members) and are extended with <code>extends</code>; type aliases use <code>&</code> (intersection) to combine and can also name unions, tuples, and primitives, which interfaces cannot. As a rule of thumb: prefer <code>interface</code> for public object/class shapes, and <code>type</code> for unions, tuples, or utility compositions.</p>
<p>Properties can be marked <strong>optional</strong> with <code>?</code> (<code>age?: number</code>) or <strong>readonly</strong> (<code>readonly id: number</code>, which can be set once — usually at construction — and never reassigned after).</p>`,
  syntax:`<span class="kw">interface</span> User {
  id: <span class="kw">number</span>;
  name: <span class="kw">string</span>;
  email<span class="op">?</span>: <span class="kw">string</span>;       <span class="cmt">// optional property</span>
  <span class="kw">readonly</span> createdAt: <span class="kw">Date</span>; <span class="cmt">// set once</span>
}

<span class="kw">interface</span> Admin <span class="kw">extends</span> User {
  permissions: <span class="kw">string</span>[];
}

<span class="kw">type</span> ID = <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>;   <span class="cmt">// type alias for a union</span>
<span class="kw">type</span> Point = { x: <span class="kw">number</span>; y: <span class="kw">number</span> };`,
  examples:[
    {label:'Interface with optional & readonly',code:`<span class="kw">interface</span> Product {
  <span class="kw">readonly</span> sku: <span class="kw">string</span>;
  name: <span class="kw">string</span>;
  discount<span class="op">?</span>: <span class="kw">number</span>;
}
<span class="kw">const</span> item: Product = { sku: <span class="str">"A1"</span>, name: <span class="str">"Mug"</span> };
<span class="cmt">// item.sku = "B2";  // ✗ Cannot assign to 'sku' (readonly)</span>
console.<span class="fn-name">log</span>(item.discount); <span class="cmt">// undefined (optional, not set)</span>`,out:'undefined'},
    {label:'Interface extends (inheritance)',code:`<span class="kw">interface</span> Animal { name: <span class="kw">string</span>; }
<span class="kw">interface</span> Dog <span class="kw">extends</span> Animal { breed: <span class="kw">string</span>; }

<span class="kw">const</span> pet: Dog = { name: <span class="str">"Rex"</span>, breed: <span class="str">"Lab"</span> };
console.<span class="fn-name">log</span>(pet.name, pet.breed); <span class="cmt">// "Rex" "Lab"</span>`,out:'"Rex" "Lab"'},
    {label:'Type alias: union, tuple & intersection',code:`<span class="kw">type</span> Status = <span class="str">"idle"</span> <span class="op">|</span> <span class="str">"loading"</span> <span class="op">|</span> <span class="str">"done"</span>;
<span class="kw">type</span> Pair = [<span class="kw">string</span>, <span class="kw">number</span>];   <span class="cmt">// tuple alias</span>

<span class="kw">type</span> Named = { name: <span class="kw">string</span> };
<span class="kw">type</span> Aged = { age: <span class="kw">number</span> };
<span class="kw">type</span> Person = Named <span class="op">&</span> Aged; <span class="cmt">// intersection</span>

<span class="kw">const</span> p: Person = { name: <span class="str">"Bo"</span>, age: <span class="num">9</span> };
console.<span class="fn-name">log</span>(p); <span class="cmt">// { name: "Bo", age: 9 }</span>`,out:'{ name: "Bo", age: 9 }'},
  ],
  svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="if-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <rect x="20" y="20" width="180" height="110" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="110" y="40" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="monospace">interface User</text>
  <line x1="20" y1="48" x2="200" y2="48" stroke="#2d3456" stroke-width="1"/>
  <text x="32" y="65" fill="#e8eaed" font-size="10" font-family="monospace">id: number</text>
  <text x="32" y="80" fill="#e8eaed" font-size="10" font-family="monospace">name: string</text>
  <text x="32" y="95" fill="#fbbf24" font-size="10" font-family="monospace">email?: string</text>
  <text x="32" y="110" fill="#c792ea" font-size="10" font-family="monospace">readonly id</text>
  <line x1="200" y1="70" x2="240" y2="70" stroke="#4ade80" stroke-width="1.5" marker-end="url(#if-arr)"/>
  <text x="220" y="62" fill="#4ade80" font-size="9">extends</text>
  <rect x="240" y="35" width="180" height="70" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="330" y="55" text-anchor="middle" fill="#4ade80" font-size="12" font-family="monospace">interface Admin</text>
  <text x="252" y="75" fill="#e8eaed" font-size="10" font-family="monospace">...all of User</text>
  <text x="252" y="90" fill="#e8eaed" font-size="10" font-family="monospace">permissions: string[]</text>
  <rect x="20" y="150" width="200" height="50" rx="6" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="120" y="170" text-anchor="middle" fill="#f78c6c" font-size="11" font-family="monospace">type ID = string | number</text>
  <text x="120" y="187" text-anchor="middle" fill="#5c6878" font-size="9">union — either shape</text>
  <rect x="240" y="150" width="220" height="50" rx="6" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="350" y="170" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">type Person = Named &amp; Aged</text>
  <text x="350" y="187" text-anchor="middle" fill="#5c6878" font-size="9">intersection — both shapes</text>
</svg>`,
  analogy:`<div class="analogy-icon">📋</div>
<p>An interface is like a <strong>job application form</strong> — it lists required fields (name, email) and optional ones (middle name, marked with <code>?</code>). Anyone filling out the form (any object) must include every required field with the right kind of answer, or the form gets rejected. A <strong>type alias</strong> is more like a <strong>nickname for a concept</strong> — you can name a single shape, a menu of choices ("small, medium, or large"), or a combo meal (an intersection of two forms merged into one).</p>`,
  flow:[
    '<span><strong>Define the shape:</strong> Declare an <code>interface</code> or <code>type</code> describing required and optional properties</span>',
    '<span><strong>Annotate a value:</strong> Use the name as a type — <code>const user: User = {...}</code></span>',
    '<span><strong>Structural check:</strong> TypeScript verifies the object has all required properties with matching types (structural typing — exact name doesn\'t matter, shape does)</span>',
    '<span><strong>Extend or combine:</strong> Build richer types with <code>extends</code> (interfaces) or <code>&</code> intersections (type aliases)</span>',
    '<span><strong>Reuse everywhere:</strong> Import the same interface/type across functions, components, and files for one consistent contract</span>',
  ]
},
{
  id:'functiontypes',
  title:'Functions & Function Types',
  icon:'🔧',
  explain:`<p>TypeScript lets you annotate a function's <strong>parameters</strong> and <strong>return type</strong>, so the compiler verifies every call site passes the right arguments and every caller receives the right kind of result: <code>function add(a: number, b: number): number</code>.</p>
<p>Parameters can be marked <strong>optional</strong> with <code>?</code> (must come after required ones), given a <strong>default value</strong> (making them optional automatically), or collected as <strong>rest parameters</strong> typed as an array (<code>...nums: number[]</code>). A <em>function type</em> describes the shape of a callback itself, e.g. <code>type Callback = (err: Error | null, data: string) => void</code>, which is invaluable for typing arguments like event handlers or array callbacks.</p>
<p><strong>Overloads</strong> let a single function accept different combinations of argument types with different return types, by declaring multiple call signatures above one implementation. This is more precise than a single union-typed signature when the relationship between input and output type varies by call shape.</p>`,
  syntax:`<span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): <span class="kw">number</span> {
  <span class="kw">return</span> a + b;
}

<span class="cmt">// Optional & default params</span>
<span class="kw">function</span> <span class="fn-name">greet</span>(name: <span class="kw">string</span>, title<span class="op">?</span>: <span class="kw">string</span>): <span class="kw">string</span> { <span class="cmt">/*..*/</span> }
<span class="kw">function</span> <span class="fn-name">pow</span>(base: <span class="kw">number</span>, exp: <span class="kw">number</span> = <span class="num">2</span>): <span class="kw">number</span> { <span class="cmt">/*..*/</span> }

<span class="cmt">// Function type alias</span>
<span class="kw">type</span> BinaryOp = (a: <span class="kw">number</span>, b: <span class="kw">number</span>) <span class="op">=></span> <span class="kw">number</span>;
<span class="kw">const</span> multiply: BinaryOp = (a, b) <span class="op">=></span> a * b;

<span class="cmt">// Overloads</span>
<span class="kw">function</span> <span class="fn-name">parse</span>(v: <span class="kw">string</span>): <span class="kw">number</span>;
<span class="kw">function</span> <span class="fn-name">parse</span>(v: <span class="kw">number</span>): <span class="kw">string</span>;`,
  examples:[
    {label:'Typed params, optional & default',code:`<span class="kw">function</span> <span class="fn-name">greet</span>(name: <span class="kw">string</span>, title<span class="op">?</span>: <span class="kw">string</span>): <span class="kw">string</span> {
  <span class="kw">return</span> title <span class="op">?</span> <span class="op">\`</span>Hello, <span class="op">\${</span>title<span class="op">}</span> <span class="op">\${</span>name<span class="op">}\`</span> : <span class="op">\`</span>Hello, <span class="op">\${</span>name<span class="op">}\`</span>;
}
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Sam"</span>));           <span class="cmt">// "Hello, Sam"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Sam"</span>, <span class="str">"Dr."</span>));    <span class="cmt">// "Hello, Dr. Sam"</span>`,out:'"Hello, Sam" | "Hello, Dr. Sam"'},
    {label:'Function type alias for a callback',code:`<span class="kw">type</span> Comparator = (a: <span class="kw">number</span>, b: <span class="kw">number</span>) <span class="op">=></span> <span class="kw">number</span>;

<span class="kw">function</span> <span class="fn-name">sortNums</span>(arr: <span class="kw">number</span>[], cmp: Comparator): <span class="kw">number</span>[] {
  <span class="kw">return</span> [...arr].<span class="fn-name">sort</span>(cmp);
}
console.<span class="fn-name">log</span>(<span class="fn-name">sortNums</span>([<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>], (a,b) <span class="op">=></span> a - b)); <span class="cmt">// [1,2,3]</span>`,out:'[1, 2, 3]'},
    {label:'Overloaded function signatures',code:`<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">string</span>): <span class="kw">string</span>;
<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">number</span>): <span class="kw">string</span>;
<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">return</span> <span class="op">\`</span>id-<span class="op">\${</span>value<span class="op">}\`</span>;
}
console.<span class="fn-name">log</span>(<span class="fn-name">makeId</span>(<span class="num">42</span>));    <span class="cmt">// "id-42"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">makeId</span>(<span class="str">"x"</span>));   <span class="cmt">// "id-x"</span>`,out:'"id-42" | "id-x"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ft-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">function add(a: number, b: number): number</text>
  <rect x="30" y="35" width="150" height="40" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="105" y="59" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">a: number, b: number</text>
  <line x1="180" y1="55" x2="220" y2="55" stroke="#5c6878" stroke-width="1.5" marker-end="url(#ft-arr)"/>
  <rect x="220" y="35" width="100" height="40" rx="5" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="270" y="59" text-anchor="middle" fill="#f5a623" font-size="11">function body</text>
  <line x1="320" y1="55" x2="360" y2="55" stroke="#5c6878" stroke-width="1.5" marker-end="url(#ft-arr)"/>
  <rect x="360" y="35" width="100" height="40" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="410" y="59" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">: number</text>
  <text x="105" y="90" text-anchor="middle" fill="#5c6878" font-size="9">params</text>
  <text x="410" y="90" text-anchor="middle" fill="#5c6878" font-size="9">return type</text>
  <line x1="20" y1="110" x2="460" y2="110" stroke="#2d3456" stroke-width="1"/>
  <rect x="30" y="125" width="200" height="60" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="130" y="145" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">type Comparator =</text>
  <text x="130" y="162" text-anchor="middle" fill="#e8eaed" font-size="10" font-family="monospace">(a,b: number) =&gt; number</text>
  <text x="130" y="178" text-anchor="middle" fill="#5c6878" font-size="9">function type alias</text>
  <rect x="260" y="125" width="200" height="60" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="360" y="145" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">overload signatures</text>
  <text x="360" y="162" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">(string)=&gt;number</text>
  <text x="360" y="176" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">(number)=&gt;string</text>
</svg>`,
  analogy:`<div class="analogy-icon">🔌</div>
<p>A typed function is like an <strong>electrical adapter with labeled plugs</strong>. The input side (parameters) only accepts specific plug shapes — you can't force a round pin into a rectangular slot. The output side (return type) guarantees a specific voltage comes out. A <strong>function type alias</strong> is the adapter's spec sheet — you can hand that spec to anyone and say "build me any adapter matching this," and swap in different callbacks as long as they fit the same plug shape.</p>`,
  flow:[
    '<span><strong>Declare parameters:</strong> Annotate each parameter\'s type — <code>(a: number, b: number)</code></span>',
    '<span><strong>Declare return type:</strong> State what the function produces — <code>: number</code></span>',
    '<span><strong>Compiler checks call sites:</strong> Every call is validated for correct argument count and types</span>',
    '<span><strong>Optional/default params resolved:</strong> Omitted optional args become <code>undefined</code>; omitted defaulted args use the default expression</span>',
    '<span><strong>Return value validated:</strong> Whatever the function returns must match the declared return type, or the compiler flags it</span>',
  ]
},
{
  id:'arraystuples',
  title:'Arrays, Tuples & Enums',
  icon:'📚',
  explain:`<p>TypeScript types an <strong>array</strong> as <code>number[]</code> or the equivalent generic form <code>Array&lt;number&gt;</code> — every element must match that element type. A <strong>tuple</strong> is a fixed-length array where each position has its <em>own</em> type, written <code>[string, number]</code> — perfect for a pair like a name and an age, or a React <code>useState</code> return value.</p>
<p>Tuples can mark trailing elements <strong>optional</strong> (<code>[string, number?]</code>) or use a <strong>rest element</strong> for a variable-length tail (<code>[string, ...number[]]</code>). Unlike a plain array, a tuple enforces both length and per-position type, so destructuring <code>const [name, age] = pair;</code> gives <code>name: string</code> and <code>age: number</code> automatically.</p>
<p>An <strong>enum</strong> defines a named set of constant values, useful for a fixed set of options like directions or statuses. Numeric enums auto-increment from <code>0</code> unless given explicit values; <strong>string enums</strong> require every member to have an explicit string value and are generally preferred because they produce more readable compiled output and safer debugging.</p>`,
  syntax:`<span class="kw">let</span> nums: <span class="kw">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">let</span> names: <span class="kw">Array</span><<span class="kw">string</span>> = [<span class="str">"a"</span>, <span class="str">"b"</span>];

<span class="cmt">// Tuple — fixed length, per-position types</span>
<span class="kw">let</span> pair: [<span class="kw">string</span>, <span class="kw">number</span>] = [<span class="str">"Bo"</span>, <span class="num">9</span>];
<span class="kw">let</span> withRest: [<span class="kw">string</span>, ...<span class="kw">number</span>[]] = [<span class="str">"scores"</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

<span class="cmt">// Enum</span>
<span class="kw">enum</span> Direction { Up, Down, Left, Right }   <span class="cmt">// 0,1,2,3</span>
<span class="kw">enum</span> Status { Idle = <span class="str">"IDLE"</span>, Done = <span class="str">"DONE"</span> } <span class="cmt">// string enum</span>`,
  examples:[
    {label:'Typed arrays vs tuples',code:`<span class="kw">let</span> scores: <span class="kw">number</span>[] = [<span class="num">90</span>, <span class="num">85</span>, <span class="num">77</span>];
scores.<span class="fn-name">push</span>(<span class="num">100</span>);        <span class="cmt">// ✓ any length OK</span>

<span class="kw">let</span> entry: [<span class="kw">string</span>, <span class="kw">number</span>] = [<span class="str">"Alice"</span>, <span class="num">90</span>];
<span class="cmt">// entry = ["Alice", 90, 1]; // ✗ too many elements</span>
<span class="kw">const</span> [name, score] = entry; <span class="cmt">// name: string, score: number</span>
console.<span class="fn-name">log</span>(name, score); <span class="cmt">// "Alice" 90</span>`,out:'"Alice" 90'},
    {label:'Optional & rest tuple elements',code:`<span class="kw">type</span> Coord = [<span class="kw">number</span>, <span class="kw">number</span>, <span class="kw">number</span><span class="op">?</span>]; <span class="cmt">// z is optional</span>
<span class="kw">const</span> a2d: Coord = [<span class="num">10</span>, <span class="num">20</span>];
<span class="kw">const</span> a3d: Coord = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];

<span class="kw">type</span> Row = [<span class="kw">string</span>, ...<span class="kw">number</span>[]];
<span class="kw">const</span> row: Row = [<span class="str">"Q1"</span>, <span class="num">100</span>, <span class="num">200</span>, <span class="num">300</span>];
console.<span class="fn-name">log</span>(a2d.length, row.length); <span class="cmt">// 2 4</span>`,out:'2 4'},
    {label:'Numeric vs string enums',code:`<span class="kw">enum</span> Direction { Up, Down, Left, Right }
console.<span class="fn-name">log</span>(Direction.Up, Direction.Right); <span class="cmt">// 0 3</span>

<span class="kw">enum</span> Status { Idle = <span class="str">"IDLE"</span>, Loading = <span class="str">"LOADING"</span> }
<span class="kw">let</span> s: Status = Status.Loading;
console.<span class="fn-name">log</span>(s); <span class="cmt">// "LOADING" — readable at runtime</span>`,out:'0 3 | "LOADING"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Array vs Tuple vs Enum</text>
  <rect x="15" y="30" width="140" height="60" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="85" y="48" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">number[]</text>
  <rect x="24" y="56" width="24" height="24" fill="#252b44" stroke="#60a5fa"/><text x="36" y="72" text-anchor="middle" fill="#e8eaed" font-size="9">1</text>
  <rect x="52" y="56" width="24" height="24" fill="#252b44" stroke="#60a5fa"/><text x="64" y="72" text-anchor="middle" fill="#e8eaed" font-size="9">2</text>
  <rect x="80" y="56" width="24" height="24" fill="#252b44" stroke="#60a5fa"/><text x="92" y="72" text-anchor="middle" fill="#e8eaed" font-size="9">3</text>
  <text x="120" y="72" fill="#5c6878" font-size="14">…</text>
  <rect x="170" y="30" width="140" height="60" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="240" y="48" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">[string, number]</text>
  <rect x="180" y="56" width="50" height="24" fill="#252b44" stroke="#4ade80"/><text x="205" y="72" text-anchor="middle" fill="#e8eaed" font-size="9">"Bo"</text>
  <rect x="234" y="56" width="34" height="24" fill="#252b44" stroke="#f78c6c"/><text x="251" y="72" text-anchor="middle" fill="#e8eaed" font-size="9">9</text>
  <text x="240" y="98" text-anchor="middle" fill="#5c6878" font-size="9">fixed length, mixed types</text>
  <rect x="325" y="30" width="140" height="70" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="395" y="48" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">enum Direction</text>
  <text x="335" y="65" fill="#e8eaed" font-size="10" font-family="monospace">Up = 0</text>
  <text x="335" y="80" fill="#e8eaed" font-size="10" font-family="monospace">Down = 1</text>
  <text x="335" y="95" fill="#e8eaed" font-size="10" font-family="monospace">Left = 2 …</text>
  <text x="85" y="100" text-anchor="middle" fill="#5c6878" font-size="9">any length, one type</text>
  <line x1="15" y1="120" x2="465" y2="120" stroke="#2d3456" stroke-width="1"/>
  <rect x="60" y="135" width="180" height="50" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="150" y="155" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">enum Status { Idle = "IDLE" }</text>
  <text x="150" y="172" text-anchor="middle" fill="#5c6878" font-size="9">string enum — readable at runtime</text>
  <rect x="260" y="135" width="180" height="50" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="350" y="155" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">const [a, b] = tuple</text>
  <text x="350" y="172" text-anchor="middle" fill="#5c6878" font-size="9">destructure with inferred types</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎒</div>
<p>An <strong>array</strong> is a backpack that only holds one kind of item — all textbooks, or all pencils — and can hold any number of them. A <strong>tuple</strong> is a labeled egg carton with fixed slots: slot 1 always holds a name tag, slot 2 always holds a number, no more, no less. An <strong>enum</strong> is a multiple-choice answer sheet — instead of letting someone type any string for "status," they must pick from a pre-printed, named list of valid bubbles.</p>`,
  flow:[
    '<span><strong>Choose the shape:</strong> Use <code>T[]</code> for a same-typed, variable-length list; use a tuple for a fixed-position, mixed-type record</span>',
    '<span><strong>Annotate array or tuple:</strong> <code>let nums: number[]</code> vs <code>let pair: [string, number]</code></span>',
    '<span><strong>Compiler enforces shape:</strong> Arrays check every element type; tuples check both position and length</span>',
    '<span><strong>Destructure with confidence:</strong> <code>const [name, age] = pair;</code> infers each variable type from its tuple position</span>',
    '<span><strong>Enums replace magic values:</strong> Swap loose strings/numbers for named members — <code>Status.Loading</code> instead of the string <code>"loading"</code> scattered everywhere</span>',
  ]
},
{
  id:'uniontypes',
  title:'Union & Intersection Types',
  icon:'🔀',
  explain:`<p>A <strong>union type</strong> (<code>A | B</code>) means a value can be <em>one of several</em> types — "a string OR a number." Unions are how TypeScript models real-world variability, like a function parameter that accepts either an <code>id: string</code> or an <code>id: number</code>, or a <code>result</code> that is either data or an error.</p>
<p>An <strong>intersection type</strong> (<code>A & B</code>) means a value must satisfy <em>all</em> combined types at once — it merges every member from each type into one. Intersections are commonly used to compose smaller object shapes into a richer one, such as combining a <code>Timestamped</code> shape with a <code>Named</code> shape.</p>
<p>A special, very common union is the <strong>literal union</strong> — a fixed menu of exact string or number values, e.g. <code>type Size = "small" | "medium" | "large"</code>. This gives you compile-time-checked "enums" without the runtime overhead of an actual <code>enum</code>, and pairs naturally with <code>switch</code> statements for exhaustive handling.</p>`,
  syntax:`<span class="kw">type</span> ID = <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>;         <span class="cmt">// union — either type</span>
<span class="kw">type</span> Size = <span class="str">"sm"</span> <span class="op">|</span> <span class="str">"md"</span> <span class="op">|</span> <span class="str">"lg"</span>; <span class="cmt">// literal union</span>

<span class="kw">function</span> <span class="fn-name">printId</span>(id: ID) { console.<span class="fn-name">log</span>(id); }

<span class="kw">interface</span> Timestamped { createdAt: <span class="kw">Date</span>; }
<span class="kw">interface</span> Named { name: <span class="kw">string</span>; }
<span class="kw">type</span> Entity = Timestamped <span class="op">&</span> Named; <span class="cmt">// intersection — both</span>

<span class="kw">const</span> e: Entity = { name: <span class="str">"Doc"</span>, createdAt: <span class="kw">new</span> <span class="fn-name">Date</span>() };`,
  examples:[
    {label:'Union parameter accepting two types',code:`<span class="kw">function</span> <span class="fn-name">formatId</span>(id: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> id === <span class="str">"number"</span>) <span class="kw">return</span> <span class="str">"#"</span> + id;
  <span class="kw">return</span> id.<span class="fn-name">toUpperCase</span>();
}
console.<span class="fn-name">log</span>(<span class="fn-name">formatId</span>(<span class="num">42</span>));    <span class="cmt">// "#42"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">formatId</span>(<span class="str">"abc"</span>)); <span class="cmt">// "ABC"</span>`,out:'"#42" | "ABC"'},
    {label:'Literal union for a fixed menu',code:`<span class="kw">type</span> Size = <span class="str">"sm"</span> <span class="op">|</span> <span class="str">"md"</span> <span class="op">|</span> <span class="str">"lg"</span>;

<span class="kw">function</span> <span class="fn-name">padding</span>(size: Size): <span class="kw">number</span> {
  <span class="kw">if</span> (size === <span class="str">"sm"</span>) <span class="kw">return</span> <span class="num">4</span>;
  <span class="kw">if</span> (size === <span class="str">"md"</span>) <span class="kw">return</span> <span class="num">8</span>;
  <span class="kw">return</span> <span class="num">16</span>;
}
<span class="cmt">// padding("xl"); // ✗ Argument not assignable to type 'Size'</span>
console.<span class="fn-name">log</span>(<span class="fn-name">padding</span>(<span class="str">"md"</span>)); <span class="cmt">// 8</span>`,out:'8'},
    {label:'Intersection combining two shapes',code:`<span class="kw">interface</span> Sized { width: <span class="kw">number</span>; height: <span class="kw">number</span>; }
<span class="kw">interface</span> Colored { color: <span class="kw">string</span>; }
<span class="kw">type</span> Box = Sized <span class="op">&</span> Colored;

<span class="kw">const</span> box: Box = { width: <span class="num">10</span>, height: <span class="num">20</span>, color: <span class="str">"red"</span> };
<span class="cmt">// missing any property → compile error</span>
console.<span class="fn-name">log</span>(box); <span class="cmt">// { width:10, height:20, color:"red" }</span>`,out:'{ width: 10, height: 20, color: "red" }'},
  ],
  svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <text x="120" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Union: A | B</text>
  <circle cx="90" cy="90" r="55" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5" opacity="0.85"/>
  <circle cx="150" cy="90" r="55" fill="#1e2338" stroke="#4ade80" stroke-width="1.5" opacity="0.85"/>
  <text x="70" y="95" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="monospace">string</text>
  <text x="170" y="95" text-anchor="middle" fill="#4ade80" font-size="12" font-family="monospace">number</text>
  <text x="120" y="165" text-anchor="middle" fill="#9aa5b4" font-size="10">value is EITHER shape</text>
  <text x="360" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Intersection: A &amp; B</text>
  <circle cx="330" cy="90" r="55" fill="#1e2338" stroke="#c792ea" stroke-width="1.5" opacity="0.6"/>
  <circle cx="390" cy="90" r="55" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5" opacity="0.6"/>
  <text x="310" y="70" fill="#c792ea" font-size="11" font-family="monospace">Named</text>
  <text x="385" y="70" fill="#f78c6c" font-size="11" font-family="monospace">Timed</text>
  <text x="360" y="98" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">both merged</text>
  <text x="360" y="165" text-anchor="middle" fill="#9aa5b4" font-size="10">value has BOTH shapes</text>
</svg>`,
  analogy:`<div class="analogy-icon">🚪</div>
<p>A <strong>union type</strong> is like a <strong>door with two possible keys</strong> — a brass key or a silver key opens it, but you only ever bring one. A <strong>literal union</strong> is a specific keyring with exactly three labeled keys ("small," "medium," "large") and nothing else fits the lock. An <strong>intersection type</strong> is the opposite: it's a <strong>combo badge</strong> that must show both your employee ID AND your parking permit stamped on the same card — missing either half makes the badge invalid.</p>`,
  flow:[
    '<span><strong>Model the possibilities:</strong> Write <code>A | B</code> when a value can legitimately be either type</span>',
    '<span><strong>Narrow before use:</strong> Use <code>typeof</code>, <code>in</code>, or equality checks to figure out which member of the union you actually have</span>',
    '<span><strong>Compiler restricts access:</strong> Only properties/methods common to every union member are allowed without narrowing first</span>',
    '<span><strong>Model required combinations:</strong> Write <code>A & B</code> when a value must satisfy every listed shape simultaneously</span>',
    '<span><strong>Merge resolves to one type:</strong> The intersection resulting shape includes all properties from every combined type — missing any one is a compile error</span>',
  ]
},
{
  id:'narrowing',
  title:'Type Narrowing & Guards',
  icon:'🔍',
  explain:`<p><strong>Type narrowing</strong> is how TypeScript progressively refines a broad type (like a union) down to a more specific one, based on runtime checks in your code. Once you write <code>if (typeof x === "string")</code>, TypeScript knows that inside that branch, <code>x</code> is definitely a <code>string</code> — and lets you call <code>x.toUpperCase()</code> safely.</p>
<p>Common narrowing techniques include <code>typeof</code> (for primitives), <code>instanceof</code> (for class instances), the <code>in</code> operator (checking whether a property exists on an object), and simple equality/truthiness checks. For discriminated unions — object types sharing one literal "tag" property like <code>kind: "circle" | "square"</code> — switching on that tag narrows the whole object at once.</p>
<p>A <strong>custom type guard</strong> is a function whose return type is a <em>type predicate</em>: <code>function isFish(x: Animal): x is Fish</code>. Calling it inside an <code>if</code> narrows the checked variable in the same way built-in guards do, letting you encapsulate complex narrowing logic into a reusable, named function.</p>`,
  syntax:`<span class="kw">function</span> <span class="fn-name">print</span>(x: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">"string"</span>) x.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// x: string</span>
  <span class="kw">else</span> x.<span class="fn-name">toFixed</span>(<span class="num">2</span>);                    <span class="cmt">// x: number</span>
}

<span class="kw">if</span> (value <span class="kw">instanceof</span> <span class="fn-name">Error</span>) { <span class="cmt">/* value: Error */</span> }
<span class="kw">if</span> (<span class="str">"bark"</span> <span class="kw">in</span> animal) { <span class="cmt">/* animal has bark() */</span> }

<span class="cmt">// Custom type guard (type predicate)</span>
<span class="kw">function</span> <span class="fn-name">isFish</span>(a: Fish <span class="op">|</span> Bird): a <span class="kw">is</span> Fish {
  <span class="kw">return</span> (a <span class="kw">as</span> Fish).swim <span class="op">!==</span> <span class="kw">undefined</span>;
}`,
  examples:[
    {label:'typeof narrowing',code:`<span class="kw">function</span> <span class="fn-name">describe</span>(x: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">"string"</span>) {
    <span class="kw">return</span> <span class="str">"text: "</span> + x.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// x is string here</span>
  }
  <span class="kw">return</span> <span class="str">"num: "</span> + x.<span class="fn-name">toFixed</span>(<span class="num">1</span>);   <span class="cmt">// x is number here</span>
}
console.<span class="fn-name">log</span>(<span class="fn-name">describe</span>(<span class="str">"hi"</span>), <span class="fn-name">describe</span>(<span class="num">3</span>)); <span class="cmt">// "text: HI" "num: 3.0"</span>`,out:'"text: HI" "num: 3.0"'},
    {label:'Discriminated union narrowed by switch',code:`<span class="kw">type</span> Shape =
  | { kind: <span class="str">"circle"</span>; radius: <span class="kw">number</span> }
  | { kind: <span class="str">"square"</span>; side: <span class="kw">number</span> };

<span class="kw">function</span> <span class="fn-name">area</span>(s: Shape): <span class="kw">number</span> {
  <span class="kw">switch</span> (s.kind) {
    <span class="kw">case</span> <span class="str">"circle"</span>: <span class="kw">return</span> Math.PI * s.radius ** <span class="num">2</span>;
    <span class="kw">case</span> <span class="str">"square"</span>: <span class="kw">return</span> s.side ** <span class="num">2</span>;
  }
}
console.<span class="fn-name">log</span>(<span class="fn-name">area</span>({ kind: <span class="str">"square"</span>, side: <span class="num">4</span> })); <span class="cmt">// 16</span>`,out:'16'},
    {label:'Custom type guard (type predicate)',code:`<span class="kw">interface</span> Fish { swim(): <span class="kw">void</span>; }
<span class="kw">interface</span> Bird { fly(): <span class="kw">void</span>; }

<span class="kw">function</span> <span class="fn-name">isFish</span>(a: Fish <span class="op">|</span> Bird): a <span class="kw">is</span> Fish {
  <span class="kw">return</span> (a <span class="kw">as</span> Fish).swim <span class="op">!==</span> <span class="kw">undefined</span>;
}
<span class="kw">function</span> <span class="fn-name">move</span>(a: Fish <span class="op">|</span> Bird) {
  <span class="kw">if</span> (<span class="fn-name">isFish</span>(a)) a.<span class="fn-name">swim</span>();  <span class="cmt">// a: Fish</span>
  <span class="kw">else</span> a.<span class="fn-name">fly</span>();            <span class="cmt">// a: Bird</span>
}`,out:'a narrowed to Fish or Bird per branch'},
  ],
  svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="nr-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <rect x="170" y="15" width="140" height="36" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="38" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">string | number</text>
  <line x1="220" y1="51" x2="120" y2="90" stroke="#4ade80" stroke-width="1.5" marker-end="url(#nr-arr)"/>
  <text x="150" y="72" fill="#4ade80" font-size="9">typeof === "string"</text>
  <line x1="260" y1="51" x2="360" y2="90" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#nr-arr)"/>
  <text x="310" y="72" fill="#60a5fa" font-size="9">else</text>
  <rect x="50" y="95" width="140" height="40" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="120" y="112" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">x: string</text>
  <text x="120" y="127" text-anchor="middle" fill="#9aa5b4" font-size="9">x.toUpperCase()</text>
  <rect x="290" y="95" width="140" height="40" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="360" y="112" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">x: number</text>
  <text x="360" y="127" text-anchor="middle" fill="#9aa5b4" font-size="9">x.toFixed(2)</text>
  <text x="240" y="165" text-anchor="middle" fill="#5c6878" font-size="10">Narrowing shrinks the union inside each branch</text>
  <text x="240" y="182" text-anchor="middle" fill="#5c6878" font-size="9">typeof · instanceof · in · custom "x is T" guards</text>
</svg>`,
  analogy:`<div class="analogy-icon">🕵️</div>
<p>Narrowing is like a <strong>detective eliminating suspects</strong>. At the start, the suspect (your variable) could be any of several people (a union type). Each clue you check — "was it a string?", "does it have a <code>bark</code> property?" — rules out possibilities, until only one suspect remains. Once narrowed, the detective (compiler) lets you act with full confidence, because every alternative has been logically eliminated by the checks in that branch.</p>`,
  flow:[
    '<span><strong>Start broad:</strong> A variable has a union type — <code>string | number</code> or a union of object shapes</span>',
    '<span><strong>Runtime check:</strong> Use <code>typeof</code>, <code>instanceof</code>, <code>in</code>, a discriminant property, or a custom guard function</span>',
    '<span><strong>Compiler narrows:</strong> Inside the true branch, TypeScript treats the variable as the more specific type</span>',
    '<span><strong>Safe member access:</strong> Only the narrowed type methods/properties are accessible without further checks or casts</span>',
    '<span><strong>Exhaustiveness (optional):</strong> A final <code>else</code> assigned to a <code>never</code>-typed variable ensures every union member was handled</span>',
  ]
},
{
  id:'classes',
  title:'Classes & Access Modifiers',
  icon:'🏛️',
  explain:`<p>TypeScript extends JavaScript classes with <strong>access modifiers</strong> that control visibility of properties and methods: <code>public</code> (default — accessible everywhere), <code>private</code> (accessible only inside the declaring class), and <code>protected</code> (accessible inside the class and its subclasses). These are enforced at compile time only — like all TypeScript types, they are erased when compiled to JavaScript.</p>
<p>A common shortcut is <strong>parameter properties</strong>: adding a modifier directly to a constructor parameter (<code>constructor(private name: string)</code>) automatically declares and assigns the property, removing the need for separate field declarations and <code>this.name = name</code> boilerplate.</p>
<p>Classes can be marked <code>abstract</code> to define a base that cannot be instantiated directly and must be subclassed — abstract classes can declare <code>abstract</code> methods that subclasses are required to implement. Classes can also <code>implement</code> one or more interfaces, guaranteeing they provide every member the interface requires.</p>`,
  syntax:`<span class="kw">class</span> Person {
  <span class="kw">private</span> ssn: <span class="kw">string</span>;
  <span class="kw">protected</span> age: <span class="kw">number</span>;
  <span class="kw">public</span> name: <span class="kw">string</span>;

  <span class="kw">constructor</span>(name: <span class="kw">string</span>, <span class="kw">private</span> id: <span class="kw">number</span>) { <span class="cmt">// parameter property</span>
    <span class="kw">this</span>.name = name;
  }
}

<span class="kw">abstract</span> <span class="kw">class</span> Shape {
  <span class="kw">abstract</span> <span class="fn-name">area</span>(): <span class="kw">number</span>;    <span class="cmt">// must be implemented by subclass</span>
}

<span class="kw">class</span> Circle <span class="kw">extends</span> Shape <span class="kw">implements</span> Drawable {
  <span class="kw">constructor</span>(<span class="kw">public</span> radius: <span class="kw">number</span>) { <span class="kw">super</span>(); }
  <span class="fn-name">area</span>() { <span class="kw">return</span> Math.PI * <span class="kw">this</span>.radius ** <span class="num">2</span>; }
}`,
  examples:[
    {label:'Access modifiers enforced at compile time',code:`<span class="kw">class</span> BankAccount {
  <span class="kw">private</span> balance = <span class="num">0</span>;
  <span class="kw">deposit</span>(amount: <span class="kw">number</span>) { <span class="kw">this</span>.balance += amount; }
  <span class="fn-name">getBalance</span>() { <span class="kw">return</span> <span class="kw">this</span>.balance; }
}
<span class="kw">const</span> acc = <span class="kw">new</span> <span class="fn-name">BankAccount</span>();
acc.<span class="fn-name">deposit</span>(<span class="num">100</span>);
<span class="cmt">// acc.balance;      // ✗ Property 'balance' is private</span>
console.<span class="fn-name">log</span>(acc.<span class="fn-name">getBalance</span>()); <span class="cmt">// 100</span>`,out:'100'},
    {label:'Parameter properties shortcut',code:`<span class="kw">class</span> Point {
  <span class="kw">constructor</span>(<span class="kw">public</span> x: <span class="kw">number</span>, <span class="kw">public</span> y: <span class="kw">number</span>) {}
  <span class="fn-name">toString</span>() { <span class="kw">return</span> <span class="op">\`</span>(<span class="op">\${</span><span class="kw">this</span>.x<span class="op">}</span>,<span class="op">\${</span><span class="kw">this</span>.y<span class="op">}</span>)<span class="op">\`</span>; }
}
<span class="kw">const</span> p = <span class="kw">new</span> <span class="fn-name">Point</span>(<span class="num">3</span>, <span class="num">4</span>);
console.<span class="fn-name">log</span>(p.<span class="fn-name">toString</span>()); <span class="cmt">// "(3,4)"</span>`,out:'"(3,4)"'},
    {label:'Abstract class + implements interface',code:`<span class="kw">interface</span> Drawable { <span class="fn-name">draw</span>(): <span class="kw">void</span>; }
<span class="kw">abstract</span> <span class="kw">class</span> Shape {
  <span class="kw">abstract</span> <span class="fn-name">area</span>(): <span class="kw">number</span>;
}
<span class="kw">class</span> Square <span class="kw">extends</span> Shape <span class="kw">implements</span> Drawable {
  <span class="kw">constructor</span>(<span class="kw">private</span> side: <span class="kw">number</span>) { <span class="kw">super</span>(); }
  <span class="fn-name">area</span>() { <span class="kw">return</span> <span class="kw">this</span>.side ** <span class="num">2</span>; }
  <span class="fn-name">draw</span>() { console.<span class="fn-name">log</span>(<span class="str">"drawing square"</span>); }
}
console.<span class="fn-name">log</span>(<span class="kw">new</span> <span class="fn-name">Square</span>(<span class="num">4</span>).<span class="fn-name">area</span>()); <span class="cmt">// 16</span>`,out:'16'},
  ],
  svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Access Modifier Visibility</text>
  <rect x="20" y="32" width="440" height="150" rx="6" fill="#1e2338" stroke="#2d3456" stroke-width="1.5"/>
  <text x="240" y="50" text-anchor="middle" fill="#9aa5b4" font-size="10" font-family="monospace">class Person</text>
  <rect x="35" y="60" width="120" height="105" rx="4" fill="#252b44" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="78" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">public</text>
  <text x="95" y="95" text-anchor="middle" fill="#9aa5b4" font-size="9">visible</text>
  <text x="95" y="110" text-anchor="middle" fill="#9aa5b4" font-size="9">everywhere</text>
  <text x="95" y="135" fill="#4ade80" font-size="18" text-anchor="middle">🌐</text>
  <rect x="175" y="60" width="130" height="105" rx="4" fill="#252b44" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="240" y="78" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">protected</text>
  <text x="240" y="95" text-anchor="middle" fill="#9aa5b4" font-size="9">class +</text>
  <text x="240" y="110" text-anchor="middle" fill="#9aa5b4" font-size="9">subclasses</text>
  <text x="240" y="135" fill="#fbbf24" font-size="18" text-anchor="middle">👪</text>
  <rect x="325" y="60" width="130" height="105" rx="4" fill="#252b44" stroke="#f87171" stroke-width="1.5"/>
  <text x="390" y="78" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">private</text>
  <text x="390" y="95" text-anchor="middle" fill="#9aa5b4" font-size="9">this class</text>
  <text x="390" y="110" text-anchor="middle" fill="#9aa5b4" font-size="9">only</text>
  <text x="390" y="135" fill="#f87171" font-size="18" text-anchor="middle">🔒</text>
  <text x="240" y="198" text-anchor="middle" fill="#5c6878" font-size="10">Enforced at compile time — erased in the compiled JS output</text>
</svg>`,
  analogy:`<div class="analogy-icon">🏢</div>
<p>Access modifiers are like <strong>rooms in an office building</strong>. <code>public</code> is the lobby — anyone can walk in. <code>protected</code> is a department floor — only employees of that department and its sub-teams (subclasses) can badge in. <code>private</code> is a locked personal office — only the person who owns it (the exact class) can enter, not even other departments in the same building. An <strong>abstract class</strong> is a building blueprint that can't be lived in until a real building (a concrete subclass) is constructed from it.</p>`,
  flow:[
    '<span><strong>Declare fields with modifiers:</strong> Mark each property <code>public</code>, <code>protected</code>, or <code>private</code></span>',
    '<span><strong>Constructor runs:</strong> Parameter properties (<code>constructor(private x: number)</code>) auto-assign to <code>this</code></span>',
    '<span><strong>Compiler checks access:</strong> Code outside the class (or outside the subclass, for protected) is blocked from touching restricted members</span>',
    '<span><strong>Abstract members enforced:</strong> Any subclass of an abstract class must implement all its <code>abstract</code> methods or itself stay abstract</span>',
    '<span><strong>Interface contract verified:</strong> A class using <code>implements Interface</code> must provide every member the interface declares, or fail to compile</span>',
  ]
},
{
  id:'generics',
  title:'Generics',
  icon:'🧩',
  explain:`<p><strong>Generics</strong> let you write functions, interfaces, and classes that work with <em>any</em> type while still preserving type information, instead of resorting to <code>any</code>. A generic type parameter, conventionally named <code>T</code>, acts as a placeholder filled in at the call site: <code>function identity&lt;T&gt;(value: T): T</code> — call it with a <code>string</code> and TypeScript knows the return is a <code>string</code>, call it with a <code>number</code> and it knows the return is a <code>number</code>.</p>
<p>Generics can be <strong>constrained</strong> with <code>extends</code> to require the type parameter to have certain properties: <code>function getLength&lt;T extends { length: number }&gt;(item: T)</code> only accepts values with a <code>.length</code> property. Generics can also have <strong>default types</strong> (<code>&lt;T = string&gt;</code>) and multiple parameters (<code>&lt;K, V&gt;</code> for a key/value pair).</p>
<p>Generics show up throughout the type system: <code>Array&lt;T&gt;</code>, <code>Promise&lt;T&gt;</code>, and <code>Map&lt;K, V&gt;</code> are all generic types. Generic interfaces and classes work the same way, letting one reusable data structure (a <code>Box&lt;T&gt;</code>, a <code>Stack&lt;T&gt;</code>) hold any type while staying fully type-checked.</p>`,
  syntax:`<span class="kw">function</span> <span class="fn-name">identity</span><T>(value: T): T { <span class="kw">return</span> value; }
identity<<span class="kw">string</span>>(<span class="str">"hi"</span>);   <span class="cmt">// T = string</span>
identity(<span class="num">42</span>);              <span class="cmt">// T inferred as number</span>

<span class="cmt">// Constrained generic</span>
<span class="kw">function</span> <span class="fn-name">longest</span><T <span class="kw">extends</span> { length: <span class="kw">number</span> }>(a: T, b: T): T {
  <span class="kw">return</span> a.length <span class="op">>=</span> b.length <span class="op">?</span> a : b;
}

<span class="cmt">// Generic interface / class</span>
<span class="kw">interface</span> Box<T> { value: T; }
<span class="kw">class</span> Stack<T> {
  <span class="kw">private</span> items: T[] = [];
  <span class="fn-name">push</span>(item: T) { <span class="kw">this</span>.items.<span class="fn-name">push</span>(item); }
  <span class="fn-name">pop</span>(): T <span class="op">|</span> <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.items.<span class="fn-name">pop</span>(); }
}`,
  examples:[
    {label:'Generic identity function',code:`<span class="kw">function</span> <span class="fn-name">identity</span><T>(value: T): T {
  <span class="kw">return</span> value;
}
<span class="kw">const</span> a = <span class="fn-name">identity</span><<span class="kw">string</span>>(<span class="str">"hello"</span>); <span class="cmt">// a: string</span>
<span class="kw">const</span> b = <span class="fn-name">identity</span>(<span class="num">99</span>);            <span class="cmt">// b: number (inferred)</span>
console.<span class="fn-name">log</span>(a, b); <span class="cmt">// "hello" 99</span>`,out:'"hello" 99'},
    {label:'Constrained generic with extends',code:`<span class="kw">function</span> <span class="fn-name">longest</span><T <span class="kw">extends</span> { length: <span class="kw">number</span> }>(a: T, b: T): T {
  <span class="kw">return</span> a.length <span class="op">>=</span> b.length <span class="op">?</span> a : b;
}
console.<span class="fn-name">log</span>(<span class="fn-name">longest</span>(<span class="str">"cat"</span>, <span class="str">"elephant"</span>));    <span class="cmt">// "elephant"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">longest</span>([<span class="num">1</span>,<span class="num">2</span>], [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>]));  <span class="cmt">// [1,2,3]</span>`,out:'"elephant" | [1, 2, 3]'},
    {label:'Generic class: a type-safe Stack',code:`<span class="kw">class</span> Stack<T> {
  <span class="kw">private</span> items: T[] = [];
  <span class="fn-name">push</span>(item: T) { <span class="kw">this</span>.items.<span class="fn-name">push</span>(item); }
  <span class="fn-name">pop</span>(): T <span class="op">|</span> <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.items.<span class="fn-name">pop</span>(); }
}
<span class="kw">const</span> nums = <span class="kw">new</span> <span class="fn-name">Stack</span><<span class="kw">number</span>>();
nums.<span class="fn-name">push</span>(<span class="num">1</span>); nums.<span class="fn-name">push</span>(<span class="num">2</span>);
console.<span class="fn-name">log</span>(nums.<span class="fn-name">pop</span>()); <span class="cmt">// 2</span>`,out:'2'},
  ],
  svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="gn-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">function identity&lt;T&gt;(value: T): T</text>
  <rect x="40" y="35" width="110" height="40" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="95" y="60" text-anchor="middle" fill="#c792ea" font-size="13" font-family="monospace">&lt;T&gt;</text>
  <text x="95" y="88" text-anchor="middle" fill="#5c6878" font-size="9">placeholder</text>
  <line x1="150" y1="55" x2="185" y2="55" stroke="#5c6878" stroke-width="1.5" marker-end="url(#gn-arr)"/>
  <rect x="185" y="35" width="110" height="40" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="240" y="60" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="monospace">identity(42)</text>
  <text x="240" y="88" text-anchor="middle" fill="#5c6878" font-size="9">T = number</text>
  <line x1="295" y1="55" x2="330" y2="55" stroke="#5c6878" stroke-width="1.5" marker-end="url(#gn-arr)"/>
  <rect x="330" y="35" width="110" height="40" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="385" y="60" text-anchor="middle" fill="#4ade80" font-size="12" font-family="monospace">returns number</text>
  <text x="385" y="88" text-anchor="middle" fill="#5c6878" font-size="9">not any!</text>
  <line x1="20" y1="105" x2="460" y2="105" stroke="#2d3456" stroke-width="1"/>
  <rect x="60" y="120" width="150" height="60" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="135" y="140" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">identity("hi")</text>
  <text x="135" y="160" text-anchor="middle" fill="#5c6878" font-size="9">T = string</text>
  <text x="135" y="174" text-anchor="middle" fill="#5c6878" font-size="9">→ returns string</text>
  <rect x="270" y="120" width="150" height="60" rx="5" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="345" y="140" text-anchor="middle" fill="#f78c6c" font-size="10" font-family="monospace">Stack&lt;number&gt;</text>
  <text x="345" y="160" text-anchor="middle" fill="#5c6878" font-size="9">T = number</text>
  <text x="345" y="174" text-anchor="middle" fill="#5c6878" font-size="9">→ push/pop numbers only</text>
</svg>`,
  analogy:`<div class="analogy-icon">🧰</div>
<p>A generic is like a <strong>vending machine mold that adapts to whatever coin shape you insert</strong>. The machine (the generic function) doesn't hardcode "accepts quarters" — it says "accepts <em>whatever type T you feed me</em>, and I'll hand back an item of that exact same type T." Feed it a string, get a string back with full type safety; feed it a number, get a number back. Compare that to a machine that accepts <code>any</code> coin and hands back a mystery item of unknown type — generics keep the connection between input and output type intact.</p>`,
  flow:[
    '<span><strong>Declare a type parameter:</strong> Add <code>&lt;T&gt;</code> after the function/class/interface name</span>',
    '<span><strong>Use T as a placeholder:</strong> Reference <code>T</code> in parameter types, return types, or property types</span>',
    '<span><strong>Call site supplies (or infers) T:</strong> <code>identity&lt;string&gt;("hi")</code> or simply <code>identity("hi")</code> — TypeScript infers T from the argument</span>',
    '<span><strong>Constraints narrow what T can be:</strong> <code>&lt;T extends {length:number}&gt;</code> restricts T to shapes that have that property</span>',
    '<span><strong>Type safety flows through:</strong> Whatever concrete type filled T is preserved in the return value or resulting instance — no <code>any</code> needed</span>',
  ]
},
{
  id:'advancedtypes',
  title:'Advanced & Utility Types',
  icon:'🧠',
  explain:`<p>TypeScript ships a set of built-in <strong>utility types</strong> that transform existing types without redeclaring them. <code>Partial&lt;T&gt;</code> makes every property optional (handy for patch/update objects); <code>Required&lt;T&gt;</code> does the opposite, making every property mandatory. <code>Readonly&lt;T&gt;</code> makes every property immutable. <code>Pick&lt;T, K&gt;</code> selects a subset of keys; <code>Omit&lt;T, K&gt;</code> removes a subset of keys.</p>
<p><code>Record&lt;K, V&gt;</code> builds an object type with keys of type <code>K</code> and values of type <code>V</code> — useful for dictionaries and lookup tables. These utilities are themselves built from two more fundamental features: <strong>mapped types</strong> (<code>{ [K in keyof T]: ... }</code>, which iterate over a type's keys to build a new type) and <strong>conditional types</strong> (<code>T extends U ? X : Y</code>, which branch on a type relationship).</p>
<p>The <code>keyof</code> operator extracts the union of an object type's property names as a type (<code>keyof User</code> becomes <code>"id" | "name" | "email"</code>), and is frequently combined with generics to write functions like a type-safe property getter that only accepts valid keys of a given object.</p>`,
  syntax:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; email: <span class="kw">string</span>; }

<span class="kw">type</span> PartialUser  = <span class="fn-name">Partial</span><User>;   <span class="cmt">// all optional</span>
<span class="kw">type</span> ReadonlyUser = <span class="fn-name">Readonly</span><User>;  <span class="cmt">// all readonly</span>
<span class="kw">type</span> UserPreview  = <span class="fn-name">Pick</span><User, <span class="str">"id"</span> <span class="op">|</span> <span class="str">"name"</span>>;
<span class="kw">type</span> UserNoEmail  = <span class="fn-name">Omit</span><User, <span class="str">"email"</span>>;
<span class="kw">type</span> Scores       = <span class="fn-name">Record</span><<span class="kw">string</span>, <span class="kw">number</span>>; <span class="cmt">// dictionary</span>

<span class="kw">type</span> Keys = <span class="kw">keyof</span> User; <span class="cmt">// "id" | "name" | "email"</span>

<span class="cmt">// Conditional type</span>
<span class="kw">type</span> IsString<T> = T <span class="kw">extends</span> <span class="kw">string</span> <span class="op">?</span> <span class="kw">true</span> : <span class="kw">false</span>;`,
  examples:[
    {label:'Partial & Readonly for updates',code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; }

<span class="kw">function</span> <span class="fn-name">updateUser</span>(id: <span class="kw">number</span>, patch: <span class="fn-name">Partial</span><User>) { <span class="cmt">/*..*/</span> }
<span class="fn-name">updateUser</span>(<span class="num">1</span>, { name: <span class="str">"New Name"</span> }); <span class="cmt">// ✓ id not required</span>

<span class="kw">const</span> frozen: <span class="fn-name">Readonly</span><User> = { id: <span class="num">1</span>, name: <span class="str">"Bo"</span> };
<span class="cmt">// frozen.name = "X"; // ✗ readonly property</span>`,out:'update accepted with partial patch; frozen is immutable'},
    {label:'Pick, Omit & Record',code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; email: <span class="kw">string</span>; }

<span class="kw">type</span> Preview = <span class="fn-name">Pick</span><User, <span class="str">"id"</span> <span class="op">|</span> <span class="str">"name"</span>>;
<span class="kw">const</span> p: Preview = { id: <span class="num">1</span>, name: <span class="str">"Bo"</span> };

<span class="kw">type</span> Scores = <span class="fn-name">Record</span><<span class="kw">string</span>, <span class="kw">number</span>>;
<span class="kw">const</span> scores: Scores = { math: <span class="num">90</span>, art: <span class="num">85</span> };
console.<span class="fn-name">log</span>(p, scores.math); <span class="cmt">// {id:1,name:"Bo"} 90</span>`,out:'{ id: 1, name: "Bo" }  90'},
    {label:'keyof + generics: type-safe getter',code:`<span class="kw">function</span> <span class="fn-name">getProp</span><T, K <span class="kw">extends</span> <span class="kw">keyof</span> T>(obj: T, key: K): T[K] {
  <span class="kw">return</span> obj[key];
}
<span class="kw">const</span> user = { id: <span class="num">1</span>, name: <span class="str">"Ana"</span> };
console.<span class="fn-name">log</span>(<span class="fn-name">getProp</span>(user, <span class="str">"name"</span>)); <span class="cmt">// "Ana"</span>
<span class="cmt">// getProp(user, "age"); // ✗ "age" is not a key of user</span>`,out:'"Ana"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="16" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Utility Types transform User</text>
  <rect x="185" y="26" width="110" height="34" rx="5" fill="#1e2338" stroke="#9aa5b4" stroke-width="1.5"/>
  <text x="240" y="48" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">User</text>
  <rect x="15" y="85" width="105" height="46" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="67" y="105" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Partial&lt;U&gt;</text>
  <text x="67" y="120" text-anchor="middle" fill="#5c6878" font-size="8">all optional</text>
  <rect x="128" y="85" width="105" height="46" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="180" y="105" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Readonly&lt;U&gt;</text>
  <text x="180" y="120" text-anchor="middle" fill="#5c6878" font-size="8">immutable</text>
  <rect x="241" y="85" width="105" height="46" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="293" y="105" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">Pick&lt;U,K&gt;</text>
  <text x="293" y="120" text-anchor="middle" fill="#5c6878" font-size="8">subset of keys</text>
  <rect x="354" y="85" width="105" height="46" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="406" y="105" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">Omit&lt;U,K&gt;</text>
  <text x="406" y="120" text-anchor="middle" fill="#5c6878" font-size="8">exclude keys</text>
  <line x1="240" y1="60" x2="67" y2="85" stroke="#5c6878" stroke-width="1"/>
  <line x1="240" y1="60" x2="180" y2="85" stroke="#5c6878" stroke-width="1"/>
  <line x1="240" y1="60" x2="293" y2="85" stroke="#5c6878" stroke-width="1"/>
  <line x1="240" y1="60" x2="406" y2="85" stroke="#5c6878" stroke-width="1"/>
  <rect x="70" y="150" width="150" height="46" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="145" y="170" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Record&lt;K,V&gt;</text>
  <text x="145" y="185" text-anchor="middle" fill="#5c6878" font-size="8">dictionary type</text>
  <rect x="255" y="150" width="150" height="46" rx="5" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="330" y="170" text-anchor="middle" fill="#f78c6c" font-size="10" font-family="monospace">keyof User</text>
  <text x="330" y="185" text-anchor="middle" fill="#5c6878" font-size="8">"id"|"name"|"email"</text>
</svg>`,
  analogy:`<div class="analogy-icon">🛠️</div>
<p>Utility types are like <strong>attachments for a single power drill</strong>. You already built the base tool (your <code>User</code> interface). Instead of buying a whole new drill for each job, you snap on a different bit: <code>Partial</code> loosens every requirement (a screwdriver bit for adjusting one screw at a time), <code>Readonly</code> locks the chuck so nothing can spin loose, <code>Pick</code> grabs just the one attachment you need, and <code>Omit</code> is the same drill with one attachment removed. <code>keyof</code> is the drill's spec sheet — it lists exactly which bits are compatible.</p>`,
  flow:[
    '<span><strong>Start from a base type:</strong> An existing <code>interface</code> or <code>type</code> like <code>User</code></span>',
    '<span><strong>Apply a utility type:</strong> Wrap it — <code>Partial&lt;User&gt;</code>, <code>Pick&lt;User, "id"&gt;</code>, <code>Record&lt;string, number&gt;</code></span>',
    '<span><strong>Compiler derives the new shape:</strong> Internally this runs a mapped type over <code>keyof T</code>, producing a fresh type without hand-written duplication</span>',
    '<span><strong>Conditional types branch when needed:</strong> <code>T extends U ? X : Y</code> resolves to <code>X</code> or <code>Y</code> depending on whether <code>T</code> is assignable to <code>U</code></span>',
    '<span><strong>Use the derived type:</strong> Annotate variables/parameters with the transformed type just like any other</span>',
  ]
},
{
  id:'inference',
  title:'Type Inference & Assertions',
  icon:'🎯',
  explain:`<p><strong>Type inference</strong> means TypeScript figures out a type automatically without an explicit annotation. Writing <code>let age = 30;</code> infers <code>age: number</code> from the initializer — no <code>: number</code> needed. Inference also flows through function return types, array literals, and generic calls, which is why well-typed TypeScript code often needs far fewer annotations than beginners expect.</p>
<p><strong>Contextual typing</strong> is inference in the other direction: when a value is used somewhere with a known expected type (like an array callback), TypeScript infers the parameter types of that callback from context, so <code>[1,2,3].map(n => n * 2)</code> knows <code>n</code> is a <code>number</code> without you writing it.</p>
<p>A <strong>type assertion</strong> (<code>value as Type</code>, or the older <code>&lt;Type&gt;value</code> syntax) tells the compiler "trust me, treat this value as this type" — it does not perform any runtime conversion or check, unlike <code>Number()</code> or <code>String()</code>. Assertions are appropriate when you know more than the compiler can infer (e.g. after a DOM query), but overusing them defeats the purpose of static typing. The <strong>non-null assertion</strong> (<code>value!</code>) tells the compiler a value is definitely not <code>null</code>/<code>undefined</code>, again without a runtime check.</p>`,
  syntax:`<span class="kw">let</span> age = <span class="num">30</span>;              <span class="cmt">// inferred: number</span>
<span class="kw">let</span> list = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];      <span class="cmt">// inferred: number[]</span>
<span class="kw">function</span> <span class="fn-name">double</span>(n: <span class="kw">number</span>) { <span class="kw">return</span> n * <span class="num">2</span>; } <span class="cmt">// return inferred: number</span>

<span class="cmt">// Type assertion — no runtime check</span>
<span class="kw">const</span> el = document.<span class="fn-name">getElementById</span>(<span class="str">"root"</span>) <span class="kw">as</span> <span class="fn-name">HTMLDivElement</span>;
<span class="kw">const</span> el2 = <<span class="fn-name">HTMLDivElement</span>>document.<span class="fn-name">getElementById</span>(<span class="str">"root"</span>);

<span class="cmt">// Non-null assertion</span>
<span class="kw">function</span> <span class="fn-name">process</span>(value<span class="op">?</span>: <span class="kw">string</span>) {
  console.<span class="fn-name">log</span>(value<span class="op">!</span>.<span class="fn-name">toUpperCase</span>()); <span class="cmt">// asserts value is not null/undefined</span>
}`,
  examples:[
    {label:'Inference from literals and returns',code:`<span class="kw">let</span> title = <span class="str">"Mastery Lab"</span>;  <span class="cmt">// inferred: string</span>
<span class="kw">let</span> scores = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];    <span class="cmt">// inferred: number[]</span>

<span class="kw">function</span> <span class="fn-name">sum</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>) {
  <span class="kw">return</span> a + b;             <span class="cmt">// return type inferred: number</span>
}
<span class="cmt">// title = 5; // ✗ Type 'number' is not assignable to 'string'</span>
console.<span class="fn-name">log</span>(<span class="fn-name">sum</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// 5</span>`,out:'5'},
    {label:'Contextual typing in callbacks',code:`<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">const</span> doubled = nums.<span class="fn-name">map</span>(n <span class="op">=></span> n * <span class="num">2</span>); <span class="cmt">// n inferred: number</span>

<span class="kw">const</span> btn = document.<span class="fn-name">querySelector</span>(<span class="str">"button"</span>);
btn<span class="op">?</span>.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(e.type); <span class="cmt">// e inferred: MouseEvent</span>
});
console.<span class="fn-name">log</span>(doubled); <span class="cmt">// [2, 4, 6]</span>`,out:'[2, 4, 6]'},
    {label:'Type assertion vs non-null assertion',code:`<span class="kw">interface</span> Config { url: <span class="kw">string</span>; }
<span class="kw">const</span> raw: <span class="kw">unknown</span> = { url: <span class="str">"/api"</span> };
<span class="kw">const</span> cfg = raw <span class="kw">as</span> Config;    <span class="cmt">// trust me — compiler stops checking</span>
console.<span class="fn-name">log</span>(cfg.url);    <span class="cmt">// "/api"</span>

<span class="kw">function</span> <span class="fn-name">getLen</span>(s<span class="op">?</span>: <span class="kw">string</span>) {
  <span class="kw">return</span> s<span class="op">!</span>.length;   <span class="cmt">// non-null assertion — no runtime check!</span>
}`,out:'"/api"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="inf-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <text x="120" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Inference</text>
  <rect x="20" y="35" width="90" height="34" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="65" y="57" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">let age = 30</text>
  <line x1="110" y1="52" x2="150" y2="52" stroke="#5c6878" stroke-width="1.5" marker-end="url(#inf-arr)"/>
  <rect x="150" y="35" width="90" height="34" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="195" y="57" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">age: number</text>
  <text x="130" y="85" text-anchor="middle" fill="#5c6878" font-size="9">compiler infers, no annotation</text>
  <line x1="15" y1="105" x2="465" y2="105" stroke="#2d3456" stroke-width="1"/>
  <text x="360" y="120" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Assertion</text>
  <rect x="270" y="130" width="100" height="40" rx="5" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="320" y="150" text-anchor="middle" fill="#f78c6c" font-size="10" font-family="monospace">value: unknown</text>
  <line x1="370" y1="150" x2="400" y2="150" stroke="#5c6878" stroke-width="1.5" marker-end="url(#inf-arr)"/>
  <rect x="400" y="130" width="65" height="40" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="432" y="150" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">as T</text>
  <text x="365" y="185" text-anchor="middle" fill="#5c6878" font-size="9">no runtime check — "trust me"</text>
</svg>`,
  analogy:`<div class="analogy-icon">🔎</div>
<p><strong>Inference</strong> is like a waiter who watches what you order and automatically writes "vegetarian" on the ticket because you ordered a salad — no need to declare it yourself. A <strong>type assertion</strong> is different: it's you personally crossing out the kitchen's guess and writing "this is definitely gluten-free" on the ticket — the kitchen trusts your note and stops checking, even though nobody actually verified the ingredients. If you're wrong, the mistake surfaces later, at runtime, not at the ticket-writing stage.</p>`,
  flow:[
    '<span><strong>Write a value without annotation:</strong> <code>let age = 30;</code></span>',
    '<span><strong>Compiler examines the initializer:</strong> Infers the narrowest sensible type from the literal or expression</span>',
    '<span><strong>Inference propagates:</strong> Through function returns, array elements, and generic type arguments</span>',
    '<span><strong>Contextual typing (reverse direction):</strong> A callback\'s parameter types are inferred from where the callback is used, e.g. inside <code>.map()</code></span>',
    '<span><strong>Assertions override inference when needed:</strong> <code>value as Type</code> or <code>value!</code> bypasses the compiler\'s own guess — use sparingly, since no runtime check backs it up</span>',
  ]
},
{
  id:'modules',
  title:'Modules & Namespaces',
  icon:'📦',
  explain:`<p>TypeScript uses standard ES module syntax — <code>export</code> and <code>import</code> — to split code across files while keeping full type checking across the boundary. You can export values, functions, classes, interfaces, and types individually (<strong>named exports</strong>) or designate one <strong>default export</strong> per file. Types and values can be exported from the very same statement, and re-exported from a central "barrel" file with <code>export * from "./module"</code>.</p>
<p>When you only need a <em>type</em> from another module (not a runtime value), use <code>import type { User } from "./types"</code>. This makes the intent explicit and lets the compiler safely elide the import entirely from the compiled JavaScript, since types don't exist at runtime.</p>
<p><strong>Namespaces</strong> (<code>namespace MyLib { ... }</code>) are TypeScript's older, pre-ES-modules way of grouping related code under one global-ish name to avoid collisions. They still appear in some legacy codebases and <code>.d.ts</code> declaration files, but modern TypeScript projects should prefer ES modules for organizing code — namespaces are mostly reserved for global-scope type declarations today.</p>`,
  syntax:`<span class="cmt">// math.ts</span>
<span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>) { <span class="kw">return</span> a + b; }
<span class="kw">export</span> <span class="kw">interface</span> Point { x: <span class="kw">number</span>; y: <span class="kw">number</span>; }
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">class</span> Calculator { <span class="cmt">/*..*/</span> }

<span class="cmt">// app.ts</span>
<span class="kw">import</span> Calculator, { add, Point } <span class="kw">from</span> <span class="str">"./math"</span>;
<span class="kw">import</span> <span class="kw">type</span> { Point <span class="kw">as</span> Coord } <span class="kw">from</span> <span class="str">"./math"</span>; <span class="cmt">// type-only import</span>

<span class="cmt">// legacy namespace (avoid in new code)</span>
<span class="kw">namespace</span> Geometry {
  <span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">area</span>(r: <span class="kw">number</span>) { <span class="kw">return</span> Math.PI * r * r; }
}`,
  examples:[
    {label:'Named exports & imports',code:`<span class="cmt">// shapes.ts</span>
<span class="kw">export</span> <span class="kw">interface</span> Circle { radius: <span class="kw">number</span>; }
<span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">area</span>(c: Circle): <span class="kw">number</span> {
  <span class="kw">return</span> Math.PI * c.radius ** <span class="num">2</span>;
}

<span class="cmt">// main.ts</span>
<span class="kw">import</span> { area, Circle } <span class="kw">from</span> <span class="str">"./shapes"</span>;
<span class="kw">const</span> c: Circle = { radius: <span class="num">2</span> };
console.<span class="fn-name">log</span>(<span class="fn-name">area</span>(c).<span class="fn-name">toFixed</span>(<span class="num">2</span>)); <span class="cmt">// "12.57"</span>`,out:'"12.57"'},
    {label:'Default export + type-only import',code:`<span class="cmt">// logger.ts</span>
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">function</span> <span class="fn-name">log</span>(msg: <span class="kw">string</span>) { console.<span class="fn-name">log</span>(<span class="str">"[LOG] "</span> + msg); }
<span class="kw">export</span> <span class="kw">interface</span> LogOptions { level: <span class="kw">string</span>; }

<span class="cmt">// app.ts</span>
<span class="kw">import</span> log <span class="kw">from</span> <span class="str">"./logger"</span>;
<span class="kw">import</span> <span class="kw">type</span> { LogOptions } <span class="kw">from</span> <span class="str">"./logger"</span>; <span class="cmt">// erased at compile time</span>
<span class="fn-name">log</span>(<span class="str">"started"</span>); <span class="cmt">// "[LOG] started"</span>`,out:'"[LOG] started"'},
    {label:'Barrel file re-exports',code:`<span class="cmt">// index.ts — a "barrel" file</span>
<span class="kw">export</span> <span class="op">*</span> <span class="kw">from</span> <span class="str">"./user"</span>;
<span class="kw">export</span> <span class="op">*</span> <span class="kw">from</span> <span class="str">"./product"</span>;

<span class="cmt">// consumer.ts</span>
<span class="kw">import</span> { User, Product } <span class="kw">from</span> <span class="str">"./index"</span>; <span class="cmt">// one import, two modules</span>
console.<span class="fn-name">log</span>(<span class="str">"barrel import works"</span>);`,out:'"barrel import works"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="mod-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <rect x="20" y="30" width="130" height="60" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="85" y="50" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">math.ts</text>
  <text x="30" y="68" fill="#e8eaed" font-size="9" font-family="monospace">export add()</text>
  <text x="30" y="82" fill="#e8eaed" font-size="9" font-family="monospace">export Point</text>
  <line x1="150" y1="60" x2="195" y2="60" stroke="#4ade80" stroke-width="1.5" marker-end="url(#mod-arr)"/>
  <text x="172" y="52" text-anchor="middle" fill="#4ade80" font-size="9">import</text>
  <rect x="195" y="30" width="130" height="60" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="260" y="50" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">app.ts</text>
  <text x="205" y="68" fill="#e8eaed" font-size="9" font-family="monospace">uses add()</text>
  <text x="205" y="82" fill="#e8eaed" font-size="9" font-family="monospace">uses Point</text>
  <rect x="345" y="30" width="120" height="60" rx="6" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="405" y="50" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">import type</text>
  <text x="355" y="68" fill="#9aa5b4" font-size="9">erased at</text>
  <text x="355" y="82" fill="#9aa5b4" font-size="9">compile time</text>
  <line x1="325" y1="60" x2="345" y2="60" stroke="#c792ea" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#mod-arr)"/>
  <line x1="20" y1="110" x2="465" y2="110" stroke="#2d3456" stroke-width="1"/>
  <rect x="130" y="125" width="220" height="50" rx="6" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="240" y="145" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">namespace Geometry { ... }</text>
  <text x="240" y="162" text-anchor="middle" fill="#5c6878" font-size="9">legacy — prefer ES modules today</text>
</svg>`,
  analogy:`<div class="analogy-icon">📮</div>
<p>Modules are like <strong>separate mailboxes for separate departments</strong>. Each file's <code>export</code> statement decides what letters (functions, types, classes) it's willing to send out; other files <code>import</code> only the specific letters they need. A <strong>default export</strong> is the one "headline" item a mailbox is best known for. An <code>import type</code> is a photocopy of an address label — useful for planning but never actually mailed, so it adds no weight (no runtime code) to the final package. <strong>Namespaces</strong> are the old-fashioned shared bulletin board everyone tacked notices to before individual mailboxes (modules) became the norm.</p>`,
  flow:[
    '<span><strong>Export from the source file:</strong> Mark functions, classes, types, or interfaces with <code>export</code> (named) or <code>export default</code> (one per file)</span>',
    '<span><strong>Import in the consumer file:</strong> <code>import { add } from "./math"</code> pulls in only what is referenced</span>',
    '<span><strong>Type-only imports elided:</strong> <code>import type {...}</code> is stripped entirely from the compiled JavaScript output</span>',
    '<span><strong>Compiler checks cross-file types:</strong> Calling an imported function with the wrong argument type is still a compile error, exactly as if it were local</span>',
    '<span><strong>Barrel files aggregate exports:</strong> An <code>index.ts</code> re-exporting several modules lets consumers import from one place</span>',
  ]
},
{
  id:'decorators',
  title:'Decorators',
  icon:'🎀',
  explain:`<p>A <strong>decorator</strong> is a special kind of declaration — written as <code>@expression</code> — that can be attached to a class, method, accessor, property, or parameter to observe, modify, or replace its behavior. Decorators are a compile-time feature enabled with <code>"experimentalDecorators": true</code> in <code>tsconfig.json</code> (or the newer stable ECMAScript decorators proposal TypeScript now also supports), and are heavily used by frameworks like Angular and NestJS.</p>
<p>A decorator is simply a function. A <strong>class decorator</strong> receives the constructor and can extend or replace it. A <strong>method decorator</strong> receives the target, method name, and a property descriptor, letting it wrap the original method — for example to log calls or measure timing. <strong>Decorator factories</strong> (a function that returns a decorator, like <code>@Column("varchar")</code>) let you pass configuration into the decorator.</p>
<p>Multiple decorators on the same declaration are applied <strong>bottom-up</strong> — the one closest to the declaration runs first. Decorators are widely used for cross-cutting concerns (logging, validation, dependency injection, ORM column mapping) so the business logic in the class body stays clean.</p>`,
  syntax:`<span class="cmt">// tsconfig.json: "experimentalDecorators": true</span>

<span class="kw">function</span> <span class="fn-name">Logger</span>(target: <span class="kw">any</span>, key: <span class="kw">string</span>, descriptor: PropertyDescriptor) {
  <span class="kw">const</span> original = descriptor.value;
  descriptor.value = <span class="kw">function</span>(...args: <span class="kw">any</span>[]) {
    console.<span class="fn-name">log</span>(<span class="str">"Calling "</span> + key);
    <span class="kw">return</span> original.<span class="fn-name">apply</span>(<span class="kw">this</span>, args);
  };
}

<span class="kw">class</span> Service {
  <span class="op">@Logger</span>
  <span class="fn-name">fetchData</span>() { <span class="kw">return</span> <span class="str">"data"</span>; }
}

<span class="cmt">// Decorator factory (accepts arguments)</span>
<span class="kw">function</span> <span class="fn-name">MinLength</span>(n: <span class="kw">number</span>) {
  <span class="kw">return</span> <span class="kw">function</span>(target: <span class="kw">any</span>, key: <span class="kw">string</span>) { <span class="cmt">/*..*/</span> };
}`,
  examples:[
    {label:'Method decorator that logs calls',code:`<span class="kw">function</span> <span class="fn-name">Log</span>(target: <span class="kw">any</span>, key: <span class="kw">string</span>, descriptor: PropertyDescriptor) {
  <span class="kw">const</span> original = descriptor.value;
  descriptor.value = <span class="kw">function</span>(...args: <span class="kw">any</span>[]) {
    console.<span class="fn-name">log</span>(<span class="str">"call: "</span> + key);
    <span class="kw">return</span> original.<span class="fn-name">apply</span>(<span class="kw">this</span>, args);
  };
}
<span class="kw">class</span> Calc {
  <span class="op">@Log</span>
  <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>) { <span class="kw">return</span> a + b; }
}
console.<span class="fn-name">log</span>(<span class="kw">new</span> <span class="fn-name">Calc</span>().<span class="fn-name">add</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// "call: add" then 5</span>`,out:'"call: add"  5'},
    {label:'Class decorator adding metadata',code:`<span class="kw">function</span> <span class="fn-name">Sealed</span>(constructor: <span class="kw">Function</span>) {
  Object.<span class="fn-name">seal</span>(constructor);
  Object.<span class="fn-name">seal</span>(constructor.prototype);
}
<span class="op">@Sealed</span>
<span class="kw">class</span> Config {
  apiUrl = <span class="str">"/api"</span>;
}
<span class="kw">const</span> c = <span class="kw">new</span> <span class="fn-name">Config</span>();
console.<span class="fn-name">log</span>(c.apiUrl); <span class="cmt">// "/api" — class is sealed, can't add new props</span>`,out:'"/api"'},
    {label:'Decorator factory with parameters',code:`<span class="kw">function</span> <span class="fn-name">Column</span>(type: <span class="kw">string</span>) {
  <span class="kw">return</span> <span class="kw">function</span>(target: <span class="kw">any</span>, key: <span class="kw">string</span>) {
    console.<span class="fn-name">log</span>(key + <span class="str">" -> "</span> + type);
  };
}
<span class="kw">class</span> User {
  <span class="op">@Column</span>(<span class="str">"varchar"</span>)
  name!: <span class="kw">string</span>;

  <span class="op">@Column</span>(<span class="str">"int"</span>)
  age!: <span class="kw">number</span>;
}
<span class="cmt">// logs at class-definition time: "name -> varchar", "age -> int"</span>`,out:'"name -> varchar"  "age -> int"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="dec-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">Method Decorator Wrapping</text>
  <rect x="30" y="35" width="140" height="50" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="100" y="55" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">@Log</text>
  <text x="100" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">decorator function</text>
  <line x1="170" y1="60" x2="205" y2="60" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dec-arr)"/>
  <rect x="205" y="35" width="140" height="50" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="275" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">add(a,b)</text>
  <text x="275" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">original method</text>
  <line x1="345" y1="60" x2="380" y2="60" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dec-arr)"/>
  <rect x="380" y="35" width="80" height="50" rx="5" fill="#1e2338" stroke="#f78c6c" stroke-width="1.5"/>
  <text x="420" y="55" text-anchor="middle" fill="#f78c6c" font-size="10" font-family="monospace">wrapped</text>
  <text x="420" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">descriptor</text>
  <line x1="15" y1="105" x2="465" y2="105" stroke="#2d3456" stroke-width="1"/>
  <rect x="70" y="120" width="150" height="55" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="145" y="140" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">@Column("varchar")</text>
  <text x="145" y="158" text-anchor="middle" fill="#5c6878" font-size="9">decorator factory</text>
  <rect x="260" y="120" width="150" height="55" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="335" y="140" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">bottom-up order</text>
  <text x="335" y="158" text-anchor="middle" fill="#5c6878" font-size="9">closest decorator runs first</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎁</div>
<p>A decorator is like <strong>gift wrap applied to a present without changing what's inside</strong>. The core gift (your method or class) stays the same — the wrapping (the decorator) can add a bow, a tag, or even swap the box entirely before it's handed over. A <strong>decorator factory</strong> is a wrapping station that first asks "what color paper?" (its arguments) before wrapping — you configure it once, then it produces the actual wrapping decorator. Stack multiple decorators and they wrap in order, innermost (closest to the gift) applied first.</p>`,
  flow:[
    '<span><strong>Enable decorators:</strong> Set <code>"experimentalDecorators": true</code> in <code>tsconfig.json</code> (or use the newer standard decorators)</span>',
    '<span><strong>Attach with @:</strong> Place <code>@Decorator</code> directly above a class, method, property, or parameter</span>',
    '<span><strong>Decorator function runs at definition time:</strong> It receives the target and (for methods) a property descriptor — not each time the method is called</span>',
    '<span><strong>Modify or wrap behavior:</strong> The decorator can replace <code>descriptor.value</code> with a wrapped function that adds logging, validation, or timing</span>',
    '<span><strong>Multiple decorators apply bottom-up:</strong> The decorator nearest the declaration executes first, then each one above it in turn</span>',
  ]
},
{
  id:'asynctypes',
  title:'Async/Await with Types',
  icon:'⏳',
  explain:`<p>An <code>async</code> function always returns a <code>Promise</code>, and TypeScript reflects that in its type: <code>async function fetchUser(): Promise&lt;User&gt;</code> means the resolved value (after <code>await</code>) is a <code>User</code>. You rarely need to type the <code>Promise&lt;T&gt;</code> wrapper explicitly — TypeScript infers it from whatever the function body returns.</p>
<p><strong>Generic Promises</strong> propagate type information through asynchronous chains: <code>Promise&lt;User&gt;</code>, <code>Promise&lt;User[]&gt;</code>, and <code>Promise&lt;void&gt;</code> (for an async function with no meaningful return value) are all common. When you <code>await</code> a <code>Promise&lt;T&gt;</code>, the expression's type becomes <code>T</code> — the promise wrapper is unwrapped automatically for you.</p>
<p><code>Promise.all([...])</code> is typed to infer a <strong>tuple</strong> of resolved types matching the input array, so awaiting <code>Promise.all([fetchUser(), fetchOrders()])</code> gives you a properly typed <code>[User, Order[]]</code>. Error handling around <code>await</code> should use <code>try/catch</code>, but note the caught error is typed <code>unknown</code> by default (in strict configurations) and must be narrowed before use.</p>`,
  syntax:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">fetchUser</span>(id: <span class="kw">number</span>): <span class="fn-name">Promise</span><User> {
  <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn-name">fetch</span>(<span class="str">"/api/users/"</span> + id);
  <span class="kw">return</span> res.<span class="fn-name">json</span>(); <span class="cmt">// TS trusts the annotated return type</span>
}

<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">loadAll</span>(): <span class="fn-name">Promise</span><[User, Order[]]> {
  <span class="kw">return</span> <span class="fn-name">Promise</span>.<span class="fn-name">all</span>([<span class="fn-name">fetchUser</span>(<span class="num">1</span>), <span class="fn-name">fetchOrders</span>()]);
}

<span class="kw">try</span> {
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn-name">fetchUser</span>(<span class="num">1</span>); <span class="cmt">// user: User</span>
} <span class="kw">catch</span> (err) {
  <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>) console.<span class="fn-name">log</span>(err.message); <span class="cmt">// narrow unknown</span>
}`,
  examples:[
    {label:'Typed async function & await unwrapping',code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; }

<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getUser</span>(id: <span class="kw">number</span>): <span class="fn-name">Promise</span><User> {
  <span class="kw">return</span> { id, name: <span class="str">"Ana"</span> };
}
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn-name">getUser</span>(<span class="num">1</span>); <span class="cmt">// user: User, not Promise<User></span>
  console.<span class="fn-name">log</span>(user.name);   <span class="cmt">// "Ana"</span>
}
<span class="fn-name">run</span>();`,out:'"Ana"'},
    {label:'Promise.all with inferred tuple type',code:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getName</span>(): <span class="fn-name">Promise</span><<span class="kw">string</span>> { <span class="kw">return</span> <span class="str">"Bo"</span>; }
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getAge</span>(): <span class="fn-name">Promise</span><<span class="kw">number</span>> { <span class="kw">return</span> <span class="num">9</span>; }

<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">const</span> [name, age] = <span class="kw">await</span> <span class="fn-name">Promise</span>.<span class="fn-name">all</span>([<span class="fn-name">getName</span>(), <span class="fn-name">getAge</span>()]);
  console.<span class="fn-name">log</span>(name, age); <span class="cmt">// "Bo" 9  (name: string, age: number)</span>
}
<span class="fn-name">run</span>();`,out:'"Bo" 9'},
    {label:'try/catch with unknown error narrowing',code:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">risky</span>(): <span class="fn-name">Promise</span><<span class="kw">void</span>> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"network down"</span>);
}
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">try</span> {
    <span class="kw">await</span> <span class="fn-name">risky</span>();
  } <span class="kw">catch</span> (err: <span class="kw">unknown</span>) {
    <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>) console.<span class="fn-name">log</span>(err.message); <span class="cmt">// "network down"</span>
  }
}
<span class="fn-name">run</span>();`,out:'"network down"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="as-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">async function fetchUser(): Promise&lt;User&gt;</text>
  <rect x="30" y="35" width="130" height="50" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="95" y="55" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">async fn call</text>
  <text x="95" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">returns immediately</text>
  <line x1="160" y1="60" x2="200" y2="60" stroke="#5c6878" stroke-width="1.5" marker-end="url(#as-arr)"/>
  <rect x="200" y="35" width="130" height="50" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="265" y="55" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">Promise&lt;User&gt;</text>
  <text x="265" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">pending → resolved</text>
  <line x1="330" y1="60" x2="365" y2="60" stroke="#4ade80" stroke-width="1.5" marker-end="url(#as-arr)"/>
  <text x="348" y="52" fill="#4ade80" font-size="9">await</text>
  <rect x="365" y="35" width="90" height="50" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="410" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">User</text>
  <text x="410" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9">unwrapped</text>
  <line x1="15" y1="105" x2="465" y2="105" stroke="#2d3456" stroke-width="1"/>
  <rect x="60" y="120" width="170" height="55" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="145" y="140" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Promise.all([...])</text>
  <text x="145" y="158" text-anchor="middle" fill="#5c6878" font-size="9">infers tuple [A, B]</text>
  <rect x="255" y="120" width="170" height="55" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="340" y="140" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">catch (err: unknown)</text>
  <text x="340" y="158" text-anchor="middle" fill="#5c6878" font-size="9">narrow before use</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎟️</div>
<p>An <code>async</code> function is like a <strong>coat check ticket</strong>. The moment you hand off your coat (call the function), you don't get the coat back — you get a claim ticket (<code>Promise&lt;User&gt;</code>) immediately. Later, when you present the ticket (<code>await</code>), you finally receive the actual coat (the unwrapped <code>User</code>). <code>Promise.all</code> is checking multiple coats at once and getting one combined ticket that, when redeemed, hands back every coat together in the same order you checked them in.</p>`,
  flow:[
    '<span><strong>Declare async function:</strong> Mark it <code>async</code> and annotate the return as <code>Promise&lt;T&gt;</code></span>',
    '<span><strong>Function returns a Promise immediately:</strong> Calling it does not block — you get a pending <code>Promise&lt;T&gt;</code> right away</span>',
    '<span><strong>await unwraps the value:</strong> Inside another <code>async</code> function, <code>await somePromise</code> pauses until resolution and yields a plain <code>T</code></span>',
    '<span><strong>Combine with Promise.all:</strong> Awaiting <code>Promise.all([...])</code> gives back a typed tuple matching each input promise\'s resolved type</span>',
    '<span><strong>Handle rejection with try/catch:</strong> The caught error is typed <code>unknown</code> — narrow it (e.g. <code>instanceof Error</code>) before accessing properties</span>',
  ]
},
{
  id:'errorhandling',
  title:'Error Handling & Type-Safe Errors',
  icon:'🚨',
  explain:`<p>JavaScript's <code>throw</code> can throw a value of <em>any</em> type, which is why TypeScript types a caught error in <code>catch (err)</code> as <code>unknown</code> under <code>strict</code>/<code>useUnknownInCatchVariables</code> settings — you cannot assume it's an <code>Error</code> instance without checking. The safe pattern is to narrow with <code>err instanceof Error</code> before reading <code>.message</code> or <code>.stack</code>.</p>
<p>For richer error handling, you can define <strong>custom error classes</strong> that extend the built-in <code>Error</code>, adding fields like an HTTP status code or an error code: <code>class ApiError extends Error { constructor(public status: number, message: string) { super(message); } }</code>. Custom error classes let <code>catch</code> blocks branch on <code>instanceof</code> to handle different failure kinds distinctly.</p>
<p>An alternative to throwing is the <strong>Result/Either pattern</strong> — a discriminated union like <code>type Result&lt;T&gt; = { ok: true; value: T } | { ok: false; error: string }</code> — which forces callers to explicitly check success before accessing the value, making error handling visible in the type system rather than relying on exceptions that can be silently missed.</p>`,
  syntax:`<span class="kw">class</span> ApiError <span class="kw">extends</span> <span class="fn-name">Error</span> {
  <span class="kw">constructor</span>(<span class="kw">public</span> status: <span class="kw">number</span>, message: <span class="kw">string</span>) {
    <span class="kw">super</span>(message);
    <span class="kw">this</span>.name = <span class="str">"ApiError"</span>;
  }
}

<span class="kw">try</span> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">ApiError</span>(<span class="num">404</span>, <span class="str">"Not found"</span>);
} <span class="kw">catch</span> (err) {                 <span class="cmt">// err: unknown</span>
  <span class="kw">if</span> (err <span class="kw">instanceof</span> ApiError) console.<span class="fn-name">log</span>(err.status);
  <span class="kw">else</span> <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>)  console.<span class="fn-name">log</span>(err.message);
}

<span class="cmt">// Result/Either pattern</span>
<span class="kw">type</span> Result<T> = { ok: <span class="kw">true</span>; value: T } <span class="op">|</span> { ok: <span class="kw">false</span>; error: <span class="kw">string</span> };`,
  examples:[
    {label:'Safely narrowing an unknown catch error',code:`<span class="kw">function</span> <span class="fn-name">parseJSON</span>(text: <span class="kw">string</span>) {
  <span class="kw">try</span> {
    <span class="kw">return</span> JSON.<span class="fn-name">parse</span>(text);
  } <span class="kw">catch</span> (err) {              <span class="cmt">// err: unknown</span>
    <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>) {
      console.<span class="fn-name">log</span>(<span class="str">"Failed: "</span> + err.message);
    }
    <span class="kw">return</span> <span class="kw">null</span>;
  }
}
console.<span class="fn-name">log</span>(<span class="fn-name">parseJSON</span>(<span class="str">"{bad json"</span>)); <span class="cmt">// "Failed: ..." then null</span>`,out:'"Failed: Unexpected token..."  null'},
    {label:'Custom error class with extra fields',code:`<span class="kw">class</span> ApiError <span class="kw">extends</span> <span class="fn-name">Error</span> {
  <span class="kw">constructor</span>(<span class="kw">public</span> status: <span class="kw">number</span>, message: <span class="kw">string</span>) {
    <span class="kw">super</span>(message);
    <span class="kw">this</span>.name = <span class="str">"ApiError"</span>;
  }
}
<span class="kw">try</span> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">ApiError</span>(<span class="num">404</span>, <span class="str">"User not found"</span>);
} <span class="kw">catch</span> (err) {
  <span class="kw">if</span> (err <span class="kw">instanceof</span> ApiError) {
    console.<span class="fn-name">log</span>(err.status, err.message); <span class="cmt">// 404 "User not found"</span>
  }
}`,out:'404  "User not found"'},
    {label:'Result/Either pattern avoids exceptions',code:`<span class="kw">type</span> Result<T> = { ok: <span class="kw">true</span>; value: T } <span class="op">|</span> { ok: <span class="kw">false</span>; error: <span class="kw">string</span> };

<span class="kw">function</span> <span class="fn-name">divide</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): Result<<span class="kw">number</span>> {
  <span class="kw">if</span> (b === <span class="num">0</span>) <span class="kw">return</span> { ok: <span class="kw">false</span>, error: <span class="str">"divide by zero"</span> };
  <span class="kw">return</span> { ok: <span class="kw">true</span>, value: a / b };
}
<span class="kw">const</span> r = <span class="fn-name">divide</span>(<span class="num">10</span>, <span class="num">0</span>);
<span class="kw">if</span> (r.ok) console.<span class="fn-name">log</span>(r.value);
<span class="kw">else</span> console.<span class="fn-name">log</span>(r.error); <span class="cmt">// "divide by zero"</span>`,out:'"divide by zero"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="err-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/></marker></defs>
  <rect x="20" y="30" width="110" height="40" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="75" y="54" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">throw ...</text>
  <line x1="130" y1="50" x2="165" y2="50" stroke="#5c6878" stroke-width="1.5" marker-end="url(#err-arr)"/>
  <rect x="165" y="30" width="130" height="40" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="230" y="54" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">catch(err: unknown)</text>
  <line x1="230" y1="70" x2="150" y2="100" stroke="#4ade80" stroke-width="1.5" marker-end="url(#err-arr)"/>
  <text x="170" y="90" fill="#4ade80" font-size="9">instanceof ApiError</text>
  <line x1="260" y1="70" x2="360" y2="100" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#err-arr)"/>
  <text x="320" y="90" fill="#60a5fa" font-size="9">instanceof Error</text>
  <rect x="70" y="105" width="130" height="40" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="135" y="130" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">err.status</text>
  <rect x="300" y="105" width="130" height="40" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="365" y="130" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">err.message</text>
  <line x1="20" y1="160" x2="465" y2="160" stroke="#2d3456" stroke-width="1"/>
  <text x="240" y="180" text-anchor="middle" fill="#5c6878" font-size="10">Alternative: Result&lt;T&gt; = {ok:true,value} | {ok:false,error} — no throw needed</text>
</svg>`,
  analogy:`<div class="analogy-icon">🧯</div>
<p><code>catch</code> typing an error as <code>unknown</code> is like a <strong>fire alarm that doesn't tell you what's on fire</strong> — you must investigate (<code>instanceof</code>) before deciding how to respond, because someone could technically "throw" a toaster, a string, or a real <code>Error</code>. A custom error class is a <strong>labeled fire extinguisher</strong> — an <code>ApiError</code> extinguisher tells you exactly what kind of emergency it handles (with a status code attached). The <strong>Result pattern</strong> skips alarms altogether: instead of a surprise fire, every risky operation hands back a report that says up front "success, here's your data" or "failure, here's why" — you're forced to read the report before proceeding.</p>`,
  flow:[
    '<span><strong>Risky code throws:</strong> A function call, JSON parse, or async operation raises an error via <code>throw</code></span>',
    '<span><strong>catch receives unknown:</strong> Under strict settings, <code>catch (err)</code> types <code>err</code> as <code>unknown</code>, not <code>any</code></span>',
    '<span><strong>Narrow before use:</strong> Check <code>err instanceof Error</code> (or a custom error subclass) before reading <code>.message</code> or custom fields</span>',
    '<span><strong>Branch on error kind:</strong> Multiple <code>instanceof</code> checks let you respond differently to an <code>ApiError</code> vs a generic <code>Error</code></span>',
    '<span><strong>Or avoid exceptions entirely:</strong> Return a discriminated <code>Result&lt;T&gt;</code> union so success/failure is visible in the type signature, and callers must check <code>.ok</code> before touching <code>.value</code></span>',
  ]
},
{
  id:'tsconfig',
  title:'tsconfig & Compiler Configuration',
  icon:'⚙️',
  explain:`<p><code>tsconfig.json</code> is the configuration file that tells the TypeScript compiler (<code>tsc</code>) how to check and build your project — which files to include, which JavaScript version to target, and how strict the type checking should be. Running <code>tsc --init</code> generates a starter file; running plain <code>tsc</code> in a folder with one compiles the whole project according to its settings.</p>
<p>The most important settings live under <code>compilerOptions</code>. <code>"strict": true</code> is a single switch that enables a whole family of safety checks at once (including <code>strictNullChecks</code>, which stops <code>null</code>/<code>undefined</code> from silently being assignable to every other type, and <code>noImplicitAny</code>, which errors on values TypeScript can't infer a type for). <code>"target"</code> controls which JS version the output uses (e.g. <code>"ES2020"</code>); <code>"module"</code> controls the module system (e.g. <code>"ESNext"</code> or <code>"CommonJS"</code>); <code>"outDir"</code>/<code>"rootDir"</code> control where compiled files land.</p>
<p>Other frequently used options: <code>"esModuleInterop"</code> smooths over interop with CommonJS packages; <code>"skipLibCheck"</code> speeds up builds by not re-checking <code>.d.ts</code> files; <code>"noEmit"</code> runs type checking only, without producing JS output (common when a bundler like Vite or webpack handles the actual compilation); <code>"include"</code>/<code>"exclude"</code> arrays control which files the compiler touches.</p>`,
  syntax:`<span class="op">{</span>
  <span class="str">"compilerOptions"</span>: <span class="op">{</span>
    <span class="str">"target"</span>: <span class="str">"ES2020"</span>,
    <span class="str">"module"</span>: <span class="str">"ESNext"</span>,
    <span class="str">"strict"</span>: <span class="kw">true</span>,             <span class="cmt">// enables all strict checks</span>
    <span class="str">"noImplicitAny"</span>: <span class="kw">true</span>,
    <span class="str">"strictNullChecks"</span>: <span class="kw">true</span>,
    <span class="str">"esModuleInterop"</span>: <span class="kw">true</span>,
    <span class="str">"skipLibCheck"</span>: <span class="kw">true</span>,
    <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
    <span class="str">"rootDir"</span>: <span class="str">"./src"</span>,
    <span class="str">"noEmit"</span>: <span class="kw">false</span>
  <span class="op">}</span>,
  <span class="str">"include"</span>: [<span class="str">"src/**/*"</span>],
  <span class="str">"exclude"</span>: [<span class="str">"node_modules"</span>, <span class="str">"dist"</span>]
<span class="op">}</span>`,
  examples:[
    {label:'strictNullChecks catches missing null handling',code:`<span class="cmt">// with "strictNullChecks": true</span>
<span class="kw">function</span> <span class="fn-name">getLength</span>(s: <span class="kw">string</span> <span class="op">|</span> <span class="kw">null</span>): <span class="kw">number</span> {
  <span class="cmt">// return s.length;  // ✗ Object is possibly 'null'</span>
  <span class="kw">return</span> s <span class="op">?</span> s.length : <span class="num">0</span>; <span class="cmt">// ✓ handled</span>
}
console.<span class="fn-name">log</span>(<span class="fn-name">getLength</span>(<span class="kw">null</span>));   <span class="cmt">// 0</span>
console.<span class="fn-name">log</span>(<span class="fn-name">getLength</span>(<span class="str">"hi"</span>));   <span class="cmt">// 2</span>`,out:'0  2'},
    {label:'noImplicitAny forces explicit typing',code:`<span class="cmt">// with "noImplicitAny": true</span>
<span class="cmt">// function add(a, b) { return a + b; } // ✗ 'a' implicitly has an 'any' type</span>

<span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): <span class="kw">number</span> { <span class="cmt">// ✓ explicit</span>
  <span class="kw">return</span> a + b;
}
console.<span class="fn-name">log</span>(<span class="fn-name">add</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// 5</span>`,out:'5'},
    {label:'noEmit: type-check only (bundler handles output)',code:`<span class="cmt">// tsconfig.json</span>
<span class="cmt">// { "compilerOptions": { "noEmit": true, "strict": true } }</span>

<span class="cmt">// package.json script:</span>
<span class="cmt">// "typecheck": "tsc --noEmit"</span>

<span class="cmt">// Vite/webpack still emits the JS bundle;</span>
<span class="cmt">// tsc only reports type errors, producing no output files</span>
console.<span class="fn-name">log</span>(<span class="str">"tsc --noEmit checks types without writing .js files"</span>);`,out:'"tsc --noEmit checks types without writing .js files"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace" font-weight="bold">tsconfig.json compilerOptions</text>
  <rect x="20" y="30" width="130" height="130" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="85" y="50" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">strict: true</text>
  <text x="30" y="70" fill="#9aa5b4" font-size="9">→ noImplicitAny</text>
  <text x="30" y="85" fill="#9aa5b4" font-size="9">→ strictNullChecks</text>
  <text x="30" y="100" fill="#9aa5b4" font-size="9">→ strictFunctionTypes</text>
  <text x="30" y="115" fill="#9aa5b4" font-size="9">→ alwaysStrict</text>
  <text x="30" y="135" fill="#5c6878" font-size="9">one flag, many checks</text>
  <rect x="170" y="30" width="130" height="60" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="235" y="50" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">target / module</text>
  <text x="180" y="70" fill="#9aa5b4" font-size="9">ES2020 / ESNext</text>
  <text x="180" y="83" fill="#9aa5b4" font-size="9">output JS shape</text>
  <rect x="170" y="100" width="130" height="60" rx="6" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="235" y="120" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">outDir / rootDir</text>
  <text x="180" y="140" fill="#9aa5b4" font-size="9">./dist  ./src</text>
  <text x="180" y="153" fill="#9aa5b4" font-size="9">file layout</text>
  <rect x="320" y="30" width="140" height="60" rx="6" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="390" y="50" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">include / exclude</text>
  <text x="330" y="70" fill="#9aa5b4" font-size="9">src/**/*</text>
  <text x="330" y="83" fill="#9aa5b4" font-size="9">node_modules</text>
  <rect x="320" y="100" width="140" height="60" rx="6" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="390" y="120" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">noEmit: true</text>
  <text x="330" y="140" fill="#9aa5b4" font-size="9">check only —</text>
  <text x="330" y="153" fill="#9aa5b4" font-size="9">bundler emits JS</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎛️</div>
<p><code>tsconfig.json</code> is like the <strong>settings panel on a factory inspection line</strong>. <code>"strict": true</code> is the master switch that turns on every quality-control sensor at once, rather than flipping each one individually. <code>"target"</code> decides which era of machinery (JS version) the final product must run on. <code>"outDir"</code>/<code>"rootDir"</code> mark where raw materials come in and where finished goods go out. <code>"noEmit"</code> runs the entire inspection line without actually packaging any product — useful when a separate packaging machine (a bundler) already handles that step.</p>`,
  flow:[
    '<span><strong>Create the config:</strong> Run <code>tsc --init</code> or hand-write <code>tsconfig.json</code> at the project root</span>',
    '<span><strong>Set target & module:</strong> Choose the output JS version and module system matching your runtime/bundler</span>',
    '<span><strong>Turn on strict:</strong> Enable <code>"strict": true</code> to activate <code>noImplicitAny</code>, <code>strictNullChecks</code>, and related safety checks together</span>',
    '<span><strong>Scope the project:</strong> Use <code>"include"</code>/<code>"exclude"</code> so <code>tsc</code> only processes the intended source files</span>',
    '<span><strong>Run the compiler:</strong> <code>tsc</code> emits JS per these settings, or <code>tsc --noEmit</code> just reports type errors when a bundler handles the actual build</span>',
  ]
},
];
