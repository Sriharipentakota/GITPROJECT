import{n as e,t}from"./rolldown-runtime-BpQH8Ho1.js";var n=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),r=t(((e,t)=>{t.exports=n()})),i=r(),a=[{id:`variables`,title:`Variables`,icon:`📦`,explain:`<p>A <strong>variable</strong> is a named container that stores a value in memory. You give the container a name, put something in it, and retrieve it whenever you need it. JavaScript gives you three ways to declare a variable: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
<p><code>let</code> is for values that will change. <code>const</code> is for values that should stay fixed (though objects and arrays declared with const can still have their contents modified). <code>var</code> is the old style—it works but has confusing scoping rules, so prefer <code>let</code> and <code>const</code> in modern code.</p>
<p>Variables have a <em>name</em>, a <em>value</em>, and a <em>scope</em> (where in the code they can be accessed). Uninitialized <code>let</code> variables hold <code>undefined</code> until assigned.</p>`,syntax:`<span class="kw">let</span>   name = value;   <span class="cmt">// block-scoped, reassignable</span>
<span class="kw">const</span> name = value;   <span class="cmt">// block-scoped, cannot be reassigned</span>
<span class="kw">var</span>   name = value;   <span class="cmt">// function-scoped, hoisted (legacy)</span>

<span class="cmt">// Multiple declarations</span>
<span class="kw">let</span> a = <span class="num">1</span>, b = <span class="num">2</span>, c = <span class="num">3</span>;

<span class="cmt">// Destructuring</span>
<span class="kw">let</span> [x, y] = [<span class="num">10</span>, <span class="num">20</span>];
<span class="kw">let</span> { name, age } = person;`,examples:[{label:`Basic declaration & assignment`,code:`<span class="kw">let</span> score = <span class="num">0</span>;
score = <span class="num">10</span>;             <span class="cmt">// reassign is OK with let</span>
<span class="kw">const</span> PI = <span class="num">3.14159</span>;   <span class="cmt">// cannot change PI later</span>
console.<span class="fn-name">log</span>(score, PI); <span class="cmt">// 10  3.14159</span>`,out:`10  3.14159`},{label:`Const with objects (mutation is OK)`,code:`<span class="kw">const</span> user = { name: <span class="str">"Alice"</span> };
user.name = <span class="str">"Bob"</span>;    <span class="cmt">// ✓ mutating property</span>
<span class="cmt">// user = {};          // ✗ would throw TypeError</span>
console.<span class="fn-name">log</span>(user.name); <span class="cmt">// "Bob"</span>`,out:`"Bob"`},{label:`Hoisting difference: var vs let`,code:`console.<span class="fn-name">log</span>(a); <span class="cmt">// undefined (var hoisted)</span>
<span class="kw">var</span> a = <span class="num">5</span>;
<span class="cmt">// console.log(b); // ReferenceError (let NOT hoisted)</span>
<span class="kw">let</span> b = <span class="num">5</span>;`,out:`undefined`}],svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🏬</div>
<p>Think of variables as <strong>labeled storage boxes in a warehouse</strong>. The label is the variable name, and whatever you put inside is the value.</p>
<p><strong>let</strong> is a regular box — you can swap its contents anytime. <strong>const</strong> is a sealed box — once you put something in, you can't replace it (but if the box holds a bag, you can rearrange what's in the bag). <strong>var</strong> is an old-style box that floats to the front of the entire warehouse floor (function), not just its shelf (block) — which causes surprises.</p>`,flow:[`<span><strong>Declaration:</strong> JavaScript reserves memory and creates a named slot — <code>let score;</code></span>`,`<span><strong>Initialization:</strong> Assign a starting value — <code>score = 0;</code> (or in one step: <code>let score = 0;</code>)</span>`,`<span><strong>Access:</strong> Read the stored value — <code>console.log(score);</code></span>`,`<span><strong>Reassignment (let/var):</strong> Replace the value — <code>score = 100;</code></span>`,`<span><strong>Scope end:</strong> Block-scoped variables (let/const) are garbage-collected when their block exits.</span>`]},{id:`datatypes`,title:`Data Types`,icon:`🔢`,explain:`<p>Every value in JavaScript has a <strong>data type</strong> — a classification that determines what operations can be performed on it. JavaScript has <strong>8 built-in types</strong> in two categories: <em>primitives</em> and <em>reference types</em>.</p>
<p>The 7 <strong>primitives</strong> are: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, and <code>bigint</code>. Primitives are immutable and compared by <em>value</em>. <strong>Reference types</strong> (objects, arrays, functions) are compared by <em>reference</em> — two variables can point to the same object in memory.</p>
<p>JavaScript is <em>dynamically typed</em>: a variable's type is set at runtime and can change. The <code>typeof</code> operator returns the type as a string. Watch out: <code>typeof null</code> returns <code>"object"</code> — a famous historical bug kept for compatibility.</p>`,syntax:`<span class="kw">typeof</span> value           <span class="cmt">// returns type string</span>
<span class="fn-name">Number</span>(value)           <span class="cmt">// explicit → number</span>
<span class="fn-name">String</span>(value)           <span class="cmt">// explicit → string</span>
<span class="fn-name">Boolean</span>(value)          <span class="cmt">// explicit → boolean</span>
<span class="fn-name">parseInt</span>(str, <span class="num">10</span>)       <span class="cmt">// string → integer</span>
<span class="fn-name">parseFloat</span>(str)          <span class="cmt">// string → float</span>
Array.<span class="fn-name">isArray</span>(value)    <span class="cmt">// true if array</span>
Number.<span class="fn-name">isNaN</span>(value)     <span class="cmt">// true only for NaN</span>`,examples:[{label:`typeof on different values`,code:`<span class="kw">typeof</span> <span class="str">"hello"</span>      <span class="cmt">// "string"</span>
<span class="kw">typeof</span> <span class="num">42</span>           <span class="cmt">// "number"</span>
<span class="kw">typeof</span> <span class="kw">true</span>         <span class="cmt">// "boolean"</span>
<span class="kw">typeof</span> <span class="kw">undefined</span>    <span class="cmt">// "undefined"</span>
<span class="kw">typeof</span> <span class="kw">null</span>         <span class="cmt">// "object"  ← quirk!</span>
<span class="kw">typeof</span> []           <span class="cmt">// "object"  ← arrays too!</span>
<span class="kw">typeof</span> <span class="kw">function</span>(){} <span class="cmt">// "function"</span>`,out:`"string", "number", "boolean", "undefined", "object", "object", "function"`},{label:`Implicit vs explicit type coercion`,code:`<span class="cmt">// Implicit (JS does it automatically)</span>
<span class="str">"5"</span> <span class="op">+</span> <span class="num">3</span>         <span class="cmt">// "53"  (string wins with +)</span>
<span class="str">"5"</span> <span class="op">-</span> <span class="num">3</span>         <span class="cmt">// 2     (- forces numeric)</span>
<span class="cmt">// Explicit (you control it)</span>
<span class="fn-name">Number</span>(<span class="str">"42"</span>)    <span class="cmt">// 42</span>
<span class="fn-name">String</span>(<span class="num">99</span>)      <span class="cmt">// "99"</span>
<span class="fn-name">Boolean</span>(<span class="num">0</span>)     <span class="cmt">// false</span>`,out:`"53", 2, 42, "99", false`},{label:`The 6 falsy values`,code:`<span class="fn-name">Boolean</span>(<span class="kw">false</span>)      <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="num">0</span>)          <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="str">""</span>)         <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="kw">null</span>)       <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(<span class="kw">undefined</span>)  <span class="cmt">// false</span>
<span class="fn-name">Boolean</span>(NaN)        <span class="cmt">// false</span>
<span class="cmt">// Everything else is truthy</span>`,out:`false (all 6)`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">📫</div>
<p>Think of types as <strong>different container shapes</strong>. A <strong>string</strong> is an envelope — holds only text. A <strong>number</strong> is a measuring cup — holds a numeric amount. A <strong>boolean</strong> is a light switch — only on or off. <strong>null</strong> is a labeled empty box ("officially nothing here"). <strong>undefined</strong> is a shelf with no box on it yet.</p>
<p>Reference types (objects, arrays) are like a <strong>shared whiteboard</strong> — multiple variables can point to the same board, and a change by one is seen by all who share it.</p>`,flow:[`<span><strong>Value written:</strong> A literal appears — <code>42</code>, <code>"hi"</code>, <code>true</code>, <code>[]</code></span>`,`<span><strong>Type inferred:</strong> JS engine classifies it at runtime — no explicit annotation needed</span>`,`<span><strong>typeof query:</strong> <code>typeof value</code> returns the type as a lowercase string</span>`,`<span><strong>Operations governed by type:</strong> <code>+</code> on strings concatenates; on numbers it adds</span>`,`<span><strong>Coercion fires:</strong> When types mix, JS converts one automatically (implicit) or you do it manually (explicit: <code>Number()</code>, <code>String()</code>)</span>`,`<span><strong>NaN guard:</strong> Numeric ops on non-numeric strings yield <code>NaN</code> — detect with <code>Number.isNaN()</code>, not <code>=== NaN</code></span>`]},{id:`operators`,title:`Operators`,icon:`⚙️`,explain:`<p>An <strong>operator</strong> is a symbol that performs an operation on one or more values (called <em>operands</em>). JavaScript has five main operator groups: <strong>arithmetic</strong> (+, -, *, /, %, **), <strong>comparison</strong> (===, !==, >, <, >=, <=), <strong>logical</strong> (&&, ||, !, ??), <strong>assignment</strong> (=, +=, -=…), and the <strong>ternary</strong> (? :).</p>
<p>Two critical distinctions: <code>==</code> (loose equality) coerces types before comparing — <code>5 == "5"</code> is <code>true</code>. <code>===</code> (strict equality) requires the same type AND value — <code>5 === "5"</code> is <code>false</code>. Always prefer <code>===</code> to avoid coercion surprises.</p>
<p><strong>Short-circuit evaluation</strong>: <code>&&</code> stops and returns the first falsy value; <code>||</code> stops and returns the first truthy value. <code>??</code> (nullish coalescing) returns the right side only when the left is <code>null</code> or <code>undefined</code> — unlike <code>||</code> it treats <code>0</code> and <code>""</code> as valid values.</p>`,syntax:`<span class="cmt">// Arithmetic</span>
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
condition <span class="op">?</span> ifTrue <span class="op">:</span> ifFalse`,examples:[{label:`Arithmetic & strict vs loose equality`,code:`<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>          <span class="cmt">// 1  (remainder)</span>
<span class="num">2</span> <span class="op">**</span> <span class="num">8</span>          <span class="cmt">// 256 (exponent)</span>
<span class="num">5</span> <span class="op">==</span>  <span class="str">"5"</span>       <span class="cmt">// true  (coerces type)</span>
<span class="num">5</span> <span class="op">===</span> <span class="str">"5"</span>       <span class="cmt">// false (strict: different types)</span>`,out:`1, 256, true, false`},{label:`Short-circuit & nullish coalescing`,code:`<span class="kw">false</span> <span class="op">||</span> <span class="str">"hello"</span>    <span class="cmt">// "hello" (first truthy)</span>
<span class="num">0</span>     <span class="op">||</span> <span class="str">"fallback"</span> <span class="cmt">// "fallback" (0 is falsy)</span>
<span class="num">0</span>     <span class="op">??</span> <span class="str">"fallback"</span> <span class="cmt">// 0 (0 is NOT null/undefined)</span>
<span class="kw">null</span>  <span class="op">??</span> <span class="str">"default"</span>  <span class="cmt">// "default"</span>
isOk  <span class="op">&&</span> <span class="fn-name">doWork</span>()   <span class="cmt">// doWork runs only if isOk truthy</span>`,out:`"hello", "fallback", 0, "default"`},{label:`Ternary & compound assignment`,code:`<span class="kw">let</span> age = <span class="num">20</span>;
<span class="kw">let</span> label = age <span class="op">>=</span> <span class="num">18</span> <span class="op">?</span> <span class="str">"adult"</span> <span class="op">:</span> <span class="str">"minor"</span>; <span class="cmt">// "adult"</span>
<span class="kw">let</span> score = <span class="num">50</span>;
score <span class="op">+=</span> <span class="num">10</span>;   <span class="cmt">// score = score + 10 → 60</span>
score <span class="op">**=</span> <span class="num">2</span>;   <span class="cmt">// score = score² → 3600</span>`,out:`"adult", score → 3600`}],svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🧰</div>
<p>Operators are <strong>tools in a toolbox</strong> — each designed for one job. A hammer (<code>+</code>) drives nails (adds values). A measuring tape (<code>===</code>) checks if two lengths match exactly. A gate (<code>&&</code>) only lets you through if both conditions are met. A fallback plan (<code>??</code>) kicks in only when there is nothing at all — not just when things look bad.</p>
<p>The key skill is knowing which tool to reach for: <code>||</code> for "use this if the left side looks bad," <code>??</code> for "use this only if the left side is truly absent," and <code>===</code> over <code>==</code> to avoid surprises.</p>`,flow:[`<span><strong>Operands are evaluated:</strong> JavaScript resolves both sides of the operator to their current values</span>`,`<span><strong>Precedence decides order:</strong> <code>*</code> and <code>/</code> before <code>+</code> and <code>-</code>; use parentheses to override</span>`,`<span><strong>Comparison runs:</strong> <code>===</code> checks type then value; <code>==</code> coerces types first (avoid)</span>`,`<span><strong>Short-circuit fires:</strong> <code>&&</code> stops at first falsy; <code>||</code> stops at first truthy; <code>??</code> stops only at non-null/undefined</span>`,`<span><strong>Ternary selects branch:</strong> condition is evaluated → truthy returns left, falsy returns right</span>`,`<span><strong>Compound assignment updates in-place:</strong> <code>x += 5</code> is shorthand for <code>x = x + 5</code></span>`]},{id:`conditionals`,title:`Conditionals`,icon:`🔀`,explain:`<p><strong>Conditionals</strong> let your program make decisions — executing different code depending on whether a condition is true or false. The primary tool is <code>if / else if / else</code>. JavaScript evaluates the condition and coerces it to a boolean: any value that is not <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, or <code>NaN</code> is <em>truthy</em>.</p>
<p><code>switch</code> is the cleaner alternative when you're comparing <strong>one value against many fixed options</strong>. It uses strict (<code>===</code>) comparison internally. Always use <code>break</code> to exit a case — without it, execution <em>falls through</em> to the next case automatically.</p>
<p>Key rules: <code>else if</code> chains are <strong>mutually exclusive</strong> — at most one branch runs. Two separate <code>if</code> statements are NOT mutually exclusive — both can run. Braces <code>{}</code> (not indentation) define what is inside an <code>if</code> block.</p>`,syntax:`<span class="kw">if</span> (condition) {
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
}`,examples:[{label:`if / else if / else chain`,code:`<span class="kw">let</span> score = <span class="num">85</span>;
<span class="kw">if</span> (score <span class="op">>=</span> <span class="num">90</span>)      grade = <span class="str">"A"</span>;
<span class="kw">else if</span> (score <span class="op">>=</span> <span class="num">80</span>) grade = <span class="str">"B"</span>; <span class="cmt">// ← this runs</span>
<span class="kw">else if</span> (score <span class="op">>=</span> <span class="num">70</span>) grade = <span class="str">"C"</span>;
<span class="kw">else</span>                  grade = <span class="str">"F"</span>;
console.<span class="fn-name">log</span>(grade); <span class="cmt">// "B"</span>`,out:`"B"`},{label:`switch with fall-through`,code:`<span class="kw">let</span> day = <span class="num">6</span>;
<span class="kw">switch</span>(day) {
  <span class="kw">case</span> <span class="num">6</span>:
  <span class="kw">case</span> <span class="num">7</span>: console.<span class="fn-name">log</span>(<span class="str">"Weekend"</span>); <span class="kw">break</span>;
  <span class="kw">default</span>: console.<span class="fn-name">log</span>(<span class="str">"Weekday"</span>);
}
<span class="cmt">// case 6 falls through to case 7 → "Weekend"</span>`,out:`"Weekend"`},{label:`Truthy/falsy & guard patterns`,code:`<span class="kw">if</span> (<span class="str">""</span>)        console.<span class="fn-name">log</span>(<span class="str">"A"</span>); <span class="cmt">// skipped — falsy</span>
<span class="kw">if</span> (<span class="num">0</span>)         console.<span class="fn-name">log</span>(<span class="str">"B"</span>); <span class="cmt">// skipped — falsy</span>
<span class="kw">if</span> ([])        console.<span class="fn-name">log</span>(<span class="str">"C"</span>); <span class="cmt">// runs — [] is truthy!</span>
<span class="kw">if</span> (isAuth) <span class="fn-name">loadUser</span>(); <span class="cmt">// guard pattern</span>`,out:`"C"`}],svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🚦</div>
<p>Conditionals are like a <strong>traffic light system</strong>. At each intersection (condition), the light decides which path traffic takes. <code>if</code> is the green light. <code>else if</code> is a second junction if the first was red. <code>else</code> is the final detour when everything else was blocked.</p>
<p><code>switch</code> is like a <strong>hotel reception desk</strong> — the guest's room number (value) is matched to the right key (case). If no room matches, a default key handles them. Forgetting to return the key (no <code>break</code>) means the clerk keeps checking all remaining rooms — fall-through.</p>`,flow:[`<span><strong>Condition evaluated:</strong> The expression inside <code>if ()</code> is coerced to boolean (truthy/falsy)</span>`,`<span><strong>Branch selected:</strong> First truthy condition wins — its block runs, all others are skipped</span>`,`<span><strong>else if chain:</strong> Checked in order top-to-bottom — only one branch executes</span>`,`<span><strong>else:</strong> Runs only if every previous condition was falsy — the guaranteed fallback</span>`,`<span><strong>switch evaluation:</strong> value is compared with <code>===</code> to each case label sequentially</span>`,`<span><strong>break / fall-through:</strong> <code>break</code> exits the switch; without it, execution continues into the next case</span>`]},{id:`loops`,title:`Loops`,icon:`🔁`,explain:`<p>A <strong>loop</strong> repeatedly executes a block of code as long as a condition is true. JavaScript has five loop forms: <code>for</code> (known iteration count), <code>while</code> (unknown count, check first), <code>do...while</code> (check after — runs at least once), <code>for...of</code> (iterate over iterable <em>values</em>), and <code>for...in</code> (iterate over object <em>keys</em>).</p>
<p><strong>break</strong> exits the loop entirely. <strong>continue</strong> skips the rest of the current iteration and jumps to the next. Labeled breaks (<code>break outerLabel</code>) can exit nested loops in one step.</p>
<p>Key warnings: forgetting to increment in a <code>while</code> loop causes an <strong>infinite loop</strong>. Using <code>for...in</code> on arrays gives string indices (<code>"0","1","2"</code>), not values — use <code>for...of</code> for values. <code>var</code> in a <code>for</code> loop leaks out of the block — use <code>let</code> for per-iteration scope, which matters in closures (e.g., <code>setTimeout</code> inside loops).</p>`,syntax:`<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> n; i++) { <span class="cmt">/* body */</span> }
<span class="kw">while</span> (condition) { <span class="cmt">/* body */</span> }
<span class="kw">do</span> { <span class="cmt">/* body */</span> } <span class="kw">while</span> (condition);

<span class="kw">for</span> (<span class="kw">const</span> item <span class="kw">of</span> array)  { <span class="cmt">// values</span> }
<span class="kw">for</span> (<span class="kw">const</span> key  <span class="kw">in</span> object) { <span class="cmt">// keys</span>   }

<span class="kw">break</span>;              <span class="cmt">// exit loop</span>
<span class="kw">continue</span>;           <span class="cmt">// skip iteration</span>
<span class="kw">break</span> outerLabel;   <span class="cmt">// exit named loop</span>`,examples:[{label:`for / while / do...while`,code:`<span class="cmt">// for — known count</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) console.<span class="fn-name">log</span>(i); <span class="cmt">// 0 1 2</span>

<span class="cmt">// while — condition-based</span>
<span class="kw">let</span> n = <span class="num">3</span>;
<span class="kw">while</span> (n <span class="op">></span> <span class="num">0</span>) { console.<span class="fn-name">log</span>(n); n--; } <span class="cmt">// 3 2 1</span>

<span class="cmt">// do...while — runs at least once</span>
<span class="kw">let</span> x = <span class="num">10</span>;
<span class="kw">do</span> { console.<span class="fn-name">log</span>(<span class="str">"ran"</span>); } <span class="kw">while</span> (x <span class="op"><</span> <span class="num">5</span>); <span class="cmt">// "ran" once</span>`,out:`0 1 2 | 3 2 1 | "ran"`},{label:`for...of vs for...in`,code:`<span class="kw">const</span> arr = [<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>];
<span class="kw">for</span> (<span class="kw">const</span> val <span class="kw">of</span> arr)  console.<span class="fn-name">log</span>(val); <span class="cmt">// a b c (values)</span>
<span class="kw">for</span> (<span class="kw">const</span> key <span class="kw">in</span> arr)  console.<span class="fn-name">log</span>(key); <span class="cmt">// "0" "1" "2" (indices!)</span>

<span class="kw">const</span> obj = { x: <span class="num">1</span>, y: <span class="num">2</span> };
<span class="kw">for</span> (<span class="kw">const</span> k <span class="kw">in</span> obj) console.<span class="fn-name">log</span>(k, obj[k]); <span class="cmt">// x 1  y 2</span>`,out:`a b c | "0" "1" "2" | x 1  y 2`},{label:`break, continue & labeled break`,code:`<span class="cmt">// continue — skip even numbers</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">6</span>; i++) {
  <span class="kw">if</span> (i <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>) <span class="kw">continue</span>;
  console.<span class="fn-name">log</span>(i); <span class="cmt">// 1 3 5</span>
}
<span class="cmt">// labeled break — exit nested loop</span>
<span class="fn-name">outer</span>: <span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) {
  <span class="kw">for</span> (<span class="kw">let</span> j = <span class="num">0</span>; j <span class="op"><</span> <span class="num">3</span>; j++) {
    <span class="kw">if</span> (j <span class="op">===</span> <span class="num">1</span>) <span class="kw">break</span> <span class="fn-name">outer</span>; <span class="cmt">// exits both loops</span>
  }
}`,out:`1 3 5 | exits at j=1`}],svgHTML:`<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🫧</div>
<p>Think of a loop as a <strong>washing machine cycle</strong>. It keeps spinning (iterating) until the timer reaches zero (condition fails). <code>break</code> is the emergency stop button — press it and the machine halts immediately. <code>continue</code> is like skipping the spin cycle for one load — skip this step, move to the next item.</p>
<p><code>for</code> is a machine pre-set to 5 cycles (known count). <code>while</code> is a machine that keeps running until the water is clean (unknown count). <code>do...while</code> is a machine that always does at least one wash before checking if it needs another.</p>`,flow:[`<span><strong>Initialize:</strong> A counter or variable is set before the loop — <code>let i = 0</code></span>`,`<span><strong>Check condition:</strong> Before each iteration, the condition is evaluated — if false, loop exits</span>`,`<span><strong>Execute body:</strong> The code inside the loop runs for this iteration</span>`,`<span><strong>Update:</strong> The counter is incremented/decremented — <code>i++</code>, <code>i--</code>, <code>i += 2</code></span>`,`<span><strong>Repeat:</strong> Jump back to step 2 — loop continues until condition is false</span>`,`<span><strong>break / continue:</strong> <code>break</code> exits immediately; <code>continue</code> skips to the next iteration</span>`]},{id:`functions`,title:`Functions`,icon:`⚙️`,explain:`<p>A <strong>function</strong> is a reusable block of code that takes <em>inputs</em> (parameters), performs work, and optionally returns an <em>output</em>. Functions are <strong>first-class values</strong> in JavaScript — they can be stored in variables, passed as arguments, and returned from other functions.</p>
<p>JavaScript has three main syntaxes: <strong>function declarations</strong> (hoisted — callable anywhere in scope), <strong>function expressions</strong> (<code>const fn = function(){}</code> — not hoisted), and <strong>arrow functions</strong> (<code>const fn = () => {}</code> — concise, no own <code>this</code>).</p>
<p>Key features: <strong>default parameters</strong> (<code>name = "Guest"</code>) apply when an argument is <code>undefined</code> or omitted; <strong>rest parameters</strong> (<code>...args</code>) collect remaining arguments into a real array; <strong>IIFE</strong> (Immediately Invoked Function Expression) runs a function instantly without naming it; a missing <code>return</code> causes the function to return <code>undefined</code>.</p>`,syntax:`<span class="cmt">// Declaration (hoisted)</span>
<span class="kw">function</span> <span class="fn-name">add</span>(a, b) { <span class="kw">return</span> a + b; }

<span class="cmt">// Expression (not hoisted)</span>
<span class="kw">const</span> add = <span class="kw">function</span>(a, b) { <span class="kw">return</span> a + b; };

<span class="cmt">// Arrow function (no own this)</span>
<span class="kw">const</span> add = (a, b) <span class="op">=></span> a + b;

<span class="cmt">// Default & rest parameters</span>
<span class="kw">function</span> <span class="fn-name">greet</span>(name = <span class="str">"World"</span>) { <span class="kw">return</span> <span class="str">"Hi "</span> + name; }
<span class="kw">function</span> <span class="fn-name">sum</span>(...nums) { <span class="kw">return</span> nums.<span class="fn-name">reduce</span>((a,b) <span class="op">=></span> a+b, <span class="num">0</span>); }

<span class="cmt">// IIFE</span>
(<span class="kw">function</span>() { console.<span class="fn-name">log</span>(<span class="str">"runs now"</span>); })();`,examples:[{label:`Declaration vs Expression vs Arrow`,code:`<span class="cmt">// Declaration — hoisted</span>
console.<span class="fn-name">log</span>(<span class="fn-name">square</span>(<span class="num">4</span>)); <span class="cmt">// 16 — works before declaration</span>
<span class="kw">function</span> <span class="fn-name">square</span>(n) { <span class="kw">return</span> n * n; }

<span class="cmt">// Expression — NOT hoisted</span>
<span class="kw">const</span> cube = <span class="kw">function</span>(n) { <span class="kw">return</span> n ** <span class="num">3</span>; };
console.<span class="fn-name">log</span>(<span class="fn-name">cube</span>(<span class="num">3</span>));   <span class="cmt">// 27</span>

<span class="cmt">// Arrow — concise, implicit return</span>
<span class="kw">const</span> double = n <span class="op">=></span> n * <span class="num">2</span>;
console.<span class="fn-name">log</span>(<span class="fn-name">double</span>(<span class="num">7</span>)); <span class="cmt">// 14</span>`,out:`16 | 27 | 14`},{label:`Default, Rest & IIFE`,code:`<span class="cmt">// Default param</span>
<span class="kw">function</span> <span class="fn-name">greet</span>(name = <span class="str">"World"</span>) { <span class="kw">return</span> <span class="str">"Hi "</span> + name; }
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>());        <span class="cmt">// "Hi World"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Alice"</span>)); <span class="cmt">// "Hi Alice"</span>

<span class="cmt">// Rest param</span>
<span class="kw">function</span> <span class="fn-name">sum</span>(...nums) { <span class="kw">return</span> nums.<span class="fn-name">reduce</span>((a,b)<span class="op">=></span>a+b, <span class="num">0</span>); }
console.<span class="fn-name">log</span>(<span class="fn-name">sum</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>)); <span class="cmt">// 10</span>

<span class="cmt">// IIFE</span>
<span class="kw">const</span> result = (<span class="kw">function</span>() { <span class="kw">return</span> <span class="num">42</span>; })();
console.<span class="fn-name">log</span>(result); <span class="cmt">// 42</span>`,out:`"Hi World" | "Hi Alice" | 10 | 42`},{label:`First-Class & Higher-Order`,code:`<span class="cmt">// Functions as values</span>
<span class="kw">const</span> fn = <span class="fn-name">Math.max</span>;
console.<span class="fn-name">log</span>(<span class="fn-name">fn</span>(<span class="num">3</span>, <span class="num">7</span>)); <span class="cmt">// 7</span>

<span class="cmt">// Higher-order: function returning function</span>
<span class="kw">function</span> <span class="fn-name">makeAdder</span>(x) { <span class="kw">return</span> y <span class="op">=></span> x + y; }
<span class="kw">const</span> add10 = <span class="fn-name">makeAdder</span>(<span class="num">10</span>);
console.<span class="fn-name">log</span>(<span class="fn-name">add10</span>(<span class="num">5</span>));  <span class="cmt">// 15</span>

<span class="cmt">// Callback (function as argument)</span>
[<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>].<span class="fn-name">map</span>(x <span class="op">=></span> x * <span class="num">2</span>); <span class="cmt">// [2,4,6]</span>`,out:`7 | 15 | [2,4,6]`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🏧</div>
<p>A function is like an <strong>ATM machine</strong>. You insert your card and PIN (arguments), the machine processes your request (function body), and hands you cash (return value). You don't need to know the internal wiring — you just call it with the right inputs and get a predictable output.</p>
<p><strong>Default parameters</strong> are like the default withdrawal amount — if you don't specify, it uses $200. <strong>Rest parameters</strong> are like a machine that can accept any number of bills. An <strong>IIFE</strong> is a temporary ATM that serves one customer then disappears.</p>`,flow:[`<span><strong>Define:</strong> Declare the function with a name, parameters, and body using <code>function</code>, expression, or arrow syntax</span>`,`<span><strong>Call:</strong> Invoke the function by name with parentheses — <code>add(3, 4)</code></span>`,`<span><strong>Bind args:</strong> Arguments are matched to parameters left-to-right; missing ones get their default value (or <code>undefined</code>)</span>`,`<span><strong>Execute body:</strong> The function body runs line by line using the bound parameter values</span>`,`<span><strong>Return:</strong> <code>return expr</code> exits the function and sends the value to the caller — no <code>return</code> means <code>undefined</code></span>`,`<span><strong>First-class:</strong> The function itself is a value — store it, pass it, return it from other functions</span>`]},{id:`arrays`,title:`Arrays`,icon:`📋`,explain:`<p>An <strong>array</strong> is an ordered, zero-indexed list of values. Arrays in JavaScript are objects and can hold any mix of types. Create with a literal: <code>const arr = [1, "two", true]</code>. Access elements by index: <code>arr[0]</code>. The <code>length</code> property gives the count; last element is at <code>arr[arr.length - 1]</code>.</p>
<p>Methods split into two groups: <strong>mutating</strong> (change the original array) — <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>; and <strong>non-mutating</strong> (return a new value/array) — <code>slice</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>find</code>, <code>findIndex</code>, <code>some</code>, <code>every</code>, <code>includes</code>, <code>concat</code>, <code>flat</code>.</p>
<p>Key traps: <code>sort()</code> without a comparator sorts <em>lexicographically</em> (numbers go wrong); <code>indexOf</code> returns <code>0</code> for the first element which is falsy — use <code>!== -1</code> or <code>includes()</code>; <code>forEach</code> always returns <code>undefined</code> — use <code>map</code> to get a new array; <code>splice</code> mutates while <code>slice</code> does not.</p>`,syntax:`<span class="cmt">// Create</span>
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
<span class="kw">const</span> [a, b, ...rest] = arr;`,examples:[{label:`Mutating Methods`,code:`<span class="kw">const</span> a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
a.<span class="fn-name">push</span>(<span class="num">4</span>);      <span class="cmt">// a → [1,2,3,4]  returns 4 (new length)</span>
a.<span class="fn-name">pop</span>();        <span class="cmt">// a → [1,2,3]    returns 4 (removed)</span>
a.<span class="fn-name">unshift</span>(<span class="num">0</span>);   <span class="cmt">// a → [0,1,2,3]  returns 4 (new length)</span>
a.<span class="fn-name">shift</span>();      <span class="cmt">// a → [1,2,3]    returns 0 (removed)</span>
a.<span class="fn-name">splice</span>(<span class="num">1</span>,<span class="num">1</span>);  <span class="cmt">// a → [1,3]      returns [2]</span>`,out:`[1,3] | removed [2]`},{label:`Non-Mutating Methods`,code:`<span class="kw">const</span> n = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>];
n.<span class="fn-name">slice</span>(<span class="num">1</span>, <span class="num">3</span>);                    <span class="cmt">// [2,3]</span>
n.<span class="fn-name">map</span>(x <span class="op">=></span> x * <span class="num">2</span>);               <span class="cmt">// [2,4,6,8]</span>
n.<span class="fn-name">filter</span>(x <span class="op">=></span> x <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>);     <span class="cmt">// [2,4]</span>
n.<span class="fn-name">reduce</span>((acc, x) <span class="op">=></span> acc + x, <span class="num">0</span>);<span class="cmt">// 10</span>
n.<span class="fn-name">find</span>(x <span class="op">=></span> x <span class="op">></span> <span class="num">2</span>);              <span class="cmt">// 3 (first match)</span>
n.<span class="fn-name">includes</span>(<span class="num">4</span>);                   <span class="cmt">// true</span>
<span class="cmt">// n is still [1,2,3,4] — untouched</span>`,out:`n unchanged | results are new`},{label:`Spread & Destructuring`,code:`<span class="cmt">// Spread — copy and merge</span>
<span class="kw">const</span> a = [<span class="num">1</span>, <span class="num">2</span>], b = [<span class="num">3</span>, <span class="num">4</span>];
<span class="kw">const</span> merged = [...a, ...b];    <span class="cmt">// [1,2,3,4]</span>
<span class="kw">const</span> copy   = [...a];          <span class="cmt">// [1,2] — shallow copy</span>

<span class="cmt">// Destructuring</span>
<span class="kw">const</span> [first, second, ...rest] = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>];
<span class="cmt">// first=10, second=20, rest=[30,40]</span>`,out:`[1,2,3,4] | 10 20 [30,40]`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🅿️</div>
<p>An array is like a <strong>numbered parking lot</strong>. Each spot has a fixed number (index 0, 1, 2…). You can park at the end (<code>push</code>), remove from the end (<code>pop</code>), add to the front (<code>unshift</code>), or tow from the front (<code>shift</code>). <code>splice</code> is a bulldozer — it reaches into the middle and removes or inserts spots, changing the whole layout.</p>
<p><code>map</code> is like photographing every car and producing a new photo album — the lot is unchanged. <code>filter</code> is like listing only red cars. <code>reduce</code> is like counting the total parking fees. <code>slice</code> is a copy of one section of the lot — the original is untouched.</p>`,flow:[`<span><strong>Create:</strong> <code>const arr = [v1, v2, v3]</code> — zero-indexed, any types, dynamic length</span>`,`<span><strong>Access:</strong> <code>arr[0]</code> (first), <code>arr[arr.length-1]</code> (last) — out-of-range returns <code>undefined</code></span>`,`<span><strong>Mutate (in-place):</strong> <code>push/pop</code> (end), <code>unshift/shift</code> (front), <code>splice</code> (middle) — change original</span>`,`<span><strong>Transform (new array):</strong> <code>map</code>, <code>filter</code>, <code>slice</code>, <code>concat</code> — original is untouched</span>`,`<span><strong>Fold/Search:</strong> <code>reduce</code> (single value), <code>find</code> (first match), <code>includes</code> (boolean), <code>some/every</code></span>`,`<span><strong>Spread & Destructure:</strong> <code>[...arr]</code> copies; <code>const [a,b,...rest] = arr</code> unpacks elements</span>`]},{id:`objects`,title:`Objects`,icon:`🗂️`,explain:`<p>An <strong>object</strong> is an unordered collection of <em>key-value pairs</em> (properties). Keys are strings (or Symbols); values can be anything. Create with a literal: <code>const obj = { name: "Alice", age: 25 }</code>. Access properties with <strong>dot notation</strong> (<code>obj.name</code>) for known keys, or <strong>bracket notation</strong> (<code>obj[key]</code>) for dynamic/variable keys.</p>
<p>Properties can be added (<code>obj.role = "admin"</code>), updated, or removed (<code>delete obj.role</code>). Functions stored as properties are called <strong>methods</strong>. Use shorthand method syntax: <code>{ greet() {} }</code>. Inside a regular method, <code>this</code> refers to the object — but arrow functions have <em>no own</em> <code>this</code>.</p>
<p>Key utilities: <code>Object.keys()</code> / <code>Object.values()</code> / <code>Object.entries()</code> for iteration; <strong>spread</strong> (<code>{ ...obj }</code>) for shallow copy or merge; <strong>destructuring</strong> (<code>const { name, age } = obj</code>) to unpack; <strong>optional chaining</strong> (<code>obj?.a?.b</code>) for safe nested access; <strong>nullish coalescing</strong> (<code>val ?? "default"</code>) for fallbacks. Spread only shallow-copies — nested objects are still shared references.</p>`,syntax:`<span class="cmt">// Create & access</span>
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
obj.name ?? <span class="str">"Guest"</span>;    <span class="cmt">// nullish coalescing</span>`,examples:[{label:`Property Access & Mutation`,code:`<span class="kw">const</span> user = { name: <span class="str">"Alice"</span>, age: <span class="num">25</span> };
user.name;               <span class="cmt">// "Alice"</span>
user[<span class="str">"age"</span>];            <span class="cmt">// 25</span>
<span class="kw">const</span> k = <span class="str">"name"</span>;
user[k];                 <span class="cmt">// "Alice" (dynamic key)</span>

user.role = <span class="str">"admin"</span>;    <span class="cmt">// add new property</span>
<span class="kw">delete</span> user.age;         <span class="cmt">// remove property</span>
console.<span class="fn-name">log</span>(user);      <span class="cmt">// { name:"Alice", role:"admin" }</span>`,out:`{ name:"Alice", role:"admin" }`},{label:`Methods, Destructuring & Spread`,code:`<span class="cmt">// Method with this</span>
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
<span class="cmt">// { theme:"dark", lang:"en" }</span>`,out:`84 | { theme:"dark", lang:"en" }`},{label:`Object.entries, Optional Chaining & ??`,code:`<span class="cmt">// Iterate key-value pairs</span>
<span class="kw">const</span> scores = { alice: <span class="num">90</span>, bob: <span class="num">75</span> };
Object.<span class="fn-name">entries</span>(scores).<span class="fn-name">forEach</span>(([name, score]) <span class="op">=></span>
  console.<span class="fn-name">log</span>(name, score));

<span class="cmt">// Optional chaining</span>
<span class="kw">const</span> user = {};
user?.address?.city;     <span class="cmt">// undefined (no error)</span>

<span class="cmt">// Nullish coalescing</span>
<span class="kw">const</span> theme = user.theme ?? <span class="str">"light"</span>; <span class="cmt">// "light"</span>`,out:`alice 90 | bob 75 | undefined | "light"`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🗄️</div>
<p>An object is like a <strong>filing cabinet</strong>. Each drawer is labeled with a key (property name) and holds a document (value). You can open any drawer by its label (<code>obj.name</code>), add new labeled drawers, update what's inside, or remove a drawer entirely (<code>delete</code>).</p>
<p><strong>Spread</strong> is photocopying the cabinet — top-level drawers get duplicated, but if a drawer itself contains a folder full of sub-documents (nested object), both the original and the copy point to the <em>same</em> folder. <strong>Optional chaining</strong> (<code>?.</code>) is politely checking "does this drawer exist?" before opening it — instead of crashing when it's missing.</p>`,flow:[`<span><strong>Create:</strong> <code>const obj = { key: value }</code> — key-value pairs, values can be any type including functions</span>`,`<span><strong>Access:</strong> <code>obj.key</code> (dot, literal) or <code>obj[expr]</code> (bracket, dynamic/variable keys)</span>`,`<span><strong>Mutate:</strong> <code>obj.k = v</code> (add/update), <code>delete obj.k</code> (remove) — objects are mutable by default</span>`,`<span><strong>Methods:</strong> Functions stored as properties; inside regular methods <code>this</code> = the object (arrow functions have no own <code>this</code>)</span>`,`<span><strong>Destructure & Spread:</strong> <code>const { a, b } = obj</code> unpacks; <code>{ ...obj, extra }</code> shallow-copies and merges</span>`,`<span><strong>Iterate:</strong> <code>Object.keys/values/entries()</code>; safe access with <code>obj?.a?.b</code> and fallbacks with <code>?? "default"</code></span>`]},{id:`scope`,title:`Scope`,icon:`🔭`,explain:`<p><strong>Scope</strong> determines where a variable is visible and accessible. JavaScript has three scope levels: <strong>global</strong> (accessible everywhere), <strong>function</strong> (accessible only inside that function), and <strong>block</strong> (accessible only inside the enclosing <code>{}</code>).</p>
<p>The keyword you choose controls scope: <code>var</code> is <em>function-scoped</em> (leaks out of <code>if</code>/<code>for</code> blocks, hoisted as <code>undefined</code>); <code>let</code> and <code>const</code> are <em>block-scoped</em> (confined to their <code>{}</code>, hoisted but in the <strong>Temporal Dead Zone</strong>). The TDZ means a <code>let</code>/<code>const</code> variable exists in the scope but throws <code>ReferenceError</code> if accessed before its declaration line.</p>
<p>The <strong>scope chain</strong>: when a variable isn't found in the current scope, JS looks outward through enclosing scopes until it reaches global. <strong>Variable shadowing</strong> occurs when an inner scope declares the same name as an outer scope — the inner one hides the outer. <strong>Hoisting</strong>: <code>var</code> declarations and function declarations are moved to the top of their scope before code runs.</p>`,syntax:`<span class="cmt">// var — function-scoped, hoisted as undefined</span>
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
<span class="kw">function</span> <span class="fn-name">inner</span>() { console.<span class="fn-name">log</span>(outer); } <span class="cmt">// 100</span>`,examples:[{label:`var vs let — Block Scope`,code:`<span class="cmt">// var leaks out of block</span>
<span class="kw">if</span> (<span class="kw">true</span>) { <span class="kw">var</span> leaked = <span class="num">1</span>; }
console.<span class="fn-name">log</span>(leaked); <span class="cmt">// 1 — var is NOT block-scoped</span>

<span class="cmt">// let stays inside block</span>
<span class="kw">if</span> (<span class="kw">true</span>) { <span class="kw">let</span> confined = <span class="num">2</span>; }
console.<span class="fn-name">log</span>(confined); <span class="cmt">// ReferenceError</span>

<span class="cmt">// Classic var-in-loop bug</span>
<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) {}
console.<span class="fn-name">log</span>(i); <span class="cmt">// 3 — leaked out!</span>`,out:`1 | ReferenceError | 3`},{label:`Hoisting & TDZ`,code:`<span class="cmt">// var — hoisted as undefined</span>
console.<span class="fn-name">log</span>(a);   <span class="cmt">// undefined (not error)</span>
<span class="kw">var</span> a = <span class="num">5</span>;

<span class="cmt">// Function declaration — fully hoisted</span>
console.<span class="fn-name">log</span>(<span class="fn-name">greet</span>()); <span class="cmt">// "Hi" — works before def</span>
<span class="kw">function</span> <span class="fn-name">greet</span>() { <span class="kw">return</span> <span class="str">"Hi"</span>; }

<span class="cmt">// let — TDZ throws ReferenceError</span>
<span class="cmt">// console.log(b);  ← ReferenceError</span>
<span class="kw">let</span> b = <span class="num">10</span>;`,out:`undefined | "Hi" | (TDZ if accessed early)`},{label:`Scope Chain & Shadowing`,code:`<span class="kw">const</span> x = <span class="str">"global"</span>;

<span class="kw">function</span> <span class="fn-name">outer</span>() {
  <span class="kw">const</span> x = <span class="str">"outer"</span>; <span class="cmt">// shadows global x</span>
  <span class="kw">function</span> <span class="fn-name">inner</span>() {
    <span class="cmt">// x not declared here → chain lookup</span>
    console.<span class="fn-name">log</span>(x);   <span class="cmt">// "outer" (found in outer)</span>
  }
  <span class="fn-name">inner</span>();
}
<span class="fn-name">outer</span>();
console.<span class="fn-name">log</span>(x); <span class="cmt">// "global" — unaffected</span>`,out:`"outer" | "global"`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🏢</div>
<p>Scope is like a <strong>building with nested rooms</strong>. The global scope is the lobby — everyone can see it. A function is a private office — only people inside can access what's in the office. A block (<code>if</code>, <code>for</code>) is a mini-closet inside the office — <code>let</code>/<code>const</code> stay in the closet, but <code>var</code> doesn't respect the closet door and spills into the whole office.</p>
<p>The <strong>scope chain</strong> is like asking your floor manager for something — if they don't have it, they ask the floor above, all the way to the building owner (global). <strong>Hoisting</strong> is like the building posting a sign "<em>Room reserved — key not yet available</em>" for <code>var</code> (you know it exists, value is <code>undefined</code>) versus <code>let</code>/<code>const</code> where touching the door before the key arrives causes an alarm (<code>ReferenceError</code>).</p>`,flow:[`<span><strong>Choose the keyword:</strong> <code>const</code> (never reassigned), <code>let</code> (reassigned), <code>var</code> (legacy — avoid in modern code)</span>`,`<span><strong>Block vs function scope:</strong> <code>let</code>/<code>const</code> are confined to <code>{}</code>; <code>var</code> hoists to the nearest function (or global)</span>`,`<span><strong>Hoisting:</strong> Before code runs, <code>var</code> declarations move to top (initialized <code>undefined</code>); function declarations are fully available</span>`,`<span><strong>TDZ:</strong> <code>let</code>/<code>const</code> are hoisted but accessing before their line throws <code>ReferenceError: Cannot access before initialization</code></span>`,`<span><strong>Scope chain:</strong> Variable lookup travels outward — inner scope → enclosing function → global — stops at first match</span>`,`<span><strong>Shadowing:</strong> Declaring a same-named variable in an inner scope hides (but does not change) the outer variable</span>`]},{id:`closures`,title:`Closures`,icon:`🔒`,explain:`<p>A <strong>closure</strong> is a function that <em>remembers</em> the variables from its lexical environment even after the outer function has returned. Every time an inner function references a variable from an enclosing scope, it forms a closure over that variable. The closed-over variables stay alive in memory as long as the closure exists.</p>
<p>Key insight: closures capture variables <em>by reference</em>, not by value — if the outer variable changes after the closure is created, the closure sees the updated value. This is why the classic <code>var</code>-in-loop bug exists: all closures share the same <code>var i</code>, which equals the loop's final value by the time any closure runs. Fix: use <code>let</code> for a per-iteration binding.</p>
<p>Practical uses: <strong>private state</strong> (counter, bank balance), <strong>factory functions</strong> (each call returns an independent closure), <strong>module pattern</strong> (IIFE + closure = private data + public API), <strong>memoization</strong>, <strong>partial application / currying</strong>. Multiple closures from the same factory call share the same outer variables; closures from separate factory calls have independent state.</p>`,syntax:`<span class="cmt">// Basic closure — inner fn remembers outer variable</span>
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
})();`,examples:[{label:`Counter & Accumulator`,code:`<span class="cmt">// Counter — state lives in the closure</span>
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
acc(<span class="num">3</span>); <span class="cmt">// 8 — total remembered</span>`,out:`counter → 3 | acc → 5, 8`},{label:`Factory & Module Pattern`,code:`<span class="cmt">// Factory — each call = own closure</span>
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
mod.<span class="fn-name">get</span>(); <span class="cmt">// 2 — _count is private</span>`,out:`add5(3)=8 | add10(3)=13 | mod.get()=2`},{label:`Classic Loop Bug & Fix`,code:`<span class="cmt">// BUG: var — all closures share one i</span>
<span class="kw">const</span> buggy = [];
<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) buggy.<span class="fn-name">push</span>(() <span class="op">=></span> i);
buggy[<span class="num">0</span>](); <span class="cmt">// 3 — all return 3!</span>

<span class="cmt">// FIX: let — each iteration gets own i</span>
<span class="kw">const</span> fixed = [];
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">3</span>; i++) fixed.<span class="fn-name">push</span>(() <span class="op">=></span> i);
fixed[<span class="num">0</span>](); <span class="cmt">// 0</span>
fixed[<span class="num">1</span>](); <span class="cmt">// 1</span>
fixed[<span class="num">2</span>](); <span class="cmt">// 2</span>`,out:`buggy → 3,3,3 | fixed → 0,1,2`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎒</div>
<p>A closure is like a <strong>backpack you take when leaving a room</strong>. When a function finishes running (you leave the room), it's gone — but if it returned an inner function, that inner function took a backpack with whatever variables it needed. Even though the room no longer exists, the inner function still has those items in its backpack.</p>
<p>Each call to the outer function creates a <em>new backpack</em> — so two closures from two separate calls have entirely independent contents. But two inner functions returned from the <em>same</em> call share one backpack — if one modifies a variable, the other sees the change.</p>`,flow:[`<span><strong>Inner function defined:</strong> A function is declared inside another function and references the outer function's variables</span>`,`<span><strong>Closure formed:</strong> At the moment of creation, the inner function captures a reference to those outer variables (not a copy)</span>`,`<span><strong>Outer returns:</strong> The outer function finishes and its execution context is gone — but the closed-over variables stay alive</span>`,`<span><strong>Variables persist:</strong> Each call to the returned inner function still has access to the same (living) outer variables</span>`,`<span><strong>Independent instances:</strong> Each call to the factory creates a new, independent closure with its own private variables</span>`,`<span><strong>Shared closures:</strong> Two functions returned from the same outer call share one set of outer variables — mutations are visible to both</span>`]},{id:`promises`,title:`Promises`,icon:`🤝`,explain:`<p>A <strong>Promise</strong> is an object representing the eventual result of an asynchronous operation. It has three states: <strong>pending</strong> (in progress), <strong>fulfilled</strong> (completed successfully), or <strong>rejected</strong> (failed). A promise transitions exactly once — from pending to either fulfilled or rejected — and then stays in that state forever.</p>
<p>Create with <code>new Promise((resolve, reject) => { ... })</code>. Call <code>resolve(value)</code> to fulfill or <code>reject(reason)</code> to reject. Consume with <code>.then(onFulfilled)</code>, <code>.catch(onRejected)</code>, and <code>.finally(cleanup)</code>. Each <code>.then()</code>/<code>.catch()</code> returns a <em>new</em> Promise, enabling <strong>chaining</strong>. Returning a value from <code>.then()</code> wraps it in a resolved promise; returning a promise adopts its state. Rejections skip <code>.then()</code> handlers and travel to the next <code>.catch()</code>.</p>
<p>Static helpers: <code>Promise.all([...])</code> — waits for all, rejects if any reject; <code>Promise.allSettled([...])</code> — waits for all, always resolves with outcomes; <code>Promise.race([...])</code> — first to settle wins; <code>Promise.any([...])</code> — first to <em>fulfill</em> wins. Promise callbacks run in the <strong>microtask queue</strong> — after synchronous code but before <code>setTimeout</code>.</p>`,syntax:`<span class="cmt">// Create</span>
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
Promise.<span class="fn-name">any</span>([p1, p2]);         <span class="cmt">// first to fulfill</span>`,examples:[{label:`Create, Resolve & Reject`,code:`<span class="cmt">// Resolving</span>
<span class="kw">const</span> p1 = <span class="kw">new</span> <span class="fn-name">Promise</span>(resolve <span class="op">=></span> <span class="fn-name">resolve</span>(<span class="num">42</span>));
p1.<span class="fn-name">then</span>(v <span class="op">=></span> console.<span class="fn-name">log</span>(v)); <span class="cmt">// 42</span>

<span class="cmt">// Rejecting</span>
<span class="kw">const</span> p2 = <span class="kw">new</span> <span class="fn-name">Promise</span>((_, reject) <span class="op">=></span>
  <span class="fn-name">reject</span>(<span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"fail"</span>)));
p2.<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e.message)); <span class="cmt">// "fail"</span>

<span class="cmt">// .finally always runs</span>
p1.<span class="fn-name">finally</span>(() <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"cleanup"</span>)); <span class="cmt">// "cleanup"</span>`,out:`42 | "fail" | "cleanup"`},{label:`Chaining`,code:`<span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="num">10</span>)
  .<span class="fn-name">then</span>(n <span class="op">=></span> n * <span class="num">2</span>)       <span class="cmt">// 20</span>
  .<span class="fn-name">then</span>(n <span class="op">=></span> n + <span class="num">5</span>)       <span class="cmt">// 25</span>
  .<span class="fn-name">then</span>(n <span class="op">=></span> console.<span class="fn-name">log</span>(n)); <span class="cmt">// 25</span>

<span class="cmt">// Error skips .then() — lands in .catch()</span>
<span class="fn-name">Promise</span>.<span class="fn-name">reject</span>(<span class="str">"err"</span>)
  .<span class="fn-name">then</span>(v <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"skipped"</span>))
  .<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e)); <span class="cmt">// "err"</span>`,out:`25 | "err" (skipped .then)`},{label:`Promise.all & .allSettled`,code:`<span class="kw">const</span> p1 = <span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="str">"a"</span>);
<span class="kw">const</span> p2 = <span class="fn-name">Promise</span>.<span class="fn-name">resolve</span>(<span class="str">"b"</span>);
<span class="kw">const</span> p3 = <span class="fn-name">Promise</span>.<span class="fn-name">reject</span>(<span class="str">"fail"</span>);

<span class="cmt">// Promise.all — fails fast if any rejects</span>
<span class="fn-name">Promise</span>.<span class="fn-name">all</span>([p1, p2])
  .<span class="fn-name">then</span>(r <span class="op">=></span> console.<span class="fn-name">log</span>(r)); <span class="cmt">// ["a","b"]</span>

<span class="cmt">// Promise.allSettled — always resolves with status</span>
<span class="fn-name">Promise</span>.<span class="fn-name">allSettled</span>([p1, p3])
  .<span class="fn-name">then</span>(r <span class="op">=></span> console.<span class="fn-name">log</span>(r[<span class="num">1</span>].status)); <span class="cmt">// "rejected"</span>`,out:`["a","b"] | "rejected"`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🍽️</div>
<p>A Promise is like a <strong>restaurant order ticket</strong>. You place your order and get a ticket (the promise object) — it's <em>pending</em>. While the kitchen works, you can do other things (non-blocking). When the food is ready, the kitchen either delivers it to your table (<code>resolve</code>) or sends a waiter to apologize it's not available (<code>reject</code>).</p>
<p><code>.then()</code> is the instruction you give: "when food arrives, add sauce." <code>.catch()</code> is: "if food doesn't come, order pizza instead." <code>.finally()</code> is: "always pay the bill regardless." <code>Promise.all()</code> is ordering all dishes at once — if any kitchen fails, the whole table's order is cancelled. <code>Promise.race()</code> is a cooking competition — whoever finishes first wins.</p>`,flow:[`<span><strong>Create:</strong> <code>new Promise((resolve, reject) => { async work... })</code> — starts pending</span>`,`<span><strong>Fulfill:</strong> Call <code>resolve(value)</code> inside the executor — transitions to fulfilled, triggers <code>.then()</code></span>`,`<span><strong>Reject:</strong> Call <code>reject(reason)</code> or throw inside the executor — transitions to rejected, skips <code>.then()</code></span>`,`<span><strong>Chain:</strong> <code>.then()</code> and <code>.catch()</code> return new Promises — return a value to pass it forward, return a Promise to adopt its state</span>`,`<span><strong>Catch errors:</strong> Rejections travel down the chain, skipping <code>.then()</code> handlers until a <code>.catch()</code> is reached</span>`,`<span><strong>Parallel:</strong> <code>Promise.all()</code> for all-or-nothing; <code>Promise.allSettled()</code> to collect all outcomes regardless of failure</span>`]},{id:`asyncawait`,title:`Async / Await`,icon:`⏳`,explain:`<p><code>async</code>/<code>await</code> is syntactic sugar over Promises that makes asynchronous code read like synchronous code. An <code>async</code> function <em>always</em> returns a Promise — even if you <code>return 42</code>, the caller gets <code>Promise.resolve(42)</code>. Inside an async function, <code>await</code> pauses that function's execution until the awaited Promise settles, then resumes with its resolved value.</p>
<p>Error handling uses <code>try/catch/finally</code> — a rejected <code>await</code> throws, which the <code>catch</code> block catches. Throwing inside an async function rejects its returned Promise. <code>await</code> can only be used <em>inside</em> an <code>async</code> function (except at top-level in ES modules).</p>
<p>Critical pitfalls: <strong>Forgetting <code>await</code></strong> gives you a Promise object instead of the value. <strong>Sequential awaits</strong> when operations are independent wastes time — use <code>await Promise.all([...])</code> for parallel execution. <strong><code>forEach</code> with async callbacks</strong> does not await them — use <code>for...of</code> or <code>Promise.all + map</code> instead. <code>await</code> on a non-Promise returns the value directly (no error).</p>`,syntax:`<span class="cmt">// async function — always returns a Promise</span>
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
<span class="kw">const</span> [a, b] = <span class="kw">await</span> Promise.<span class="fn-name">all</span>([<span class="fn-name">stepA</span>(), <span class="fn-name">stepB</span>()]);`,examples:[{label:`Basic async / await`,code:`<span class="kw">async function</span> <span class="fn-name">double</span>(n) {
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
}`,out:`10 | 42`},{label:`try / catch / finally`,code:`<span class="kw">async function</span> <span class="fn-name">load</span>() {
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
<span class="fn-name">fail</span>().<span class="fn-name">catch</span>(e <span class="op">=></span> console.<span class="fn-name">log</span>(e.message)); <span class="cmt">// "boom"</span>`,out:`"Error: ..." | hideSpinner | "boom"`},{label:`Sequential vs Parallel`,code:`<span class="cmt">// Sequential — total time = timeA + timeB</span>
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
<span class="kw">for</span> (<span class="kw">const</span> id <span class="kw">of</span> ids) { <span class="kw">await</span> <span class="fn-name">process</span>(id); }`,out:`parallel is faster | forEach bug`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">👨‍🍳</div>
<p>An <strong>async function is a chef's recipe that may involve waiting</strong>. <code>await</code> is a step like "wait for the pasta to boil" — the chef pauses <em>this recipe</em> at that step but can do other things in the restaurant (the event loop keeps running). When the pasta is ready, the chef resumes exactly where they left off.</p>
<p><strong>Sequential awaits</strong> = boil pasta, then WAIT until done, then make sauce, then WAIT until done (4 minutes total). <strong>Parallel</strong> = start pasta AND sauce at the same time, wait for BOTH to finish (2 minutes total). The <code>forEach</code> pitfall is like handing each recipe to a trainee but not waiting for any of them — you walk away while they're still cooking.</p>`,flow:[`<span><strong>Mark as async:</strong> Prefix the function with <code>async</code> — it now always returns a Promise</span>`,`<span><strong>await a Promise:</strong> <code>const val = await somePromise</code> — pauses this function; the resolved value is assigned to val</span>`,`<span><strong>Rejection throws:</strong> A rejected await throws an error — wrap with <code>try/catch</code> to handle it</span>`,`<span><strong>throw rejects:</strong> Throwing (or returning a rejected Promise) from an async function rejects its returned Promise</span>`,`<span><strong>Sequential vs Parallel:</strong> Multiple independent awaits should use <code>await Promise.all([...])</code> — not one after another</span>`,`<span><strong>forEach pitfall:</strong> <code>forEach</code> ignores returned Promises from async callbacks — use <code>for...of</code> or <code>Promise.all + map</code></span>`]},{id:`dom`,title:`DOM`,icon:`🌲`,explain:`<p>The <strong>Document Object Model (DOM)</strong> is a tree-shaped representation of an HTML page that JavaScript can read and modify. The <code>document</code> object is the root. Each HTML element is a <em>node</em> you can select, read, create, modify, or delete entirely from JavaScript.</p>
<p><strong>Selecting:</strong> <code>querySelector(css)</code> — first match or <code>null</code>; <code>querySelectorAll(css)</code> — all matches as a static <code>NodeList</code>; <code>getElementById(id)</code> — fastest single-element lookup. <strong>Content:</strong> <code>textContent</code> (plain text, safe), <code>innerHTML</code> (parses HTML — XSS risk with user data!), <code>innerText</code> (visible text only). <strong>Classes &amp; styles:</strong> <code>classList.add/remove/toggle/contains</code> (prefer over <code>style.*</code> for reusable rules); <code>el.style.propertyName</code> uses camelCase (<code>backgroundColor</code> not <code>background-color</code>).</p>
<p><strong>Creating &amp; inserting:</strong> <code>document.createElement(tag)</code> then <code>parent.append(child)</code> / <code>parent.prepend(child)</code> / <code>parent.insertBefore(new, ref)</code>. <strong>Removing:</strong> <code>el.remove()</code> or <code>parent.removeChild(el)</code>. <strong>Traversal:</strong> <code>el.parentElement</code>, <code>el.children</code>, <code>el.nextElementSibling</code>. A <code>NodeList</code> is not a real Array — use <code>[...list]</code> or <code>Array.from(list)</code> before calling <code>map/filter</code>.</p>`,syntax:`<span class="cmt">// Select</span>
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
el.parentElement;  el.children;  el.nextElementSibling;`,examples:[{label:`Select, Read & Modify`,code:`<span class="cmt">// Select by CSS selector</span>
<span class="kw">const</span> title = document.<span class="fn-name">querySelector</span>(<span class="str">"h1"</span>);
<span class="kw">const</span> btn   = document.<span class="fn-name">querySelector</span>(<span class="str">"#submit"</span>);
<span class="kw">const</span> items = document.<span class="fn-name">querySelectorAll</span>(<span class="str">".item"</span>);

<span class="cmt">// Read & change text</span>
console.<span class="fn-name">log</span>(title.textContent);   <span class="cmt">// read</span>
title.textContent = <span class="str">"New Title"</span>;  <span class="cmt">// write (safe)</span>

<span class="cmt">// Attributes</span>
btn.<span class="fn-name">setAttribute</span>(<span class="str">"disabled"</span>, <span class="str">""</span>);
btn.<span class="fn-name">getAttribute</span>(<span class="str">"id"</span>);       <span class="cmt">// "submit"</span>
btn.<span class="fn-name">removeAttribute</span>(<span class="str">"disabled"</span>);`,out:`reads and modifies DOM nodes`},{label:`Classes & Styles`,code:`<span class="kw">const</span> box = document.<span class="fn-name">querySelector</span>(<span class="str">".box"</span>);

<span class="cmt">// classList — preferred for reusable styles</span>
box.classList.<span class="fn-name">add</span>(<span class="str">"highlight"</span>);
box.classList.<span class="fn-name">remove</span>(<span class="str">"hidden"</span>);
box.classList.<span class="fn-name">toggle</span>(<span class="str">"active"</span>);   <span class="cmt">// add if absent, remove if present</span>
box.classList.<span class="fn-name">contains</span>(<span class="str">"active"</span>);<span class="cmt">// true / false</span>

<span class="cmt">// Inline styles — use camelCase</span>
box.style.backgroundColor = <span class="str">"blue"</span>;
box.style.fontSize = <span class="str">"18px"</span>;`,out:`classList and inline style manipulation`},{label:`Create, Append & Remove`,code:`<span class="cmt">// Create a new element</span>
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
  .<span class="fn-name">forEach</span>(el <span class="op">=></span> el.classList.<span class="fn-name">add</span>(<span class="str">"loaded"</span>));`,out:`createElement, append, remove, NodeList spread`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🗺️</div>
<p>The DOM is like a <strong>city map</strong>. The <code>document</code> is the city itself — every building (HTML element) has an address. <code>querySelector</code> is like a GPS that finds the first building matching a description ("#id" = exact address, ".class" = building type). <code>querySelectorAll</code> returns a list of all matching buildings.</p>
<p>Once you find a building, you can repaint it (<code>style</code>), put a new sign on it (<code>textContent</code>), add a wing (<code>append</code>), or demolish it entirely (<code>remove</code>). <code>classList</code> is like toggling the building's category flags — "landmark", "open", "under renovation" — without repainting the whole structure.</p>`,flow:[`<span><strong>Select:</strong> <code>querySelector(css)</code> finds the first matching element (or <code>null</code>); always check for null before using</span>`,`<span><strong>Read content:</strong> <code>el.textContent</code> (plain text), <code>el.innerHTML</code> (HTML markup), <code>el.value</code> (form inputs)</span>`,`<span><strong>Modify content:</strong> Assign to <code>textContent</code> (safe) or <code>innerHTML</code> (powerful but XSS risk with untrusted input)</span>`,`<span><strong>Classes &amp; styles:</strong> <code>classList.add/remove/toggle</code> for class-based styling; <code>style.camelCaseProp</code> for inline styles</span>`,`<span><strong>Create &amp; insert:</strong> <code>createElement(tag)</code> → set content → <code>parent.append(el)</code> or <code>prepend/insertBefore</code></span>`,`<span><strong>Remove &amp; traverse:</strong> <code>el.remove()</code>; navigate with <code>parentElement</code>, <code>children</code>, <code>nextElementSibling</code></span>`]},{id:`events`,title:`Events`,icon:`⚡`,explain:`<p>JavaScript responds to user actions (clicks, keystrokes, form input) and browser signals (page load, resize) through <strong>events</strong>. You register a handler with <code>addEventListener(type, fn, options)</code> — never assign directly to <code>onclick=fn</code> as that overwrites any existing handler.</p>
<p>Every handler receives an <strong>event object</strong> (<code>e</code>). Key properties: <code>e.target</code> — the element that originally triggered the event; <code>e.currentTarget</code> — the element the listener is attached to; <code>e.type</code> — the event name; <code>e.key</code> — for keyboard events. Key methods: <code>e.preventDefault()</code> — stop the browser default (link navigation, form submit); <code>e.stopPropagation()</code> — stop the event from travelling further.</p>
<p><strong>Bubbling</strong> (default): after firing on the target, the event travels UP the DOM tree — every ancestor's listener also fires. <strong>Capturing</strong> (<code>{ capture: true }</code>): event travels DOWN before reaching the target. <strong>Event delegation</strong> exploits bubbling: attach one listener on a parent and check <code>e.target</code> for the actual source — works for dynamically added children too. Use <code>{ once: true }</code> to auto-remove after first fire. <code>removeEventListener</code> requires the exact same function reference — anonymous functions cannot be removed.</p>`,syntax:`<span class="cmt">// Add listener</span>
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
});`,examples:[{label:`Basic Click & Keyboard Events`,code:`<span class="kw">const</span> btn = document.<span class="fn-name">querySelector</span>(<span class="str">"#btn"</span>);

<span class="cmt">// Click event</span>
btn.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(<span class="str">"Clicked!"</span>, e.target.id);
});

<span class="cmt">// Keyboard event on input</span>
<span class="kw">const</span> inp = document.<span class="fn-name">querySelector</span>(<span class="str">"input"</span>);
inp.<span class="fn-name">addEventListener</span>(<span class="str">"keydown"</span>, (e) <span class="op">=></span> {
  <span class="kw">if</span> (e.key === <span class="str">"Enter"</span>) <span class="fn-name">submitForm</span>();
  <span class="kw">if</span> (e.key === <span class="str">"Escape"</span>) inp.<span class="fn-name">blur</span>();
});`,out:`click and keydown event handlers with e.target and e.key`},{label:`preventDefault & Bubbling`,code:`<span class="cmt">// Stop default form submit (page reload)</span>
form.<span class="fn-name">addEventListener</span>(<span class="str">"submit"</span>, (e) <span class="op">=></span> {
  e.<span class="fn-name">preventDefault</span>();  <span class="cmt">// no reload!</span>
  <span class="fn-name">validateAndSend</span>(e.target);
});

<span class="cmt">// Bubbling: click on button also fires parent div listener</span>
div.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, () <span class="op">=></span> console.<span class="fn-name">log</span>(<span class="str">"div"</span>));
btn.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(<span class="str">"btn"</span>);
  e.<span class="fn-name">stopPropagation</span>(); <span class="cmt">// div handler won't fire</span>
});`,out:`"btn" only (stopPropagation blocks div listener)`},{label:`Event Delegation`,code:`<span class="cmt">// One listener handles clicks on ALL current and future <li></span>
<span class="kw">const</span> ul = document.<span class="fn-name">querySelector</span>(<span class="str">"ul"</span>);

ul.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  <span class="kw">if</span> (!e.target.matches(<span class="str">"li"</span>)) <span class="kw">return</span>; <span class="cmt">// ignore non-li clicks</span>
  e.target.classList.<span class="fn-name">toggle</span>(<span class="str">"done"</span>);
  console.<span class="fn-name">log</span>(<span class="str">"Toggled:"</span>, e.target.textContent);
});

<span class="cmt">// Dynamically added li also gets handled — no extra listeners!</span>
ul.<span class="fn-name">append</span>(Object.<span class="fn-name">assign</span>(document.<span class="fn-name">createElement</span>(<span class="str">"li"</span>),{textContent:<span class="str">"New"</span>}));`,out:`toggles "done" on clicked li, including dynamically added ones`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🔔</div>
<p>Events are like a <strong>fire alarm system</strong>. When a fire starts in Room 214 (the <em>target</em>), the alarm fires in that room first, then travels up — floor alarm, building alarm (that's <strong>bubbling</strong>). <code>stopPropagation()</code> cuts the cable between floors.</p>
<p><strong>Event delegation</strong> is like placing one security guard at the building entrance instead of one per room. The guard watches who triggered the alarm (<code>e.target</code>) and decides how to respond — and they automatically cover any new rooms added later, because everything still bubbles to the entrance.</p>`,flow:[`<span><strong>Register:</strong> <code>el.addEventListener("click", handler)</code> — always use this, never <code>onclick=fn</code> which overwrites existing listeners</span>`,`<span><strong>User action:</strong> User clicks, types, submits — browser creates an event object and marks a <em>target</em> element</span>`,`<span><strong>Capture phase:</strong> If <code>{ capture: true }</code>, the event travels DOWN from document to target, firing capturing listeners on the way</span>`,`<span><strong>Target phase:</strong> Listeners directly on the target element fire</span>`,`<span><strong>Bubble phase:</strong> Event travels UP the DOM — every ancestor's listener fires unless <code>stopPropagation()</code> is called</span>`,`<span><strong>Defaults &amp; cleanup:</strong> <code>preventDefault()</code> suppresses browser default; <code>removeEventListener</code> requires the exact same function reference stored in a variable</span>`]},{id:`errorhandling`,title:`Error Handling`,icon:`🛡️`,explain:`<p><strong>Error handling</strong> lets your program recover gracefully instead of crashing. Wrap risky code in a <code>try</code> block; if it throws, execution jumps to <code>catch</code>; <code>finally</code> always runs — whether or not an error occurred — making it perfect for cleanup (closing connections, hiding spinners).</p>
<p>JavaScript has several built-in error types: <code>TypeError</code> (wrong type — e.g. calling null as a function), <code>ReferenceError</code> (undefined variable), <code>RangeError</code> (value out of allowed range), <code>SyntaxError</code> (bad syntax — caught at parse time, not runtime). Every <code>Error</code> object has <code>.name</code>, <code>.message</code>, and <code>.stack</code> properties. You can <code>throw</code> any value, but throwing an <code>Error</code> object is best practice because it captures a stack trace.</p>
<p><strong>Custom errors:</strong> extend <code>Error</code> with a class, call <code>super(message)</code>, and set <code>this.name</code> so <code>instanceof</code> checks work. <strong>Re-throwing:</strong> in a catch block you can inspect the error and re-throw it if it is not the type you handle — this lets specific errors bubble up naturally. For <code>async/await</code>, wrap <code>await</code> calls in <code>try/catch</code> to catch rejected Promises.</p>`,syntax:`<span class="cmt">// Basic structure</span>
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
}`,examples:[{label:`try / catch / finally`,code:`<span class="kw">function</span> <span class="fn-name">divide</span>(a, b) {
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
<span class="fn-name">divide</span>(<span class="num">10</span>, <span class="num">0</span>); <span class="cmt">// logs error msg, then "divide() finished"</span>`,out:`"RangeError: Division by zero" then "divide() finished"`},{label:`Custom Error Class`,code:`<span class="kw">class</span> <span class="fn-name">ValidationError</span> <span class="kw">extends</span> Error {
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
}`,out:`"age" "Age cannot be negative"`},{label:`Async Error Handling`,code:`<span class="kw">async function</span> <span class="fn-name">fetchUser</span>(id) {
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
}`,out:`logs error if fetch fails, always hides spinner`}],svgHTML:`<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎪</div>
<p>Error handling is like a <strong>circus safety net</strong>. The <code>try</code> block is the acrobat's performance — you attempt something risky. The <code>catch</code> block is the net — if the performer falls (an error is thrown), the net catches them and the show continues safely instead of ending in disaster.</p>
<p>The <code>finally</code> block is the <strong>cleanup crew</strong> — they sweep the stage whether the performance was a triumph or a tumble. Custom errors are like specific alarm types: a <em>FireAlarm</em> is handled differently from a <em>MedicalAlarm</em> — <code>instanceof</code> lets you tell them apart and respond appropriately, re-throwing alarms you're not equipped to handle.</p>`,flow:[`<span><strong>try:</strong> wrap risky operations — parsing JSON, reading properties, network requests, anything that can throw</span>`,`<span><strong>throw:</strong> execution jumps immediately to catch; unexecuted lines in try are skipped</span>`,`<span><strong>catch(e):</strong> receives the Error object — inspect <code>e.name</code>, <code>e.message</code>, <code>e.stack</code>; use <code>instanceof</code> to handle specific error types</span>`,`<span><strong>Re-throw:</strong> if catch receives an error it cannot handle, <code>throw e</code> again so it bubbles to a caller that can</span>`,`<span><strong>finally:</strong> runs regardless of success or failure — close connections, hide spinners, release locks</span>`,`<span><strong>Async:</strong> wrap <code>await</code> in <code>try/catch</code> to catch rejected Promises; <code>finally</code> works the same way in async functions</span>`]}],o=[{id:`setup`,title:`Installation & Setup`,icon:`🔧`,explain:`
<p><strong>Playwright</strong> is a modern, cross-browser end-to-end testing framework from Microsoft. A single API drives Chromium, Firefox, and WebKit — the engines powering Chrome/Edge, Firefox, and Safari. It ships with its own test runner, assertion library, and browser management so you don't need to wire up third-party tools.</p>
<p>The easiest entry point is <code>npm init playwright@latest</code>, an interactive wizard that asks whether you want TypeScript or JavaScript, names your test directory, generates <code>playwright.config.ts</code>, writes a sample test, optionally scaffolds a GitHub Actions workflow, and then downloads the three browser binaries automatically.</p>
<p>Day-to-day you interact with Playwright through its CLI: <code>npx playwright test</code> runs all tests, <code>--headed</code> shows the browser window, <code>--ui</code> opens a visual dashboard with time-travel debugging, and <code>--debug</code> launches Playwright Inspector for step-by-step execution. The HTML reporter produces rich, self-contained reports with screenshots, video, and traces.</p>`,syntax:`// ── Bootstrap ────────────────────────────────────────
npm init playwright@latest          // interactive scaffold
npx playwright install              // download all browsers
npx playwright install chromium     // only Chromium
npx playwright install --with-deps  // + OS libs (Linux CI)

// ── Run tests ─────────────────────────────────────────
npx playwright test                  // all tests
npx playwright test login.spec.ts    // single file
npx playwright test --headed         // visible browser
npx playwright test --ui             // visual UI / time-travel
npx playwright test --debug          // step debugger
npx playwright test --grep "login"   // title filter
npx playwright test --project=chromium
npx playwright test --workers=4      // parallel worker count

// ── Reporting ─────────────────────────────────────────
npx playwright test --reporter=html
npx playwright show-report           // serve last HTML report

// ── Info ──────────────────────────────────────────────
npx playwright --version`,examples:[{label:`Minimal playwright.config.ts`,code:`import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});`,out:`Three-browser config with base URL, HTML report, and CI retries`},{label:`package.json scripts`,code:`{
  "scripts": {
    "test":        "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:ui":     "npx playwright test --ui",
    "test:debug":  "npx playwright test --debug",
    "report":      "npx playwright show-report"
  },
  "devDependencies": {
    "@playwright/test": "^1.48.0"
  }
}`,out:`Convenient scripts for every common Playwright workflow`},{label:`GitHub Actions CI workflow`,code:`name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/`,out:`CI workflow that installs browsers, runs tests, uploads HTML report on failure`}],svgHTML:`<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<defs><marker id="ar1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#f5a623"/></marker></defs>
<rect width="420" height="200" fill="#1e1e2e" rx="8"/>
<rect x="12" y="16" width="90" height="38" fill="#2a2a3d" rx="6"/>
<text x="57" y="32" fill="#f5a623" font-size="10" font-weight="bold" text-anchor="middle">npm init</text>
<text x="57" y="45" fill="#a0a0b0" font-size="9" text-anchor="middle">playwright@latest</text>
<line x1="102" y1="35" x2="122" y2="35" stroke="#f5a623" stroke-width="1.5" marker-end="url(#ar1)"/>
<rect x="122" y="16" width="96" height="38" fill="#2a2a3d" rx="6"/>
<text x="170" y="32" fill="#f5a623" font-size="10" font-weight="bold" text-anchor="middle">Config Wizard</text>
<text x="170" y="45" fill="#a0a0b0" font-size="9" text-anchor="middle">TS · testDir · CI</text>
<line x1="218" y1="35" x2="238" y2="35" stroke="#f5a623" stroke-width="1.5" marker-end="url(#ar1)"/>
<rect x="238" y="16" width="120" height="38" fill="#2a2a3d" rx="6"/>
<text x="298" y="32" fill="#f5a623" font-size="10" font-weight="bold" text-anchor="middle">playwright.config.ts</text>
<text x="298" y="45" fill="#a0a0b0" font-size="9" text-anchor="middle">+ sample test created</text>
<line x1="298" y1="54" x2="298" y2="74" stroke="#f5a623" stroke-width="1.5" marker-end="url(#ar1)"/>
<rect x="208" y="74" width="180" height="38" fill="#1a2a1a" rx="6" stroke="#4caf82" stroke-width="0.8"/>
<text x="298" y="90" fill="#4caf82" font-size="10" font-weight="bold" text-anchor="middle">Browsers Downloaded</text>
<text x="298" y="103" fill="#a0a0b0" font-size="9" text-anchor="middle">Chromium · Firefox · WebKit</text>
<line x1="208" y1="93" x2="180" y2="93" stroke="#f5a623" stroke-width="1.5" marker-end="url(#ar1)"/>
<rect x="50" y="74" width="130" height="38" fill="#2a2a3d" rx="6"/>
<text x="115" y="90" fill="#4caf82" font-size="10" font-weight="bold" text-anchor="middle">npx playwright test</text>
<text x="115" y="103" fill="#a0a0b0" font-size="9" text-anchor="middle">Run · Debug · UI · Report</text>
<rect x="12" y="138" width="116" height="28" fill="#1a1a2a" rx="4" stroke="#6ea6f5" stroke-width="0.6"/>
<text x="70" y="155" fill="#6ea6f5" font-size="9" text-anchor="middle">--headed · --debug · --ui</text>
<rect x="136" y="138" width="116" height="28" fill="#2a1a1a" rx="4" stroke="#f5a623" stroke-width="0.6"/>
<text x="194" y="155" fill="#f5a623" font-size="9" text-anchor="middle">--project · --workers · --grep</text>
<rect x="260" y="138" width="116" height="28" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.6"/>
<text x="318" y="155" fill="#4caf82" font-size="9" text-anchor="middle">--reporter=html · show-report</text>
<text x="210" y="188" fill="#44445a" font-size="9" text-anchor="middle">Playwright Setup &amp; CLI Flow</text>
</svg>`,analogy:`<p>Setting up Playwright is like <strong>equipping a professional testing lab</strong>. The <code>npm init playwright@latest</code> command is the lab builder — it installs the equipment (browsers), draws the floor plan (config file), writes the first experiment protocol (sample test), and even configures the automated lab schedule (GitHub Actions).</p>
<p>Once the lab is ready, <code>npx playwright test</code> is the scientist running experiments. You can run in the dark (headless), observe live (--headed), pause and inspect (--debug), or ask the lab manager for a full visual dashboard (--ui). The HTML report is your printed experiment journal — shareable and self-contained.</p>`,flow:[`Run <code>npm init playwright@latest</code> — the wizard scaffolds the entire project`,`Answer prompts: TypeScript or JavaScript, test directory name, add GitHub Actions workflow?`,`Playwright installs <code>@playwright/test</code> and downloads Chromium, Firefox, WebKit binaries`,`<code>playwright.config.ts</code> is created with multi-browser projects, timeout, retries, reporter`,`A sample <code>example.spec.ts</code> is placed in your test directory — run it immediately`,`Use <code>npx playwright test --ui</code> for interactive development, <code>--reporter=html</code> + <code>show-report</code> for CI results`]},{id:`firsttest`,title:`Writing Your First Test`,icon:`✍️`,explain:`
<p>A Playwright test file is a TypeScript (or JavaScript) module. Everything starts with <code>import { test, expect } from '@playwright/test'</code>. Individual tests are defined with <code>test('description', async ({ page }) => { … })</code>, where <strong>page</strong> is a built-in <em>fixture</em> — Playwright creates the browser page before your test runs and closes it automatically afterwards. You never instantiate or tear down the page yourself.</p>
<p>Every browser operation is asynchronous, so <strong>every action and assertion must be prefixed with <code>await</code></strong>. Omitting <code>await</code> is the single biggest source of flaky Playwright tests — the test moves on before the browser has done anything. The callback is marked <code>async</code> so you can write sequential, readable code instead of nested callbacks.</p>
<p>Use <code>test.describe('Group', () => { … })</code> to group related tests; this scopes <code>beforeEach</code>/<code>afterEach</code> hooks and improves report readability. During development, <code>test.only()</code> isolates a single test in the file, <code>test.skip()</code> excludes one, and <code>test.fixme()</code> marks a known failure. Add tags like <code>@smoke</code> in the test title to filter with <code>--grep "@smoke"</code> at the CLI.</p>`,syntax:`import { test, expect } from '@playwright/test';

// ── Basic test ────────────────────────────────────────
test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});

// ── Grouped tests ─────────────────────────────────────
test.describe('Login', () => {
  test('shows login form', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading')).toBeVisible();
  });

  test('rejects wrong password @smoke', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Password').fill('wrong');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});

// ── Development modifiers ─────────────────────────────
test.only('focus just this test', async ({ page }) => { … });
test.skip('not ready yet',        async ({ page }) => { … });
test.fixme('known failing bug',   async ({ page }) => { … });

// ── Per-test timeout override ─────────────────────────
test('slow upload', { timeout: 60_000 }, async ({ page }) => { … });

// ── Annotation (links test to an issue) ──────────────
test('tracked bug', {
  annotation: { type: 'issue', description: 'https://github.com/org/repo/issues/42' },
}, async ({ page }) => { … });`,examples:[{label:`First test: navigate and assert title`,code:`import { test, expect } from '@playwright/test';

test('Playwright homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Auto-retrying title assertion
  await expect(page).toHaveTitle(/Playwright/);
});`,out:`PASSED — title matches regex /Playwright/`},{label:`test.describe with beforeEach hook`,code:`import { test, expect } from '@playwright/test';

test.describe('Product page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products/1');
  });

  test('shows product name', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('add to cart button is enabled', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeEnabled();
  });
});`,out:`Both tests run; beforeEach navigates to /products/1 before each`},{label:`test.only and test.skip in development`,code:`import { test, expect } from '@playwright/test';

// Only this test runs in this file during dev
test.only('debug checkout flow', async ({ page }) => {
  await page.goto('/checkout');
  await expect(page.getByText('Order summary')).toBeVisible();
});

// These are skipped while test.only is present
test.skip('payment step', async ({ page }) => {
  // work in progress
});

test('confirmation email', async ({ page }) => {
  // also skipped because of test.only above
});`,out:`Only the .only test runs; 2 skipped (1 explicit, 1 implicit)`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:monospace;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="14" y="26" fill="#555570" font-size="10" font-family="sans-serif" font-weight="bold">TEST FILE ANATOMY</text>
<rect x="10" y="36" width="400" height="22" fill="#2a2a3d" rx="4"/>
<text x="18" y="51" fill="#6ea6f5" font-size="11">import</text>
<text x="60" y="51" fill="#e0e0e0" font-size="11">&#123; test, expect &#125;</text>
<text x="180" y="51" fill="#6ea6f5" font-size="11">from</text>
<text x="210" y="51" fill="#f5a623" font-size="11">'@playwright/test'</text>
<rect x="10" y="64" width="400" height="22" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.6"/>
<text x="18" y="79" fill="#4caf82" font-size="11">test</text>
<text x="42" y="79" fill="#e0e0e0" font-size="11">('title',</text>
<text x="102" y="79" fill="#6ea6f5" font-size="11">async</text>
<text x="140" y="79" fill="#e0e0e0" font-size="11">(&#123;</text>
<text x="157" y="79" fill="#f5a623" font-size="11">page</text>
<text x="187" y="79" fill="#e0e0e0" font-size="11">&#125;) =&gt; &#123;</text>
<rect x="10" y="92" width="400" height="22" fill="#2a2a3d" rx="4"/>
<text x="28" y="107" fill="#6ea6f5" font-size="11">await</text>
<text x="68" y="107" fill="#e0e0e0" font-size="11">page.goto('/') </text>
<text x="180" y="107" fill="#555570" font-size="10">← async action</text>
<rect x="10" y="120" width="400" height="22" fill="#2a2a3d" rx="4"/>
<text x="28" y="135" fill="#6ea6f5" font-size="11">await</text>
<text x="68" y="135" fill="#e0e0e0" font-size="11">expect(page).toHaveTitle(/…/)</text>
<text x="310" y="135" fill="#555570" font-size="10">← assertion</text>
<rect x="10" y="148" width="400" height="22" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.6"/>
<text x="18" y="163" fill="#e0e0e0" font-size="11">&#125;)</text>
<text x="50" y="163" fill="#555570" font-size="10" font-family="sans-serif">  ← Playwright closes page automatically</text>
<rect x="10" y="178" width="92" height="22" fill="#2a1a2a" rx="4" stroke="#c084fc" stroke-width="0.6"/>
<text x="56" y="191" fill="#c084fc" font-size="9" text-anchor="middle">test.only()</text>
<rect x="110" y="178" width="92" height="22" fill="#2a1a1a" rx="4" stroke="#f87171" stroke-width="0.6"/>
<text x="156" y="191" fill="#f87171" font-size="9" text-anchor="middle">test.skip()</text>
<rect x="210" y="178" width="92" height="22" fill="#2a1a0a" rx="4" stroke="#fb923c" stroke-width="0.6"/>
<text x="256" y="191" fill="#fb923c" font-size="9" text-anchor="middle">test.fixme()</text>
<rect x="310" y="178" width="100" height="22" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.6"/>
<text x="360" y="191" fill="#4caf82" font-size="9" text-anchor="middle">test.describe()</text>
</svg>`,analogy:`<p>Writing a Playwright test is like writing a <strong>recipe card</strong>. The recipe title is <code>test('makes chocolate cake', …)</code> — it describes the goal in plain English. The chef arriving at the kitchen is <code>async ({ page })</code> — Playwright hands you a fully-equipped kitchen (browser page) at the start and cleans it up when you're done. Each <code>await</code> is a mandatory step you must finish before continuing; you cannot frost the cake before it comes out of the oven.</p>
<p><code>test.describe</code> groups your recipes into a chapter. <code>test.only</code> marks the one recipe you're perfecting today — the rest sit on the shelf. <code>test.fixme</code> is a sticky note that says "this recipe is broken and we know it" so the book doesn't fall apart just because one dish isn't right yet.</p>`,flow:[`Import <code>test</code> and <code>expect</code> from <code>'@playwright/test'</code> at the top of every spec file`,`Define a test with <code>test('descriptive title', async ({ page }) => { … })</code>`,`Navigate with <code>await page.goto('/path')</code> — Playwright's baseURL is prepended automatically`,`Interact: <code>await page.getByRole('button').click()</code>, <code>await page.getByLabel('Email').fill('…')</code>`,`Assert with <code>await expect(locator).toBeVisible()</code> — assertions auto-retry until they pass or time out`,`Group related tests in <code>test.describe()</code> and share setup with <code>test.beforeEach()</code>`,`Use <code>test.only</code> while developing, <code>test.skip</code> / <code>test.fixme</code> for known issues — remove before merge`]},{id:`browsers`,title:`Browsers & Contexts`,icon:`🌐`,explain:`
<p>Playwright's object model has three levels: <strong>Browser → BrowserContext → Page</strong>. The <strong>Browser</strong> is the running browser process (Chromium, Firefox, or WebKit). A <strong>BrowserContext</strong> is an isolated session inside that browser — each context has its own cookies, localStorage, cache, and authentication state, like a private/incognito window. A <strong>Page</strong> is a single tab within a context.</p>
<p>In normal tests you receive the <code>page</code> fixture automatically — Playwright has already created a context and a page for you using the project's <code>use</code> settings. You create contexts explicitly with <code>browser.newContext(options)</code> when you need <strong>custom configuration</strong>: a specific viewport, locale, timezone, geolocation, granted permissions, pre-loaded auth state via <code>storageState</code>, or video recording.</p>
<p>The killer use-case for multiple contexts is <strong>multi-user testing</strong>. Because each context is completely isolated, Context A's cookies and localStorage never leak into Context B. Two users can interact with the same page in the same test without any interference. When a context is closed, all its pages close automatically — no manual cleanup needed.</p>`,syntax:`import { browser } from '@playwright/test'; // available as a fixture

// ── Create a context with custom options ──────────────────
const context = await browser.newContext({
  viewport:         { width: 1280, height: 720 },
  locale:           'en-US',
  timezoneId:       'America/New_York',
  geolocation:      { latitude: 40.71, longitude: -74.01 },
  permissions:      ['geolocation', 'notifications'],
  storageState:     'auth.json',       // pre-loads saved cookies/localStorage
  userAgent:        'Custom/1.0',
  ignoreHTTPSErrors: true,
  colorScheme:      'dark',
  recordVideo:      { dir: 'videos/' },
  extraHTTPHeaders: { 'X-Api-Key': 'secret' },
});

// ── Create a page inside the context ─────────────────────
const page = await context.newPage();
await page.goto('https://example.com');

// ── Multi-user: two isolated contexts ────────────────────
const adminCtx = await browser.newContext({ storageState: 'admin.json' });
const guestCtx = await browser.newContext();            // no auth
const adminPage = await adminCtx.newPage();
const guestPage = await guestCtx.newPage();

// ── Save current auth state for reuse ────────────────────
await context.storageState({ path: 'auth.json' });

// ── Cleanup ───────────────────────────────────────────────
await context.close();   // closes all pages within it`,examples:[{label:`Custom viewport and locale context`,code:`import { test, expect } from '@playwright/test';

test('French locale date format', async ({ browser }) => {
  const context = await browser.newContext({
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  await page.goto('/dashboard');
  // Date displayed in French locale format: "12 juillet 2026"
  await expect(page.getByTestId('date-display')).toHaveText(/juillet/);

  await context.close();
});`,out:`Context uses French locale; date element shows "juillet" (July in French)`},{label:`Two-user collaboration test`,code:`import { test, expect } from '@playwright/test';

test('admin can see message sent by guest', async ({ browser }) => {
  // Isolated session per user
  const adminCtx = await browser.newContext({ storageState: 'admin.json' });
  const guestCtx = await browser.newContext({ storageState: 'guest.json' });

  const adminPage = await adminCtx.newPage();
  const guestPage = await guestCtx.newPage();

  await guestPage.goto('/chat');
  await guestPage.getByLabel('Message').fill('Hello admin!');
  await guestPage.getByRole('button', { name: 'Send' }).click();

  await adminPage.goto('/chat');
  await expect(adminPage.getByText('Hello admin!')).toBeVisible();

  await adminCtx.close();
  await guestCtx.close();
});`,out:`Two isolated contexts; guest message visible to admin without state bleed`},{label:`Geolocation permission grant`,code:`import { test, expect } from '@playwright/test';

test('shows correct city based on location', async ({ browser }) => {
  const context = await browser.newContext({
    geolocation: { latitude: 48.8566, longitude: 2.3522 }, // Paris
    permissions: ['geolocation'],  // must grant before geolocation works
  });
  const page = await context.newPage();

  await page.goto('/find-store');
  await page.getByRole('button', { name: 'Use my location' }).click();

  await expect(page.getByTestId('nearest-store')).toContainText('Paris');
  await context.close();
});`,out:`Browser reports Paris coordinates; nearest store shows Paris location`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="22" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">BROWSER → CONTEXT → PAGE HIERARCHY</text>
<rect x="130" y="30" width="160" height="34" fill="#2a1a3a" rx="6" stroke="#c084fc" stroke-width="1"/>
<text x="210" y="48" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🌐 Browser</text>
<text x="210" y="60" fill="#a0a0b0" font-size="9" text-anchor="middle">Chromium · Firefox · WebKit</text>
<line x1="120" y1="76" x2="120" y2="90" stroke="#f5a623" stroke-width="1.2"/>
<line x1="300" y1="76" x2="300" y2="90" stroke="#f5a623" stroke-width="1.2"/>
<line x1="120" y1="90" x2="300" y2="90" stroke="#f5a623" stroke-width="1.2"/>
<line x1="120" y1="90" x2="120" y2="100" stroke="#f5a623" stroke-width="1.2"/>
<line x1="300" y1="90" x2="300" y2="100" stroke="#f5a623" stroke-width="1.2"/>
<rect x="30" y="100" width="170" height="40" fill="#1a2a3a" rx="6" stroke="#6ea6f5" stroke-width="1"/>
<text x="115" y="116" fill="#6ea6f5" font-size="10" font-weight="bold" text-anchor="middle">Context A (isolated)</text>
<text x="115" y="129" fill="#a0a0b0" font-size="8.5" text-anchor="middle">cookies · auth · localStorage</text>
<rect x="220" y="100" width="170" height="40" fill="#1a2a3a" rx="6" stroke="#6ea6f5" stroke-width="1"/>
<text x="305" y="116" fill="#6ea6f5" font-size="10" font-weight="bold" text-anchor="middle">Context B (isolated)</text>
<text x="305" y="129" fill="#a0a0b0" font-size="8.5" text-anchor="middle">cookies · auth · localStorage</text>
<line x1="70" y1="140" x2="70" y2="156" stroke="#4caf82" stroke-width="1.2"/>
<line x1="115" y1="140" x2="115" y2="156" stroke="#4caf82" stroke-width="1.2"/>
<line x1="160" y1="140" x2="160" y2="156" stroke="#4caf82" stroke-width="1.2"/>
<rect x="30" y="156" width="80" height="28" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="70" y="174" fill="#4caf82" font-size="9" text-anchor="middle">📄 Page 1</text>
<rect x="76" y="156" width="80" height="28" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="116" y="174" fill="#4caf82" font-size="9" text-anchor="middle">📄 Page 2</text>
<rect x="122" y="156" width="80" height="28" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="162" y="174" fill="#4caf82" font-size="9" text-anchor="middle">📄 Page 3</text>
<line x1="305" y1="140" x2="305" y2="156" stroke="#4caf82" stroke-width="1.2"/>
<rect x="225" y="156" width="160" height="28" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="305" y="174" fill="#4caf82" font-size="9" text-anchor="middle">📄 Page 4 (separate user)</text>
<text x="210" y="200" fill="#44445a" font-size="8.5" text-anchor="middle">Context isolation: A's cookies never leak into B</text>
</svg>`,analogy:`<p>A Browser is like a <strong>hotel building</strong>. Each BrowserContext is a <strong>guest room</strong> — it has its own key card, minibar, and personal safe (cookies, localStorage, authentication). Different guests (contexts) cannot access each other's rooms even though they share the same building. A Page is a <strong>window</strong> in that room — a room can have multiple windows open, and they all belong to the same guest.</p>
<p>The <code>storageState</code> option is the <strong>pre-packed suitcase</strong>: you pack it once (save the logged-in session to a file) and every new guest arrives already unpacked. Multi-user testing is simply <em>checking two guests into two separate rooms simultaneously</em> — they can watch each other through the windows (interact via the page) but their personal belongings stay separate.</p>`,flow:[`Playwright launches a <strong>Browser</strong> (Chromium, Firefox, or WebKit) from the project config`,`A <strong>BrowserContext</strong> is created — isolated with its own cookies, localStorage, and auth`,`The <code>page</code> fixture hands you a <strong>Page</strong> inside that context automatically`,`Call <code>browser.newContext(options)</code> when you need custom viewport, locale, geolocation, or permissions`,`Create additional pages in the context with <code>context.newPage()</code>`,`For multi-user tests, create separate contexts — each with its own <code>storageState</code>`,`Call <code>context.close()</code> to tear down; all pages inside close automatically`]},{id:`navigation`,title:`Page & Navigation`,icon:`🧭`,explain:`
<p><code>page.goto(url, options)</code> is the primary navigation method. It accepts a full URL or a path when <code>baseURL</code> is set in the config. By default it waits for the <strong>load</strong> event — all resources (scripts, images, stylesheets) have loaded. Control this with the <code>waitUntil</code> option: <code>'domcontentloaded'</code> (HTML parsed, no waiting for resources), <code>'networkidle'</code> (no network activity for 500 ms), or <code>'commit'</code> (first byte received — earliest possible).</p>
<p>After clicking a link or submitting a form that triggers navigation, use <code>await page.waitForURL('/target')</code> to assert the destination URL, or <code>await page.waitForLoadState('networkidle')</code> to wait for the page to fully settle. Note that <code>page.url()</code> is <strong>synchronous</strong> (returns the current URL string immediately), while <code>page.title()</code> is <strong>async</strong> and must be awaited.</p>
<p>For assertions, always prefer <code>await expect(page).toHaveURL('/dashboard')</code> and <code>await expect(page).toHaveTitle(/Home/)</code> over calling <code>page.url()</code> and comparing manually. The <code>expect</code> versions <strong>auto-retry</strong> until the condition is met or the timeout expires — making them resilient to redirects and async navigation.</p>`,syntax:`// ── Navigate to a URL ────────────────────────────────────────
await page.goto('https://example.com');
await page.goto('/login');                          // baseURL prepended
await page.goto('/page', { waitUntil: 'domcontentloaded' }); // faster
await page.goto('/spa',  { waitUntil: 'networkidle' });
await page.goto('/slow', { timeout: 60_000 });      // per-call timeout

// ── History ───────────────────────────────────────────────────
await page.goBack();
await page.goForward();
await page.reload();
await page.reload({ waitUntil: 'networkidle' });

// ── Wait for navigation to complete ──────────────────────────
await page.waitForURL('/dashboard');                // exact string
await page.waitForURL(//profile/d+/);            // regex pattern
await page.waitForURL('**/checkout**');             // glob pattern
await page.waitForLoadState('load');                // default
await page.waitForLoadState('domcontentloaded');
await page.waitForLoadState('networkidle');

// ── Read current state ────────────────────────────────────────
const url   = page.url();                           // ← synchronous
const title = await page.title();                   // ← async Promise

// ── Assertions (auto-retry) ───────────────────────────────────
await expect(page).toHaveURL('/dashboard');
await expect(page).toHaveURL(//user/d+/);
await expect(page).toHaveTitle('My App — Home');
await expect(page).toHaveTitle(/Dashboard/);`,examples:[{label:`Navigate and assert URL + title`,code:`import { test, expect } from '@playwright/test';

test('login redirects to dashboard', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('secret');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Auto-retries until the redirect completes
  await expect(page).toHaveURL('/dashboard');
  await expect(page).toHaveTitle(/Dashboard/);
});`,out:`PASSED — URL and title match after redirect from /login to /dashboard`},{label:`waitUntil options comparison`,code:`import { test } from '@playwright/test';

test('waitUntil strategies', async ({ page }) => {
  // Fastest: HTML parsed, no external resources needed
  await page.goto('/static-page', { waitUntil: 'domcontentloaded' });

  // Default: all JS/CSS/images loaded
  await page.goto('/regular-page', { waitUntil: 'load' });

  // Thorough: wait for no pending network requests
  await page.goto('/data-heavy-page', { waitUntil: 'networkidle' });

  // After clicking something that triggers navigation
  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');
  await page.waitForLoadState('networkidle');
});`,out:`Each strategy waits for a different stage of the page lifecycle`},{label:`Browser history navigation`,code:`import { test, expect } from '@playwright/test';

test('back and forward navigation', async ({ page }) => {
  await page.goto('/home');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL('/about');

  // Go back in history
  await page.goBack();
  await expect(page).toHaveURL('/home');

  // Go forward again
  await page.goForward();
  await expect(page).toHaveURL('/about');

  // Reload and check state persists
  await page.reload();
  await expect(page).toHaveURL('/about');
});`,out:`PASSED — back, forward, and reload all navigate correctly`}],svgHTML:`<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<defs><marker id="ar4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#f5a623"/></marker></defs>
<rect width="420" height="200" fill="#1e1e2e" rx="8"/>
<text x="210" y="20" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">PAGE LOAD STATE TIMELINE</text>
<line x1="20" y1="50" x2="400" y2="50" stroke="#333355" stroke-width="2"/>
<circle cx="60"  cy="50" r="6" fill="#f5a623"/>
<circle cx="160" cy="50" r="6" fill="#6ea6f5"/>
<circle cx="260" cy="50" r="6" fill="#4caf82"/>
<circle cx="360" cy="50" r="6" fill="#c084fc"/>
<text x="60"  y="38" fill="#f5a623" font-size="9" text-anchor="middle">commit</text>
<text x="160" y="38" fill="#6ea6f5" font-size="9" text-anchor="middle">DOMContentLoaded</text>
<text x="260" y="38" fill="#4caf82" font-size="9" text-anchor="middle">load</text>
<text x="360" y="38" fill="#c084fc" font-size="9" text-anchor="middle">networkidle</text>
<text x="60"  y="68" fill="#555570" font-size="8" text-anchor="middle">1st byte</text>
<text x="160" y="68" fill="#555570" font-size="8" text-anchor="middle">HTML parsed</text>
<text x="260" y="68" fill="#555570" font-size="8" text-anchor="middle">all resources</text>
<text x="360" y="68" fill="#555570" font-size="8" text-anchor="middle">no requests 500ms</text>
<rect x="10"  y="90" width="112" height="28" fill="#2a2a00" rx="4" stroke="#f5a623" stroke-width="0.8"/>
<text x="66"  y="104" fill="#f5a623" font-size="9" text-anchor="middle">page.goto(url)</text>
<text x="66"  y="113" fill="#888" font-size="8" text-anchor="middle">default: load</text>
<rect x="130" y="90" width="120" height="28" fill="#001a2a" rx="4" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="190" y="104" fill="#6ea6f5" font-size="9" text-anchor="middle">waitForLoadState()</text>
<text x="190" y="113" fill="#888" font-size="8" text-anchor="middle">explicit wait</text>
<rect x="260" y="90" width="148" height="28" fill="#0a2a0a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="334" y="104" fill="#4caf82" font-size="9" text-anchor="middle">expect(page).toHaveURL()</text>
<text x="334" y="113" fill="#888" font-size="8" text-anchor="middle">auto-retrying assertion</text>
<rect x="10"  y="140" width="90" height="26" fill="#2a2a3d" rx="4"/>
<text x="55"  y="153" fill="#e0e0e0" font-size="9" text-anchor="middle">page.goBack()</text>
<text x="55"  y="162" fill="#555570" font-size="8" text-anchor="middle">history -1</text>
<rect x="108" y="140" width="98" height="26" fill="#2a2a3d" rx="4"/>
<text x="157" y="153" fill="#e0e0e0" font-size="9" text-anchor="middle">page.goForward()</text>
<text x="157" y="162" fill="#555570" font-size="8" text-anchor="middle">history +1</text>
<rect x="214" y="140" width="82" height="26" fill="#2a2a3d" rx="4"/>
<text x="255" y="153" fill="#e0e0e0" font-size="9" text-anchor="middle">page.reload()</text>
<text x="255" y="162" fill="#555570" font-size="8" text-anchor="middle">refresh</text>
<rect x="304" y="140" width="104" height="26" fill="#2a2a3d" rx="4"/>
<text x="356" y="153" fill="#e0e0e0" font-size="9" text-anchor="middle">waitForURL(pattern)</text>
<text x="356" y="162" fill="#555570" font-size="8" text-anchor="middle">string/regex/glob</text>
<text x="210" y="192" fill="#44445a" font-size="8.5" text-anchor="middle">page.url() is sync · page.title() is async</text>
</svg>`,analogy:`<p><code>page.goto()</code> is like telling your <strong>GPS a destination</strong> — you give it the address and wait until you arrive. The <code>waitUntil</code> option decides what "arrived" means: <code>'commit'</code> is turning onto the street, <code>'domcontentloaded'</code> is parking the car, <code>'load'</code> is walking inside, and <code>'networkidle'</code> is sitting down and everything going quiet.</p>
<p><code>page.goBack()</code> is the browser back button — same as a physical GPS recalculating to the previous stop. <code>expect(page).toHaveURL()</code> is checking the street sign after you park — and if you're still pulling into the space it <em>waits</em> for you to fully stop before deciding you're in the wrong spot.</p>`,flow:[`Call <code>await page.goto(url)</code> — waits for <code>load</code> event by default`,`Use <code>waitUntil: 'domcontentloaded'</code> for SPAs; <code>'networkidle'</code> for data-heavy pages`,`After clicks that trigger navigation, call <code>await page.waitForURL('/target')</code>`,`Assert the URL with <code>await expect(page).toHaveURL('…')</code> — auto-retries through redirects`,`Assert the title with <code>await expect(page).toHaveTitle(/…/)</code> — accepts string or regex`,`Use <code>page.goBack()</code>, <code>page.goForward()</code>, <code>page.reload()</code> for history navigation`,`Note: <code>page.url()</code> is <strong>synchronous</strong>; <code>page.title()</code> returns a Promise`]},{id:`locators`,title:`Locators & Selectors`,icon:`🎯`,explain:`
<p>Playwright's <strong>locators</strong> are the recommended way to find DOM elements. Unlike raw CSS/XPath selectors, locators are <em>lazy</em> — they don't search the DOM until an action or assertion is performed — and they <em>auto-wait</em> until the element is visible, attached, and stable before interacting. This auto-waiting behaviour eliminates most "element not found" flakiness without requiring manual waits.</p>
<p>Choose locators in this priority order: <code>getByRole()</code> (closest to how ARIA and screen readers see the page) → <code>getByLabel()</code> (form inputs by their label) → <code>getByPlaceholder()</code> (unlabelled inputs) → <code>getByText()</code> (visible text) → <code>getByAltText()</code> (images) → <code>getByTitle()</code> (tooltip titles) → <code>getByTestId()</code> (explicit <code>data-testid</code> attributes) → CSS / XPath as a last resort. Higher-priority strategies are more resilient to style and layout refactoring.</p>
<p>Locators can be <strong>chained</strong> to scope a search within a parent (<code>page.locator('.card').getByRole('button')</code>), <strong>filtered</strong> to narrow a list (<code>.filter({ hasText: 'Sale' })</code>), and <strong>indexed</strong> with <code>.first()</code>, <code>.last()</code>, or <code>.nth(n)</code>. Strict mode means an un-narrowed locator that matches multiple elements throws an error — always narrow to one.</p>`,syntax:`// ── Semantic locators (recommended, in priority order) ────────
page.getByRole('button', { name: 'Submit' })       // ARIA role
page.getByRole('textbox', { name: 'Email' })
page.getByRole('heading', { level: 1 })
page.getByLabel('Password')                         // label → input
page.getByPlaceholder('Enter your email')
page.getByText('Welcome back')
page.getByText('Welcome', { exact: false })         // substring match
page.getByAltText('Company logo')                   // img alt
page.getByTitle('Close dialog')                     // title attribute
page.getByTestId('checkout-btn')                    // data-testid

// ── CSS and XPath (fallback) ──────────────────────────────────
page.locator('.submit-btn')
page.locator('#email-input')
page.locator('input[type="email"]')
page.locator('xpath=//button[@type="submit"]')

// ── Chaining: scope search inside a parent ────────────────────
page.locator('.product-card').getByRole('button', { name: 'Add to cart' })
page.getByRole('listitem').getByRole('link')

// ── Filtering: narrow a set by content ───────────────────────
page.getByRole('listitem').filter({ hasText: 'Special offer' })
page.getByRole('row').filter({ has: page.getByRole('checkbox') })

// ── Indexing: pick one from multiple matches ──────────────────
page.getByRole('option').first()
page.getByRole('option').last()
page.getByRole('row').nth(2)                        // 0-indexed

// ── Combining conditions ──────────────────────────────────────
page.getByRole('button').and(page.getByTitle('Save file'))`,examples:[{label:`Form interaction with semantic locators`,code:`import { test, expect } from '@playwright/test';

test('fill and submit login form', async ({ page }) => {
  await page.goto('/login');

  // getByLabel links the locator to the visible form label
  await page.getByLabel('Email address').fill('user@example.com');
  await page.getByLabel('Password').fill('secret123');

  // getByRole with name targets the visible button text
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('/dashboard');
});`,out:`Fills email + password fields by label, clicks Sign in, asserts redirect`},{label:`Filtering a list of items`,code:`import { test, expect } from '@playwright/test';

test('remove only the "Playwright" item from the cart', async ({ page }) => {
  await page.goto('/cart');

  // Scope to the list item that contains "Playwright"
  const playwrightRow = page.getByRole('row').filter({ hasText: 'Playwright' });

  // Then find the Remove button within only that row
  await playwrightRow.getByRole('button', { name: 'Remove' }).click();

  await expect(page.getByRole('row').filter({ hasText: 'Playwright' })).toHaveCount(0);
});`,out:`Only the Playwright row is removed; other cart items remain`},{label:`Chaining locators to scope within a component`,code:`import { test, expect } from '@playwright/test';

test('like the second product card', async ({ page }) => {
  await page.goto('/products');

  // Scope into the second .product-card (0-indexed)
  const secondCard = page.locator('.product-card').nth(1);

  // getByRole searches only within that card
  await secondCard.getByRole('button', { name: 'Like' }).click();

  // Verify the like count updated inside the same card
  await expect(secondCard.getByTestId('like-count')).toHaveText('1');
});`,out:`Likes the second card only; other cards' like counts are unaffected`}],svgHTML:`<svg viewBox="0 0 420 215" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="215" fill="#1e1e2e" rx="8"/>
<text x="210" y="20" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">LOCATOR PRIORITY (most → least resilient)</text>
<rect x="10"  y="28" width="400" height="24" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="1"/>
<text x="24"  y="44" fill="#4caf82" font-size="10" font-weight="bold">① getByRole()</text>
<text x="180" y="44" fill="#888" font-size="9">ARIA roles — closest to user / screen reader perception</text>
<rect x="10"  y="56" width="400" height="24" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.7"/>
<text x="24"  y="72" fill="#4caf82" font-size="10">② getByLabel()</text>
<text x="180" y="72" fill="#888" font-size="9">Form inputs linked to their visible label text</text>
<rect x="10"  y="84" width="400" height="24" fill="#1a251a" rx="4" stroke="#84cc76" stroke-width="0.6"/>
<text x="24"  y="100" fill="#84cc76" font-size="10">③ getByPlaceholder()</text>
<text x="180" y="100" fill="#888" font-size="9">Unlabelled inputs by placeholder attribute</text>
<rect x="10"  y="112" width="400" height="24" fill="#1a251a" rx="4" stroke="#84cc76" stroke-width="0.6"/>
<text x="24"  y="128" fill="#84cc76" font-size="10">④ getByText() · getByAltText() · getByTitle()</text>
<text x="310" y="128" fill="#888" font-size="9">visible text</text>
<rect x="10"  y="140" width="400" height="24" fill="#2a2a1a" rx="4" stroke="#f5a623" stroke-width="0.6"/>
<text x="24"  y="156" fill="#f5a623" font-size="10">⑤ getByTestId()</text>
<text x="180" y="156" fill="#888" font-size="9">data-testid attribute — explicit test hook</text>
<rect x="10"  y="168" width="400" height="24" fill="#2a1a1a" rx="4" stroke="#f87171" stroke-width="0.6"/>
<text x="24"  y="184" fill="#f87171" font-size="10">⑥ CSS selector · XPath</text>
<text x="180" y="184" fill="#888" font-size="9">Last resort — fragile, tightly coupled to DOM structure</text>
<text x="210" y="207" fill="#44445a" font-size="8.5" text-anchor="middle">.filter({ hasText }) · .nth(n) · .first() · .last() · chaining</text>
</svg>`,analogy:`<p>Locators are like instructions for finding a specific person in a crowded room. The best instruction is <em>"find the person whose badge says Manager"</em> (<code>getByRole</code>) — meaningful and stable regardless of where they stand. Worse is <em>"find the person in the blue shirt"</em> (<code>CSS class</code>) — might match many, and they could change clothes. Worst is <em>"the third person in the second row"</em> (<code>XPath index</code>) — completely wrong if anyone moves.</p>
<p><code>.filter({ hasText })</code> is adding <em>"…who is holding a coffee cup"</em> to narrow the group. <code>.nth(1)</code> is <em>"the second matching person"</em>. Chaining is <em>"within the VIP section, find the manager"</em> — you scope your search to a subsection first, then find the person inside it.</p>`,flow:[`Start with <code>getByRole()</code> — use the element's ARIA role and accessible name`,`For form controls, prefer <code>getByLabel()</code> — it mirrors how users read the form`,`Use <code>getByPlaceholder()</code> for unlabelled inputs; <code>getByText()</code> for non-interactive content`,`Fall back to <code>getByTestId()</code> for elements with no natural role or label`,`Use CSS / XPath selectors only when semantic locators can't reach the element`,`Chain locators (<code>parent.getByRole(…)</code>) to scope searches inside a component`,`Narrow multiple matches with <code>.filter({ hasText })</code>, <code>.first()</code>, <code>.last()</code>, or <code>.nth(n)</code>`]},{id:`actions`,title:`Interactions & Actions`,icon:`🖱️`,explain:`
<p>Before performing any action, Playwright automatically checks that the target element is <strong>attached</strong> to the DOM, <strong>visible</strong>, <strong>stable</strong> (not animating), <strong>enabled</strong>, and <strong>receiving events</strong> (not obscured by another element). These <em>actionability checks</em> run silently on every <code>click()</code>, <code>fill()</code>, <code>check()</code>, and so on — eliminating most race conditions without manual waits. Use <code>{ force: true }</code> to bypass them when you deliberately need to interact with hidden or covered elements.</p>
<p>For text input, <code>fill(text)</code> is the standard method — it clears the field and sets the value atomically, matching how programmatic form population works. Use <code>pressSequentially(text, { delay })</code> when the app has custom key-event listeners that <code>fill()</code> bypasses. <code>press(key)</code> dispatches a single key event (e.g. <code>'Enter'</code>, <code>'Tab'</code>, <code>'Control+A'</code>, <code>'ArrowDown'</code>). For checkboxes use <code>check()</code> / <code>uncheck()</code>; for <code>&lt;select&gt;</code> dropdowns use <code>selectOption()</code>.</p>
<p>Mouse interactions beyond clicking include <code>hover()</code> to reveal dropdown menus or tooltips, <code>dblclick()</code> for double-clicks, <code>click({ button: 'right' })</code> for context menus, and <code>dragTo(target)</code> for drag-and-drop. File inputs are handled with <code>setInputFiles(path)</code>. All actions accept <code>{ timeout }</code> to override the default per-action timeout.</p>`,syntax:`// ── Click variants ────────────────────────────────────────────
await locator.click();
await locator.dblclick();
await locator.click({ button: 'right' });                  // context menu
await locator.click({ modifiers: ['Control'] });           // Ctrl+Click
await locator.click({ modifiers: ['Shift'] });             // Shift+Click
await locator.click({ position: { x: 50, y: 30 } });      // pixel position
await locator.click({ trial: true });                      // dry-run check

// ── Text input ────────────────────────────────────────────────
await locator.fill('user@example.com');                    // clear + set
await locator.clear();                                     // clear only
await locator.pressSequentially('playwright', { delay: 50 }); // key-by-key
await locator.press('Enter');
await locator.press('Control+A');
await locator.press('Tab');
await locator.press('ArrowDown');

// ── Form controls ─────────────────────────────────────────────
await page.getByLabel('Terms').check();
await page.getByLabel('Newsletter').uncheck();
await page.getByLabel('Country').selectOption('US');            // by value
await page.getByLabel('Country').selectOption({ label: 'United States' });
await page.getByLabel('Country').selectOption({ index: 0 });
await page.getByLabel('Skills').selectOption(['js', 'ts']);    // multi-select

// ── Mouse ─────────────────────────────────────────────────────
await locator.hover();
await page.locator('#src').dragTo(page.locator('#dst'));
await page.mouse.wheel(0, 300);                               // scroll down

// ── File upload ───────────────────────────────────────────────
await page.getByLabel('Upload').setInputFiles('report.pdf');
await page.getByLabel('Upload').setInputFiles(['a.pdf', 'b.pdf']); // multiple

// ── Options ───────────────────────────────────────────────────
await locator.click({ force: true });                         // skip checks
await locator.click({ timeout: 10_000 });`,examples:[{label:`Filling a complete registration form`,code:`import { test, expect } from '@playwright/test';

test('register a new account', async ({ page }) => {
  await page.goto('/register');

  await page.getByLabel('Full name').fill('Alice Smith');
  await page.getByLabel('Email').fill('alice@example.com');
  await page.getByLabel('Password').fill('Secure#1234');

  // Checkbox
  await page.getByLabel('I agree to the Terms of Service').check();

  // Dropdown
  await page.getByLabel('Country').selectOption({ label: 'United States' });

  await page.getByRole('button', { name: 'Create account' }).click();
  await expect(page).toHaveURL('/welcome');
});`,out:`All fields filled, checkbox checked, country selected, form submitted`},{label:`Keyboard navigation and shortcuts`,code:`import { test, expect } from '@playwright/test';

test('keyboard-driven form submission', async ({ page }) => {
  await page.goto('/search');

  // Type into search field key-by-key (triggers autocomplete listener)
  await page.getByPlaceholder('Search').pressSequentially('play', { delay: 80 });

  // Wait for suggestion, then select with arrow keys
  await page.getByPlaceholder('Search').press('ArrowDown');
  await page.getByPlaceholder('Search').press('Enter');

  // Keyboard shortcut: Ctrl+A to select all text, then replace
  await page.getByLabel('Filter').click();
  await page.keyboard.press('Control+A');
  await page.keyboard.type('Playwright');

  await expect(page.getByTestId('result-count')).not.toBeEmpty();
});`,out:`Autocomplete triggered by pressSequentially; Enter selects suggestion`},{label:`Hover, right-click, and file upload`,code:`import { test, expect } from '@playwright/test';

test('context menu and file upload', async ({ page }) => {
  await page.goto('/files');

  // Hover to reveal a tooltip
  await page.getByRole('button', { name: 'Info' }).hover();
  await expect(page.getByRole('tooltip')).toBeVisible();

  // Right-click to open context menu, then click an option
  await page.getByTestId('file-item').click({ button: 'right' });
  await page.getByRole('menuitem', { name: 'Rename' }).click();

  // Upload a file via the file input
  await page.getByLabel('Choose file').setInputFiles('report.pdf');
  await expect(page.getByText('report.pdf')).toBeVisible();
});`,out:`Tooltip shown on hover; context menu opened via right-click; file uploaded`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="20" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">ACTIONABILITY CHECKS + ACTION CATEGORIES</text>
<rect x="10" y="28" width="400" height="36" fill="#1a1a2a" rx="6" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="210" y="43" fill="#6ea6f5" font-size="10" font-weight="bold" text-anchor="middle">Auto-Wait Checks (before EVERY action)</text>
<text x="210" y="58" fill="#888" font-size="9" text-anchor="middle">Attached · Visible · Stable · Enabled · Editable · Receiving events</text>
<rect x="10"  y="74" width="92" height="52" fill="#1a2a1a" rx="5" stroke="#4caf82" stroke-width="0.8"/>
<text x="56"  y="92" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">Mouse</text>
<text x="56"  y="105" fill="#888" font-size="8" text-anchor="middle">click · dblclick</text>
<text x="56"  y="116" fill="#888" font-size="8" text-anchor="middle">hover · dragTo</text>
<rect x="110" y="74" width="92" height="52" fill="#2a1a1a" rx="5" stroke="#f87171" stroke-width="0.8"/>
<text x="156" y="92" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Keyboard</text>
<text x="156" y="105" fill="#888" font-size="8" text-anchor="middle">press · fill</text>
<text x="156" y="116" fill="#888" font-size="8" text-anchor="middle">pressSequentially</text>
<rect x="210" y="74" width="92" height="52" fill="#2a2a1a" rx="5" stroke="#f5a623" stroke-width="0.8"/>
<text x="256" y="92" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">Form</text>
<text x="256" y="105" fill="#888" font-size="8" text-anchor="middle">check · uncheck</text>
<text x="256" y="116" fill="#888" font-size="8" text-anchor="middle">selectOption</text>
<rect x="310" y="74" width="100" height="52" fill="#1a1a2a" rx="5" stroke="#c084fc" stroke-width="0.8"/>
<text x="360" y="92" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">File / Special</text>
<text x="360" y="105" fill="#888" font-size="8" text-anchor="middle">setInputFiles</text>
<text x="360" y="116" fill="#888" font-size="8" text-anchor="middle">clear · focus</text>
<rect x="10" y="138" width="130" height="28" fill="#2a2a3d" rx="4"/>
<text x="75" y="152" fill="#e0e0e0" font-size="9" text-anchor="middle">{ force: true }</text>
<text x="75" y="162" fill="#555570" font-size="8" text-anchor="middle">skip actionability checks</text>
<rect x="148" y="138" width="130" height="28" fill="#2a2a3d" rx="4"/>
<text x="213" y="152" fill="#e0e0e0" font-size="9" text-anchor="middle">{ timeout: 10_000 }</text>
<text x="213" y="162" fill="#555570" font-size="8" text-anchor="middle">per-action timeout</text>
<rect x="286" y="138" width="124" height="28" fill="#2a2a3d" rx="4"/>
<text x="348" y="152" fill="#e0e0e0" font-size="9" text-anchor="middle">{ trial: true }</text>
<text x="348" y="162" fill="#555570" font-size="8" text-anchor="middle">dry-run check only</text>
<text x="210" y="198" fill="#44445a" font-size="8.5" text-anchor="middle">fill() = clear + set value · pressSequentially() = key-by-key simulation</text>
</svg>`,analogy:`<p>Playwright actions are like a test pilot at a fully instrumented cockpit. Before pressing any button, the system automatically verifies the instrument panel is on, the button is lit up (visible), not currently moving (stable), and reachable (not behind a cover). Only then does it press the button — that's the actionability check. You never have to manually ask "is the panel ready?" before each action.</p>
<p><code>fill()</code> is the autopilot data entry — it clears the old destination and sets the new one precisely in one step. <code>pressSequentially()</code> is the human co-pilot manually dialling in each character — slower, but it triggers every intermediate instrument reaction. <code>press('Enter')</code> is pulling the throttle lever. <code>hover()</code> is putting your hand near a switch to see which indicator lights up.</p>`,flow:[`Playwright runs <strong>actionability checks</strong> automatically before every action — no manual waits needed`,`Use <code>fill(text)</code> for text inputs — clears existing content and sets the new value atomically`,`Use <code>pressSequentially(text, { delay })</code> when the app reacts to individual key events`,`Use <code>press(key)</code> for Enter, Tab, arrow keys, and keyboard shortcuts like <code>'Control+A'</code>`,`Use <code>check()</code> / <code>uncheck()</code> for checkboxes; <code>selectOption(value)</code> for <code>&lt;select&gt;</code> dropdowns`,`Use <code>hover()</code> before clicking sub-menu items revealed by hover; <code>click({ button: 'right' })</code> for context menus`,`Use <code>setInputFiles(path)</code> for file uploads; <code>dragTo(target)</code> for drag-and-drop`]},{id:`assertions`,title:`Assertions with expect()`,icon:`✅`,explain:`
<p>Playwright's <code>expect()</code> comes in two flavors. <strong>Web-first assertions</strong> accept a <code>Locator</code> or <code>Page</code> and <strong>auto-retry</strong> on a polling interval until the condition passes or a timeout expires. <code>await expect(locator).toBeVisible()</code> will keep re-checking if the element is momentarily hidden during a CSS transition — you never need a manual sleep before an assertion. Always <code>await</code> web-first assertions; without it, the check runs detached and failures go unreported. <strong>Generic assertions</strong> accept plain JS values and evaluate once with no retry, exactly like Jest/Vitest.</p>
<p>Key locator assertions: <code>toBeVisible()</code>, <code>toBeHidden()</code>, <code>toBeEnabled()</code>, <code>toBeDisabled()</code>, <code>toBeChecked()</code>, <code>toBeEditable()</code>, <code>toBeEmpty()</code>, <code>toHaveText()</code> (full match), <code>toContainText()</code> (partial), <code>toHaveValue()</code>, <code>toHaveValues()</code>, <code>toHaveAttribute(name, val)</code>, <code>toHaveClass()</code>, <code>toHaveCSS(prop, val)</code>, <code>toHaveCount(n)</code>. Page assertions include <code>toHaveURL()</code> and <code>toHaveTitle()</code>. All accept a <code>{ timeout }</code> option to override the 5 s default. Negate any assertion with <code>.not</code>.</p>
<p><strong>Soft assertions</strong> (<code>expect.soft()</code>) record a failure without stopping the test, letting you collect every broken check in one run — all accumulated failures are reported together at the end. For custom async conditions, <code>expect.poll(fn)</code> polls the function until its return value satisfies the matcher — use it when there is no locator to observe (e.g. polling a REST endpoint).</p>`,syntax:`// ── Locator assertions (auto-retry) ──────────────────────────
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).not.toBeChecked();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();

// ── Text / value ──────────────────────────────────────────────
await expect(locator).toHaveText('Exact text');
await expect(locator).toHaveText(/partial regex/);
await expect(locator).toContainText('substring');
await expect(locator).toHaveValue('user@example.com');     // input value
await expect(locator).toHaveValues(['js', 'ts']);          // multi-select

// ── Attribute / style ─────────────────────────────────────────
await expect(locator).toHaveAttribute('aria-expanded', 'true');
await expect(locator).toHaveClass('btn-primary');
await expect(locator).toHaveClass(/active/);
await expect(locator).toHaveCSS('color', 'rgb(0, 128, 0)');

// ── Count / page ──────────────────────────────────────────────
await expect(locator).toHaveCount(5);
await expect(page).toHaveURL('/dashboard');
await expect(page).toHaveURL(/dashboard/);
await expect(page).toHaveTitle('My App');

// ── API response ──────────────────────────────────────────────
const response = await page.request.get('/api/health');
await expect(response).toBeOK();                          // status 200-299

// ── Custom timeout ────────────────────────────────────────────
await expect(locator).toBeVisible({ timeout: 15_000 });

// ── Soft assertions ───────────────────────────────────────────
await expect.soft(locator).toHaveText('Name');
await expect.soft(page).toHaveURL('/profile');
// All soft failures reported together at test end

// ── Poll (custom async condition) ─────────────────────────────
await expect.poll(
  () => page.request.get('/api/job').then(r => r.json()),
  { timeout: 30_000 }
).toMatchObject({ status: 'done' });

// ── Generic (plain values — no retry) ────────────────────────
expect(count).toBe(5);
expect(arr).toEqual([1, 2, 3]);
expect(str).toContain('hello');`,examples:[{label:`Core web-first assertions on a login flow`,code:`import { test, expect } from '@playwright/test';

test('login flow assertions', async ({ page }) => {
  await page.goto('/login');

  await expect(page).toHaveTitle(/Login/);
  await expect(page).toHaveURL('/login');

  // Button disabled before input
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeDisabled();

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('secret');

  // Button enables after fill
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Welcome');
});`,out:`All assertions auto-retry; no manual waits needed`},{label:`Soft assertions — collect all failures at once`,code:`import { test, expect } from '@playwright/test';

test('profile page completeness check', async ({ page }) => {
  await page.goto('/profile');

  // None of these stop the test on failure
  await expect.soft(page.getByTestId('avatar')).toBeVisible();
  await expect.soft(page.getByTestId('display-name')).not.toBeEmpty();
  await expect.soft(page.getByTestId('bio')).toContainText('engineer');
  await expect.soft(page.getByRole('link', { name: 'Edit profile' })).toBeVisible();

  // All soft failures aggregated and reported here
});`,out:`All checks run regardless of failures; report shows every broken assertion`},{label:`expect.poll() for a custom async condition`,code:`import { test, expect } from '@playwright/test';

test('wait for background job to complete', async ({ page, request }) => {
  await page.goto('/jobs');
  await page.getByRole('button', { name: 'Start job' }).click();

  // No locator to observe — poll the API directly
  await expect.poll(
    async () => {
      const res = await request.get('/api/job/status');
      return (await res.json()).status;
    },
    { timeout: 30_000, intervals: [2_000, 5_000, 10_000] }
  ).toBe('completed');

  await expect(page.getByTestId('job-result')).toBeVisible();
});`,out:`poll() retries at increasing intervals until status === "completed"`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">expect() — TWO FLAVORS</text>
<rect x="10" y="26" width="194" height="92" fill="#1a2a1a" rx="6" stroke="#4caf82" stroke-width="1"/>
<text x="107" y="43" fill="#4caf82" font-size="10" font-weight="bold" text-anchor="middle">Web-First (Locator/Page)</text>
<text x="107" y="57" fill="#888" font-size="8.5" text-anchor="middle">AUTO-RETRY until pass or timeout</text>
<text x="107" y="70" fill="#ccc" font-size="8" text-anchor="middle">toBeVisible · toBeEnabled</text>
<text x="107" y="82" fill="#ccc" font-size="8" text-anchor="middle">toHaveText · toHaveValue</text>
<text x="107" y="94" fill="#ccc" font-size="8" text-anchor="middle">toHaveURL · toHaveCount</text>
<text x="107" y="108" fill="#4caf82" font-size="8" font-style="italic" text-anchor="middle">requires await</text>
<rect x="216" y="26" width="194" height="92" fill="#2a1a1a" rx="6" stroke="#f87171" stroke-width="1"/>
<text x="313" y="43" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Generic (plain values)</text>
<text x="313" y="57" fill="#888" font-size="8.5" text-anchor="middle">EVALUATES ONCE — no retry</text>
<text x="313" y="70" fill="#ccc" font-size="8" text-anchor="middle">toBe · toEqual · toContain</text>
<text x="313" y="82" fill="#ccc" font-size="8" text-anchor="middle">toHaveLength · toBeTruthy</text>
<text x="313" y="94" fill="#ccc" font-size="8" text-anchor="middle">toBeNull · toMatchObject</text>
<text x="313" y="108" fill="#f87171" font-size="8" font-style="italic" text-anchor="middle">same as Jest/Vitest</text>
<rect x="10"  y="128" width="126" height="40" fill="#2a2a3d" rx="5" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="73"  y="143" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">expect.soft()</text>
<text x="73"  y="156" fill="#888" font-size="8" text-anchor="middle">collect failures, keep running</text>
<rect x="144" y="128" width="126" height="40" fill="#2a2a3d" rx="5" stroke="#c084fc" stroke-width="0.8"/>
<text x="207" y="143" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">expect.poll(fn)</text>
<text x="207" y="156" fill="#888" font-size="8" text-anchor="middle">retry a custom async function</text>
<rect x="278" y="128" width="132" height="40" fill="#2a2a3d" rx="5" stroke="#f5a623" stroke-width="0.8"/>
<text x="344" y="143" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">.not negation</text>
<text x="344" y="156" fill="#888" font-size="8" text-anchor="middle">expect(l).not.toBeVisible()</text>
<text x="210" y="192" fill="#44445a" font-size="8.5" text-anchor="middle">Default auto-retry timeout: 5 s · override with { timeout: ms }</text>
<text x="210" y="204" fill="#44445a" font-size="8.5" text-anchor="middle">toHaveText = full match · toContainText = partial match</text>
</svg>`,analogy:`<p>Web-first assertions are like a patient security guard checking an ID: they don't glance once and immediately turn you away — they watch until the ID is fully presented, then verify it. If you're still pulling it out of your wallet (the page is mid-animation), they wait. Only after the timeout do they say "sorry, took too long." Generic assertions are like a vending machine: insert coin, get result immediately, no waiting.</p>
<p><code>expect.soft()</code> is a quality inspector walking the production line with a clipboard: they mark every defect they find but keep walking — they don't stop the line at the first flaw. At the end of the shift they hand you the full defect report. <code>expect.poll()</code> is refreshing the delivery tracking page repeatedly — you have no direct view of the package, so you call the API again and again until it says "delivered".</p>`,flow:[`Pass a <strong>Locator or Page</strong> to get web-first auto-retrying assertions; pass a <strong>plain value</strong> for one-shot generic assertions`,`Always <code>await</code> web-first assertions — without it the check runs detached and failures go unreported`,`Use <code>toHaveText()</code> for full text match and <code>toContainText()</code> for partial; both accept strings or RegExp`,`Use <code>.not</code> to negate any assertion: <code>expect(locator).not.toBeVisible()</code>`,`Override the default 5 s retry window with <code>{ timeout: ms }</code> on any web-first assertion`,`Use <code>expect.soft()</code> to collect all failures in one test run instead of stopping at the first failure`,`Use <code>expect.poll(fn)</code> when you need to retry a custom async function (e.g. polling an API) rather than observing a locator`]},{id:`config`,title:`Test Configuration`,icon:`⚙️`,explain:`
<p>All Playwright configuration lives in <code>playwright.config.ts</code> at the project root, exported via <code>defineConfig()</code>. The <strong><code>use</code> block</strong> sets browser-level defaults for every test: <code>baseURL</code> (so tests can use relative paths like <code>page.goto('/login')</code>), <code>headless</code>, <code>viewport</code>, <code>trace</code>, <code>screenshot</code>, and <code>video</code>. The <strong><code>projects</code> array</strong> defines which browsers and devices tests run against — each project inherits <code>use</code> but can add its own overrides. Spreading <code>...devices['Desktop Chrome']</code> loads Playwright's built-in browser and viewport presets.</p>
<p><code>timeout</code> is the per-test wall-clock limit; <code>expect.timeout</code> is the auto-retry window for web-first assertions (default 5 s). <code>retries</code> re-runs a failed test up to N times — the standard pattern is <code>process.env.CI ? 2 : 0</code> so local runs fail fast. <code>workers</code> controls concurrency; <code>fullyParallel: true</code> runs tests within the same file in parallel (without it, only different files run in parallel). Setting <code>workers: 1</code> is useful for debugging flaky sequential state.</p>
<p>The <code>webServer</code> option starts a local dev server before the suite and tears it down after — no separate terminal needed. Use <code>reuseExistingServer: !process.env.CI</code> to skip the startup if a server is already running locally. <code>globalSetup</code> and <code>globalTeardown</code> point to TypeScript files that run once for the entire suite — the canonical use case is authenticating once and saving the browser storage state so individual tests can skip the login flow.</p>`,syntax:`import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout:          30_000,  // per-test limit (ms)
  expect: { timeout: 5_000 },// assertion auto-retry window
  fullyParallel:    true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,  // undefined = auto

  reporter: [['html'], ['dot']],

  use: {
    baseURL:    'http://localhost:3000',
    headless:   true,
    viewport:   { width: 1280, height: 720 },
    trace:      'on-first-retry',   // record trace on retry
    screenshot: 'only-on-failure',
    video:      'on-first-retry',
  },

  projects: [
    { name: 'chromium',      use: { ...devices['Desktop Chrome']  } },
    { name: 'firefox',       use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',        use: { ...devices['Desktop Safari']  } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5']         } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13']       } },
  ],

  webServer: {
    command:             'npm run dev',
    url:                 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },

  globalSetup:    './global-setup.ts',
  globalTeardown: './global-teardown.ts',
});`,examples:[{label:`Minimal config with baseURL and two browser projects`,code:`import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome']  } },
    { name: 'webkit',   use: { ...devices['Desktop Safari']  } },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});`,out:`Tests run in Chromium and WebKit; dev server starts automatically`},{label:`CI vs local tuning with retries and workers`,code:`import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries:        process.env.CI ? 2 : 0,
  workers:        process.env.CI ? 2 : undefined,
  fullyParallel:  true,

  // HTML report in CI, concise dot reporter locally
  reporter: process.env.CI
    ? [['html', { open: 'never' }], ['github']]
    : [['dot']],

  use: {
    trace:      process.env.CI ? 'on-first-retry' : 'off',
    screenshot: process.env.CI ? 'only-on-failure' : 'off',
  },
});`,out:`CI gets retries + HTML report; local gets fast dot output`},{label:`globalSetup for once-per-suite authentication`,code:`// global-setup.ts
import { chromium } from '@playwright/test';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/login');
  await page.getByLabel('Email').fill('admin@example.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Save auth state — reuse in every test
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

// playwright.config.ts (excerpt)
// use: { storageState: 'auth.json' },
// globalSetup: './global-setup.ts',`,out:`Login runs once; auth cookies reused in all tests via storageState`}],svgHTML:`<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="230" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">playwright.config.ts — KEY SECTIONS</text>
<rect x="10" y="26" width="190" height="72" fill="#1a2a1a" rx="5" stroke="#4caf82" stroke-width="0.8"/>
<text x="105" y="41" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">use { } — browser defaults</text>
<text x="105" y="55" fill="#888" font-size="8" text-anchor="middle">baseURL · headless · viewport</text>
<text x="105" y="66" fill="#888" font-size="8" text-anchor="middle">trace · screenshot · video</text>
<text x="105" y="77" fill="#888" font-size="8" text-anchor="middle">storageState · locale</text>
<text x="105" y="90" fill="#4caf82" font-size="8" font-style="italic" text-anchor="middle">inherited by all projects</text>
<rect x="210" y="26" width="200" height="72" fill="#2a1a2a" rx="5" stroke="#c084fc" stroke-width="0.8"/>
<text x="310" y="41" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">projects [ ] — browsers</text>
<text x="310" y="55" fill="#888" font-size="8" text-anchor="middle">chromium · firefox · webkit</text>
<text x="310" y="66" fill="#888" font-size="8" text-anchor="middle">devices['Pixel 5']</text>
<text x="310" y="77" fill="#888" font-size="8" text-anchor="middle">each project overrides use</text>
<text x="310" y="90" fill="#c084fc" font-size="8" font-style="italic" text-anchor="middle">--project=chromium to filter</text>
<rect x="10"  y="108" width="92" height="56" fill="#2a2a1a" rx="5" stroke="#f5a623" stroke-width="0.8"/>
<text x="56"  y="123" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">Timeouts</text>
<text x="56"  y="136" fill="#888" font-size="8" text-anchor="middle">timeout: 30s</text>
<text x="56"  y="147" fill="#888" font-size="8" text-anchor="middle">per-test limit</text>
<text x="56"  y="158" fill="#888" font-size="8" text-anchor="middle">expect.timeout: 5s</text>
<rect x="110" y="108" width="92" height="56" fill="#1a1a2a" rx="5" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="156" y="123" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">Parallelism</text>
<text x="156" y="136" fill="#888" font-size="8" text-anchor="middle">fullyParallel</text>
<text x="156" y="147" fill="#888" font-size="8" text-anchor="middle">workers: N</text>
<text x="156" y="158" fill="#888" font-size="8" text-anchor="middle">retries: CI?2:0</text>
<rect x="210" y="108" width="92" height="56" fill="#2a1a1a" rx="5" stroke="#f87171" stroke-width="0.8"/>
<text x="256" y="123" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">webServer</text>
<text x="256" y="136" fill="#888" font-size="8" text-anchor="middle">command: npm run dev</text>
<text x="256" y="147" fill="#888" font-size="8" text-anchor="middle">url: localhost:3000</text>
<text x="256" y="158" fill="#888" font-size="8" text-anchor="middle">reuseExisting</text>
<rect x="310" y="108" width="100" height="56" fill="#1a2a2a" rx="5" stroke="#22d3ee" stroke-width="0.8"/>
<text x="360" y="123" fill="#22d3ee" font-size="9" font-weight="bold" text-anchor="middle">Global hooks</text>
<text x="360" y="136" fill="#888" font-size="8" text-anchor="middle">globalSetup</text>
<text x="360" y="147" fill="#888" font-size="8" text-anchor="middle">globalTeardown</text>
<text x="360" y="158" fill="#888" font-size="8" text-anchor="middle">run once / suite</text>
<text x="210" y="188" fill="#44445a" font-size="8.5" text-anchor="middle">CLI overrides: --headed  --project=chromium  --grep=@smoke  --workers=4</text>
<text x="210" y="202" fill="#44445a" font-size="8.5" text-anchor="middle">reporter: html · dot · line · json · junit · github</text>
<text x="210" y="218" fill="#44445a" font-size="8.5" text-anchor="middle">trace: off · on · on-first-retry · retain-on-failure</text>
</svg>`,analogy:`<p><code>playwright.config.ts</code> is like a flight operations manual. The <code>use</code> block is the standard operating procedure applied to every flight — default cruising altitude, cabin pressure, safety protocol. <code>projects</code> are different aircraft types: the A320 (Chromium), the 737 (Firefox), and the A380 (WebKit) all follow the same SOP but have model-specific overrides. <code>retries</code> is the emergency protocol — attempt the procedure again if the first try fails; in a real flight (CI), you retry twice; in a simulator (local dev) you don't bother.</p>
<p><code>webServer</code> is the ground crew that fuels and pre-positions the aircraft before every flight — no pilot should have to start the engines manually. <code>globalSetup</code> is the pre-season safety training that runs once before the entire schedule: authenticate an admin user, seed the database, prepare the gate. Every individual test (flight) benefits from that preparation without repeating it.</p>`,flow:[`<code>playwright.config.ts</code> exports a <code>defineConfig()</code> object at the project root`,`The <code>use</code> block sets browser defaults for all tests: <code>baseURL</code>, <code>headless</code>, <code>viewport</code>, <code>trace</code>, <code>screenshot</code>, <code>video</code>`,`The <code>projects</code> array defines target browsers/devices — each spreads a <code>devices[…]</code> preset and can override <code>use</code>`,`<code>timeout</code> limits per-test wall-clock time; <code>expect.timeout</code> controls how long assertions auto-retry`,`Use <code>retries: process.env.CI ? 2 : 0</code> and <code>workers: process.env.CI ? 2 : undefined</code> to tune CI vs local behavior`,`<code>webServer</code> starts your dev server before tests and shuts it down after; <code>reuseExistingServer: !process.env.CI</code> avoids double-starts locally`,`<code>globalSetup</code> runs once before all tests — the canonical pattern is logging in once and saving <code>storageState</code> for all tests to reuse`]},{id:`fixtures`,title:`Fixtures & Hooks`,icon:`🔩`,explain:`
<p>Playwright's fixture system is its most powerful organisational tool. A fixture is a named function that sets up a resource before a test and tears it down automatically afterward. The built-in fixtures — <code>page</code>, <code>browser</code>, <code>context</code>, <code>browserName</code>, and <code>request</code> — are available in every test with no configuration. Tests declare which fixtures they need through object destructuring in the callback signature: <code>async ({ page, request }) =&gt; { … }</code>. Playwright only sets up the fixtures a test actually requests.</p>
<p>Custom fixtures are created with <code>test.extend()</code>. The fixture function receives any fixtures it depends on plus a special <code>use</code> callback. Calling <code>await use(value)</code> hands the value to the test and pauses there; any code <em>after</em> <code>use()</code> runs as teardown once the test finishes. Fixture <strong>scope</strong> controls lifetime: <code>'test'</code> (default) creates a fresh instance per test; <code>'worker'</code> shares one instance across all tests running in the same worker process (ideal for expensive setups like database connections); <code>'file'</code> shares across tests in one spec file. Setting <code>auto: true</code> runs the fixture for every test even if it isn't requested.</p>
<p>Traditional hooks (<code>beforeEach</code>, <code>afterEach</code>, <code>beforeAll</code>, <code>afterAll</code>) work inside <code>test.describe()</code> blocks for file-scoped setup. The key rule: prefer fixtures over hooks when the setup is reused across multiple spec files — fixtures compose naturally and are tree-shaken. Use <code>test.use({ … })</code> at the top of a file or describe block to override a fixture's value for that scope only.</p>`,syntax:`// ── Built-in fixtures ────────────────────────────────────────
test('uses built-ins', async ({ page, context, browser, request, browserName }) => {
  console.log(browserName);          // 'chromium' | 'firefox' | 'webkit'
  await page.goto('/');
});

// ── Custom fixture with teardown ──────────────────────────────
import { test as base } from '@playwright/test';

const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todo = new TodoPage(page);
    await todo.goto();               // setup

    await use(todo);                 // ← test runs here

    await todo.removeAll();          // teardown
  },
});

// ── Worker-scoped fixture ─────────────────────────────────────
const test = base.extend<{}, { db: Database }>({
  db: [async ({}, use) => {
    const db = await Database.connect(process.env.DATABASE_URL);
    await use(db);
    await db.close();
  }, { scope: 'worker' }],
});

// ── auto fixture (runs for every test without request) ────────
const test = base.extend({
  mockTime: [async ({ page }, use) => {
    await page.clock.setFixedTime(new Date('2024-01-01'));
    await use();
  }, { auto: true }],
});

// ── Composing fixtures ────────────────────────────────────────
const test = base.extend({
  adminPage: async ({ page, db }, use) => {  // depends on db fixture
    await db.seed('admin-user');
    await page.goto('/admin');
    await use(page);
  },
});

// ── File-scoped override ──────────────────────────────────────
test.use({ storageState: 'auth/admin.json' });

// ── Hooks ─────────────────────────────────────────────────────
test.describe('checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cart');
  });
  test.afterEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Clear cart' }).click();
  });
  test.beforeAll(async () => { /* runs once per describe */ });
  test.afterAll(async  () => { /* runs once per describe */ });
});`,examples:[{label:`Custom fixture: logged-in page`,code:`import { test as base, expect } from '@playwright/test';

// Extend test with a fixture that delivers a pre-authenticated page
const test = base.extend<{ loggedInPage: Page }>({
  loggedInPage: async ({ page }, use) => {
    // Setup: log in
    await page.goto('/login');
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('secret');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('/dashboard');

    await use(page);   // test runs here — page is authenticated

    // Teardown: nothing needed; page closes automatically
  },
});

test('dashboard shows user name', async ({ loggedInPage: page }) => {
  await expect(page.getByTestId('user-name')).toContainText('user');
});`,out:`Setup and teardown are co-located in the fixture; test body stays clean`},{label:`Worker-scoped database fixture`,code:`import { test as base } from '@playwright/test';

// WorkerFixtures type prevents test-scoped access
const test = base.extend<{}, { db: Database }>({
  db: [async ({}, use) => {
    const db = await Database.connect(process.env.DATABASE_URL!);
    await db.migrate();         // run once per worker

    await use(db);              // all tests in this worker share db

    await db.close();           // teardown when worker exits
  }, { scope: 'worker' }],
});

test('creates a user', async ({ db, page }) => {
  const id = await db.insert('users', { name: 'Alice' });
  await page.goto(\`/users/\${id}\`);
  await expect(page.getByRole('heading')).toHaveText('Alice');
});`,out:`Database connects once per worker — no reconnect overhead per test`},{label:`Auto fixture + describe-scoped hooks`,code:`import { test as base, expect } from '@playwright/test';

// Auto fixture: sets clock for every test in this module
const test = base.extend({
  frozenTime: [async ({ page }, use) => {
    await page.clock.setFixedTime(new Date('2024-06-15'));
    await use();
    // no teardown — page closes automatically
  }, { auto: true }],
});

test.describe('invoice date display', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/invoices/new');
  });

  test('defaults to today', async ({ page }) => {
    // Clock is frozen to 2024-06-15 automatically by the auto fixture
    await expect(page.getByLabel('Date')).toHaveValue('2024-06-15');
  });
});`,out:`auto: true runs frozenTime for every test without explicit declaration`}],svgHTML:`<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="220" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">FIXTURE LIFECYCLE</text>
<rect x="10" y="26" width="400" height="22" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="210" y="41" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">▶ SETUP — code before await use(value)</text>
<rect x="10" y="56" width="400" height="22" fill="#2a2a3d" rx="4" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="210" y="71" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">await use(value)  ←  TEST RUNS HERE</text>
<rect x="10" y="86" width="400" height="22" fill="#2a1a1a" rx="4" stroke="#f87171" stroke-width="0.8"/>
<text x="210" y="101" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">▶ TEARDOWN — code after await use()</text>
<text x="10"  y="126" fill="#f5a623" font-size="9" font-weight="bold">SCOPE</text>
<rect x="10"  y="132" width="120" height="40" fill="#2a2a1a" rx="4" stroke="#f5a623" stroke-width="0.7"/>
<text x="70"  y="148" fill="#f5a623" font-size="8.5" font-weight="bold" text-anchor="middle">test (default)</text>
<text x="70"  y="161" fill="#888" font-size="8" text-anchor="middle">fresh per test</text>
<rect x="138" y="132" width="120" height="40" fill="#2a2a1a" rx="4" stroke="#f5a623" stroke-width="0.7"/>
<text x="198" y="148" fill="#f5a623" font-size="8.5" font-weight="bold" text-anchor="middle">worker</text>
<text x="198" y="161" fill="#888" font-size="8" text-anchor="middle">shared in worker</text>
<rect x="266" y="132" width="144" height="40" fill="#2a2a1a" rx="4" stroke="#f5a623" stroke-width="0.7"/>
<text x="338" y="148" fill="#f5a623" font-size="8.5" font-weight="bold" text-anchor="middle">file</text>
<text x="338" y="161" fill="#888" font-size="8" text-anchor="middle">shared in spec file</text>
<rect x="10"  y="182" width="192" height="28" fill="#1a1a2a" rx="4" stroke="#c084fc" stroke-width="0.7"/>
<text x="106" y="196" fill="#c084fc" font-size="8.5" font-weight="bold" text-anchor="middle">auto: true</text>
<text x="106" y="206" fill="#888" font-size="7.5" text-anchor="middle">runs without explicit request</text>
<rect x="210" y="182" width="200" height="28" fill="#1a1a2a" rx="4" stroke="#22d3ee" stroke-width="0.7"/>
<text x="310" y="196" fill="#22d3ee" font-size="8.5" font-weight="bold" text-anchor="middle">test.use({ … })</text>
<text x="310" y="206" fill="#888" font-size="7.5" text-anchor="middle">file/describe-scoped override</text>
</svg>`,analogy:`<p>Fixtures are like hotel room service. When you check into a room (a test), towels (<code>page</code>), pillows (<code>context</code>), and Wi-Fi (<code>browser</code>) are already waiting — you didn't set them up, the hotel (Playwright) did. Custom fixtures are like ordering a specific item: room service delivers it before you need it and quietly removes it after you check out. <code>await use(value)</code> is the moment you receive the delivery; code after it runs when they collect it at checkout.</p>
<p>Worker-scoped fixtures are like the hotel lobby's shared coffee machine — one instance for everyone staying in the building, not one per room. You wouldn't brew a fresh pot for each guest. <code>auto: true</code> is like having a no-touch ambient thermostat that adjusts the room temperature for every guest without them requesting it. Hooks (<code>beforeEach</code>) are like the housekeeper who checks the room before each guest — useful, but harder to share across hotel chains (files).</p>`,flow:[`Built-in fixtures (<code>page</code>, <code>context</code>, <code>browser</code>, <code>request</code>, <code>browserName</code>) are destructured in the test callback — no imports needed`,`Create custom fixtures with <code>const test = base.extend({ … })</code> — always import the extended <code>test</code>, not the base`,`Inside the fixture: setup code runs first, then <code>await use(value)</code> gives the value to the test; teardown code goes <em>after</em> <code>use()</code>`,`Default <code>scope: 'test'</code> creates a fresh instance per test; <code>scope: 'worker'</code> shares one instance across all tests in a worker`,`Set <code>auto: true</code> to run a fixture for every test without the test explicitly requesting it`,`Use <code>test.use({ storageState: 'auth.json' })</code> at file or describe level to override a fixture for that scope`,`Prefer fixtures over <code>beforeEach</code> for cross-file reuse; use hooks for logic that is genuinely local to one spec file`]},{id:`api`,title:`API Testing`,icon:`🔌`,explain:`
<p>Playwright includes a built-in HTTP client called <code>APIRequestContext</code> — no axios, node-fetch, or supertest needed. The <code>request</code> fixture in every test gives you this client pre-configured with your <code>baseURL</code> and any <code>extraHTTPHeaders</code> from <code>playwright.config.ts</code>. You can use it for three purposes: <strong>pure API tests</strong> that validate REST or GraphQL endpoints directly; <strong>test setup/teardown</strong> that creates and deletes data faster than navigating the UI; and <strong>hybrid tests</strong> that seed state through the API and then assert the UI reflects it correctly.</p>
<p>Every request method returns an <code>APIResponse</code>. Call <code>response.ok()</code> for a quick true/false (status 200–299), <code>response.status()</code> for the exact code, <code>response.json()</code> to parse the body as JSON, and <code>response.text()</code> for raw text. Use <code>await expect(response).toBeOK()</code> as the assertion form. Pass request bodies as <code>data: { … }</code> for JSON, <code>form: { … }</code> for <code>application/x-www-form-urlencoded</code>, or <code>multipart: { … }</code> for file uploads. Query string parameters go in <code>params: { … }</code>.</p>
<p><code>page.request</code> is the same HTTP client but shares the browser's cookie jar — useful when the app authenticates via browser session cookies and you want to make API calls as that logged-in user. <code>request.newContext({ baseURL, extraHTTPHeaders })</code> creates a completely standalone client with its own session — the right choice for <code>globalSetup</code> where no browser exists yet.</p>`,syntax:`// ── GET ──────────────────────────────────────────────────────
const res = await request.get('/api/users');
expect(res.ok()).toBeTruthy();
const users = await res.json();

// GET with query params
const res = await request.get('/api/search', {
  params: { q: 'playwright', page: 1 },
});

// ── POST / PUT / PATCH / DELETE ───────────────────────────────
const created = await request.post('/api/users', {
  data: { name: 'Alice', email: 'alice@example.com' },
});
expect(created.status()).toBe(201);
const { id } = await created.json();

await request.put(\`/api/users/\${id}\`,  { data: { name: 'Bob' } });
await request.patch(\`/api/users/\${id}\`, { data: { active: false } });
await request.delete(\`/api/users/\${id}\`);

// ── Headers ───────────────────────────────────────────────────
const res = await request.get('/api/protected', {
  headers: { Authorization: \`Bearer \${token}\` },
});

// ── Form / multipart ──────────────────────────────────────────
await request.post('/api/submit', { form: { name: 'Alice' } });
await request.post('/api/upload', {
  multipart: { file: { name: 'report.pdf', mimeType: 'application/pdf',
                        buffer: Buffer.from('…') } },
});

// ── Response inspection ───────────────────────────────────────
res.ok()                      // boolean: status 200-299
res.status()                  // number: exact HTTP status
await res.json()              // parsed JSON body
await res.text()              // raw text body
res.headers()                 // headers as plain object
await expect(res).toBeOK()    // assertion form

// ── Browser-session-aware client ──────────────────────────────
const res = await page.request.get('/api/me');  // uses browser cookies

// ── Standalone context (globalSetup, fixtures) ────────────────
const api = await request.newContext({
  baseURL: 'https://api.example.com',
  extraHTTPHeaders: { 'x-api-key': process.env.API_KEY! },
});
await api.dispose();          // release when done`,examples:[{label:`Pure API test: create, read, delete a resource`,code:`import { test, expect } from '@playwright/test';

test('user CRUD via API', async ({ request }) => {
  // Create
  const created = await request.post('/api/users', {
    data: { name: 'Alice', email: 'alice@test.com' },
  });
  expect(created.status()).toBe(201);
  const { id } = await created.json();

  // Read
  const fetched = await request.get(\`/api/users/\${id}\`);
  await expect(fetched).toBeOK();
  const user = await fetched.json();
  expect(user.name).toBe('Alice');

  // Delete
  const deleted = await request.delete(\`/api/users/\${id}\`);
  expect(deleted.status()).toBe(204);

  // Confirm gone
  const missing = await request.get(\`/api/users/\${id}\`);
  expect(missing.status()).toBe(404);
});`,out:`Full CRUD cycle tested directly against the API — no browser needed`},{label:`API seed + UI assertion hybrid test`,code:`import { test, expect } from '@playwright/test';

test('newly created product appears in the catalog', async ({ request, page }) => {
  // Seed via API — faster than clicking through the admin UI
  const res = await request.post('/api/products', {
    data: { name: 'Playwright Pro', price: 99 },
  });
  expect(res.status()).toBe(201);
  const { id } = await res.json();

  // Assert the UI shows the product
  await page.goto('/catalog');
  await expect(page.getByTestId(\`product-\${id}\`)).toBeVisible();
  await expect(page.getByTestId(\`product-\${id}\`)).toContainText('Playwright Pro');

  // Cleanup via API
  await request.delete(\`/api/products/\${id}\`);
});`,out:`API creates data instantly; UI test only asserts the display layer`},{label:`Standalone API context in globalSetup`,code:`// global-setup.ts
import { request } from '@playwright/test';

export default async function globalSetup() {
  const api = await request.newContext({
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    extraHTTPHeaders: {
      'x-setup-key': process.env.SETUP_KEY!,
    },
  });

  // Seed shared test data
  await api.post('/api/seed', { data: { scenario: 'e2e-suite' } });

  // Log in and save auth state
  const loginRes = await api.post('/api/auth/login', {
    data: { email: 'admin@test.com', password: 'secret' },
  });
  expect(loginRes.ok()).toBeTruthy();

  await api.storageState({ path: 'auth/admin.json' });
  await api.dispose();
}`,out:`globalSetup uses a standalone API context — no browser required`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">API TESTING — THREE USE CASES</text>
<rect x="10"  y="26" width="122" height="76" fill="#1a2a1a" rx="5" stroke="#4caf82" stroke-width="0.8"/>
<text x="71"  y="42" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">Pure API Test</text>
<text x="71"  y="56" fill="#888" font-size="8" text-anchor="middle">request fixture</text>
<text x="71"  y="67" fill="#888" font-size="8" text-anchor="middle">GET · POST · PUT</text>
<text x="71"  y="78" fill="#888" font-size="8" text-anchor="middle">PATCH · DELETE</text>
<text x="71"  y="93" fill="#4caf82" font-size="7.5" font-style="italic" text-anchor="middle">no browser needed</text>
<rect x="149" y="26" width="122" height="76" fill="#2a2a1a" rx="5" stroke="#f5a623" stroke-width="0.8"/>
<text x="210" y="42" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">Hybrid Test</text>
<text x="210" y="56" fill="#888" font-size="8" text-anchor="middle">API seeds data</text>
<text x="210" y="67" fill="#888" font-size="8" text-anchor="middle">UI asserts it</text>
<text x="210" y="78" fill="#888" font-size="8" text-anchor="middle">API cleans up</text>
<text x="210" y="93" fill="#f5a623" font-size="7.5" font-style="italic" text-anchor="middle">request + page together</text>
<rect x="288" y="26" width="122" height="76" fill="#1a1a2a" rx="5" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="349" y="42" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">Session-Aware</text>
<text x="349" y="56" fill="#888" font-size="8" text-anchor="middle">page.request</text>
<text x="349" y="67" fill="#888" font-size="8" text-anchor="middle">shares browser</text>
<text x="349" y="78" fill="#888" font-size="8" text-anchor="middle">cookies / session</text>
<text x="349" y="93" fill="#6ea6f5" font-size="7.5" font-style="italic" text-anchor="middle">for auth endpoints</text>
<text x="10" y="118" fill="#f5a623" font-size="9" font-weight="bold">Response</text>
<rect x="10"  y="124" width="90" height="32" fill="#2a2a3d" rx="4"/>
<text x="55"  y="137" fill="#e0e0e0" font-size="8.5" text-anchor="middle">res.ok()</text>
<text x="55"  y="149" fill="#555570" font-size="7.5" text-anchor="middle">boolean 200-299</text>
<rect x="108" y="124" width="90" height="32" fill="#2a2a3d" rx="4"/>
<text x="153" y="137" fill="#e0e0e0" font-size="8.5" text-anchor="middle">res.status()</text>
<text x="153" y="149" fill="#555570" font-size="7.5" text-anchor="middle">exact HTTP code</text>
<rect x="206" y="124" width="90" height="32" fill="#2a2a3d" rx="4"/>
<text x="251" y="137" fill="#e0e0e0" font-size="8.5" text-anchor="middle">res.json()</text>
<text x="251" y="149" fill="#555570" font-size="7.5" text-anchor="middle">parsed JSON body</text>
<rect x="304" y="124" width="106" height="32" fill="#2a2a3d" rx="4"/>
<text x="357" y="137" fill="#e0e0e0" font-size="8.5" text-anchor="middle">res.text()</text>
<text x="357" y="149" fill="#555570" font-size="7.5" text-anchor="middle">raw text body</text>
<text x="210" y="178" fill="#44445a" font-size="8.5" text-anchor="middle">data: { json }  ·  form: { key: val }  ·  params: { q: 'search' }  ·  multipart: { … }</text>
<text x="210" y="194" fill="#44445a" font-size="8.5" text-anchor="middle">request.newContext({ baseURL, extraHTTPHeaders }) — standalone, dispose() when done</text>
</svg>`,analogy:`<p>The <code>request</code> fixture is a programmable courier service. You hand it a parcel (request body) and an address (URL), and it delivers it and brings back the receipt (response). Unlike the browser — which renders HTML, applies CSS, runs JavaScript, and manages a visual viewport — the API client is a lean, direct messenger with no overhead. It's 10× faster for setup tasks because it skips all the rendering work.</p>
<p><code>page.request</code> is the same courier but wearing the browser's uniform. Because the server sees the same credentials (cookies) as the logged-in browser, it treats the request as coming from the authenticated user. <code>request.newContext()</code> is hiring an entirely separate courier agency with its own credentials and tracking number — completely independent of any existing browser session. Always call <code>dispose()</code> when you're done so the agency releases its connections.</p>`,flow:[`The <code>request</code> fixture is available in every test — use it for HTTP calls without opening a browser`,`Call <code>request.get/post/put/patch/delete(url, options)</code> — pass JSON bodies in <code>data: { … }</code>, query params in <code>params: { … }</code>`,`Inspect the response: <code>response.ok()</code> for 200–299, <code>response.status()</code> for the exact code, <code>await response.json()</code> for the body`,`Use <code>await expect(response).toBeOK()</code> as the assertion form in test files`,`Use <code>page.request</code> when you need the browser's cookie session for authenticated API calls`,`Use the API in <code>beforeEach</code> or fixtures to seed test data quickly; clean up in teardown with <code>DELETE</code>`,`For <code>globalSetup</code>, create a standalone client with <code>await request.newContext({ baseURL, extraHTTPHeaders })</code> and call <code>dispose()</code> when done`]},{id:`network`,title:`Network Interception`,icon:`🕸️`,explain:`
<p><code>page.route(pattern, handler)</code> places a handler between the browser and the network. Every request whose URL matches the pattern stops at your handler before leaving the browser. Inside the handler you receive a <code>Route</code> object and must call exactly one of: <strong><code>route.fulfill()</code></strong> — return a mocked response (status, headers, body, JSON); <strong><code>route.abort()</code></strong> — block the request so the browser sees a network error; or <strong><code>route.continue()</code></strong> — forward it unchanged (or with modified headers/body). Forgetting to call one causes the request to hang until the test timeout. Always register routes <em>before</em> calling <code>page.goto()</code> so the very first request is intercepted.</p>
<p>For a "spy-and-modify" pattern use <strong><code>route.fetch()</code></strong>: Playwright sends the request to the real server, resolves the response, and hands it back to you so you can modify the body before calling <code>route.fulfill()</code>. URL patterns accept glob strings (<code>**/api/users**</code>), exact strings, or <code>RegExp</code>. <code>context.route()</code> works identically but applies to every page in the browser context, including newly opened ones. Remove a handler with <code>page.unroute(pattern)</code>. Multiple routes matching the same URL fire in <em>LIFO</em> order (last registered wins).</p>
<p>For passive inspection without intercepting, use the event listeners <code>page.on('request', fn)</code> and <code>page.on('response', fn)</code> — they receive the request/response objects but cannot alter them. <code>page.routeFromHAR('recorded.har')</code> replays a previously captured HTTP Archive file, letting you mock an entire API surface without hand-coding responses.</p>`,syntax:`// ── Register before page.goto() ──────────────────────────────
await page.route('**/api/users', route => route.fulfill({
  status: 200,
  contentType: 'application/json',
  json: [{ id: 1, name: 'Alice' }],
}));
await page.goto('/');

// ── Block requests (ads, analytics, images) ───────────────────
await page.route(/google-analytics.com/, route => route.abort());
await page.route('**/*.{png,jpg,gif,svg}',  route => route.abort());

// ── Simulate server errors ────────────────────────────────────
await page.route('**/api/orders', route => route.fulfill({
  status: 503,
  body: 'Service Unavailable',
}));

// ── Modify request headers and pass through ───────────────────
await page.route('**/api/**', route =>
  route.continue({
    headers: { ...route.request().headers(), 'x-test-id': 'suite-42' },
  })
);

// ── Fetch real response then modify ──────────────────────────
await page.route('**/api/products', async route => {
  const res  = await route.fetch();
  const json = await res.json();
  json.push({ id: 999, name: 'Injected Item' });
  await route.fulfill({ json });
});

// ── Inspect request details ───────────────────────────────────
page.on('request', req => {
  console.log(req.method(), req.url());
  console.log(req.headers());
});
page.on('response', res => {
  console.log(res.status(), res.url());
});

// ── Context-wide routing (all pages) ──────────────────────────
await context.route('**/api/**', route => route.continue());

// ── Remove a route handler ────────────────────────────────────
await page.unroute('**/api/users');

// ── Replay recorded HAR ───────────────────────────────────────
await page.routeFromHAR('fixtures/api.har', { url: '**/api/**' });`,examples:[{label:`Mock an API response to test a specific UI state`,code:`import { test, expect } from '@playwright/test';

test('shows empty state when API returns no items', async ({ page }) => {
  // Mock before navigation
  await page.route('**/api/todos', route => route.fulfill({
    status: 200,
    json: [],                    // empty list
  }));

  await page.goto('/todos');

  await expect(page.getByTestId('empty-state')).toBeVisible();
  await expect(page.getByTestId('empty-state')).toContainText('No todos yet');
});

test('shows error banner when API fails', async ({ page }) => {
  await page.route('**/api/todos', route => route.fulfill({
    status: 500,
    body: 'Internal Server Error',
  }));

  await page.goto('/todos');

  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page.getByRole('alert')).toContainText('Something went wrong');
});`,out:`Both states tested without real server errors or empty DB`},{label:`Fetch real response and inject extra data`,code:`import { test, expect } from '@playwright/test';

test('dashboard includes promoted product', async ({ page }) => {
  await page.route('**/api/products', async route => {
    // Forward to the real server
    const res  = await route.fetch();
    const json = await res.json();

    // Inject a promoted item at the top
    const modified = [{ id: 999, name: 'Promoted!', featured: true }, ...json];
    await route.fulfill({ json: modified });
  });

  await page.goto('/dashboard');

  // First item should be our injected product
  await expect(page.locator('.product-card').first()).toContainText('Promoted!');
});`,out:`Real server data augmented with a synthetic record for targeted testing`},{label:`Passive monitoring and blocking analytics`,code:`import { test, expect } from '@playwright/test';

test('checkout fires the order-complete event', async ({ page }) => {
  // Block analytics so they don't slow the test
  await page.route(/analytics|tracking|hotjar/, route => route.abort());

  // Collect API calls made during checkout
  const apiCalls: string[] = [];
  page.on('request', req => {
    if (req.url().includes('/api/')) apiCalls.push(req.url());
  });

  await page.goto('/cart');
  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page).toHaveURL('/confirmation');

  // Verify the order endpoint was called
  expect(apiCalls.some(u => u.includes('/api/orders'))).toBe(true);
});`,out:`Analytics blocked; API call list verified without a network proxy`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">ROUTE HANDLER — DECISION TREE</text>
<rect x="160" y="26" width="100" height="26" fill="#2a2a3d" rx="5" stroke="#6ea6f5" stroke-width="1"/>
<text x="210" y="44" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">browser request</text>
<line x1="210" y1="52" x2="210" y2="68" stroke="#444" stroke-width="1"/>
<rect x="140" y="68" width="140" height="24" fill="#1e1e2e" rx="4" stroke="#f5a623" stroke-width="0.8"/>
<text x="210" y="83" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">page.route() matches?</text>
<line x1="140" y1="80" x2="60" y2="80" stroke="#444" stroke-width="1"/>
<text x="90" y="76" fill="#888" font-size="8">no</text>
<rect x="10" y="68" width="50" height="24" fill="#1a2a1a" rx="4" stroke="#4caf82" stroke-width="0.8"/>
<text x="35" y="83" fill="#4caf82" font-size="8.5" text-anchor="middle">network</text>
<line x1="210" y1="92" x2="210" y2="110" stroke="#444" stroke-width="1"/>
<text x="218" y="103" fill="#888" font-size="8">yes</text>
<rect x="135" y="110" width="150" height="24" fill="#2a2a3d" rx="4" stroke="#c084fc" stroke-width="0.8"/>
<text x="210" y="125" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">handler receives Route</text>
<line x1="135" y1="122" x2="65"  y2="150" stroke="#444" stroke-width="1"/>
<line x1="210" y1="134" x2="210" y2="150" stroke="#444" stroke-width="1"/>
<line x1="285" y1="122" x2="355" y2="150" stroke="#444" stroke-width="1"/>
<rect x="10"  y="150" width="110" height="36" fill="#2a1a1a" rx="5" stroke="#f87171" stroke-width="0.8"/>
<text x="65"  y="165" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">abort()</text>
<text x="65"  y="179" fill="#888" font-size="8" text-anchor="middle">block · network error</text>
<rect x="154" y="150" width="112" height="36" fill="#1a2a1a" rx="5" stroke="#4caf82" stroke-width="0.8"/>
<text x="210" y="165" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">fulfill({ … })</text>
<text x="210" y="179" fill="#888" font-size="8" text-anchor="middle">mock response</text>
<rect x="300" y="150" width="110" height="36" fill="#1a1a2a" rx="5" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="355" y="165" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">continue()</text>
<text x="355" y="179" fill="#888" font-size="8" text-anchor="middle">pass through / modify</text>
<text x="210" y="202" fill="#44445a" font-size="8" text-anchor="middle">route.fetch() → get real response → fulfill() with modified body</text>
</svg>`,analogy:`<p><code>page.route()</code> is a traffic cop standing between your browser and the internet. Every car (request) whose licence plate matches your pattern stops at the checkpoint. The cop has three choices: stamp a fake ID card and send the car home (<code>fulfill</code> — mock response); lower the barrier and turn it back (<code>abort</code> — network error); or wave it through to the real destination (<code>continue</code>). The <em>fetch + fulfill</em> pattern is the cop escorting the car to the real destination, opening the returned parcel, repackaging it with a surprise extra item, then delivering it.</p>
<p><code>context.route()</code> is the same cop but stationed at the city's main highway — covering all traffic from all browser tabs, not just one road. <code>page.on('request')</code> is a surveillance camera: it records every car that passes but cannot stop any of them.</p>`,flow:[`Register routes with <code>page.route(pattern, handler)</code> <em>before</em> <code>page.goto()</code> to intercept from the very first request`,`Inside the handler call exactly one of: <code>route.fulfill()</code> (mock), <code>route.abort()</code> (block), or <code>route.continue()</code> (pass through) — forgetting causes a timeout`,`Pass <code>json: data</code> to <code>fulfill()</code> for automatic JSON serialisation; use <code>status</code> and <code>body</code> for error simulation`,`Use <code>await route.fetch()</code> to forward the request to the real server and receive the real response for modification before calling <code>fulfill()</code>`,`Patterns accept glob strings (<code>**/api/**</code>), exact strings, or <code>RegExp</code> — test your pattern against real URLs before relying on it`,`Use <code>context.route()</code> for context-wide interception covering all pages; use <code>page.on('request')</code> / <code>page.on('response')</code> for passive read-only monitoring`,`Remove a handler with <code>page.unroute(pattern)</code>; multiple handlers matching the same URL fire in LIFO order`]},{id:`visual`,title:`Screenshots, Videos & Traces`,icon:`📸`,explain:`
<p>Playwright provides three complementary tools for debugging and visual verification. <strong>Screenshots</strong> save a PNG of the page or a specific element at a point in time — useful for ad-hoc debugging or as golden baselines for visual regression. <code>expect(page).toHaveScreenshot('name.png')</code> creates a baseline on first run and compares pixel-by-pixel on subsequent runs (with a configurable tolerance). Re-generate baselines with <code>npx playwright test --update-snapshots</code>. Baselines are committed to version control so CI can detect regressions.</p>
<p><strong>Videos</strong> record the entire browser session as a WebM file. The recommended config is <code>video: 'on-first-retry'</code> — only record when a test is retried, keeping disk usage low while still capturing evidence of failures. Access the file after the test with <code>page.video()?.saveAs('path.webm')</code>. <strong>Traces</strong> are the most powerful debugging artifact: a single <code>.zip</code> containing DOM snapshots at every action, a network request waterfall, console messages, and timestamped screenshots. Open with <code>npx playwright show-trace trace.zip</code> or drag onto <code>trace.playwright.dev</code>.</p>
<p>All three can be configured globally in <code>playwright.config.ts</code> via the <code>use</code> block, or started/stopped manually with <code>context.tracing.start()</code> and <code>context.tracing.stop({ path })</code>. The four recording modes are: <code>'off'</code> (never), <code>'on'</code> (always), <code>'on-first-retry'</code> (record only when retried), and <code>'retain-on-failure'</code> (record always but delete if the test passes).</p>`,syntax:`// ── Screenshots ───────────────────────────────────────────────
await page.screenshot({ path: 'debug.png' });
await page.screenshot({ path: 'full.png',  fullPage: true });
await page.screenshot({
  clip: { x: 0, y: 0, width: 800, height: 400 },
});
await locator.screenshot({ path: 'element.png' });

// ── Visual regression ─────────────────────────────────────────
await expect(page).toHaveScreenshot('homepage.png');
await expect(page).toHaveScreenshot('homepage.png', {
  maxDiffPixels: 100,           // allow up to 100 different pixels
  threshold:     0.2,           // per-pixel colour distance 0–1
});
await expect(locator).toHaveScreenshot('button.png');
// Regenerate baselines: npx playwright test --update-snapshots

// ── Video config (playwright.config.ts) ───────────────────────
// use: { video: 'on-first-retry' }
// use: { video: 'retain-on-failure' }
// use: { video: 'on' }

// Accessing video in test:
const video = page.video();
await video?.saveAs('recordings/my-test.webm');
const path = await video?.path();  // temp path — call after test

// ── Trace config (playwright.config.ts) ───────────────────────
// use: { trace: 'on-first-retry' }
// use: { trace: 'retain-on-failure' }

// ── Manual trace ──────────────────────────────────────────────
await context.tracing.start({
  screenshots: true,   // capture screenshots at each action
  snapshots:   true,   // capture DOM snapshots for hover inspection
  sources:     true,   // embed test source code
});
await page.goto('/');
await page.getByRole('button').click();
await context.tracing.stop({ path: 'trace.zip' });

// View: npx playwright show-trace trace.zip
// Or:   drag trace.zip onto trace.playwright.dev`,examples:[{label:`Visual regression: baseline creation and comparison`,code:`import { test, expect } from '@playwright/test';

test('homepage matches visual baseline', async ({ page }) => {
  await page.goto('/');

  // Mask dynamic content to avoid flaky diffs
  await expect(page).toHaveScreenshot('homepage.png', {
    mask: [page.getByTestId('live-ticker'), page.locator('.timestamp')],
    maxDiffPixels: 50,
  });
});

test('product card visual check', async ({ page }) => {
  await page.goto('/products/1');
  const card = page.getByTestId('product-card');

  await expect(card).toHaveScreenshot('product-card.png');
});

// First run: creates __snapshots__/homepage-1.png baseline
// Next runs: compares pixel-by-pixel
// Update:    npx playwright test --update-snapshots`,out:`Baselines created on first run; diffs reported with an overlay image on failure`},{label:`Manual trace for a specific failing scenario`,code:`import { test } from '@playwright/test';

test('checkout flow trace', async ({ page, context }) => {
  // Start recording
  await context.tracing.start({
    screenshots: true,
    snapshots:   true,
    sources:     true,
  });

  await page.goto('/cart');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByLabel('Card number').fill('4111111111111111');
  await page.getByRole('button', { name: 'Pay' }).click();

  // Save trace regardless of outcome
  await context.tracing.stop({ path: 'test-results/checkout-trace.zip' });
});

// View: npx playwright show-trace test-results/checkout-trace.zip`,out:`Trace zip contains DOM snapshots, network timeline, console logs, and screenshots`},{label:`Screenshot on demand with clip and element capture`,code:`import { test } from '@playwright/test';

test('capture specific regions', async ({ page }) => {
  await page.goto('/dashboard');

  // Full page (scrollable content included)
  await page.screenshot({
    path:     'test-results/dashboard-full.png',
    fullPage: true,
  });

  // Clip to header region only
  await page.screenshot({
    path: 'test-results/header.png',
    clip: { x: 0, y: 0, width: 1280, height: 80 },
  });

  // Single element
  const chart = page.getByTestId('revenue-chart');
  await chart.screenshot({ path: 'test-results/revenue-chart.png' });
});`,out:`Three different screenshot modes: full page, clipped region, single element`}],svgHTML:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="210" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">THREE DEBUGGING ARTIFACTS</text>
<rect x="10"  y="26" width="122" height="86" fill="#1a2a1a" rx="6" stroke="#4caf82" stroke-width="0.8"/>
<text x="71"  y="43" fill="#4caf82" font-size="10" font-weight="bold" text-anchor="middle">📸 Screenshot</text>
<text x="71"  y="57" fill="#888" font-size="8" text-anchor="middle">page.screenshot()</text>
<text x="71"  y="68" fill="#888" font-size="8" text-anchor="middle">locator.screenshot()</text>
<text x="71"  y="79" fill="#888" font-size="8" text-anchor="middle">toHaveScreenshot()</text>
<text x="71"  y="92" fill="#4caf82" font-size="7.5" font-style="italic" text-anchor="middle">visual regression</text>
<text x="71"  y="104" fill="#555570" font-size="7.5" text-anchor="middle">commit baselines to VCS</text>
<rect x="149" y="26" width="122" height="86" fill="#1a1a2a" rx="6" stroke="#6ea6f5" stroke-width="0.8"/>
<text x="210" y="43" fill="#6ea6f5" font-size="10" font-weight="bold" text-anchor="middle">🎬 Video</text>
<text x="210" y="57" fill="#888" font-size="8" text-anchor="middle">page.video()</text>
<text x="210" y="68" fill="#888" font-size="8" text-anchor="middle">saveAs() · path()</text>
<text x="210" y="79" fill="#888" font-size="8" text-anchor="middle">video: 'on-first-retry'</text>
<text x="210" y="92" fill="#6ea6f5" font-size="7.5" font-style="italic" text-anchor="middle">continuous recording</text>
<text x="210" y="104" fill="#555570" font-size="7.5" text-anchor="middle">WebM format</text>
<rect x="288" y="26" width="122" height="86" fill="#2a1a2a" rx="6" stroke="#c084fc" stroke-width="0.8"/>
<text x="349" y="43" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">🔍 Trace</text>
<text x="349" y="57" fill="#888" font-size="8" text-anchor="middle">tracing.start/stop()</text>
<text x="349" y="68" fill="#888" font-size="8" text-anchor="middle">DOM snapshots</text>
<text x="349" y="79" fill="#888" font-size="8" text-anchor="middle">network · console</text>
<text x="349" y="92" fill="#c084fc" font-size="7.5" font-style="italic" text-anchor="middle">most powerful debug</text>
<text x="349" y="104" fill="#555570" font-size="7.5" text-anchor="middle">show-trace trace.zip</text>
<text x="10"  y="124" fill="#f5a623" font-size="9" font-weight="bold">Recording modes (trace &amp; video)</text>
<rect x="10"  y="132" width="90" height="30" fill="#2a2a3d" rx="4"/>
<text x="55"  y="145" fill="#e0e0e0" font-size="8.5" text-anchor="middle">off</text>
<text x="55"  y="157" fill="#555570" font-size="7.5" text-anchor="middle">never record</text>
<rect x="108" y="132" width="90" height="30" fill="#2a2a3d" rx="4"/>
<text x="153" y="145" fill="#e0e0e0" font-size="8.5" text-anchor="middle">on</text>
<text x="153" y="157" fill="#555570" font-size="7.5" text-anchor="middle">always record</text>
<rect x="206" y="132" width="90" height="30" fill="#2a2a3d" rx="4"/>
<text x="251" y="145" fill="#e0e0e0" font-size="8" text-anchor="middle">on-first-retry</text>
<text x="251" y="157" fill="#555570" font-size="7.5" text-anchor="middle">record on retry</text>
<rect x="304" y="132" width="106" height="30" fill="#2a2a3d" rx="4"/>
<text x="357" y="145" fill="#e0e0e0" font-size="8" text-anchor="middle">retain-on-failure</text>
<text x="357" y="157" fill="#555570" font-size="7.5" text-anchor="middle">keep only if failed</text>
<text x="210" y="180" fill="#44445a" font-size="8.5" text-anchor="middle">npx playwright show-trace trace.zip  ·  trace.playwright.dev</text>
<text x="210" y="195" fill="#44445a" font-size="8.5" text-anchor="middle">--update-snapshots  ·  maxDiffPixels  ·  threshold  ·  mask</text>
</svg>`,analogy:`<p>Think of a crime scene investigation. <strong>Screenshots</strong> are the crime scene photographs — a snapshot of exactly what things looked like at a precise moment. <strong>Videos</strong> are the CCTV recording — continuous footage from start to finish, showing every movement. <strong>Traces</strong> are the full forensics kit: not just photographs but also fingerprints (DOM snapshots you can hover to inspect), every phone call made (network requests with full payloads), every note left behind (console messages), and a precise event timeline. The Trace Viewer is the detective's evidence board where you replay the scene step-by-step and jump to any point in time.</p>
<p>Visual regression with <code>toHaveScreenshot()</code> is like a building inspector who photographs each floor on opening day, locks the photos in a vault, and returns on subsequent visits to compare: even one misplaced tile fails the inspection. <code>--update-snapshots</code> is giving the inspector a new set of reference photos after a deliberate renovation.</p>`,flow:[`Use <code>page.screenshot({ path: 'debug.png' })</code> for ad-hoc debugging; <code>locator.screenshot()</code> to capture a single element`,`Use <code>expect(page).toHaveScreenshot('name.png')</code> for visual regression — first run creates the baseline, subsequent runs compare it`,`Pass <code>mask: [locator]</code> and <code>maxDiffPixels</code> to toHaveScreenshot() to handle dynamic content and tolerate minor rendering differences`,`Run <code>npx playwright test --update-snapshots</code> to regenerate baselines after deliberate UI changes; commit the baseline files to VCS`,`Configure <code>video: 'on-first-retry'</code> and <code>trace: 'on-first-retry'</code> in the config <code>use</code> block for CI-friendly artifact capture`,`For manual control call <code>context.tracing.start({ screenshots, snapshots })</code> before actions and <code>context.tracing.stop({ path: 'trace.zip' })</code> to save`,`Open a trace with <code>npx playwright show-trace trace.zip</code> to see DOM snapshots, network waterfall, console logs, and a full action timeline`]},{id:`pom`,title:`Page Object Model`,icon:`🏗️`,explain:`
<p>The Page Object Model (POM) is a design pattern that encapsulates a page's locators and user interactions into a reusable TypeScript class. Instead of repeating <code>page.getByRole('button', { name: 'Sign in' })</code> across dozens of tests, you create a <code>LoginPage</code> class with a <code>signIn(email, password)</code> method. When the UI changes — say, the button label becomes "Log in" — you fix it in one class and every test is automatically correct. Tests become short, readable, and resilient: they describe <em>what</em> the user does, not <em>how</em> the DOM is structured.</p>
<p>A page object has three parts: a <strong>constructor</strong> that receives <code>page</code> (and optionally <code>context</code> or <code>request</code>); <strong>locator properties</strong> declared as <code>readonly</code> using <code>page.getByRole(…)</code> etc. — these are lazy and re-evaluated on every access, so they always reflect the current DOM; and <strong>action methods</strong> that group related interactions into meaningful steps. The golden rule is: <em>actions in the page object, assertions in the test</em>. Page objects are action libraries, not validators — mixing in <code>expect()</code> calls makes them harder to reuse and debug.</p>
<p>Page objects pair perfectly with Playwright's fixture system. Define a fixture that <code>new</code>s the page object and passes it via <code>use()</code>, then any test in the suite can request it by name. For complex UIs, break your page objects into <strong>component objects</strong> — a <code>NavigationBar</code>, a <code>DataTable</code>, a <code>Modal</code> — and compose them inside the full page object. This mirrors how real UIs are built from components.</p>`,syntax:`// ── pages/LoginPage.ts ───────────────────────────────────────
import { type Page } from '@playwright/test';

export class LoginPage {
  // Constructor receives the Playwright Page object
  constructor(private readonly page: Page) {}

  // ── Locators (lazy, re-evaluated on each access) ──────────
  readonly emailInput    = this.page.getByLabel('Email');
  readonly passwordInput = this.page.getByLabel('Password');
  readonly submitButton  = this.page.getByRole('button', { name: 'Sign in' });
  readonly errorMessage  = this.page.getByRole('alert');

  // ── Actions (async, orchestrate interactions) ─────────────
  async goto() {
    await this.page.goto('/login');
  }

  async signIn(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async signInAndExpectDashboard(email: string, password: string) {
    await this.signIn(email, password);
    await this.page.waitForURL('/dashboard');
  }
}

// ── Fixture-based integration (fixtures/pages.ts) ─────────────
import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

// ── Usage in tests ─────────────────────────────────────────────
import { test, expect } from './fixtures/pages';

test('valid login navigates to dashboard', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.signIn('user@example.com', 'secret');
  // Assertions stay in the test, not the page object
  await expect(page).toHaveURL('/dashboard');
});`,examples:[{label:`Full LoginPage class with fixture`,code:`// pages/LoginPage.ts
import { type Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  readonly emailInput    = this.page.getByLabel('Email');
  readonly passwordInput = this.page.getByLabel('Password');
  readonly submitBtn     = this.page.getByRole('button', { name: 'Sign in' });
  readonly errorAlert    = this.page.getByRole('alert');

  async goto()                          { await this.page.goto('/login'); }
  async fillEmail(e: string)            { await this.emailInput.fill(e); }
  async fillPassword(p: string)         { await this.passwordInput.fill(p); }
  async submit()                        { await this.submitBtn.click(); }
  async signIn(email: string, pw: string) {
    await this.fillEmail(email);
    await this.fillPassword(pw);
    await this.submit();
  }
}

// Test
test('invalid login shows error', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.signIn('bad@test.com', 'wrong');
  await expect(loginPage.errorAlert).toBeVisible();
  await expect(loginPage.errorAlert).toContainText('Invalid credentials');
});`,out:`All DOM details hidden in the page object; test reads like a user story`},{label:`Nested component objects`,code:`// components/Header.ts
import { type Page } from '@playwright/test';

export class Header {
  constructor(private readonly page: Page) {}
  readonly nav          = this.page.locator('header nav');
  readonly userMenu     = this.page.getByTestId('user-menu');
  readonly signOutBtn   = this.page.getByRole('menuitem', { name: 'Sign out' });

  async openUserMenu()  { await this.userMenu.click(); }
  async signOut() {
    await this.openUserMenu();
    await this.signOutBtn.click();
  }
}

// pages/DashboardPage.ts
import { type Page } from '@playwright/test';
import { Header } from '../components/Header';

export class DashboardPage {
  readonly header = new Header(this.page);  // composition
  readonly statsCard = this.page.getByTestId('stats-card');

  constructor(private readonly page: Page) {}
  async goto() { await this.page.goto('/dashboard'); }
}

// Test
test('sign out from dashboard', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();
  await dashboard.header.signOut();
  await expect(page).toHaveURL('/login');
});`,out:`Header component is reused across DashboardPage, ProfilePage, and SettingsPage`},{label:`Multi-page object fixture for an entire user journey`,code:`// fixtures/pages.ts
import { test as base } from '@playwright/test';
import { LoginPage }     from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CheckoutPage }  from '../pages/CheckoutPage';

type PageObjects = {
  loginPage:     LoginPage;
  dashboardPage: DashboardPage;
  checkoutPage:  CheckoutPage;
};

export const test = base.extend<PageObjects>({
  loginPage:     async ({ page }, use) => use(new LoginPage(page)),
  dashboardPage: async ({ page }, use) => use(new DashboardPage(page)),
  checkoutPage:  async ({ page }, use) => use(new CheckoutPage(page)),
});

export { expect } from '@playwright/test';

// Test using multiple page objects
test('complete purchase flow', async ({ loginPage, dashboardPage, checkoutPage, page }) => {
  await loginPage.goto();
  await loginPage.signIn('user@example.com', 'secret');
  await dashboardPage.addItemToCart('Widget Pro');
  await checkoutPage.completePayment({ card: '4111111111111111' });
  await expect(page).toHaveURL('/confirmation');
});`,out:`Multi-step journey expressed as readable page object method calls`}],svgHTML:`<svg viewBox="0 0 420 215" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
<rect width="420" height="215" fill="#1e1e2e" rx="8"/>
<text x="210" y="18" fill="#555570" font-size="10" font-weight="bold" text-anchor="middle">PAGE OBJECT MODEL — ANATOMY</text>
<rect x="10" y="26" width="400" height="56" fill="#1a2a1a" rx="5" stroke="#4caf82" stroke-width="0.8"/>
<text x="210" y="42" fill="#4caf82" font-size="9" font-weight="bold" text-anchor="middle">LoginPage class</text>
<text x="50"  y="57" fill="#888" font-size="8.5" text-anchor="middle">constructor(page)</text>
<text x="210" y="57" fill="#888" font-size="8.5" text-anchor="middle">readonly locators</text>
<text x="365" y="57" fill="#888" font-size="8.5" text-anchor="middle">async actions</text>
<text x="50"  y="70" fill="#555570" font-size="8" text-anchor="middle">receives Page</text>
<text x="210" y="70" fill="#555570" font-size="8" text-anchor="middle">getByRole / getByLabel</text>
<text x="365" y="70" fill="#555570" font-size="8" text-anchor="middle">goto() signIn() submit()</text>
<line x1="10" y1="90" x2="410" y2="90" stroke="#333" stroke-width="0.5"/>
<text x="210" y="104" fill="#f5a623" font-size="9" font-weight="bold" text-anchor="middle">Page objects ↔ Tests separation</text>
<rect x="10"  y="112" width="190" height="40" fill="#1a1a2a" rx="4" stroke="#6ea6f5" stroke-width="0.7"/>
<text x="105" y="127" fill="#6ea6f5" font-size="9" font-weight="bold" text-anchor="middle">Page Object</text>
<text x="105" y="141" fill="#888" font-size="8" text-anchor="middle">ACTIONS only · no expect()</text>
<rect x="220" y="112" width="190" height="40" fill="#2a1a1a" rx="4" stroke="#f87171" stroke-width="0.7"/>
<text x="315" y="127" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Test</text>
<text x="315" y="141" fill="#888" font-size="8" text-anchor="middle">ASSERTIONS only · calls PO methods</text>
<line x1="200" y1="132" x2="220" y2="132" stroke="#f5a623" stroke-width="1.5" marker-end="url(#arr)"/>
<text x="210" y="128" fill="#f5a623" font-size="8" text-anchor="middle">calls</text>
<rect x="10"  y="162" width="190" height="40" fill="#2a2a3d" rx="4" stroke="#c084fc" stroke-width="0.7"/>
<text x="105" y="177" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">Fixture</text>
<text x="105" y="191" fill="#888" font-size="8" text-anchor="middle">new LoginPage(page) → use()</text>
<rect x="220" y="162" width="190" height="40" fill="#2a2a3d" rx="4" stroke="#22d3ee" stroke-width="0.7"/>
<text x="315" y="177" fill="#22d3ee" font-size="9" font-weight="bold" text-anchor="middle">Component Object</text>
<text x="315" y="191" fill="#888" font-size="8" text-anchor="middle">Header · Modal · DataTable</text>
<text x="210" y="210" fill="#44445a" font-size="8" text-anchor="middle">Actions in PO · Assertions in test · Locators as readonly lazy properties</text>
</svg>`,analogy:`<p>Without POM, your tests are like a tourist who memorises exact street-level directions to every destination: "turn left at the red building, go three blocks, enter the third door on the right." When the city installs a new building that shifts the numbering, all 50 sets of directions break. With POM, you hire a <em>tour guide</em> (the page object). The guide knows where everything is and how to get there — you just say <code>await loginPage.signIn(email, password)</code>. When the sign-in button moves, only the guide needs updating, not every tourist who used those directions.</p>
<p>The <code>readonly</code> locator properties are like the guide's map — it's always the latest edition, not a photocopy from last year. Component objects are like specialised sub-guides: the hotel lobby guide handles check-in, the restaurant guide handles dinner, and the city guide composes them all. You don't ask the hotel guide how to find a restaurant.</p>`,flow:[`Create one class per page or feature with a <code>constructor(private readonly page: Page)</code>`,`Declare locators as <code>readonly</code> class properties using <code>page.getByRole(…)</code> — they are lazy and re-evaluated on each access`,`Define <code>async</code> action methods that group related interactions into meaningful steps (<code>goto()</code>, <code>signIn()</code>, <code>placeOrder()</code>)`,`Keep <code>expect()</code> assertions in the test, not in the page object — POs are action libraries, not validators`,`Integrate with fixtures: create a fixture that <code>new</code>s the page object and passes it via <code>use()</code> so tests can request it by name`,`For shared UI components (header, modal, table), create component objects and compose them as properties of the full page object`,`When the UI changes, update one class — every test that uses it is automatically correct`]},{id:`auth`,title:`Authentication & State`,icon:`🔐`,explain:`
<p><strong>Authentication & State</strong> management is one of Playwright's killer features. Instead of logging in before <em>every single test</em>, Playwright lets you save a browser context's cookies, localStorage, and sessionStorage to a JSON file — then reload that state instantly in any subsequent test or project. A login that takes 2 seconds per test costs 200 seconds on 100 tests; with state reuse it costs 2 seconds total.</p>

<p>The recommended pattern has three parts. First, a dedicated <strong>auth setup project</strong> (often <code>auth.setup.ts</code>) logs in once and calls <code>await page.context().storageState({ path: 'playwright/.auth/user.json' })</code> to persist the session. Second, real test projects list that setup project in their <code>dependencies</code> array in <code>playwright.config.ts</code>, so Playwright runs auth first and test projects only start after the state file exists. Third, each test project sets <code>storageState: 'playwright/.auth/user.json'</code> in its <code>use</code> block, so every new browser context starts pre-authenticated.</p>

<p>Beyond cookies and storage, Playwright handles HTTP Basic Auth via the <code>httpCredentials</code> config option, supports multiple roles (admin, editor, viewer) by maintaining multiple state files, and gives you fine-grained control over cookies, localStorage, and sessionStorage through <code>context.cookies()</code>, <code>context.addCookies()</code>, and <code>page.evaluate(() => localStorage.setItem(…))</code>. This makes end-to-end tests of role-based access control straightforward.</p>
`,syntax:`// ── 1. Save auth state after login ──────────────────────────────
await page.goto('/login');
await page.getByLabel('Email').fill('user@example.com');
await page.getByLabel('Password').fill('secret');
await page.getByRole('button', { name: 'Sign in' }).click();
await page.waitForURL('/dashboard');
await page.context().storageState({ path: 'playwright/.auth/user.json' });

// ── 2. playwright.config.ts — setup project + dependency ─────────
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  projects: [
    { name: 'setup', testMatch: /auth\\.setup\\.ts/ },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});

// ── 3. auth.setup.ts ─────────────────────────────────────────────
import { test as setup } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill(process.env.TEST_EMAIL!);
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('/dashboard');
  await page.context().storageState({ path: authFile });
});

// ── 4. Multiple roles ────────────────────────────────────────────
setup('authenticate as admin', async ({ page }) => {
  await page.context().storageState({ path: 'playwright/.auth/admin.json' });
});

// ── 5. HTTP Basic Auth ────────────────────────────────────────────
// In config use block:
use: { httpCredentials: { username: 'user', password: 'pass' } }

// ── 6. Cookie management ──────────────────────────────────────────
const cookies = await context.cookies();
await context.addCookies([{
  name: 'sid', value: 'abc', domain: 'example.com', path: '/'
}]);
await context.clearCookies();

// ── 7. localStorage / sessionStorage ─────────────────────────────
await page.evaluate(() => localStorage.setItem('token', 'abc123'));
const token = await page.evaluate(() => localStorage.getItem('token'));
await page.evaluate(() => sessionStorage.clear());

// ── 8. API-based login (faster, no UI) ────────────────────────────
const apiCtx = await request.newContext({ baseURL: 'https://api.example.com' });
const resp = await apiCtx.post('/auth/login', { data: { email, password } });
const { sessionToken } = await resp.json();
await page.context().addCookies([{
  name: 'session', value: sessionToken, domain: 'example.com', path: '/'
}]);
await page.context().storageState({ path: authFile });
await apiCtx.dispose();
`,examples:[{label:`Basic login & save state`,code:`// auth.setup.ts
import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('alice');
  await page.getByLabel('Password').fill('hunter2');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\\/dashboard/);

  await page.context().storageState({
    path: 'playwright/.auth/alice.json',
  });
});`,out:`→ playwright/.auth/alice.json created with cookies & localStorage`},{label:`Multiple roles in parallel projects`,code:`// playwright.config.ts
projects: [
  { name: 'setup:user',  testMatch: /user\\.setup\\.ts/  },
  { name: 'setup:admin', testMatch: /admin\\.setup\\.ts/ },
  {
    name: 'user-tests',
    use: { storageState: 'playwright/.auth/user.json' },
    dependencies: ['setup:user'],
  },
  {
    name: 'admin-tests',
    use: { storageState: 'playwright/.auth/admin.json' },
    dependencies: ['setup:admin'],
  },
],

// Override for a single test
test.use({ storageState: 'playwright/.auth/admin.json' });
test('admin can delete posts', async ({ page }) => {
  await page.goto('/posts');
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});`,out:`→ User and admin tests run in parallel, each with correct session`},{label:`API-based login (no UI, fastest)`,code:`// auth.setup.ts
import { test as setup, request } from '@playwright/test';

setup('authenticate via API', async ({ page }) => {
  const apiCtx = await request.newContext({
    baseURL: 'https://example.com',
  });

  const resp = await apiCtx.post('/api/auth/login', {
    data: { email: 'user@example.com', password: 'secret' },
  });
  const body = await resp.json();

  await page.context().addCookies([{
    name:   'session',
    value:  body.sessionToken,
    domain: 'example.com',
    path:   '/',
  }]);

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });

  await apiCtx.dispose();
});`,out:`→ Login completes via API in ~100ms vs 1-2 s through the UI`}],svgHTML:`<svg viewBox="0 0 780 370" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="13">
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#888"/>
    </marker>
  </defs>
  <text x="390" y="28" text-anchor="middle" font-size="16" font-weight="bold" fill="#e2e8f0">Auth State Flow</text>

  <rect x="20" y="50" width="200" height="80" rx="10" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="76" text-anchor="middle" font-weight="bold" fill="#93c5fd">setup project</text>
  <text x="120" y="96" text-anchor="middle" fill="#94a3b8">auth.setup.ts</text>
  <text x="120" y="114" text-anchor="middle" fill="#94a3b8">logs in once</text>

  <rect x="290" y="50" width="200" height="80" rx="10" fill="#1a3a2a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="390" y="76" text-anchor="middle" font-weight="bold" fill="#86efac">auth/user.json</text>
  <text x="390" y="96" text-anchor="middle" fill="#94a3b8">cookies</text>
  <text x="390" y="114" text-anchor="middle" fill="#94a3b8">localStorage</text>

  <line x1="220" y1="90" x2="288" y2="90" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="254" y="83" text-anchor="middle" fill="#64748b" font-size="11">storageState()</text>

  <rect x="560" y="50" width="200" height="80" rx="10" fill="#2d1f3f" stroke="#a855f7" stroke-width="1.5"/>
  <text x="660" y="76" text-anchor="middle" font-weight="bold" fill="#c084fc">test project</text>
  <text x="660" y="96" text-anchor="middle" fill="#94a3b8">chromium / firefox</text>
  <text x="660" y="114" text-anchor="middle" fill="#94a3b8">dependencies: [setup]</text>

  <line x1="490" y1="90" x2="558" y2="90" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="524" y="83" text-anchor="middle" fill="#64748b" font-size="11">loads state</text>

  <rect x="20" y="170" width="740" height="170" rx="10" fill="#1e2233" stroke="#475569" stroke-width="1"/>
  <text x="40" y="195" font-weight="bold" fill="#94a3b8">playwright.config.ts key options</text>

  <rect x="40" y="208" width="200" height="60" rx="8" fill="#162032" stroke="#38bdf8" stroke-width="1"/>
  <text x="140" y="228" text-anchor="middle" font-weight="bold" fill="#7dd3fc">httpCredentials</text>
  <text x="140" y="246" text-anchor="middle" fill="#94a3b8">{ username, password }</text>
  <text x="140" y="262" text-anchor="middle" fill="#64748b">HTTP Basic Auth</text>

  <rect x="270" y="208" width="200" height="60" rx="8" fill="#162032" stroke="#22c55e" stroke-width="1"/>
  <text x="370" y="228" text-anchor="middle" font-weight="bold" fill="#86efac">storageState</text>
  <text x="370" y="246" text-anchor="middle" fill="#94a3b8">path to JSON file</text>
  <text x="370" y="262" text-anchor="middle" fill="#64748b">in use: block</text>

  <rect x="500" y="208" width="240" height="60" rx="8" fill="#162032" stroke="#f59e0b" stroke-width="1"/>
  <text x="620" y="228" text-anchor="middle" font-weight="bold" fill="#fcd34d">dependencies: [setup]</text>
  <text x="620" y="246" text-anchor="middle" fill="#94a3b8">run setup project first</text>
  <text x="620" y="262" text-anchor="middle" fill="#64748b">guarantees state file exists</text>

  <text x="40" y="305" font-weight="bold" fill="#94a3b8">Context API</text>
  <text x="40" y="325" fill="#c084fc">context.cookies()</text>
  <text x="240" y="325" fill="#c084fc">context.addCookies([])</text>
  <text x="450" y="325" fill="#c084fc">context.clearCookies()</text>
  <text x="40" y="345" fill="#86efac">page.evaluate(() =&gt; localStorage.setItem(...))</text>
  <text x="420" y="345" fill="#7dd3fc">page.evaluate(() =&gt; sessionStorage.clear())</text>
</svg>`,analogy:`<p>Think of <strong>storageState</strong> like a <em>hotel key card</em>. The front desk (auth setup) does the identity check once and programs a key card for you. Every time you return to your room (each test), you just tap the card — no re-checking ID. The key card (JSON file) carries all the access rights (cookies, tokens) the hotel system recognises. Different guests (admin, regular user) get different key cards, and the hotel can revoke or replace them at any time.</p>`,flow:[`auth.setup.ts navigates to the login page and fills credentials`,`Successful login triggers a redirect — waitForURL confirms auth succeeded`,`context.storageState() serialises cookies + localStorage to playwright/.auth/user.json`,`playwright.config.ts lists the setup project in dependencies of real test projects`,`Before real tests start, Playwright runs the setup project to generate the state file`,`Each new browser context in test projects loads the state file automatically`,`Tests begin already authenticated — no login step needed in individual tests`]},{id:`parallel`,title:`Parallel Execution`,icon:`⚡`,explain:`
<p><strong>Parallel Execution</strong> is how Playwright compresses a 10-minute test suite into a 2-minute CI check. Playwright uses <em>workers</em> — independent Node.js processes, each with its own browser — to run tests concurrently. By default, test files run in parallel (each file gets its own worker) but tests <em>within</em> a file run serially. Setting <code>fullyParallel: true</code> breaks that file-level grouping and runs every individual test concurrently, which is the fastest mode when tests have no shared state.</p>

<p>The <code>workers</code> config option (or <code>--workers N</code> CLI flag) controls how many parallel workers run simultaneously. The default is half the number of logical CPU cores. <code>test.describe.parallel()</code> opts a describe block into parallel within its file; <code>test.describe.serial()</code> forces sequential within a block even when fullyParallel is on — useful for ordered flows like "create then edit then delete". Worker-scoped fixtures (<code>scope: 'worker'</code>) are created once per worker and shared across all tests in that worker, enabling expensive setup (like a signed-in browser context) to be amortised.</p>

<p>For very large suites, <strong>sharding</strong> splits the test suite across multiple CI machines: each machine runs <code>npx playwright test --shard=1/3</code> (or 2/3, 3/3). Reports from all shards are merged with <code>npx playwright merge-reports</code> into a single HTML report. Combining sharding with <code>--reporter=blob</code> on each shard is the standard pattern for distributed CI at scale.</p>
`,syntax:`// ── playwright.config.ts ─────────────────────────────────────
import { defineConfig } from '@playwright/test';
export default defineConfig({
  workers: 4,           // 4 parallel workers
  fullyParallel: true,  // every test runs independently (fastest)
  retries: 2,           // retry flaky tests per worker
  maxFailures: 10,      // stop the suite after 10 failures

  // ── Serial vs parallel within a file ───────────────────────
  // Default: tests inside a file run serially
  // fullyParallel: true — every test runs in its own worker

  // ── Per-describe overrides ──────────────────────────────────
  test.describe.parallel('group', () => {
    // these run concurrently even without fullyParallel
  });

  test.describe.serial('ordered flow', () => {
    // these always run in order even with fullyParallel
    test('create', async ({ page }) => { /* … */ });
    test('edit',   async ({ page }) => { /* … */ });
    test('delete', async ({ page }) => { /* … */ });
  });
});

// ── CLI flags ─────────────────────────────────────────────────
npx playwright test --workers=8       // override worker count
npx playwright test --workers=50%     // half of CPU cores
npx playwright test --fully-parallel  // enable from CLI
npx playwright test --shard=1/3      // run shard 1 of 3

// ── Sharding pattern (CI) ────────────────────────────────────
// Machine 1: npx playwright test --shard=1/3 --reporter=blob
// Machine 2: npx playwright test --shard=2/3 --reporter=blob
// Machine 3: npx playwright test --shard=3/3 --reporter=blob
// Merge:     npx playwright merge-reports --reporter=html ./blob-report

// ── Worker-scoped fixture (shared per worker) ─────────────────
import { test as base } from '@playwright/test';
const test = base.extend({
  expensiveClient: [async ({}, use) => {
    const client = await createHeavyClient();
    await use(client);
    await client.close();
  }, { scope: 'worker' }],   // created once per worker
});

// ── Avoid shared mutable state ────────────────────────────────
// BAD: shared counter between parallel tests
let count = 0;
test('a', async () => { count++; }); // race condition
// GOOD: each test is self-contained
test('b', async ({ page }) => { /* uses only page-local state */ });
`,examples:[{label:`fullyParallel + workers config`,code:`// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,   // every test in its own worker
  workers: process.env.CI ? 4 : undefined, // 4 in CI, auto locally
  retries: process.env.CI ? 2 : 0,         // retry only in CI
  reporter: process.env.CI
    ? [['blob'], ['github']]   // blob for merge-reports, github annotations
    : [['html', { open: 'never' }]],

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ],
});`,out:`→ Each test runs in parallel across chromium and firefox workers`},{label:`serial describe for ordered flows`,code:`import { test, expect } from '@playwright/test';

// These three tests must run in order — use serial
test.describe.serial('blog post lifecycle', () => {
  let postId: string;

  test('create post', async ({ page }) => {
    await page.goto('/admin/posts/new');
    await page.getByLabel('Title').fill('Hello World');
    await page.getByRole('button', { name: 'Publish' }).click();
    await page.waitForURL(/\\/posts\\/(\\d+)/);
    postId = page.url().split('/').pop()!;
  });

  test('edit post', async ({ page }) => {
    await page.goto(\`/admin/posts/\${postId}/edit\`);
    await page.getByLabel('Title').fill('Hello World (revised)');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Saved')).toBeVisible();
  });

  test('delete post', async ({ page }) => {
    await page.goto(\`/admin/posts/\${postId}\`);
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page).toHaveURL('/admin/posts');
  });
});`,out:`→ Create → Edit → Delete runs in guaranteed sequence even with fullyParallel`},{label:`Sharding across CI machines`,code:`# GitHub Actions parallel sharding example
jobs:
  test:
    strategy:
      matrix:
        shardIndex: [1, 2, 3]
        shardTotal: [3]
    steps:
      - run: npx playwright test
               --shard=\${{ matrix.shardIndex }}/\${{ matrix.shardTotal }}
               --reporter=blob
      - uses: actions/upload-artifact@v4
        with:
          name: blob-report-\${{ matrix.shardIndex }}
          path: blob-report/

  merge-reports:
    needs: test
    steps:
      - uses: actions/download-artifact@v4
        with: { pattern: blob-report-*, merge-multiple: true }
      - run: npx playwright merge-reports
               --reporter html ./blob-report
      - uses: actions/upload-artifact@v4
        with: { name: html-report, path: playwright-report/ }`,out:`→ Suite split across 3 machines, merged into one HTML report`}],svgHTML:`<svg viewBox="0 0 780 380" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="12">
  <defs>
    <marker id="ph" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#888"/>
    </marker>
  </defs>

  <text x="390" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="#e2e8f0">Parallel Execution Modes</text>

  <!-- Serial (default) box -->
  <rect x="20" y="45" width="220" height="140" rx="8" fill="#1e2233" stroke="#475569" stroke-width="1.5"/>
  <text x="130" y="68" text-anchor="middle" font-weight="bold" fill="#94a3b8">Default (per-file serial)</text>
  <rect x="35" y="80" width="190" height="28" rx="4" fill="#1e3a5f" stroke="#3b82f6"/>
  <text x="130" y="99" text-anchor="middle" fill="#93c5fd">File A — W1: T1→T2→T3</text>
  <rect x="35" y="114" width="190" height="28" rx="4" fill="#1a3a2a" stroke="#22c55e"/>
  <text x="130" y="133" text-anchor="middle" fill="#86efac">File B — W2: T1→T2→T3</text>
  <rect x="35" y="148" width="190" height="28" rx="4" fill="#2d1f3f" stroke="#a855f7"/>
  <text x="130" y="167" text-anchor="middle" fill="#c084fc">File C — W3: T1→T2→T3</text>

  <!-- fullyParallel box -->
  <rect x="280" y="45" width="220" height="140" rx="8" fill="#1e2233" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="390" y="68" text-anchor="middle" font-weight="bold" fill="#fcd34d">fullyParallel: true</text>
  <rect x="295" y="80" width="90" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6"/>
  <text x="340" y="96" text-anchor="middle" fill="#93c5fd">T1 W1</text>
  <rect x="295" y="108" width="90" height="22" rx="4" fill="#1a3a2a" stroke="#22c55e"/>
  <text x="340" y="124" text-anchor="middle" fill="#86efac">T2 W2</text>
  <rect x="295" y="136" width="90" height="22" rx="4" fill="#2d1f3f" stroke="#a855f7"/>
  <text x="340" y="152" text-anchor="middle" fill="#c084fc">T3 W3</text>
  <rect x="393" y="80" width="90" height="22" rx="4" fill="#1e3a5f" stroke="#38bdf8"/>
  <text x="438" y="96" text-anchor="middle" fill="#7dd3fc">T4 W4</text>
  <rect x="393" y="108" width="90" height="22" rx="4" fill="#1a3a2a" stroke="#34d399"/>
  <text x="438" y="124" text-anchor="middle" fill="#6ee7b7">T5 W5</text>
  <rect x="393" y="136" width="90" height="22" rx="4" fill="#2d1f3f" stroke="#e879f9"/>
  <text x="438" y="152" text-anchor="middle" fill="#f0abfc">T6 W6</text>
  <text x="390" y="175" text-anchor="middle" fill="#64748b" font-size="11">every test = own worker</text>

  <!-- serial describe box -->
  <rect x="540" y="45" width="220" height="140" rx="8" fill="#1e2233" stroke="#ef4444" stroke-width="1.5"/>
  <text x="650" y="68" text-anchor="middle" font-weight="bold" fill="#fca5a5">describe.serial</text>
  <text x="650" y="86" text-anchor="middle" fill="#64748b" font-size="11">(ordered within fullyParallel)</text>
  <rect x="555" y="93" width="190" height="22" rx="4" fill="#3f1515" stroke="#ef4444"/>
  <text x="650" y="109" text-anchor="middle" fill="#fca5a5">W1: create → edit → delete</text>
  <text x="600" y="133" fill="#64748b">1.</text><text x="620" y="133" fill="#94a3b8">create (must run first)</text>
  <text x="600" y="150" fill="#64748b">2.</text><text x="620" y="150" fill="#94a3b8">edit   (needs create)</text>
  <text x="600" y="167" fill="#64748b">3.</text><text x="620" y="167" fill="#94a3b8">delete (needs edit)</text>

  <!-- Sharding section -->
  <rect x="20" y="205" width="740" height="150" rx="8" fill="#1e2233" stroke="#f59e0b" stroke-width="1"/>
  <text x="40" y="228" font-weight="bold" fill="#fcd34d">Sharding — split suite across CI machines</text>

  <rect x="40" y="240" width="200" height="55" rx="6" fill="#162032" stroke="#3b82f6" stroke-width="1"/>
  <text x="140" y="260" text-anchor="middle" font-weight="bold" fill="#93c5fd">Machine 1</text>
  <text x="140" y="278" text-anchor="middle" fill="#94a3b8">--shard=1/3</text>
  <text x="140" y="293" text-anchor="middle" fill="#64748b">tests 1-33</text>

  <rect x="270" y="240" width="200" height="55" rx="6" fill="#162032" stroke="#22c55e" stroke-width="1"/>
  <text x="370" y="260" text-anchor="middle" font-weight="bold" fill="#86efac">Machine 2</text>
  <text x="370" y="278" text-anchor="middle" fill="#94a3b8">--shard=2/3</text>
  <text x="370" y="293" text-anchor="middle" fill="#64748b">tests 34-66</text>

  <rect x="500" y="240" width="200" height="55" rx="6" fill="#162032" stroke="#a855f7" stroke-width="1"/>
  <text x="600" y="260" text-anchor="middle" font-weight="bold" fill="#c084fc">Machine 3</text>
  <text x="600" y="278" text-anchor="middle" fill="#94a3b8">--shard=3/3</text>
  <text x="600" y="293" text-anchor="middle" fill="#64748b">tests 67-100</text>

  <line x1="240" y1="305" x2="388" y2="330" stroke="#888" stroke-width="1" marker-end="url(#ph)"/>
  <line x1="370" y1="298" x2="390" y2="330" stroke="#888" stroke-width="1" marker-end="url(#ph)"/>
  <line x1="500" y1="305" x2="392" y2="330" stroke="#888" stroke-width="1" marker-end="url(#ph)"/>
  <rect x="320" y="330" width="140" height="22" rx="4" fill="#1a3a2a" stroke="#22c55e"/>
  <text x="390" y="346" text-anchor="middle" fill="#86efac">merge-reports → HTML</text>
</svg>`,analogy:`<p>Think of parallel workers like <em>checkout lanes at a supermarket</em>. One cashier (single worker) serves every customer in sequence — the queue grows long. Open four lanes (four workers) and customers are served simultaneously — the same total work finishes in a quarter of the time. Sharding adds a second <em>store</em> entirely: you split the customer list between two stores, both run at full speed in parallel, and at closing time you merge their receipts into one daily report. <code>describe.serial</code> is the occasional express lane for items that must be rung up in order (create before pay, pay before bag).</p>`,flow:[`Playwright launches N worker processes (each an isolated Node.js + browser instance)`,`Test files (or individual tests with fullyParallel) are distributed across available workers`,`Each worker runs its assigned tests independently — no shared memory between workers`,`Worker-scoped fixtures are created once per worker and shared by all tests in that worker`,`describe.serial groups force sequential order within a worker regardless of fullyParallel`,`With sharding, each CI machine runs a subset (--shard=M/N) and emits a blob report`,`npx playwright merge-reports combines all shard blobs into a single HTML report`]}],s=[{id:`intro`,title:`TOSCA Overview & TCM`,icon:`🔬`,explain:`<p><strong>Tricentis Tosca</strong> is a model-based, no-code test automation platform that abstracts your application's UI into reusable <em>modules</em>. Instead of writing scripts, testers scan the application once and create a model; test cases are built by assembling those model pieces — so a UI change means fixing one module, not dozens of scripts.</p>
<p><strong>Tosca Commander (TCM)</strong> is the desktop IDE where all test assets live. It organises work into a repository of projects, each split into sections: <em>Modules</em> (your UI model), <em>TestCases</em> (your test logic), <em>Execution</em> (execution lists and results), and <em>Requirements</em> (traceability). Every asset is stored in a central SQL/Oracle database so teams share a single source of truth.</p>
<p>TOSCA's key differentiator is <strong>risk-based test optimisation (TO)</strong>: it analyses requirements coverage and automatically selects the smallest test set that covers all risks — cutting regression time without reducing quality.</p>`,syntax:`// TOSCA Commander sections
Modules          → UI/API model layer (TBox-scanned controls)
TestCases        → test logic (steps referencing modules)
TestSuites       → groupings of test cases
ExecutionLists   → ordered run queues
Requirements     → traceability matrix
Reports          → execution results & logs

// Common Tosca CLI (CI integration)
ToscaCI.exe run --workspace "MyWorkspace" --executionList "Regression"
ToscaCI.exe run --configuration "SmokeTest" --resultdir "C:\\results"`,examples:[{label:`TCM repository structure`,code:`Repository
├── Modules/
│   ├── LoginPage/
│   │   ├── UsernameField   (TBox: TextBox)
│   │   └── LoginButton     (TBox: Button)
│   └── Dashboard/
│       └── WelcomeLabel    (TBox: TextItem)
├── TestCases/
│   └── TC001_Login/
│       ├── Step 1 – Enter username
│       ├── Step 2 – Enter password
│       └── Step 3 – Click Login
└── Execution/
    └── ExecutionList_Regression/
        └── TC001_Login`,out:`Hierarchical repository showing modules, test cases and execution list`},{label:`Module technical parameter vs business parameter`,code:`// Technical Parameter (TBox-defined, maps to control property)
Module: UsernameField
  TechnicalParameter: Value   ← what you type into the field

// Business Parameter (created by tester, maps to technical param)
Module: UsernameField
  BusinessParameter: Username → maps to → Value

// Test Step uses business parameter
Step: Enter credentials
  Username = "alice@test.com"`,out:`Business parameters decouple test data from technical selectors`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="460" height="40" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="240" y="35" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="monospace">Tosca Commander (TCM) — Central Repository</text>
  <rect x="10" y="70" width="85" height="50" rx="5" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="52" y="99" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">Modules</text>
  <rect x="110" y="70" width="85" height="50" rx="5" fill="#252b44" stroke="#4ade80" stroke-width="1.5"/>
  <text x="152" y="99" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">TestCases</text>
  <rect x="210" y="70" width="85" height="50" rx="5" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="252" y="99" text-anchor="middle" fill="#c792ea" font-size="11" font-family="monospace">Execution</text>
  <rect x="310" y="70" width="85" height="50" rx="5" fill="#252b44" stroke="#f87171" stroke-width="1.5"/>
  <text x="352" y="99" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">Requirements</text>
  <rect x="410" y="70" width="60" height="50" rx="5" fill="#252b44" stroke="#9aa5b4" stroke-width="1.5"/>
  <text x="440" y="99" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">Reports</text>
  <rect x="10" y="145" width="460" height="40" rx="5" fill="#1a2035" stroke="#60a5fa" stroke-width="1"/>
  <text x="240" y="169" text-anchor="middle" fill="#9aa5b4" font-size="11" font-family="monospace">SQL / Oracle Central Repository Database</text>
</svg>`,analogy:`<p>Think of TOSCA like a <strong>LEGO factory</strong>. The scanning step moulds your app's UI into individual LEGO bricks (modules). Building a test case is snapping those bricks together into a model. If LEGO changes the shape of one brick, you update that mould once — every model that used it is fixed automatically, without disassembling each one.</p>`,flow:[`Scan application UI → TBox creates Module tree`,`Define Business Parameters on Modules`,`Build Test Cases by dragging Module steps`,`Parameterise with Test Data (TDM / Excel)`,`Add to Execution List → run locally or via DEX`,`Review Results → logs, screenshots, reports`]},{id:`scanning`,title:`TBox Scanning & Modules`,icon:`🔍`,explain:`<p>The <strong>TBox</strong> is TOSCA's recognition engine. When you <em>scan</em> an application, TBox inspects its control tree (HTML DOM, WinForms hierarchy, SAP screen, etc.) and builds a <strong>Module</strong> — a mirror of the UI that records each control's technical properties (selector, control type, hierarchy path).</p>
<p>Each recognised control becomes a <strong>Module Attribute</strong>. Attributes have <em>technical parameters</em> (engine-defined: Value, Checked, SelectedItem…) and can be wrapped with <em>business parameters</em> (tester-defined, human-readable names like "SearchTerm" or "OrderQty").</p>
<p>TOSCA supports dozens of TBox engines: <code>TBox Web</code> for browsers, <code>TBox WinForms</code>, <code>TBox SAP</code>, <code>TBox Mobile</code>, <code>TBox PDF</code>, <code>TBox Java</code>, and more. Each engine knows the controls in that technology and how to interact with them reliably.</p>`,syntax:`// Scanning workflow
1. Open TCM → Modules section → right-click → Scan Application
2. Choose TBox engine (Web, WinForms, SAP…)
3. Hover control → green highlight → click to add to module
4. Rename Module Attribute with a business-friendly name
5. Set ActionMode: Input / Output / Verify / Wait / Count

// Module Attribute properties
ActionMode:
  Input   → write value into control
  Output  → read value from control into Buffer
  Verify  → assert control value equals expected
  Wait    → pause until control meets condition
  Count   → count matching controls`,examples:[{label:`Module structure after scanning a login page`,code:`Module: LoginPage
├── Attribute: Username
│     TechnicalParam: Value
│     ActionMode: Input
│     BusinessParam: Username
├── Attribute: Password
│     TechnicalParam: Value
│     ActionMode: Input
│     BusinessParam: Password
└── Attribute: LoginButton
      TechnicalParam: (none needed)
      ActionMode: Input  ← click action`,out:`Scanned module ready for test step assignment`},{label:`Classic vs Checkpoint modules`,code:`Classic Module Attribute (ActionMode = Input):
  → performs an action (type, click, select)

Checkpoint Attribute (ActionMode = Verify):
  → asserts the control's current value
  → test step fails if actual ≠ expected

// Usage in test step
Step: Verify welcome message
  WelcomeLabel [Verify] = "Welcome, Alice"
  ↓ TOSCA checks the DOM text matches "Welcome, Alice"`,out:`Checkpoint attributes turn module steps into assertions`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="110" height="160" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="65" y="45" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">Application</text>
  <rect x="25" y="55" width="80" height="25" rx="3" fill="#252b44" stroke="#9aa5b4"/>
  <text x="65" y="71" text-anchor="middle" fill="#e8eaed" font-size="10" font-family="monospace">Username</text>
  <rect x="25" y="88" width="80" height="25" rx="3" fill="#252b44" stroke="#9aa5b4"/>
  <text x="65" y="104" text-anchor="middle" fill="#e8eaed" font-size="10" font-family="monospace">Password</text>
  <rect x="25" y="121" width="80" height="25" rx="3" fill="#252b44" stroke="#4ade80"/>
  <text x="65" y="137" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Login Btn</text>
  <text x="185" y="105" text-anchor="middle" fill="#f5a623" font-size="22">⟶</text>
  <text x="185" y="125" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">TBox Scan</text>
  <rect x="240" y="20" width="230" height="160" rx="6" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="355" y="45" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">Module: LoginPage</text>
  <rect x="255" y="55" width="200" height="25" rx="3" fill="#252b44" stroke="#60a5fa"/>
  <text x="355" y="71" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Username [Input]</text>
  <rect x="255" y="88" width="200" height="25" rx="3" fill="#252b44" stroke="#60a5fa"/>
  <text x="355" y="104" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Password [Input]</text>
  <rect x="255" y="121" width="200" height="25" rx="3" fill="#252b44" stroke="#4ade80"/>
  <text x="355" y="137" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">LoginButton [Input]</text>
  <rect x="255" y="154" width="200" height="20" rx="3" fill="#252b44" stroke="#c792ea"/>
  <text x="355" y="167" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">WelcomeLabel [Verify]</text>
</svg>`,analogy:`<p>Scanning is like an <strong>architect drawing a floor plan</strong> of a building. The building is your application; the floor plan is the Module. Once you have the plan, you can assign tasks (test steps) to specific rooms (controls) without re-entering the building each time — any structural change only requires updating the floor plan, not every task that references it.</p>`,flow:[`Select Modules section in TCM`,`Right-click → Scan Application → choose TBox engine`,`Hover controls → click to record each attribute`,`Set ActionMode per attribute (Input / Verify / Output)`,`Create Business Parameters for readable naming`,`Module is ready for reuse across test cases`]},{id:`testcases`,title:`Test Cases & Test Steps`,icon:`📋`,explain:`<p>A <strong>Test Case</strong> in TOSCA is a container for an ordered list of <strong>Test Steps</strong>. Each test step references a Module (or a specific attribute within it) and supplies the values to use during execution. Test cases are pure <em>what</em> and <em>with what data</em> — the <em>how</em> is handled by the module and the TBox engine.</p>
<p>Test steps can also be <strong>nested test cases</strong> (called <em>TestCase Blocks</em> or simply embedded test cases). This lets you build a library of reusable flows — a "Login" test case used as a step inside "Place Order" and "Reset Password" — without duplicating logic.</p>
<p><strong>TestCaseDesign</strong> is TCM's structured view for mapping test case steps to module attributes. Values can be static literals, references to <em>Configuration Parameters</em> <code>{P:param}</code>, or <em>Buffer</em> values <code>{B:buffer}</code> captured from previous steps.</p>`,syntax:`// Test Case structure
TestCase: TC001_Login
  TestStep 1: Navigate to Login
    Module: Browser → Goto URL
    Value: {P:BaseURL}/login
  TestStep 2: Enter credentials
    Module: LoginPage.Username
    Value: {P:TestUser}
  TestStep 3: Enter password
    Module: LoginPage.Password
    Value: {P:TestPassword}
  TestStep 4: Click Login
    Module: LoginPage.LoginButton
  TestStep 5: Verify welcome
    Module: Dashboard.WelcomeLabel [Verify]
    Value: "Welcome, {P:TestUser}"

// Referencing another test case as a step
TestCase: TC002_PlaceOrder
  TestStep 1: [TestCase] TC001_Login   ← reuse
  TestStep 2: Add item to cart
  ...`,examples:[{label:`TestCase with reuse and data binding`,code:`TestCase: TC_SearchProduct
  ├── Step 1: Login (embedded TC001_Login)
  ├── Step 2: SearchBar.SearchInput
  │     Value: {B:ProductName}   ← from Buffer
  ├── Step 3: SearchBar.SearchButton
  ├── Step 4: ResultsGrid.FirstResult [Verify]
  │     Value: {B:ProductName}   ← assert same value
  └── Step 5: Logout (embedded TC_Logout)`,out:`Reuse login/logout steps; bind data via Buffers`},{label:`Test Case Folder hierarchy`,code:`TestCases/
├── Smoke/
│   ├── TC001_Login
│   └── TC002_HomepageLoad
├── Regression/
│   ├── UserManagement/
│   │   ├── TC010_CreateUser
│   │   ├── TC011_EditUser
│   │   └── TC012_DeleteUser
│   └── Orders/
│       ├── TC020_PlaceOrder
│       └── TC021_CancelOrder
└── Shared/
    ├── TC_Login          ← reusable building block
    └── TC_Logout`,out:`Folder hierarchy organises test cases into logical groups`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="200" height="30" rx="5" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="110" y="30" text-anchor="middle" fill="#f5a623" font-size="12" font-family="monospace">TestCase: TC001_Login</text>
  <rect x="30" y="55" width="160" height="22" rx="3" fill="#1e2338" stroke="#60a5fa"/>
  <text x="110" y="70" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Step 1: Goto URL</text>
  <rect x="30" y="84" width="160" height="22" rx="3" fill="#1e2338" stroke="#60a5fa"/>
  <text x="110" y="99" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Step 2: Enter Username</text>
  <rect x="30" y="113" width="160" height="22" rx="3" fill="#1e2338" stroke="#60a5fa"/>
  <text x="110" y="128" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Step 3: Enter Password</text>
  <rect x="30" y="142" width="160" height="22" rx="3" fill="#1e2338" stroke="#60a5fa"/>
  <text x="110" y="157" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Step 4: Click Login</text>
  <rect x="30" y="171" width="160" height="22" rx="3" fill="#1e2338" stroke="#4ade80"/>
  <text x="110" y="186" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Step 5: Verify Welcome [✓]</text>
  <rect x="260" y="55" width="200" height="22" rx="3" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="360" y="70" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">TC002_PlaceOrder</text>
  <line x1="260" y1="66" x2="228" y2="112" stroke="#9aa5b4" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="244" y="95" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">reuses</text>
  <rect x="260" y="90" width="200" height="22" rx="3" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="360" y="105" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">TC003_ResetPassword</text>
</svg>`,analogy:`<p>A TOSCA test case is like a <strong>recipe card</strong>. The ingredients (data values) are listed on the card, but the cooking instructions (how to interact with the control) live in the module — the "kitchen manual." You can write a hundred recipes that use "whisk eggs" without redefining how whisking works each time.</p>`,flow:[`Create TestCase folder under TestCases section`,`Add Test Steps by dragging Module attributes`,`Supply values: literals, {P:param}, or {B:buffer}`,`Embed reusable test cases as nested steps`,`Set Condition / Recovery on steps if needed`,`Add to ExecutionList to run`]},{id:`testsuites`,title:`Test Suites & Execution Lists`,icon:`▶️`,explain:`<p>An <strong>Execution List</strong> is the ordered queue of test cases that TOSCA executes in one run. It lives under the <em>Execution</em> section of TCM. You drag test cases (or whole folders) into an Execution List and run it — TOSCA executes each entry in sequence, records pass/fail, captures logs and screenshots, and marks the overall list as passed or failed.</p>
<p>A <strong>Test Suite</strong> is a logical grouping of test cases used for <em>organisation and reporting</em> rather than direct execution. Test suites appear in the <em>TestCases</em> section and can be linked to requirements for traceability.</p>
<p>Within an Execution List you can configure <strong>Test Events</strong> (setup/teardown steps that run before or after every test case), set the execution <em>agent</em> (local or DEX), choose the <em>browser/device</em> configuration, and control <em>error handling</em> behaviour (continue on fail, retry count).</p>`,syntax:`// Execution List structure
ExecutionList: Regression_Sprint12
├── [Test Event: Setup]  ← runs before every TC
│   └── TC_ClearTestData
├── TC001_Login
├── TC020_PlaceOrder
├── TC021_CancelOrder
├── [Test Event: Teardown]  ← runs after every TC
│   └── TC_Logout
└── ExecutionCondition: OnError=Continue

// Running an Execution List
- Right-click ExecutionList → Run
- Or: Tosca CI command line
  ToscaCI run --executionList "Regression_Sprint12"`,examples:[{label:`Execution List with Test Events`,code:`ExecutionList: DailySmoke
  Test Event (Before each): TC_OpenBrowser
  Test Event (After each):  TC_CloseBrowser

  Entry 1: TC001_Login
  Entry 2: TC002_Search
  Entry 3: TC003_Checkout

// Execution Order:
// TC_OpenBrowser → TC001_Login → TC_CloseBrowser
// TC_OpenBrowser → TC002_Search → TC_CloseBrowser
// TC_OpenBrowser → TC003_Checkout → TC_CloseBrowser`,out:`Test Events wrap every test case with setup/teardown logic`},{label:`Partial execution and re-run failed`,code:`// Select specific entries to run
Right-click entry → Mark for execution → Run Marked

// Re-run only failed entries
After full run → Filter by Status = Failed
Right-click failed entries → Re-run

// Result states
Passed   ✓  all steps succeeded
Failed   ✗  at least one step failed
Error    !  unexpected exception
Skipped  –  marked to skip or condition not met`,out:`Granular control over what to run and re-run`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="200" height="30" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="110" y="30" text-anchor="middle" fill="#c792ea" font-size="12" font-family="monospace">Execution List</text>
  <rect x="25" y="52" width="170" height="22" rx="3" fill="#1a3a2a" stroke="#4ade80"/>
  <text x="110" y="67" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">▸ Test Event: Setup</text>
  <rect x="25" y="80" width="170" height="22" rx="3" fill="#252b44" stroke="#60a5fa"/>
  <text x="110" y="95" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">TC001_Login</text>
  <rect x="25" y="108" width="170" height="22" rx="3" fill="#252b44" stroke="#60a5fa"/>
  <text x="110" y="123" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">TC002_PlaceOrder</text>
  <rect x="25" y="136" width="170" height="22" rx="3" fill="#252b44" stroke="#60a5fa"/>
  <text x="110" y="151" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">TC003_Checkout</text>
  <rect x="25" y="164" width="170" height="22" rx="3" fill="#1a3a2a" stroke="#4ade80"/>
  <text x="110" y="179" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">▸ Test Event: Teardown</text>
  <rect x="270" y="52" width="80" height="22" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="310" y="67" text-anchor="middle" fill="#4ade80" font-size="10">✓ Passed</text>
  <rect x="270" y="80" width="80" height="22" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="310" y="95" text-anchor="middle" fill="#f87171" font-size="10">✗ Failed</text>
  <rect x="270" y="108" width="80" height="22" rx="3" fill="#1e2338" stroke="#9aa5b4"/>
  <text x="310" y="123" text-anchor="middle" fill="#9aa5b4" font-size="10">– Skipped</text>
  <text x="360" y="80" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Results</text>
</svg>`,analogy:`<p>An Execution List is like a <strong>flight boarding manifest</strong>. The manifest lists passengers in boarding order; the airline (TOSCA) boards each one, notes whether they got on successfully, and at the end produces a gate report. If a passenger fails to board, the rest still proceed unless you specifically halt on error.</p>`,flow:[`Create Execution List under Execution section`,`Drag test cases / folders into the list`,`Add Test Events for setup/teardown per test`,`Configure agent, browser, error handling`,`Run list locally or schedule via DEX/CI`,`Review Results — pass/fail per entry with logs`]},{id:`testdata`,title:`Test Data Management (TDM)`,icon:`📊`,explain:`<p><strong>Test Data Management (TDM)</strong> in TOSCA separates test data from test logic. Instead of hard-coding values in test steps, you externalise them into Excel sheets, databases, or TOSCA's own TDM service — and bind them to your test cases through <em>data partitioning</em>.</p>
<p>The simplest approach is <strong>Excel TDM</strong>: you create an Excel workbook where each row is a data set (a "partition"). TOSCA maps the columns to test case parameters so the same test case runs once per row with different data — this is called <em>TestCaseDesign with data partitions</em>.</p>
<p>For more complex scenarios, TOSCA supports <strong>Database TDM</strong> (SQL queries) and the enterprise <strong>Tricentis TDM Server</strong> — a dedicated data service that provisions, masks, reserves, and resets test data across environments, preventing data conflicts in parallel runs.</p>`,syntax:`// Excel TDM binding
1. Create Excel file:
   | Username        | Password   | ExpectedMsg        |
   | alice@test.com  | pass123    | Welcome, Alice     |
   | bob@test.com    | pass456    | Welcome, Bob       |

2. Link in TCM:
   TestCase → Properties → TestData → Select Excel file
   Map column "Username" → {P:Username}
   Map column "Password" → {P:Password}

3. TOSCA creates one partition per row → runs TC twice

// Buffer-based TDM (capture from previous step)
Step 3: OrderID [Output]   → stored as {B:OrderID}
Step 7: ConfirmOrderID [Verify] = {B:OrderID}`,examples:[{label:`Data-driven test with Excel partitions`,code:`// Excel: TestData_Login.xlsx
Row 1: Username=alice@test.com, Password=pass123, Role=Admin
Row 2: Username=bob@test.com,   Password=pass456, Role=User
Row 3: Username=invalid,        Password=wrong,   Role=None

// TCM maps rows → 3 partitions of TC001_Login
// Run produces 3 results:
Partition 1 (alice) → Passed
Partition 2 (bob)   → Passed
Partition 3 (invalid) → Failed (login rejected — expected)`,out:`One test case, three data sets, three independent results`},{label:`Database TDM connection`,code:`// Add DB connection in TCM → Modules → Tosca DB module
Connection: TestDB
  Driver:   MSSQL / Oracle / MySQL
  Server:   db.test.internal
  Database: TestEnv

// SQL query as data source
SELECT username, password, role
FROM test_users
WHERE env = 'QA' AND active = 1

// Result rows become partitions — same as Excel TDM`,out:`Pull live test data from SQL databases at run time`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="110" height="80" rx="5" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="65" y="42" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Excel / DB</text>
  <rect x="20" y="52" width="90" height="16" rx="2" fill="#252b44"/>
  <text x="65" y="63" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Row 1: Alice / Admin</text>
  <rect x="20" y="72" width="90" height="16" rx="2" fill="#252b44"/>
  <text x="65" y="83" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Row 2: Bob / User</text>
  <rect x="20" y="92" width="90" height="16" rx="2" fill="#252b44"/>
  <text x="65" y="103" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Row 3: Invalid</text>
  <text x="160" y="65" text-anchor="middle" fill="#f5a623" font-size="20">⟶</text>
  <text x="160" y="80" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">partitions</text>
  <rect x="200" y="10" width="150" height="30" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="275" y="29" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">TC001_Login</text>
  <rect x="200" y="50" width="150" height="25" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="275" y="66" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Partition 1 ✓</text>
  <rect x="200" y="82" width="150" height="25" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="275" y="98" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Partition 2 ✓</text>
  <rect x="200" y="114" width="150" height="25" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="275" y="130" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">Partition 3 ✗</text>
</svg>`,analogy:`<p>TDM is like a <strong>mail merge</strong> in word processing. You write the letter template once (test case), plug in a contacts spreadsheet (Excel TDM), and the software produces one personalised letter per contact row (partition). Change the contacts list — the letter template stays untouched.</p>`,flow:[`Create Excel workbook with one column per parameter`,`Each row = one test data partition`,`Link Excel to TestCase via TestData property`,`Map column headers to Configuration Parameters`,`Run TestCase → one execution per data row`,`Review results per partition independently`]},{id:`config`,title:`Configuration Parameters`,icon:`⚙️`,explain:`<p><strong>Configuration Parameters</strong> (Config Params or simply <em>parameters</em>) are reusable, named values that can be referenced anywhere in your test suite using the syntax <code>{P:ParameterName}</code>. They act as global or local constants — store a URL, username, database connection string, or environment flag once and reference it everywhere.</p>
<p>Parameters live in a hierarchy: <strong>Global Parameters</strong> (workspace-level, shared across all test cases), <strong>Folder Parameters</strong> (scoped to a folder and its children), and <strong>TestCase-level Parameters</strong> (local to one test case). A parameter at a lower level overrides a same-named parameter at a higher level — allowing environment-specific overrides without changing test cases.</p>
<p><strong>PCDs</strong> (Parameter Container Definitions) are templates that group related parameters — for example, a "Browser" PCD that contains URL, browser type, and timeout — and can be attached to Execution Lists to easily swap configurations between environments.</p>`,syntax:`// Reference syntax
{P:ParameterName}         → resolves parameter value
{P:BaseURL}/login         → concatenation supported
{B:BufferName}            → read a captured buffer value
{B:BufferName|default}    → buffer with fallback

// Parameter scopes (precedence: local > folder > global)
Global Parameter:  MyWorkspace → Parameters → BaseURL = https://prod.example.com
Folder Parameter:  QA_Env → Parameters → BaseURL = https://qa.example.com
TestCase Param:    TC001 → Parameters → BaseURL = https://local.example.com

// PCD (Parameter Container Definition) example
PCD: BrowserConfig
  BaseURL      = https://qa.example.com
  Browser      = Chrome
  Timeout      = 30000
  Username     = test_user`,examples:[{label:`Environment switching via parameters`,code:`// Global parameter
BaseURL = https://qa.example.com

// Test step using parameter
Navigate: {P:BaseURL}/dashboard
Enter URL in SearchBar: {P:BaseURL}/api/search

// To switch to staging — change ONE parameter:
BaseURL = https://staging.example.com
// All test steps pointing to {P:BaseURL} now hit staging`,out:`Single parameter change switches all tests to a new environment`},{label:`PCD attached to Execution List`,code:`PCD: QA_Config
  BaseURL  = https://qa.example.com
  Username = qa_admin
  Password = qa_pass123

PCD: Staging_Config
  BaseURL  = https://staging.example.com
  Username = stg_admin
  Password = stg_pass456

// Attach PCD to Execution List
ExecutionList → Properties → PCD = QA_Config
// → All {P:BaseURL} in this run resolve to QA values`,out:`Swap PCDs to run the same tests against different environments`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="130" height="80" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="75" y="40" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Global Params</text>
  <text x="75" y="58" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">BaseURL = qa.app.com</text>
  <text x="75" y="73" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Browser = Chrome</text>
  <text x="75" y="88" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Timeout = 30000</text>
  <rect x="20" y="120" width="110" height="50" rx="4" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="75" y="138" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">Folder Params</text>
  <text x="75" y="155" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">BaseURL = local</text>
  <text x="75" y="168" text-anchor="middle" fill="#f5a623" font-size="8" font-family="monospace">(overrides global)</text>
  <text x="210" y="90" text-anchor="middle" fill="#9aa5b4" font-size="20">⟶</text>
  <rect x="250" y="20" width="210" height="160" rx="6" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="355" y="42" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="monospace">Test Steps</text>
  <text x="355" y="68" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">Navigate → {P:BaseURL}/login</text>
  <text x="355" y="88" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">Enter → {P:Username}</text>
  <text x="355" y="108" text-anchor="middle" fill="#e8eaed" font-size="9" font-family="monospace">Password → {P:Password}</text>
  <text x="355" y="128" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">resolved at runtime</text>
</svg>`,analogy:`<p>Config Parameters work like <strong>environment variables</strong> in software development. You define <code>DATABASE_URL=postgres://prod/db</code> once; every service that needs it reads the variable — you don't embed the connection string inside each service's code. Swapping environments means changing one variable, not editing dozens of files.</p>`,flow:[`Define Global Parameters at workspace level`,`Create Folder-level params for environment overrides`,`Reference with {P:ParamName} in test steps and values`,`Group related params into PCDs for easy swapping`,`Attach PCD to Execution List before running`,`Change PCD to change target environment instantly`]},{id:`steering`,title:`Steering: Buffers, Conditions & Loops`,icon:`🔀`,explain:`<p><strong>Steering</strong> is TOSCA's mechanism for adding conditional logic and dynamic data flow to test cases — without writing code. It has three main pillars:</p>
<p><strong>Buffers</strong> capture runtime values from the application (text read from a label, a generated order ID, a date field) and store them for use in later steps using the syntax <code>{B:BufferName}</code>. An attribute set to <em>ActionMode = Output</em> writes its control's value into the buffer at execution time.</p>
<p><strong>Conditions</strong> evaluate a buffer or parameter value and skip or execute a block of test steps accordingly — like an if/else without scripting. <strong>While loops</strong> repeat a block of steps as long as a condition holds true, and <strong>For iterations</strong> repeat a block N times. Together, these let testers model dynamic, branching workflows entirely through the TCM UI.</p>`,syntax:`// Buffer: capture a value at runtime
Step: OrderConfirmation.OrderID
  ActionMode: Output       → captures text to {B:OrderID}

// Use buffer in later step
Step: VerifyEmail.OrderReference [Verify]
  Value: {B:OrderID}       → asserts value matches captured ID

// Condition (if/else steering)
Condition: {B:UserRole} = "Admin"
  [If true]  TC_OpenAdminPanel
  [If false] TC_OpenUserDashboard

// While loop
While: {B:RetryCount} < 3
  Step: CheckStatus
  Step: IncrementRetry     → buffer arithmetic

// For iteration (repeat 5 times)
For: Iterations = 5
  Step: AddItemToCart`,examples:[{label:`Capture order ID and verify in email`,code:`// Test Case: Place Order and Verify Confirmation
Step 1: PlaceOrderPage.SubmitBtn [click]
Step 2: ConfirmationPage.OrderNumber
         ActionMode = Output → {B:OrderID}
Step 3: ConfirmationPage.OrderNumber [Verify]
         Value = {B:OrderID}        ← self-verify readable
Step 4: EmailPage.SubjectLine [Verify]
         Value = "Order {B:OrderID} Confirmed"
// Buffer bridges steps 2 → 4 without hard-coding the ID`,out:`Buffer captures dynamic order ID and asserts it in email subject`},{label:`Retry loop with condition`,code:`// Retry until status = "Ready" or 10 attempts
Buffer: AttemptCount = 0
Buffer: StatusValue  = ""

While: {B:StatusValue} != "Ready" AND {B:AttemptCount} < 10
  Step: StatusPage.StatusLabel
         ActionMode = Output → {B:StatusValue}
  Step: Math.Add
         {B:AttemptCount} + 1 → {B:AttemptCount}
  Step: Wait 2 seconds`,out:`Poll a status field up to 10 times using While loop + Buffers`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="30" width="100" height="40" rx="4" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="60" y="55" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Output Step</text>
  <line x1="110" y1="50" x2="150" y2="50" stroke="#f5a623" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="150" y="30" width="90" height="40" rx="4" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="195" y="48" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">{B:OrderID}</text>
  <text x="195" y="62" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Buffer</text>
  <line x1="240" y1="50" x2="280" y2="50" stroke="#f5a623" stroke-width="1.5"/>
  <rect x="280" y="30" width="110" height="40" rx="4" fill="#1e2338" stroke="#4ade80" stroke-width="1.5"/>
  <text x="335" y="48" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Verify Step</text>
  <text x="335" y="63" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">= {B:OrderID}</text>
  <rect x="10" y="110" width="440" height="70" rx="5" fill="#1a1a2e" stroke="#c792ea" stroke-width="1.5"/>
  <text x="240" y="132" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Condition: {B:Role} = "Admin"</text>
  <rect x="30" y="142" width="180" height="28" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="120" y="160" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">TRUE → TC_AdminPanel</text>
  <rect x="250" y="142" width="180" height="28" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="340" y="160" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">FALSE → TC_UserDashboard</text>
</svg>`,analogy:`<p>Steering is like a <strong>traffic light controller</strong>. Buffers are the sensors in the road measuring car count. Conditions are the logic rules ("if north > south, give north a green"). Loops are the timer that keeps checking every 30 seconds. No one rewrites the controller's code every time traffic patterns change — the rules adapt dynamically.</p>`,flow:[`Set ActionMode = Output on attribute to capture value`,`Reference captured value with {B:BufferName}`,`Add Condition block → define true/false branches`,`Add While loop → set exit condition on buffer`,`Add For block → set fixed iteration count`,`Combine buffers + conditions for dynamic branching`]},{id:`recovery`,title:`Recovery Scenarios`,icon:`🛡️`,explain:`<p>A <strong>Recovery Scenario</strong> is an error handler that TOSCA triggers automatically when a test step fails. Instead of letting a failed step abort the entire test case, you define a recovery that cleans up the broken state and either retries, skips ahead, or exits gracefully — preserving the ability of subsequent test cases in the Execution List to run.</p>
<p>Recovery Scenarios are associated at three levels: <em>TestStep</em> (handle one step's failure), <em>TestCase</em> (handle any failure in the case), or <em>ExecutionList</em> (global handler for the entire run). TOSCA evaluates them in priority order — lower priority numbers run first.</p>
<p>A recovery itself is a test case (a list of steps). Common patterns: close an unexpected dialog, take a screenshot, log an error message, navigate back to a known state, and then signal TOSCA to <em>Retry</em>, <em>Skip</em>, <em>Next TestCase</em>, or <em>Exit</em>.</p>`,syntax:`// Recovery actions (what happens after recovery TC runs)
Retry         → re-attempt the failed step (up to N times)
Skip          → skip the failed step, continue the test case
NextTestCase  → abort this TC, start the next in Execution List
Exit          → stop the entire Execution List

// Attaching a Recovery Scenario
TestStep → Properties → Recovery Scenario → Select TC_CloseDialog
Priority: 1   (lower = higher priority)
Condition: Always / OnError / OnVerificationFailed

// Common recovery test case pattern
TC_RecoverFromUnexpectedDialog:
  Step 1: UnexpectedDialog.CloseButton [click]
  Step 2: Screenshot → save to results
  Step 3: [Recovery Action] = Skip`,examples:[{label:`Recovery for unexpected popup dialog`,code:`// Recovery TC: TC_ClosePopup
Step 1: BrowserEngine.SwitchToAlert [if exists]
Step 2: AlertDialog.AcceptButton [click]
Step 3: [Recovery Action] = Retry   ← re-try original step

// Attached to:
ExecutionList level → Priority 1
// Fires any time an unexpected alert blocks a step`,out:`Automatically dismiss alert dialogs and retry the failed step`},{label:`Session timeout recovery`,code:`// Recovery TC: TC_HandleSessionTimeout
Step 1: LoginPage.Username → {P:Username}
Step 2: LoginPage.Password → {P:Password}
Step 3: LoginPage.LoginButton [click]
Step 4: [Recovery Action] = Retry   ← retry original step after re-login

// Attached at TestCase level with condition: OnError
// When session expires mid-test → auto re-login → retry`,out:`Handle session timeouts by re-authenticating and retrying`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="30" width="120" height="30" rx="4" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="70" y="49" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Test Step</text>
  <line x1="130" y1="45" x2="165" y2="45" stroke="#f87171" stroke-width="1.5"/>
  <rect x="165" y="30" width="80" height="30" rx="4" fill="#3a1e1e" stroke="#f87171" stroke-width="1.5"/>
  <text x="205" y="49" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">FAILED ✗</text>
  <line x1="205" y1="60" x2="205" y2="90" stroke="#f5a623" stroke-width="1.5"/>
  <rect x="140" y="90" width="130" height="30" rx="4" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="205" y="109" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">Recovery TC</text>
  <line x1="270" y1="105" x2="310" y2="75" stroke="#9aa5b4" stroke-width="1" stroke-dasharray="3,3"/>
  <rect x="310" y="55" width="80" height="22" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="350" y="70" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Retry</text>
  <rect x="310" y="83" width="80" height="22" rx="3" fill="#252b44" stroke="#9aa5b4"/>
  <text x="350" y="98" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Skip</text>
  <rect x="310" y="111" width="80" height="22" rx="3" fill="#252b44" stroke="#c792ea"/>
  <text x="350" y="126" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">NextTestCase</text>
  <rect x="310" y="139" width="80" height="22" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="350" y="154" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">Exit</text>
</svg>`,analogy:`<p>Recovery Scenarios are like an <strong>airbag system in a car</strong>. You don't re-engineer the car every time an accident happens — the airbag deploys automatically, protects the occupants (the subsequent test cases), and the car can be driven again after recovery. The driver (test run) continues rather than being completely totalled.</p>`,flow:[`Identify failure modes: unexpected dialogs, session expiry, network errors`,`Create a Recovery TC with cleanup steps`,`Set Recovery Action at the end (Retry/Skip/NextTC/Exit)`,`Attach recovery to step, test case, or execution list`,`Set Priority (1 = highest) and Condition (Always/OnError)`,`Test: deliberately trigger the failure to verify recovery fires`]},{id:`reporting`,title:`Execution & Reporting`,icon:`📈`,explain:`<p>When an Execution List runs, TOSCA records every step's outcome in real time. Each test case entry in the list gets a <strong>result state</strong> (Passed, Failed, Error, Skipped, Not Executed) along with a detailed <strong>execution log</strong> showing the value passed to each step, the actual value found in the application, and the pass/fail verdict.</p>
<p>Screenshots and videos can be automatically captured on failure (or always, if configured). Logs are stored in the repository database and viewable directly in TCM's <em>Execution</em> section under <em>Results</em>. For HTML/PDF reports, TCM ships a <strong>Tosca Report</strong> generator that produces structured, stakeholder-friendly documents.</p>
<p>TOSCA also integrates natively with defect trackers (Jira, Azure DevOps, ServiceNow) — failed test cases can auto-create defects with step details, screenshots, and environment info attached.</p>`,syntax:`// Result states
Passed           ✓  all steps succeeded
Failed           ✗  a Verify/Checkpoint step mismatch
Error            !  unexpected exception (element not found, timeout)
Skipped          –  step skipped by Condition or steering
NotExecuted      ○  not yet run in this execution

// Accessing results in TCM
Execution → [ExecutionList] → Results → [TestCase] → Step log

// Tosca Report (HTML/PDF export)
TCM → Reports → New Report → choose template → Export

// Tosca CI — results directory
ToscaCI.exe run ... --resultdir "C:\\CI\\Results"
// Produces: ExecutionResults.xml  (JUnit-compatible)`,examples:[{label:`Step-level execution log`,code:`TestCase: TC001_Login  → FAILED
  Step 1: Navigate URL       → Passed   | Got: 200 OK
  Step 2: Enter Username     → Passed   | Typed: alice@test.com
  Step 3: Enter Password     → Passed   | Typed: ****
  Step 4: Click Login        → Passed   | Button clicked
  Step 5: Verify Welcome     → FAILED
    Expected: "Welcome, Alice"
    Actual:   "Account locked. Contact admin."
    Screenshot: step5_fail_2024-11-01_14-23-11.png`,out:`Each step shows expected vs actual value — pinpoints the failure`},{label:`JUnit XML for CI pipeline`,code:`<!-- ExecutionResults.xml (auto-generated by ToscaCI) -->
<testsuite name="Regression_Sprint12" tests="45" failures="2" errors="1">
  <testcase name="TC001_Login" classname="Smoke" time="4.2"/>
  <testcase name="TC020_PlaceOrder" classname="Regression" time="12.8">
    <failure message="Verify WelcomeLabel failed">
      Expected: Welcome, Alice | Actual: Account locked
    </failure>
  </testcase>
</testsuite>`,out:`JUnit XML lets Jenkins/Azure DevOps parse TOSCA results natively`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="130" height="160" rx="5" fill="#1e2338" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="75" y="42" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Execution List</text>
  <rect x="20" y="52" width="110" height="20" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="75" y="65" text-anchor="middle" fill="#4ade80" font-size="9">✓ TC001_Login</text>
  <rect x="20" y="77" width="110" height="20" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="75" y="90" text-anchor="middle" fill="#f87171" font-size="9">✗ TC020_Order</text>
  <rect x="20" y="102" width="110" height="20" rx="3" fill="#1e3a1e" stroke="#4ade80"/>
  <text x="75" y="115" text-anchor="middle" fill="#4ade80" font-size="9">✓ TC021_Cancel</text>
  <rect x="20" y="127" width="110" height="20" rx="3" fill="#252b44" stroke="#9aa5b4"/>
  <text x="75" y="140" text-anchor="middle" fill="#9aa5b4" font-size="9">– TC030_Export</text>
  <line x1="140" y1="100" x2="175" y2="100" stroke="#f5a623" stroke-width="1.5"/>
  <rect x="175" y="20" width="140" height="65" rx="5" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="245" y="42" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Step Log</text>
  <text x="245" y="60" text-anchor="middle" fill="#9aa5b4" font-size="9">Expected vs Actual</text>
  <text x="245" y="75" text-anchor="middle" fill="#9aa5b4" font-size="9">Screenshots / Trace</text>
  <rect x="175" y="100" width="140" height="65" rx="5" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="245" y="122" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">HTML Report</text>
  <text x="245" y="140" text-anchor="middle" fill="#9aa5b4" font-size="9">Stakeholder PDF</text>
  <text x="245" y="155" text-anchor="middle" fill="#9aa5b4" font-size="9">JUnit XML (CI)</text>
  <rect x="335" y="60" width="130" height="80" rx="5" fill="#1a1a2e" stroke="#4ade80" stroke-width="1.5"/>
  <text x="400" y="82" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Defect Tracker</text>
  <text x="400" y="100" text-anchor="middle" fill="#9aa5b4" font-size="9">Jira / Azure DevOps</text>
  <text x="400" y="116" text-anchor="middle" fill="#9aa5b4" font-size="9">Auto-create issue</text>
  <text x="400" y="130" text-anchor="middle" fill="#9aa5b4" font-size="9">with screenshot</text>
</svg>`,analogy:`<p>TOSCA's reporting is like a <strong>flight data recorder (black box)</strong>. Every action taken during the flight (test run) is captured in chronological order. When something goes wrong, you replay the recording — you see exactly what was done, what was expected, and what actually happened, right down to the millisecond.</p>`,flow:[`Run Execution List → TOSCA records each step in real time`,`Failed steps capture: expected value, actual value, screenshot`,`Results stored in central repository database`,`Open TCM Execution → Results to review step-level logs`,`Generate HTML/PDF report for stakeholders`,`Auto-create defects in Jira/ADO for failed test cases`]},{id:`api`,title:`API Testing (ServiceV Engine)`,icon:`🔌`,explain:`<p>TOSCA's <strong>ServiceV Engine</strong> (formerly called Tosca API Engine) enables testing of REST, SOAP, GraphQL, and messaging-based APIs without any scripting. You define a <em>Service Endpoint</em> module that captures the API's URL, method, headers, and body schema — then test steps supply the data, just like UI testing.</p>
<p>ServiceV supports full request/response validation: assert HTTP status codes, response headers, and individual JSON/XML body fields. Captured response values can be stored in Buffers for chaining — e.g., extract an auth token from a login response and inject it into the Authorization header of the next request.</p>
<p>TOSCA also offers <strong>Service Virtualization</strong> (the SV side of ServiceV): stand up a virtual service that mimics a real backend dependency, so API tests aren't blocked by unavailable third-party services or incomplete backends.</p>`,syntax:`// REST API Module structure (created via ServiceV scan)
Module: POST_Login
  Endpoint: POST {P:BaseURL}/api/auth/login
  Headers:
    Content-Type: application/json
  Request Body (JSON):
    username: {P:Username}
    password: {P:Password}
  Response:
    StatusCode [Verify]:  200
    Body.token [Output]:  → {B:AuthToken}

// Chained request using token
Module: GET_UserProfile
  Endpoint: GET {P:BaseURL}/api/user/me
  Headers:
    Authorization: Bearer {B:AuthToken}
  Response:
    StatusCode [Verify]: 200
    Body.name [Verify]:  {P:ExpectedName}`,examples:[{label:`Login API → extract token → call protected endpoint`,code:`TestCase: TC_API_AuthFlow
Step 1: POST /api/auth/login
         username = {P:APIUser}
         password = {P:APIPass}
         [Response] StatusCode = 200  ← verify
         [Response] token → {B:Token} ← capture

Step 2: GET /api/user/profile
         Authorization = "Bearer {B:Token}"
         [Response] StatusCode = 200
         [Response] body.email [Verify] = {P:APIUser}`,out:`Chain API calls: capture token in step 1, use in step 2`},{label:`JSON response field verification`,code:`// TOSCA uses JSONPath to target response fields
Response assertions:
  $.status           [Verify] = "success"
  $.data.userId      [Verify] = "12345"
  $.data.roles[0]    [Verify] = "admin"
  $.pagination.total [Output] → {B:TotalCount}

// XML (SOAP) uses XPath
  /Envelope/Body/GetOrderResponse/OrderId [Verify] = "ORD-001"`,out:`JSONPath and XPath target nested fields in API responses`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="30" width="110" height="40" rx="5" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="65" y="48" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Test Step</text>
  <text x="65" y="62" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">POST /api/login</text>
  <line x1="120" y1="50" x2="160" y2="50" stroke="#f5a623" stroke-width="1.5"/>
  <rect x="160" y="20" width="160" height="100" rx="5" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="42" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">API Server</text>
  <text x="240" y="60" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Request →</text>
  <text x="240" y="75" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">{"username":"alice"}</text>
  <line x1="240" y1="80" x2="240" y2="100" stroke="#9aa5b4" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="240" y="100" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">← Response 200</text>
  <text x="240" y="114" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">{"token":"abc123"}</text>
  <line x1="320" y1="70" x2="360" y2="70" stroke="#f5a623" stroke-width="1.5"/>
  <rect x="360" y="50" width="105" height="40" rx="4" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="412" y="67" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">{B:AuthToken}</text>
  <text x="412" y="82" text-anchor="middle" fill="#9aa5b4" font-size="8" font-family="monospace">captured buffer</text>
  <rect x="10" y="140" width="110" height="40" rx="5" fill="#252b44" stroke="#4ade80" stroke-width="1.5"/>
  <text x="65" y="158" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Step 2</text>
  <text x="65" y="172" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">GET /api/user</text>
  <line x1="120" y1="160" x2="410" y2="80" stroke="#c792ea" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="265" y="150" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">Bearer {B:AuthToken}</text>
</svg>`,analogy:`<p>API testing in TOSCA is like using a <strong>universal remote control</strong>. The remote (ServiceV module) knows the signal format for each device (endpoint). You press the button (test step), supply the channel number (request data), and the remote verifies the TV changed to the right channel (response assertion) — no need to understand the infrared encoding protocol.</p>`,flow:[`Create Service Endpoint via ServiceV scan or import (Swagger/WSDL)`,`Define Request: method, URL, headers, body schema`,`Set Response assertions: status code, body fields via JSONPath`,`Use Output steps to capture response values into Buffers`,`Chain calls: pass {B:Token} to next request header`,`Run via Execution List — results show request/response detail`]},{id:`dex`,title:`Distributed Execution (DEX)`,icon:`🌐`,explain:`<p><strong>DEX (Distributed Execution)** is TOSCA's parallel test execution infrastructure. Instead of running everything on the tester's machine, DEX distributes test cases across a pool of <em>execution agents</em> (machines) managed by a central <em>DEX Server</em>. This cuts overall run time by running multiple tests simultaneously.</p>
<p>A DEX agent is a machine with TOSCA installed and the DEX Agent service running. It registers with the DEX Server and waits for work. When a run is triggered, the DEX Server slices the Execution List into units and dispatches them to available agents — each agent runs its slice independently and reports results back to the central repository.</p>
<p>TOSCA also offers <strong>Tosca Cloud (SaaS DEX)</strong> — a cloud-hosted pool of agents that you can scale on demand without managing your own VMs. It integrates directly into the TCM Execution List through a cloud agent configuration.</p>`,syntax:`// DEX architecture
DEX Server ← central orchestrator
  └── Agent Pool
      ├── Agent 1 (Windows / Chrome)
      ├── Agent 2 (Windows / Firefox)
      ├── Agent 3 (Linux / headless)
      └── Agent 4 (Mac / Safari)

// Configuring an Execution List for DEX
ExecutionList → Properties
  ExecutionMode: Distributed
  DEX Agent:     AgentGroup_QA
  Parallel:      4 (run 4 test cases simultaneously)

// Starting a DEX run from CI
ToscaCI.exe run
  --executionEnvironment "DEX"
  --agentGroup "QA_Agents"
  --executionList "Full_Regression"`,examples:[{label:`Parallel execution across multiple agents`,code:`// Without DEX: 100 test cases × 30s each = 50 minutes (serial)

// With DEX (4 agents):
Agent 1: TC001–TC025  → 12.5 minutes
Agent 2: TC026–TC050  → 12.5 minutes
Agent 3: TC051–TC075  → 12.5 minutes
Agent 4: TC076–TC100  → 12.5 minutes
Total wall-clock time: ~13 minutes (4× faster)`,out:`DEX cuts a 50-minute serial run to 13 minutes with 4 agents`},{label:`Agent requirements and routing`,code:`// Agents can have tags/requirements
Agent 1: Tags = ["Windows", "Chrome", "English"]
Agent 2: Tags = ["Windows", "SAP", "German"]
Agent 3: Tags = ["Mac", "Safari", "iOS"]

// Test cases declare required agent tags
TC_SAP_Invoice: RequiresAgent = ["SAP", "German"]
→ DEX routes it only to Agent 2

TC_Safari_Checkout: RequiresAgent = ["Mac", "Safari"]
→ DEX routes it only to Agent 3`,out:`Agent requirements ensure the right test runs on the right machine`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="180" y="10" width="120" height="40" rx="5" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="34" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">DEX Server</text>
  <line x1="240" y1="50" x2="80" y2="90" stroke="#9aa5b4" stroke-width="1.5"/>
  <line x1="240" y1="50" x2="180" y2="90" stroke="#9aa5b4" stroke-width="1.5"/>
  <line x1="240" y1="50" x2="300" y2="90" stroke="#9aa5b4" stroke-width="1.5"/>
  <line x1="240" y1="50" x2="400" y2="90" stroke="#9aa5b4" stroke-width="1.5"/>
  <rect x="20" y="90" width="120" height="40" rx="4" fill="#252b44" stroke="#60a5fa"/>
  <text x="80" y="108" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">Agent 1</text>
  <text x="80" y="122" text-anchor="middle" fill="#4ade80" font-size="9">TC001–025 ✓</text>
  <rect x="150" y="90" width="120" height="40" rx="4" fill="#252b44" stroke="#60a5fa"/>
  <text x="210" y="108" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">Agent 2</text>
  <text x="210" y="122" text-anchor="middle" fill="#4ade80" font-size="9">TC026–050 ✓</text>
  <rect x="280" y="90" width="120" height="40" rx="4" fill="#252b44" stroke="#60a5fa"/>
  <text x="340" y="108" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">Agent 3</text>
  <text x="340" y="122" text-anchor="middle" fill="#4ade80" font-size="9">TC051–075 ✓</text>
  <rect x="410" y="90" width="60" height="40" rx="4" fill="#252b44" stroke="#60a5fa"/>
  <text x="440" y="108" text-anchor="middle" fill="#60a5fa" font-size="8" font-family="monospace">Agent 4</text>
  <text x="440" y="122" text-anchor="middle" fill="#4ade80" font-size="8">076–100✓</text>
  <rect x="180" y="155" width="120" height="35" rx="5" fill="#1a1a2e" stroke="#c792ea" stroke-width="1.5"/>
  <text x="240" y="175" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Central Results DB</text>
</svg>`,analogy:`<p>DEX is like a <strong>food delivery dispatch centre</strong>. One central dispatcher (DEX Server) receives a large order (Execution List) and routes individual items to the nearest available delivery driver (agent). All drivers work in parallel; the dispatcher collects all delivery confirmations and sends one combined bill (results report) to the restaurant.</p>`,flow:[`Install DEX Server — central orchestrator`,`Install DEX Agent on each test machine and register`,`Tag agents with capabilities (OS, browser, language)`,`Set ExecutionList mode = Distributed, choose agent group`,`Run → DEX dispatches test cases to available agents`,`Results merge back to central repository automatically`]},{id:`cicd`,title:`CI/CD Integration`,icon:`🔄`,explain:`<p>TOSCA integrates with CI/CD pipelines through <strong>ToscaCI</strong> — a command-line tool that triggers Execution Lists from build servers without opening TCM. Jenkins, Azure DevOps, GitHub Actions, and GitLab CI all use ToscaCI to add TOSCA as a pipeline stage after deployment.</p>
<p>ToscaCI executes an Execution List, waits for results, and returns a process exit code (0 = all passed, non-zero = failures) that the CI server uses to pass or fail the pipeline stage. Results are saved as JUnit-compatible XML so build servers can parse and display them natively in their test result dashboards.</p>
<p>A common pattern: <em>Deploy → Smoke TOSCA run (gate) → Full Regression TOSCA run → Publish report</em>. The smoke gate runs in minutes and blocks a bad deployment before spending 30 minutes on the full suite.</p>`,syntax:`// ToscaCI basic run
ToscaCI.exe run
  --workspace "http://toscaserver:8080/Tricentis/Tosca"
  --executionList "Smoke_Tests"
  --resultdir "C:\\CI\\Results"
  --timeout 600

// Exit codes
0  → All tests passed
1  → One or more tests failed
2  → Execution error (agent unavailable, config issue)

// Jenkins pipeline (Declarative)
stage('TOSCA Smoke') {
  steps {
    bat 'ToscaCI.exe run --executionList "Smoke" --resultdir ".\\results"'
    junit '.\\results\\ExecutionResults.xml'
  }
  post { failure { archiveArtifacts '.\\results\\*.png' } }
}`,examples:[{label:`Azure DevOps pipeline with TOSCA stage`,code:`# azure-pipelines.yml
stages:
- stage: Deploy
  jobs:
  - job: DeployToQA
    steps:
    - script: deploy.sh --env qa

- stage: SmokeTest
  dependsOn: Deploy
  jobs:
  - job: ToscaSmoke
    steps:
    - task: CmdLine@2
      inputs:
        script: |
          ToscaCI.exe run             --executionList "Smoke_QA"             --resultdir "$(Build.ArtifactStagingDirectory)"
    - task: PublishTestResults@2
      inputs:
        testResultsFormat: JUnit
        testResultsFiles: '**\\ExecutionResults.xml'`,out:`TOSCA smoke tests gate the QA deployment in Azure DevOps`},{label:`GitHub Actions with TOSCA Cloud`,code:`# .github/workflows/tosca.yml
name: TOSCA Regression
on: [push]
jobs:
  tosca:
    runs-on: windows-latest
    steps:
      - name: Run TOSCA via DEX Cloud
        run: |
          ToscaCI.exe run             --executionEnvironment "Cloud"             --executionList "Full_Regression"             --resultdir "\${{ github.workspace }}/results"
      - name: Publish results
        uses: dorny/test-reporter@v1
        with:
          name: TOSCA Results
          path: results/ExecutionResults.xml
          reporter: java-junit`,out:`TOSCA Cloud agents run the full regression on every push`}],svgHTML:`<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arcd" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3z" fill="#9aa5b4"/></marker></defs>
  <rect x="10" y="70" width="70" height="40" rx="4" fill="#252b44" stroke="#60a5fa"/>
  <text x="45" y="94" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">Code Push</text>
  <line x1="80" y1="90" x2="105" y2="90" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arcd)"/>
  <rect x="105" y="70" width="70" height="40" rx="4" fill="#252b44" stroke="#4ade80"/>
  <text x="140" y="87" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Build</text>
  <text x="140" y="100" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">& Deploy</text>
  <line x1="175" y1="90" x2="200" y2="90" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arcd)"/>
  <rect x="200" y="60" width="80" height="60" rx="4" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="240" y="82" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">ToscaCI</text>
  <text x="240" y="96" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">Smoke Run</text>
  <text x="240" y="110" text-anchor="middle" fill="#9aa5b4" font-size="8" font-family="monospace">(gate)</text>
  <line x1="280" y1="90" x2="305" y2="90" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arcd)"/>
  <rect x="305" y="70" width="80" height="40" rx="4" fill="#252b44" stroke="#c792ea"/>
  <text x="345" y="87" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">Full</text>
  <text x="345" y="100" text-anchor="middle" fill="#c792ea" font-size="9" font-family="monospace">Regression</text>
  <line x1="385" y1="90" x2="410" y2="90" stroke="#9aa5b4" stroke-width="1.5" marker-end="url(#arcd)"/>
  <rect x="410" y="70" width="60" height="40" rx="4" fill="#252b44" stroke="#4ade80"/>
  <text x="440" y="87" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Publish</text>
  <text x="440" y="100" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Report</text>
  <rect x="200" y="135" width="80" height="25" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="240" y="151" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">GATE FAIL → block</text>
</svg>`,analogy:`<p>ToscaCI in a pipeline is like a <strong>quality inspector on a factory assembly line</strong>. After each assembly stage (deploy), the inspector runs automated checks (TOSCA tests). If the checks pass, the product moves to the next station. If they fail, the line halts and the fault is logged — defects never reach the customer.</p>`,flow:[`Install ToscaCI on CI server or agent`,`Call ToscaCI.exe run with workspace + execution list args`,`CI reads exit code: 0 = pass, non-zero = fail the stage`,`Publish ExecutionResults.xml as JUnit test results`,`Archive screenshots/logs as build artifacts on failure`,`Optional: auto-create defects in Jira/ADO on failure`]},{id:`mobile`,title:`Mobile Testing`,icon:`📱`,explain:`<p>TOSCA's <strong>Mobile Engine</strong> enables automated testing of native iOS and Android apps, as well as mobile-optimised web apps in mobile browsers. It uses the same module-scan-and-execute model as desktop — you scan the mobile app, TOSCA creates a module tree, and you build test cases exactly as you would for a web application.</p>
<p>For iOS, TOSCA communicates through Apple's XCUITest framework; for Android, it uses UIAutomator2/Appium under the hood. The physical device or emulator is connected to a <em>Mobile Engine Host</em> machine that bridges between TCM and the device. TOSCA Cloud and DEX can route mobile test cases to devices in a device farm.</p>
<p>Mobile test cases require a <strong>Device Configuration</strong> — specifying the device name, OS version, app bundle ID, and whether to use a real device or emulator. This configuration is attached to the Execution List so you can run the same test on multiple device/OS combinations.</p>`,syntax:`// Device Configuration (set in TCM → Modules → Mobile)
DeviceConfig: iPhone15_iOS17
  Platform:      iOS
  DeviceName:    iPhone 15
  OSVersion:     17.0
  AppBundleID:   com.example.myapp
  LaunchMode:    App (native) | Browser (mobile web)

// Scanning a mobile app
1. Connect device / start emulator
2. TCM → Scan → Choose Mobile Engine
3. Interact with app → TOSCA records controls
4. Controls become Module Attributes (same as web)

// Gestures in test steps
Swipe:  direction=Up, duration=500ms
Pinch:  scale=0.5
Tap:    coordinate-based or control-based`,examples:[{label:`Mobile native app test: login`,code:`Module: iOS_LoginScreen
  Attribute: UsernameField   [Input]   → tap + type
  Attribute: PasswordField   [Input]   → tap + type
  Attribute: SignInButton     [Input]   → tap
  Attribute: WelcomeText     [Verify]

TestCase: TC_Mobile_Login
  Step 1: iOS_LoginScreen.UsernameField = {P:MobileUser}
  Step 2: iOS_LoginScreen.PasswordField = {P:MobilePass}
  Step 3: iOS_LoginScreen.SignInButton  ← tap (no value)
  Step 4: iOS_LoginScreen.WelcomeText  [Verify] = "Hello!"`,out:`Native iOS login test — identical structure to web tests`},{label:`Cross-platform matrix with DEX`,code:`ExecutionList: Mobile_Regression
  Agent Requirements per TC:
    TC_Login:
      Run on Agent[iPhone15_iOS17]
      Run on Agent[Pixel7_Android13]
      Run on Agent[Galaxy_Android14]
  → 3 parallel runs, one per device
  → Results show per-device pass/fail`,out:`Same test runs on 3 devices in parallel via DEX agent routing`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="80" height="150" rx="8" fill="#1e2338" stroke="#60a5fa" stroke-width="2"/>
  <rect x="28" y="35" width="64" height="100" rx="3" fill="#252b44"/>
  <text x="60" y="88" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">App Screen</text>
  <circle cx="60" cy="155" r="6" fill="#9aa5b4"/>
  <text x="60" y="18" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">iOS Device</text>
  <rect x="130" y="20" width="80" height="150" rx="8" fill="#1e2338" stroke="#4ade80" stroke-width="2"/>
  <rect x="138" y="35" width="64" height="100" rx="3" fill="#252b44"/>
  <text x="170" y="88" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">App Screen</text>
  <circle cx="170" cy="155" r="6" fill="#9aa5b4"/>
  <text x="170" y="18" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">Android</text>
  <rect x="260" y="60" width="200" height="80" rx="5" fill="#252b44" stroke="#f5a623" stroke-width="1.5"/>
  <text x="360" y="82" text-anchor="middle" fill="#f5a623" font-size="10" font-family="monospace">TCM Mobile Module</text>
  <text x="360" y="100" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">UsernameField [Input]</text>
  <text x="360" y="115" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">SignInButton [Input]</text>
  <text x="360" y="130" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">WelcomeText [Verify]</text>
  <line x1="100" y1="95" x2="260" y2="95" stroke="#9aa5b4" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="210" y1="95" x2="260" y2="100" stroke="#9aa5b4" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`,analogy:`<p>Mobile testing in TOSCA is like having the same <strong>driving test examiner</strong> assess candidates on different car models (iOS, Android). The examiner follows the same checklist regardless of the car — check mirrors, signal, brake — and adapts naturally to each car's controls. The test script (checklist) doesn't change; only the vehicle (device) does.</p>`,flow:[`Connect device / start emulator on Mobile Engine Host`,`Configure Device Configuration in TCM (platform, bundle ID)`,`Scan the app with Mobile Engine → creates Module`,`Build test cases using mobile module attributes`,`Attach device config to Execution List`,`Run locally or distribute to device farm via DEX`]},{id:`requirements`,title:`Requirements & Traceability`,icon:`📌`,explain:`<p>TOSCA's <strong>Requirements</strong> section provides a traceability matrix linking business requirements to the test cases that verify them. Every requirement can be tagged with a <em>risk level</em> (Low / Medium / High / Critical) and linked to one or more test cases. If a test case fails, TOSCA immediately shows which requirement is at risk.</p>
<p><strong>Test Optimisation (TO)</strong> uses requirement coverage analysis to automatically select the <em>minimum set of test cases</em> that covers all high-risk requirements. On large regression suites, TO can reduce execution time by 60–80% while maintaining the same risk coverage — this is TOSCA's flagship differentiator.</p>
<p>Requirements can be imported from external tools (Jira, Azure DevOps, IBM DOORS) via TOSCA's integration layer, keeping the traceability matrix automatically synchronised with your ALM tool.</p>`,syntax:`// Requirements structure in TCM
Requirements/
├── US001: User can log in with valid credentials
│     Risk: Critical
│     LinkedTests: TC001_Login, TC010_SSOLogin
├── US002: User sees dashboard after login
│     Risk: High
│     LinkedTests: TC001_Login (step 5 verifies dashboard)
└── US003: Password must be 8+ characters
      Risk: Medium
      LinkedTests: TC005_PasswordValidation

// Test Optimisation (TO) workflow
1. Set risk level on each requirement
2. Mark test cases as covering specific requirements
3. Run "Optimise" → TOSCA selects minimum covering set
4. Execution List is auto-populated with optimised TC set`,examples:[{label:`Requirements coverage matrix`,code:`Requirement       | Risk    | TC001 | TC005 | TC010 | Coverage
US001 Login       | Critical|  ✓    |       |  ✓    |  100%
US002 Dashboard   | High    |  ✓    |       |       |  100%
US003 Password    | Medium  |       |  ✓    |       |  100%
US004 Logout      | Low     |       |       |       |   0%  ← gap!

// US004 has no test case → alert in TOSCA dashboard`,out:`Coverage matrix reveals untested requirements at a glance`},{label:`Test Optimisation result`,code:`// Full regression: 200 test cases
// After Test Optimisation (focus on High/Critical risks):

Optimised set: 43 test cases
  ✓ Covers all Critical requirements
  ✓ Covers all High requirements
  – Skips 157 Low-risk test cases (still logged as skipped)

Execution time: 43 × 30s = ~22 minutes
  vs. 200 × 30s = 100 minutes (full run)
  → 78% time reduction with same risk coverage`,out:`Test Optimisation reduces a 100-minute suite to 22 minutes`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="150" height="160" rx="5" fill="#1e2338" stroke="#c792ea" stroke-width="1.5"/>
  <text x="85" y="42" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Requirements</text>
  <rect x="20" y="52" width="130" height="22" rx="3" fill="#3a1e1e" stroke="#f87171"/>
  <text x="85" y="67" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace">US001 Critical</text>
  <rect x="20" y="80" width="130" height="22" rx="3" fill="#2a2a1e" stroke="#f5a623"/>
  <text x="85" y="95" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">US002 High</text>
  <rect x="20" y="108" width="130" height="22" rx="3" fill="#1e2a2a" stroke="#60a5fa"/>
  <text x="85" y="123" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="monospace">US003 Medium</text>
  <rect x="20" y="136" width="130" height="22" rx="3" fill="#252b44" stroke="#9aa5b4"/>
  <text x="85" y="151" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">US004 Low</text>
  <line x1="160" y1="63" x2="200" y2="63" stroke="#f87171" stroke-width="1.5"/>
  <line x1="160" y1="91" x2="200" y2="91" stroke="#f5a623" stroke-width="1.5"/>
  <line x1="160" y1="119" x2="200" y2="119" stroke="#60a5fa" stroke-width="1.5"/>
  <rect x="200" y="40" width="130" height="150" rx="5" fill="#252b44" stroke="#4ade80" stroke-width="1.5"/>
  <text x="265" y="62" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">Test Cases</text>
  <text x="265" y="82" text-anchor="middle" fill="#e8eaed" font-size="9">TC001 Login ← US001,002</text>
  <text x="265" y="98" text-anchor="middle" fill="#e8eaed" font-size="9">TC005 PwdVal ← US003</text>
  <text x="265" y="114" text-anchor="middle" fill="#e8eaed" font-size="9">TC010 SSO ← US001</text>
  <rect x="350" y="70" width="120" height="50" rx="4" fill="#1e2338" stroke="#f5a623" stroke-width="1.5"/>
  <text x="410" y="90" text-anchor="middle" fill="#f5a623" font-size="9" font-family="monospace">Test Optimisation</text>
  <text x="410" y="108" text-anchor="middle" fill="#9aa5b4" font-size="8" font-family="monospace">43 of 200 selected</text>
</svg>`,analogy:`<p>Requirements traceability is like a <strong>building inspection checklist</strong> cross-referenced with the building code. Each code clause (requirement) maps to specific inspection items (test cases). Test Optimisation is the inspector focusing only on load-bearing walls (critical requirements) when time is short — the cosmetic items (low-risk) get deferred without compromising structural safety.</p>`,flow:[`Import or create Requirements in TCM Requirements section`,`Assign risk level (Critical / High / Medium / Low)`,`Link test cases to requirements they verify`,`View coverage matrix — identify gaps`,`Run Test Optimisation → auto-select minimum covering set`,`Requirements dashboard tracks pass/fail risk exposure`]},{id:`workspace`,title:`Workspaces & Collaboration`,icon:`🤝`,explain:`<p>TOSCA's <strong>Common Repository</strong> is a central SQL/Oracle database that all team members connect to, ensuring everyone works on the same single version of all test assets. Multi-user access is coordinated through <strong>check-out / check-in</strong> locking: when you edit a test case or module, you check it out (locking it for others), make changes, then check in — the new version is immediately available to the team.</p>
<p><strong>Workspaces</strong> are private sandboxes within the common repository. A tester can check out assets into their personal workspace, develop and test changes in isolation, then merge them back to the shared repository — similar to git branching. This prevents unstable work-in-progress from breaking other testers' runs.</p>
<p>TOSCA also integrates with external version control (Git) for exporting/importing repository snapshots, and provides a <strong>Merge Conflicts</strong> UI when two users have modified the same asset concurrently.</p>`,syntax:`// Check-out / Check-in flow
Right-click asset → Check Out     → locks asset for you
[make changes]
Right-click asset → Check In      → saves and unlocks

// Workspace operations
TCM → Workspaces → New Workspace  → creates private sandbox
Move asset to Workspace           → isolated development
Merge Workspace → merge back to common repository

// Collaboration best practices
- Always check out before editing
- Check in promptly to unblock teammates
- Use workspaces for feature development
- Check in to a workspace before end of day

// Common Repository connection
TCM → Options → Repository → Server URL + DB credentials`,examples:[{label:`Team workflow with workspaces`,code:`// Alice: develop new Login module in workspace
1. Alice creates Workspace_Alice
2. Checks out LoginPage module → moves to workspace
3. Adds new attribute: RememberMeCheckbox
4. Runs local tests in workspace → passes
5. Merges Workspace_Alice → Common Repository
6. Bob can now see and use RememberMeCheckbox

// Bob: blocked scenario (without workspace)
1. Bob opens LoginPage module → sees "Checked out by Alice"
2. Cannot edit until Alice checks in
// → Use workspaces to avoid this bottleneck`,out:`Workspaces prevent blocking and enable parallel development`},{label:`Conflict resolution`,code:`// Two users edit same test case simultaneously
Alice: modifies TC001 Step 3 value to "admin@new.com"
Bob:   modifies TC001 Step 3 value to "user@new.com"

// When Bob merges:
TCM shows Merge Conflict dialog
  Alice's version: "admin@new.com"
  Bob's version:   "user@new.com"
  Current value:   "alice@test.com" (original)
→ Bob chooses: Keep Mine / Take Theirs / Merge manually`,out:`TCM provides a visual conflict resolution dialog for concurrent edits`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="160" y="130" width="160" height="50" rx="5" fill="#1e2338" stroke="#f5a623" stroke-width="2"/>
  <text x="240" y="155" text-anchor="middle" fill="#f5a623" font-size="11" font-family="monospace">Common Repository</text>
  <text x="240" y="171" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Central SQL/Oracle DB</text>
  <rect x="10" y="20" width="120" height="80" rx="5" fill="#252b44" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="70" y="42" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="monospace">Alice</text>
  <rect x="20" y="52" width="100" height="20" rx="3" fill="#1a2a3a" stroke="#60a5fa"/>
  <text x="70" y="65" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Workspace_Alice</text>
  <rect x="20" y="77" width="100" height="16" rx="2" fill="#252b44"/>
  <text x="70" y="89" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">LoginModule (locked)</text>
  <rect x="350" y="20" width="120" height="80" rx="5" fill="#252b44" stroke="#c792ea" stroke-width="1.5"/>
  <text x="410" y="42" text-anchor="middle" fill="#c792ea" font-size="10" font-family="monospace">Bob</text>
  <rect x="360" y="52" width="100" height="20" rx="3" fill="#2a1a3a" stroke="#c792ea"/>
  <text x="410" y="65" text-anchor="middle" fill="#9aa5b4" font-size="9" font-family="monospace">Workspace_Bob</text>
  <rect x="360" y="77" width="100" height="16" rx="2" fill="#252b44"/>
  <text x="410" y="89" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">TestCase_Order</text>
  <line x1="70" y1="100" x2="190" y2="130" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="410" y1="100" x2="300" y2="130" stroke="#c792ea" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="130" y="122" text-anchor="middle" fill="#4ade80" font-size="8">merge</text>
  <text x="360" y="122" text-anchor="middle" fill="#4ade80" font-size="8">merge</text>
</svg>`,analogy:`<p>The TOSCA repository is like a <strong>shared Google Doc with track-changes and private drafts</strong>. The main document (common repository) is always the official version. Workspaces are personal drafts — you refine your writing privately, then propose a merge into the main document. If someone else edited the same sentence, Google Docs highlights the conflict for manual resolution.</p>`,flow:[`Connect TCM to Common Repository (server + credentials)`,`Check Out assets before editing — prevents concurrent overwrites`,`Create personal Workspace for isolated development`,`Test changes in workspace before merging to shared repo`,`Check In / Merge Workspace → resolve any conflicts in TCM UI`,`Run Execution List from Common Repository to validate merged work`]}],c=[{id:`typebasics`,title:`Type Annotations & Basic Types`,icon:`🔷`,explain:`<p><strong>TypeScript</strong> is a superset of JavaScript that adds a <em>static type system</em> checked at compile time. A <strong>type annotation</strong> tells the compiler what kind of value a variable, parameter, or return value should hold, using a colon followed by the type: <code>let age: number = 30;</code>.</p>
<p>TypeScript's basic types mirror JavaScript's runtime types plus a few compiler-only additions: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>symbol</code>, and the special types <code>any</code> (opts out of checking — avoid it), <code>unknown</code> (safe top type — must be narrowed before use), <code>void</code> (function returns nothing), and <code>never</code> (function never returns, e.g. it always throws).</p>
<p>Type checking happens only at <em>compile time</em> — annotations are erased when TypeScript compiles down to plain JavaScript. This means TypeScript catches type mistakes before your code ever runs, but it adds zero runtime overhead.</p>`,syntax:`<span class="kw">let</span> name: <span class="kw">string</span> = <span class="str">"Alice"</span>;
<span class="kw">let</span> age: <span class="kw">number</span> = <span class="num">30</span>;
<span class="kw">let</span> isActive: <span class="kw">boolean</span> = <span class="kw">true</span>;

<span class="cmt">// Special types</span>
<span class="kw">let</span> anything: <span class="kw">any</span>;      <span class="cmt">// opts out of checking — avoid</span>
<span class="kw">let</span> safe: <span class="kw">unknown</span>;      <span class="cmt">// must narrow before use</span>
<span class="kw">function</span> <span class="fn-name">log</span>(msg: <span class="kw">string</span>): <span class="kw">void</span> { <span class="cmt">// returns nothing</span>
  console.<span class="fn-name">log</span>(msg);
}
<span class="kw">function</span> <span class="fn-name">fail</span>(): <span class="kw">never</span> { <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"boom"</span>); }`,examples:[{label:`Basic annotated declarations`,code:`<span class="kw">let</span> title: <span class="kw">string</span> = <span class="str">"Mastery Lab"</span>;
<span class="kw">let</span> version: <span class="kw">number</span> = <span class="num">5</span>;
<span class="kw">let</span> released: <span class="kw">boolean</span> = <span class="kw">true</span>;
<span class="cmt">// title = 42;  // ✗ Type 'number' is not assignable to 'string'</span>
console.<span class="fn-name">log</span>(title, version, released);`,out:`"Mastery Lab" 5 true`},{label:`any vs unknown safety`,code:`<span class="kw">let</span> a: <span class="kw">any</span> = <span class="num">5</span>;
a.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// ✗ compiles, crashes at runtime</span>

<span class="kw">let</span> u: <span class="kw">unknown</span> = <span class="num">5</span>;
<span class="cmt">// u.toUpperCase();      // ✗ compile error: must narrow first</span>
<span class="kw">if</span> (<span class="kw">typeof</span> u === <span class="str">"string"</span>) {
  u.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// ✓ narrowed to string</span>
}`,out:`any: runtime crash | unknown: compile-time safety`},{label:`void and never in functions`,code:`<span class="kw">function</span> <span class="fn-name">printLine</span>(msg: <span class="kw">string</span>): <span class="kw">void</span> {
  console.<span class="fn-name">log</span>(msg); <span class="cmt">// no return value</span>
}
<span class="kw">function</span> <span class="fn-name">assertNever</span>(x: <span class="kw">never</span>): <span class="kw">never</span> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"Unexpected: "</span> + x);
}
<span class="fn-name">printLine</span>(<span class="str">"Hello"</span>); <span class="cmt">// "Hello"</span>`,out:`"Hello"`}],svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🏷️</div>
<p>Type annotations are like <strong>shipping labels on boxes</strong>. Before a package leaves the warehouse (before your code compiles), the label declares exactly what's supposed to be inside — "books," "fragile glass," "liquids." If someone tries to put the wrong item in a labeled box, the inspector (the TypeScript compiler) catches it before the truck ever leaves. <code>any</code> is an unlabeled box nobody inspects; <code>unknown</code> is a sealed box you must open and verify before using what's inside.</p>`,flow:[`<span><strong>Write annotation:</strong> Declare the expected type after a colon — <code>let age: number;</code></span>`,`<span><strong>Assign a value:</strong> TypeScript checks the value matches the declared type — <code>age = 30;</code></span>`,`<span><strong>Compiler verifies:</strong> Any mismatch (e.g. <code>age = "old"</code>) is flagged as a compile-time error, before running</span>`,`<span><strong>Type erasure:</strong> During compilation to JS, all annotations are stripped — <code>tsc</code> outputs plain <code>let age = 30;</code></span>`,`<span><strong>Runtime behaves like JS:</strong> At runtime there is no type information left — types exist only to help you during development</span>`]},{id:`interfaces`,title:`Interfaces & Type Aliases`,icon:`📐`,explain:`<p>An <strong>interface</strong> describes the <em>shape</em> of an object — which properties it must have and what type each property is. A <strong>type alias</strong> (<code>type</code>) gives a name to any type, including object shapes, unions, tuples, or primitives. Both let you write <code>function greet(user: User)</code> instead of repeating the full shape everywhere.</p>
<p>Interfaces and type aliases overlap heavily for object shapes, but differ in a few ways: interfaces support <strong>declaration merging</strong> (declaring the same interface twice merges the members) and are extended with <code>extends</code>; type aliases use <code>&</code> (intersection) to combine and can also name unions, tuples, and primitives, which interfaces cannot. As a rule of thumb: prefer <code>interface</code> for public object/class shapes, and <code>type</code> for unions, tuples, or utility compositions.</p>
<p>Properties can be marked <strong>optional</strong> with <code>?</code> (<code>age?: number</code>) or <strong>readonly</strong> (<code>readonly id: number</code>, which can be set once — usually at construction — and never reassigned after).</p>`,syntax:`<span class="kw">interface</span> User {
  id: <span class="kw">number</span>;
  name: <span class="kw">string</span>;
  email<span class="op">?</span>: <span class="kw">string</span>;       <span class="cmt">// optional property</span>
  <span class="kw">readonly</span> createdAt: <span class="kw">Date</span>; <span class="cmt">// set once</span>
}

<span class="kw">interface</span> Admin <span class="kw">extends</span> User {
  permissions: <span class="kw">string</span>[];
}

<span class="kw">type</span> ID = <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>;   <span class="cmt">// type alias for a union</span>
<span class="kw">type</span> Point = { x: <span class="kw">number</span>; y: <span class="kw">number</span> };`,examples:[{label:`Interface with optional & readonly`,code:`<span class="kw">interface</span> Product {
  <span class="kw">readonly</span> sku: <span class="kw">string</span>;
  name: <span class="kw">string</span>;
  discount<span class="op">?</span>: <span class="kw">number</span>;
}
<span class="kw">const</span> item: Product = { sku: <span class="str">"A1"</span>, name: <span class="str">"Mug"</span> };
<span class="cmt">// item.sku = "B2";  // ✗ Cannot assign to 'sku' (readonly)</span>
console.<span class="fn-name">log</span>(item.discount); <span class="cmt">// undefined (optional, not set)</span>`,out:`undefined`},{label:`Interface extends (inheritance)`,code:`<span class="kw">interface</span> Animal { name: <span class="kw">string</span>; }
<span class="kw">interface</span> Dog <span class="kw">extends</span> Animal { breed: <span class="kw">string</span>; }

<span class="kw">const</span> pet: Dog = { name: <span class="str">"Rex"</span>, breed: <span class="str">"Lab"</span> };
console.<span class="fn-name">log</span>(pet.name, pet.breed); <span class="cmt">// "Rex" "Lab"</span>`,out:`"Rex" "Lab"`},{label:`Type alias: union, tuple & intersection`,code:`<span class="kw">type</span> Status = <span class="str">"idle"</span> <span class="op">|</span> <span class="str">"loading"</span> <span class="op">|</span> <span class="str">"done"</span>;
<span class="kw">type</span> Pair = [<span class="kw">string</span>, <span class="kw">number</span>];   <span class="cmt">// tuple alias</span>

<span class="kw">type</span> Named = { name: <span class="kw">string</span> };
<span class="kw">type</span> Aged = { age: <span class="kw">number</span> };
<span class="kw">type</span> Person = Named <span class="op">&</span> Aged; <span class="cmt">// intersection</span>

<span class="kw">const</span> p: Person = { name: <span class="str">"Bo"</span>, age: <span class="num">9</span> };
console.<span class="fn-name">log</span>(p); <span class="cmt">// { name: "Bo", age: 9 }</span>`,out:`{ name: "Bo", age: 9 }`}],svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">📋</div>
<p>An interface is like a <strong>job application form</strong> — it lists required fields (name, email) and optional ones (middle name, marked with <code>?</code>). Anyone filling out the form (any object) must include every required field with the right kind of answer, or the form gets rejected. A <strong>type alias</strong> is more like a <strong>nickname for a concept</strong> — you can name a single shape, a menu of choices ("small, medium, or large"), or a combo meal (an intersection of two forms merged into one).</p>`,flow:[`<span><strong>Define the shape:</strong> Declare an <code>interface</code> or <code>type</code> describing required and optional properties</span>`,`<span><strong>Annotate a value:</strong> Use the name as a type — <code>const user: User = {...}</code></span>`,`<span><strong>Structural check:</strong> TypeScript verifies the object has all required properties with matching types (structural typing — exact name doesn't matter, shape does)</span>`,`<span><strong>Extend or combine:</strong> Build richer types with <code>extends</code> (interfaces) or <code>&</code> intersections (type aliases)</span>`,`<span><strong>Reuse everywhere:</strong> Import the same interface/type across functions, components, and files for one consistent contract</span>`]},{id:`functiontypes`,title:`Functions & Function Types`,icon:`🔧`,explain:`<p>TypeScript lets you annotate a function's <strong>parameters</strong> and <strong>return type</strong>, so the compiler verifies every call site passes the right arguments and every caller receives the right kind of result: <code>function add(a: number, b: number): number</code>.</p>
<p>Parameters can be marked <strong>optional</strong> with <code>?</code> (must come after required ones), given a <strong>default value</strong> (making them optional automatically), or collected as <strong>rest parameters</strong> typed as an array (<code>...nums: number[]</code>). A <em>function type</em> describes the shape of a callback itself, e.g. <code>type Callback = (err: Error | null, data: string) => void</code>, which is invaluable for typing arguments like event handlers or array callbacks.</p>
<p><strong>Overloads</strong> let a single function accept different combinations of argument types with different return types, by declaring multiple call signatures above one implementation. This is more precise than a single union-typed signature when the relationship between input and output type varies by call shape.</p>`,syntax:`<span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): <span class="kw">number</span> {
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
<span class="kw">function</span> <span class="fn-name">parse</span>(v: <span class="kw">number</span>): <span class="kw">string</span>;`,examples:[{label:`Typed params, optional & default`,code:'<span class="kw">function</span> <span class="fn-name">greet</span>(name: <span class="kw">string</span>, title<span class="op">?</span>: <span class="kw">string</span>): <span class="kw">string</span> {\n  <span class="kw">return</span> title <span class="op">?</span> <span class="op">`</span>Hello, <span class="op">${</span>title<span class="op">}</span> <span class="op">${</span>name<span class="op">}`</span> : <span class="op">`</span>Hello, <span class="op">${</span>name<span class="op">}`</span>;\n}\nconsole.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Sam"</span>));           <span class="cmt">// "Hello, Sam"</span>\nconsole.<span class="fn-name">log</span>(<span class="fn-name">greet</span>(<span class="str">"Sam"</span>, <span class="str">"Dr."</span>));    <span class="cmt">// "Hello, Dr. Sam"</span>',out:`"Hello, Sam" | "Hello, Dr. Sam"`},{label:`Function type alias for a callback`,code:`<span class="kw">type</span> Comparator = (a: <span class="kw">number</span>, b: <span class="kw">number</span>) <span class="op">=></span> <span class="kw">number</span>;

<span class="kw">function</span> <span class="fn-name">sortNums</span>(arr: <span class="kw">number</span>[], cmp: Comparator): <span class="kw">number</span>[] {
  <span class="kw">return</span> [...arr].<span class="fn-name">sort</span>(cmp);
}
console.<span class="fn-name">log</span>(<span class="fn-name">sortNums</span>([<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>], (a,b) <span class="op">=></span> a - b)); <span class="cmt">// [1,2,3]</span>`,out:`[1, 2, 3]`},{label:`Overloaded function signatures`,code:`<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">string</span>): <span class="kw">string</span>;
<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">number</span>): <span class="kw">string</span>;
<span class="kw">function</span> <span class="fn-name">makeId</span>(value: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">return</span> <span class="op">\`</span>id-<span class="op">\${</span>value<span class="op">}\`</span>;
}
console.<span class="fn-name">log</span>(<span class="fn-name">makeId</span>(<span class="num">42</span>));    <span class="cmt">// "id-42"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">makeId</span>(<span class="str">"x"</span>));   <span class="cmt">// "id-x"</span>`,out:`"id-42" | "id-x"`}],svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🔌</div>
<p>A typed function is like an <strong>electrical adapter with labeled plugs</strong>. The input side (parameters) only accepts specific plug shapes — you can't force a round pin into a rectangular slot. The output side (return type) guarantees a specific voltage comes out. A <strong>function type alias</strong> is the adapter's spec sheet — you can hand that spec to anyone and say "build me any adapter matching this," and swap in different callbacks as long as they fit the same plug shape.</p>`,flow:[`<span><strong>Declare parameters:</strong> Annotate each parameter's type — <code>(a: number, b: number)</code></span>`,`<span><strong>Declare return type:</strong> State what the function produces — <code>: number</code></span>`,`<span><strong>Compiler checks call sites:</strong> Every call is validated for correct argument count and types</span>`,`<span><strong>Optional/default params resolved:</strong> Omitted optional args become <code>undefined</code>; omitted defaulted args use the default expression</span>`,`<span><strong>Return value validated:</strong> Whatever the function returns must match the declared return type, or the compiler flags it</span>`]},{id:`arraystuples`,title:`Arrays, Tuples & Enums`,icon:`📚`,explain:`<p>TypeScript types an <strong>array</strong> as <code>number[]</code> or the equivalent generic form <code>Array&lt;number&gt;</code> — every element must match that element type. A <strong>tuple</strong> is a fixed-length array where each position has its <em>own</em> type, written <code>[string, number]</code> — perfect for a pair like a name and an age, or a React <code>useState</code> return value.</p>
<p>Tuples can mark trailing elements <strong>optional</strong> (<code>[string, number?]</code>) or use a <strong>rest element</strong> for a variable-length tail (<code>[string, ...number[]]</code>). Unlike a plain array, a tuple enforces both length and per-position type, so destructuring <code>const [name, age] = pair;</code> gives <code>name: string</code> and <code>age: number</code> automatically.</p>
<p>An <strong>enum</strong> defines a named set of constant values, useful for a fixed set of options like directions or statuses. Numeric enums auto-increment from <code>0</code> unless given explicit values; <strong>string enums</strong> require every member to have an explicit string value and are generally preferred because they produce more readable compiled output and safer debugging.</p>`,syntax:`<span class="kw">let</span> nums: <span class="kw">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">let</span> names: <span class="kw">Array</span><<span class="kw">string</span>> = [<span class="str">"a"</span>, <span class="str">"b"</span>];

<span class="cmt">// Tuple — fixed length, per-position types</span>
<span class="kw">let</span> pair: [<span class="kw">string</span>, <span class="kw">number</span>] = [<span class="str">"Bo"</span>, <span class="num">9</span>];
<span class="kw">let</span> withRest: [<span class="kw">string</span>, ...<span class="kw">number</span>[]] = [<span class="str">"scores"</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

<span class="cmt">// Enum</span>
<span class="kw">enum</span> Direction { Up, Down, Left, Right }   <span class="cmt">// 0,1,2,3</span>
<span class="kw">enum</span> Status { Idle = <span class="str">"IDLE"</span>, Done = <span class="str">"DONE"</span> } <span class="cmt">// string enum</span>`,examples:[{label:`Typed arrays vs tuples`,code:`<span class="kw">let</span> scores: <span class="kw">number</span>[] = [<span class="num">90</span>, <span class="num">85</span>, <span class="num">77</span>];
scores.<span class="fn-name">push</span>(<span class="num">100</span>);        <span class="cmt">// ✓ any length OK</span>

<span class="kw">let</span> entry: [<span class="kw">string</span>, <span class="kw">number</span>] = [<span class="str">"Alice"</span>, <span class="num">90</span>];
<span class="cmt">// entry = ["Alice", 90, 1]; // ✗ too many elements</span>
<span class="kw">const</span> [name, score] = entry; <span class="cmt">// name: string, score: number</span>
console.<span class="fn-name">log</span>(name, score); <span class="cmt">// "Alice" 90</span>`,out:`"Alice" 90`},{label:`Optional & rest tuple elements`,code:`<span class="kw">type</span> Coord = [<span class="kw">number</span>, <span class="kw">number</span>, <span class="kw">number</span><span class="op">?</span>]; <span class="cmt">// z is optional</span>
<span class="kw">const</span> a2d: Coord = [<span class="num">10</span>, <span class="num">20</span>];
<span class="kw">const</span> a3d: Coord = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];

<span class="kw">type</span> Row = [<span class="kw">string</span>, ...<span class="kw">number</span>[]];
<span class="kw">const</span> row: Row = [<span class="str">"Q1"</span>, <span class="num">100</span>, <span class="num">200</span>, <span class="num">300</span>];
console.<span class="fn-name">log</span>(a2d.length, row.length); <span class="cmt">// 2 4</span>`,out:`2 4`},{label:`Numeric vs string enums`,code:`<span class="kw">enum</span> Direction { Up, Down, Left, Right }
console.<span class="fn-name">log</span>(Direction.Up, Direction.Right); <span class="cmt">// 0 3</span>

<span class="kw">enum</span> Status { Idle = <span class="str">"IDLE"</span>, Loading = <span class="str">"LOADING"</span> }
<span class="kw">let</span> s: Status = Status.Loading;
console.<span class="fn-name">log</span>(s); <span class="cmt">// "LOADING" — readable at runtime</span>`,out:`0 3 | "LOADING"`}],svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎒</div>
<p>An <strong>array</strong> is a backpack that only holds one kind of item — all textbooks, or all pencils — and can hold any number of them. A <strong>tuple</strong> is a labeled egg carton with fixed slots: slot 1 always holds a name tag, slot 2 always holds a number, no more, no less. An <strong>enum</strong> is a multiple-choice answer sheet — instead of letting someone type any string for "status," they must pick from a pre-printed, named list of valid bubbles.</p>`,flow:[`<span><strong>Choose the shape:</strong> Use <code>T[]</code> for a same-typed, variable-length list; use a tuple for a fixed-position, mixed-type record</span>`,`<span><strong>Annotate array or tuple:</strong> <code>let nums: number[]</code> vs <code>let pair: [string, number]</code></span>`,`<span><strong>Compiler enforces shape:</strong> Arrays check every element type; tuples check both position and length</span>`,`<span><strong>Destructure with confidence:</strong> <code>const [name, age] = pair;</code> infers each variable type from its tuple position</span>`,`<span><strong>Enums replace magic values:</strong> Swap loose strings/numbers for named members — <code>Status.Loading</code> instead of the string <code>"loading"</code> scattered everywhere</span>`]},{id:`uniontypes`,title:`Union & Intersection Types`,icon:`🔀`,explain:`<p>A <strong>union type</strong> (<code>A | B</code>) means a value can be <em>one of several</em> types — "a string OR a number." Unions are how TypeScript models real-world variability, like a function parameter that accepts either an <code>id: string</code> or an <code>id: number</code>, or a <code>result</code> that is either data or an error.</p>
<p>An <strong>intersection type</strong> (<code>A & B</code>) means a value must satisfy <em>all</em> combined types at once — it merges every member from each type into one. Intersections are commonly used to compose smaller object shapes into a richer one, such as combining a <code>Timestamped</code> shape with a <code>Named</code> shape.</p>
<p>A special, very common union is the <strong>literal union</strong> — a fixed menu of exact string or number values, e.g. <code>type Size = "small" | "medium" | "large"</code>. This gives you compile-time-checked "enums" without the runtime overhead of an actual <code>enum</code>, and pairs naturally with <code>switch</code> statements for exhaustive handling.</p>`,syntax:`<span class="kw">type</span> ID = <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>;         <span class="cmt">// union — either type</span>
<span class="kw">type</span> Size = <span class="str">"sm"</span> <span class="op">|</span> <span class="str">"md"</span> <span class="op">|</span> <span class="str">"lg"</span>; <span class="cmt">// literal union</span>

<span class="kw">function</span> <span class="fn-name">printId</span>(id: ID) { console.<span class="fn-name">log</span>(id); }

<span class="kw">interface</span> Timestamped { createdAt: <span class="kw">Date</span>; }
<span class="kw">interface</span> Named { name: <span class="kw">string</span>; }
<span class="kw">type</span> Entity = Timestamped <span class="op">&</span> Named; <span class="cmt">// intersection — both</span>

<span class="kw">const</span> e: Entity = { name: <span class="str">"Doc"</span>, createdAt: <span class="kw">new</span> <span class="fn-name">Date</span>() };`,examples:[{label:`Union parameter accepting two types`,code:`<span class="kw">function</span> <span class="fn-name">formatId</span>(id: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> id === <span class="str">"number"</span>) <span class="kw">return</span> <span class="str">"#"</span> + id;
  <span class="kw">return</span> id.<span class="fn-name">toUpperCase</span>();
}
console.<span class="fn-name">log</span>(<span class="fn-name">formatId</span>(<span class="num">42</span>));    <span class="cmt">// "#42"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">formatId</span>(<span class="str">"abc"</span>)); <span class="cmt">// "ABC"</span>`,out:`"#42" | "ABC"`},{label:`Literal union for a fixed menu`,code:`<span class="kw">type</span> Size = <span class="str">"sm"</span> <span class="op">|</span> <span class="str">"md"</span> <span class="op">|</span> <span class="str">"lg"</span>;

<span class="kw">function</span> <span class="fn-name">padding</span>(size: Size): <span class="kw">number</span> {
  <span class="kw">if</span> (size === <span class="str">"sm"</span>) <span class="kw">return</span> <span class="num">4</span>;
  <span class="kw">if</span> (size === <span class="str">"md"</span>) <span class="kw">return</span> <span class="num">8</span>;
  <span class="kw">return</span> <span class="num">16</span>;
}
<span class="cmt">// padding("xl"); // ✗ Argument not assignable to type 'Size'</span>
console.<span class="fn-name">log</span>(<span class="fn-name">padding</span>(<span class="str">"md"</span>)); <span class="cmt">// 8</span>`,out:`8`},{label:`Intersection combining two shapes`,code:`<span class="kw">interface</span> Sized { width: <span class="kw">number</span>; height: <span class="kw">number</span>; }
<span class="kw">interface</span> Colored { color: <span class="kw">string</span>; }
<span class="kw">type</span> Box = Sized <span class="op">&</span> Colored;

<span class="kw">const</span> box: Box = { width: <span class="num">10</span>, height: <span class="num">20</span>, color: <span class="str">"red"</span> };
<span class="cmt">// missing any property → compile error</span>
console.<span class="fn-name">log</span>(box); <span class="cmt">// { width:10, height:20, color:"red" }</span>`,out:`{ width: 10, height: 20, color: "red" }`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🚪</div>
<p>A <strong>union type</strong> is like a <strong>door with two possible keys</strong> — a brass key or a silver key opens it, but you only ever bring one. A <strong>literal union</strong> is a specific keyring with exactly three labeled keys ("small," "medium," "large") and nothing else fits the lock. An <strong>intersection type</strong> is the opposite: it's a <strong>combo badge</strong> that must show both your employee ID AND your parking permit stamped on the same card — missing either half makes the badge invalid.</p>`,flow:[`<span><strong>Model the possibilities:</strong> Write <code>A | B</code> when a value can legitimately be either type</span>`,`<span><strong>Narrow before use:</strong> Use <code>typeof</code>, <code>in</code>, or equality checks to figure out which member of the union you actually have</span>`,`<span><strong>Compiler restricts access:</strong> Only properties/methods common to every union member are allowed without narrowing first</span>`,`<span><strong>Model required combinations:</strong> Write <code>A & B</code> when a value must satisfy every listed shape simultaneously</span>`,`<span><strong>Merge resolves to one type:</strong> The intersection resulting shape includes all properties from every combined type — missing any one is a compile error</span>`]},{id:`narrowing`,title:`Type Narrowing & Guards`,icon:`🔍`,explain:`<p><strong>Type narrowing</strong> is how TypeScript progressively refines a broad type (like a union) down to a more specific one, based on runtime checks in your code. Once you write <code>if (typeof x === "string")</code>, TypeScript knows that inside that branch, <code>x</code> is definitely a <code>string</code> — and lets you call <code>x.toUpperCase()</code> safely.</p>
<p>Common narrowing techniques include <code>typeof</code> (for primitives), <code>instanceof</code> (for class instances), the <code>in</code> operator (checking whether a property exists on an object), and simple equality/truthiness checks. For discriminated unions — object types sharing one literal "tag" property like <code>kind: "circle" | "square"</code> — switching on that tag narrows the whole object at once.</p>
<p>A <strong>custom type guard</strong> is a function whose return type is a <em>type predicate</em>: <code>function isFish(x: Animal): x is Fish</code>. Calling it inside an <code>if</code> narrows the checked variable in the same way built-in guards do, letting you encapsulate complex narrowing logic into a reusable, named function.</p>`,syntax:`<span class="kw">function</span> <span class="fn-name">print</span>(x: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">"string"</span>) x.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// x: string</span>
  <span class="kw">else</span> x.<span class="fn-name">toFixed</span>(<span class="num">2</span>);                    <span class="cmt">// x: number</span>
}

<span class="kw">if</span> (value <span class="kw">instanceof</span> <span class="fn-name">Error</span>) { <span class="cmt">/* value: Error */</span> }
<span class="kw">if</span> (<span class="str">"bark"</span> <span class="kw">in</span> animal) { <span class="cmt">/* animal has bark() */</span> }

<span class="cmt">// Custom type guard (type predicate)</span>
<span class="kw">function</span> <span class="fn-name">isFish</span>(a: Fish <span class="op">|</span> Bird): a <span class="kw">is</span> Fish {
  <span class="kw">return</span> (a <span class="kw">as</span> Fish).swim <span class="op">!==</span> <span class="kw">undefined</span>;
}`,examples:[{label:`typeof narrowing`,code:`<span class="kw">function</span> <span class="fn-name">describe</span>(x: <span class="kw">string</span> <span class="op">|</span> <span class="kw">number</span>): <span class="kw">string</span> {
  <span class="kw">if</span> (<span class="kw">typeof</span> x === <span class="str">"string"</span>) {
    <span class="kw">return</span> <span class="str">"text: "</span> + x.<span class="fn-name">toUpperCase</span>(); <span class="cmt">// x is string here</span>
  }
  <span class="kw">return</span> <span class="str">"num: "</span> + x.<span class="fn-name">toFixed</span>(<span class="num">1</span>);   <span class="cmt">// x is number here</span>
}
console.<span class="fn-name">log</span>(<span class="fn-name">describe</span>(<span class="str">"hi"</span>), <span class="fn-name">describe</span>(<span class="num">3</span>)); <span class="cmt">// "text: HI" "num: 3.0"</span>`,out:`"text: HI" "num: 3.0"`},{label:`Discriminated union narrowed by switch`,code:`<span class="kw">type</span> Shape =
  | { kind: <span class="str">"circle"</span>; radius: <span class="kw">number</span> }
  | { kind: <span class="str">"square"</span>; side: <span class="kw">number</span> };

<span class="kw">function</span> <span class="fn-name">area</span>(s: Shape): <span class="kw">number</span> {
  <span class="kw">switch</span> (s.kind) {
    <span class="kw">case</span> <span class="str">"circle"</span>: <span class="kw">return</span> Math.PI * s.radius ** <span class="num">2</span>;
    <span class="kw">case</span> <span class="str">"square"</span>: <span class="kw">return</span> s.side ** <span class="num">2</span>;
  }
}
console.<span class="fn-name">log</span>(<span class="fn-name">area</span>({ kind: <span class="str">"square"</span>, side: <span class="num">4</span> })); <span class="cmt">// 16</span>`,out:`16`},{label:`Custom type guard (type predicate)`,code:`<span class="kw">interface</span> Fish { swim(): <span class="kw">void</span>; }
<span class="kw">interface</span> Bird { fly(): <span class="kw">void</span>; }

<span class="kw">function</span> <span class="fn-name">isFish</span>(a: Fish <span class="op">|</span> Bird): a <span class="kw">is</span> Fish {
  <span class="kw">return</span> (a <span class="kw">as</span> Fish).swim <span class="op">!==</span> <span class="kw">undefined</span>;
}
<span class="kw">function</span> <span class="fn-name">move</span>(a: Fish <span class="op">|</span> Bird) {
  <span class="kw">if</span> (<span class="fn-name">isFish</span>(a)) a.<span class="fn-name">swim</span>();  <span class="cmt">// a: Fish</span>
  <span class="kw">else</span> a.<span class="fn-name">fly</span>();            <span class="cmt">// a: Bird</span>
}`,out:`a narrowed to Fish or Bird per branch`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🕵️</div>
<p>Narrowing is like a <strong>detective eliminating suspects</strong>. At the start, the suspect (your variable) could be any of several people (a union type). Each clue you check — "was it a string?", "does it have a <code>bark</code> property?" — rules out possibilities, until only one suspect remains. Once narrowed, the detective (compiler) lets you act with full confidence, because every alternative has been logically eliminated by the checks in that branch.</p>`,flow:[`<span><strong>Start broad:</strong> A variable has a union type — <code>string | number</code> or a union of object shapes</span>`,`<span><strong>Runtime check:</strong> Use <code>typeof</code>, <code>instanceof</code>, <code>in</code>, a discriminant property, or a custom guard function</span>`,`<span><strong>Compiler narrows:</strong> Inside the true branch, TypeScript treats the variable as the more specific type</span>`,`<span><strong>Safe member access:</strong> Only the narrowed type methods/properties are accessible without further checks or casts</span>`,`<span><strong>Exhaustiveness (optional):</strong> A final <code>else</code> assigned to a <code>never</code>-typed variable ensures every union member was handled</span>`]},{id:`classes`,title:`Classes & Access Modifiers`,icon:`🏛️`,explain:`<p>TypeScript extends JavaScript classes with <strong>access modifiers</strong> that control visibility of properties and methods: <code>public</code> (default — accessible everywhere), <code>private</code> (accessible only inside the declaring class), and <code>protected</code> (accessible inside the class and its subclasses). These are enforced at compile time only — like all TypeScript types, they are erased when compiled to JavaScript.</p>
<p>A common shortcut is <strong>parameter properties</strong>: adding a modifier directly to a constructor parameter (<code>constructor(private name: string)</code>) automatically declares and assigns the property, removing the need for separate field declarations and <code>this.name = name</code> boilerplate.</p>
<p>Classes can be marked <code>abstract</code> to define a base that cannot be instantiated directly and must be subclassed — abstract classes can declare <code>abstract</code> methods that subclasses are required to implement. Classes can also <code>implement</code> one or more interfaces, guaranteeing they provide every member the interface requires.</p>`,syntax:`<span class="kw">class</span> Person {
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
}`,examples:[{label:`Access modifiers enforced at compile time`,code:`<span class="kw">class</span> BankAccount {
  <span class="kw">private</span> balance = <span class="num">0</span>;
  <span class="kw">deposit</span>(amount: <span class="kw">number</span>) { <span class="kw">this</span>.balance += amount; }
  <span class="fn-name">getBalance</span>() { <span class="kw">return</span> <span class="kw">this</span>.balance; }
}
<span class="kw">const</span> acc = <span class="kw">new</span> <span class="fn-name">BankAccount</span>();
acc.<span class="fn-name">deposit</span>(<span class="num">100</span>);
<span class="cmt">// acc.balance;      // ✗ Property 'balance' is private</span>
console.<span class="fn-name">log</span>(acc.<span class="fn-name">getBalance</span>()); <span class="cmt">// 100</span>`,out:`100`},{label:`Parameter properties shortcut`,code:`<span class="kw">class</span> Point {
  <span class="kw">constructor</span>(<span class="kw">public</span> x: <span class="kw">number</span>, <span class="kw">public</span> y: <span class="kw">number</span>) {}
  <span class="fn-name">toString</span>() { <span class="kw">return</span> <span class="op">\`</span>(<span class="op">\${</span><span class="kw">this</span>.x<span class="op">}</span>,<span class="op">\${</span><span class="kw">this</span>.y<span class="op">}</span>)<span class="op">\`</span>; }
}
<span class="kw">const</span> p = <span class="kw">new</span> <span class="fn-name">Point</span>(<span class="num">3</span>, <span class="num">4</span>);
console.<span class="fn-name">log</span>(p.<span class="fn-name">toString</span>()); <span class="cmt">// "(3,4)"</span>`,out:`"(3,4)"`},{label:`Abstract class + implements interface`,code:`<span class="kw">interface</span> Drawable { <span class="fn-name">draw</span>(): <span class="kw">void</span>; }
<span class="kw">abstract</span> <span class="kw">class</span> Shape {
  <span class="kw">abstract</span> <span class="fn-name">area</span>(): <span class="kw">number</span>;
}
<span class="kw">class</span> Square <span class="kw">extends</span> Shape <span class="kw">implements</span> Drawable {
  <span class="kw">constructor</span>(<span class="kw">private</span> side: <span class="kw">number</span>) { <span class="kw">super</span>(); }
  <span class="fn-name">area</span>() { <span class="kw">return</span> <span class="kw">this</span>.side ** <span class="num">2</span>; }
  <span class="fn-name">draw</span>() { console.<span class="fn-name">log</span>(<span class="str">"drawing square"</span>); }
}
console.<span class="fn-name">log</span>(<span class="kw">new</span> <span class="fn-name">Square</span>(<span class="num">4</span>).<span class="fn-name">area</span>()); <span class="cmt">// 16</span>`,out:`16`}],svgHTML:`<svg viewBox="0 0 480 205" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🏢</div>
<p>Access modifiers are like <strong>rooms in an office building</strong>. <code>public</code> is the lobby — anyone can walk in. <code>protected</code> is a department floor — only employees of that department and its sub-teams (subclasses) can badge in. <code>private</code> is a locked personal office — only the person who owns it (the exact class) can enter, not even other departments in the same building. An <strong>abstract class</strong> is a building blueprint that can't be lived in until a real building (a concrete subclass) is constructed from it.</p>`,flow:[`<span><strong>Declare fields with modifiers:</strong> Mark each property <code>public</code>, <code>protected</code>, or <code>private</code></span>`,`<span><strong>Constructor runs:</strong> Parameter properties (<code>constructor(private x: number)</code>) auto-assign to <code>this</code></span>`,`<span><strong>Compiler checks access:</strong> Code outside the class (or outside the subclass, for protected) is blocked from touching restricted members</span>`,`<span><strong>Abstract members enforced:</strong> Any subclass of an abstract class must implement all its <code>abstract</code> methods or itself stay abstract</span>`,`<span><strong>Interface contract verified:</strong> A class using <code>implements Interface</code> must provide every member the interface declares, or fail to compile</span>`]},{id:`generics`,title:`Generics`,icon:`🧩`,explain:`<p><strong>Generics</strong> let you write functions, interfaces, and classes that work with <em>any</em> type while still preserving type information, instead of resorting to <code>any</code>. A generic type parameter, conventionally named <code>T</code>, acts as a placeholder filled in at the call site: <code>function identity&lt;T&gt;(value: T): T</code> — call it with a <code>string</code> and TypeScript knows the return is a <code>string</code>, call it with a <code>number</code> and it knows the return is a <code>number</code>.</p>
<p>Generics can be <strong>constrained</strong> with <code>extends</code> to require the type parameter to have certain properties: <code>function getLength&lt;T extends { length: number }&gt;(item: T)</code> only accepts values with a <code>.length</code> property. Generics can also have <strong>default types</strong> (<code>&lt;T = string&gt;</code>) and multiple parameters (<code>&lt;K, V&gt;</code> for a key/value pair).</p>
<p>Generics show up throughout the type system: <code>Array&lt;T&gt;</code>, <code>Promise&lt;T&gt;</code>, and <code>Map&lt;K, V&gt;</code> are all generic types. Generic interfaces and classes work the same way, letting one reusable data structure (a <code>Box&lt;T&gt;</code>, a <code>Stack&lt;T&gt;</code>) hold any type while staying fully type-checked.</p>`,syntax:`<span class="kw">function</span> <span class="fn-name">identity</span><T>(value: T): T { <span class="kw">return</span> value; }
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
}`,examples:[{label:`Generic identity function`,code:`<span class="kw">function</span> <span class="fn-name">identity</span><T>(value: T): T {
  <span class="kw">return</span> value;
}
<span class="kw">const</span> a = <span class="fn-name">identity</span><<span class="kw">string</span>>(<span class="str">"hello"</span>); <span class="cmt">// a: string</span>
<span class="kw">const</span> b = <span class="fn-name">identity</span>(<span class="num">99</span>);            <span class="cmt">// b: number (inferred)</span>
console.<span class="fn-name">log</span>(a, b); <span class="cmt">// "hello" 99</span>`,out:`"hello" 99`},{label:`Constrained generic with extends`,code:`<span class="kw">function</span> <span class="fn-name">longest</span><T <span class="kw">extends</span> { length: <span class="kw">number</span> }>(a: T, b: T): T {
  <span class="kw">return</span> a.length <span class="op">>=</span> b.length <span class="op">?</span> a : b;
}
console.<span class="fn-name">log</span>(<span class="fn-name">longest</span>(<span class="str">"cat"</span>, <span class="str">"elephant"</span>));    <span class="cmt">// "elephant"</span>
console.<span class="fn-name">log</span>(<span class="fn-name">longest</span>([<span class="num">1</span>,<span class="num">2</span>], [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>]));  <span class="cmt">// [1,2,3]</span>`,out:`"elephant" | [1, 2, 3]`},{label:`Generic class: a type-safe Stack`,code:`<span class="kw">class</span> Stack<T> {
  <span class="kw">private</span> items: T[] = [];
  <span class="fn-name">push</span>(item: T) { <span class="kw">this</span>.items.<span class="fn-name">push</span>(item); }
  <span class="fn-name">pop</span>(): T <span class="op">|</span> <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.items.<span class="fn-name">pop</span>(); }
}
<span class="kw">const</span> nums = <span class="kw">new</span> <span class="fn-name">Stack</span><<span class="kw">number</span>>();
nums.<span class="fn-name">push</span>(<span class="num">1</span>); nums.<span class="fn-name">push</span>(<span class="num">2</span>);
console.<span class="fn-name">log</span>(nums.<span class="fn-name">pop</span>()); <span class="cmt">// 2</span>`,out:`2`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🧰</div>
<p>A generic is like a <strong>vending machine mold that adapts to whatever coin shape you insert</strong>. The machine (the generic function) doesn't hardcode "accepts quarters" — it says "accepts <em>whatever type T you feed me</em>, and I'll hand back an item of that exact same type T." Feed it a string, get a string back with full type safety; feed it a number, get a number back. Compare that to a machine that accepts <code>any</code> coin and hands back a mystery item of unknown type — generics keep the connection between input and output type intact.</p>`,flow:[`<span><strong>Declare a type parameter:</strong> Add <code>&lt;T&gt;</code> after the function/class/interface name</span>`,`<span><strong>Use T as a placeholder:</strong> Reference <code>T</code> in parameter types, return types, or property types</span>`,`<span><strong>Call site supplies (or infers) T:</strong> <code>identity&lt;string&gt;("hi")</code> or simply <code>identity("hi")</code> — TypeScript infers T from the argument</span>`,`<span><strong>Constraints narrow what T can be:</strong> <code>&lt;T extends {length:number}&gt;</code> restricts T to shapes that have that property</span>`,`<span><strong>Type safety flows through:</strong> Whatever concrete type filled T is preserved in the return value or resulting instance — no <code>any</code> needed</span>`]},{id:`advancedtypes`,title:`Advanced & Utility Types`,icon:`🧠`,explain:`<p>TypeScript ships a set of built-in <strong>utility types</strong> that transform existing types without redeclaring them. <code>Partial&lt;T&gt;</code> makes every property optional (handy for patch/update objects); <code>Required&lt;T&gt;</code> does the opposite, making every property mandatory. <code>Readonly&lt;T&gt;</code> makes every property immutable. <code>Pick&lt;T, K&gt;</code> selects a subset of keys; <code>Omit&lt;T, K&gt;</code> removes a subset of keys.</p>
<p><code>Record&lt;K, V&gt;</code> builds an object type with keys of type <code>K</code> and values of type <code>V</code> — useful for dictionaries and lookup tables. These utilities are themselves built from two more fundamental features: <strong>mapped types</strong> (<code>{ [K in keyof T]: ... }</code>, which iterate over a type's keys to build a new type) and <strong>conditional types</strong> (<code>T extends U ? X : Y</code>, which branch on a type relationship).</p>
<p>The <code>keyof</code> operator extracts the union of an object type's property names as a type (<code>keyof User</code> becomes <code>"id" | "name" | "email"</code>), and is frequently combined with generics to write functions like a type-safe property getter that only accepts valid keys of a given object.</p>`,syntax:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; email: <span class="kw">string</span>; }

<span class="kw">type</span> PartialUser  = <span class="fn-name">Partial</span><User>;   <span class="cmt">// all optional</span>
<span class="kw">type</span> ReadonlyUser = <span class="fn-name">Readonly</span><User>;  <span class="cmt">// all readonly</span>
<span class="kw">type</span> UserPreview  = <span class="fn-name">Pick</span><User, <span class="str">"id"</span> <span class="op">|</span> <span class="str">"name"</span>>;
<span class="kw">type</span> UserNoEmail  = <span class="fn-name">Omit</span><User, <span class="str">"email"</span>>;
<span class="kw">type</span> Scores       = <span class="fn-name">Record</span><<span class="kw">string</span>, <span class="kw">number</span>>; <span class="cmt">// dictionary</span>

<span class="kw">type</span> Keys = <span class="kw">keyof</span> User; <span class="cmt">// "id" | "name" | "email"</span>

<span class="cmt">// Conditional type</span>
<span class="kw">type</span> IsString<T> = T <span class="kw">extends</span> <span class="kw">string</span> <span class="op">?</span> <span class="kw">true</span> : <span class="kw">false</span>;`,examples:[{label:`Partial & Readonly for updates`,code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; }

<span class="kw">function</span> <span class="fn-name">updateUser</span>(id: <span class="kw">number</span>, patch: <span class="fn-name">Partial</span><User>) { <span class="cmt">/*..*/</span> }
<span class="fn-name">updateUser</span>(<span class="num">1</span>, { name: <span class="str">"New Name"</span> }); <span class="cmt">// ✓ id not required</span>

<span class="kw">const</span> frozen: <span class="fn-name">Readonly</span><User> = { id: <span class="num">1</span>, name: <span class="str">"Bo"</span> };
<span class="cmt">// frozen.name = "X"; // ✗ readonly property</span>`,out:`update accepted with partial patch; frozen is immutable`},{label:`Pick, Omit & Record`,code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; email: <span class="kw">string</span>; }

<span class="kw">type</span> Preview = <span class="fn-name">Pick</span><User, <span class="str">"id"</span> <span class="op">|</span> <span class="str">"name"</span>>;
<span class="kw">const</span> p: Preview = { id: <span class="num">1</span>, name: <span class="str">"Bo"</span> };

<span class="kw">type</span> Scores = <span class="fn-name">Record</span><<span class="kw">string</span>, <span class="kw">number</span>>;
<span class="kw">const</span> scores: Scores = { math: <span class="num">90</span>, art: <span class="num">85</span> };
console.<span class="fn-name">log</span>(p, scores.math); <span class="cmt">// {id:1,name:"Bo"} 90</span>`,out:`{ id: 1, name: "Bo" }  90`},{label:`keyof + generics: type-safe getter`,code:`<span class="kw">function</span> <span class="fn-name">getProp</span><T, K <span class="kw">extends</span> <span class="kw">keyof</span> T>(obj: T, key: K): T[K] {
  <span class="kw">return</span> obj[key];
}
<span class="kw">const</span> user = { id: <span class="num">1</span>, name: <span class="str">"Ana"</span> };
console.<span class="fn-name">log</span>(<span class="fn-name">getProp</span>(user, <span class="str">"name"</span>)); <span class="cmt">// "Ana"</span>
<span class="cmt">// getProp(user, "age"); // ✗ "age" is not a key of user</span>`,out:`"Ana"`}],svgHTML:`<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🛠️</div>
<p>Utility types are like <strong>attachments for a single power drill</strong>. You already built the base tool (your <code>User</code> interface). Instead of buying a whole new drill for each job, you snap on a different bit: <code>Partial</code> loosens every requirement (a screwdriver bit for adjusting one screw at a time), <code>Readonly</code> locks the chuck so nothing can spin loose, <code>Pick</code> grabs just the one attachment you need, and <code>Omit</code> is the same drill with one attachment removed. <code>keyof</code> is the drill's spec sheet — it lists exactly which bits are compatible.</p>`,flow:[`<span><strong>Start from a base type:</strong> An existing <code>interface</code> or <code>type</code> like <code>User</code></span>`,`<span><strong>Apply a utility type:</strong> Wrap it — <code>Partial&lt;User&gt;</code>, <code>Pick&lt;User, "id"&gt;</code>, <code>Record&lt;string, number&gt;</code></span>`,`<span><strong>Compiler derives the new shape:</strong> Internally this runs a mapped type over <code>keyof T</code>, producing a fresh type without hand-written duplication</span>`,`<span><strong>Conditional types branch when needed:</strong> <code>T extends U ? X : Y</code> resolves to <code>X</code> or <code>Y</code> depending on whether <code>T</code> is assignable to <code>U</code></span>`,`<span><strong>Use the derived type:</strong> Annotate variables/parameters with the transformed type just like any other</span>`]},{id:`inference`,title:`Type Inference & Assertions`,icon:`🎯`,explain:`<p><strong>Type inference</strong> means TypeScript figures out a type automatically without an explicit annotation. Writing <code>let age = 30;</code> infers <code>age: number</code> from the initializer — no <code>: number</code> needed. Inference also flows through function return types, array literals, and generic calls, which is why well-typed TypeScript code often needs far fewer annotations than beginners expect.</p>
<p><strong>Contextual typing</strong> is inference in the other direction: when a value is used somewhere with a known expected type (like an array callback), TypeScript infers the parameter types of that callback from context, so <code>[1,2,3].map(n => n * 2)</code> knows <code>n</code> is a <code>number</code> without you writing it.</p>
<p>A <strong>type assertion</strong> (<code>value as Type</code>, or the older <code>&lt;Type&gt;value</code> syntax) tells the compiler "trust me, treat this value as this type" — it does not perform any runtime conversion or check, unlike <code>Number()</code> or <code>String()</code>. Assertions are appropriate when you know more than the compiler can infer (e.g. after a DOM query), but overusing them defeats the purpose of static typing. The <strong>non-null assertion</strong> (<code>value!</code>) tells the compiler a value is definitely not <code>null</code>/<code>undefined</code>, again without a runtime check.</p>`,syntax:`<span class="kw">let</span> age = <span class="num">30</span>;              <span class="cmt">// inferred: number</span>
<span class="kw">let</span> list = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];      <span class="cmt">// inferred: number[]</span>
<span class="kw">function</span> <span class="fn-name">double</span>(n: <span class="kw">number</span>) { <span class="kw">return</span> n * <span class="num">2</span>; } <span class="cmt">// return inferred: number</span>

<span class="cmt">// Type assertion — no runtime check</span>
<span class="kw">const</span> el = document.<span class="fn-name">getElementById</span>(<span class="str">"root"</span>) <span class="kw">as</span> <span class="fn-name">HTMLDivElement</span>;
<span class="kw">const</span> el2 = <<span class="fn-name">HTMLDivElement</span>>document.<span class="fn-name">getElementById</span>(<span class="str">"root"</span>);

<span class="cmt">// Non-null assertion</span>
<span class="kw">function</span> <span class="fn-name">process</span>(value<span class="op">?</span>: <span class="kw">string</span>) {
  console.<span class="fn-name">log</span>(value<span class="op">!</span>.<span class="fn-name">toUpperCase</span>()); <span class="cmt">// asserts value is not null/undefined</span>
}`,examples:[{label:`Inference from literals and returns`,code:`<span class="kw">let</span> title = <span class="str">"Mastery Lab"</span>;  <span class="cmt">// inferred: string</span>
<span class="kw">let</span> scores = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];    <span class="cmt">// inferred: number[]</span>

<span class="kw">function</span> <span class="fn-name">sum</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>) {
  <span class="kw">return</span> a + b;             <span class="cmt">// return type inferred: number</span>
}
<span class="cmt">// title = 5; // ✗ Type 'number' is not assignable to 'string'</span>
console.<span class="fn-name">log</span>(<span class="fn-name">sum</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// 5</span>`,out:`5`},{label:`Contextual typing in callbacks`,code:`<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">const</span> doubled = nums.<span class="fn-name">map</span>(n <span class="op">=></span> n * <span class="num">2</span>); <span class="cmt">// n inferred: number</span>

<span class="kw">const</span> btn = document.<span class="fn-name">querySelector</span>(<span class="str">"button"</span>);
btn<span class="op">?</span>.<span class="fn-name">addEventListener</span>(<span class="str">"click"</span>, (e) <span class="op">=></span> {
  console.<span class="fn-name">log</span>(e.type); <span class="cmt">// e inferred: MouseEvent</span>
});
console.<span class="fn-name">log</span>(doubled); <span class="cmt">// [2, 4, 6]</span>`,out:`[2, 4, 6]`},{label:`Type assertion vs non-null assertion`,code:`<span class="kw">interface</span> Config { url: <span class="kw">string</span>; }
<span class="kw">const</span> raw: <span class="kw">unknown</span> = { url: <span class="str">"/api"</span> };
<span class="kw">const</span> cfg = raw <span class="kw">as</span> Config;    <span class="cmt">// trust me — compiler stops checking</span>
console.<span class="fn-name">log</span>(cfg.url);    <span class="cmt">// "/api"</span>

<span class="kw">function</span> <span class="fn-name">getLen</span>(s<span class="op">?</span>: <span class="kw">string</span>) {
  <span class="kw">return</span> s<span class="op">!</span>.length;   <span class="cmt">// non-null assertion — no runtime check!</span>
}`,out:`"/api"`}],svgHTML:`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🔎</div>
<p><strong>Inference</strong> is like a waiter who watches what you order and automatically writes "vegetarian" on the ticket because you ordered a salad — no need to declare it yourself. A <strong>type assertion</strong> is different: it's you personally crossing out the kitchen's guess and writing "this is definitely gluten-free" on the ticket — the kitchen trusts your note and stops checking, even though nobody actually verified the ingredients. If you're wrong, the mistake surfaces later, at runtime, not at the ticket-writing stage.</p>`,flow:[`<span><strong>Write a value without annotation:</strong> <code>let age = 30;</code></span>`,`<span><strong>Compiler examines the initializer:</strong> Infers the narrowest sensible type from the literal or expression</span>`,`<span><strong>Inference propagates:</strong> Through function returns, array elements, and generic type arguments</span>`,`<span><strong>Contextual typing (reverse direction):</strong> A callback's parameter types are inferred from where the callback is used, e.g. inside <code>.map()</code></span>`,`<span><strong>Assertions override inference when needed:</strong> <code>value as Type</code> or <code>value!</code> bypasses the compiler's own guess — use sparingly, since no runtime check backs it up</span>`]},{id:`modules`,title:`Modules & Namespaces`,icon:`📦`,explain:`<p>TypeScript uses standard ES module syntax — <code>export</code> and <code>import</code> — to split code across files while keeping full type checking across the boundary. You can export values, functions, classes, interfaces, and types individually (<strong>named exports</strong>) or designate one <strong>default export</strong> per file. Types and values can be exported from the very same statement, and re-exported from a central "barrel" file with <code>export * from "./module"</code>.</p>
<p>When you only need a <em>type</em> from another module (not a runtime value), use <code>import type { User } from "./types"</code>. This makes the intent explicit and lets the compiler safely elide the import entirely from the compiled JavaScript, since types don't exist at runtime.</p>
<p><strong>Namespaces</strong> (<code>namespace MyLib { ... }</code>) are TypeScript's older, pre-ES-modules way of grouping related code under one global-ish name to avoid collisions. They still appear in some legacy codebases and <code>.d.ts</code> declaration files, but modern TypeScript projects should prefer ES modules for organizing code — namespaces are mostly reserved for global-scope type declarations today.</p>`,syntax:`<span class="cmt">// math.ts</span>
<span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>) { <span class="kw">return</span> a + b; }
<span class="kw">export</span> <span class="kw">interface</span> Point { x: <span class="kw">number</span>; y: <span class="kw">number</span>; }
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">class</span> Calculator { <span class="cmt">/*..*/</span> }

<span class="cmt">// app.ts</span>
<span class="kw">import</span> Calculator, { add, Point } <span class="kw">from</span> <span class="str">"./math"</span>;
<span class="kw">import</span> <span class="kw">type</span> { Point <span class="kw">as</span> Coord } <span class="kw">from</span> <span class="str">"./math"</span>; <span class="cmt">// type-only import</span>

<span class="cmt">// legacy namespace (avoid in new code)</span>
<span class="kw">namespace</span> Geometry {
  <span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">area</span>(r: <span class="kw">number</span>) { <span class="kw">return</span> Math.PI * r * r; }
}`,examples:[{label:`Named exports & imports`,code:`<span class="cmt">// shapes.ts</span>
<span class="kw">export</span> <span class="kw">interface</span> Circle { radius: <span class="kw">number</span>; }
<span class="kw">export</span> <span class="kw">function</span> <span class="fn-name">area</span>(c: Circle): <span class="kw">number</span> {
  <span class="kw">return</span> Math.PI * c.radius ** <span class="num">2</span>;
}

<span class="cmt">// main.ts</span>
<span class="kw">import</span> { area, Circle } <span class="kw">from</span> <span class="str">"./shapes"</span>;
<span class="kw">const</span> c: Circle = { radius: <span class="num">2</span> };
console.<span class="fn-name">log</span>(<span class="fn-name">area</span>(c).<span class="fn-name">toFixed</span>(<span class="num">2</span>)); <span class="cmt">// "12.57"</span>`,out:`"12.57"`},{label:`Default export + type-only import`,code:`<span class="cmt">// logger.ts</span>
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">function</span> <span class="fn-name">log</span>(msg: <span class="kw">string</span>) { console.<span class="fn-name">log</span>(<span class="str">"[LOG] "</span> + msg); }
<span class="kw">export</span> <span class="kw">interface</span> LogOptions { level: <span class="kw">string</span>; }

<span class="cmt">// app.ts</span>
<span class="kw">import</span> log <span class="kw">from</span> <span class="str">"./logger"</span>;
<span class="kw">import</span> <span class="kw">type</span> { LogOptions } <span class="kw">from</span> <span class="str">"./logger"</span>; <span class="cmt">// erased at compile time</span>
<span class="fn-name">log</span>(<span class="str">"started"</span>); <span class="cmt">// "[LOG] started"</span>`,out:`"[LOG] started"`},{label:`Barrel file re-exports`,code:`<span class="cmt">// index.ts — a "barrel" file</span>
<span class="kw">export</span> <span class="op">*</span> <span class="kw">from</span> <span class="str">"./user"</span>;
<span class="kw">export</span> <span class="op">*</span> <span class="kw">from</span> <span class="str">"./product"</span>;

<span class="cmt">// consumer.ts</span>
<span class="kw">import</span> { User, Product } <span class="kw">from</span> <span class="str">"./index"</span>; <span class="cmt">// one import, two modules</span>
console.<span class="fn-name">log</span>(<span class="str">"barrel import works"</span>);`,out:`"barrel import works"`}],svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">📮</div>
<p>Modules are like <strong>separate mailboxes for separate departments</strong>. Each file's <code>export</code> statement decides what letters (functions, types, classes) it's willing to send out; other files <code>import</code> only the specific letters they need. A <strong>default export</strong> is the one "headline" item a mailbox is best known for. An <code>import type</code> is a photocopy of an address label — useful for planning but never actually mailed, so it adds no weight (no runtime code) to the final package. <strong>Namespaces</strong> are the old-fashioned shared bulletin board everyone tacked notices to before individual mailboxes (modules) became the norm.</p>`,flow:[`<span><strong>Export from the source file:</strong> Mark functions, classes, types, or interfaces with <code>export</code> (named) or <code>export default</code> (one per file)</span>`,`<span><strong>Import in the consumer file:</strong> <code>import { add } from "./math"</code> pulls in only what is referenced</span>`,`<span><strong>Type-only imports elided:</strong> <code>import type {...}</code> is stripped entirely from the compiled JavaScript output</span>`,`<span><strong>Compiler checks cross-file types:</strong> Calling an imported function with the wrong argument type is still a compile error, exactly as if it were local</span>`,`<span><strong>Barrel files aggregate exports:</strong> An <code>index.ts</code> re-exporting several modules lets consumers import from one place</span>`]},{id:`decorators`,title:`Decorators`,icon:`🎀`,explain:`<p>A <strong>decorator</strong> is a special kind of declaration — written as <code>@expression</code> — that can be attached to a class, method, accessor, property, or parameter to observe, modify, or replace its behavior. Decorators are a compile-time feature enabled with <code>"experimentalDecorators": true</code> in <code>tsconfig.json</code> (or the newer stable ECMAScript decorators proposal TypeScript now also supports), and are heavily used by frameworks like Angular and NestJS.</p>
<p>A decorator is simply a function. A <strong>class decorator</strong> receives the constructor and can extend or replace it. A <strong>method decorator</strong> receives the target, method name, and a property descriptor, letting it wrap the original method — for example to log calls or measure timing. <strong>Decorator factories</strong> (a function that returns a decorator, like <code>@Column("varchar")</code>) let you pass configuration into the decorator.</p>
<p>Multiple decorators on the same declaration are applied <strong>bottom-up</strong> — the one closest to the declaration runs first. Decorators are widely used for cross-cutting concerns (logging, validation, dependency injection, ORM column mapping) so the business logic in the class body stays clean.</p>`,syntax:`<span class="cmt">// tsconfig.json: "experimentalDecorators": true</span>

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
}`,examples:[{label:`Method decorator that logs calls`,code:`<span class="kw">function</span> <span class="fn-name">Log</span>(target: <span class="kw">any</span>, key: <span class="kw">string</span>, descriptor: PropertyDescriptor) {
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
console.<span class="fn-name">log</span>(<span class="kw">new</span> <span class="fn-name">Calc</span>().<span class="fn-name">add</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// "call: add" then 5</span>`,out:`"call: add"  5`},{label:`Class decorator adding metadata`,code:`<span class="kw">function</span> <span class="fn-name">Sealed</span>(constructor: <span class="kw">Function</span>) {
  Object.<span class="fn-name">seal</span>(constructor);
  Object.<span class="fn-name">seal</span>(constructor.prototype);
}
<span class="op">@Sealed</span>
<span class="kw">class</span> Config {
  apiUrl = <span class="str">"/api"</span>;
}
<span class="kw">const</span> c = <span class="kw">new</span> <span class="fn-name">Config</span>();
console.<span class="fn-name">log</span>(c.apiUrl); <span class="cmt">// "/api" — class is sealed, can't add new props</span>`,out:`"/api"`},{label:`Decorator factory with parameters`,code:`<span class="kw">function</span> <span class="fn-name">Column</span>(type: <span class="kw">string</span>) {
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
<span class="cmt">// logs at class-definition time: "name -> varchar", "age -> int"</span>`,out:`"name -> varchar"  "age -> int"`}],svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎁</div>
<p>A decorator is like <strong>gift wrap applied to a present without changing what's inside</strong>. The core gift (your method or class) stays the same — the wrapping (the decorator) can add a bow, a tag, or even swap the box entirely before it's handed over. A <strong>decorator factory</strong> is a wrapping station that first asks "what color paper?" (its arguments) before wrapping — you configure it once, then it produces the actual wrapping decorator. Stack multiple decorators and they wrap in order, innermost (closest to the gift) applied first.</p>`,flow:[`<span><strong>Enable decorators:</strong> Set <code>"experimentalDecorators": true</code> in <code>tsconfig.json</code> (or use the newer standard decorators)</span>`,`<span><strong>Attach with @:</strong> Place <code>@Decorator</code> directly above a class, method, property, or parameter</span>`,`<span><strong>Decorator function runs at definition time:</strong> It receives the target and (for methods) a property descriptor — not each time the method is called</span>`,`<span><strong>Modify or wrap behavior:</strong> The decorator can replace <code>descriptor.value</code> with a wrapped function that adds logging, validation, or timing</span>`,`<span><strong>Multiple decorators apply bottom-up:</strong> The decorator nearest the declaration executes first, then each one above it in turn</span>`]},{id:`asynctypes`,title:`Async/Await with Types`,icon:`⏳`,explain:`<p>An <code>async</code> function always returns a <code>Promise</code>, and TypeScript reflects that in its type: <code>async function fetchUser(): Promise&lt;User&gt;</code> means the resolved value (after <code>await</code>) is a <code>User</code>. You rarely need to type the <code>Promise&lt;T&gt;</code> wrapper explicitly — TypeScript infers it from whatever the function body returns.</p>
<p><strong>Generic Promises</strong> propagate type information through asynchronous chains: <code>Promise&lt;User&gt;</code>, <code>Promise&lt;User[]&gt;</code>, and <code>Promise&lt;void&gt;</code> (for an async function with no meaningful return value) are all common. When you <code>await</code> a <code>Promise&lt;T&gt;</code>, the expression's type becomes <code>T</code> — the promise wrapper is unwrapped automatically for you.</p>
<p><code>Promise.all([...])</code> is typed to infer a <strong>tuple</strong> of resolved types matching the input array, so awaiting <code>Promise.all([fetchUser(), fetchOrders()])</code> gives you a properly typed <code>[User, Order[]]</code>. Error handling around <code>await</code> should use <code>try/catch</code>, but note the caught error is typed <code>unknown</code> by default (in strict configurations) and must be narrowed before use.</p>`,syntax:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">fetchUser</span>(id: <span class="kw">number</span>): <span class="fn-name">Promise</span><User> {
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
}`,examples:[{label:`Typed async function & await unwrapping`,code:`<span class="kw">interface</span> User { id: <span class="kw">number</span>; name: <span class="kw">string</span>; }

<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getUser</span>(id: <span class="kw">number</span>): <span class="fn-name">Promise</span><User> {
  <span class="kw">return</span> { id, name: <span class="str">"Ana"</span> };
}
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn-name">getUser</span>(<span class="num">1</span>); <span class="cmt">// user: User, not Promise<User></span>
  console.<span class="fn-name">log</span>(user.name);   <span class="cmt">// "Ana"</span>
}
<span class="fn-name">run</span>();`,out:`"Ana"`},{label:`Promise.all with inferred tuple type`,code:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getName</span>(): <span class="fn-name">Promise</span><<span class="kw">string</span>> { <span class="kw">return</span> <span class="str">"Bo"</span>; }
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">getAge</span>(): <span class="fn-name">Promise</span><<span class="kw">number</span>> { <span class="kw">return</span> <span class="num">9</span>; }

<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">const</span> [name, age] = <span class="kw">await</span> <span class="fn-name">Promise</span>.<span class="fn-name">all</span>([<span class="fn-name">getName</span>(), <span class="fn-name">getAge</span>()]);
  console.<span class="fn-name">log</span>(name, age); <span class="cmt">// "Bo" 9  (name: string, age: number)</span>
}
<span class="fn-name">run</span>();`,out:`"Bo" 9`},{label:`try/catch with unknown error narrowing`,code:`<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">risky</span>(): <span class="fn-name">Promise</span><<span class="kw">void</span>> {
  <span class="kw">throw</span> <span class="kw">new</span> <span class="fn-name">Error</span>(<span class="str">"network down"</span>);
}
<span class="kw">async</span> <span class="kw">function</span> <span class="fn-name">run</span>() {
  <span class="kw">try</span> {
    <span class="kw">await</span> <span class="fn-name">risky</span>();
  } <span class="kw">catch</span> (err: <span class="kw">unknown</span>) {
    <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>) console.<span class="fn-name">log</span>(err.message); <span class="cmt">// "network down"</span>
  }
}
<span class="fn-name">run</span>();`,out:`"network down"`}],svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎟️</div>
<p>An <code>async</code> function is like a <strong>coat check ticket</strong>. The moment you hand off your coat (call the function), you don't get the coat back — you get a claim ticket (<code>Promise&lt;User&gt;</code>) immediately. Later, when you present the ticket (<code>await</code>), you finally receive the actual coat (the unwrapped <code>User</code>). <code>Promise.all</code> is checking multiple coats at once and getting one combined ticket that, when redeemed, hands back every coat together in the same order you checked them in.</p>`,flow:[`<span><strong>Declare async function:</strong> Mark it <code>async</code> and annotate the return as <code>Promise&lt;T&gt;</code></span>`,`<span><strong>Function returns a Promise immediately:</strong> Calling it does not block — you get a pending <code>Promise&lt;T&gt;</code> right away</span>`,`<span><strong>await unwraps the value:</strong> Inside another <code>async</code> function, <code>await somePromise</code> pauses until resolution and yields a plain <code>T</code></span>`,`<span><strong>Combine with Promise.all:</strong> Awaiting <code>Promise.all([...])</code> gives back a typed tuple matching each input promise's resolved type</span>`,`<span><strong>Handle rejection with try/catch:</strong> The caught error is typed <code>unknown</code> — narrow it (e.g. <code>instanceof Error</code>) before accessing properties</span>`]},{id:`errorhandling`,title:`Error Handling & Type-Safe Errors`,icon:`🚨`,explain:`<p>JavaScript's <code>throw</code> can throw a value of <em>any</em> type, which is why TypeScript types a caught error in <code>catch (err)</code> as <code>unknown</code> under <code>strict</code>/<code>useUnknownInCatchVariables</code> settings — you cannot assume it's an <code>Error</code> instance without checking. The safe pattern is to narrow with <code>err instanceof Error</code> before reading <code>.message</code> or <code>.stack</code>.</p>
<p>For richer error handling, you can define <strong>custom error classes</strong> that extend the built-in <code>Error</code>, adding fields like an HTTP status code or an error code: <code>class ApiError extends Error { constructor(public status: number, message: string) { super(message); } }</code>. Custom error classes let <code>catch</code> blocks branch on <code>instanceof</code> to handle different failure kinds distinctly.</p>
<p>An alternative to throwing is the <strong>Result/Either pattern</strong> — a discriminated union like <code>type Result&lt;T&gt; = { ok: true; value: T } | { ok: false; error: string }</code> — which forces callers to explicitly check success before accessing the value, making error handling visible in the type system rather than relying on exceptions that can be silently missed.</p>`,syntax:`<span class="kw">class</span> ApiError <span class="kw">extends</span> <span class="fn-name">Error</span> {
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
<span class="kw">type</span> Result<T> = { ok: <span class="kw">true</span>; value: T } <span class="op">|</span> { ok: <span class="kw">false</span>; error: <span class="kw">string</span> };`,examples:[{label:`Safely narrowing an unknown catch error`,code:`<span class="kw">function</span> <span class="fn-name">parseJSON</span>(text: <span class="kw">string</span>) {
  <span class="kw">try</span> {
    <span class="kw">return</span> JSON.<span class="fn-name">parse</span>(text);
  } <span class="kw">catch</span> (err) {              <span class="cmt">// err: unknown</span>
    <span class="kw">if</span> (err <span class="kw">instanceof</span> <span class="fn-name">Error</span>) {
      console.<span class="fn-name">log</span>(<span class="str">"Failed: "</span> + err.message);
    }
    <span class="kw">return</span> <span class="kw">null</span>;
  }
}
console.<span class="fn-name">log</span>(<span class="fn-name">parseJSON</span>(<span class="str">"{bad json"</span>)); <span class="cmt">// "Failed: ..." then null</span>`,out:`"Failed: Unexpected token..."  null`},{label:`Custom error class with extra fields`,code:`<span class="kw">class</span> ApiError <span class="kw">extends</span> <span class="fn-name">Error</span> {
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
}`,out:`404  "User not found"`},{label:`Result/Either pattern avoids exceptions`,code:`<span class="kw">type</span> Result<T> = { ok: <span class="kw">true</span>; value: T } <span class="op">|</span> { ok: <span class="kw">false</span>; error: <span class="kw">string</span> };

<span class="kw">function</span> <span class="fn-name">divide</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): Result<<span class="kw">number</span>> {
  <span class="kw">if</span> (b === <span class="num">0</span>) <span class="kw">return</span> { ok: <span class="kw">false</span>, error: <span class="str">"divide by zero"</span> };
  <span class="kw">return</span> { ok: <span class="kw">true</span>, value: a / b };
}
<span class="kw">const</span> r = <span class="fn-name">divide</span>(<span class="num">10</span>, <span class="num">0</span>);
<span class="kw">if</span> (r.ok) console.<span class="fn-name">log</span>(r.value);
<span class="kw">else</span> console.<span class="fn-name">log</span>(r.error); <span class="cmt">// "divide by zero"</span>`,out:`"divide by zero"`}],svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🧯</div>
<p><code>catch</code> typing an error as <code>unknown</code> is like a <strong>fire alarm that doesn't tell you what's on fire</strong> — you must investigate (<code>instanceof</code>) before deciding how to respond, because someone could technically "throw" a toaster, a string, or a real <code>Error</code>. A custom error class is a <strong>labeled fire extinguisher</strong> — an <code>ApiError</code> extinguisher tells you exactly what kind of emergency it handles (with a status code attached). The <strong>Result pattern</strong> skips alarms altogether: instead of a surprise fire, every risky operation hands back a report that says up front "success, here's your data" or "failure, here's why" — you're forced to read the report before proceeding.</p>`,flow:[`<span><strong>Risky code throws:</strong> A function call, JSON parse, or async operation raises an error via <code>throw</code></span>`,`<span><strong>catch receives unknown:</strong> Under strict settings, <code>catch (err)</code> types <code>err</code> as <code>unknown</code>, not <code>any</code></span>`,`<span><strong>Narrow before use:</strong> Check <code>err instanceof Error</code> (or a custom error subclass) before reading <code>.message</code> or custom fields</span>`,`<span><strong>Branch on error kind:</strong> Multiple <code>instanceof</code> checks let you respond differently to an <code>ApiError</code> vs a generic <code>Error</code></span>`,`<span><strong>Or avoid exceptions entirely:</strong> Return a discriminated <code>Result&lt;T&gt;</code> union so success/failure is visible in the type signature, and callers must check <code>.ok</code> before touching <code>.value</code></span>`]},{id:`tsconfig`,title:`tsconfig & Compiler Configuration`,icon:`⚙️`,explain:`<p><code>tsconfig.json</code> is the configuration file that tells the TypeScript compiler (<code>tsc</code>) how to check and build your project — which files to include, which JavaScript version to target, and how strict the type checking should be. Running <code>tsc --init</code> generates a starter file; running plain <code>tsc</code> in a folder with one compiles the whole project according to its settings.</p>
<p>The most important settings live under <code>compilerOptions</code>. <code>"strict": true</code> is a single switch that enables a whole family of safety checks at once (including <code>strictNullChecks</code>, which stops <code>null</code>/<code>undefined</code> from silently being assignable to every other type, and <code>noImplicitAny</code>, which errors on values TypeScript can't infer a type for). <code>"target"</code> controls which JS version the output uses (e.g. <code>"ES2020"</code>); <code>"module"</code> controls the module system (e.g. <code>"ESNext"</code> or <code>"CommonJS"</code>); <code>"outDir"</code>/<code>"rootDir"</code> control where compiled files land.</p>
<p>Other frequently used options: <code>"esModuleInterop"</code> smooths over interop with CommonJS packages; <code>"skipLibCheck"</code> speeds up builds by not re-checking <code>.d.ts</code> files; <code>"noEmit"</code> runs type checking only, without producing JS output (common when a bundler like Vite or webpack handles the actual compilation); <code>"include"</code>/<code>"exclude"</code> arrays control which files the compiler touches.</p>`,syntax:`<span class="op">{</span>
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
<span class="op">}</span>`,examples:[{label:`strictNullChecks catches missing null handling`,code:`<span class="cmt">// with "strictNullChecks": true</span>
<span class="kw">function</span> <span class="fn-name">getLength</span>(s: <span class="kw">string</span> <span class="op">|</span> <span class="kw">null</span>): <span class="kw">number</span> {
  <span class="cmt">// return s.length;  // ✗ Object is possibly 'null'</span>
  <span class="kw">return</span> s <span class="op">?</span> s.length : <span class="num">0</span>; <span class="cmt">// ✓ handled</span>
}
console.<span class="fn-name">log</span>(<span class="fn-name">getLength</span>(<span class="kw">null</span>));   <span class="cmt">// 0</span>
console.<span class="fn-name">log</span>(<span class="fn-name">getLength</span>(<span class="str">"hi"</span>));   <span class="cmt">// 2</span>`,out:`0  2`},{label:`noImplicitAny forces explicit typing`,code:`<span class="cmt">// with "noImplicitAny": true</span>
<span class="cmt">// function add(a, b) { return a + b; } // ✗ 'a' implicitly has an 'any' type</span>

<span class="kw">function</span> <span class="fn-name">add</span>(a: <span class="kw">number</span>, b: <span class="kw">number</span>): <span class="kw">number</span> { <span class="cmt">// ✓ explicit</span>
  <span class="kw">return</span> a + b;
}
console.<span class="fn-name">log</span>(<span class="fn-name">add</span>(<span class="num">2</span>, <span class="num">3</span>)); <span class="cmt">// 5</span>`,out:`5`},{label:`noEmit: type-check only (bundler handles output)`,code:`<span class="cmt">// tsconfig.json</span>
<span class="cmt">// { "compilerOptions": { "noEmit": true, "strict": true } }</span>

<span class="cmt">// package.json script:</span>
<span class="cmt">// "typecheck": "tsc --noEmit"</span>

<span class="cmt">// Vite/webpack still emits the JS bundle;</span>
<span class="cmt">// tsc only reports type errors, producing no output files</span>
console.<span class="fn-name">log</span>(<span class="str">"tsc --noEmit checks types without writing .js files"</span>);`,out:`"tsc --noEmit checks types without writing .js files"`}],svgHTML:`<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,analogy:`<div class="analogy-icon">🎛️</div>
<p><code>tsconfig.json</code> is like the <strong>settings panel on a factory inspection line</strong>. <code>"strict": true</code> is the master switch that turns on every quality-control sensor at once, rather than flipping each one individually. <code>"target"</code> decides which era of machinery (JS version) the final product must run on. <code>"outDir"</code>/<code>"rootDir"</code> mark where raw materials come in and where finished goods go out. <code>"noEmit"</code> runs the entire inspection line without actually packaging any product — useful when a separate packaging machine (a bundler) already handles that step.</p>`,flow:[`<span><strong>Create the config:</strong> Run <code>tsc --init</code> or hand-write <code>tsconfig.json</code> at the project root</span>`,`<span><strong>Set target & module:</strong> Choose the output JS version and module system matching your runtime/bundler</span>`,`<span><strong>Turn on strict:</strong> Enable <code>"strict": true</code> to activate <code>noImplicitAny</code>, <code>strictNullChecks</code>, and related safety checks together</span>`,`<span><strong>Scope the project:</strong> Use <code>"include"</code>/<code>"exclude"</code> so <code>tsc</code> only processes the intended source files</span>`,`<span><strong>Run the compiler:</strong> <code>tsc</code> emits JS per these settings, or <code>tsc --noEmit</code> just reports type errors when a bundler handles the actual build</span>`]}],l=[{id:`js-async-workflow`,title:`Orchestrate Async Operations`,path:`javascript`,difficulty:`intermediate`,estimatedMinutes:45,tags:[`async`,`promises`,`parallel`,`timeout`,`retry`],icon:`⚡`,scenario:`Your test suite must perform several async setup steps before any test can run: fetching the authenticated user profile, obtaining a short-lived login token, and loading environment-specific configuration. These calls are currently executed sequentially, causing a 6-second setup delay. Your mission is to parallelise them safely, add timeout guards so a slow service never blocks the suite indefinitely, and implement retry logic for transient failures.`,description:`Refactor a sequential async test-setup routine into a robust, parallel workflow using Promise.all, AbortController-based timeouts, and an exponential-backoff retry helper.`,objectives:[`Execute independent async calls in parallel using Promise.all to reduce total setup time`,`Wrap each fetch with a configurable timeout so no single call can block the suite`,`Implement an exponential-backoff retry helper that retries up to N times on network errors`,`Surface clear, actionable error messages when setup fails after all retries are exhausted`],requiredSkills:[`Promises and async/await`,`Error handling`,`AbortController / fetch API`],tasks:[{id:1,title:`Fetch setup data in parallel with Promise.all`,description:`Replace the sequential await chain in setupTestEnvironment() with a single Promise.all call that concurrently fetches the user profile (/api/user), the auth token (/api/token), and the config (/api/config). Destructure the results and return them as { user, token, config }.`,hint:"Call all three fetch functions before awaiting any of them: `const [user, token, config] = await Promise.all([fetchUser(), fetchToken(), fetchConfig()]);`",validation:`The three network requests must overlap in time (check DevTools waterfall). The return object must contain valid user, token, and config shapes.`},{id:2,title:`Handle race conditions with Promise.race`,description:`Some environments return stale config from a secondary replica. Add a withFallback(primary, secondary, timeoutMs) utility that races the primary call against the secondary. If primary resolves first, use its value; if secondary wins and primary is still pending after timeoutMs, use the secondary value as a fallback.`,hint:`Use Promise.race([primary, delayedSecondary]) where delayedSecondary only starts after a brief delay so primary gets first priority.`,validation:`When the primary resolves in under timeoutMs, its value is always used. When the primary is artificially slowed past timeoutMs, the secondary value is returned without throwing.`},{id:3,title:`Add per-call timeout guards`,description:`Wrap each individual fetch call with a withTimeout(promise, ms, label) helper. The helper should race the original promise against a rejection that fires after ms milliseconds, throwing a descriptive TimeoutError("label timed out after Xms") so logs clearly identify which service was slow.`,hint:"Create a timeout promise with `new Promise((_, reject) => setTimeout(() => reject(new TimeoutError(...)), ms))` and race it against the input promise.",validation:`When a mock fetch is delayed beyond the configured timeout, withTimeout throws a TimeoutError containing the label and duration. Calls that resolve in time pass through unchanged.`},{id:4,title:`Implement exponential-backoff retry logic`,description:`Write a withRetry(fn, { retries, baseDelayMs, shouldRetry }) helper. It should call fn(), and on failure, wait baseDelayMs * 2^attempt milliseconds before retrying, up to retries times. The optional shouldRetry predicate lets callers skip retry for non-transient errors (e.g. 401 Unauthorized).`,hint:"Track the attempt count in a loop. Calculate delay as `baseDelayMs * Math.pow(2, attempt)`. Use `await new Promise(r => setTimeout(r, delay))` to wait between retries.",validation:`A fn that fails twice then succeeds is called exactly 3 times. A fn that always fails is called retries + 1 times total. A 401 error with a shouldRetry guard that returns false causes an immediate throw without retrying.`},{id:5,title:`Compose the full resilient setup function`,description:`Combine withTimeout, withRetry, and Promise.all into a single setupTestEnvironment({ timeoutMs, retries }) function. Each of the three fetches should be individually retried and individually guarded by a timeout. If any fetch fails after all retries, throw a SetupError listing which service failed and why.`,hint:'Wrap each fetch: `withRetry(() => withTimeout(fetchUser(), timeoutMs, "user"), { retries })`. Then pass all three wrapped calls to Promise.all.',validation:`The function returns a complete { user, token, config } object when all services succeed. It throws a SetupError identifying the failing service when one service is permanently unreachable.`}],completionCriteria:`All five tasks pass. The composed setupTestEnvironment function reduces wall-clock setup time by at least 50% compared to the sequential baseline, correctly surfaces per-service errors, and passes the provided unit-test suite without modification.`,solutionNotes:`Key insight: parallelism with Promise.all handles independent I/O; timeout guards prevent unbounded blocking; retry logic handles transient network flakiness. Compose these three primitives rather than mixing their logic inside a single function.`},{id:`js-array-processing`,title:`Process Test Result Data`,path:`javascript`,difficulty:`beginner`,estimatedMinutes:30,tags:[`arrays`,`filter`,`map`,`reduce`,`sort`,`groupBy`],icon:`⚡`,scenario:`After each CI run your test reporter dumps a flat JSON array of raw TestResult objects. Before the results can be sent to the dashboard, they must be cleaned up: failures isolated, durations normalised, results grouped by suite, and the top slow tests surfaced. You will build a pipeline of pure array-transformation functions over that data.`,description:`Build a data-transformation pipeline using filter, map, reduce, sort, and a group-by pattern to turn raw test-run output into a structured, dashboard-ready report object.`,objectives:[`Filter and isolate failed and skipped tests from a mixed-result array`,`Map raw result objects to a normalised shape with computed fields`,`Aggregate totals and suite-level statistics using reduce`,`Group results by test suite and surface the slowest tests per suite`],requiredSkills:[`Array higher-order functions`,`Object destructuring`,`Functional programming patterns`],tasks:[{id:1,title:`Filter failing and skipped tests`,description:`Implement getFailures(results: TestResult[]): TestResult[] that returns only results where status is "failed" or "error", and getSkipped(results): TestResult[] that returns only "skipped" results. Both functions must not mutate the input array.`,hint:'Use `results.filter(r => r.status === "failed" || r.status === "error")`. For multiple statuses consider a Set: `const failStatuses = new Set(["failed","error"])` then `failStatuses.has(r.status)`.',validation:`getFailures returns zero results when all tests pass. It returns the exact failing subset from a mixed array. getSkipped never includes failed tests.`},{id:2,title:`Map raw results to a normalised shape`,description:`Implement normalise(results: TestResult[]): NormalisedResult[] using map. Each NormalisedResult must include: id, title, suite, status, durationMs (from the raw durationMs field), durationLabel (e.g. "1.23s" or "450ms"), passed (boolean), and failureMessage (the first line of the error message, or null).`,hint:'Compute durationLabel inside the map callback: `durationMs >= 1000 ? `${(durationMs/1000).toFixed(2)}s` : `${durationMs}ms``. Extract the first line of error with `(error ?? "").split("\\n")[0] || null`.',validation:`Every output object has all six fields. durationLabel is "450ms" for 450 ms and "1.23s" for 1230 ms. failureMessage is null when there is no error.`},{id:3,title:`Aggregate run-level statistics with reduce`,description:`Implement summarise(results: TestResult[]): RunSummary using a single reduce call. RunSummary must contain: total, passed, failed, skipped, totalDurationMs, averageDurationMs, and slowestTest (the full TestResult object with the highest durationMs, or null if the array is empty).`,hint:"Start the accumulator as `{ total: 0, passed: 0, failed: 0, skipped: 0, totalDurationMs: 0, slowestTest: null }`. Track slowestTest by comparing `r.durationMs > acc.slowestTest?.durationMs ?? -1`.",validation:`summarise([]) returns all-zero counts and null slowestTest. On a mixed array, passed + failed + skipped equals total. averageDurationMs equals totalDurationMs / total (rounded to 2 decimal places).`},{id:4,title:`Sort results by duration descending`,description:`Implement sortByDuration(results: TestResult[], order: "asc" | "desc" = "desc"): TestResult[] that returns a new sorted array. The original array must remain unmodified. When order is "desc" the slowest test appears first.`,hint:'Spread the array before sorting to avoid mutation: `[...results].sort((a, b) => order === "desc" ? b.durationMs - a.durationMs : a.durationMs - b.durationMs)`.',validation:`The input array is unchanged after calling sortByDuration. The first element of the desc result has the highest durationMs. The function works correctly on a single-element array.`},{id:5,title:`Group results by test suite`,description:`Implement groupBySuite(results: TestResult[]): Record<string, SuiteGroup> where SuiteGroup = { tests: TestResult[]; passRate: number; totalDurationMs: number }. The passRate should be a value between 0 and 1 representing the fraction of passed tests in that suite.`,hint:"Use reduce with an object accumulator. For each result: `acc[r.suite] ??= { tests: [], passRate: 0, totalDurationMs: 0 }`. After building the groups, compute passRate in a second pass over the keys.",validation:`Each suite key maps to the correct subset of tests. passRate is 1.0 when all tests in the suite pass and 0.0 when all fail. totalDurationMs equals the sum of durationMs for that suite.`}],completionCriteria:`All five transformation functions are implemented, pass the provided unit tests, and correctly handle edge cases: empty arrays, single-element arrays, and suites where every test fails.`,solutionNotes:`Prefer immutable array operations (filter, map, reduce returning new values) over loops with push. Compose the functions into a pipeline: raw results -> normalise -> summarise + groupBySuite + sortByDuration -> report object.`},{id:`js-error-handling`,title:`Build Resilient Test Helpers`,path:`javascript`,difficulty:`intermediate`,estimatedMinutes:40,tags:[`error-handling`,`try-catch`,`custom-errors`,`graceful-degradation`],icon:`⚡`,scenario:`Your team's shared test-helper library currently lets uncaught exceptions crash entire test runs, swallows errors silently in some paths, and provides no structured way to distinguish a "test infrastructure" failure from a "product under test" failure. You will harden the library with proper try/catch patterns, a custom error hierarchy, graceful degradation strategies, and a centralised error-reporting hook.`,description:`Harden a shared test-helper library by introducing structured try/catch patterns, a custom error class hierarchy, graceful-degradation wrappers, and a pluggable error-reporting pipeline.`,objectives:[`Distinguish infrastructure errors from test assertion errors using a custom error hierarchy`,`Wrap unsafe operations so a single failure degrades gracefully rather than crashing the suite`,`Aggregate and report errors in a structured format consumable by CI dashboards`,`Apply the finally pattern to guarantee cleanup even when a step throws`],requiredSkills:[`try/catch/finally`,`Custom Error classes`,`Error propagation strategies`],tasks:[{id:1,title:`Define a custom error class hierarchy`,description:`Create three error classes: TestHelperError (base, adds context: Record<string,unknown> to the Error prototype), InfrastructureError extends TestHelperError (for setup/teardown/network failures), and AssertionHelperError extends TestHelperError (for helper-level assertion mismatches). Each class must set this.name correctly and preserve the stack trace.`,hint:"Extend the built-in Error class: `class TestHelperError extends Error { constructor(message, context = {}) { super(message); this.name = this.constructor.name; this.context = context; if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor); } }`.",validation:`instanceof checks work correctly: new InfrastructureError() instanceof TestHelperError is true. error.name equals the class name as a string. error.context is the object passed at construction.`},{id:2,title:`Wrap unsafe operations with structured try/catch`,description:`Implement safeRun<T>(label: string, fn: () => Promise<T>): Promise<{ ok: true; value: T } | { ok: false; error: TestHelperError }>. If fn() throws a TestHelperError, wrap it as-is in the error branch. If fn() throws a plain Error or unknown, wrap it in a new InfrastructureError with the original error attached as context.cause.`,hint:'Inside the catch, check `if (err instanceof TestHelperError) return { ok: false, error: err }`. Otherwise: `return { ok: false, error: new InfrastructureError(label + " failed", { cause: err }) }`.',validation:`When fn() resolves, safeRun returns { ok: true, value }. When fn() throws a TestHelperError, it is returned unwrapped. When fn() throws a generic Error, the result.error is an InfrastructureError containing the original as context.cause.`},{id:3,title:`Apply finally for guaranteed cleanup`,description:`Implement withCleanup<T>(setup: () => Promise<T>, test: (resource: T) => Promise<void>, teardown: (resource: T | null) => Promise<void>): Promise<void>. The teardown must run even if setup or test throws. If both test and teardown throw, re-throw the test error with the teardown error attached as context.teardownError.`,hint:"Store the resource in a variable initialised to null before the try block. In finally, call teardown(resource). To attach the teardown error: catch it, then `testError.context.teardownError = teardownErr; throw testError`.",validation:`teardown is always called. When test throws and teardown succeeds, the test error propagates. When both throw, the test error propagates and has context.teardownError set to the teardown error.`},{id:4,title:`Implement graceful degradation with fallback values`,description:`Implement withFallback<T>(fn: () => Promise<T>, fallback: T, options?: { onError?: (e: unknown) => void }): Promise<T>. If fn() resolves, return its value. If fn() rejects, call options.onError if provided (for logging), then return fallback without re-throwing. This is appropriate for non-critical helpers like screenshot capture.`,hint:"Use a try/catch that returns fallback in the catch block. Call `options?.onError?.(err)` before returning fallback so callers can log without needing to catch.",validation:`Returns fn's resolved value on success. Returns fallback when fn rejects. Calls onError with the thrown error. Never throws even when fn throws and onError throws.`},{id:5,title:`Build a centralised error-reporting pipeline`,description:`Implement an ErrorReporter class with: addHandler(fn: (e: TestHelperError) => Promise<void>): void, report(error: unknown): Promise<void>, and getHistory(): TestHelperError[]. report() should coerce non-TestHelperError values into InfrastructureErrors, push to history, then call each handler in sequence (not in parallel) so handlers can be ordered by priority.`,hint:"Store handlers in a private array. In report(), normalise the error, push to this.history, then `for (const handler of this.handlers) { await handler(error); }`. Wrap the handler loop in try/catch so a failing handler does not block subsequent ones.",validation:`Handlers are called in registration order. A failing handler does not prevent later handlers from running. report() with a plain string wraps it in an InfrastructureError. getHistory() returns all reported errors in order.`}],completionCriteria:`All five tasks pass their unit tests. The error hierarchy is correctly typed. withCleanup always runs teardown. withFallback never propagates errors. ErrorReporter calls all handlers even when one fails.`,solutionNotes:`The result/error pattern from safeRun (inspired by Rust's Result type) avoids try/catch at call sites. Reserve try/catch for genuine boundaries: module entry points, top-level test hooks, and withCleanup teardown blocks.`},{id:`pw-login-flow`,title:`Automate Login Workflow`,path:`playwright`,difficulty:`beginner`,estimatedMinutes:35,tags:[`login`,`forms`,`assertions`,`session`,`negative-testing`],icon:`🎭`,scenario:`The QA team for an e-commerce platform needs automated coverage of the login page. The page has email and password fields, a submit button, success redirect to /dashboard, and an inline error banner for invalid credentials. Tests must cover the happy path, invalid-credential rejection, and session persistence across a page reload so that logged-in users are not asked to log in again.`,description:`Write a Playwright test suite that automates the full login workflow: navigation, credential entry, success assertion, negative-path testing, and session-persistence verification.`,objectives:[`Navigate to the login page and successfully log in with valid credentials`,`Assert that invalid credentials display the correct error message without redirecting`,`Verify that an authenticated session persists after a full page reload`,`Structure tests so they are independent and can run in any order`],requiredSkills:[`Playwright locators`,`page.fill / page.click`,`expect assertions`],tasks:[{id:1,title:`Navigate to the login page and verify its structure`,description:`Write a test that navigates to https://practice.example.com/login, then asserts: the page title contains "Login", an email input is visible, a password input is visible, and a submit button with text "Sign In" is visible. Use role-based locators where possible.`,hint:'Use `page.getByRole("textbox", { name: /email/i })` and `page.getByRole("button", { name: "Sign In" })`. Assert visibility with `await expect(locator).toBeVisible()`.',validation:`The test navigates without timeout. All three element assertions pass. The test does not hard-code element IDs (use role or label locators).`},{id:2,title:`Fill credentials and assert a successful login`,description:`Extend the happy-path test: fill the email field with "user@example.com" and the password field with "Password123!", click Sign In, and assert that the URL changes to /dashboard and that a heading "Welcome back" is visible on the resulting page.`,hint:'Use `await page.fill(...)` then `await page.click(...)`. For URL assertion: `await expect(page).toHaveURL(/\\/dashboard/)`. For heading: `await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible()`.',validation:`URL assertion passes after clicking Sign In. The welcome heading is visible. The test completes in under 10 seconds.`},{id:3,title:`Test invalid credentials show an error banner`,description:`Write a separate test that fills the email field with "wrong@example.com" and password "badpassword", clicks Sign In, and asserts that: (a) an element with role "alert" containing text "Invalid email or password" is visible, (b) the URL has NOT changed to /dashboard, and (c) the password field is cleared.`,hint:'Use `expect(page).not.toHaveURL(/\\/dashboard/)` for the URL assertion. Check that the password input value is empty with `await expect(passwordInput).toHaveValue("")`.',validation:`The alert role element is visible with the correct text. The URL stays on /login. The password field value is empty after the failed attempt.`},{id:4,title:`Verify session persistence across a page reload`,description:`After a successful login (reuse the happy-path setup), call page.reload() and assert that the user remains on the /dashboard URL and the "Welcome back" heading is still visible. This confirms the session cookie is set correctly and survives a reload.`,hint:'Call `await page.reload()` then re-assert URL and heading. If the app uses localStorage, you may need to check `await page.evaluate(() => localStorage.getItem("auth_token"))` to confirm it survived.',validation:`After reload, toHaveURL(/\\/dashboard/) passes. The welcome heading is visible. The test does not re-submit the login form.`},{id:5,title:`Parameterise credential tests with a data table`,description:`Refactor the invalid-credentials test into a data-driven test using test.each (or a for-of loop over a credentials array). Cover at least three invalid cases: wrong password, unregistered email, and empty fields. Each case should assert the specific error message text returned by the API for that scenario.`,hint:'Define `const cases = [{ email: "...", password: "...", expected: "..." }, ...]` and loop with `for (const { email, password, expected } of cases) { ... }` inside a single test, or use `test.each(cases)("invalid login %#", async ({ ... }) => { ... })`.',validation:`All three invalid scenarios are covered in a single parameterised block. Each assertion checks the specific error text. Adding a fourth case requires only a new entry in the data array.`}],completionCriteria:`All five tasks produce passing tests. The suite runs in headed and headless modes. No test shares mutable state with another (each test navigates independently). The parameterised invalid-login test covers all three required scenarios.`,solutionNotes:`Use page.getByRole and page.getByLabel as primary locators — they are resilient to CSS changes. Avoid page.locator("input[type=email]") unless the element has no accessible role or label. Store the base URL in playwright.config.ts to avoid repeating it in each test.`},{id:`pw-api-validation`,title:`Validate REST API Responses`,path:`playwright`,difficulty:`intermediate`,estimatedMinutes:40,tags:[`api-testing`,`request`,`schema-validation`,`pagination`,`error-responses`],icon:`🎭`,scenario:`The product search API (GET /api/products?q=&page=&limit=) has just been updated to support pagination and must be regression-tested before release. You need to validate status codes, response body schemas, correct pagination behaviour, and the error responses returned for malformed requests — all without opening a browser page.`,description:`Use Playwright's APIRequestContext to write an API test suite that validates status codes, response schemas, pagination metadata, and error-response shapes for the product search endpoint.`,objectives:[`Make authenticated GET requests using Playwright's request fixture and check HTTP status codes`,`Validate response body schema field by field without a third-party schema library`,`Confirm that pagination metadata (page, limit, total, hasMore) is accurate`,`Assert that the API returns well-formed error objects for invalid query parameters`],requiredSkills:[`Playwright APIRequestContext`,`JSON assertion patterns`,`HTTP status codes`],tasks:[{id:1,title:`Make an authenticated GET request and check the status code`,description:`Use the Playwright request fixture to GET /api/products?q=laptop. Assert the status is 200. Assert the Content-Type header includes "application/json". Store the parsed JSON body for subsequent assertions.`,hint:'In an API test: `const response = await request.get("/api/products", { params: { q: "laptop" }, headers: { Authorization: "Bearer " + token } })`. Then `expect(response.status()).toBe(200)` and `const body = await response.json()`.',validation:`Status is 200. Content-Type header contains "application/json". body is a parsed JavaScript object (not a string).`},{id:2,title:`Validate the response body schema`,description:`Assert that the response body matches this shape: { data: Product[], meta: { page: number, limit: number, total: number, hasMore: boolean } }. Check that data is an array, each Product has id (string), name (string), price (number), and category (string). Use expect().toMatchObject() for partial matches.`,hint:"Use `expect(body).toMatchObject({ data: expect.any(Array), meta: { page: expect.any(Number), ... } })`. For individual items: `body.data.forEach(p => expect(p).toMatchObject({ id: expect.any(String), ... }))`.",validation:`The top-level shape assertion passes. The per-item assertion runs for every element in data. The test fails explicitly (not silently) when a field is missing.`},{id:3,title:`Test pagination metadata accuracy`,description:`Request page 1 with limit 5 (/api/products?q=&page=1&limit=5), then page 2 with the same limit. Assert: page-1 meta.page is 1, meta.limit is 5, data.length is 5 (or less if fewer results exist). Assert: page-2 meta.page is 2. If meta.hasMore is false on page 1, assert data.length < 5.`,hint:"Make two separate requests. Compare `body1.meta.total === body2.meta.total` to confirm the total does not shift between pages. Check `body1.data[0].id !== body2.data[0].id` to verify pages return different items.",validation:`meta.page matches the requested page number. meta.limit matches the requested limit. The first items of page 1 and page 2 are different. If hasMore is true on page 1, a page 2 request returns at least one item.`},{id:4,title:`Assert error responses for invalid query parameters`,description:`Send three requests with invalid parameters: (a) limit=0, (b) limit=abc, (c) page=-1. For each, assert the HTTP status is 400 and the body matches { error: string, code: string } where code is a machine-readable string like "INVALID_LIMIT" or "INVALID_PAGE".`,hint:"Use `expect(response.ok()).toBe(false)` as a quick check before asserting the status. For the body: `expect(errorBody).toMatchObject({ error: expect.any(String), code: expect.stringMatching(/^[A-Z_]+$/) })`.",validation:`All three requests return status 400. Each body has a non-empty error string. Each body has a code matching the screaming-snake-case pattern.`},{id:5,title:`Intercept and mock the API at the network layer`,description:`Write a browser-based test that intercepts GET requests to /api/products* using page.route() and returns a mocked response body with exactly two products. Then navigate to the product listing page and assert that exactly two product cards are rendered in the DOM — proving the UI correctly renders what the API returns.`,hint:'`await page.route("**/api/products**", route => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ data: [mockProduct1, mockProduct2], meta: { ... } }) }))`. Then navigate and count cards.',validation:`page.route intercepts the request before it hits the network. The page renders exactly two product cards (assert count with expect(page.getByTestId("product-card")).toHaveCount(2)). The real API is never called.`}],completionCriteria:`All five API tasks pass. Status-code, schema, pagination, and error-response tests are independent and can run in parallel. The mock-intercept test proves UI-to-API contract without relying on live data.`,solutionNotes:`Prefer Playwright's built-in request fixture over third-party HTTP clients inside Playwright tests — it shares the browser context's cookies and storage by default. Use expect().toMatchObject() for structural validation and reserve deep equality (toEqual) for cases where extra fields must not be present.`},{id:`pw-pom-build`,title:`Build a Page Object Model`,path:`playwright`,difficulty:`advanced`,estimatedMinutes:55,tags:[`POM`,`page-objects`,`fixtures`,`refactoring`,`maintainability`],icon:`🎭`,scenario:`The e-commerce test suite has grown to 40 tests that all hard-code locators and navigation steps inline. A single CSS class rename broke 18 tests last sprint. The team has decided to refactor to a Page Object Model: each page gets a class encapsulating its locators and actions, and Playwright fixtures inject the pages so tests stay declarative and free of implementation details.`,description:`Refactor brittle inline-locator tests into a maintainable Page Object Model by creating LoginPage and CheckoutPage classes, writing clean tests against those classes, and wiring them into Playwright fixtures.`,objectives:[`Create a LoginPage class that exposes intent-revealing action methods rather than raw locators`,`Create a CheckoutPage class with typed form-filling methods and assertion helpers`,`Write tests that read like specifications using only the public POM API`,`Wire page objects into Playwright fixtures so they are injected rather than instantiated inline`],requiredSkills:[`TypeScript classes`,`Playwright fixtures`,`POM design pattern`],tasks:[{id:1,title:`Create the LoginPage page object`,description:`Create src/pages/LoginPage.ts. The class constructor accepts a Playwright Page. Expose these public methods: goto(): Promise<void> (navigates to /login), login(email: string, password: string): Promise<void> (fills and submits the form), getErrorMessage(): Promise<string> (returns the text of the error alert), and isLoggedIn(): Promise<boolean> (returns true if the URL contains /dashboard). All locators must be private.`,hint:'Define private locators in the constructor: `this.emailInput = page.getByLabel("Email")`. Public methods call the private locators. Example: `async login(email, password) { await this.emailInput.fill(email); await this.passwordInput.fill(password); await this.submitButton.click(); }`.',validation:`All locators are private (not exported). Public methods match the specified signatures. goto() navigates to /login. login() fills both fields and clicks submit. getErrorMessage() returns the alert text.`},{id:2,title:`Create the CheckoutPage page object`,description:`Create src/pages/CheckoutPage.ts. Expose: goto(): Promise<void>, fillShipping(details: ShippingDetails): Promise<void> (fills first name, last name, address, city, zip), selectPayment(method: "credit" | "paypal"): Promise<void>, placeOrder(): Promise<void>, and getOrderConfirmationNumber(): Promise<string>. Define the ShippingDetails interface in the same file and export it.`,hint:'For selectPayment, use a radio-button locator: `page.getByRole("radio", { name: method === "credit" ? "Credit Card" : "PayPal" })`. Group the shipping fields in fillShipping with a helper that fills each by label.',validation:`ShippingDetails interface is exported. fillShipping fills all five fields. selectPayment clicks the correct radio button for both values. getOrderConfirmationNumber returns a non-empty string.`},{id:3,title:`Write clean specification-style tests using the page objects`,description:`Write at least four tests in src/tests/checkout.spec.ts that use only the public POM API (no page.fill, page.click, or raw locators in the test body). Required scenarios: (1) happy-path checkout, (2) login redirect when unauthenticated, (3) validation errors shown for empty shipping form, (4) PayPal payment selection.`,hint:"A clean test body should read like prose: `await loginPage.login(user.email, user.password); await checkoutPage.goto(); await checkoutPage.fillShipping(shippingDetails); await checkoutPage.placeOrder(); expect(await checkoutPage.getOrderConfirmationNumber()).toMatch(/ORD-\\d+/)`.",validation:`No raw Playwright locator calls appear in the test file. All four scenarios are present. Each test is independent (no shared mutable state). Tests pass in headless mode.`},{id:4,title:`Add Playwright fixtures to inject page objects`,description:`Create src/fixtures/pages.ts that extends Playwright's base test to add two fixtures: loginPage (type LoginPage) and checkoutPage (type CheckoutPage). Each fixture should instantiate the page object with the current page and perform any per-test setup (e.g. loginPage fixture navigates to /login automatically). Export the extended test and expect from this file.`,hint:'Use `test.extend<{ loginPage: LoginPage; checkoutPage: CheckoutPage }>({ loginPage: async ({ page }, use) => { const lp = new LoginPage(page); await lp.goto(); await use(lp); }, ... })`. Import this extended test in all spec files instead of "@playwright/test".',validation:`The fixtures file exports test and expect. loginPage fixture navigates to /login before handing control to the test. checkoutPage fixture is available in the same test as loginPage without conflict.`},{id:5,title:`Refactor existing tests to use fixtures`,description:'Update src/tests/checkout.spec.ts to import { test, expect } from "../fixtures/pages" instead of "@playwright/test". Replace any inline `new LoginPage(page)` or `new CheckoutPage(page)` calls with the injected fixture parameters. Confirm all four tests still pass after the refactor.',hint:'Change the test signature to `test("...", async ({ loginPage, checkoutPage }) => { ... })`. Remove all page object instantiation from the test body — the fixture handles it. Run `npx playwright test` to confirm.',validation:`The spec file imports from the fixtures file, not from "@playwright/test" directly. No new keyword appears in the test body for page objects. All four tests pass after refactoring.`}],completionCriteria:`Both page object classes are implemented with private locators. All four spec tests pass using only the public POM API. Fixtures are wired correctly and inject both page objects. No raw Playwright calls appear in any spec file.`,solutionNotes:`The key POM principle: tests describe what, page objects describe how. If a test contains a CSS selector or calls page.fill directly, the abstraction is leaking. Fixtures take POM further by removing even the instantiation boilerplate — tests become pure specification.`},{id:`tosca-regression-suite`,title:`Design Regression Test Suite`,path:`tosca`,difficulty:`intermediate`,estimatedMinutes:50,tags:[`regression`,`test-design`,`test-data`,`module-library`,`banking`],icon:`🔬`,scenario:`A regional bank is migrating its retail banking portal to a new frontend framework. The QA lead must design an automated regression suite in Tosca that covers the critical user journeys — account login, balance inquiry, fund transfer, and statement download — before the migration goes live. The suite must be modular, data-driven, and mapped to requirements so that traceability reports can be generated for the change-advisory board.`,description:`Design and document a structured Tosca regression suite for a banking portal: define scope, create test case skeletons, prepare test data sets, build a reusable module library, and map every test case to its parent requirement.`,objectives:[`Define the regression scope by classifying features as in-scope, out-of-scope, or deferred`,`Create atomic, reusable Tosca test cases that cover all critical banking journeys`,`Prepare parameterised test data sets covering valid, boundary, and invalid inputs`,`Map each test case to its source requirement to enable automated traceability reporting`],requiredSkills:[`Tosca test case design`,`Test data management`,`Requirements traceability`],tasks:[{id:1,title:`Define regression scope and risk classification`,description:`Produce a scope document that lists the banking portal features and classifies each as: (a) must-automate (high business risk, frequently executed), (b) automate-later (medium risk), or (c) manual-only (low frequency or UI-only). Must-automate features for this sprint: account login/logout, account balance display, fund transfer between own accounts, and PDF statement download. Justify each classification with a risk rating (High/Medium/Low) and estimated execution frequency (daily/weekly/monthly).`,hint:`Use a table with columns: Feature | Risk | Frequency | Classification | Justification. Login is always High risk / daily frequency. PDF generation may be Low risk / monthly if it has separate unit tests.`,validation:`All four must-automate features are listed and justified. At least two features are classified as automate-later or manual-only with rationale. Risk ratings are consistent with the stated execution frequency.`},{id:2,title:`Create atomic Tosca test case skeletons`,description:`For each must-automate feature, define at least two test cases (positive and negative/boundary). Each test case skeleton must include: Test Case ID (e.g. TC-LOGIN-001), Title, Preconditions, Steps (numbered, action-level), Expected Result, and Postconditions. Total minimum: 8 test cases across 4 features. Steps should reference Tosca module names (e.g. "Execute Module: Login_EnterCredentials") rather than raw UI actions.`,hint:`TC-LOGIN-001 (Successful login): Precondition: user exists in test environment; Steps: 1. Execute Module: Browser_Navigate (URL=portal URL), 2. Execute Module: Login_EnterCredentials (username, password), 3. Execute Module: Login_VerifyDashboard; Expected: Dashboard heading visible, session cookie set.`,validation:`Minimum 8 test cases are defined (2 per feature). Each has all six required fields. Steps reference module names rather than raw element IDs. Each feature has at least one positive and one negative test case.`},{id:3,title:`Prepare parameterised test data sets`,description:`Create a test data table for each of the four features. Each table must have at minimum: one valid/happy-path row, one boundary row (e.g. transfer amount = 0.01 or max allowed), and one invalid row (e.g. wrong password, insufficient funds). Columns must include all input parameters and the expected outcome. Data must be environment-agnostic (use placeholders like {BASE_URL} for environment-specific values).`,hint:`For the Fund Transfer data table: columns = SourceAccount, TargetAccount, Amount, Memo, ExpectedStatus. Rows: (valid transfer), (transfer of exactly the daily limit), (transfer exceeding daily limit → expect "Limit exceeded" error).`,validation:`Each feature has its own data table. Every table has at least 3 rows (valid, boundary, invalid). Environment-specific values use placeholder notation. Expected outcome column is present and unambiguous.`},{id:4,title:`Build a reusable Tosca module library`,description:`Design the module library structure for the banking portal suite. Define at least 8 modules grouped into folders: Navigation/ (Navigate_To_Portal, Navigate_To_Transfer), Login/ (Login_EnterCredentials, Login_Verify_Success, Login_Verify_Error), Account/ (Account_Check_Balance, Account_Download_Statement), Transfer/ (Transfer_Enter_Details, Transfer_Confirm). For each module, specify: Name, Folder path, Input parameters with types, Output parameters (if any), and the UI action(s) it encapsulates.`,hint:`Login_EnterCredentials inputs: Username (String), Password (String, sensitive=true). No outputs. UI actions: Fill field[id=username], Fill field[id=password], Click button[id=submit]. Transfer_Enter_Details inputs: FromAccount (String), ToAccount (String), Amount (Decimal), Memo (String optional).`,validation:`At least 8 modules are defined across all four folders. Each module has a name, folder path, and typed input parameters. Sensitive parameters (passwords) are flagged. At least one module has an output parameter.`},{id:5,title:`Map test cases to requirements`,description:`Assign each of the 8 test cases to its parent requirement ID from the system requirements document. Use the requirement IDs: REQ-AUTH-001 (user authentication), REQ-AUTH-002 (session management), REQ-ACC-001 (balance display), REQ-TRF-001 (fund transfer), REQ-TRF-002 (transfer limits), REQ-RPT-001 (statement generation). Ensure every requirement has at least one test case. Identify any requirement with no test case as a coverage gap.`,hint:`Create a mapping table: TestCaseID | RequirementID | Coverage Type (positive/negative/boundary). A single test case may cover multiple requirements. If REQ-AUTH-002 has no test cases, flag it as a gap and create a stub test case TC-AUTH-003.`,validation:`All 6 requirement IDs appear in the mapping table. Every requirement has at least one test case. Any gap is explicitly documented with a remediation plan. The mapping table can be imported into a traceability report.`}],completionCriteria:`Scope document is complete with risk classifications. A minimum of 8 test case skeletons reference Tosca module names. Test data tables cover valid, boundary, and invalid inputs for all four features. Module library defines at least 8 reusable modules. All 6 requirements are mapped to at least one test case.`,solutionNotes:`Tosca's strength is the module library: invest time making modules atomic (one responsibility) and parameterised. Hardcoded values inside modules are a maintenance liability — push all variable data into test data tables. Traceability is most valuable when requirement IDs are maintained in the same system as test cases (Tosca's Requirements workspace), not in a separate spreadsheet.`},{id:`tosca-requirements-trace`,title:`Requirements Traceability Matrix`,path:`tosca`,difficulty:`advanced`,estimatedMinutes:60,tags:[`traceability`,`RTM`,`coverage`,`audit`,`compliance`],icon:`🔬`,scenario:`The banking portal release is subject to an internal audit. The auditors require a Requirements Traceability Matrix (RTM) demonstrating that every business requirement is covered by at least one test case, every test case traces back to a requirement, and any coverage gaps are formally documented with a risk acceptance sign-off. You must produce the RTM and present coverage metrics to the audit committee.`,description:`Build a complete Requirements Traceability Matrix for the banking portal: gather requirements, link test cases bidirectionally, calculate coverage metrics, identify and document gaps, and produce an audit-ready summary report.`,objectives:[`Catalogue all business requirements from source documents and assign unique IDs`,`Link test cases to requirements bidirectionally and verify no orphaned test cases exist`,`Calculate requirement coverage, test-case-to-requirement ratio, and gap percentage`,`Formally document coverage gaps with risk rating and acceptance or remediation plan`],requiredSkills:[`Requirements analysis`,`Traceability matrix design`,`Coverage metrics`,`Audit documentation`],tasks:[{id:1,title:`Catalogue requirements from source documents`,description:`Review the provided Business Requirements Document (BRD) and System Requirements Specification (SRS) and extract all testable requirements. Assign each a unique ID using the convention REQ-[DOMAIN]-[NNN] (e.g. REQ-AUTH-001). Group requirements by domain: Authentication, Account Management, Fund Transfer, Reporting, Security. For each requirement, record: ID, Source document and section, Requirement statement, Priority (Must-Have/Should-Have/Nice-to-Have), and Testability (Testable/Non-Testable with reason).`,hint:`Non-testable requirements are typically architectural or performance-related ("The system shall be built on microservices" — architectural, non-testable from a functional perspective). Flag these separately so they don't inflate gap counts.`,validation:`All extracted requirements have unique IDs following the convention. Each has source, statement, priority, and testability fields. Non-testable requirements are flagged and excluded from coverage calculations. At least 15 requirements are catalogued across all 5 domains.`},{id:2,title:`Create the bidirectional traceability matrix`,description:`Build the RTM with two views: (a) Requirements view — for each requirement, list all test cases that cover it; (b) Test Case view — for each test case, list all requirements it covers. Flag any test case that covers no requirement as "orphaned". The matrix must support filtering by domain, priority, and coverage status (covered/uncovered/partial).`,hint:`Use a spreadsheet with sheets: "By Requirement" (rows = requirements, columns = TC IDs marked with X or coverage type), "By Test Case" (rows = TCs, columns = REQ IDs), "Summary" (pivot metrics). An X in cell (REQ-AUTH-001, TC-LOGIN-001) means TC-LOGIN-001 covers REQ-AUTH-001.`,validation:`Both views are present. Every test case appears in at least one row of the By Requirement view. Orphaned test cases are flagged in the By Test Case view. The matrix can be filtered by domain and priority.`},{id:3,title:`Calculate coverage metrics`,description:`Compute and document the following metrics from the RTM: (1) Requirement Coverage % = (requirements with at least one test case / total testable requirements) × 100; (2) Must-Have Coverage % (same calculation restricted to Must-Have requirements); (3) Average test cases per requirement; (4) Orphaned test case count and %; (5) Gap count (testable requirements with zero test cases). Present metrics in a summary table with traffic-light status: Green ≥ 90%, Amber 70-89%, Red < 70%.`,hint:`Separate testable from non-testable requirements before calculating. Must-Have Coverage is the most important metric for the audit — if it is below 100%, each gap needs a formal risk acceptance. Average TCs per requirement is a quality indicator: too high may mean redundancy, too low may mean shallow coverage.`,validation:`All five metrics are calculated and documented. The traffic-light status is applied correctly. Must-Have Coverage is calculated separately from overall coverage. Orphaned test case count is consistent with the By Test Case view.`},{id:4,title:`Identify, classify, and document coverage gaps`,description:`For every testable requirement with zero test cases, create a Gap Record with: Gap ID, Requirement ID, Requirement statement, Domain, Priority, Gap Reason (no test designed / test exists but not linked / feature not yet implemented), Risk Rating (Critical/High/Medium/Low), and Remediation Plan (write test by date X / accept risk with sign-off / defer to next release). Must-Have requirements with no coverage must be rated Critical or High.`,hint:`Gap Reason matters for remediation: "no test designed" → write test; "test exists but not linked" → update RTM; "feature not yet implemented" → defer with date. A Critical gap for a Must-Have requirement requires a named sign-off, not just a plan.`,validation:`Every coverage gap has a Gap Record. Must-Have gaps are rated Critical or High. Each gap has a specific remediation plan with an action and owner. The total gap count in Gap Records matches the gap count in the metrics summary.`},{id:5,title:`Produce an audit-ready traceability summary report`,description:`Compile a one-page executive summary suitable for the audit committee. It must include: project and release name, date, author, overall coverage metric with traffic-light, Must-Have coverage metric, gap summary table (count by domain and risk), top 3 critical gaps with remediation plans, and a sign-off section with space for QA Lead and Project Manager signatures. Format the summary so it can be exported as a PDF.`,hint:`Structure the report: Header (project info), Coverage Dashboard (metrics + traffic lights), Gap Heat Map (domain vs risk matrix), Critical Gaps Detail (3 rows max, each with ID, statement, risk, owner, date), Sign-Off section. Keep prose minimal — use tables and numbers.`,validation:`The summary contains all required sections. Coverage metrics match the calculated values from Task 3. Gap counts match Gap Records from Task 4. The sign-off section has named roles. The document can be exported as a PDF without layout breakage.`}],completionCriteria:`At least 15 testable requirements are catalogued with IDs. The RTM has both By Requirement and By Test Case views. All five coverage metrics are calculated with traffic-light status. Every gap has a Gap Record with risk rating and remediation plan. The executive summary is audit-ready and consistent with all underlying data.`,solutionNotes:`The RTM is a living document — it must be updated every sprint as new requirements are added and new test cases are written. Automate the metrics calculation (even a spreadsheet formula) so the summary is never out of date. Auditors look for three things: completeness (every requirement has an ID), consistency (metrics match the matrix), and accountability (gaps have named owners and dates).`},{id:`ts-api-client`,title:`Build a Type-Safe API Client`,path:`typescript`,difficulty:`intermediate`,estimatedMinutes:45,tags:[`generics`,`interfaces`,`utility types`,`type inference`],icon:`🔷`,scenario:"Your team's frontend currently calls the backend with plain `fetch()` and casts every response `as any`, so typos in response handling only surface as runtime bugs. Your mission is to build a small, fully generic `ApiClient` that infers the correct response shape at every call site, with zero `any` in its public surface.",description:`Design a generic ApiClient class whose get/post methods are parameterized by the expected response type, using interfaces to describe each endpoint's shape and utility types to derive request payload types from response types.`,objectives:[`Define interfaces describing at least two real resource shapes (e.g. User, Post)`,"Implement a generic `get<T>(url: string): Promise<T>` method with no `any` in its signature",'Derive a "create" payload type from a resource interface using `Omit<>` so callers can\'t supply a server-generated `id`',"Use a discriminated union to type a `Result<T>` success/failure return value instead of throwing on expected failures"],requiredSkills:[`Interfaces & Type Aliases`,`Generics`,`Advanced & Utility Types`],tasks:[{id:1,title:`Define the resource interfaces`,description:"Create a `User` interface (`id: number`, `name: string`, `email: string`) and a `Post` interface (`id: number`, `title: string`, `body: string`, `authorId: number`). Export both.",hint:"Keep them as plain interfaces — no optional fields yet. `id` should be a `number` on both, since that is what the server assigns.",validation:"Both interfaces compile with strict mode on. Attempting to assign an object missing any required field to a `User` or `Post` variable produces a compile error."},{id:2,title:`Write a fully generic get<T>() method`,description:"On an `ApiClient` class, implement `async get<T>(url: string): Promise<T>` that calls `fetch(url)`, parses the JSON body, and returns it typed as `T`. Do not use `any` anywhere in the method signature or body — the one unavoidable cast (`response.json()` is typed `Promise<any>` by `lib.dom.d.ts`) must be written as `as unknown as T`, never a bare `as T` or `any`.",hint:"`const data = (await response.json()) as unknown as T; return data;` — going through `unknown` first is the type-safe way to perform a cast the compiler cannot verify on its own.",validation:'`const user = await client.get<User>("/users/1")` — `user` is inferred as `User`, and `user.notAField` is a compile error.'},{id:3,title:`Derive a create-payload type with Omit<>`,description:'Define `type CreateUserPayload = Omit<User, "id">` and implement `async post<T, P>(url: string, payload: P): Promise<T>`. Calling `client.post<User, CreateUserPayload>("/users", { name, email })` should type-check, but including an `id` field in the payload object literal should be a compile error.',hint:'`Omit<User, "id">` produces every field of `User` except `id`. Object literals assigned to a type with `Omit` are checked structurally — an extra `id` property triggers excess-property-check errors.',validation:"A `CreateUserPayload` object literal with an `id` field fails to compile. One without `id` compiles and the post() call type-checks end to end."},{id:4,title:`Model failures with a discriminated union Result<T>`,description:"Define `type Result<T> = { ok: true; data: T } | { ok: false; error: string }`. Change `get<T>` to catch fetch/parse errors and return `Result<T>` instead of throwing. At the call site, narrow on `result.ok` before accessing `.data` or `.error`.",hint:"The literal types `true`/`false` on the `ok` field are what make this a discriminated union — TypeScript narrows the whole object based on which branch of the union `ok` matches.",validation:"Accessing `result.data` before checking `result.ok === true` is a compile error. After the check, TypeScript narrows correctly inside each branch."},{id:5,title:`Wire it together end to end`,description:"Write a small script that fetches a `User`, creates a `Post` for that user via the typed `post<T,P>()`, and handles both success and failure via the `Result<T>` pattern — with no `any`, no unchecked casts besides the one documented `as unknown as T`, and `strict: true` passing cleanly.",hint:`This task is really a compile check — if every earlier task is done correctly, this composition should just fall into place with full inference and no additional annotations needed at the call site.`,validation:"Running `tsc --noEmit` on the file reports zero errors, and there is no occurrence of the bare `any` keyword anywhere in the file."}],completionCriteria:"ApiClient exposes fully generic get<T>/post<T,P> methods with no `any` in any public signature, a Result<T> discriminated union replaces thrown errors for expected failure cases, and Omit<> is used to derive at least one request-payload type from a response type. `tsc --noEmit --strict` passes with zero errors.",solutionNotes:"The core lesson is that generics let one implementation serve many call sites without sacrificing type safety — the alternative (typing get() to return `any` and casting at each call site) pushes the same unsafe cast into every caller instead of writing it once, deliberately, in one place."},{id:`ts-state-machine`,title:`Model a Type-Safe UI State Machine`,path:`typescript`,difficulty:`advanced`,estimatedMinutes:50,tags:[`discriminated unions`,`narrowing`,`generics`,`exhaustiveness`],icon:`🔀`,scenario:'A data-loading component in your app currently tracks `isLoading`, `data`, and `error` as three separate, independently-settable booleans/fields — which allows impossible states like `isLoading: true` and `error: "failed"` being true at once. Your mission is to replace that with a single discriminated-union state that makes impossible states unrepresentable, and to make the compiler enforce that every state is handled.',description:`Design a generic RequestState<T> discriminated union (idle/loading/success/error), a reducer-style transition function typed so illegal transitions are compile errors, and an exhaustive render function that fails to compile if a new state is ever added and left unhandled.`,objectives:["Define `RequestState<T>` as a discriminated union with a literal `status` field distinguishing 4 states","Write a `transition()` function whose parameter types make invalid state transitions a compile error","Write a render/handling function that switches on `status` and uses a `never`-typed exhaustiveness check in the default case",`Prove the exhaustiveness check works by intentionally adding a 5th state and observing the compile error, then handle it`],requiredSkills:[`Union & Intersection Types`,`Type Narrowing & Guards`,`Generics`],tasks:[{id:1,title:`Define the RequestState<T> discriminated union`,description:'Define `type RequestState<T> = { status: "idle" } | { status: "loading" } | { status: "success"; data: T } | { status: "error"; error: string }`. Note that `data` only exists on the `success` variant and `error` only exists on the `error` variant — this is intentional.',hint:"Because each variant has its own literal `status` value, TypeScript can narrow the whole union down to exactly one variant once you check `status` — that narrowing is what makes `data`/`error` safely accessible only where they actually exist.",validation:'Accessing `.data` on a `RequestState<T>` value without first narrowing on `status === "success"` is a compile error.'},{id:2,title:`Write a transition() function with legal-transition typing`,description:'Implement `function transition<T>(current: RequestState<T>, event: { type: "FETCH" } | { type: "RESOLVE"; data: T } | { type: "REJECT"; error: string } | { type: "RESET" }): RequestState<T>`. FETCH is only valid from `idle` or `error`; RESOLVE/REJECT are only valid from `loading`; RESET is valid from any state. Invalid combinations should return the current state unchanged (not throw).',hint:'A `switch` on `event.type` nested with a check on `current.status` is the clearest way to encode "this event is only legal from these states."',validation:`transition({status:"idle"}, {type:"RESOLVE", data:...}) returns the state unchanged, since RESOLVE is invalid from idle. transition({status:"loading"}, {type:"RESOLVE", data:X}) returns {status:"success", data:X}.`},{id:3,title:`Write an exhaustive render function using never`,description:"Implement `function render<T>(state: RequestState<T>): string` with a `switch (state.status)` covering all 4 cases, and a `default` branch that assigns `state` to a variable typed `never` (e.g. `const _exhaustive: never = state;`) and throws. If every real case is handled, TypeScript proves the default is unreachable and `state` is legitimately `never` there.",hint:"If you forget a case, TypeScript will NOT let you assign the remaining un-narrowed union to a `never`-typed variable — the assignment itself becomes the compile error that tells you a case is missing.",validation:"render() correctly produces a distinct string for each of the 4 states, and the `never` assignment in the default branch compiles cleanly only because all 4 cases are handled above it."},{id:4,title:`Break exhaustiveness on purpose, then fix it`,description:'Add a 5th variant, `{ status: "cancelled" }`, to the `RequestState<T>` union. Do NOT add a case for it in render() yet — confirm this produces a compile error at the `never` assignment (this is the exhaustiveness check doing its job). Then add the missing case to render() and confirm the error disappears.',hint:`This step has no "correct" code beyond demonstrating the failure and the fix — the point is seeing the compiler catch a genuinely missed case before it becomes a runtime bug.`,validation:'Before adding the case: `tsc --noEmit` reports a type error at the `never` assignment naming `"cancelled"`. After adding the case: zero errors.'},{id:5,title:`Prove impossible states are actually unrepresentable`,description:'Try to construct an object literal `{ status: "loading", data: 5, error: "x" }` and confirm TypeScript rejects it as not assignable to `RequestState<number>`. Write a one-paragraph explanation (as a code comment) of why the old `{ isLoading, data, error }` boolean-flags design could not have caught this, but the discriminated union can.',hint:'The old design has three independent fields with no relationship enforced between them — nothing stops `isLoading: true` and `error: "x"` from both being set simultaneously, because they are not variants of one type, just three separate optional-ish fields.',validation:`The object literal with mismatched fields fails to compile with an excess-property or type-mismatch error. The comment correctly identifies that a discriminated union's variants are mutually exclusive by construction, while independent flags are not.`}],completionCriteria:`RequestState<T> is a 5-variant (after task 4) discriminated union with no way to construct a state with fields from the wrong variant. transition() only allows legal state changes. render() is provably exhaustive via a never-typed default branch, verified by the intentional-break-then-fix exercise in task 4.`,solutionNotes:`Discriminated unions plus exhaustiveness checking is the single highest-leverage TypeScript pattern for UI state: it converts "did we forget to handle a case" from a runtime bug discovered in production into a compile-time error caught before the code ships.`}],u=`jml_sound_enabled`,d=null;function f(){if(typeof window>`u`)return null;let e=window.AudioContext??window.webkitAudioContext;return e?(d||=new e,d.state===`suspended`&&d.resume(),d):null}function p(e,t,n,r,i,a={}){let{type:o=`sine`,peak:s=.18,attack:c=.008}=a,l=e.createOscillator(),u=e.createGain();l.type=o,l.frequency.setValueAtTime(n,r),u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(s,r+c),u.gain.exponentialRampToValueAtTime(1e-4,r+i),l.connect(u).connect(t),l.start(r),l.stop(r+i+.02)}function m(){try{return localStorage.getItem(u)!==`off`}catch{return!0}}var h=new Set;function g(e){return h.add(e),()=>h.delete(e)}function _(){for(let e of h)e()}function v(e){try{localStorage.setItem(u,e?`on`:`off`)}catch{}_()}function y(){return(0,i.useSyncExternalStore)(g,m,()=>!0)}function b(){let e=(0,i.useRef)({tick:0,success:0,error:0,swoosh:0,chime:0}),t=(0,i.useCallback)((t,n)=>{let r=performance.now();return r-e.current[t]<n?!1:(e.current[t]=r,!0)},[]),n=(0,i.useCallback)(e=>{if(!m())return;let n=f();if(!n)return;let r=n.createGain();r.gain.value=1,r.connect(n.destination);let i=n.currentTime;switch(e){case`tick`:if(!t(`tick`,70))return;p(n,r,220,i,.05,{type:`triangle`,peak:.1,attack:.002});break;case`swoosh`:{if(!t(`swoosh`,150))return;let e=n.createOscillator(),a=n.createGain();e.type=`sine`,e.frequency.setValueAtTime(900,i),e.frequency.exponentialRampToValueAtTime(140,i+.22),a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(.09,i+.03),a.gain.exponentialRampToValueAtTime(1e-4,i+.24),e.connect(a).connect(r),e.start(i),e.stop(i+.26);break}case`success`:if(!t(`success`,250))return;[1,5/4,3/2,2].forEach((e,t)=>{p(n,r,523.25*e,i+t*.045,.5,{type:`triangle`,peak:.14-t*.02,attack:.005})});break;case`chime`:if(!t(`chime`,200))return;p(n,r,659.25,i,.16,{type:`sine`,peak:.14}),p(n,r,987.77,i+.07,.22,{type:`sine`,peak:.12});break;case`error`:if(!t(`error`,200))return;p(n,r,220,i,.16,{type:`sine`,peak:.12}),p(n,r,196,i+.09,.2,{type:`sine`,peak:.1});break}},[t]),r=(0,i.useCallback)(e=>{if(typeof navigator<`u`&&`vibrate`in navigator&&m())try{navigator.vibrate(e)}catch{}},[]);return{playTick:(0,i.useCallback)(()=>n(`tick`),[n]),playSwoosh:(0,i.useCallback)(()=>n(`swoosh`),[n]),playSuccess:(0,i.useCallback)(()=>{n(`success`),r([0,30,40,30])},[n,r]),playChime:(0,i.useCallback)(()=>{n(`chime`),r(20)},[n,r]),playError:(0,i.useCallback)(()=>{n(`error`),r(60)},[n,r]),vibrate:r}}var x=`jml_review_clock_v1`;function S(){try{return JSON.parse(localStorage.getItem(x)||`{}`)}catch{return{}}}function C(e){try{localStorage.setItem(x,JSON.stringify(e))}catch{}}function w(e,t){let n=S();n[e]={...n[e]??{},[t]:Date.now()},C(n)}function T(e){return S()[e]??{}}var E=[{id:`javascript`,label:`JavaScript`,icon:`⚡`,desc:`15 concepts · 3,107 questions`},{id:`playwright`,label:`Playwright`,icon:`🎭`,desc:`15 concepts · 3,099 questions`},{id:`tosca`,label:`TOSCA`,icon:`🔬`,desc:`15 concepts · 2,789 questions`},{id:`typescript`,label:`TypeScript`,icon:`🔷`,desc:`15 concepts · 3,095 questions`}],D=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),O=t(((e,t)=>{t.exports=D()})),k=O();function A({theme:e,onToggleTheme:t,progress:n,conceptCount:r,saveStatus:i,pathId:a,totalQs:o,onSwitchPath:s,onMenuToggle:c,sidebarOpen:l,onOpenSearch:u,appView:d}){let f=Object.values(n).filter(e=>e.learned).length,p=Object.values(n).filter(e=>e.total>0).length,m=E.find(e=>e.id===a),h=y();return(0,k.jsxs)(`header`,{className:`header`,children:[(0,k.jsxs)(`div`,{className:`header-brand`,children:[(0,k.jsx)(`button`,{className:`sidebar-toggle`,onClick:c,"aria-label":l?`Close menu`:`Open menu`,"aria-expanded":l,children:l?`✕`:`☰`}),(0,k.jsx)(`div`,{className:`header-logo`,children:m?.icon??`⚡`}),(0,k.jsxs)(`div`,{className:`header-brand-text`,children:[(0,k.jsxs)(`h1`,{className:`header-title`,children:[(0,k.jsx)(`span`,{className:`header-title-full`,children:`Mastery Lab`}),(0,k.jsx)(`span`,{className:`header-title-short`,children:`Lab`})]}),(0,k.jsxs)(`p`,{className:`header-sub`,children:[m?.label??`Learning`,` · `,r,` concepts · `,o.toLocaleString(),` Qs`]})]})]}),(0,k.jsx)(`nav`,{className:`path-tabs${d===`learn`?``:` path-tabs--dim`}`,"aria-label":`Learning paths`,children:E.map(e=>(0,k.jsxs)(`button`,{className:`path-tab${a===e.id?` active`:``}`,onClick:()=>s(e.id),title:e.desc,"aria-current":a===e.id?`page`:void 0,children:[e.icon,` `,e.label]},e.id))}),(0,k.jsxs)(`div`,{className:`header-right`,children:[(0,k.jsxs)(`div`,{className:`header-stats`,children:[(0,k.jsx)(j,{label:`Learned`,value:`${f}/${r}`,color:`var(--gn)`}),(0,k.jsx)(j,{label:`Practiced`,value:`${p}/${r}`,color:`var(--bl)`})]}),(0,k.jsx)(`button`,{className:`header-search-btn`,onClick:u,title:`Search (Ctrl+K)`,children:`🔍`}),(0,k.jsxs)(`div`,{className:`save-status-wrap`,"aria-live":`polite`,children:[i===`saving`&&(0,k.jsxs)(`span`,{className:`save-indicator saving`,children:[(0,k.jsx)(`span`,{className:`save-spinner`}),`Saving…`]}),i===`saved`&&(0,k.jsx)(`span`,{className:`save-indicator saved`,children:`✓ Saved`})]}),(0,k.jsx)(`button`,{className:`sound-toggle-btn${h?``:` muted`}`,onClick:()=>v(!h),title:h?`Mute UI sounds`:`Unmute UI sounds`,"aria-pressed":h,children:h?`🔊`:`🔇`}),(0,k.jsx)(`button`,{className:`theme-btn`,onClick:t,title:`Toggle light / dark theme`,children:e===`dark`?`☀️`:`🌙`})]})]})}function j({label:e,value:t,color:n}){return(0,k.jsxs)(`div`,{className:`header-stat`,children:[(0,k.jsx)(`span`,{className:`header-stat-val`,style:{color:n},children:t}),(0,k.jsx)(`span`,{className:`header-stat-label`,children:e})]})}var M=[{id:`dashboard`,icon:`📊`,label:`Dashboard`},{id:`learn`,icon:`📚`,label:`Learn`},{id:`skillmap`,icon:`🗺️`,label:`Skill Map`},{id:`missions`,icon:`🎯`,label:`Missions`}];function N({concepts:e,currentId:t,progress:n,inProgress:r,onSelect:i,appView:a,onSetAppView:o,pathId:s,onSwitchPath:c,onOpenSearch:l}){let u=e.length,d=e.filter(e=>n[e.id]?.learned).length,f=u?Math.round(d/u*100):0;return(0,k.jsxs)(`nav`,{className:`sidebar`,"aria-label":`Navigation`,children:[(0,k.jsxs)(`div`,{className:`sidebar-app-nav`,children:[(0,k.jsx)(`div`,{className:`sidebar-nav-section-label`,children:`Navigation`}),M.map(e=>(0,k.jsxs)(`button`,{className:`sidebar-nav-item${a===e.id?` active`:``}`,onClick:()=>o(e.id),"aria-current":a===e.id?`page`:void 0,children:[(0,k.jsx)(`span`,{className:`sidebar-nav-icon`,children:e.icon}),(0,k.jsx)(`span`,{className:`sidebar-nav-text`,children:e.label})]},e.id)),(0,k.jsxs)(`button`,{className:`sidebar-nav-item sidebar-search-btn`,onClick:l,children:[(0,k.jsx)(`span`,{className:`sidebar-nav-icon`,children:`🔍`}),(0,k.jsx)(`span`,{className:`sidebar-nav-text`,children:`Search`}),(0,k.jsx)(`kbd`,{className:`sidebar-kbd`,children:`Ctrl+K`})]})]}),a===`learn`&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:`sidebar-divider`}),(0,k.jsx)(`div`,{className:`sidebar-path-switch`,children:E.map(e=>(0,k.jsxs)(`button`,{className:`sidebar-path-btn${s===e.id?` active`:``}`,onClick:()=>c(e.id),"aria-current":s===e.id?`page`:void 0,title:e.desc,children:[(0,k.jsx)(`span`,{className:`sidebar-path-icon`,children:e.icon}),(0,k.jsx)(`span`,{className:`sidebar-path-label`,children:e.label})]},e.id))})]}),a===`learn`&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:`sidebar-header`,children:[(0,k.jsx)(`div`,{className:`sidebar-label`,children:`Concepts`}),(0,k.jsxs)(`div`,{className:`sidebar-progress-row`,children:[(0,k.jsxs)(`span`,{className:`sidebar-progress-text`,children:[d,` of `,u,` learned`]}),(0,k.jsxs)(`span`,{className:`sidebar-progress-pct`,children:[f,`%`]})]}),(0,k.jsx)(`div`,{className:`sidebar-overall-bar`,role:`progressbar`,"aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":100,title:`${f}% learned`,children:(0,k.jsx)(`div`,{className:`sidebar-overall-fill`,style:{width:`${f}%`}})})]}),(0,k.jsx)(`div`,{className:`sidebar-items`,children:e.map(e=>{let a=n[e.id],o=a?.total?Math.round(a.score/a.total*100):null,s=a?.learned??!1,c=e.id===t,l=!!r[e.id];return(0,k.jsxs)(`button`,{className:`sidebar-item${c?` active`:``}`,onClick:()=>i(e.id),"aria-current":c?`page`:void 0,children:[(0,k.jsx)(`span`,{className:`sidebar-icon`,children:e.icon}),(0,k.jsx)(`span`,{className:`sidebar-name`,children:e.title}),(0,k.jsxs)(`div`,{className:`sidebar-badges`,children:[l&&!s&&(0,k.jsx)(`span`,{className:`badge badge-in-progress`,title:`Quiz in progress`,children:`▶`}),s&&(0,k.jsx)(`span`,{className:`badge badge-learned`,title:`Marked as learned`,children:`✓`}),o!==null&&(0,k.jsxs)(`span`,{className:`badge badge-score ${o>=80?`good`:o>=50?`ok`:`low`}`,title:`Quiz score: ${o}%`,children:[o,`%`]})]})]},e.id)})})]})]})}function P({canvasRef:e,active:t}){return(0,k.jsx)(`canvas`,{ref:e,"aria-hidden":`true`,style:{position:`fixed`,inset:0,width:`100vw`,height:`100vh`,pointerEvents:`none`,zIndex:1e4,opacity:+!!t,transition:t?`none`:`opacity 0.3s ease`}})}var F=e({default:()=>I});function I({concept:e,onStartQuiz:t,onStartTasks:n,isLearned:r,onMarkLearned:a,questionCount:o,taskCount:s,hasInProgress:c,guideUrl:l}){let[u,d]=(0,i.useState)(null);return(0,k.jsxs)(`div`,{className:`concept-view`,children:[(0,k.jsxs)(`div`,{className:`concept-hero`,children:[(0,k.jsxs)(`div`,{className:`concept-hero-left`,children:[(0,k.jsx)(`span`,{className:`concept-hero-icon`,children:e.icon}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{className:`concept-hero-title`,children:e.title}),(0,k.jsx)(`p`,{className:`concept-hero-sub`,children:`Explanation · Syntax · Examples · Visual · Analogy · Flow`})]})]}),(0,k.jsxs)(`div`,{className:`concept-hero-actions`,children:[!r&&(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:a,children:`Mark as Learned`}),r&&(0,k.jsx)(`span`,{className:`learned-chip`,children:`✓ Learned`}),l&&(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>window.open(l,`_blank`,`noopener,noreferrer`),title:`Open a full standalone deep-dive guide for this concept in a new tab`,children:`📘 Detailed Guide`}),n&&(0,k.jsxs)(`button`,{className:`btn btn-tasks`,onClick:n,children:[`🛠 Tasks (`,s,`)`]}),(0,k.jsx)(`button`,{className:`btn btn-primary resume-btn`,onClick:t,children:c?`▶ Resume Quiz`:`Practice (${o} Qs)`}),c&&(0,k.jsx)(`span`,{className:`in-progress-chip`,title:`You have a quiz in progress for this concept`,children:`In Progress`})]})]}),(0,k.jsxs)(`div`,{className:`sections-grid`,children:[(0,k.jsxs)(`section`,{className:`section full-width`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`📖 Explanation`}),(0,k.jsx)(`div`,{className:`section-body explain-body`,dangerouslySetInnerHTML:{__html:e.explain}})]}),(0,k.jsxs)(`section`,{className:`section`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`✍️ Syntax Reference`}),(0,k.jsx)(`pre`,{className:`code-block`,dangerouslySetInnerHTML:{__html:e.syntax}})]}),(0,k.jsxs)(`section`,{className:`section`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`🎨 Visual Diagram`}),(0,k.jsx)(`div`,{className:`svg-wrap`,dangerouslySetInnerHTML:{__html:e.svgHTML}})]}),(0,k.jsxs)(`section`,{className:`section full-width`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`💡 Worked Examples`}),(0,k.jsx)(`div`,{className:`examples-list`,children:e.examples.map((e,t)=>(0,k.jsxs)(`div`,{className:`example-card`,children:[(0,k.jsxs)(`button`,{className:`example-header`,onClick:()=>d(u===t?null:t),children:[(0,k.jsxs)(`span`,{className:`example-num`,children:[`#`,t+1]}),(0,k.jsx)(`span`,{className:`example-label`,children:e.label}),(0,k.jsx)(`span`,{className:`example-chevron`,children:u===t?`▲`:`▼`})]}),u===t&&(0,k.jsxs)(`div`,{className:`example-body`,children:[(0,k.jsx)(`pre`,{className:`code-block`,dangerouslySetInnerHTML:{__html:e.code}}),(0,k.jsxs)(`div`,{className:`example-out`,children:[(0,k.jsx)(`span`,{className:`example-out-label`,children:`Output:`}),(0,k.jsx)(`code`,{children:e.out})]})]})]},t))})]}),(0,k.jsxs)(`section`,{className:`section`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`🧠 Analogy`}),(0,k.jsx)(`div`,{className:`section-body analogy-body`,dangerouslySetInnerHTML:{__html:e.analogy}})]}),(0,k.jsxs)(`section`,{className:`section`,children:[(0,k.jsx)(`div`,{className:`section-label`,children:`🔄 Step-by-Step Flow`}),(0,k.jsx)(`ol`,{className:`flow-list`,children:e.flow.map((e,t)=>(0,k.jsxs)(`li`,{className:`flow-item`,children:[(0,k.jsx)(`span`,{className:`flow-num`,children:t+1}),(0,k.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e}})]},t))})]})]})]})}var L=`jml_question_analytics_v1`,R=null,z=null;function ee(){if(R)return R;try{R=JSON.parse(localStorage.getItem(L)||`{}`)}catch{R={}}return R}function B(){z&&=(clearTimeout(z),null),R&&localStorage.setItem(L,JSON.stringify(R))}function te(){z||=setTimeout(B,600)}typeof window<`u`&&(window.addEventListener(`pagehide`,B),window.addEventListener(`beforeunload`,B));function V(e,t,n,r,i){let a=ee(),o=a[e]??{},s=`${t}:${n}`,c=o[s]??{correct:0,wrong:0,skipped:0,totalTimeMs:0,timedCount:0};o[s]={correct:c.correct+ +(r===`correct`),wrong:c.wrong+ +(r===`wrong`),skipped:c.skipped+ +(r===`skipped`),totalTimeMs:c.totalTimeMs+Math.max(0,i),timedCount:c.timedCount+1},a[e]=o,te()}function ne(){return ee()}var re=1e3*60*60*24;function ie(e,t){let n=0,r=0,i=0,a=`${t}:`;if(e)for(let[t,o]of Object.entries(e))t.startsWith(a)&&(n+=o.correct,r+=o.wrong,i+=o.skipped);let o=n+r;return{wrongRate:o>0?r/o:0,skipRate:o+i>0?i/(o+i):0,attempts:o}}function ae(e,t,n){if(!n||e===null)return{boost:0,overdueDays:null};let r=1+(t??60)/100*13,i=e/r;if(i<=1)return{boost:0,overdueDays:null};let a=Math.round(e-r);return{boost:Math.min(40,(i-1)*25),overdueDays:a}}function oe(e,t,n,r){let i=t[e.id],a=i?.learned??!1,o=i&&i.total>0?i.score/i.total*100:null,{wrongRate:s,skipRate:c,attempts:l}=ie(n,e.id),u=r[e.id]??null,d=u?(Date.now()-u)/re:null,{boost:f,overdueDays:p}=ae(d,o,a),m=[],h=0;if(a||(h+=40,m.push(l>0?`Started but not yet marked as learned`:`Not started yet`)),o!==null){let e=(100-o)*.5;h+=e,o<70&&m.push(`Quiz average is only ${Math.round(o)}% — reinforcement recommended`)}else a&&(h+=5);return l>=3&&(s>.25&&(h+=s*30,m.push(`${Math.round(s*100)}% of recent attempts on this concept were incorrect`)),c>.15&&(h+=c*20,m.push(`${Math.round(c*100)}% of its questions were skipped — possible knowledge gap`))),f>0&&(h+=f,m.push(p&&p>0?`Last reviewed ${Math.round(d)} days ago — ${p}d overdue for a refresher (spaced repetition)`:`Due for a spaced-repetition refresher`)),m.length===0&&m.push(`Up next in your learning path`),{conceptId:e.id,score:Math.round(h*10)/10,reasons:m}}function se(e,t,n,r){let i=T(r);return e.map(e=>oe(e,t,n,i)).sort((e,t)=>t.score-e.score)}function ce(e,t,n,r){return se(e,t,n,r)[0]??null}var le=e({default:()=>de}),H={javascript:a,playwright:o,tosca:s,typescript:c};l.length;function ue(e,t){let n=H[e]??[],r=t[e]??{},i=Object.values(r).filter(e=>e.learned).length,a=n.length,o=a>0?Math.round(i/a*100):0,s=Object.values(r).filter(e=>e.total>0);return{learnedCount:i,totalCount:a,pct:o,avgScore:s.length>0?Math.round(s.reduce((e,t)=>e+(t.total>0?t.score/t.total:0),0)/s.length*100):null,nextConcept:n.find(e=>!r[e.id]?.learned)??null}}function de({pathId:e,onSwitchPath:t,onGoToLearn:n,onGoToSkillMap:r,onGoToMissions:o,progress:s,missionCompletedCount:c,missionTotalCount:l}){let u=(0,i.useMemo)(()=>E.find(t=>t.id===e),[e]),d=H[e]??a,f=s[e]??{},p=(0,i.useMemo)(()=>d.find(e=>!f[e.id]?.learned)??d[0]??null,[d,f]),m=(0,i.useMemo)(()=>{let t=ne()[e];return ce(d,f,t,e)},[d,f,e]),h=(0,i.useMemo)(()=>m?d.find(e=>e.id===m.conceptId)??null:null,[m,d]),g=(0,i.useMemo)(()=>E.map(e=>({path:e,...ue(e.id,s)})),[s]),_=l>0?Math.round(c/l*100):0;return(0,k.jsxs)(`div`,{className:`dash-root`,children:[(0,k.jsx)(`section`,{className:`dash-hero`,children:(0,k.jsxs)(`div`,{className:`dash-hero-content`,children:[(0,k.jsx)(`h1`,{className:`dash-welcome`,children:`Welcome back`}),(0,k.jsxs)(`p`,{className:`dash-subtitle`,style:{color:`var(--mt)`},children:[`Active path:`,` `,(0,k.jsxs)(`span`,{style:{color:`var(--ac)`,fontWeight:600},children:[u?.icon,` `,u?.label??e]})]}),p&&(0,k.jsxs)(`button`,{className:`btn btn-primary dash-cta`,onClick:()=>n(p.id,e),children:[p.icon,` Continue Learning — `,p.title]})]})}),(0,k.jsxs)(`section`,{className:`dash-section`,children:[(0,k.jsx)(`h2`,{className:`dash-section-title`,children:`Learning Paths`}),(0,k.jsx)(`div`,{className:`dash-path-grid`,children:g.map(({path:r,learnedCount:i,totalCount:a,pct:o,avgScore:s,nextConcept:c})=>{let l=r.id===e;return(0,k.jsxs)(`div`,{className:`dash-path-card${l?` dash-path-card--active`:``}`,children:[(0,k.jsxs)(`div`,{className:`dash-path-header`,children:[(0,k.jsx)(`span`,{className:`dash-path-icon`,children:r.icon}),(0,k.jsx)(`span`,{className:`dash-path-name`,children:r.label}),l&&(0,k.jsx)(`span`,{className:`badge`,style:{marginLeft:`auto`,flexShrink:0},children:`Active`})]}),(0,k.jsxs)(`p`,{className:`dash-path-count`,style:{color:`var(--mt)`},children:[i,` / `,a,` learned`]}),(0,k.jsx)(`div`,{className:`dash-progress-bar-track`,children:(0,k.jsx)(`div`,{className:`dash-progress-bar-fill`,style:{width:`${o}%`,backgroundColor:`var(--ac)`}})}),(0,k.jsxs)(`p`,{className:`dash-pct-label`,style:{color:`var(--ac)`},children:[o,`%`]}),s!==null&&(0,k.jsxs)(`p`,{className:`dash-avg-score`,style:{color:`var(--mt)`},children:[`Avg quiz score:`,` `,(0,k.jsxs)(`strong`,{style:{color:`var(--tx)`},children:[s,`%`]})]}),(0,k.jsxs)(`div`,{className:`dash-path-actions`,children:[!l&&(0,k.jsx)(`button`,{className:`btn btn-ghost`,onClick:()=>t(r.id),children:`Switch`}),c?(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>n(c.id,r.id),children:`Resume`}):a>0?(0,k.jsx)(`span`,{className:`learned-chip`,children:`Complete!`}):null]})]},r.id)})})]}),h&&(0,k.jsxs)(`section`,{className:`dash-section`,children:[(0,k.jsx)(`h2`,{className:`dash-section-title`,children:`Recommended Next`}),(0,k.jsxs)(`div`,{className:`dash-recommended-card`,children:[(0,k.jsxs)(`div`,{className:`dash-recommended-info`,children:[(0,k.jsxs)(`p`,{className:`dash-recommended-label`,style:{color:`var(--mt)`},children:[`Up next in `,u?.label??e]}),(0,k.jsxs)(`h3`,{className:`dash-recommended-title`,children:[h.icon,` `,h.title]}),m&&m.reasons.length>0&&(0,k.jsx)(`ul`,{className:`dash-recommended-reasons`,children:m.reasons.map((e,t)=>(0,k.jsx)(`li`,{children:e},t))})]}),(0,k.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>n(h.id,e),children:`Start`})]})]}),(0,k.jsxs)(`section`,{className:`dash-section`,children:[(0,k.jsx)(`h2`,{className:`dash-section-title`,children:`Missions`}),(0,k.jsxs)(`div`,{className:`dash-missions-card`,children:[(0,k.jsxs)(`div`,{className:`dash-missions-info`,children:[(0,k.jsxs)(`span`,{className:`dash-missions-count`,style:{color:`var(--ac)`},children:[c,` / `,l]}),(0,k.jsx)(`span`,{className:`dash-missions-label`,style:{color:`var(--mt)`},children:`missions completed`})]}),(0,k.jsx)(`div`,{className:`dash-progress-bar-track`,style:{margin:`0.5rem 0`},children:(0,k.jsx)(`div`,{className:`dash-progress-bar-fill`,style:{width:`${_}%`,backgroundColor:`var(--ac)`}})}),(0,k.jsxs)(`p`,{className:`dash-pct-label`,style:{color:`var(--ac)`},children:[_,`%`]}),(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:o,children:`View Missions`})]})]}),(0,k.jsxs)(`section`,{className:`dash-section`,children:[(0,k.jsx)(`h2`,{className:`dash-section-title`,children:`Quick Links`}),(0,k.jsxs)(`div`,{className:`dash-quicklinks`,children:[(0,k.jsx)(`button`,{className:`btn btn-ghost dash-quicklink`,onClick:r,children:`🗺 Skill Map`}),(0,k.jsx)(`button`,{className:`btn btn-ghost dash-quicklink`,onClick:o,children:`🎯 Missions`}),(0,k.jsx)(`button`,{className:`btn btn-ghost dash-quicklink`,onClick:r,children:`🛠 Practice Tasks`})]})]})]})}var fe=e({default:()=>me}),pe={Beginner:`#22c55e`,Intermediate:`#f59e0b`,Advanced:`#ef4444`};function me({missionId:e,missionProgress:t,onBack:n,onStartMission:r,onCompleteTask:a,onCompleteMission:o}){let[s,c]=(0,i.useState)({}),u=l.find(t=>t.id===e),d=t[e],f=d?.status??`not-started`,p=d?.completedTaskIds??[];if(!u)return(0,k.jsxs)(`div`,{className:`mission-detail-container`,children:[(0,k.jsx)(`button`,{className:`mission-back-btn`,onClick:n,children:`← Back`}),(0,k.jsx)(`p`,{className:`mission-not-found`,children:`Mission not found.`})]});let m=u.tasks?.length??0,h=p.length,g=m>0?Math.round(h/m*100):0,_=m>0&&h>=m,v=pe[u.difficulty]??`#6b7280`;function y(e){c(t=>({...t,[e]:!t[e]}))}function b(t){p.includes(t)||a(e,t)}function x(){o(e,m>0?Math.round(h/m*100):100)}return(0,k.jsxs)(`div`,{className:`mission-detail-container`,children:[(0,k.jsxs)(`div`,{className:`mission-breadcrumb`,children:[(0,k.jsx)(`button`,{className:`mission-back-btn`,onClick:n,children:`← Back`}),(0,k.jsx)(`span`,{className:`mission-breadcrumb-sep`,children:`/`}),(0,k.jsx)(`span`,{className:`mission-breadcrumb-current`,children:u.title})]}),(0,k.jsxs)(`div`,{className:`mission-header-card`,children:[(0,k.jsxs)(`div`,{className:`mission-header-top`,children:[(0,k.jsx)(`span`,{className:`mission-header-icon`,children:u.icon}),(0,k.jsxs)(`div`,{className:`mission-header-badges`,children:[(0,k.jsx)(`span`,{className:`mission-difficulty-badge`,style:{backgroundColor:v+`22`,color:v,border:`1px solid ${v}`},children:u.difficulty}),(0,k.jsx)(`span`,{className:`mission-path-tag`,children:u.path})]})]}),(0,k.jsx)(`h1`,{className:`mission-header-title`,children:u.title}),(0,k.jsx)(`div`,{className:`mission-header-meta`,children:(0,k.jsxs)(`span`,{className:`mission-header-duration`,children:[`⏱ `,u.estimatedMinutes,` min`]})})]}),f===`not-started`&&(0,k.jsxs)(`div`,{className:`mission-start-cta`,children:[(0,k.jsx)(`p`,{className:`mission-start-cta-text`,children:`Ready to take on this mission? Start now to track your progress and earn a score.`}),(0,k.jsx)(`button`,{className:`mission-start-btn mission-start-btn--primary`,onClick:()=>r(e),children:`Start Mission`})]}),f===`completed`&&(0,k.jsxs)(`div`,{className:`mission-completed-banner`,children:[(0,k.jsx)(`span`,{className:`mission-completed-trophy`,children:`🏆`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`mission-completed-title`,children:`Mission Complete!`}),(0,k.jsxs)(`p`,{className:`mission-completed-subtitle`,children:[`You scored `,(0,k.jsxs)(`strong`,{children:[d?.score??100,`%`]}),` on this mission.`]})]})]}),u.scenario&&(0,k.jsxs)(`section`,{className:`mission-section`,children:[(0,k.jsx)(`h2`,{className:`mission-section-heading`,children:`Scenario`}),(0,k.jsx)(`div`,{className:`mission-scenario-box`,children:(0,k.jsx)(`p`,{className:`mission-scenario-text`,children:u.scenario})})]}),u.objectives&&u.objectives.length>0&&(0,k.jsxs)(`section`,{className:`mission-section`,children:[(0,k.jsx)(`h2`,{className:`mission-section-heading`,children:`Objectives`}),(0,k.jsx)(`ul`,{className:`mission-objectives-list`,children:u.objectives.map((e,t)=>(0,k.jsxs)(`li`,{className:`mission-objective-item`,children:[(0,k.jsx)(`span`,{className:`mission-objective-bullet`,children:`→`}),e]},t))})]}),u.requiredSkills&&u.requiredSkills.length>0&&(0,k.jsxs)(`section`,{className:`mission-section`,children:[(0,k.jsx)(`h2`,{className:`mission-section-heading`,children:`Required Skills`}),(0,k.jsx)(`div`,{className:`mission-skills-row`,children:u.requiredSkills.map(e=>(0,k.jsx)(`span`,{className:`mission-skill-chip`,children:e},e))})]}),u.tasks&&u.tasks.length>0&&(0,k.jsxs)(`section`,{className:`mission-section`,children:[(0,k.jsx)(`h2`,{className:`mission-section-heading`,children:`Tasks`}),(0,k.jsxs)(`div`,{className:`mission-progress-bar-wrap`,children:[(0,k.jsx)(`div`,{className:`mission-progress-bar-track`,children:(0,k.jsx)(`div`,{className:`mission-progress-bar-fill`,style:{width:`${g}%`}})}),(0,k.jsxs)(`span`,{className:`mission-progress-label`,children:[h,` / `,m,` tasks completed`]})]}),(0,k.jsx)(`div`,{className:`mission-tasks-list`,children:u.tasks.map((e,t)=>{let n=p.includes(e.id),r=s[e.id]??!1,i=f===`in-progress`||f===`completed`;return(0,k.jsxs)(`div`,{className:`mission-task-card${n?` mission-task-card--completed`:``}`,children:[(0,k.jsxs)(`div`,{className:`mission-task-header`,children:[(0,k.jsxs)(`div`,{className:`mission-task-left`,children:[(0,k.jsx)(`span`,{className:`mission-task-number`,children:t+1}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{className:`mission-task-title`,children:e.title}),(0,k.jsx)(`p`,{className:`mission-task-description`,children:e.description})]})]}),(0,k.jsx)(`div`,{className:`mission-task-right`,children:n?(0,k.jsx)(`span`,{className:`mission-task-check`,children:`✅`}):i&&(0,k.jsx)(`button`,{className:`mission-task-complete-btn`,onClick:()=>b(e.id),children:`Mark Complete`})})]}),e.hint&&(0,k.jsxs)(`div`,{className:`mission-task-hint-section`,children:[(0,k.jsx)(`button`,{className:`mission-hint-toggle`,onClick:()=>y(e.id),children:r?`▲ Hide Hint`:`▼ Show Hint`}),r&&(0,k.jsxs)(`div`,{className:`mission-hint-box`,children:[(0,k.jsx)(`span`,{className:`mission-hint-label`,children:`Hint:`}),` `,e.hint]})]}),e.validationCriteria&&e.validationCriteria.length>0&&(0,k.jsxs)(`div`,{className:`mission-task-validation`,children:[(0,k.jsx)(`p`,{className:`mission-validation-label`,children:`Validation Criteria:`}),(0,k.jsx)(`ul`,{className:`mission-validation-list`,children:e.validationCriteria.map((e,t)=>(0,k.jsx)(`li`,{className:`mission-validation-item`,children:e},t))})]})]},e.id)})}),_&&f===`in-progress`&&(0,k.jsx)(`div`,{className:`mission-complete-wrap`,children:(0,k.jsx)(`button`,{className:`mission-complete-btn`,onClick:x,children:`Complete Mission 🎉`})}),f===`completed`&&u.solutionNotes&&(0,k.jsxs)(`div`,{className:`mission-solution-notes`,children:[(0,k.jsx)(`h3`,{className:`mission-solution-heading`,children:`Solution Notes`}),(0,k.jsx)(`p`,{className:`mission-solution-text`,children:u.solutionNotes})]})]}),(0,k.jsx)(`style`,{children:`
        .mission-detail-container {
          padding: 2rem;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mission-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        .mission-back-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #6366f1;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0;
        }
        .mission-back-btn:hover { text-decoration: underline; }
        .mission-breadcrumb-sep { color: #d1d5db; }
        .mission-breadcrumb-current {
          color: #111827;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 300px;
        }
        .mission-not-found {
          color: #ef4444;
          font-size: 1rem;
        }
        .mission-header-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-header-icon {
          font-size: 2.5rem;
        }
        .mission-header-badges {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .mission-difficulty-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mission-path-tag {
          background: #e0e7ff;
          color: #4338ca;
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .mission-header-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          color: #111827;
          line-height: 1.3;
        }
        .mission-header-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #6b7280;
        }
        .mission-start-cta {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .mission-start-cta-text {
          margin: 0;
          color: #0c4a6e;
          font-size: 0.9rem;
          flex: 1;
        }
        .mission-start-btn {
          border: none;
          cursor: pointer;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.6rem 1.4rem;
          white-space: nowrap;
        }
        .mission-start-btn--primary {
          background: #6366f1;
          color: #fff;
        }
        .mission-start-btn--primary:hover { background: #4f46e5; }
        .mission-completed-banner {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mission-completed-trophy { font-size: 2rem; }
        .mission-completed-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #15803d;
          margin: 0 0 0.25rem 0;
        }
        .mission-completed-subtitle {
          margin: 0;
          color: #166534;
          font-size: 0.875rem;
        }
        .mission-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-section-heading {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: #111827;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.4rem;
        }
        .mission-scenario-box {
          background: #f9fafb;
          border-left: 4px solid #6366f1;
          border-radius: 0.5rem;
          padding: 1rem 1.25rem;
        }
        .mission-scenario-text {
          margin: 0;
          color: #374151;
          font-size: 0.925rem;
          line-height: 1.6;
        }
        .mission-objectives-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .mission-objective-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #374151;
        }
        .mission-objective-bullet {
          color: #6366f1;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mission-skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .mission-skill-chip {
          background: #f3f4f6;
          color: #374151;
          border-radius: 9999px;
          padding: 0.2rem 0.65rem;
          font-size: 0.78rem;
          border: 1px solid #e5e7eb;
        }
        .mission-progress-bar-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mission-progress-bar-track {
          flex: 1;
          height: 8px;
          background: #e5e7eb;
          border-radius: 9999px;
          overflow: hidden;
        }
        .mission-progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #22c55e);
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .mission-progress-label {
          font-size: 0.8rem;
          color: #6b7280;
          white-space: nowrap;
        }
        .mission-tasks-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mission-task-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mission-task-card--completed {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .mission-task-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .mission-task-left {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          flex: 1;
        }
        .mission-task-number {
          background: #6366f1;
          color: #fff;
          border-radius: 9999px;
          width: 1.6rem;
          height: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mission-task-card--completed .mission-task-number {
          background: #22c55e;
        }
        .mission-task-title {
          font-weight: 600;
          font-size: 0.925rem;
          margin: 0 0 0.2rem 0;
          color: #111827;
        }
        .mission-task-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }
        .mission-task-right {
          flex-shrink: 0;
        }
        .mission-task-check {
          font-size: 1.25rem;
        }
        .mission-task-complete-btn {
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 0.4rem;
          padding: 0.35rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
        }
        .mission-task-complete-btn:hover { background: #4f46e5; }
        .mission-task-hint-section {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-left: 2.35rem;
        }
        .mission-hint-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #6366f1;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0;
          text-align: left;
        }
        .mission-hint-toggle:hover { text-decoration: underline; }
        .mission-hint-box {
          background: #fef9c3;
          border: 1px solid #fde68a;
          border-radius: 0.4rem;
          padding: 0.6rem 0.9rem;
          font-size: 0.82rem;
          color: #92400e;
          line-height: 1.5;
        }
        .mission-hint-label {
          font-weight: 700;
        }
        .mission-task-validation {
          padding-left: 2.35rem;
        }
        .mission-validation-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 0.25rem 0;
        }
        .mission-validation-list {
          list-style: disc;
          padding-left: 1.1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .mission-validation-item {
          font-size: 0.8rem;
          color: #6b7280;
        }
        .mission-complete-wrap {
          display: flex;
          justify-content: center;
          margin-top: 0.5rem;
        }
        .mission-complete-btn {
          background: #22c55e;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s;
        }
        .mission-complete-btn:hover { background: #16a34a; }
        .mission-solution-notes {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          margin-top: 0.5rem;
        }
        .mission-solution-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin: 0 0 0.5rem 0;
        }
        .mission-solution-text {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.6;
        }
      `})]})}var he=e({default:()=>ye}),ge={Beginner:`#22c55e`,Intermediate:`#f59e0b`,Advanced:`#ef4444`},_e=[`All`,`JavaScript`,`Playwright`,`Tosca`,`TypeScript`],ve=[`All`,`Beginner`,`Intermediate`,`Advanced`];function ye({missionProgress:e,onSelectMission:t}){let[n,r]=(0,i.useState)(`All`),[a,o]=(0,i.useState)(`All`),s=l.filter(e=>{let t=n===`All`||e.path===n.toLowerCase(),r=a===`All`||e.difficulty===a.toLowerCase();return t&&r}),c=l.length,u=Object.values(e).filter(e=>e.status===`completed`).length,d=Object.values(e).filter(e=>e.status===`in-progress`).length;function f(t){return e[t]?.status??`not-started`}function p(t){return e[t]?.score}function m(e){return e===`completed`?`Review`:e===`in-progress`?`Continue`:`Start Mission`}return(0,k.jsxs)(`div`,{className:`mission-list-container`,children:[(0,k.jsxs)(`div`,{className:`mission-list-header`,children:[(0,k.jsx)(`h1`,{className:`mission-list-title`,children:`Real-World Missions`}),(0,k.jsx)(`p`,{className:`mission-list-subtitle`,children:`Apply your skills to realistic scenarios`})]}),(0,k.jsx)(`div`,{className:`mission-filter-row`,children:_e.map(e=>(0,k.jsx)(`button`,{className:`mission-filter-tab${n===e?` mission-filter-tab--active`:``}`,onClick:()=>r(e),children:e},e))}),(0,k.jsx)(`div`,{className:`mission-filter-row mission-filter-row--secondary`,children:ve.map(e=>(0,k.jsx)(`button`,{className:`mission-filter-tab mission-filter-tab--difficulty${a===e?` mission-filter-tab--active`:``}`,onClick:()=>o(e),children:e},e))}),(0,k.jsxs)(`div`,{className:`mission-stats-row`,children:[(0,k.jsxs)(`div`,{className:`mission-stat`,children:[(0,k.jsx)(`span`,{className:`mission-stat-value`,children:c}),(0,k.jsx)(`span`,{className:`mission-stat-label`,children:`Total Missions`})]}),(0,k.jsxs)(`div`,{className:`mission-stat`,children:[(0,k.jsx)(`span`,{className:`mission-stat-value mission-stat-value--completed`,children:u}),(0,k.jsx)(`span`,{className:`mission-stat-label`,children:`Completed`})]}),(0,k.jsxs)(`div`,{className:`mission-stat`,children:[(0,k.jsx)(`span`,{className:`mission-stat-value mission-stat-value--inprogress`,children:d}),(0,k.jsx)(`span`,{className:`mission-stat-label`,children:`In Progress`})]})]}),s.length===0?(0,k.jsxs)(`div`,{className:`mission-empty-state`,children:[(0,k.jsx)(`span`,{className:`mission-empty-icon`,children:`🔍`}),(0,k.jsx)(`p`,{className:`mission-empty-text`,children:`No missions match your current filters.`}),(0,k.jsx)(`button`,{className:`mission-empty-reset`,onClick:()=>{r(`All`),o(`All`)},children:`Reset Filters`})]}):(0,k.jsx)(`div`,{className:`mission-cards-grid`,children:s.map(e=>{let n=f(e.id),r=p(e.id),i=ge[e.difficulty]??`#6b7280`;return(0,k.jsxs)(`div`,{className:`mission-card mission-card--${n}`,onClick:()=>t(e.id),children:[(0,k.jsxs)(`div`,{className:`mission-card-top`,children:[(0,k.jsx)(`span`,{className:`mission-card-icon`,children:e.icon}),(0,k.jsx)(`span`,{className:`mission-card-difficulty`,style:{backgroundColor:i+`22`,color:i,border:`1px solid ${i}`},children:e.difficulty})]}),(0,k.jsxs)(`div`,{className:`mission-card-meta`,children:[(0,k.jsxs)(`span`,{className:`mission-card-duration`,children:[`⏱ `,e.estimatedMinutes,` min`]}),(0,k.jsx)(`span`,{className:`mission-card-path-tag`,children:e.path})]}),(0,k.jsx)(`h2`,{className:`mission-card-title`,children:e.title}),(0,k.jsx)(`p`,{className:`mission-card-description`,children:e.description}),(0,k.jsx)(`div`,{className:`mission-card-skills`,children:e.requiredSkills.map(e=>(0,k.jsx)(`span`,{className:`mission-skill-chip`,children:e},e))}),(0,k.jsxs)(`div`,{className:`mission-card-footer`,children:[(0,k.jsxs)(`div`,{className:`mission-card-status-row`,children:[(0,k.jsxs)(`span`,{className:`mission-status-indicator mission-status-indicator--${n}`,children:[n===`completed`&&`✅ Completed`,n===`in-progress`&&`🔄 In Progress`,n===`not-started`&&`⚪ Not Started`]}),n===`completed`&&r!==void 0&&(0,k.jsxs)(`span`,{className:`mission-score-badge`,children:[`Score: `,r,`%`]})]}),(0,k.jsx)(`button`,{className:`mission-card-btn mission-card-btn--${n}`,onClick:n=>{n.stopPropagation(),t(e.id)},children:m(n)})]})]},e.id)})}),(0,k.jsx)(`style`,{children:`
        .mission-list-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mission-list-header {
          margin-bottom: 1.5rem;
        }
        .mission-list-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }
        .mission-list-subtitle {
          color: #6b7280;
          margin: 0;
        }
        .mission-filter-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }
        .mission-filter-row--secondary {
          margin-bottom: 1.25rem;
        }
        .mission-filter-tab {
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
          background: transparent;
          cursor: pointer;
          font-size: 0.875rem;
          color: #374151;
          transition: all 0.15s;
        }
        .mission-filter-tab:hover {
          border-color: #6366f1;
          color: #6366f1;
        }
        .mission-filter-tab--active {
          background: #6366f1;
          border-color: #6366f1;
          color: #fff;
        }
        .mission-filter-tab--difficulty.mission-filter-tab--active {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: #fff;
        }
        .mission-stats-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          padding: 1rem 1.5rem;
          background: #f9fafb;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
        }
        .mission-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mission-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }
        .mission-stat-value--completed { color: #22c55e; }
        .mission-stat-value--inprogress { color: #f59e0b; }
        .mission-stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.1rem;
        }
        .mission-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 700px) {
          .mission-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .mission-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.25rem;
          cursor: pointer;
          transition: box-shadow 0.15s, border-color 0.15s;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mission-card:hover {
          box-shadow: 0 4px 16px rgba(99,102,241,0.12);
          border-color: #6366f1;
        }
        .mission-card--completed {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .mission-card--in-progress {
          border-color: #fde68a;
          background: #fffbeb;
        }
        .mission-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-card-icon {
          font-size: 1.75rem;
        }
        .mission-card-difficulty {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mission-card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: #6b7280;
        }
        .mission-card-path-tag {
          background: #e0e7ff;
          color: #4338ca;
          border-radius: 9999px;
          padding: 0.1rem 0.6rem;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .mission-card-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          color: #111827;
          line-height: 1.3;
        }
        .mission-card-description {
          font-size: 0.85rem;
          color: #4b5563;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mission-card-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .mission-skill-chip {
          background: #f3f4f6;
          color: #374151;
          border-radius: 9999px;
          padding: 0.15rem 0.55rem;
          font-size: 0.72rem;
          border: 1px solid #e5e7eb;
        }
        .mission-card-footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
        }
        .mission-card-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mission-status-indicator {
          font-size: 0.8rem;
          font-weight: 500;
        }
        .mission-status-indicator--completed { color: #16a34a; }
        .mission-status-indicator--in-progress { color: #d97706; }
        .mission-status-indicator--not-started { color: #9ca3af; }
        .mission-score-badge {
          font-size: 0.78rem;
          background: #dcfce7;
          color: #15803d;
          border-radius: 9999px;
          padding: 0.1rem 0.6rem;
          font-weight: 600;
        }
        .mission-card-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background 0.15s;
          align-self: flex-end;
        }
        .mission-card-btn--not-started {
          background: #6366f1;
          color: #fff;
        }
        .mission-card-btn--not-started:hover { background: #4f46e5; }
        .mission-card-btn--in-progress {
          background: #f59e0b;
          color: #fff;
        }
        .mission-card-btn--in-progress:hover { background: #d97706; }
        .mission-card-btn--completed {
          background: #e5e7eb;
          color: #374151;
        }
        .mission-card-btn--completed:hover { background: #d1d5db; }
        .mission-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1rem;
          color: #6b7280;
          gap: 0.75rem;
        }
        .mission-empty-icon {
          font-size: 2.5rem;
        }
        .mission-empty-text {
          margin: 0;
          font-size: 1rem;
        }
        .mission-empty-reset {
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1.25rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .mission-empty-reset:hover { background: #4f46e5; }
      `})]})}var be={O:`Output`,F:`Fill-in`,E:`Find Error`,D:`Debug`,C:`Complete`,L:`Logic`,R:`Real-World`,S:`Scenario`},xe={B:`Beginner`,I:`Intermediate`,A:`Advanced`},Se=e({default:()=>Ce});function Ce({pathId:e,concept:t,questions:n,onBack:r,onComplete:a,inProgress:o,onSaveInProgress:s,onClearInProgress:c}){let[l,u]=(0,i.useState)(()=>o?.idx??0),[d,f]=(0,i.useState)(()=>o?Array(n.length).fill(null).map((e,t)=>o.answers[t]??null):Array(n.length).fill(null)),[p,m]=(0,i.useState)(()=>o?o.answers[o.idx]??null:null),[h,g]=(0,i.useState)(()=>o?o.answers[o.idx]!==null:!1),[_,v]=(0,i.useState)(!1),[y,b]=(0,i.useState)(()=>new Set(o?.skipped??[])),[x,S]=(0,i.useState)(!1),C=n[l],w=d[l]!==null&&d[l]===C.ans,T=y.has(l),E=(0,i.useRef)(Date.now());(0,i.useEffect)(()=>{E.current=Date.now()},[l]);let D=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(!D.current){D.current=!0;return}x||(d.some(e=>e!==null)||y.size>0||l>0?s({answers:d,skipped:[...y],idx:l}):c())},[d,l,y,x]),(0,i.useEffect)(()=>{if(!d.some(e=>e!==null)||x)return;let e=e=>{e.preventDefault(),e.returnValue=``};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[d,x]);let O=(0,i.useCallback)(e=>{u(e),m(d[e]),g(d[e]!==null),v(!1)},[d]),A=(0,i.useCallback)(()=>{l!==0&&O(l-1)},[l,O]),j=(0,i.useCallback)(e=>{if(l+1>=n.length){let t=e.filter((e,t)=>e===n[t].ans).length;S(!0),a(e,t)}else{let t=l+1;u(t),m(e[t]),g(e[t]!==null),v(!1)}},[l,n,a]),M=(0,i.useCallback)(()=>{if(p===null)return;let r=[...d];r[l]=p,f(r),b(e=>{let t=new Set(e);return t.delete(l),t}),g(!0),V(e,t.id,l,p===n[l].ans?`correct`:`wrong`,Date.now()-E.current)},[p,d,l,e,t.id,n]),N=(0,i.useCallback)(()=>{b(e=>new Set(e).add(l)),V(e,t.id,l,`skipped`,Date.now()-E.current),j(d)},[l,d,j,e,t.id]),P=(0,i.useCallback)(()=>{j(d)},[d,j]),F=d.filter((e,t)=>e===n[t].ans).length,I=y.size,L=d.filter(e=>e===null).length;if(x){let e=Math.round(F/n.length*100);return(0,k.jsxs)(`div`,{className:`quiz-done`,children:[(0,k.jsx)(`div`,{className:`quiz-done-icon`,children:e>=80?`🏆`:e>=50?`📈`:`📚`}),(0,k.jsx)(`h2`,{className:`quiz-done-title`,children:`Quiz Complete!`}),(0,k.jsxs)(`p`,{className:`quiz-done-concept`,children:[t.icon,` `,t.title]}),(0,k.jsxs)(`div`,{className:`quiz-done-score`,style:{color:e>=80?`var(--gn)`:e>=50?`var(--yw)`:`var(--rd)`},children:[F,` / `,n.length,(0,k.jsxs)(`span`,{className:`quiz-done-pct`,children:[e,`%`]})]}),L>0&&(0,k.jsxs)(`p`,{className:`quiz-done-skipped`,children:[`⚠️ `,L,` question`,L>1?`s`:``,` skipped / unanswered`]}),(0,k.jsx)(`div`,{className:`quiz-done-breakdown`,children:n.map((e,t)=>{let n=`breakdown-dot`;return d[t]===null?n+=` skipped`:d[t]===e.ans?n+=` correct`:n+=` wrong`,(0,k.jsx)(`span`,{className:n,title:`Q${t+1}: ${d[t]===null?`Skipped`:d[t]===e.ans?`Correct`:`Wrong`}`},t)})}),(0,k.jsxs)(`div`,{className:`quiz-done-actions`,children:[(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:r,children:`Back to Learn`}),(0,k.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>{c(),u(0),f(Array(n.length).fill(null)),m(null),g(!1),S(!1),b(new Set)},children:`Retry Quiz`})]})]})}let R=C.diff===`B`?`var(--gn)`:C.diff===`I`?`var(--yw)`:`var(--rd)`;return(0,k.jsxs)(`div`,{className:`quiz-view`,children:[(0,k.jsxs)(`div`,{className:`quiz-topbar`,children:[(0,k.jsx)(`button`,{className:`btn-ghost`,onClick:r,children:`← Leave`}),(0,k.jsx)(`div`,{className:`quiz-progress-bar`,children:(0,k.jsx)(`div`,{className:`quiz-progress-fill`,style:{width:`${(l+1)/n.length*100}%`}})}),(0,k.jsxs)(`span`,{className:`quiz-counter`,children:[l+1,` / `,n.length]})]}),(0,k.jsxs)(`div`,{className:`quiz-live-score`,children:[(0,k.jsxs)(`span`,{style:{color:`var(--gn)`},children:[`✓ `,F,` correct`]}),(0,k.jsxs)(`span`,{style:{color:`var(--rd)`},children:[`✗ `,d.filter((e,t)=>e!==null&&e!==n[t].ans).length,` wrong`]}),(0,k.jsxs)(`span`,{style:{color:`var(--dm)`},children:[`⊘ `,L,` left`]}),I>0&&(0,k.jsxs)(`span`,{style:{color:`var(--yw)`},children:[`↷ `,I,` skipped`]})]}),(0,k.jsxs)(`div`,{className:`question-card`,children:[(0,k.jsxs)(`div`,{className:`question-badges`,children:[(0,k.jsx)(`span`,{className:`badge-type`,children:be[C.type]}),(0,k.jsx)(`span`,{className:`badge-diff`,style:{color:R},children:xe[C.diff]}),T&&(0,k.jsx)(`span`,{className:`badge-skipped`,children:`Skipped`})]}),(0,k.jsx)(`p`,{className:`question-text`,children:C.q}),C.code&&(0,k.jsx)(`pre`,{className:`question-code`,children:C.code}),(0,k.jsx)(`div`,{className:`options-list`,children:C.opts.map((e,t)=>{let n=`option`;return p===t&&!h&&(n+=` selected`),h&&(t===C.ans?n+=` correct`:t===p&&(n+=` wrong`)),(0,k.jsxs)(`button`,{className:n,onClick:()=>{h||m(t)},disabled:h,children:[(0,k.jsx)(`span`,{className:`option-letter`,children:String.fromCharCode(65+t)}),(0,k.jsx)(`span`,{className:`option-text`,children:e}),h&&t===C.ans&&(0,k.jsx)(`span`,{className:`option-tick`,children:`✓`}),h&&t===p&&t!==C.ans&&(0,k.jsx)(`span`,{className:`option-cross`,children:`✗`})]},t)})}),h&&(0,k.jsxs)(`div`,{className:`hint-box ${w?`hint-correct`:`hint-wrong`}`,children:[(0,k.jsx)(`span`,{className:`hint-icon`,children:w?`✅`:`❌`}),_?(0,k.jsx)(`span`,{className:`hint-text`,children:C.hint}):(0,k.jsx)(`button`,{className:`hint-toggle`,onClick:()=>v(!0),children:`Show explanation`})]}),(0,k.jsxs)(`div`,{className:`question-actions`,children:[(0,k.jsx)(`button`,{className:`btn btn-secondary`,onClick:A,disabled:l===0,title:`Go to previous question`,children:`← Prev`}),(0,k.jsx)(`div`,{className:`question-actions-right`,children:h?(0,k.jsx)(`button`,{className:`btn btn-primary`,onClick:P,children:l+1<n.length?`Next →`:`Finish Quiz`}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{className:`btn btn-skip`,onClick:N,title:`Skip this question and come back later`,children:`Skip ↷`}),(0,k.jsx)(`button`,{className:`btn btn-primary`,onClick:M,disabled:p===null,children:`Check Answer`})]})})]})]}),(0,k.jsx)(`div`,{className:`q-nav`,children:n.map((e,t)=>{let n=`q-nav-dot`;return t===l?n+=` current`:y.has(t)?n+=` skipped`:d[t]!==null&&(n+=d[t]===e.ans?` correct`:` wrong`),(0,k.jsx)(`button`,{className:n,onClick:()=>O(t),title:`Q${t+1}`},t)})})]})}var U=[{id:`js-variables`,label:`Variables & Scope`,path:`javascript`,category:`Fundamentals`,description:`Understand how to declare variables using var, let, and const, and reason about block, function, and module scope. Recognize common pitfalls such as hoisting and the temporal dead zone.`,relatedConceptIds:[`variables`,`scope`],prerequisites:[]},{id:`js-functions`,label:`Functions & Closures`,path:`javascript`,category:`Fundamentals`,description:`Define and invoke functions using declarations, expressions, and arrow syntax, and leverage closures to encapsulate private state. Understand how the lexical environment enables powerful patterns like factories and memoization.`,relatedConceptIds:[`functions`,`closures`],prerequisites:[`js-variables`]},{id:`js-arrays`,label:`Arrays & Iteration`,path:`javascript`,category:`Data Structures`,description:`Manipulate ordered collections with built-in array methods such as map, filter, reduce, and flat. Choose the right iteration strategy for transforming, filtering, or accumulating data efficiently.`,relatedConceptIds:[`arrays`],prerequisites:[`js-functions`]},{id:`js-objects`,label:`Objects & Prototypes`,path:`javascript`,category:`Data Structures`,description:`Create and manipulate plain objects using literals, destructuring, and spread syntax, and understand how prototypal inheritance chains behavior across objects. Use ES6 classes as syntactic sugar over the prototype system.`,relatedConceptIds:[`objects`],prerequisites:[`js-functions`]},{id:`js-async`,label:`Async & Promises`,path:`javascript`,category:`Asynchronous`,description:`Write non-blocking code using Promises, async/await, and the event loop model to handle I/O operations cleanly. Chain asynchronous operations, handle rejection, and coordinate concurrent tasks with Promise.all and Promise.allSettled.`,relatedConceptIds:[`promises`,`async`],prerequisites:[`js-functions`]},{id:`js-modules`,label:`ES Modules`,path:`javascript`,category:`Tooling`,description:`Organize code into reusable modules using ES import and export syntax, and understand how module resolution works in Node.js and browser environments. Structure a multi-file project for maintainability and tree-shaking.`,relatedConceptIds:[`modules`],prerequisites:[`js-functions`]},{id:`js-error`,label:`Error Handling`,path:`javascript`,category:`Reliability`,description:`Catch and recover from synchronous errors with try/catch/finally and handle rejected promises gracefully in async code. Create custom error classes and design resilient error propagation strategies for production applications.`,relatedConceptIds:[`errorhandling`],prerequisites:[`js-async`]},{id:`pw-selectors`,label:`Locators & Selectors`,path:`playwright`,category:`Core`,description:`Identify page elements reliably using Playwright locators based on role, text, label, placeholder, and CSS or XPath fallbacks. Write resilient selectors that remain stable across UI changes and avoid brittle attribute-based queries.`,relatedConceptIds:[`locators`],prerequisites:[]},{id:`pw-navigation`,label:`Navigation & Pages`,path:`playwright`,category:`Core`,description:`Navigate between URLs, handle multiple browser contexts and pages, and wait for network activity or DOM readiness before interacting. Manage browser lifecycle including launch, context creation, and teardown within tests.`,relatedConceptIds:[`navigation`],prerequisites:[`pw-selectors`]},{id:`pw-assertions`,label:`Assertions`,path:`playwright`,category:`Core`,description:`Validate application state using Playwright's built-in expect API with auto-retrying assertions for visibility, text content, attribute values, and network responses. Write meaningful assertions that accurately reflect user-facing behavior.`,relatedConceptIds:[`assertions`],prerequisites:[`pw-selectors`]},{id:`pw-actions`,label:`User Actions`,path:`playwright`,category:`Interaction`,description:`Simulate realistic user interactions including clicks, keyboard input, drag-and-drop, file uploads, and hover events. Handle dynamic UI elements such as dropdowns, dialogs, and iframes with appropriate waiting strategies.`,relatedConceptIds:[`actions`],prerequisites:[`pw-selectors`]},{id:`pw-api`,label:`API Testing`,path:`playwright`,category:`Advanced`,description:`Send HTTP requests and validate REST API responses directly within Playwright using the APIRequestContext. Combine UI and API calls in the same test to seed data, bypass UI setup steps, and verify backend state.`,relatedConceptIds:[`api`],prerequisites:[`pw-navigation`]},{id:`pw-pom`,label:`Page Object Model`,path:`playwright`,category:`Architecture`,description:`Encapsulate page-specific selectors and interactions into dedicated Page Object classes to keep tests readable and maintainable. Apply the POM pattern to eliminate duplication and centralize changes when the UI evolves.`,relatedConceptIds:[`pom`],prerequisites:[`pw-actions`,`pw-assertions`]},{id:`pw-fixtures`,label:`Fixtures & Hooks`,path:`playwright`,category:`Advanced`,description:`Create reusable test fixtures that set up and tear down shared state such as authenticated sessions, database seeds, or custom browser contexts. Compose fixtures to build a clean, modular test infrastructure with minimal boilerplate.`,relatedConceptIds:[`fixtures`],prerequisites:[`pw-pom`]},{id:`pw-visual`,label:`Visual Testing`,path:`playwright`,category:`Advanced`,description:`Capture full-page and element screenshots and compare them against approved baselines to detect unintended visual regressions. Configure screenshot thresholds, manage baseline images in version control, and integrate visual checks into CI pipelines.`,relatedConceptIds:[`visual`],prerequisites:[`pw-assertions`]},{id:`tc-modules`,label:`Tosca Modules`,path:`tosca`,category:`Core`,description:`Scan and configure application UI controls into reusable Tosca Modules that abstract the technical details of element identification. Maintain modules so that a single control change propagates automatically to every test case that references it.`,relatedConceptIds:[`modules`],prerequisites:[]},{id:`tc-testcases`,label:`Test Case Design`,path:`tosca`,category:`Core`,description:`Build structured test cases in Tosca Commander by combining module actions into logical test steps and test case blocks. Apply reusable Test Case Design (TCD) principles to maximize coverage while minimizing the number of distinct test cases.`,relatedConceptIds:[`testcases`],prerequisites:[`tc-modules`]},{id:`tc-testdata`,label:`Test Data Management`,path:`tosca`,category:`Data`,description:`Parameterize test cases with dynamic test data using Tosca's TCD buffer and external data sources such as Excel sheets and databases. Design data-driven test suites that cover multiple scenarios without duplicating test logic.`,relatedConceptIds:[`testdata`],prerequisites:[`tc-testcases`]},{id:`tc-traceability`,label:`Requirements Traceability`,path:`tosca`,category:`Governance`,description:`Link test cases to business requirements within Tosca to provide end-to-end coverage visibility and compliance reporting. Use traceability matrices to identify gaps, assess the impact of requirement changes, and demonstrate audit readiness.`,relatedConceptIds:[`requirements`],prerequisites:[`tc-testcases`]},{id:`tc-regression`,label:`Regression Testing`,path:`tosca`,category:`Strategy`,description:`Organize and execute regression test suites in Tosca to verify that new changes have not broken existing functionality. Prioritize and schedule regression runs using execution lists and integrate them into CI/CD pipelines for continuous quality assurance.`,relatedConceptIds:[`regression`],prerequisites:[`tc-testcases`,`tc-testdata`]},{id:`tc-api`,label:`API Test Design`,path:`tosca`,category:`Advanced`,description:`Design and execute API test cases in Tosca using the API Testing module to validate REST and SOAP service contracts. Combine API and UI test steps within the same test case to support end-to-end integration scenarios.`,relatedConceptIds:[`api`],prerequisites:[`tc-testcases`]},{id:`ts-basics`,label:`Type Fundamentals`,path:`typescript`,category:`Fundamentals`,description:`Annotate variables, parameters, and return values with TypeScript's basic types, and understand how the compiler uses them to catch mistakes before code ever runs.`,relatedConceptIds:[`typebasics`],prerequisites:[]},{id:`ts-interfaces`,label:`Interfaces & Aliases`,path:`typescript`,category:`Fundamentals`,description:`Shape object structures with interfaces and type aliases, extend and compose them, and choose the right tool for describing the shape of your data.`,relatedConceptIds:[`interfaces`],prerequisites:[`ts-basics`]},{id:`ts-functions`,label:`Function & Collection Types`,path:`typescript`,category:`Fundamentals`,description:`Type function parameters, return values, and overloads, and model ordered collections precisely with arrays, tuples, and enums.`,relatedConceptIds:[`functiontypes`,`arraystuples`],prerequisites:[`ts-basics`]},{id:`ts-narrowing`,label:`Union Types & Narrowing`,path:`typescript`,category:`Type System`,description:`Combine types with unions and intersections, then safely narrow them down using type guards, discriminated unions, and control-flow analysis.`,relatedConceptIds:[`uniontypes`,`narrowing`],prerequisites:[`ts-interfaces`]},{id:`ts-oop`,label:`Classes & Generics`,path:`typescript`,category:`Type System`,description:`Build typed object-oriented code with classes and access modifiers, and write reusable, type-safe functions and structures using generics.`,relatedConceptIds:[`classes`,`generics`],prerequisites:[`ts-functions`]},{id:`ts-advanced`,label:`Advanced Type Techniques`,path:`typescript`,category:`Advanced`,description:`Transform and derive types with mapped, conditional, and utility types, and understand exactly how and when TypeScript infers a type versus requiring an assertion.`,relatedConceptIds:[`advancedtypes`,`inference`],prerequisites:[`ts-narrowing`,`ts-oop`]},{id:`ts-tooling`,label:`Modules, Decorators & Tooling`,path:`typescript`,category:`Tooling`,description:`Organize a codebase into modules, use decorators to add cross-cutting behavior, write type-safe async and error-handling code, and configure the compiler itself via tsconfig.json.`,relatedConceptIds:[`modules`,`decorators`,`asynctypes`,`errorhandling`,`tsconfig`],prerequisites:[`ts-advanced`]}],we=e({default:()=>De});function W(e){return E.find(t=>t.id===e)?.label??e}function Te(){let e=[];for(let t of a)e.push({type:`concept`,id:t.id,pathId:`javascript`,icon:t.icon,title:t.title,subtitle:`JavaScript`});for(let t of o)e.push({type:`concept`,id:t.id,pathId:`playwright`,icon:t.icon,title:t.title,subtitle:`Playwright`});for(let t of s)e.push({type:`concept`,id:t.id,pathId:`tosca`,icon:t.icon,title:t.title,subtitle:`Tosca`});for(let t of c)e.push({type:`concept`,id:t.id,pathId:`typescript`,icon:t.icon,title:t.title,subtitle:`TypeScript`});for(let t of l)e.push({type:`mission`,id:t.id,pathId:t.path,icon:t.icon,title:t.title,subtitle:`Mission · ${W(t.path)} · ${t.difficulty}`});for(let t of U)e.push({type:`skill`,id:t.id,pathId:t.path,icon:`⚙️`,title:t.label,subtitle:`Skill · ${W(t.path)} · ${t.category}`});return e}var Ee={concept:`Concept`,mission:`Mission`,skill:`Skill`},G={concept:`var(--bl)`,mission:`var(--pu)`,skill:`var(--gn)`};function De({isOpen:e,onClose:t,onNavigate:n}){let[r,a]=(0,i.useState)(``),[o,s]=(0,i.useState)(0),c=(0,i.useRef)(null),l=(0,i.useRef)(null),u=(0,i.useMemo)(()=>Te(),[]),d=(0,i.useMemo)(()=>{let e=r.trim().toLowerCase();return e?u.filter(t=>t.title.toLowerCase().includes(e)||t.subtitle.toLowerCase().includes(e)).slice(0,12):u.slice(0,8)},[r,u]);(0,i.useEffect)(()=>{e&&(a(``),s(0),setTimeout(()=>c.current?.focus(),50))},[e]),(0,i.useEffect)(()=>{s(0)},[d]),(0,i.useEffect)(()=>{(l.current?.querySelector(`[data-idx="${o}"]`))?.scrollIntoView({block:`nearest`})},[o]);function f(e){if(e.key===`Escape`){t();return}if(e.key===`ArrowDown`&&(e.preventDefault(),s(e=>Math.min(e+1,d.length-1))),e.key===`ArrowUp`&&(e.preventDefault(),s(e=>Math.max(e-1,0))),e.key===`Enter`){let e=d[o];e&&n(e.type,e.id,e.pathId)}}return e?(0,k.jsx)(`div`,{className:`search-overlay`,onClick:t,role:`dialog`,"aria-modal":`true`,"aria-label":`Search`,children:(0,k.jsxs)(`div`,{className:`search-modal`,onClick:e=>e.stopPropagation(),children:[(0,k.jsxs)(`div`,{className:`search-input-wrap`,children:[(0,k.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,k.jsx)(`input`,{ref:c,className:`search-input`,type:`text`,placeholder:`Search concepts, missions, skills…`,value:r,onChange:e=>a(e.target.value),onKeyDown:f,autoComplete:`off`,spellCheck:!1}),(0,k.jsx)(`kbd`,{className:`search-esc-hint`,onClick:t,children:`Esc`})]}),d.length>0&&(0,k.jsx)(`ul`,{className:`search-results`,ref:l,role:`listbox`,children:d.map((e,t)=>(0,k.jsxs)(`li`,{"data-idx":t,className:`search-result-item${t===o?` focused`:``}`,role:`option`,"aria-selected":t===o,onClick:()=>n(e.type,e.id,e.pathId),onMouseEnter:()=>s(t),children:[(0,k.jsx)(`span`,{className:`search-result-icon`,children:e.icon}),(0,k.jsxs)(`div`,{className:`search-result-text`,children:[(0,k.jsx)(`span`,{className:`search-result-title`,children:e.title}),(0,k.jsx)(`span`,{className:`search-result-sub`,children:e.subtitle})]}),(0,k.jsx)(`span`,{className:`search-result-type`,style:{color:G[e.type],borderColor:G[e.type]},children:Ee[e.type]})]},`${e.type}-${e.id}`))}),d.length===0&&r.trim()&&(0,k.jsxs)(`div`,{className:`search-empty`,children:[`No results for “`,r,`”`]}),(0,k.jsxs)(`div`,{className:`search-footer`,children:[(0,k.jsx)(`span`,{children:`↑↓ navigate`}),(0,k.jsx)(`span`,{children:`↵ select`}),(0,k.jsx)(`span`,{children:`Esc close`})]})]})}):null}var Oe=2600,ke=110,K=.02,q=.006,J=.86,Y=16;function Ae({nodes:e,edges:t,selectedId:n,onSelect:r,height:a=480}){let o=(0,i.useRef)(null),s=(0,i.useRef)(null),c=(0,i.useRef)(new Map),l=(0,i.useRef)(null),u=(0,i.useRef)(null),[d,f]=(0,i.useState)({w:800,h:a});(0,i.useEffect)(()=>{let t=c.current,n=new Map;e.forEach((r,i)=>{let a=t.get(r.id),o=i/e.length*Math.PI*2;n.set(r.id,a?{...a,...r}:{...r,x:d.w/2+Math.cos(o)*120,y:d.h/2+Math.sin(o)*120,vx:0,vy:0,fx:null,fy:null})}),c.current=n},[e,t]),(0,i.useEffect)(()=>{let e=s.current;if(!e)return;let t=new ResizeObserver(e=>{let t=e[0]?.contentRect.width??800;f(e=>({...e,w:t}))});return t.observe(e),()=>t.disconnect()},[]),(0,i.useEffect)(()=>{let e=o.current;if(!e)return;let r=e.getContext(`2d`);if(!r)return;let i=r,a=Math.min(window.devicePixelRatio||1,2);e.width=d.w*a,e.height=d.h*a,e.style.width=`${d.w}px`,e.style.height=`${d.h}px`,i.scale(a,a);let s=getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim().startsWith(`#0`)||getComputedStyle(document.documentElement).getPropertyValue(`--bg`).trim().startsWith(`#07`)?`rgba(148,163,184,0.35)`:`rgba(71,85,105,0.35)`,l=getComputedStyle(document.documentElement).getPropertyValue(`--tx`).trim()||`#eee`;function f(){let e=c.current,r=[...e.values()];for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++){let n=r[e],i=r[t],a=n.x-i.x,o=n.y-i.y,s=a*a+o*o;s<1&&(a=Math.random()-.5,o=Math.random()-.5,s=1);let c=Math.sqrt(s),l=Oe/s,u=a/c*l,d=o/c*l;n.vx+=u,n.vy+=d,i.vx-=u,i.vy-=d}for(let n of t){let t=e.get(n.from),r=e.get(n.to);if(!t||!r)continue;let i=r.x-t.x,a=r.y-t.y,o=Math.max(1,Math.sqrt(i*i+a*a)),s=o-ke,c=i/o*s*K,l=a/o*s*K;t.vx+=c,t.vy+=l,r.vx-=c,r.vy-=l}for(let e of r)e.vx+=(d.w/2-e.x)*q,e.vy+=(d.h/2-e.y)*q,e.vx*=J,e.vy*=J,e.fx!==null&&e.fy!==null?(e.x=e.fx,e.y=e.fy,e.vx=0,e.vy=0):(e.x+=e.vx,e.y+=e.vy),e.x=Math.max(Y,Math.min(d.w-Y,e.x)),e.y=Math.max(Y,Math.min(d.h-Y,e.y));i.clearRect(0,0,d.w,d.h),i.lineWidth=1.5,i.strokeStyle=s;for(let n of t){let t=e.get(n.from),r=e.get(n.to);if(!t||!r)continue;i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(r.x,r.y),i.stroke();let a=Math.atan2(r.y-t.y,r.x-t.x),o=r.x-Math.cos(a)*22,c=r.y-Math.sin(a)*22;i.beginPath(),i.moveTo(o,c),i.lineTo(o-Math.cos(a-.4)*7,c-Math.sin(a-.4)*7),i.lineTo(o-Math.cos(a+.4)*7,c-Math.sin(a+.4)*7),i.closePath(),i.fillStyle=s,i.fill()}for(let e of r){let t=e.id===n;i.beginPath(),i.arc(e.x,e.y,t?19:Y,0,Math.PI*2),i.fillStyle=e.color,i.fill(),t&&(i.lineWidth=2.5,i.strokeStyle=l,i.stroke()),i.fillStyle=l,i.font=`11px system-ui, sans-serif`,i.textAlign=`center`,i.fillText(e.label,e.x,e.y+Y+14)}u.current=requestAnimationFrame(f)}return u.current=requestAnimationFrame(f),()=>{u.current&&cancelAnimationFrame(u.current)}},[d,t,n]);let p=(0,i.useCallback)((e,t)=>{for(let n of c.current.values())if((n.x-e)**2+(n.y-t)**2<=20**2)return n;return null},[]),m=e=>{let t=o.current.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}};return(0,k.jsx)(`div`,{ref:s,style:{width:`100%`},children:(0,k.jsx)(`canvas`,{ref:o,style:{display:`block`,touchAction:`none`,cursor:l.current?`grabbing`:`grab`},onPointerDown:e=>{let{x:t,y:n}=m(e),r=p(t,n);r&&(l.current=r.id,r.fx=r.x,r.fy=r.y,e.target.setPointerCapture(e.pointerId))},onPointerMove:e=>{if(!l.current)return;let t=c.current.get(l.current);if(!t)return;let{x:n,y:r}=m(e);t.fx=n,t.fy=r},onPointerUp:e=>{let t=l.current;if(t){let n=c.current.get(t),{x:i,y:a}=m(e);n&&Math.hypot((n.fx??i)-i,(n.fy??a)-a)<4&&r(t),n&&(n.fx=null,n.fy=null)}l.current=null}})})}var je=e({default:()=>Le}),Me={javascript:`JavaScript`,playwright:`Playwright`,tosca:`Tosca`,typescript:`TypeScript`},Ne={"not-started":`Not Started`,"in-progress":`In Progress`,practicing:`Practicing`,mastered:`Mastered`},X={"not-started":`var(--dm)`,"in-progress":`var(--yw)`,practicing:`var(--bl)`,mastered:`var(--gn)`},Pe=[`all`,`javascript`,`playwright`,`tosca`,`typescript`],Fe=[`javascript`,`playwright`,`tosca`,`typescript`],Z={"not-started":`Begin by studying the related concepts in the Learn section.`,"in-progress":`Keep practicing until each concept is marked as learned.`,practicing:`Aim for a quiz score above 80% across related concepts to master this skill.`,mastered:`Skill mastered — explore prerequisites or advance to the next path.`};function Q(e,t){let n=t[e.path],r=e.relatedConceptIds;if(!r.length||!n)return`not-started`;let i=r.map(e=>n[e]).filter(Boolean);if(!i.length)return`not-started`;let a=r.every(e=>n[e]?.learned),o=r.some(e=>n[e]?.learned),s=i.reduce((e,t)=>e+t.total,0),c=i.reduce((e,t)=>e+t.score,0),l=s>0?c/s*100:0;return a&&l>=80?`mastered`:o?`practicing`:`in-progress`}function Ie(e,t){let n=t[e.path],r=e.relatedConceptIds,i=Math.max(r.length,1);return!r.length||!n?{learned:0,total:i}:{learned:r.filter(e=>n[e]?.learned).length,total:i}}function Le({allProgress:e,onNavigateToLearn:t}){let[n,r]=(0,i.useState)(`all`),[a,o]=(0,i.useState)(null),[s,c]=(0,i.useState)(`cards`),l=n===`all`?Fe:[n],u=U.map(t=>Q(t,e)),d=u.filter(e=>e===`mastered`).length,f=u.filter(e=>e===`in-progress`||e===`practicing`).length,p=(0,i.useMemo)(()=>U.filter(e=>n===`all`||e.path===n),[n]),m=(0,i.useMemo)(()=>p.map(t=>({id:t.id,label:t.label,color:X[Q(t,e)]})),[p,e]),h=(0,i.useMemo)(()=>{let e=new Set(p.map(e=>e.id)),t=[];for(let n of p)for(let r of n.prerequisites)e.has(r)&&t.push({from:r,to:n.id});return t},[p]),g=a?U.find(e=>e.id===a)??null:null,_=t=>{let n=U.filter(e=>e.path===t);return n.length?Math.round(n.filter(t=>Q(t,e)===`mastered`).length/n.length*100):0};return(0,k.jsxs)(`div`,{className:`skill-map`,children:[(0,k.jsx)(`style`,{children:`
        .skill-map{display:flex;flex-direction:column;gap:24px;padding:4px}
        .skill-summary{display:flex;gap:12px;flex-wrap:wrap}
        .skill-stat{background:var(--s2);border:1px solid var(--bd);border-radius:var(--r12);padding:12px 20px;display:flex;flex-direction:column;align-items:center;min-width:100px}
        .skill-stat-val{font-size:28px;font-weight:700;line-height:1}
        .skill-stat-lbl{font-size:11px;color:var(--mt);margin-top:4px;text-transform:uppercase;letter-spacing:.5px}
        .skill-filters{display:flex;gap:8px;flex-wrap:wrap}
        .skill-filter-btn{padding:6px 16px;border-radius:var(--r-full);border:1px solid var(--bd);background:var(--s2);color:var(--mt);font-size:13px;cursor:pointer;transition:all .15s;font-family:inherit}
        .skill-filter-btn:hover{border-color:var(--ac);color:var(--tx)}
        .skill-filter-btn.active{background:var(--ac);border-color:var(--ac);color:#000;font-weight:600}
        .skill-path-group{display:flex;flex-direction:column;gap:12px}
        .skill-path-header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-bottom:8px;border-bottom:1px solid var(--bd)}
        .skill-path-title{display:flex;align-items:baseline;gap:8px}
        .skill-path-name{font-size:17px;font-weight:700;color:var(--tx)}
        .skill-path-count{font-size:12px;color:var(--mt)}
        .skill-path-completion{display:flex;align-items:center;gap:10px}
        .skill-path-pct{font-size:13px;color:var(--mt);white-space:nowrap}
        .skill-pct-bar{width:120px;height:6px;background:var(--s3);border-radius:3px;overflow:hidden}
        .skill-pct-fill{height:100%;background:var(--gn);border-radius:3px;transition:width .4s}
        .skill-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        @media(max-width:900px){.skill-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:580px){.skill-grid{grid-template-columns:1fr}}
        .skill-card{background:var(--s2);border:1px solid var(--bd);border-radius:var(--r12);padding:14px;cursor:pointer;transition:border-color .2s,box-shadow .2s;display:flex;flex-direction:column;gap:10px}
        .skill-card:hover{box-shadow:var(--shadow-sm);border-color:var(--bd2)}
        .skill-card.expanded{box-shadow:var(--shadow-md)}
        .skill-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
        .skill-card-labels{display:flex;flex-direction:column;gap:4px}
        .skill-label{font-size:14px;font-weight:600;color:var(--tx);line-height:1.3}
        .skill-category-badge{font-size:11px;color:var(--mt);background:var(--s3);padding:2px 7px;border-radius:var(--r4);width:fit-content}
        .skill-status-chip{font-size:11px;font-weight:600;padding:3px 8px;border-radius:var(--r-full);border:1px solid;white-space:nowrap;flex-shrink:0;background:transparent}
        .skill-mini-progress{display:flex;align-items:center;gap:8px}
        .skill-mini-bar{flex:1;height:4px;background:var(--s3);border-radius:2px;overflow:hidden}
        .skill-mini-fill{height:100%;border-radius:2px;transition:width .3s}
        .skill-mini-label{font-size:11px;color:var(--mt);white-space:nowrap}
        .skill-detail{display:flex;flex-direction:column;gap:10px;padding-top:10px;border-top:1px solid var(--bd)}
        .skill-description{font-size:13px;color:var(--mt);line-height:1.6}
        .skill-detail-row{display:flex;flex-direction:column;gap:5px}
        .skill-detail-lbl{font-size:11px;font-weight:600;color:var(--mt);text-transform:uppercase;letter-spacing:.4px}
        .skill-tags{display:flex;flex-wrap:wrap;gap:5px}
        .skill-tag{font-size:11px;padding:3px 8px;border-radius:var(--r4);background:var(--s3);border:1px solid var(--bd);color:var(--tx)}
        .skill-tag-concept{cursor:pointer;border-color:var(--bl);color:var(--bl);font-family:inherit}
        .skill-tag-concept:hover{background:rgba(59,130,246,.12)}
        .skill-recommended{display:flex;flex-direction:column;gap:4px}
        .skill-rec-text{font-size:12px;color:var(--ac);font-style:italic}
        .skill-view-toggle{display:flex;gap:4px;margin-left:auto;background:var(--s2);border:1px solid var(--bd);border-radius:var(--r-full);padding:3px}
        .skill-view-btn{padding:5px 14px;border-radius:var(--r-full);border:none;background:transparent;color:var(--mt);font-size:12px;cursor:pointer;transition:all .15s;font-family:inherit;min-height:32px}
        .skill-view-btn.active{background:var(--ac);color:#000;font-weight:600}
        .skill-graph-wrap{display:flex;flex-direction:column;gap:12px}
        .skill-graph-hint{font-size:12px;color:var(--dm)}
        .skill-graph-canvas-box{background:var(--s1);border:1px solid var(--bd);border-radius:var(--r16);padding:8px;overflow:hidden}
        .skill-graph-detail{background:var(--s2);border:1px solid var(--bd);border-radius:var(--r12);padding:16px;border-top-width:1px}
      `}),(0,k.jsxs)(`div`,{className:`skill-summary`,children:[(0,k.jsxs)(`div`,{className:`skill-stat`,children:[(0,k.jsx)(`span`,{className:`skill-stat-val`,children:U.length}),(0,k.jsx)(`span`,{className:`skill-stat-lbl`,children:`Total Skills`})]}),(0,k.jsxs)(`div`,{className:`skill-stat`,children:[(0,k.jsx)(`span`,{className:`skill-stat-val`,style:{color:`var(--gn)`},children:d}),(0,k.jsx)(`span`,{className:`skill-stat-lbl`,children:`Mastered`})]}),(0,k.jsxs)(`div`,{className:`skill-stat`,children:[(0,k.jsx)(`span`,{className:`skill-stat-val`,style:{color:`var(--bl)`},children:f}),(0,k.jsx)(`span`,{className:`skill-stat-lbl`,children:`In Progress`})]}),(0,k.jsxs)(`div`,{className:`skill-stat`,children:[(0,k.jsx)(`span`,{className:`skill-stat-val`,style:{color:`var(--dm)`},children:U.length-d-f}),(0,k.jsx)(`span`,{className:`skill-stat-lbl`,children:`Not Started`})]})]}),(0,k.jsxs)(`div`,{className:`skill-filters`,children:[Pe.map(e=>(0,k.jsx)(`button`,{className:`skill-filter-btn${n===e?` active`:``}`,onClick:()=>r(e),children:e===`all`?`All Paths`:Me[e]},e)),(0,k.jsxs)(`div`,{className:`skill-view-toggle`,children:[(0,k.jsx)(`button`,{className:`skill-view-btn${s===`cards`?` active`:``}`,onClick:()=>c(`cards`),children:`▦ Cards`}),(0,k.jsx)(`button`,{className:`skill-view-btn${s===`graph`?` active`:``}`,onClick:()=>c(`graph`),children:`⚙ Graph`})]})]}),s===`graph`&&(0,k.jsxs)(`div`,{className:`skill-graph-wrap`,children:[(0,k.jsx)(`p`,{className:`skill-graph-hint`,children:`Drag nodes to rearrange · click a node to see its details · arrows point from prerequisite → skill`}),(0,k.jsx)(`div`,{className:`skill-graph-canvas-box`,children:(0,k.jsx)(Ae,{nodes:m,edges:h,selectedId:a,onSelect:o})}),g&&(0,k.jsxs)(`div`,{className:`skill-detail skill-graph-detail`,children:[(0,k.jsxs)(`div`,{className:`skill-card-top`,children:[(0,k.jsxs)(`div`,{className:`skill-card-labels`,children:[(0,k.jsx)(`span`,{className:`skill-label`,children:g.label}),(0,k.jsx)(`span`,{className:`skill-category-badge`,children:g.category})]}),(0,k.jsx)(`span`,{className:`skill-status-chip`,style:{color:X[Q(g,e)],borderColor:X[Q(g,e)]},children:Ne[Q(g,e)]})]}),(0,k.jsx)(`p`,{className:`skill-description`,children:g.description}),g.relatedConceptIds.length>0&&(0,k.jsxs)(`div`,{className:`skill-detail-row`,children:[(0,k.jsx)(`span`,{className:`skill-detail-lbl`,children:`Related Concepts`}),(0,k.jsx)(`div`,{className:`skill-tags`,children:g.relatedConceptIds.map(e=>(0,k.jsx)(`button`,{className:`skill-tag skill-tag-concept`,onClick:()=>t(e,g.path),children:e},e))})]}),(0,k.jsxs)(`div`,{className:`skill-recommended`,children:[(0,k.jsx)(`span`,{className:`skill-detail-lbl`,children:`Recommended Action`}),(0,k.jsx)(`span`,{className:`skill-rec-text`,children:Z[Q(g,e)]})]})]})]}),s===`cards`&&l.map(n=>{let r=U.filter(e=>e.path===n),i=_(n);return(0,k.jsxs)(`div`,{className:`skill-path-group`,children:[(0,k.jsxs)(`div`,{className:`skill-path-header`,children:[(0,k.jsxs)(`div`,{className:`skill-path-title`,children:[(0,k.jsx)(`span`,{className:`skill-path-name`,children:Me[n]}),(0,k.jsxs)(`span`,{className:`skill-path-count`,children:[r.length,` skills`]})]}),(0,k.jsxs)(`div`,{className:`skill-path-completion`,children:[(0,k.jsxs)(`span`,{className:`skill-path-pct`,children:[i,`% complete`]}),(0,k.jsx)(`div`,{className:`skill-pct-bar`,children:(0,k.jsx)(`div`,{className:`skill-pct-fill`,style:{width:`${i}%`}})})]})]}),(0,k.jsx)(`div`,{className:`skill-grid`,children:r.map(n=>{let r=Q(n,e),i=Ie(n,e),s=a===n.id,c=X[r];return(0,k.jsxs)(`div`,{className:`skill-card${s?` expanded`:``}`,onClick:()=>o(e=>e===n.id?null:n.id),style:{borderColor:s?c:void 0},children:[(0,k.jsxs)(`div`,{className:`skill-card-top`,children:[(0,k.jsxs)(`div`,{className:`skill-card-labels`,children:[(0,k.jsx)(`span`,{className:`skill-label`,children:n.label}),(0,k.jsx)(`span`,{className:`skill-category-badge`,children:n.category})]}),(0,k.jsx)(`span`,{className:`skill-status-chip`,style:{color:c,borderColor:c},children:Ne[r]})]}),(0,k.jsxs)(`div`,{className:`skill-mini-progress`,children:[(0,k.jsx)(`div`,{className:`skill-mini-bar`,children:(0,k.jsx)(`div`,{className:`skill-mini-fill`,style:{width:`${i.learned/i.total*100}%`,background:c}})}),(0,k.jsxs)(`span`,{className:`skill-mini-label`,children:[i.learned,`/`,i.total,` learned`]})]}),s&&(0,k.jsxs)(`div`,{className:`skill-detail`,onClick:e=>e.stopPropagation(),children:[(0,k.jsx)(`p`,{className:`skill-description`,children:n.description}),n.prerequisites.length>0&&(0,k.jsxs)(`div`,{className:`skill-detail-row`,children:[(0,k.jsx)(`span`,{className:`skill-detail-lbl`,children:`Prerequisites`}),(0,k.jsx)(`div`,{className:`skill-tags`,children:n.prerequisites.map(e=>(0,k.jsx)(`span`,{className:`skill-tag`,children:U.find(t=>t.id===e)?.label??e},e))})]}),n.relatedConceptIds.length>0&&(0,k.jsxs)(`div`,{className:`skill-detail-row`,children:[(0,k.jsx)(`span`,{className:`skill-detail-lbl`,children:`Related Concepts`}),(0,k.jsx)(`div`,{className:`skill-tags`,children:n.relatedConceptIds.map(e=>(0,k.jsx)(`button`,{className:`skill-tag skill-tag-concept`,onClick:()=>t(e,n.path),children:e},e))})]}),(0,k.jsxs)(`div`,{className:`skill-recommended`,children:[(0,k.jsx)(`span`,{className:`skill-detail-lbl`,children:`Recommended Action`}),(0,k.jsx)(`span`,{className:`skill-rec-text`,children:Z[r]})]})]})]},n.id)})})]},n)})]})}var Re=e({default:()=>ze}),$={1:{label:`Foundation`,color:`var(--gn)`,emoji:`🟢`},2:{label:`Application`,color:`var(--ac)`,emoji:`🟡`},3:{label:`Real-World`,color:`#60a5fa`,emoji:`🔵`},4:{label:`Advanced`,color:`var(--yw)`,emoji:`🟠`},5:{label:`Expert`,color:`var(--rd)`,emoji:`🔴`}};function ze({concept:e,tasks:t,onBack:n,storageKey:r}){let[a,o]=(0,i.useState)(1),[s,c]=(0,i.useState)(null),[l,u]=(0,i.useState)(()=>{try{let e=localStorage.getItem(r);return e?new Set(JSON.parse(e)):new Set}catch{return new Set}}),d=t.filter(e=>e.level===a),f=l.size,p=t.length?Math.round(f/t.length*100):0,m=e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),localStorage.setItem(r,JSON.stringify([...n])),n})};return(0,k.jsxs)(`div`,{className:`tasks-view`,children:[(0,k.jsxs)(`div`,{className:`tasks-header`,children:[(0,k.jsx)(`button`,{className:`btn btn-ghost tasks-back-btn`,onClick:n,children:`← Back`}),(0,k.jsxs)(`div`,{className:`tasks-header-center`,children:[(0,k.jsx)(`span`,{className:`tasks-header-icon`,children:e.icon}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{className:`tasks-header-title`,children:e.title}),(0,k.jsx)(`div`,{className:`tasks-header-sub`,children:`Hands-on Coding Tasks`})]})]}),(0,k.jsxs)(`div`,{className:`tasks-done-chip`,children:[(0,k.jsx)(`span`,{className:`tasks-done-num`,children:f}),(0,k.jsx)(`span`,{className:`tasks-done-sep`,children:`/`}),(0,k.jsx)(`span`,{className:`tasks-done-total`,children:t.length}),(0,k.jsx)(`span`,{className:`tasks-done-label`,children:`Done`})]})]}),(0,k.jsxs)(`div`,{className:`tasks-overall-bar`,children:[(0,k.jsx)(`div`,{className:`tasks-overall-fill`,style:{width:`${p}%`}}),(0,k.jsxs)(`span`,{className:`tasks-overall-pct`,children:[p,`%`]})]}),(0,k.jsx)(`div`,{className:`tasks-level-tabs`,children:[1,2,3,4,5].map(e=>{let n=$[e],r=t.filter(t=>t.level===e),i=r.filter(e=>l.has(e.id)).length,s=a===e;return(0,k.jsxs)(`button`,{className:`tasks-level-tab${s?` active`:``}`,style:s?{borderColor:n.color,color:n.color}:void 0,onClick:()=>{o(e),c(null)},children:[(0,k.jsx)(`span`,{className:`tasks-level-emoji`,children:n.emoji}),(0,k.jsx)(`span`,{className:`tasks-level-name`,children:n.label}),(0,k.jsxs)(`span`,{className:`tasks-level-badge`,style:{background:i===r.length&&r.length>0?`rgba(74,222,128,0.15)`:`var(--s3)`,color:i===r.length&&r.length>0?`var(--gn)`:`var(--dm)`},children:[i,`/`,r.length]})]},e)})}),(0,k.jsxs)(`div`,{className:`tasks-level-header`,children:[(0,k.jsxs)(`span`,{style:{color:$[a].color},children:[$[a].emoji,` Level `,a,` — `,$[a].label]}),(0,k.jsxs)(`span`,{className:`tasks-level-hint`,children:[a===1&&`Syntax, declarations, and simple operations`,a===2&&`Scope, hoisting, and combining structures`,a===3&&`Real-world patterns engineers use daily`,a===4&&`Edge cases, closures, and tricky behavior`,a===5&&`Architecture, debugging, and refactoring`]})]}),(0,k.jsx)(`div`,{className:`tasks-list`,children:d.map(e=>{let t=l.has(e.id),n=s===e.id;return(0,k.jsxs)(`div`,{className:`task-card${t?` done`:``}${n?` open`:``}`,children:[(0,k.jsxs)(`button`,{className:`task-card-header`,onClick:()=>c(n?null:e.id),children:[(0,k.jsx)(`span`,{className:`task-num-badge${t?` done`:``}`,style:t?{background:`var(--gn)`,color:`#000`}:void 0,children:t?`✓`:e.id}),(0,k.jsx)(`span`,{className:`task-card-title`,children:e.title}),t&&(0,k.jsx)(`span`,{className:`task-done-chip`,children:`Complete`}),(0,k.jsx)(`span`,{className:`task-chevron`,children:n?`▲`:`▼`})]}),n&&(0,k.jsxs)(`div`,{className:`task-card-body`,children:[(0,k.jsxs)(`div`,{className:`task-fields`,children:[(0,k.jsxs)(`div`,{className:`task-field`,children:[(0,k.jsx)(`div`,{className:`task-field-label`,children:`📍 Scenario`}),(0,k.jsx)(`div`,{className:`task-field-value`,children:e.scenario})]}),(0,k.jsxs)(`div`,{className:`task-field accent-obj`,children:[(0,k.jsx)(`div`,{className:`task-field-label`,children:`🎯 Objective`}),(0,k.jsx)(`div`,{className:`task-field-value`,children:e.objective})]}),(0,k.jsxs)(`div`,{className:`task-field accent-con`,children:[(0,k.jsx)(`div`,{className:`task-field-label`,children:`⚠️ Constraints / Rules`}),(0,k.jsx)(`div`,{className:`task-field-value`,children:e.constraints})]}),(0,k.jsxs)(`div`,{className:`task-field accent-exp`,children:[(0,k.jsx)(`div`,{className:`task-field-label`,children:`✅ Expected Output / Behavior`}),(0,k.jsx)(`div`,{className:`task-field-value`,children:e.expectedOutput})]}),(0,k.jsxs)(`div`,{className:`task-field accent-chk`,children:[(0,k.jsx)(`div`,{className:`task-field-label`,children:`🔍 Check / Assertion`}),(0,k.jsx)(`div`,{className:`task-field-value`,children:e.check})]})]}),(0,k.jsx)(`div`,{className:`task-card-footer`,children:(0,k.jsx)(`button`,{className:`btn ${t?`btn-secondary`:`btn-primary`} task-complete-btn`,onClick:()=>m(e.id),children:t?`↩ Mark Incomplete`:`✓ Mark as Complete`})})]})]},e.id)})}),d.length===0&&(0,k.jsxs)(`div`,{className:`tasks-empty`,children:[(0,k.jsx)(`div`,{className:`tasks-empty-icon`,children:`🚧`}),(0,k.jsx)(`div`,{className:`tasks-empty-title`,children:`Tasks coming soon`}),(0,k.jsx)(`div`,{className:`tasks-empty-sub`,children:`Hands-on tasks for this level are being added.`})]})]})}export{s as _,he as a,r as b,F as c,A as d,O as f,c as g,l as h,Se as i,P as l,b as m,je as n,fe as o,w as p,we as r,le as s,Re as t,N as u,o as v,a as y};