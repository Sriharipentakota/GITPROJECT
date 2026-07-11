import type { Concept } from '../types';

export const CONCEPTS: Concept[] = [
{
  id:'variables',
  title:'Variables',
  icon:'📦',
  explain:`<p>A <strong>variable</strong> is a named container that stores a value in memory. You give the container a name, put something in it, and retrieve it whenever you need it. JavaScript gives you three ways to declare a variable: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
<p><code>let</code> is for values that will change. <code>const</code> is for values that should stay fixed (though objects and arrays declared with const can still have their contents modified). <code>var</code> is the old style—it works but has confusing scoping rules, so prefer <code>let</code> and <code>const</code> in modern code.</p>
<p>Variables have a <em>name</em>, a <em>value</em>, and a <em>scope</em> (where in the code they can be accessed). Uninitialized <code>let</code> variables hold <code>undefined</code> until assigned.</p>`,
  syntax:`<span class="kw">let</span>   name = value;   <span class="cmt">// block-scoped, reassignable</span>
<span class="kw">const</span> name = value;   <span class="cmt">// block-scoped, cannot be reassigned</span>
<span class="kw">var</span>   name = value;   <span class="cmt">// function-scoped, hoisted (legacy)</span>

<span class="cmt">// Multiple declarations</span>
<span class="kw">let</span> a = <span class="num">1</span>, b = <span class="num">2</span>, c = <span class="num">3</span>;

<span class="cmt">// Destructuring</span>
<span class="kw">let</span> [x, y] = [<span class="num">10</span>, <span class="num">20</span>];
<span class="kw">let</span> { name, age } = person;`,
  examples:[
    {label:'Basic declaration & assignment',code:`<span class="kw">let</span> score = <span class="num">0</span>;
score = <span class="num">10</span>;             <span class="cmt">// reassign is OK with let</span>
<span class="kw">const</span> PI = <span class="num">3.14159</span>;   <span class="cmt">// cannot change PI later</span>
console.<span class="fn-name">log</span>(score, PI); <span class="cmt">// 10  3.14159</span>`,out:'10  3.14159'},
    {label:'Const with objects (mutation is OK)',code:`<span class="kw">const</span> user = { name: <span class="str">"Alice"</span> };
user.name = <span class="str">"Bob"</span>;    <span class="cmt">// ✓ mutating property</span>
<span class="cmt">// user = {};          // ✗ would throw TypeError</span>
console.<span class="fn-name">log</span>(user.name); <span class="cmt">// "Bob"</span>`,out:'"Bob"'},
    {label:'Hoisting difference: var vs let',code:`console.<span class="fn-name">log</span>(a); <span class="cmt">// undefined (var hoisted)</span>
<span class="kw">var</span> a = <span class="num">5</span>;
<span class="cmt">// console.log(b); // ReferenceError (let NOT hoisted)</span>
<span class="kw">let</span> b = <span class="num">5</span>;`,out:'undefined'},
  ],
  svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3z" fill="#9aa5b4"/>
    </marker>
  </defs>
  <!-- let row -->
  <rect x="10" y="30" width="60" height="28" rx="4" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="40" y="49" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace">let</text>
  <rect x="90" y="20" width="130" height="48" rx="6" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="155" y="41" text-anchor="middle" fill="#e8eaed" font-size="12" font-family="monospace">userName</text>
  <text x="155" y="58" text-anchor="middle" fill="#9aa5b4" font-size="10" font-family="monospace">name / identifier</text>
  <line x1="220" y1="44" x2="258" y2="44" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="258" y="20" width="120" height="48" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="318" y="41" text-anchor="middle" fill="#4ade80" font-size="12" font-family="monospace">"Alice"</text>
  <text x="318" y="57" text-anchor="middle" fill="#9aa5b4" font-size="10">value stored</text>
  <!-- const row -->
  <rect x="10" y="100" width="60" height="28" rx="4" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="40" y="119" text-anchor="middle" fill="#c792ea" font-size="12" font-family="monospace">const</text>
  <rect x="90" y="90" width="130" height="48" rx="6" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="155" y="111" text-anchor="middle" fill="#e8eaed" font-size="12" font-family="monospace">MAX_SCORE</text>
  <text x="155" y="128" text-anchor="middle" fill="#9aa5b4" font-size="10">cannot be reassigned</text>
  <line x1="220" y1="114" x2="258" y2="114" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="258" y="90" width="120" height="48" rx="6" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="318" y="111" text-anchor="middle" fill="#f78c6c" font-size="12" font-family="monospace">100</text>
  <text x="318" y="127" text-anchor="middle" fill="#9aa5b4" font-size="10">sealed value</text>
  <!-- labels -->
  <text x="155" y="168" text-anchor="middle" fill="#5c6878" font-size="11">Identifier (name)</text>
  <text x="318" y="168" text-anchor="middle" fill="#5c6878" font-size="11">Value in memory</text>
  <text x="40" y="168" text-anchor="middle" fill="#5c6878" font-size="11">Keyword</text>
  <!-- lock icon for const -->
  <text x="392" y="114" fill="#f87171" font-size="14">🔒</text>
</svg>`,
  analogy:`<div class="analogy-icon">🏬</div>
<p>Think of variables as <strong>labeled storage boxes in a warehouse</strong>. The label is the variable name, and whatever you put inside is the value.</p>
<p><strong>let</strong> is a regular box — you can swap its contents anytime. <strong>const</strong> is a sealed box — once you put something in, you can't replace it (but if the box holds a bag, you can rearrange what's in the bag). <strong>var</strong> is an old-style box that floats to the front of the entire warehouse floor (function), not just its shelf (block) — which causes surprises.</p>`,
  flow:[
    '<span><strong>Declaration:</strong> JavaScript reserves memory and creates a named slot — <code>let score;</code></span>',
    '<span><strong>Initialization:</strong> Assign a starting value — <code>score = 0;</code> (or in one step: <code>let score = 0;</code>)</span>',
    '<span><strong>Access:</strong> Read the stored value — <code>console.log(score);</code></span>',
    '<span><strong>Reassignment (let/var):</strong> Replace the value — <code>score = 100;</code></span>',
    '<span><strong>Scope end:</strong> Block-scoped variables (let/const) are garbage-collected when their block exits.</span>',
  ]
},
{
  id:'datatypes',
  title:'Data Types',
  icon:'🔢',
  explain:`<p>Every value in JavaScript has a <strong>data type</strong> — a classification that determines what operations can be performed on it. JavaScript has <strong>8 built-in types</strong> in two categories: <em>primitives</em> and <em>reference types</em>.</p>
<p>The 7 <strong>primitives</strong> are: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, and <code>bigint</code>. Primitives are immutable and compared by <em>value</em>. <strong>Reference types</strong> (objects, arrays, functions) are compared by <em>reference</em> — two variables can point to the same object in memory.</p>
<p>JavaScript is <em>dynamically typed</em>: a variable's type is set at runtime and can change. The <code>typeof</code> operator returns the type as a string. Watch out: <code>typeof null</code> returns <code>"object"</code> — a famous historical bug kept for compatibility.</p>`,
  syntax:`<span class="kw">typeof</span> value           <span class="cmt">// returns type string</span>
<span class="fn-name">Number</span>(value)           <span class="cmt">// explicit → number</span>
<span class="fn-name">String</span>(value)           <span class="cmt">// explicit → string</span>
<span class="fn-name">Boolean</span>(value)          <span class="cmt">// explicit → boolean</span>
<span class="fn-name">parseInt</span>(str, <span class="num">10</span>)       <span class="cmt">// string → integer</span>
<span class="fn-name">parseFloat</span>(str)          <span class="cmt">// string → float</span>
Array.<span class="fn-name">isArray</span>(value)    <span class="cmt">// true if array</span>
Number.<span class="fn-name">isNaN</span>(value)     <span class="cmt">// true only for NaN</span>`,
  examples:[
    {label:'typeof on different values',code:`<span class="kw">typeof</span> <span class="str">"hello"</span>      <span class="cmt">// "string"</span>
<span class="kw">typeof</span> <span class="num">42</span>           <span class="cmt">// "number"</span>
<span class="kw">typeof</span> <span class="kw">true</span>         <span class="cmt">// "boolean"</span>
<span class="kw">typeof</span> <span class="kw">undefined</span>    <span class="cmt">// "undefined"</span>
<span class="kw">typeof</span> <span class="kw">null</span>         <span class="cmt">// "object"  ← quirk!</span>
<span class="kw">typeof</span> []           <span class="cmt">// "object"  ← arrays too!</span>
<span class="kw">typeof</span> <span class="kw">function</span>(){} <span class="cmt">// "function"</span>`,out:'"string", "number", "boolean", "undefined", "object", "object", "function"'},
    {label:'Implicit vs explicit type coercion',code:`<span class="cmt">// Implicit (JS does it automatically)</span>
<span class="str">"5"</span> <span class="op">+</span> <span class="num">3</span>         <span class="cmt">// "53"  (string wins with +)</span>
<span class="str">"5"</span> <span class="op">-</span> <span class="num">3</span>         <span class="cmt">// 2     (- forces numeric)</span>
<span class="cmt">// Explicit (you control it)</span>
<span class="fn-name">Number</span>(<span class="str">"42"</span>)    <span class="cmt">// 42</span>
<span class="fn-name">String</span>(<span class="num">99</span>)      <span class="cmt">// "99"</span>
<span class="fn-name">Boolean</span>(<span class="num">0</span>)     <span class="cmt">// false</span>`,out:'"53", 2, 42, "99", false'},
    {label:'The 6 falsy values',code:`<span class="fn-name">Boolean</span>(<span class="kw">false</span>)      <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="num">0</span>)          <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="str">""</span>)         <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="kw">null</span>)       <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="kw">undefined</span>)  <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(NaN)        <span class="cmt">// false</span>
<span class="cmt">// Everything else is truthy</span>`,out:'false (all 6)'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <rect x="165" y="8" width="150" height="30" rx="5" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="28" text-anchor="middle" fill="#f5a623" font-size="13" font-family="monospace">JS Data Types</text>
  <line x1="215" y1="38" x2="110" y2="66" stroke="#5c6878" stroke-width="1"/>
  <line x1="265" y1="38" x2="370" y2="66" stroke="#5c6878" stroke-width="1"/>
  <rect x="22" y="66" width="176" height="28" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="110" y="85" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="monospace">Primitives (7) — value</text>
  <rect x="286" y="66" width="176" height="28" rx="4" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="374" y="85" text-anchor="middle" fill="#c792ea" font-size="12" font-family="monospace">Reference — pointer</text>
  <line x1="110" y1="94" x2="110" y2="114" stroke="#2d3456" stroke-width="1"/>
  <line x1="374" y1="94" x2="374" y2="114" stroke="#2d3456" stroke-width="1"/>
  <text x="8" y="130" fill="#c3e88d" font-size="11" font-family="monospace">string</text>
  <text x="58" y="130" fill="#f78c6c" font-size="11" font-family="monospace">number</text>
  <text x="115" y="130" fill="#fbbf24" font-size="11" font-family="monospace">boolean</text>
  <text x="175" y="130" fill="#9aa5b4" font-size="11" font-family="monospace">null</text>
  <text x="8" y="152" fill="#9aa5b4" font-size="11" font-family="monospace">undefined</text>
  <text x="90" y="152" fill="#60a5fa" font-size="11" font-family="monospace">symbol</text>
  <text x="155" y="152" fill="#60a5fa" font-size="11" font-family="monospace">bigint</text>
  <text x="296" y="130" fill="#c792ea" font-size="11" font-family="monospace">{ } Object</text>
  <text x="296" y="150" fill="#c792ea" font-size="11" font-family="monospace">[ ] Array</text>
  <text x="296" y="170" fill="#c792ea" font-size="11" font-family="monospace">ƒ  Function</text>
  <text x="296" y="190" fill="#c792ea" font-size="11" font-family="monospace">Date, Map, Set…</text>
  <text x="8" y="198" fill="#5c6878" font-size="10">immutable · compared by value</text>
  <text x="296" y="208" fill="#5c6878" font-size="10">mutable · compared by reference</text>
</svg>`,
  analogy:`<div class="analogy-icon">📫</div>
<p>Think of types as <strong>different container shapes</strong>. A <strong>string</strong> is an envelope — holds only text. A <strong>number</strong> is a measuring cup — holds a numeric amount. A <strong>boolean</strong> is a light switch — only on or off. <strong>null</strong> is a labeled empty box ("officially nothing here"). <strong>undefined</strong> is a shelf with no box on it yet.</p>
<p>Reference types (objects, arrays) are like a <strong>shared whiteboard</strong> — multiple variables can point to the same board, and a change by one is seen by all who share it.</p>`,
  flow:[
    '<span><strong>Value written:</strong> A literal appears — <code>42</code>, <code>"hi"</code>, <code>true</code>, <code>[]</code></span>',
    '<span><strong>Type inferred:</strong> JS engine classifies it at runtime — no explicit annotation needed</span>',
    '<span><strong>typeof query:</strong> <code>typeof value</code> returns the type as a lowercase string</span>',
    '<span><strong>Operations governed by type:</strong> <code>+</code> on strings concatenates; on numbers it adds</span>',
    '<span><strong>Coercion fires:</strong> When types mix, JS converts one automatically (implicit) or you do it manually (explicit: <code>Number()</code>, <code>String()</code>)</span>',
    '<span><strong>NaN guard:</strong> Numeric ops on non-numeric strings yield <code>NaN</code> — detect with <code>Number.isNaN()</code>, not <code>=== NaN</code></span>',
  ]
},
{
  id:'operators',
  title:'Operators',
  icon:'⚙️',
  explain:`<p>An <strong>operator</strong> is a symbol that performs an operation on one or more values (called <em>operands</em>). JavaScript has five main operator groups: <strong>arithmetic</strong> (+, -, *, /, %, **), <strong>comparison</strong> (===, !==, >, <, >=, <=), <strong>logical</strong> (&&, ||, !, ??), <strong>assignment</strong> (=, +=, -=…), and the <strong>ternary</strong> (? :).</p>
<p>Two critical distinctions: <code>==</code> (loose equality) coerces types before comparing — <code>5 == "5"</code> is <code>true</code>. <code>===</code> (strict equality) requires the same type AND value — <code>5 === "5"</code> is <code>false</code>. Always prefer <code>===</code> to avoid coercion surprises.</p>
<p><strong>Short-circuit evaluation</strong>: <code>&&</code> stops and returns the first falsy value; <code>||</code> stops and returns the first truthy value. <code>??</code> (nullish coalescing) returns the right side only when the left is <code>null</code> or <code>undefined</code> — unlike <code>||</code> it treats <code>0</code> and <code>""</code> as valid values.</p>`,
  syntax:`<span class="cmt">// Arithmetic</span>
<span class="op">+  -  *  /  %  **</span>          <span class="cmt">// 2**3 = 8, 10%3 = 1</span>
<span class="cmt">// Comparison</span>
<span class="op">===  !==  >  <  >=  <=</span>     <span class="cmt">// strict preferred</span>
<span class="op">==   !=</span>                      <span class="cmt">// loose (avoid)</span>
<span class="cmt">// Logical</span>
<span class="op">&&   ||   !   ??</span>            <span class="cmt">// short-circuit</span>
<span class="cmt">// Assignment</span>
<span class="op">=  +=  -=  *=  /=  %=  **=</span>
<span class="op">&&=  ||=  ??=</span>               <span class="cmt">// logical assignment</span>
<span class="cmt">// Ternary</span>
condition <span class="op">?</span> ifTrue <span class="op">:</span> ifFalse`,
  examples:[
    {label:'Arithmetic & strict vs loose equality',code:`<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>          <span class="cmt">// 1  (remainder)</span>
<span class="num">2</span> <span class="op">**</span> <span class="num">8</span>          <span class="cmt">// 256 (exponent)</span>
<span class="num">5</span> <span class="op">==</span>  <span class="str">"5"</span>       <span class="cmt">// true  (coerces type)</span>
<span class="num">5</span> <span class="op">===</span> <span class="str">"5"</span>       <span class="cmt">// false (strict: different types)</span>`,out:'1, 256, true, false'},
    {label:'Short-circuit & nullish coalescing',code:`<span class="kw">false</span> <span class="op">||</span> <span class="str">"hello"</span>    <span class="cmt">// "hello" (first truthy)</span>
<span class="num">0</span>     <span class="op">||</span> <span class="str">"fallback"</span> <span class="cmt">// "fallback" (0 is falsy)</span>
<span class="num">0</span>     <span class="op">??</span> <span class="str">"fallback"</span> <span class="cmt">// 0 (0 is NOT null/undefined)</span>
<span class="kw">null</span>  <span class="op">??</span> <span class="str">"default"</span>  <span class="cmt">// "default"</span>
isOk  <span class="op">&&</span> <span class="fn-name">doWork</span>()   <span class="cmt">// doWork runs only if isOk truthy</span>`,out:'"hello", "fallback", 0, "default"'},
    {label:'Ternary & compound assignment',code:`<span class="kw">let</span> age = <span class="num">20</span>;
<span class="kw">let</span> label = age <span class="op">>=</span> <span class="num">18</span> <span class="op">?</span> <span class="str">"adult"</span> <span class="op">:</span> <span class="str">"minor"</span>; <span class="cmt">// "adult"</span>
<span class="kw">let</span> score = <span class="num">50</span>;
score <span class="op">+=</span> <span class="num">10</span>;   <span class="cmt">// score = score + 10 → 60</span>
score <span class="op">**=</span> <span class="num">2</span>;   <span class="cmt">// score = score² → 3600</span>`,out:'"adult", score → 3600'},
  ],
  svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="18" text-anchor="middle" fill="#f5a623" font-size="13" font-family="monospace" font-weight="bold">JavaScript Operators</text>
  <rect x="8" y="28" width="135" height="82" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="75" y="46" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">Arithmetic</text>
  <text x="14" y="62" fill="#e8eaed" font-size="11" font-family="monospace">+ - * / % **</text>
  <text x="14" y="78" fill="#9aa5b4" font-size="10">5 + 3  → 8</text>
  <text x="14" y="93" fill="#9aa5b4" font-size="10">10 % 3 → 1</text>
  <text x="14" y="108" fill="#9aa5b4" font-size="10">2 ** 4 → 16</text>
  <rect x="153" y="28" width="135" height="82" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="221" y="46" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">Comparison</text>
  <text x="159" y="62" fill="#e8eaed" font-size="11" font-family="monospace">=== !== > < >=</text>
  <text x="159" y="78" fill="#9aa5b4" font-size="10">5 === 5   → true</text>
  <text x="159" y="93" fill="#9aa5b4" font-size="10">5 ==  "5" → true</text>
  <text x="159" y="108" fill="#9aa5b4" font-size="10">5 === "5" → false</text>
  <rect x="298" y="28" width="174" height="82" rx="5" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="385" y="46" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">Logical</text>
  <text x="304" y="62" fill="#e8eaed" font-size="11" font-family="monospace">&amp;&amp; || ! ??</text>
  <text x="304" y="78" fill="#9aa5b4" font-size="10">true &amp;&amp; false → false</text>
  <text x="304" y="93" fill="#9aa5b4" font-size="10">false || "hi" → "hi"</text>
  <text x="304" y="108" fill="#9aa5b4" font-size="10">null ?? "ok" → "ok"</text>
  <rect x="8" y="120" width="135" height="82" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="75" y="138" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">Assignment</text>
  <text x="14" y="154" fill="#e8eaed" font-size="11" font-family="monospace">= += -= *=</text>
  <text x="14" y="170" fill="#9aa5b4" font-size="10">x += 5 → x = x+5</text>
  <text x="14" y="185" fill="#9aa5b4" font-size="10">x **= 2 → x²</text>
  <text x="14" y="200" fill="#9aa5b4" font-size="10">x ??= y → if null</text>
  <rect x="153" y="120" width="319" height="82" rx="5" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="312" y="138" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">Ternary / Nullish</text>
  <text x="159" y="154" fill="#e8eaed" font-size="10" font-family="monospace">cond ? ifTrue : ifFalse</text>
  <text x="159" y="170" fill="#9aa5b4" font-size="10">age >= 18 ? "adult" : "minor"</text>
  <text x="159" y="185" fill="#9aa5b4" font-size="10">name ?? "Anonymous"</text>
  <text x="159" y="200" fill="#9aa5b4" font-size="10">isReady &amp;&amp; doWork()</text>
</svg>`,
  analogy:`<div class="analogy-icon">🧰</div>
<p>Operators are <strong>tools in a toolbox</strong> — each designed for one job. A hammer (<code>+</code>) drives nails (adds values). A measuring tape (<code>===</code>) checks if two lengths match exactly. A gate (<code>&&</code>) only lets you through if both conditions are met. A fallback plan (<code>??</code>) kicks in only when there is nothing at all — not just when things look bad.</p>
<p>The key skill is knowing which tool to reach for: <code>||</code> for "use this if the left side looks bad," <code>??</code> for "use this only if the left side is truly absent," and <code>===</code> over <code>==</code> to avoid surprises.</p>`,
  flow:[
    '<span><strong>Operands are evaluated:</strong> JavaScript resolves both sides of the operator to their current values</span>',
    '<span><strong>Precedence decides order:</strong> <code>*</code> and <code>/</code> before <code>+</code> and <code>-</code>; use parentheses to override</span>',
    '<span><strong>Comparison runs:</strong> <code>===</code> checks type then value; <code>==</code> coerces types first (avoid)</span>',
    '<span><strong>Short-circuit fires:</strong> <code>&&</code> stops at first falsy; <code>||</code> stops at first truthy; <code>??</code> stops only at non-null/undefined</span>',
    '<span><strong>Ternary selects branch:</strong> condition is evaluated → truthy returns left, falsy returns right</span>',
    '<span><strong>Compound assignment updates in-place:</strong> <code>x += 5</code> is shorthand for <code>x = x + 5</code></span>',
  ]
},
{
  id:'conditionals',
  title:'Conditionals',
  icon:'🔀',
  explain:`<p><strong>Conditionals</strong> let your program make decisions — executing different code depending on whether a condition is true or false. The primary tool is <code>if / else if / else</code>. JavaScript evaluates the condition and coerces it to a boolean: any value that is not <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, or <code>NaN</code> is <em>truthy</em>.</p>
<p><code>switch</code> is the cleaner alternative when you're comparing <strong>one value against many fixed options</strong>. It uses strict (<code>===</code>) comparison internally. Always use <code>break</code> to exit a case — without it, execution <em>falls through</em> to the next case automatically.</p>
<p>Key rules: <code>else if</code> chains are <strong>mutually exclusive</strong> — at most one branch runs. Two separate <code>if</code> statements are NOT mutually exclusive — both can run. Braces <code>{}</code> (not indentation) define what is inside an <code>if</code> block.</p>`,
  syntax:`<span class="kw">if</span> (condition) {
  <span class="cmt">// runs when condition is truthy</span>
} <span class="kw">else if</span> (condition2) {
  <span class="cmt">// runs when condition2 is truthy</span>
} <span class="kw">else</span> {
  <span class="cmt">// fallback — runs when none match</span>
}

<span class="kw">switch</span> (value) {
  <span class="kw">case</span> <span class="str">"a"</span>:  doA(); <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"b"</span>:  doB(); <span class="kw">break</span>;
  <span class="kw">default</span>: doC(); <span class="cmt">// no break needed</span>
}`,
  examples:[
    {label:'if / else if / else chain',code:`<span class="kw">let</span> score = <span class="num">85</span>;
<span class="kw">if</span> (score <span class="op">>=</span> <span class="num">90</span>)      grade = <span class="str">"A"</span>;
<span class="kw">else if</span> (score <span class="op">>=</span> <span class="num">80</span>) grade = <span class="str">"B"</span>; <span class="cmt">// ← this runs</span>
<span class="kw">else if</span> (score <span class="op">>=</span> <span class="num">70</span>) grade = <span class="str">"C"</span>;
<span class="kw">else</span>                  grade = <span class="str">"F"</span>;
console.<span class="fn-name">log</span>(grade); <span class="cmt">// "B"</span>`,out:'"B"'},
    {label:'switch with fall-through',code:`<span class="kw">let</span> day = <span class="num">6</span>;
<span class="kw">switch</span>(day) {
  <span class="kw">case</span> <span class="num">6</span>:
  <span class="kw">case</span> <span class="num">7</span>: console.<span class="fn-name">log</span>(<span class="str">"Weekend"</span>); <span class="kw">break</span>;
  <span class="kw">default</span>: console.<span class="fn-name">log</span>(<span class="str">"Weekday"</span>);
}
<span class="cmt">// case 6 falls through to case 7 → "Weekend"</span>`,out:'"Weekend"'},
    {label:'Truthy/falsy & guard patterns',code:`<span class="kw">if</span> (<span class="str">""</span>)        console.<span class="fn-name">log</span>(<span class="str">"A"</span>); <span class="cmt">// skipped — falsy</span>
<span class="kw">if</span> (<span class="num">0</span>)         console.<span class="fn-name">log</span>(<span class="str">"B"</span>); <span class="cmt">// skipped — falsy</span>
<span class="kw">if</span> ([])        console.<span class="fn-name">log</span>(<span class="str">"C"</span>); <span class="cmt">// runs — [] is truthy!</span>
<span class="kw">if</span> (isAuth) <span class="fn-name">loadUser</span>(); <span class="cmt">// guard pattern</span>`,out:'"C"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <polygon points="210,20 270,55 210,90 150,55" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="210" y="50" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">if (cond)</text>
  <text x="210" y="63" text-anchor="middle" fill="#9aa5b4" font-size="9">evaluate</text>
  <line x1="150" y1="55" x2="70" y2="55" stroke="#4ade80" stroke-width="1.5" marker-end="url(#ah2)"/>
  <text x="110" y="47" text-anchor="middle" fill="#4ade80" font-size="10">true</text>
  <rect x="5" y="38" width="65" height="34" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="37" y="59" text-anchor="middle" fill="#4ade80" font-size="11">if block</text>
  <line x1="210" y1="90" x2="210" y2="115" stroke="#f87171" stroke-width="1.5" marker-end="url(#ah2)"/>
  <text x="222" y="107" fill="#f87171" font-size="10">false</text>
  <polygon points="210,115 270,150 210,185 150,150" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="210" y="146" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">else if</text>
  <text x="210" y="159" text-anchor="middle" fill="#9aa5b4" font-size="9">(cond2)</text>
  <line x1="150" y1="150" x2="70" y2="150" stroke="#4ade80" stroke-width="1.5" marker-end="url(#ah2)"/>
  <text x="110" y="142" text-anchor="middle" fill="#4ade80" font-size="10">true</text>
  <rect x="5" y="133" width="65" height="34" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="37" y="153" text-anchor="middle" fill="#60a5fa" font-size="10">else if</text>
  <text x="37" y="164" text-anchor="middle" fill="#9aa5b4" font-size="9">block</text>
  <line x1="210" y1="185" x2="210" y2="205" stroke="#f87171" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="155" y="205" width="110" height="28" rx="4" fill="#1e2338" stroke="#9aa5b4" stroke-width="1.5"/>
  <text x="210" y="224" text-anchor="middle" fill="#9aa5b4" font-size="11">else block</text>
  <rect x="300" y="5" width="175" height="210" rx="6" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="387" y="26" text-anchor="middle" fill="#c792ea" font-size="12" font-family="monospace">switch(val)</text>
  <line x1="300" y1="33" x2="475" y2="33" stroke="#2d3456" stroke-width="1"/>
  <text x="308" y="52" fill="#e8eaed" font-size="11" font-family="monospace">case 1:</text>
  <text x="322" y="67" fill="#9aa5b4" font-size="10">run; break;</text>
  <text x="308" y="87" fill="#e8eaed" font-size="11" font-family="monospace">case 2:</text>
  <text x="322" y="102" fill="#9aa5b4" font-size="10">run; break;</text>
  <text x="308" y="122" fill="#fbbf24" font-size="11" font-family="monospace">case 3:  ↓</text>
  <text x="322" y="137" fill="#9aa5b4" font-size="10">fall-through</text>
  <text x="308" y="157" fill="#fbbf24" font-size="11" font-family="monospace">case 4:</text>
  <text x="322" y="172" fill="#9aa5b4" font-size="10">run; break;</text>
  <text x="308" y="193" fill="#f87171" font-size="11" font-family="monospace">default:</text>
  <text x="322" y="207" fill="#9aa5b4" font-size="10">fallback</text>
</svg>`,
  analogy:`<div class="analogy-icon">🚦</div>
<p>Conditionals are like a <strong>traffic light system</strong>. At each intersection (condition), the light decides which path traffic takes. <code>if</code> is the green light. <code>else if</code> is a second junction if the first was red. <code>else</code> is the final detour when everything else was blocked.</p>
<p><code>switch</code> is like a <strong>hotel reception desk</strong> — the guest's room number (value) is matched to the right key (case). If no room matches, a default key handles them. Forgetting to return the key (no <code>break</code>) means the clerk keeps checking all remaining rooms — fall-through.</p>`,
  flow:[
    '<span><strong>Condition evaluated:</strong> The expression inside <code>if ()</code> is coerced to boolean (truthy/falsy)</span>',
    '<span><strong>Branch selected:</strong> First truthy condition wins — its block runs, all others are skipped</span>',
    '<span><strong>else if chain:</strong> Checked in order top-to-bottom — only one branch executes</span>',
    '<span><strong>else:</strong> Runs only if every previous condition was falsy — the guaranteed fallback</span>',
    '<span><strong>switch evaluation:</strong> value is compared with <code>===</code> to each case label sequentially</span>',
    '<span><strong>break / fall-through:</strong> <code>break</code> exits the switch; without it, execution continues into the next case</span>',
  ]
},
{
  id:'loops',
  title:'Loops',
  icon:'🔁',
  explain:`<p>A <strong>loop</strong> repeatedly executes a block of code as long as a condition is true. JavaScript has five loop forms: <code>for</code> (known iteration count), <code>while</code> (unknown count, check first), <code>do...while</code> (check after — runs at least once), <code>for...of</code> (iterate over iterable <em>values</em>), and <code>for...in</code> (iterate over object <em>keys</em>).</p>
<p><strong>break</strong> exits the loop entirely. <strong>continue</strong> skips the rest of the current iteration and jumps to the next. Labeled breaks (<code>break outerLabel</code>) can exit nested loops in one step.</p>
<p>Key warnings: forgetting to increment in a <code>while</code> loop causes an <strong>infinite loop</strong>. Using <code>for...in</code> on arrays gives string indices (<code>"0","1","2"</code>), not values — use <code>for...of</code> for values. <code>var</code> in a <code>for</code> loop leaks out of the block — use <code>let</code> for per-iteration scope, which matters in closures (e.g., <code>setTimeout</code> inside loops).</p>`,
  syntax:`<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> n; i++) { <span class="cmt">/* body */</span> }
<span class="kw">while</span> (condition) { <span class="cmt">/* body */</span> }
<span class="kw">do</span> { <span class="cmt">/* body */</span> } <span class="kw">while</span> (condition);

<span class="kw">for</span> (<span class="kw">const</span> item <span class="kw">of</span> array)  { <span class="cmt">// values</span> }
<span class="kw">for</span> (<span class="kw">const</span> key  <span class="kw">in</span> object) { <span class="cmt">// keys</span>   }

<span class="kw">break</span>;              <span class="cmt">// exit loop</span>
<span class="kw">continue</span>;           <span class="cmt">// skip iteration</span>
<span class="kw">break</span> outerLabel;   <span class="cmt">// exit named loop</span>`,
  examples:[
    {label:'for / while / do...while',code:`<span class="cmt">// for — known count</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) console.<span class="fn-name">log</span>(i); <span class="cmt">// 0 1 2</span>

<span class="cmt">// while — condition-based</span>
<span class="kw">let</span> n = <span class="num">3</span>;
<span class="kw">while</span> (n <span class="op">></span> <span class="num">0</span>) { console.<span class="fn-name">log</span>(n); n--; } <span class="cmt">// 3 2 1</span>

<span class="cmt">// do...while — runs at least once</span>
<span class="kw">let</span> x = <span class="num">10</span>;
<span class="kw">do</span> { console.<span class="fn-name">log</span>(<span class="str">"ran"</span>); } <span class="kw">while</span> (x <span class="op"><</span> <span class="num">5</span>); <span class="cmt">// "ran" once</span>`,out:'0 1 2 | 3 2 1 | "ran"'},
    {label:'for...of vs for...in',code:`<span class="kw">const</span> arr = [<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>];
<span class="kw">for</span> (<span class="kw">const</span> val <span class="kw">of</span> arr)  console.<span class="fn-name">log</span>(val); <span class="cmt">// a b c (values)</span>
<span class="kw">for</span> (<span class="kw">const</span> key <span class="kw">in</span> arr)  console.<span class="fn-name">log</span>(key); <span class="cmt">// "0" "1" "2" (indices!)</span>

<span class="kw">const</span> obj = { x: <span class="num">1</span>, y: <span class="num">2</span> };
<span class="kw">for</span> (<span class="kw">const</span> k <span class="kw">in</span> obj) console.<span class="fn-name">log</span>(k, obj[k]); <span class="cmt">// x 1  y 2</span>`,out:'a b c | "0" "1" "2" | x 1  y 2'},
    {label:'break, continue & labeled break',code:`<span class="cmt">// continue — skip even numbers</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">6</span>; i++) {
  <span class="kw">if</span> (i <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>) <span class="kw">continue</span>;
  console.<span class="fn-name">log</span>(i); <span class="cmt">// 1 3 5</span>
}
<span class="cmt">// labeled break — exit nested loop</span>
<span class="fn-name">outer</span>: <span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) {
  <span class="kw">for</span> (<span class="kw">let</span> j = <span class="num">0</span>; j <span class="op"><</span> <span class="num">3</span>; j++) {
    <span class="kw">if</span> (j <span class="op">===</span> <span class="num">1</span>) <span class="kw">break</span> <span class="fn-name">outer</span>; <span class="cmt">// exits both loops</span>
  }
}`,out:'1 3 5 | exits at j=1'},
  ],
  svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ahl" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <rect x="8" y="48" width="90" height="36" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="53" y="62" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Init</text>
  <text x="53" y="76" text-anchor="middle" fill="#9aa5b4" font-size="9">let i = 0</text>
  <line x1="98" y1="66" x2="112" y2="66" stroke="#5c6878" stroke-width="1.5" marker-end="url(#ahl)"/>
  <polygon points="163,44 215,66 163,90 111,66" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="163" y="62" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">i &lt; n ?</text>
  <text x="163" y="75" text-anchor="middle" fill="#9aa5b4" font-size="9">check</text>
  <line x1="215" y1="66" x2="245" y2="66" stroke="#4ade80" stroke-width="1.5" marker-end="url(#ahl)"/>
  <text x="230" y="58" fill="#4ade80" font-size="9">true</text>
  <rect x="245" y="48" width="90" height="36" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="290" y="62" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Body</text>
  <text x="290" y="76" text-anchor="middle" fill="#9aa5b4" font-size="9">// your code</text>
  <line x1="290" y1="84" x2="290" y2="112" stroke="#5c6878" stroke-width="1.5" marker-end="url(#ahl)"/>
  <rect x="245" y="112" width="90" height="36" rx="4" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="290" y="126" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Update</text>
  <text x="290" y="140" text-anchor="middle" fill="#9aa5b4" font-size="9">i++</text>
  <path d="M245,130 Q163,158 163,90" stroke="#5c6878" stroke-width="1.5" fill="none" marker-end="url(#ahl)"/>
  <line x1="163" y1="90" x2="163" y2="162" stroke="#f87171" stroke-width="1.5" marker-end="url(#ahl)"/>
  <text x="145" y="132" fill="#f87171" font-size="9">false</text>
  <rect x="113" y="162" width="100" height="28" rx="4" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="163" y="181" text-anchor="middle" fill="#f87171" font-size="11">exit loop</text>
  <rect x="370" y="5" width="106" height="210" rx="6" fill="#1e2338" stroke="#9aa5b4" stroke-width="1.5"/>
  <text x="423" y="22" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">Other Types</text>
  <line x1="370" y1="29" x2="476" y2="29" stroke="#2d3456" stroke-width="1"/>
  <text x="378" y="47" fill="#f5a623" font-size="10" font-family="monospace">while(c) {}</text>
  <text x="378" y="60" fill="#5c6878" font-size="9">check first</text>
  <text x="378" y="80" fill="#f5a623" font-size="10" font-family="monospace">do{}while(c)</text>
  <text x="378" y="93" fill="#5c6878" font-size="9">run first</text>
  <text x="378" y="113" fill="#60a5fa" font-size="10" font-family="monospace">for..of arr</text>
  <text x="378" y="126" fill="#5c6878" font-size="9">→ values</text>
  <text x="378" y="146" fill="#c792ea" font-size="10" font-family="monospace">for..in obj</text>
  <text x="378" y="159" fill="#5c6878" font-size="9">→ keys</text>
  <text x="378" y="179" fill="#4ade80" font-size="10" font-family="monospace">break/cont</text>
  <text x="378" y="192" fill="#5c6878" font-size="9">exit/skip</text>
</svg>`,
  analogy:`<div class="analogy-icon">🫧</div>
<p>Think of a loop as a <strong>washing machine cycle</strong>. It keeps spinning (iterating) until the timer reaches zero (condition fails). <code>break</code> is the emergency stop button — press it and the machine halts immediately. <code>continue</code> is like skipping the spin cycle for one load — skip this step, move to the next item.</p>
<p><code>for</code> is a machine pre-set to 5 cycles (known count). <code>while</code> is a machine that keeps running until the water is clean (unknown count). <code>do...while</code> is a machine that always does at least one wash before checking if it needs another.</p>`,
  flow:[
    '<span><strong>Initialize:</strong> A counter or variable is set before the loop — <code>let i = 0</code></span>',
    '<span><strong>Check condition:</strong> Before each iteration, the condition is evaluated — if false, loop exits</span>',
    '<span><strong>Execute body:</strong> The code inside the loop runs for this iteration</span>',
    '<span><strong>Update:</strong> The counter is incremented/decremented — <code>i++</code>, <code>i--</code>, <code>i += 2</code></span>',
    '<span><strong>Repeat:</strong> Jump back to step 2 — loop continues until condition is false</span>',
    '<span><strong>break / continue:</strong> <code>break</code> exits immediately; <code>continue</code> skips to the next iteration</span>',
  ]
},
{
  id:'functions',
  title:'Functions',
  icon:'⚙️',
  explain:`<p>A <strong>function</strong> is a reusable block of code that takes <em>inputs</em> (parameters), performs work, and optionally returns an <em>output</em>. Functions are <strong>first-class values</strong> in JavaScript — they can be stored in variables, passed as arguments, and returned from other functions.</p>
<p>JavaScript has three main syntaxes: <strong>function declarations</strong> (hoisted — callable anywhere in scope), <strong>function expressions</strong> (<code>const fn = function(){}</code> — not hoisted), and <strong>arrow functions</strong> (<code>const fn = () => {}</code> — concise, no own <code>this</code>).</p>
<p>Key features: <strong>default parameters</strong> (<code>name = "Guest"</code>) apply when an argument is <code>undefined</code> or omitted; <strong>rest parameters</strong> (<code>...args</code>) collect remaining arguments into a real array; <strong>IIFE</strong> (Immediately Invoked Function Expression) runs a function instantly without naming it; a missing <code>return</code> causes the function to return <code>undefined</code>.</p>`,
  syntax:`<span class="cmt">// Declaration (hoisted)</span>
<span class="kw">function</span> <span class="fn-name">add</span>(a, b) { <span class="kw">return</span> a + b; }

<span class="cmt">// Expression (not hoisted)</span>
<span class="kw">const</span> add = <span class="kw">function</span>(a, b) { <span class="kw">return</span> a + b; };

<span class="cmt">// Arrow function (no own this)</span>
<span class="kw">const</span> add = (a, b) <span class="op">=></span> a + b;

<span class="cmt">// Default & rest parameters</span>
<span class="kw">function</span> <span class="fn-name">greet</span>(name = <span class="str">"World"</span>) { <span class="kw">return</span> <span class="str">"Hi "</span> + name; }
<span class="kw">function</span> <span class="fn-name">sum</span>(...nums) { <span class="kw">return</span> nums.<span class="fn-name">reduce</span>((a,b) <span class="op">=></span> a+b, <span class="num">0</span>); }

<span class="cmt">// IIFE</span>
(<span class="kw">function</span>() { console.<span class="fn-name">log</span>(<span class="str">"runs now"</span>); })();`,
  examples:[
    {label:'Declaration vs Expression vs Arrow',code:`<span class="cmt">// Declaration — hoisted</span>
console.<span class="fn-name">log</span>(<span class="fn-name">square</span>(<span class="num">4</span>)); <span class="cmt">// 16 — works before declaration</span>
<span class="kw">function</span> <span class="fn-name">square</span>(n) { <span class="kw">return</span> n * n; }

<span class="cmt">// Expression — NOT hoisted</span>
<span class="kw">const</span> cube = <span class="kw">function</span>(n) { <span class="kw">return</span> n ** <span class="num">3</span>; };
console.<span class="fn-name">log</span>(<span class="fn-name">cube</span>(<span class="num">3</span>));   <span class="cmt">// 27</span>

<span class="cmt">// Arrow — concise, implicit return</span>
<span class="kw">const</span> double = n <span class="op">=></span> n * <span class="num">2</span>;
console.<span class="fn-name">log</span>(<span class="fn-name">double</span>(<span class="num">7</span>)); <span class="cmt">// 14</span>`,out:'16 | 27 | 14'},
    {label:'Default, Rest & IIFE',code:`<span class="cmt">// Default param</span>
<span class="kw">function</span> <span class="fn-name">greet</span>(name = <span class="str">"World"</span>) { <span class="kw">return</span> <span class="str">"Hi "</span> + name; }
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>());        <span class="cmt">// "Hi World"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Alice"</span>)); <span class="cmt">// "Hi Alice"</span>

<span class="cmt">// Rest param</span>
<span class="kw">function</span> <span class="fn-name">sum</span>(...nums) { <span class="kw">return</span> nums.<span class="fn-name">reduce</span>((a,b)<span class="op">=></span>a+b, <span class="num">0</span>); }
console.<span class="fn-name">log</span>(<span class="fn-name">sum</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>)); <span class="cmt">// 10</span>

<span class="cmt">// IIFE</span>
<span class="kw">const</span> result = (<span class="kw">function</span>() { <span class="kw">return</span> <span class="num">42</span>; })();
console.<span class="fn-name">log</span>(result); <span class="cmt">// 42</span>`,out:'"Hi World" | "Hi Alice" | 10 | 42'},
    {label:'First-Class & Higher-Order',code:`<span class="cmt">// Functions as values</span>
<span class="kw">const</span> fn = <span class="fn-name">Math.max</span>;
console.<span class="fn-name">log</span>(<span class="fn-name">fn</span>(<span class="num">3</span>, <span class="num">7</span>)); <span class="cmt">// 7</span>

<span class="cmt">// Higher-order: function returning function</span>
<span class="kw">function</span> <span class="fn-name">makeAdder</span>(x) { <span class="kw">return</span> y <span class="op">=></span> x + y; }
<span class="kw">const</span> add10 = <span class="fn-name">makeAdder</span>(<span class="num">10</span>);
console.<span class="fn-name">log</span>(<span class="fn-name">add10</span>(<span class="num">5</span>));  <span class="cmt">// 15</span>

<span class="cmt">// Callback (function as argument)</span>
[<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>].<span class="fn-name">map</span>(x <span class="op">=></span> x * <span class="num">2</span>); <span class="cmt">// [2,4,6]</span>`,out:'7 | 15 | [2,4,6]'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="afh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <text x="240" y="18" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">Function Anatomy</text>
  <rect x="50" y="35" width="80" height="70" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="90" y="56" text-anchor="middle" fill="#60a5fa" font-size="10">Params</text>
  <text x="90" y="72" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">a, b</text>
  <text x="90" y="86" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">name="X"</text>
  <text x="90" y="100" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">...rest</text>
  <line x1="130" y1="70" x2="160" y2="70" stroke="#5c6878" stroke-width="1.5" marker-end="url(#afh)"/>
  <rect x="160" y="28" width="140" height="84" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="2"/>
  <text x="230" y="48" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">function body</text>
  <line x1="170" y1="62" x2="290" y2="62" stroke="#2d3456" stroke-width="1"/>
  <text x="230" y="80" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">// your code</text>
  <text x="230" y="97" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">return value;</text>
  <line x1="300" y1="70" x2="330" y2="70" stroke="#5c6878" stroke-width="1.5" marker-end="url(#afh)"/>
  <rect x="330" y="50" width="100" height="40" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="380" y="68" text-anchor="middle" fill="#4ade80" font-size="10">Return Value</text>
  <text x="380" y="82" text-anchor="middle" fill="#9aa5b4" font-size="9">(or undefined)</text>
  <rect x="10" y="125" width="460" height="82" rx="6" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="240" y="143" text-anchor="middle" fill="#9aa5b4" font-size="10" font-family="monospace">Three Syntaxes</text>
  <text x="20" y="162" fill="#60a5fa" font-size="9" font-family="monospace">function add(a,b){return a+b;}</text>
  <text x="20" y="176" fill="#5c6878" font-size="9">Declaration — hoisted</text>
  <text x="180" y="162" fill="#fbbf24" font-size="9" font-family="monospace">const add = (a,b) =&gt; a+b;</text>
  <text x="180" y="176" fill="#5c6878" font-size="9">Arrow — no own this</text>
  <text x="340" y="162" fill="#c792ea" font-size="9" font-family="monospace">(function(){})()</text>
  <text x="340" y="176" fill="#5c6878" font-size="9">IIFE — runs now</text>
  <line x1="170" y1="130" x2="170" y2="207" stroke="#2d3456" stroke-width="1"/>
  <line x1="330" y1="130" x2="330" y2="207" stroke="#2d3456" stroke-width="1"/>
</svg>`,
  analogy:`<div class="analogy-icon">🏧</div>
<p>A function is like an <strong>ATM machine</strong>. You insert your card and PIN (arguments), the machine processes your request (function body), and hands you cash (return value). You don't need to know the internal wiring — you just call it with the right inputs and get a predictable output.</p>
<p><strong>Default parameters</strong> are like the default withdrawal amount — if you don't specify, it uses $200. <strong>Rest parameters</strong> are like a machine that can accept any number of bills. An <strong>IIFE</strong> is a temporary ATM that serves one customer then disappears.</p>`,
  flow:[
    '<span><strong>Define:</strong> Declare the function with a name, parameters, and body using <code>function</code>, expression, or arrow syntax</span>',
    '<span><strong>Call:</strong> Invoke the function by name with parentheses — <code>add(3, 4)</code></span>',
    '<span><strong>Bind args:</strong> Arguments are matched to parameters left-to-right; missing ones get their default value (or <code>undefined</code>)</span>',
    '<span><strong>Execute body:</strong> The function body runs line by line using the bound parameter values</span>',
    '<span><strong>Return:</strong> <code>return expr</code> exits the function and sends the value to the caller — no <code>return</code> means <code>undefined</code></span>',
    '<span><strong>First-class:</strong> The function itself is a value — store it, pass it, return it from other functions</span>',
  ]
},
{
  id:'arrays',
  title:'Arrays',
  icon:'📋',
  explain:`<p>An <strong>array</strong> is an ordered, zero-indexed list of values. Arrays in JavaScript are objects and can hold any mix of types. Create with a literal: <code>const arr = [1, "two", true]</code>. Access elements by index: <code>arr[0]</code>. The <code>length</code> property gives the count; last element is at <code>arr[arr.length - 1]</code>.</p>
<p>Methods split into two groups: <strong>mutating</strong> (change the original array) — <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>; and <strong>non-mutating</strong> (return a new value/array) — <code>slice</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>find</code>, <code>findIndex</code>, <code>some</code>, <code>every</code>, <code>includes</code>, <code>concat</code>, <code>flat</code>.</p>
<p>Key traps: <code>sort()</code> without a comparator sorts <em>lexicographically</em> (numbers go wrong); <code>indexOf</code> returns <code>0</code> for the first element which is falsy — use <code>!== -1</code> or <code>includes()</code>; <code>forEach</code> always returns <code>undefined</code> — use <code>map</code> to get a new array; <code>splice</code> mutates while <code>slice</code> does not.</p>`,
  syntax:`<span class="cmt">// Create</span>
<span class="kw">const</span> arr = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];          <span class="cmt">// literal</span>

<span class="cmt">// Access / length</span>
arr[<span class="num">0</span>];                         <span class="cmt">// first</span>
arr[arr.length - <span class="num">1</span>];          <span class="cmt">// last</span>

<span class="cmt">// Mutating (change original)</span>
arr.<span class="fn-name">push</span>(val);  arr.<span class="fn-name">pop</span>();        <span class="cmt">// end</span>
arr.<span class="fn-name">unshift</span>(v); arr.<span class="fn-name">shift</span>();     <span class="cmt">// front</span>
arr.<span class="fn-name">splice</span>(start, deleteCount); <span class="cmt">// in-place</span>

<span class="cmt">// Non-mutating (return new value)</span>
arr.<span class="fn-name">slice</span>(start, end);           <span class="cmt">// copy portion</span>
arr.<span class="fn-name">map</span>(x <span class="op">=></span> x * <span class="num">2</span>);            <span class="cmt">// transform</span>
arr.<span class="fn-name">filter</span>(x <span class="op">=></span> x <span class="op">></span> <span class="num">5</span>);         <span class="cmt">// select</span>
arr.<span class="fn-name">reduce</span>((acc, x) <span class="op">=></span> acc+x, <span class="num">0</span>);<span class="cmt">// fold</span>
arr.<span class="fn-name">find</span>(x <span class="op">=></span> x <span class="op">></span> <span class="num">10</span>);          <span class="cmt">// first match</span>
arr.<span class="fn-name">includes</span>(val);              <span class="cmt">// boolean check</span>

<span class="cmt">// Spread & Destructure</span>
<span class="kw">const</span> copy = [...arr];
<span class="kw">const</span> [a, b, ...rest] = arr;`,
  examples:[
    {label:'Mutating Methods',code:`<span class="kw">const</span> a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
a.<span class="fn-name">push</span>(<span class="num">4</span>);      <span class="cmt">// a → [1,2,3,4]  returns 4 (new length)</span>
a.<span class="fn-name">pop</span>();        <span class="cmt">// a → [1,2,3]    returns 4 (removed)</span>
a.<span class="fn-name">unshift</span>(<span class="num">0</span>);   <span class="cmt">// a → [0,1,2,3]  returns 4 (new length)</span>
a.<span class="fn-name">shift</span>();      <span class="cmt">// a → [1,2,3]    returns 0 (removed)</span>
a.<span class="fn-name">splice</span>(<span class="num">1</span>,<span class="num">1</span>);  <span class="cmt">// a → [1,3]      returns [2]</span>`,out:'[1,3] | removed [2]'},
    {label:'Non-Mutating Methods',code:`<span class="kw">const</span> n = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>];
n.<span class="fn-name">slice</span>(<span class="num">1</span>, <span class="num">3</span>);                    <span class="cmt">// [2,3]</span>
n.<span class="fn-name">map</span>(x <span class="op">=></span> x * <span class="num">2</span>);               <span class="cmt">// [2,4,6,8]</span>
n.<span class="fn-name">filter</span>(x <span class="op">=></span> x <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>);     <span class="cmt">// [2,4]</span>
n.<span class="fn-name">reduce</span>((acc, x) <span class="op">=></span> acc + x, <span class="num">0</span>);<span class="cmt">// 10</span>
n.<span class="fn-name">find</span>(x <span class="op">=></span> x <span class="op">></span> <span class="num">2</span>);              <span class="cmt">// 3 (first match)</span>
n.<span class="fn-name">includes</span>(<span class="num">4</span>);                   <span class="cmt">// true</span>
<span class="cmt">// n is still [1,2,3,4] — untouched</span>`,out:'n unchanged | results are new'},
    {label:'Spread & Destructuring',code:`<span class="cmt">// Spread — copy and merge</span>
<span class="kw">const</span> a = [<span class="num">1</span>, <span class="num">2</span>], b = [<span class="num">3</span>, <span class="num">4</span>];
<span class="kw">const</span> merged = [...a, ...b];    <span class="cmt">// [1,2,3,4]</span>
<span class="kw">const</span> copy   = [...a];          <span class="cmt">// [1,2] — shallow copy</span>

<span class="cmt">// Destructuring</span>
<span class="kw">const</span> [first, second, ...rest] = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>];
<span class="cmt">// first=10, second=20, rest=[30,40]</span>`,out:'[1,2,3,4] | 10 20 [30,40]'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="16" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">Array Structure &amp; Methods</text>
  <rect x="10" y="24" width="460" height="56" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="25" y="42" fill="#f5a623" font-size="10" font-family="monospace">const arr = [</text>
  <rect x="113" y="30" width="54" height="36" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="140" y="46" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">"a"</text>
  <text x="140" y="59" text-anchor="middle" fill="#5c6878" font-size="9">idx 0</text>
  <rect x="173" y="30" width="54" height="36" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="200" y="46" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">"b"</text>
  <text x="200" y="59" text-anchor="middle" fill="#5c6878" font-size="9">idx 1</text>
  <rect x="233" y="30" width="54" height="36" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="260" y="46" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">"c"</text>
  <text x="260" y="59" text-anchor="middle" fill="#5c6878" font-size="9">idx 2</text>
  <text x="293" y="46" fill="#f5a623" font-size="10" font-family="monospace">];  length=3</text>
  <rect x="10" y="90" width="220" height="120" rx="6" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="120" y="108" text-anchor="middle" fill="#f87171" font-size="11">Mutating</text>
  <text x="18" y="124" fill="#9aa5b4" font-size="9" font-family="monospace">push(v)    → add to END</text>
  <text x="18" y="138" fill="#9aa5b4" font-size="9" font-family="monospace">pop()      → remove END</text>
  <text x="18" y="152" fill="#9aa5b4" font-size="9" font-family="monospace">unshift(v) → add to FRONT</text>
  <text x="18" y="166" fill="#9aa5b4" font-size="9" font-family="monospace">shift()    → remove FRONT</text>
  <text x="18" y="180" fill="#9aa5b4" font-size="9" font-family="monospace">splice(i,n)→ remove/insert</text>
  <text x="18" y="194" fill="#9aa5b4" font-size="9" font-family="monospace">sort() reverse() fill()</text>
  <rect x="240" y="90" width="230" height="120" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="355" y="108" text-anchor="middle" fill="#4ade80" font-size="11">Non-Mutating</text>
  <text x="248" y="124" fill="#9aa5b4" font-size="9" font-family="monospace">slice(s,e) → copy portion</text>
  <text x="248" y="138" fill="#9aa5b4" font-size="9" font-family="monospace">map(fn)    → transform all</text>
  <text x="248" y="152" fill="#9aa5b4" font-size="9" font-family="monospace">filter(fn) → select matches</text>
  <text x="248" y="166" fill="#9aa5b4" font-size="9" font-family="monospace">reduce(fn) → fold to value</text>
  <text x="248" y="180" fill="#9aa5b4" font-size="9" font-family="monospace">find/includes/some/every</text>
  <text x="248" y="194" fill="#9aa5b4" font-size="9" font-family="monospace">concat flat [...spread]</text>
</svg>`,
  analogy:`<div class="analogy-icon">🅿️</div>
<p>An array is like a <strong>numbered parking lot</strong>. Each spot has a fixed number (index 0, 1, 2…). You can park at the end (<code>push</code>), remove from the end (<code>pop</code>), add to the front (<code>unshift</code>), or tow from the front (<code>shift</code>). <code>splice</code> is a bulldozer — it reaches into the middle and removes or inserts spots, changing the whole layout.</p>
<p><code>map</code> is like photographing every car and producing a new photo album — the lot is unchanged. <code>filter</code> is like listing only red cars. <code>reduce</code> is like counting the total parking fees. <code>slice</code> is a copy of one section of the lot — the original is untouched.</p>`,
  flow:[
    '<span><strong>Create:</strong> <code>const arr = [v1, v2, v3]</code> — zero-indexed, any types, dynamic length</span>',
    '<span><strong>Access:</strong> <code>arr[0]</code> (first), <code>arr[arr.length-1]</code> (last) — out-of-range returns <code>undefined</code></span>',
    '<span><strong>Mutate (in-place):</strong> <code>push/pop</code> (end), <code>unshift/shift</code> (front), <code>splice</code> (middle) — change original</span>',
    '<span><strong>Transform (new array):</strong> <code>map</code>, <code>filter</code>, <code>slice</code>, <code>concat</code> — original is untouched</span>',
    '<span><strong>Fold/Search:</strong> <code>reduce</code> (single value), <code>find</code> (first match), <code>includes</code> (boolean), <code>some/every</code></span>',
    '<span><strong>Spread & Destructure:</strong> <code>[...arr]</code> copies; <code>const [a,b,...rest] = arr</code> unpacks elements</span>',
  ]
},
{
  id:'objects',
  title:'Objects',
  icon:'🗂️',
  explain:`<p>An <strong>object</strong> is an unordered collection of <em>key-value pairs</em> (properties). Keys are strings (or Symbols); values can be anything. Create with a literal: <code>const obj = { name: "Alice", age: 25 }</code>. Access properties with <strong>dot notation</strong> (<code>obj.name</code>) for known keys, or <strong>bracket notation</strong> (<code>obj[key]</code>) for dynamic/variable keys.</p>
<p>Properties can be added (<code>obj.role = "admin"</code>), updated, or removed (<code>delete obj.role</code>). Functions stored as properties are called <strong>methods</strong>. Use shorthand method syntax: <code>{ greet() {} }</code>. Inside a regular method, <code>this</code> refers to the object — but arrow functions have <em>no own</em> <code>this</code>.</p>
<p>Key utilities: <code>Object.keys()</code> / <code>Object.values()</code> / <code>Object.entries()</code> for iteration; <strong>spread</strong> (<code>{ ...obj }</code>) for shallow copy or merge; <strong>destructuring</strong> (<code>const { name, age } = obj</code>) to unpack; <strong>optional chaining</strong> (<code>obj?.a?.b</code>) for safe nested access; <strong>nullish coalescing</strong> (<code>val ?? "default"</code>) for fallbacks. Spread only shallow-copies — nested objects are still shared references.</p>`,
  syntax:`<span class="cmt">// Create & access</span>
<span class="kw">const</span> obj = { name: <span class="str">"Alice"</span>, age: <span class="num">25</span> };
obj.name;          <span class="cmt">// dot notation</span>
obj[<span class="str">"name"</span>];        <span class="cmt">// bracket notation</span>
<span class="kw">const</span> k = <span class="str">"age"</span>;  obj[k]; <span class="cmt">// dynamic key</span>

<span class="cmt">// Add / update / delete</span>
obj.role = <span class="str">"admin"</span>;   <span class="cmt">// add / update</span>
<span class="kw">delete</span> obj.role;        <span class="cmt">// remove property</span>

<span class="cmt">// Methods & this</span>
<span class="kw">const</span> obj2 = { <span class="fn-name">greet</span>() { <span class="kw">return</span> <span class="str">"Hi "</span> + <span class="kw">this</span>.name; } };

<span class="cmt">// Destructure & spread</span>
<span class="kw">const</span> { name, age } = obj;
<span class="kw">const</span> copy = { ...obj, role: <span class="str">"user"</span> };

<span class="cmt">// Iteration</span>
Object.<span class="fn-name">keys</span>(obj);      <span class="cmt">// ["name","age"]</span>
Object.<span class="fn-name">values</span>(obj);    <span class="cmt">// ["Alice",25]</span>
Object.<span class="fn-name">entries</span>(obj);   <span class="cmt">// [["name","Alice"],...]</span>

<span class="cmt">// Safe access</span>
obj?.address?.city;       <span class="cmt">// optional chaining</span>
obj.name ?? <span class="str">"Guest"</span>;    <span class="cmt">// nullish coalescing</span>`,
  examples:[
    {label:'Property Access & Mutation',code:`<span class="kw">const</span> user = { name: <span class="str">"Alice"</span>, age: <span class="num">25</span> };
user.name;               <span class="cmt">// "Alice"</span>
user[<span class="str">"age"</span>];            <span class="cmt">// 25</span>
<span class="kw">const</span> k = <span class="str">"name"</span>;
user[k];                 <span class="cmt">// "Alice" (dynamic key)</span>

user.role = <span class="str">"admin"</span>;    <span class="cmt">// add new property</span>
<span class="kw">delete</span> user.age;         <span class="cmt">// remove property</span>
console.<span class="fn-name">log</span>(user);      <span class="cmt">// { name:"Alice", role:"admin" }</span>`,out:'{ name:"Alice", role:"admin" }'},
    {label:'Methods, Destructuring & Spread',code:`<span class="cmt">// Method with this</span>
<span class="kw">const</span> obj = {
  val: <span class="num">42</span>,
  <span class="fn-name">double</span>() { <span class="kw">return</span> <span class="kw">this</span>.val * <span class="num">2</span>; }
};
obj.<span class="fn-name">double</span>(); <span class="cmt">// 84</span>

<span class="cmt">// Destructuring</span>
<span class="kw">const</span> { val, double } = obj;

<span class="cmt">// Spread: merge with override</span>
<span class="kw">const</span> defaults = { theme: <span class="str">"light"</span>, lang: <span class="str">"en"</span> };
<span class="kw">const</span> config  = { ...defaults, theme: <span class="str">"dark"</span> };
<span class="cmt">// { theme:"dark", lang:"en" }</span>`,out:'84 | { theme:"dark", lang:"en" }'},
    {label:'Object.entries, Optional Chaining & ??',code:`<span class="cmt">// Iterate key-value pairs</span>
<span class="kw">const</span> scores = { alice: <span class="num">90</span>, bob: <span class="num">75</span> };
Object.<span class="fn-name">entries</span>(scores).<span class="fn-name">forEach</span>(([name, score]) <span class="op">=></span>
  console.<span class="fn-name">log</span>(name, score));

<span class="cmt">// Optional chaining</span>
<span class="kw">const</span> user = {};
user?.address?.city;     <span class="cmt">// undefined (no error)</span>

<span class="cmt">// Nullish coalescing</span>
<span class="kw">const</span> theme = user.theme ?? <span class="str">"light"</span>; <span class="cmt">// "light"</span>`,out:'alice 90 | bob 75 | undefined | "light"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="16" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">Object Structure &amp; Key Utilities</text>
  <rect x="10" y="24" width="280" height="130" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="150" y="42" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">{ ← object literal }</text>
  <line x1="10" y1="48" x2="290" y2="48" stroke="#2d3456" stroke-width="1"/>
  <text x="20" y="66" fill="#60a5fa" font-size="10" font-family="monospace">"name"</text>
  <text x="100" y="66" fill="#5c6878" font-size="10">→</text>
  <text x="115" y="66" fill="#4ade80" font-size="10" font-family="monospace">"Alice"</text>
  <text x="20" y="84" fill="#60a5fa" font-size="10" font-family="monospace">"age"</text>
  <text x="100" y="84" fill="#5c6878" font-size="10">→</text>
  <text x="115" y="84" fill="#4ade80" font-size="10" font-family="monospace">25</text>
  <text x="20" y="102" fill="#60a5fa" font-size="10" font-family="monospace">"greet"</text>
  <text x="100" y="102" fill="#5c6878" font-size="10">→</text>
  <text x="115" y="102" fill="#4ade80" font-size="10" font-family="monospace">function(){}</text>
  <text x="20" y="122" fill="#5c6878" font-size="9">obj.name → dot notation</text>
  <text x="20" y="138" fill="#5c6878" font-size="9">obj[key] → bracket (dynamic)</text>
  <text x="20" y="152" fill="#5c6878" font-size="9">delete obj.age → remove</text>
  <rect x="300" y="24" width="170" height="130" rx="6" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="385" y="42" text-anchor="middle" fill="#c792ea" font-size="11">Utilities</text>
  <line x1="300" y1="48" x2="470" y2="48" stroke="#2d3456" stroke-width="1"/>
  <text x="308" y="66" fill="#9aa5b4" font-size="9" font-family="monospace">Object.keys(o)   → keys[]</text>
  <text x="308" y="82" fill="#9aa5b4" font-size="9" font-family="monospace">Object.values(o) → vals[]</text>
  <text x="308" y="98" fill="#9aa5b4" font-size="9" font-family="monospace">Object.entries(o)→ pairs[]</text>
  <text x="308" y="114" fill="#9aa5b4" font-size="9" font-family="monospace">{ ...o, k:v }    → merge</text>
  <text x="308" y="130" fill="#9aa5b4" font-size="9" font-family="monospace">o?.a?.b          → safe nav</text>
  <text x="308" y="146" fill="#9aa5b4" font-size="9" font-family="monospace">v ?? "default"   → fallback</text>
  <rect x="10" y="164" width="460" height="44" rx="6" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="18" y="181" fill="#fbbf24" font-size="9" font-family="monospace">Destructure:  const { name, age } = obj;</text>
  <text x="18" y="198" fill="#fbbf24" font-size="9" font-family="monospace">Shorthand:    const x = 1; const o = { x };  →  { x: 1 }</text>
</svg>`,
  analogy:`<div class="analogy-icon">🗄️</div>
<p>An object is like a <strong>filing cabinet</strong>. Each drawer is labeled with a key (property name) and holds a document (value). You can open any drawer by its label (<code>obj.name</code>), add new labeled drawers, update what's inside, or remove a drawer entirely (<code>delete</code>).</p>
<p><strong>Spread</strong> is photocopying the cabinet — top-level drawers get duplicated, but if a drawer itself contains a folder full of sub-documents (nested object), both the original and the copy point to the <em>same</em> folder. <strong>Optional chaining</strong> (<code>?.</code>) is politely checking "does this drawer exist?" before opening it — instead of crashing when it's missing.</p>`,
  flow:[
    '<span><strong>Create:</strong> <code>const obj = { key: value }</code> — key-value pairs, values can be any type including functions</span>',
    '<span><strong>Access:</strong> <code>obj.key</code> (dot, literal) or <code>obj[expr]</code> (bracket, dynamic/variable keys)</span>',
    '<span><strong>Mutate:</strong> <code>obj.k = v</code> (add/update), <code>delete obj.k</code> (remove) — objects are mutable by default</span>',
    '<span><strong>Methods:</strong> Functions stored as properties; inside regular methods <code>this</code> = the object (arrow functions have no own <code>this</code>)</span>',
    '<span><strong>Destructure & Spread:</strong> <code>const { a, b } = obj</code> unpacks; <code>{ ...obj, extra }</code> shallow-copies and merges</span>',
    '<span><strong>Iterate:</strong> <code>Object.keys/values/entries()</code>; safe access with <code>obj?.a?.b</code> and fallbacks with <code>?? "default"</code></span>',
  ]
},
{
  id:'scope',
  title:'Scope',
  icon:'🔭',
  explain:`<p><strong>Scope</strong> determines where a variable is visible and accessible. JavaScript has three scope levels: <strong>global</strong> (accessible everywhere), <strong>function</strong> (accessible only inside that function), and <strong>block</strong> (accessible only inside the enclosing <code>{}</code>).</p>
<p>The keyword you choose controls scope: <code>var</code> is <em>function-scoped</em> (leaks out of <code>if</code>/<code>for</code> blocks, hoisted as <code>undefined</code>); <code>let</code> and <code>const</code> are <em>block-scoped</em> (confined to their <code>{}</code>, hoisted but in the <strong>Temporal Dead Zone</strong>). The TDZ means a <code>let</code>/<code>const</code> variable exists in the scope but throws <code>ReferenceError</code> if accessed before its declaration line.</p>
<p>The <strong>scope chain</strong>: when a variable isn't found in the current scope, JS looks outward through enclosing scopes until it reaches global. <strong>Variable shadowing</strong> occurs when an inner scope declares the same name as an outer scope — the inner one hides the outer. <strong>Hoisting</strong>: <code>var</code> declarations and function declarations are moved to the top of their scope before code runs.</p>`,
  syntax:`<span class="cmt">// var — function-scoped, hoisted as undefined</span>
<span class="kw">var</span> x = <span class="num">1</span>;            <span class="cmt">// accessible to whole function / global</span>

<span class="cmt">// let — block-scoped, TDZ until declared</span>
<span class="kw">let</span> y = <span class="num">2</span>;            <span class="cmt">// only inside enclosing {}</span>

<span class="cmt">// const — block-scoped, cannot reassign</span>
<span class="kw">const</span> Z = <span class="num">3</span>;           <span class="cmt">// block-scoped, immutable binding</span>

<span class="cmt">// Hoisting</span>
console.<span class="fn-name">log</span>(a);      <span class="cmt">// undefined  (var hoisted)</span>
<span class="kw">var</span> a = <span class="num">5</span>;
console.<span class="fn-name">log</span>(fn());   <span class="cmt">// works      (function declaration hoisted)</span>
<span class="kw">function</span> <span class="fn-name">fn</span>() { <span class="kw">return</span> <span class="num">42</span>; }

<span class="cmt">// TDZ</span>
console.<span class="fn-name">log</span>(b);      <span class="cmt">// ReferenceError — TDZ</span>
<span class="kw">let</span> b = <span class="num">10</span>;

<span class="cmt">// Scope chain</span>
<span class="kw">const</span> outer = <span class="num">100</span>;
<span class="kw">function</span> <span class="fn-name">inner</span>() { console.<span class="fn-name">log</span>(outer); } <span class="cmt">// 100</span>`,
  examples:[
    {label:'var vs let — Block Scope',code:`<span class="cmt">// var leaks out of block</span>
<span class="kw">if</span> (<span class="kw">true</span>) { <span class="kw">var</span> leaked = <span class="num">1</span>; }
console.<span class="fn-name">log</span>(leaked); <span class="cmt">// 1 — var is NOT block-scoped</span>

<span class="cmt">// let stays inside block</span>
<span class="kw">if</span> (<span class="kw">true</span>) { <span class="kw">let</span> confined = <span class="num">2</span>; }
console.<span class="fn-name">log</span>(confined); <span class="cmt">// ReferenceError</span>

<span class="cmt">// Classic var-in-loop bug</span>
<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) {}
console.<span class="fn-name">log</span>(i); <span class="cmt">// 3 — leaked out!</span>`,out:'1 | ReferenceError | 3'},
    {label:'Hoisting & TDZ',code:`<span class="cmt">// var — hoisted as undefined</span>
console.<span class="fn-name">log</span>(a);   <span class="cmt">// undefined (not error)</span>
<span class="kw">var</span> a = <span class="num">5</span>;

<span class="cmt">// Function declaration — fully hoisted</span>
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>()); <span class="cmt">// "Hi" — works before def</span>
<span class="kw">function</span> <span class="fn-name">greet</span>() { <span class="kw">return</span> <span class="str">"Hi"</span>; }

<span class="cmt">// let — TDZ throws ReferenceError</span>
<span class="cmt">// console.log(b);  ← ReferenceError</span>
<span class="kw">let</span> b = <span class="num">10</span>;`,out:'undefined | "Hi" | (TDZ if accessed early)'},
    {label:'Scope Chain & Shadowing',code:`<span class="kw">const</span> x = <span class="str">"global"</span>;

<span class="kw">function</span> <span class="fn-name">outer</span>() {
  <span class="kw">const</span> x = <span class="str">"outer"</span>; <span class="cmt">// shadows global x</span>
  <span class="kw">function</span> <span class="fn-name">inner</span>() {
    <span class="cmt">// x not declared here → chain lookup</span>
    console.<span class="fn-name">log</span>(x);   <span class="cmt">// "outer" (found in outer)</span>
  }
  <span class="fn-name">inner</span>();
}
<span class="fn-name">outer</span>();
console.<span class="fn-name">log</span>(x); <span class="cmt">// "global" — unaffected</span>`,out:'"outer" | "global"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <text x="240" y="15" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">Nested Scope Chain</text>
  <rect x="5" y="22" width="470" height="185" rx="8" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="18" y="40" fill="#f5a623" font-size="10" font-family="monospace">Global Scope</text>
  <text x="18" y="56" fill="#9aa5b4" font-size="9" font-family="monospace">var/let/const at top level  |  window.x (browser)</text>
  <rect x="15" y="62" width="450" height="137" rx="6" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="28" y="80" fill="#60a5fa" font-size="10" font-family="monospace">Function Scope</text>
  <text x="28" y="95" fill="#9aa5b4" font-size="9" font-family="monospace">var declared here stays here  |  params live here</text>
  <rect x="25" y="100" width="430" height="91" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="38" y="118" fill="#4ade80" font-size="10" font-family="monospace">Block Scope  { }</text>
  <text x="38" y="133" fill="#9aa5b4" font-size="9" font-family="monospace">let/const only  |  if/for/while/bare blocks</text>
  <rect x="35" y="138" width="410" height="45" rx="4" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="48" y="156" fill="#c792ea" font-size="9" font-family="monospace">Inner Block { let x = ... }</text>
  <text x="48" y="172" fill="#5c6878" font-size="9">Scope chain: inner → function → global (stops at first match)</text>
  <text x="240" y="207" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace">var leaks to function scope  |  let/const stay in block  |  TDZ: let/const hoisted but not readable before declaration</text>
</svg>`,
  analogy:`<div class="analogy-icon">🏢</div>
<p>Scope is like a <strong>building with nested rooms</strong>. The global scope is the lobby — everyone can see it. A function is a private office — only people inside can access what's in the office. A block (<code>if</code>, <code>for</code>) is a mini-closet inside the office — <code>let</code>/<code>const</code> stay in the closet, but <code>var</code> doesn't respect the closet door and spills into the whole office.</p>
<p>The <strong>scope chain</strong> is like asking your floor manager for something — if they don't have it, they ask the floor above, all the way to the building owner (global). <strong>Hoisting</strong> is like the building posting a sign "<em>Room reserved — key not yet available</em>" for <code>var</code> (you know it exists, value is <code>undefined</code>) versus <code>let</code>/<code>const</code> where touching the door before the key arrives causes an alarm (<code>ReferenceError</code>).</p>`,
  flow:[
    '<span><strong>Choose the keyword:</strong> <code>const</code> (never reassigned), <code>let</code> (reassigned), <code>var</code> (legacy — avoid in modern code)</span>',
    '<span><strong>Block vs function scope:</strong> <code>let</code>/<code>const</code> are confined to <code>{}</code>; <code>var</code> hoists to the nearest function (or global)</span>',
    '<span><strong>Hoisting:</strong> Before code runs, <code>var</code> declarations move to top (initialized <code>undefined</code>); function declarations are fully available</span>',
    '<span><strong>TDZ:</strong> <code>let</code>/<code>const</code> are hoisted but accessing before their line throws <code>ReferenceError: Cannot access before initialization</code></span>',
    '<span><strong>Scope chain:</strong> Variable lookup travels outward — inner scope → enclosing function → global — stops at first match</span>',
    '<span><strong>Shadowing:</strong> Declaring a same-named variable in an inner scope hides (but does not change) the outer variable</span>',
  ]
},
{
  id:'closures',
  title:'Closures',
  icon:'🔒',
  explain:`<p>A <strong>closure</strong> is a function that <em>remembers</em> the variables from its lexical environment even after the outer function has returned. Every time an inner function references a variable from an enclosing scope, it forms a closure over that variable. The closed-over variables stay alive in memory as long as the closure exists.</p>
<p>Key insight: closures capture variables <em>by reference</em>, not by value — if the outer variable changes after the closure is created, the closure sees the updated value. This is why the classic <code>var</code>-in-loop bug exists: all closures share the same <code>var i</code>, which equals the loop's final value by the time any closure runs. Fix: use <code>let</code> for a per-iteration binding.</p>
<p>Practical uses: <strong>private state</strong> (counter, bank balance), <strong>factory functions</strong> (each call returns an independent closure), <strong>module pattern</strong> (IIFE + closure = private data + public API), <strong>memoization</strong>, <strong>partial application / currying</strong>. Multiple closures from the same factory call share the same outer variables; closures from separate factory calls have independent state.</p>`,
  syntax:`<span class="cmt">// Basic closure — inner fn remembers outer variable</span>
<span class="kw">function</span> <span class="fn-name">outer</span>() {
  <span class="kw">let</span> count = <span class="num">0</span>;
  <span class="kw">return</span> () <span class="op">=></span> ++count; <span class="cmt">// closes over count</span>
}
<span class="kw">const</span> counter = <span class="fn-name">outer</span>();
<span class="fn-name">counter</span>(); <span class="cmt">// 1</span>
<span class="fn-name">counter</span>(); <span class="cmt">// 2  — count persists</span>

<span class="cmt">// Factory function — each call = independent closure</span>
<span class="kw">function</span> <span class="fn-name">makeAdder</span>(n) { <span class="kw">return</span> x <span class="op">=></span> x + n; }
<span class="kw">const</span> add5  = <span class="fn-name">makeAdder</span>(<span class="num">5</span>);  <span class="cmt">// n=5 in its closure</span>
<span class="kw">const</span> add10 = <span class="fn-name">makeAdder</span>(<span class="num">10</span>); <span class="cmt">// n=10 in its closure</span>

<span class="cmt">// Module pattern — private state via IIFE</span>
<span class="kw">const</span> mod = (() <span class="op">=></span> {
  <span class="kw">let</span> _count = <span class="num">0</span>;         <span class="cmt">// private</span>
  <span class="kw">return</span> {
    <span class="fn-name">inc</span>() { _count++; },
    <span class="fn-name">get</span>() { <span class="kw">return</span> _count; }
  };
})();`,
  examples:[
    {label:'Counter & Accumulator',code:`<span class="cmt">// Counter — state lives in the closure</span>
<span class="kw">function</span> <span class="fn-name">makeCounter</span>() {
  <span class="kw">let</span> n = <span class="num">0</span>;
  <span class="kw">return</span> () <span class="op">=></span> ++n;
}
<span class="kw">const</span> c = <span class="fn-name">makeCounter</span>();
c(); c(); c().<span class="fn-name">valueOf</span>; <span class="cmt">// c() → 3</span>

<span class="cmt">// Accumulator — adds to running total</span>
<span class="kw">function</span> <span class="fn-name">makeAcc</span>() {
  <span class="kw">let</span> total = <span class="num">0</span>;
  <span class="kw">return</span> n <span class="op">=></span> (total += n);
}
<span class="kw">const</span> acc = <span class="fn-name">makeAcc</span>();
acc(<span class="num">5</span>); <span class="cmt">// 5</span>
acc(<span class="num">3</span>); <span class="cmt">// 8 — total remembered</span>`,out:'counter → 3 | acc → 5, 8'},
    {label:'Factory & Module Pattern',code:`<span class="cmt">// Factory — each call = own closure</span>
<span class="kw">function</span> <span class="fn-name">makeAdder</span>(n) { <span class="kw">return</span> x <span class="op">=></span> x + n; }
<span class="kw">const</span> add5 = <span class="fn-name">makeAdder</span>(<span class="num">5</span>);
<span class="kw">const</span> add10 = <span class="fn-name">makeAdder</span>(<span class="num">10</span>);
<span class="fn-name">add5</span>(<span class="num">3</span>);  <span class="cmt">// 8</span>
<span class="fn-name">add10</span>(<span class="num">3</span>); <span class="cmt">// 13</span>

<span class="cmt">// Module — IIFE hides _count from outside</span>
<span class="kw">const</span> mod = (() <span class="op">=></span> {
  <span class="kw">let</span> _count = <span class="num">0</span>;
  <span class="kw">return</span> { <span class="fn-name">inc</span>() { _count++; }, <span class="fn-name">get</span>() { <span class="kw">return</span> _count; } };
})();
mod.<span class="fn-name">inc</span>(); mod.<span class="fn-name">inc</span>();
mod.<span class="fn-name">get</span>(); <span class="cmt">// 2 — _count is private</span>`,out:'add5(3)=8 | add10(3)=13 | mod.get()=2'},
    {label:'Classic Loop Bug & Fix',code:`<span class="cmt">// BUG: var — all closures share one i</span>
<span class="kw">const</span> buggy = [];
<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) buggy.<span class="fn-name">push</span>(() <span class="op">=></span> i);
buggy[<span class="num">0</span>](); <span class="cmt">// 3 — all return 3!</span>

<span class="cmt">// FIX: let — each iteration gets own i</span>
<span class="kw">const</span> fixed = [];
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) fixed.<span class="fn-name">push</span>(() <span class="op">=></span> i);
fixed[<span class="num">0</span>](); <span class="cmt">// 0</span>
fixed[<span class="num">1</span>](); <span class="cmt">// 1</span>
fixed[<span class="num">2</span>](); <span class="cmt">// 2</span>`,out:'buggy → 3,3,3 | fixed → 0,1,2'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="cah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <text x="240" y="15" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">How a Closure Works</text>
  <rect x="5" y="22" width="230" height="155" rx="8" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="120" y="40" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">outer()</text>
  <line x1="5" y1="46" x2="235" y2="46" stroke="#2d3456" stroke-width="1"/>
  <text x="15" y="63" fill="#9aa5b4" font-size="9" font-family="monospace">let count = 0;</text>
  <text x="15" y="78" fill="#9aa5b4" font-size="9" font-family="monospace">function inner() {</text>
  <rect x="20" y="83" width="205" height="52" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="30" y="100" fill="#60a5fa" font-size="9" font-family="monospace">inner()</text>
  <text x="30" y="116" fill="#9aa5b4" font-size="9" font-family="monospace">count++; return count;</text>
  <text x="30" y="129" fill="#fbbf24" font-size="8">↑ closes over count</text>
  <text x="15" y="153" fill="#9aa5b4" font-size="9" font-family="monospace">return inner;</text>
  <text x="15" y="168" fill="#5c6878" font-size="8">outer() finishes but count stays alive</text>
  <line x1="235" y1="100" x2="255" y2="100" stroke="#5c6878" stroke-width="1.5" marker-end="url(#cah)"/>
  <rect x="255" y="60" width="215" height="130" rx="8" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="362" y="80" text-anchor="middle" fill="#4ade80" font-size="11">Closure = fn + env</text>
  <line x1="255" y1="86" x2="470" y2="86" stroke="#2d3456" stroke-width="1"/>
  <text x="265" y="104" fill="#9aa5b4" font-size="9" font-family="monospace">const fn = outer();</text>
  <text x="265" y="120" fill="#9aa5b4" font-size="9" font-family="monospace">fn(); // count=1</text>
  <text x="265" y="136" fill="#9aa5b4" font-size="9" font-family="monospace">fn(); // count=2</text>
  <text x="265" y="155" fill="#fbbf24" font-size="9" font-family="monospace">fn.count // undefined</text>
  <text x="265" y="170" fill="#5c6878" font-size="8">count is private — only fn can see it</text>
  <text x="265" y="183" fill="#5c6878" font-size="8">outer() is gone — count lives on in closure</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎒</div>
<p>A closure is like a <strong>backpack you take when leaving a room</strong>. When a function finishes running (you leave the room), it's gone — but if it returned an inner function, that inner function took a backpack with whatever variables it needed. Even though the room no longer exists, the inner function still has those items in its backpack.</p>
<p>Each call to the outer function creates a <em>new backpack</em> — so two closures from two separate calls have entirely independent contents. But two inner functions returned from the <em>same</em> call share one backpack — if one modifies a variable, the other sees the change.</p>`,
  flow:[
    '<span><strong>Inner function defined:</strong> A function is declared inside another function and references the outer function\'s variables</span>',
    '<span><strong>Closure formed:</strong> At the moment of creation, the inner function captures a reference to those outer variables (not a copy)</span>',
    '<span><strong>Outer returns:</strong> The outer function finishes and its execution context is gone — but the closed-over variables stay alive</span>',
    '<span><strong>Variables persist:</strong> Each call to the returned inner function still has access to the same (living) outer variables</span>',
    '<span><strong>Independent instances:</strong> Each call to the factory creates a new, independent closure with its own private variables</span>',
    '<span><strong>Shared closures:</strong> Two functions returned from the same outer call share one set of outer variables — mutations are visible to both</span>',
  ]
},
{
  id:'promises',
  title:'Promises',
  icon:'🤝',
  explain:`<p>A <strong>Promise</strong> is an object representing the eventual result of an asynchronous operation. It has three states: <strong>pending</strong> (in progress), <strong>fulfilled</strong> (completed successfully), or <strong>rejected</strong> (failed). A promise transitions exactly once — from pending to either fulfilled or rejected — and then stays in that state forever.</p>
<p>Create with <code>new Promise((resolve, reject) => { ... })</code>. Call <code>resolve(value)</code> to fulfill or <code>reject(reason)</code> to reject. Consume with <code>.then(onFulfilled)</code>, <code>.catch(onRejected)</code>, and <code>.finally(cleanup)</code>. Each <code>.then()</code>/<code>.catch()</code> returns a <em>new</em> Promise, enabling <strong>chaining</strong>. Returning a value from <code>.then()</code> wraps it in a resolved promise; returning a promise adopts its state. Rejections skip <code>.then()</code> handlers and travel to the next <code>.catch()</code>.</p>
<p>Static helpers: <code>Promise.all([...])</code> — waits for all, rejects if any reject; <code>Promise.allSettled([...])</code> — waits for all, always resolves with outcomes; <code>Promise.race([...])</code> — first to settle wins; <code>Promise.any([...])</code> — first to <em>fulfill</em> wins. Promise callbacks run in the <strong>microtask queue</strong> — after synchronous code but before <code>setTimeout</code>.</p>`,
  syntax:`<span class="cmt">// Create</span>
<span class="kw">const</span> p = <span class="kw">new</span> <span class="fn-name">Promise</span>((resolve, reject) <span class="op">=></span> {
  <span class="kw">if</span> (ok) <span class="fn-name">resolve</span>(value);
  <span class="kw">else</span>   <span class="fn-name">reject</span>(<span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"oops"</span>));
});

<span class="cmt">// Consume</span>
p.<span class="fn-name">then</span>(val  <span class="op">=></span> console.<span class="fn-name">log</span>(val))
 .<span class="fn-name">catch</span>(err  <span class="op">=></span> console.<span class="fn-name">log</span>(err))
 .<span class="fn-name">finally</span>(() <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"done"</span>));

<span class="cmt">// Chain</span>
<span class="fn-name">fetch</span>(url)
  .<span class="fn-name">then</span>(r  <span class="op">=></span> r.<span class="fn-name">json</span>())
  .<span class="fn-name">then</span>(d  <span class="op">=></span> console.<span class="fn-name">log</span>(d))
  .<span class="fn-name">catch</span>(e  <span class="op">=></span> console.<span class="fn-name">log</span>(e));

<span class="cmt">// Static helpers</span>
Promise.<span class="fn-name">all</span>([p1, p2]);         <span class="cmt">// all or fail</span>
Promise.<span class="fn-name">allSettled</span>([p1, p2]);  <span class="cmt">// all, with status</span>
Promise.<span class="fn-name">race</span>([p1, p2]);        <span class="cmt">// first to settle</span>
Promise.<span class="fn-name">any</span>([p1, p2]);         <span class="cmt">// first to fulfill</span>`,
  examples:[
    {label:'Create, Resolve & Reject',code:`<span class="cmt">// Resolving</span>
<span class="kw">const</span> p1 = <span class="kw">new</span> <span class="fn-name">Promise</span>(resolve <span class="op">=></span> <span class="fn-name">resolve</span>(<span class="num">42</span>));
p1.<span class="fn-name">then</span>(v <span class="op">=></span> console.<span class="fn-name">log</span>(v)); <span class="cmt">// 42</span>

<span class="cmt">// Rejecting</span>
<span class="kw">const</span> p2 = <span class="kw">new</span> <span class="fn-name">Promise</span>((_, reject) <span class="op">=></span>
  <span class="fn-name">reject</span>(<span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"fail"</span>)));
p2.<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e.message)); <span class="cmt">// "fail"</span>

<span class="cmt">// .finally always runs</span>
p1.<span class="fn-name">finally</span>(() <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"cleanup"</span>)); <span class="cmt">// "cleanup"</span>`,out:'42 | "fail" | "cleanup"'},
    {label:'Chaining',code:`<span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="num">10</span>)
  .<span class="fn-name">then</span>(n <span class="op">=></span> n * <span class="num">2</span>)       <span class="cmt">// 20</span>
  .<span class="fn-name">then</span>(n <span class="op">=></span> n + <span class="num">5</span>)       <span class="cmt">// 25</span>
  .<span class="fn-name">then</span>(n <span class="op">=></span> console.<span class="fn-name">log</span>(n)); <span class="cmt">// 25</span>

<span class="cmt">// Error skips .then() — lands in .catch()</span>
<span class="fn-name">Promise</span>.<span class="fn-name">reject</span>(<span class="str">"err"</span>)
  .<span class="fn-name">then</span>(v <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"skipped"</span>))
  .<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e)); <span class="cmt">// "err"</span>`,out:'25 | "err" (skipped .then)'},
    {label:'Promise.all & .allSettled',code:`<span class="kw">const</span> p1 = <span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="str">"a"</span>);
<span class="kw">const</span> p2 = <span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="str">"b"</span>);
<span class="kw">const</span> p3 = <span class="fn-name">Promise</span>.<span class="fn-name">reject</span>(<span class="str">"fail"</span>);

<span class="cmt">// Promise.all — fails fast if any rejects</span>
<span class="fn-name">Promise</span>.<span class="fn-name">all</span>([p1, p2])
  .<span class="fn-name">then</span>(r <span class="op">=></span> console.<span class="fn-name">log</span>(r)); <span class="cmt">// ["a","b"]</span>

<span class="cmt">// Promise.allSettled — always resolves with status</span>
<span class="fn-name">Promise</span>.<span class="fn-name">allSettled</span>([p1, p3])
  .<span class="fn-name">then</span>(r <span class="op">=></span> console.<span class="fn-name">log</span>(r[<span class="num">1</span>].status)); <span class="cmt">// "rejected"</span>`,out:'["a","b"] | "rejected"'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="pah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <text x="240" y="15" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">Promise State Machine</text>
  <rect x="170" y="25" width="140" height="40" rx="6" fill="#1e2338" stroke="#fbbf24" stroke-width="2"/>
  <text x="240" y="42" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace">PENDING</text>
  <text x="240" y="57" text-anchor="middle" fill="#5c6878" font-size="9">async op in progress</text>
  <line x1="200" y1="65" x2="115" y2="105" stroke="#4ade80" stroke-width="1.5" marker-end="url(#pah)"/>
  <text x="120" y="88" fill="#4ade80" font-size="9">resolve(v)</text>
  <line x1="280" y1="65" x2="365" y2="105" stroke="#f87171" stroke-width="1.5" marker-end="url(#pah)"/>
  <text x="305" y="88" fill="#f87171" font-size="9">reject(e)</text>
  <rect x="30" y="105" width="155" height="40" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="2"/>
  <text x="107" y="122" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">FULFILLED</text>
  <text x="107" y="137" text-anchor="middle" fill="#5c6878" font-size="9">value available</text>
  <rect x="295" y="105" width="155" height="40" rx="6" fill="#1e2338" stroke="#f87171" stroke-width="2"/>
  <text x="372" y="122" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">REJECTED</text>
  <text x="372" y="137" text-anchor="middle" fill="#5c6878" font-size="9">error reason</text>
  <line x1="107" y1="145" x2="107" y2="165" stroke="#4ade80" stroke-width="1.5" marker-end="url(#pah)"/>
  <line x1="372" y1="145" x2="372" y2="165" stroke="#f87171" stroke-width="1.5" marker-end="url(#pah)"/>
  <rect x="30" y="165" width="155" height="38" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="107" y="181" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">.then(val => ...)</text>
  <text x="107" y="195" text-anchor="middle" fill="#5c6878" font-size="8">returns new Promise</text>
  <rect x="295" y="165" width="155" height="38" rx="4" fill="#252b44" stroke="#f87171" stroke-width="1.5"/>
  <text x="372" y="181" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">.catch(err => ...)</text>
  <text x="372" y="195" text-anchor="middle" fill="#5c6878" font-size="8">returns new Promise</text>
  <rect x="175" y="165" width="110" height="38" rx="4" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="230" y="181" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">.finally(() => {})</text>
  <text x="230" y="195" text-anchor="middle" fill="#5c6878" font-size="8">always runs</text>
  <line x1="185" y1="165" x2="172" y2="155" stroke="#c792ea" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="275" y1="165" x2="295" y2="155" stroke="#c792ea" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`,
  analogy:`<div class="analogy-icon">🍽️</div>
<p>A Promise is like a <strong>restaurant order ticket</strong>. You place your order and get a ticket (the promise object) — it's <em>pending</em>. While the kitchen works, you can do other things (non-blocking). When the food is ready, the kitchen either delivers it to your table (<code>resolve</code>) or sends a waiter to apologize it's not available (<code>reject</code>).</p>
<p><code>.then()</code> is the instruction you give: "when food arrives, add sauce." <code>.catch()</code> is: "if food doesn't come, order pizza instead." <code>.finally()</code> is: "always pay the bill regardless." <code>Promise.all()</code> is ordering all dishes at once — if any kitchen fails, the whole table's order is cancelled. <code>Promise.race()</code> is a cooking competition — whoever finishes first wins.</p>`,
  flow:[
    '<span><strong>Create:</strong> <code>new Promise((resolve, reject) => { async work... })</code> — starts pending</span>',
    '<span><strong>Fulfill:</strong> Call <code>resolve(value)</code> inside the executor — transitions to fulfilled, triggers <code>.then()</code></span>',
    '<span><strong>Reject:</strong> Call <code>reject(reason)</code> or throw inside the executor — transitions to rejected, skips <code>.then()</code></span>',
    '<span><strong>Chain:</strong> <code>.then()</code> and <code>.catch()</code> return new Promises — return a value to pass it forward, return a Promise to adopt its state</span>',
    '<span><strong>Catch errors:</strong> Rejections travel down the chain, skipping <code>.then()</code> handlers until a <code>.catch()</code> is reached</span>',
    '<span><strong>Parallel:</strong> <code>Promise.all()</code> for all-or-nothing; <code>Promise.allSettled()</code> to collect all outcomes regardless of failure</span>',
  ]
},
{
  id:'asyncawait',
  title:'Async / Await',
  icon:'⏳',
  explain:`<p><code>async</code>/<code>await</code> is syntactic sugar over Promises that makes asynchronous code read like synchronous code. An <code>async</code> function <em>always</em> returns a Promise — even if you <code>return 42</code>, the caller gets <code>Promise.resolve(42)</code>. Inside an async function, <code>await</code> pauses that function's execution until the awaited Promise settles, then resumes with its resolved value.</p>
<p>Error handling uses <code>try/catch/finally</code> — a rejected <code>await</code> throws, which the <code>catch</code> block catches. Throwing inside an async function rejects its returned Promise. <code>await</code> can only be used <em>inside</em> an <code>async</code> function (except at top-level in ES modules).</p>
<p>Critical pitfalls: <strong>Forgetting <code>await</code></strong> gives you a Promise object instead of the value. <strong>Sequential awaits</strong> when operations are independent wastes time — use <code>await Promise.all([...])</code> for parallel execution. <strong><code>forEach</code> with async callbacks</strong> does not await them — use <code>for...of</code> or <code>Promise.all + map</code> instead. <code>await</code> on a non-Promise returns the value directly (no error).</p>`,
  syntax:`<span class="cmt">// async function — always returns a Promise</span>
<span class="kw">async function</span> <span class="fn-name">fetchUser</span>(id) {
  <span class="kw">try</span> {
    <span class="kw">const</span> res  = <span class="kw">await</span> <span class="fn-name">fetch</span>(<span class="str">\`/users/\${id}\`</span>);
    <span class="kw">const</span> user = <span class="kw">await</span> res.<span class="fn-name">json</span>();
    <span class="kw">return</span> user;
  } <span class="kw">catch</span> (err) {
    console.<span class="fn-name">error</span>(err);
    <span class="kw">throw</span> err; <span class="cmt">// re-reject the returned Promise</span>
  } <span class="kw">finally</span> {
    <span class="fn-name">hideSpinner</span>();
  }
}

<span class="cmt">// Sequential — each waits for the previous</span>
<span class="kw">const</span> a = <span class="kw">await</span> <span class="fn-name">stepA</span>();
<span class="kw">const</span> b = <span class="kw">await</span> <span class="fn-name">stepB</span>();

<span class="cmt">// Parallel — both run at once</span>
<span class="kw">const</span> [a, b] = <span class="kw">await</span> Promise.<span class="fn-name">all</span>([<span class="fn-name">stepA</span>(), <span class="fn-name">stepB</span>()]);`,
  examples:[
    {label:'Basic async / await',code:`<span class="kw">async function</span> <span class="fn-name">double</span>(n) {
  <span class="kw">return</span> n * <span class="num">2</span>; <span class="cmt">// wrapped in Promise.resolve</span>
}

<span class="kw">async function</span> <span class="fn-name">run</span>() {
  <span class="kw">const</span> result = <span class="kw">await</span> <span class="fn-name">double</span>(<span class="num">5</span>);
  console.<span class="fn-name">log</span>(result); <span class="cmt">// 10</span>
}
<span class="fn-name">run</span>();

<span class="cmt">// await on non-Promise returns directly</span>
<span class="kw">async function</span> <span class="fn-name">test</span>() {
  <span class="kw">const</span> x = <span class="kw">await</span> <span class="num">42</span>; <span class="cmt">// 42 (no error)</span>
  console.<span class="fn-name">log</span>(x);
}`,out:'10 | 42'},
    {label:'try / catch / finally',code:`<span class="kw">async function</span> <span class="fn-name">load</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> data = <span class="kw">await</span> <span class="fn-name">riskyOp</span>();
    <span class="kw">return</span> data;
  } <span class="kw">catch</span> (err) {
    console.<span class="fn-name">log</span>(<span class="str">"Error:"</span>, err.message);
    <span class="kw">return</span> <span class="kw">null</span>; <span class="cmt">// fallback</span>
  } <span class="kw">finally</span> {
    <span class="fn-name">hideSpinner</span>(); <span class="cmt">// always runs</span>
  }
}

<span class="cmt">// throw rejects the returned Promise</span>
<span class="kw">async function</span> <span class="fn-name">fail</span>() { <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"boom"</span>); }
<span class="fn-name">fail</span>().<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e.message)); <span class="cmt">// "boom"</span>`,out:'"Error: ..." | hideSpinner | "boom"'},
    {label:'Sequential vs Parallel',code:`<span class="cmt">// Sequential — total time = timeA + timeB</span>
<span class="kw">const</span> user  = <span class="kw">await</span> <span class="fn-name">fetchUser</span>(<span class="num">1</span>);
<span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn-name">fetchPosts</span>(<span class="num">1</span>);

<span class="cmt">// Parallel — total time = max(timeA, timeB)</span>
<span class="kw">const</span> [user, posts] = <span class="kw">await</span> Promise.<span class="fn-name">all</span>([
  <span class="fn-name">fetchUser</span>(<span class="num">1</span>),
  <span class="fn-name">fetchPosts</span>(<span class="num">1</span>)
]);

<span class="cmt">// forEach WRONG — does not await callbacks</span>
ids.<span class="fn-name">forEach</span>(<span class="kw">async</span> id <span class="op">=></span> { <span class="kw">await</span> <span class="fn-name">process</span>(id); });
<span class="cmt">// FIX: for...of or Promise.all + map</span>
<span class="kw">for</span> (<span class="kw">const</span> id <span class="kw">of</span> ids) { <span class="kw">await</span> <span class="fn-name">process</span>(id); }`,out:'parallel is faster | forEach bug'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="aawh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#5c6878"/></marker></defs>
  <text x="240" y="15" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">async / await Execution Flow</text>
  <rect x="5" y="22" width="200" height="185" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="105" y="40" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">Sequential</text>
  <rect x="15" y="48" width="180" height="22" rx="3" fill="#252b44" stroke="#60a5fa" stroke-width="1"/>
  <text x="105" y="63" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">const a = await fetchA(); // 2s</text>
  <line x1="105" y1="70" x2="105" y2="82" stroke="#5c6878" stroke-width="1.5" marker-end="url(#aawh)"/>
  <rect x="15" y="82" width="180" height="22" rx="3" fill="#252b44" stroke="#60a5fa" stroke-width="1"/>
  <text x="105" y="97" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">const b = await fetchB(); // 2s</text>
  <line x1="105" y1="104" x2="105" y2="116" stroke="#5c6878" stroke-width="1.5" marker-end="url(#aawh)"/>
  <rect x="15" y="116" width="180" height="22" rx="3" fill="#252b44" stroke="#4ade80" stroke-width="1"/>
  <text x="105" y="131" text-anchor="middle" fill="#4ade80" font-size="9">use(a, b)  // total: 4s</text>
  <text x="105" y="155" text-anchor="middle" fill="#f87171" font-size="9">⚠ fetchA blocks fetchB</text>
  <rect x="265" y="22" width="210" height="185" rx="6" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="370" y="40" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">Parallel</text>
  <rect x="275" y="48" width="190" height="22" rx="3" fill="#252b44" stroke="#fbbf24" stroke-width="1"/>
  <text x="370" y="63" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace">Promise.all([fetchA(), fetchB()])</text>
  <rect x="275" y="78" width="85" height="44" rx="3" fill="#252b44" stroke="#60a5fa" stroke-width="1"/>
  <text x="317" y="97" text-anchor="middle" fill="#60a5fa" font-size="8">fetchA()</text>
  <text x="317" y="110" text-anchor="middle" fill="#5c6878" font-size="8">2s</text>
  <rect x="370" y="78" width="95" height="44" rx="3" fill="#252b44" stroke="#60a5fa" stroke-width="1"/>
  <text x="417" y="97" text-anchor="middle" fill="#60a5fa" font-size="8">fetchB()</text>
  <text x="417" y="110" text-anchor="middle" fill="#5c6878" font-size="8">2s (parallel)</text>
  <line x1="317" y1="122" x2="340" y2="134" stroke="#5c6878" stroke-width="1.5" marker-end="url(#aawh)"/>
  <line x1="417" y1="122" x2="394" y2="134" stroke="#5c6878" stroke-width="1.5" marker-end="url(#aawh)"/>
  <rect x="315" y="134" width="110" height="22" rx="3" fill="#252b44" stroke="#4ade80" stroke-width="1"/>
  <text x="370" y="149" text-anchor="middle" fill="#4ade80" font-size="9">use(a, b) // 2s total</text>
  <text x="370" y="175" text-anchor="middle" fill="#4ade80" font-size="9">✓ runs simultaneously</text>
</svg>`,
  analogy:`<div class="analogy-icon">👨‍🍳</div>
<p>An <strong>async function is a chef's recipe that may involve waiting</strong>. <code>await</code> is a step like "wait for the pasta to boil" — the chef pauses <em>this recipe</em> at that step but can do other things in the restaurant (the event loop keeps running). When the pasta is ready, the chef resumes exactly where they left off.</p>
<p><strong>Sequential awaits</strong> = boil pasta, then WAIT until done, then make sauce, then WAIT until done (4 minutes total). <strong>Parallel</strong> = start pasta AND sauce at the same time, wait for BOTH to finish (2 minutes total). The <code>forEach</code> pitfall is like handing each recipe to a trainee but not waiting for any of them — you walk away while they're still cooking.</p>`,
  flow:[
    '<span><strong>Mark as async:</strong> Prefix the function with <code>async</code> — it now always returns a Promise</span>',
    '<span><strong>await a Promise:</strong> <code>const val = await somePromise</code> — pauses this function; the resolved value is assigned to val</span>',
    '<span><strong>Rejection throws:</strong> A rejected await throws an error — wrap with <code>try/catch</code> to handle it</span>',
    '<span><strong>throw rejects:</strong> Throwing (or returning a rejected Promise) from an async function rejects its returned Promise</span>',
    '<span><strong>Sequential vs Parallel:</strong> Multiple independent awaits should use <code>await Promise.all([...])</code> — not one after another</span>',
    '<span><strong>forEach pitfall:</strong> <code>forEach</code> ignores returned Promises from async callbacks — use <code>for...of</code> or <code>Promise.all + map</code></span>',
  ]
},
{
  id:'dom',
  title:'DOM',
  icon:'🌲',
  explain:`<p>The <strong>Document Object Model (DOM)</strong> is a tree-shaped representation of an HTML page that JavaScript can read and modify. The <code>document</code> object is the root. Each HTML element is a <em>node</em> you can select, read, create, modify, or delete entirely from JavaScript.</p>
<p><strong>Selecting:</strong> <code>querySelector(css)</code> — first match or <code>null</code>; <code>querySelectorAll(css)</code> — all matches as a static <code>NodeList</code>; <code>getElementById(id)</code> — fastest single-element lookup. <strong>Content:</strong> <code>textContent</code> (plain text, safe), <code>innerHTML</code> (parses HTML — XSS risk with user data!), <code>innerText</code> (visible text only). <strong>Classes &amp; styles:</strong> <code>classList.add/remove/toggle/contains</code> (prefer over <code>style.*</code> for reusable rules); <code>el.style.propertyName</code> uses camelCase (<code>backgroundColor</code> not <code>background-color</code>).</p>
<p><strong>Creating &amp; inserting:</strong> <code>document.createElement(tag)</code> then <code>parent.append(child)</code> / <code>parent.prepend(child)</code> / <code>parent.insertBefore(new, ref)</code>. <strong>Removing:</strong> <code>el.remove()</code> or <code>parent.removeChild(el)</code>. <strong>Traversal:</strong> <code>el.parentElement</code>, <code>el.children</code>, <code>el.nextElementSibling</code>. A <code>NodeList</code> is not a real Array — use <code>[...list]</code> or <code>Array.from(list)</code> before calling <code>map/filter</code>.</p>`,
  syntax:`<span class="cmt">// Select</span>
<span class="kw">const</span> el  = document.<span class="fn-name">querySelector</span>(<span class="str">"#id"</span>);  <span class="cmt">// first or null</span>
<span class="kw">const</span> els = document.<span class="fn-name">querySelectorAll</span>(<span class="str">".cls"</span>); <span class="cmt">// NodeList</span>

<span class="cmt">// Content</span>
el.textContent = <span class="str">"safe text"</span>;      <span class="cmt">// plain text ✓</span>
el.innerHTML   = <span class="str">"&lt;b&gt;HTML&lt;/b&gt;"</span>;   <span class="cmt">// parses HTML ⚠</span>

<span class="cmt">// Classes & Styles</span>
el.classList.<span class="fn-name">add</span>(<span class="str">"active"</span>);
el.classList.<span class="fn-name">remove</span>(<span class="str">"hidden"</span>);
el.classList.<span class="fn-name">toggle</span>(<span class="str">"dark"</span>);
el.style.backgroundColor = <span class="str">"red"</span>;   <span class="cmt">// camelCase!</span>

<span class="cmt">// Create & Insert</span>
<span class="kw">const</span> li = document.<span class="fn-name">createElement</span>(<span class="str">"li"</span>);
li.textContent = <span class="str">"new item"</span>;
ul.<span class="fn-name">append</span>(li);         <span class="cmt">// at end</span>
ul.<span class="fn-name">prepend</span>(li);        <span class="cmt">// at start</span>

<span class="cmt">// Remove</span>
el.<span class="fn-name">remove</span>();            <span class="cmt">// modern</span>
parent.<span class="fn-name">removeChild</span>(el); <span class="cmt">// older API</span>

<span class="cmt">// Traversal</span>
el.parentElement;  el.children;  el.nextElementSibling;`,
  examples:[
    {label:'Select, Read & Modify',code:`<span class="cmt">// Select by CSS selector</span>
<span class="kw">const</span> title = document.<span class="fn-name">querySelector</span>(<span class="str">"h1"</span>);
<span class="kw">const</span> btn   = document.<span class="fn-name">querySelector</span>(<span class="str">"#submit"</span>);
<span class="kw">const</span> items = document.<span class="fn-name">querySelectorAll</span>(<span class="str">".item"</span>);

<span class="cmt">// Read & change text</span>
console.<span class="fn-name">log</span>(title.textContent);   <span class="cmt">// read</span>
title.textContent = <span class="str">"New Title"</span>;  <span class="cmt">// write (safe)</span>

<span class="cmt">// Attributes</span>
btn.<span class="fn-name">setAttribute</span>(<span class="str">"disabled"</span>, <span class="str">""</span>);
btn.<span class="fn-name">getAttribute</span>(<span class="str">"id"</span>);       <span class="cmt">// "submit"</span>
btn.<span class="fn-name">removeAttribute</span>(<span class="str">"disabled"</span>);`,out:'reads and modifies DOM nodes'},
    {label:'Classes & Styles',code:`<span class="kw">const</span> box = document.<span class="fn-name">querySelector</span>(<span class="str">".box"</span>);

<span class="cmt">// classList — preferred for reusable styles</span>
box.classList.<span class="fn-name">add</span>(<span class="str">"highlight"</span>);
box.classList.<span class="fn-name">remove</span>(<span class="str">"hidden"</span>);
box.classList.<span class="fn-name">toggle</span>(<span class="str">"active"</span>);   <span class="cmt">// add if absent, remove if present</span>
box.classList.<span class="fn-name">contains</span>(<span class="str">"active"</span>);<span class="cmt">// true / false</span>

<span class="cmt">// Inline styles — use camelCase</span>
box.style.backgroundColor = <span class="str">"blue"</span>;
box.style.fontSize = <span class="str">"18px"</span>;`,out:'classList and inline style manipulation'},
    {label:'Create, Append & Remove',code:`<span class="cmt">// Create a new element</span>
<span class="kw">const</span> li = document.<span class="fn-name">createElement</span>(<span class="str">"li"</span>);
li.textContent = <span class="str">"Buy milk"</span>;
li.classList.<span class="fn-name">add</span>(<span class="str">"task"</span>);

<span class="cmt">// Insert into DOM</span>
<span class="kw">const</span> ul = document.<span class="fn-name">querySelector</span>(<span class="str">"ul"</span>);
ul.<span class="fn-name">append</span>(li);    <span class="cmt">// add at end</span>
ul.<span class="fn-name">prepend</span>(li);   <span class="cmt">// add at start</span>

<span class="cmt">// Remove element</span>
li.<span class="fn-name">remove</span>();       <span class="cmt">// removes li from DOM</span>

<span class="cmt">// NodeList to Array for map/filter</span>
[...document.<span class="fn-name">querySelectorAll</span>(<span class="str">".item"</span>)]
  .<span class="fn-name">forEach</span>(el <span class="op">=></span> el.classList.<span class="fn-name">add</span>(<span class="str">"loaded"</span>));`,out:'createElement, append, remove, NodeList spread'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="dah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#5c6878"/></marker></defs>
  <text x="240" y="15" text-anchor="middle" fill="#9aa5b4" font-size="12" font-family="monospace">DOM Tree Structure</text>
  <rect x="190" y="22" width="100" height="28" rx="4" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="41" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">document</text>
  <line x1="240" y1="50" x2="240" y2="62" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dah)"/>
  <rect x="175" y="62" width="130" height="24" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="240" y="78" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">&lt;html&gt;</text>
  <line x1="210" y1="86" x2="140" y2="100" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dah)"/>
  <line x1="270" y1="86" x2="340" y2="100" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dah)"/>
  <rect x="80" y="100" width="115" height="24" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="137" y="116" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">&lt;head&gt;</text>
  <rect x="280" y="100" width="115" height="24" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="337" y="116" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">&lt;body&gt;</text>
  <line x1="300" y1="124" x2="260" y2="140" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dah)"/>
  <line x1="370" y1="124" x2="410" y2="140" stroke="#5c6878" stroke-width="1.5" marker-end="url(#dah)"/>
  <rect x="210" y="140" width="100" height="24" rx="4" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="260" y="156" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">&lt;h1&gt;</text>
  <rect x="368" y="140" width="100" height="24" rx="4" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="418" y="156" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">&lt;ul&gt;</text>
  <rect x="5" y="175" width="460" height="34" rx="4" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="15" y="190" fill="#fbbf24" font-size="9" font-family="monospace">querySelector("#id")  querySelector(".cls")  querySelectorAll("li")</text>
  <text x="15" y="204" fill="#5c6878" font-size="9">→ first match / null     → first match / null     → NodeList (all matches)</text>
</svg>`,
  analogy:`<div class="analogy-icon">🗺️</div>
<p>The DOM is like a <strong>city map</strong>. The <code>document</code> is the city itself — every building (HTML element) has an address. <code>querySelector</code> is like a GPS that finds the first building matching a description ("#id" = exact address, ".class" = building type). <code>querySelectorAll</code> returns a list of all matching buildings.</p>
<p>Once you find a building, you can repaint it (<code>style</code>), put a new sign on it (<code>textContent</code>), add a wing (<code>append</code>), or demolish it entirely (<code>remove</code>). <code>classList</code> is like toggling the building's category flags — "landmark", "open", "under renovation" — without repainting the whole structure.</p>`,
  flow:[
    '<span><strong>Select:</strong> <code>querySelector(css)</code> finds the first matching element (or <code>null</code>); always check for null before using</span>',
    '<span><strong>Read content:</strong> <code>el.textContent</code> (plain text), <code>el.innerHTML</code> (HTML markup), <code>el.value</code> (form inputs)</span>',
    '<span><strong>Modify content:</strong> Assign to <code>textContent</code> (safe) or <code>innerHTML</code> (powerful but XSS risk with untrusted input)</span>',
    '<span><strong>Classes &amp; styles:</strong> <code>classList.add/remove/toggle</code> for class-based styling; <code>style.camelCaseProp</code> for inline styles</span>',
    '<span><strong>Create &amp; insert:</strong> <code>createElement(tag)</code> → set content → <code>parent.append(el)</code> or <code>prepend/insertBefore</code></span>',
    '<span><strong>Remove &amp; traverse:</strong> <code>el.remove()</code>; navigate with <code>parentElement</code>, <code>children</code>, <code>nextElementSibling</code></span>',
  ]
},
{
  id:'events',
  title:'Events',
  icon:'⚡',
  explain:`<p>JavaScript responds to user actions (clicks, keystrokes, form input) and browser signals (page load, resize) through <strong>events</strong>. You register a handler with <code>addEventListener(type, fn, options)</code> — never assign directly to <code>onclick=fn</code> as that overwrites any existing handler.</p>
<p>Every handler receives an <strong>event object</strong> (<code>e</code>). Key properties: <code>e.target</code> — the element that originally triggered the event; <code>e.currentTarget</code> — the element the listener is attached to; <code>e.type</code> — the event name; <code>e.key</code> — for keyboard events. Key methods: <code>e.preventDefault()</code> — stop the browser default (link navigation, form submit); <code>e.stopPropagation()</code> — stop the event from travelling further.</p>
<p><strong>Bubbling</strong> (default): after firing on the target, the event travels UP the DOM tree — every ancestor's listener also fires. <strong>Capturing</strong> (<code>{ capture: true }</code>): event travels DOWN before reaching the target. <strong>Event delegation</strong> exploits bubbling: attach one listener on a parent and check <code>e.target</code> for the actual source — works for dynamically added children too. Use <code>{ once: true }</code> to auto-remove after first fire. <code>removeEventListener</code> requires the exact same function reference — anonymous functions cannot be removed.</p>`,
  syntax:`<span class="cmt">// Add listener</span>
el.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, handler);
el.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, handler, { once: <span class="kw">true</span> });   <span class="cmt">// fires once</span>
el.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, handler, { capture: <span class="kw">true</span> }); <span class="cmt">// capturing</span>

<span class="cmt">// Event object</span>
<span class="kw">function</span> <span class="fn-name">handler</span>(e) {
  e.target;          <span class="cmt">// element that triggered</span>
  e.currentTarget;   <span class="cmt">// element listener is on</span>
  e.type;            <span class="cmt">// "click", "input", etc.</span>
  e.key;             <span class="cmt">// keyboard key name</span>
  e.<span class="fn-name">preventDefault</span>();  <span class="cmt">// stop default action</span>
  e.<span class="fn-name">stopPropagation</span>(); <span class="cmt">// stop bubbling</span>
}

<span class="cmt">// Remove (same reference required!)</span>
el.<span class="fn-name">removeEventListener</span>(<span class="str">"click"</span>, handler);

<span class="cmt">// Event delegation</span>
ul.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, e <span class="op">=></span> {
  <span class="kw">if</span> (e.target.matches(<span class="str">"li"</span>)) { <span class="cmt">/* handle li click */</span> }
});`,
  examples:[
    {label:'Basic Click & Keyboard Events',code:`<span class="kw">const</span> btn = document.<span class="fn-name">querySelector</span>(<span class="str">"#btn"</span>);

<span class="cmt">// Click event</span>
btn.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(<span class="str">"Clicked!"</span>, e.target.id);
});

<span class="cmt">// Keyboard event on input</span>
<span class="kw">const</span> inp = document.<span class="fn-name">querySelector</span>(<span class="str">"input"</span>);
inp.<span class="fn-name">addEventListener</span>(<span class="str">"keydown"</span>, (e) <span class="op">=></span> {
  <span class="kw">if</span> (e.key === <span class="str">"Enter"</span>) <span class="fn-name">submitForm</span>();
  <span class="kw">if</span> (e.key === <span class="str">"Escape"</span>) inp.<span class="fn-name">blur</span>();
});`,out:'click and keydown event handlers with e.target and e.key'},
    {label:'preventDefault & Bubbling',code:`<span class="cmt">// Stop default form submit (page reload)</span>
form.<span class="fn-name">addEventListener</span>(<span class="str">"submit"</span>, (e) <span class="op">=></span> {
  e.<span class="fn-name">preventDefault</span>();  <span class="cmt">// no reload!</span>
  <span class="fn-name">validateAndSend</span>(e.target);
});

<span class="cmt">// Bubbling: click on button also fires parent div listener</span>
div.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"div"</span>));
btn.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(<span class="str">"btn"</span>);
  e.<span class="fn-name">stopPropagation</span>(); <span class="cmt">// div handler won't fire</span>
});`,out:'"btn" only (stopPropagation blocks div listener)'},
    {label:'Event Delegation',code:`<span class="cmt">// One listener handles clicks on ALL current and future <li></span>
<span class="kw">const</span> ul = document.<span class="fn-name">querySelector</span>(<span class="str">"ul"</span>);

ul.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  <span class="kw">if</span> (!e.target.matches(<span class="str">"li"</span>)) <span class="kw">return</span>; <span class="cmt">// ignore non-li clicks</span>
  e.target.classList.<span class="fn-name">toggle</span>(<span class="str">"done"</span>);
  console.<span class="fn-name">log</span>(<span class="str">"Toggled:"</span>, e.target.textContent);
});

<span class="cmt">// Dynamically added li also gets handled — no extra listeners!</span>
ul.<span class="fn-name">append</span>(Object.<span class="fn-name">assign</span>(document.<span class="fn-name">createElement</span>(<span class="str">"li"</span>),{textContent:<span class="str">"New"</span>}));`,out:'toggles "done" on clicked li, including dynamically added ones'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="evup" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#f87171"/></marker>
  <marker id="evdn" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#60a5fa"/></marker></defs>
  <text x="240" y="14" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">Event Bubbling &amp; Delegation</text>
  <rect x="20" y="22" width="200" height="175" rx="6" fill="none" stroke="#2d3456" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="30" y="36" fill="#5c6878" font-size="9" font-family="monospace">document</text>
  <rect x="35" y="42" width="170" height="145" rx="5" fill="none" stroke="#2d3456" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="45" y="56" fill="#5c6878" font-size="9" font-family="monospace">&lt;div&gt; listener here</text>
  <rect x="55" y="62" width="130" height="110" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="120" y="78" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">&lt;ul&gt; ← delegation listener</text>
  <rect x="75" y="88" width="90" height="24" rx="3" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="120" y="104" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">&lt;li&gt; ← CLICK (target)</text>
  <rect x="75" y="118" width="90" height="24" rx="3" fill="#252b44" stroke="#2d3456" stroke-width="1"/>
  <text x="120" y="134" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">&lt;li&gt;</text>
  <rect x="75" y="148" width="90" height="22" rx="3" fill="#252b44" stroke="#2d3456" stroke-width="1"/>
  <text x="120" y="163" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">&lt;li&gt;</text>
  <line x1="155" y1="100" x2="195" y2="80" stroke="#f87171" stroke-width="2" marker-end="url(#evup)" stroke-dasharray="3,2"/>
  <text x="180" y="75" fill="#f87171" font-size="8" font-family="monospace">bubbles up</text>
  <rect x="260" y="22" width="205" height="175" rx="6" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="363" y="40" text-anchor="middle" fill="#9aa5b4" font-size="10" font-family="monospace">Event Object (e)</text>
  <text x="270" y="58" fill="#f5a623" font-size="9" font-family="monospace">e.target</text>
  <text x="350" y="58" fill="#e8eaed" font-size="9" font-family="monospace">→ li (clicked)</text>
  <text x="270" y="76" fill="#f5a623" font-size="9" font-family="monospace">e.currentTarget</text>
  <text x="350" y="76" fill="#e8eaed" font-size="9" font-family="monospace">→ ul (listener)</text>
  <text x="270" y="94" fill="#f5a623" font-size="9" font-family="monospace">e.type</text>
  <text x="350" y="94" fill="#e8eaed" font-size="9" font-family="monospace">→ "click"</text>
  <text x="270" y="112" fill="#4ade80" font-size="9" font-family="monospace">e.preventDefault()</text>
  <text x="270" y="126" fill="#5c6878" font-size="8" font-family="monospace">stops browser default</text>
  <text x="270" y="144" fill="#4ade80" font-size="9" font-family="monospace">e.stopPropagation()</text>
  <text x="270" y="158" fill="#5c6878" font-size="8" font-family="monospace">stops bubbling</text>
  <text x="270" y="176" fill="#fbbf24" font-size="9" font-family="monospace">{ once: true }</text>
  <text x="350" y="176" fill="#5c6878" font-size="8" font-family="monospace">auto-remove</text>
</svg>`,
  analogy:`<div class="analogy-icon">🔔</div>
<p>Events are like a <strong>fire alarm system</strong>. When a fire starts in Room 214 (the <em>target</em>), the alarm fires in that room first, then travels up — floor alarm, building alarm (that's <strong>bubbling</strong>). <code>stopPropagation()</code> cuts the cable between floors.</p>
<p><strong>Event delegation</strong> is like placing one security guard at the building entrance instead of one per room. The guard watches who triggered the alarm (<code>e.target</code>) and decides how to respond — and they automatically cover any new rooms added later, because everything still bubbles to the entrance.</p>`,
  flow:[
    '<span><strong>Register:</strong> <code>el.addEventListener("click", handler)</code> — always use this, never <code>onclick=fn</code> which overwrites existing listeners</span>',
    '<span><strong>User action:</strong> User clicks, types, submits — browser creates an event object and marks a <em>target</em> element</span>',
    '<span><strong>Capture phase:</strong> If <code>{ capture: true }</code>, the event travels DOWN from document to target, firing capturing listeners on the way</span>',
    '<span><strong>Target phase:</strong> Listeners directly on the target element fire</span>',
    '<span><strong>Bubble phase:</strong> Event travels UP the DOM — every ancestor\'s listener fires unless <code>stopPropagation()</code> is called</span>',
    '<span><strong>Defaults &amp; cleanup:</strong> <code>preventDefault()</code> suppresses browser default; <code>removeEventListener</code> requires the exact same function reference stored in a variable</span>',
  ]
},
{
  id:'errorhandling',
  title:'Error Handling',
  icon:'🛡️',
  explain:`<p><strong>Error handling</strong> lets your program recover gracefully instead of crashing. Wrap risky code in a <code>try</code> block; if it throws, execution jumps to <code>catch</code>; <code>finally</code> always runs — whether or not an error occurred — making it perfect for cleanup (closing connections, hiding spinners).</p>
<p>JavaScript has several built-in error types: <code>TypeError</code> (wrong type — e.g. calling null as a function), <code>ReferenceError</code> (undefined variable), <code>RangeError</code> (value out of allowed range), <code>SyntaxError</code> (bad syntax — caught at parse time, not runtime). Every <code>Error</code> object has <code>.name</code>, <code>.message</code>, and <code>.stack</code> properties. You can <code>throw</code> any value, but throwing an <code>Error</code> object is best practice because it captures a stack trace.</p>
<p><strong>Custom errors:</strong> extend <code>Error</code> with a class, call <code>super(message)</code>, and set <code>this.name</code> so <code>instanceof</code> checks work. <strong>Re-throwing:</strong> in a catch block you can inspect the error and re-throw it if it is not the type you handle — this lets specific errors bubble up naturally. For <code>async/await</code>, wrap <code>await</code> calls in <code>try/catch</code> to catch rejected Promises.</p>`,
  syntax:`<span class="cmt">// Basic structure</span>
<span class="kw">try</span> {
  riskyOperation();
} <span class="kw">catch</span> (e) {
  console.<span class="fn-name">log</span>(e.name);    <span class="cmt">// "TypeError" etc.</span>
  console.<span class="fn-name">log</span>(e.message); <span class="cmt">// human-readable msg</span>
  console.<span class="fn-name">log</span>(e.stack);   <span class="cmt">// call stack trace</span>
} <span class="kw">finally</span> {
  <span class="fn-name">cleanup</span>();              <span class="cmt">// always runs</span>
}

<span class="cmt">// Throw</span>
<span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"something broke"</span>);
<span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">TypeError</span>(<span class="str">"expected a string"</span>);

<span class="cmt">// Custom Error</span>
<span class="kw">class</span> <span class="fn-name">ValidationError</span> <span class="kw">extends</span> Error {
  <span class="fn-name">constructor</span>(msg) {
    <span class="kw">super</span>(msg);
    <span class="kw">this</span>.name = <span class="str">"ValidationError"</span>;
  }
}

<span class="cmt">// Async error handling</span>
<span class="kw">async function</span> <span class="fn-name">load</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> data = <span class="kw">await</span> <span class="fn-name">fetch</span>(url);
  } <span class="kw">catch</span> (e) { <span class="fn-name">handleError</span>(e); }
}`,
  examples:[
    {label:'try / catch / finally',code:`<span class="kw">function</span> <span class="fn-name">divide</span>(a, b) {
  <span class="kw">try</span> {
    <span class="kw">if</span> (b === <span class="num">0</span>) <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">RangeError</span>(<span class="str">"Division by zero"</span>);
    <span class="kw">return</span> a / b;
  } <span class="kw">catch</span> (e) {
    console.<span class="fn-name">log</span>(<span class="str">\`\${e.name}: \${e.message}\`</span>); <span class="cmt">// RangeError: Division by zero</span>
    <span class="kw">return</span> <span class="kw">null</span>;
  } <span class="kw">finally</span> {
    console.<span class="fn-name">log</span>(<span class="str">"divide() finished"</span>); <span class="cmt">// always runs</span>
  }
}
<span class="fn-name">divide</span>(<span class="num">10</span>, <span class="num">0</span>); <span class="cmt">// logs error msg, then "divide() finished"</span>`,out:'"RangeError: Division by zero" then "divide() finished"'},
    {label:'Custom Error Class',code:`<span class="kw">class</span> <span class="fn-name">ValidationError</span> <span class="kw">extends</span> Error {
  <span class="fn-name">constructor</span>(field, msg) {
    <span class="kw">super</span>(msg);
    <span class="kw">this</span>.name = <span class="str">"ValidationError"</span>;
    <span class="kw">this</span>.field = field;
  }
}

<span class="kw">function</span> <span class="fn-name">validateAge</span>(age) {
  <span class="kw">if</span> (<span class="kw">typeof</span> age !== <span class="str">"number"</span>) <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">TypeError</span>(<span class="str">"age must be a number"</span>);
  <span class="kw">if</span> (age < <span class="num">0</span>) <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">ValidationError</span>(<span class="str">"age"</span>, <span class="str">"Age cannot be negative"</span>);
}
<span class="kw">try</span> {
  <span class="fn-name">validateAge</span>(-<span class="num">5</span>);
} <span class="kw">catch</span> (e) {
  <span class="kw">if</span> (e <span class="kw">instanceof</span> ValidationError) console.<span class="fn-name">log</span>(e.field, e.message);
  <span class="kw">else</span> <span class="kw">throw</span> e; <span class="cmt">// re-throw unexpected errors</span>
}`,out:'"age" "Age cannot be negative"'},
    {label:'Async Error Handling',code:`<span class="kw">async function</span> <span class="fn-name">fetchUser</span>(id) {
  <span class="kw">try</span> {
    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn-name">fetch</span>(<span class="str">\`/api/users/\${id}\`</span>);
    <span class="kw">if</span> (!res.ok) <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
    <span class="kw">return</span> <span class="kw">await</span> res.<span class="fn-name">json</span>();
  } <span class="kw">catch</span> (e) {
    console.<span class="fn-name">error</span>(<span class="str">"fetchUser failed:"</span>, e.message);
    <span class="kw">return</span> <span class="kw">null</span>; <span class="cmt">// graceful fallback</span>
  } <span class="kw">finally</span> {
    <span class="fn-name">hideSpinner</span>(); <span class="cmt">// always hide loading UI</span>
  }
}`,out:'logs error if fetch fails, always hides spinner'},
  ],
  svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="eh" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#5c6878"/></marker>
  <marker id="ehr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#f87171"/></marker>
  <marker id="ehg" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#4ade80"/></marker></defs>
  <text x="240" y="13" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">try / catch / finally Flow</text>
  <rect x="170" y="20" width="140" height="28" rx="4" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="38" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">try { riskyCode() }</text>
  <line x1="240" y1="48" x2="240" y2="60" stroke="#5c6878" stroke-width="1.5" marker-end="url(#eh)"/>
  <rect x="155" y="60" width="170" height="24" rx="4" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="240" y="76" text-anchor="middle" fill="#9aa5b4" font-size="10" font-family="monospace">Error thrown?</text>
  <line x1="155" y1="72" x2="75" y2="72" stroke="#f87171" stroke-width="1.5" marker-end="url(#ehr)"/>
  <text x="108" y="66" fill="#f87171" font-size="9" font-family="monospace">YES</text>
  <line x1="325" y1="72" x2="395" y2="72" stroke="#4ade80" stroke-width="1.5" marker-end="url(#ehg)"/>
  <text x="348" y="66" fill="#4ade80" font-size="9" font-family="monospace">NO</text>
  <rect x="5" y="58" width="70" height="28" rx="4" fill="#1e2338" stroke="#f87171" stroke-width="1.5"/>
  <text x="40" y="76" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">catch(e) { }</text>
  <rect x="395" y="58" width="78" height="28" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="434" y="76" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">continues</text>
  <line x1="40" y1="86" x2="40" y2="110" stroke="#5c6878" stroke-width="1.5" marker-end="url(#eh)"/>
  <line x1="434" y1="86" x2="434" y2="110" stroke="#5c6878" stroke-width="1.5" marker-end="url(#eh)"/>
  <line x1="40" y1="124" x2="170" y2="124" stroke="#5c6878" stroke-width="1.5"/>
  <line x1="434" y1="124" x2="310" y2="124" stroke="#5c6878" stroke-width="1.5"/>
  <line x1="240" y1="124" x2="240" y2="130" stroke="#5c6878" stroke-width="1.5" marker-end="url(#eh)"/>
  <rect x="155" y="110" width="170" height="28" rx="4" fill="#1e2338" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="240" y="128" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">finally { } ← always</text>
  <line x1="240" y1="138" x2="240" y2="150" stroke="#5c6878" stroke-width="1.5" marker-end="url(#eh)"/>
  <rect x="145" y="150" width="190" height="22" rx="4" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="240" y="165" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">execution continues after block</text>
  <rect x="5" y="180" width="468" height="30" rx="4" fill="#1e2338" stroke="#2d3456" stroke-width="1"/>
  <text x="15" y="193" fill="#c792ea" font-size="9" font-family="monospace">e.name</text><text x="68" y="193" fill="#5c6878" font-size="9">"TypeError"</text>
  <text x="155" y="193" fill="#c792ea" font-size="9" font-family="monospace">e.message</text><text x="225" y="193" fill="#5c6878" font-size="9">"cannot read..."</text>
  <text x="335" y="193" fill="#c792ea" font-size="9" font-family="monospace">e.stack</text><text x="385" y="193" fill="#5c6878" font-size="9">call trace</text>
  <text x="15" y="205" fill="#60a5fa" font-size="9" font-family="monospace">instanceof TypeError</text>
  <text x="155" y="205" fill="#60a5fa" font-size="9" font-family="monospace">instanceof ReferenceError</text>
  <text x="335" y="205" fill="#60a5fa" font-size="9" font-family="monospace">instanceof CustomError</text>
</svg>`,
  analogy:`<div class="analogy-icon">🎪</div>
<p>Error handling is like a <strong>circus safety net</strong>. The <code>try</code> block is the acrobat's performance — you attempt something risky. The <code>catch</code> block is the net — if the performer falls (an error is thrown), the net catches them and the show continues safely instead of ending in disaster.</p>
<p>The <code>finally</code> block is the <strong>cleanup crew</strong> — they sweep the stage whether the performance was a triumph or a tumble. Custom errors are like specific alarm types: a <em>FireAlarm</em> is handled differently from a <em>MedicalAlarm</em> — <code>instanceof</code> lets you tell them apart and respond appropriately, re-throwing alarms you're not equipped to handle.</p>`,
  flow:[
    '<span><strong>try:</strong> wrap risky operations — parsing JSON, reading properties, network requests, anything that can throw</span>',
    '<span><strong>throw:</strong> execution jumps immediately to catch; unexecuted lines in try are skipped</span>',
    '<span><strong>catch(e):</strong> receives the Error object — inspect <code>e.name</code>, <code>e.message</code>, <code>e.stack</code>; use <code>instanceof</code> to handle specific error types</span>',
    '<span><strong>Re-throw:</strong> if catch receives an error it cannot handle, <code>throw e</code> again so it bubbles to a caller that can</span>',
    '<span><strong>finally:</strong> runs regardless of success or failure — close connections, hide spinners, release locks</span>',
    '<span><strong>Async:</strong> wrap <code>await</code> in <code>try/catch</code> to catch rejected Promises; <code>finally</code> works the same way in async functions</span>',
  ]
},
// ── More concepts will be added here in subsequent turns ──
];
