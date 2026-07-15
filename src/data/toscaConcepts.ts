import type { Concept } from '../types';

export const TOSCA_CONCEPTS: Concept[] = [

// ── 1. TOSCA Overview ─────────────────────────────────────────
{
  id: 'intro',
  title: 'TOSCA Overview & TCM',
  icon: '🔬',
  explain: `<p><strong>Tricentis Tosca</strong> is a model-based, no-code test automation platform that abstracts your application's UI into reusable <em>modules</em>. Instead of writing scripts, testers scan the application once and create a model; test cases are built by assembling those model pieces — so a UI change means fixing one module, not dozens of scripts.</p>
<p><strong>Tosca Commander (TCM)</strong> is the desktop IDE where all test assets live. It organises work into a repository of projects, each split into sections: <em>Modules</em> (your UI model), <em>TestCases</em> (your test logic), <em>Execution</em> (execution lists and results), and <em>Requirements</em> (traceability). Every asset is stored in a central SQL/Oracle database so teams share a single source of truth.</p>
<p>TOSCA's key differentiator is <strong>risk-based test optimisation (TO)</strong>: it analyses requirements coverage and automatically selects the smallest test set that covers all risks — cutting regression time without reducing quality.</p>`,
  syntax: `// TOSCA Commander sections
Modules          → UI/API model layer (TBox-scanned controls)
TestCases        → test logic (steps referencing modules)
TestSuites       → groupings of test cases
ExecutionLists   → ordered run queues
Requirements     → traceability matrix
Reports          → execution results & logs

// Common Tosca CLI (CI integration)
ToscaCI.exe run --workspace "MyWorkspace" --executionList "Regression"
ToscaCI.exe run --configuration "SmokeTest" --resultdir "C:\\results"`,
  examples: [
    {
      label: 'TCM repository structure',
      code: `Repository
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
        └── TC001_Login`,
      out: 'Hierarchical repository showing modules, test cases and execution list',
    },
    {
      label: 'Module technical parameter vs business parameter',
      code: `// Technical Parameter (TBox-defined, maps to control property)
Module: UsernameField
  TechnicalParameter: Value   ← what you type into the field

// Business Parameter (created by tester, maps to technical param)
Module: UsernameField
  BusinessParameter: Username → maps to → Value

// Test Step uses business parameter
Step: Enter credentials
  Username = "alice@test.com"`,
      out: 'Business parameters decouple test data from technical selectors',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Think of TOSCA like a <strong>LEGO factory</strong>. The scanning step moulds your app's UI into individual LEGO bricks (modules). Building a test case is snapping those bricks together into a model. If LEGO changes the shape of one brick, you update that mould once — every model that used it is fixed automatically, without disassembling each one.</p>`,
  flow: [
    'Scan application UI → TBox creates Module tree',
    'Define Business Parameters on Modules',
    'Build Test Cases by dragging Module steps',
    'Parameterise with Test Data (TDM / Excel)',
    'Add to Execution List → run locally or via DEX',
    'Review Results → logs, screenshots, reports',
  ],
},

// ── 2. TBox Scanning & Modules ───────────────────────────────
{
  id: 'scanning',
  title: 'TBox Scanning & Modules',
  icon: '🔍',
  explain: `<p>The <strong>TBox</strong> is TOSCA's recognition engine. When you <em>scan</em> an application, TBox inspects its control tree (HTML DOM, WinForms hierarchy, SAP screen, etc.) and builds a <strong>Module</strong> — a mirror of the UI that records each control's technical properties (selector, control type, hierarchy path).</p>
<p>Each recognised control becomes a <strong>Module Attribute</strong>. Attributes have <em>technical parameters</em> (engine-defined: Value, Checked, SelectedItem…) and can be wrapped with <em>business parameters</em> (tester-defined, human-readable names like "SearchTerm" or "OrderQty").</p>
<p>TOSCA supports dozens of TBox engines: <code>TBox Web</code> for browsers, <code>TBox WinForms</code>, <code>TBox SAP</code>, <code>TBox Mobile</code>, <code>TBox PDF</code>, <code>TBox Java</code>, and more. Each engine knows the controls in that technology and how to interact with them reliably.</p>`,
  syntax: `// Scanning workflow
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
  Count   → count matching controls`,
  examples: [
    {
      label: 'Module structure after scanning a login page',
      code: `Module: LoginPage
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
      ActionMode: Input  ← click action`,
      out: 'Scanned module ready for test step assignment',
    },
    {
      label: 'Classic vs Checkpoint modules',
      code: `Classic Module Attribute (ActionMode = Input):
  → performs an action (type, click, select)

Checkpoint Attribute (ActionMode = Verify):
  → asserts the control's current value
  → test step fails if actual ≠ expected

// Usage in test step
Step: Verify welcome message
  WelcomeLabel [Verify] = "Welcome, Alice"
  ↓ TOSCA checks the DOM text matches "Welcome, Alice"`,
      out: 'Checkpoint attributes turn module steps into assertions',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Scanning is like an <strong>architect drawing a floor plan</strong> of a building. The building is your application; the floor plan is the Module. Once you have the plan, you can assign tasks (test steps) to specific rooms (controls) without re-entering the building each time — any structural change only requires updating the floor plan, not every task that references it.</p>`,
  flow: [
    'Select Modules section in TCM',
    'Right-click → Scan Application → choose TBox engine',
    'Hover controls → click to record each attribute',
    'Set ActionMode per attribute (Input / Verify / Output)',
    'Create Business Parameters for readable naming',
    'Module is ready for reuse across test cases',
  ],
},

// ── 3. Test Cases & Test Steps ───────────────────────────────
{
  id: 'testcases',
  title: 'Test Cases & Test Steps',
  icon: '📋',
  explain: `<p>A <strong>Test Case</strong> in TOSCA is a container for an ordered list of <strong>Test Steps</strong>. Each test step references a Module (or a specific attribute within it) and supplies the values to use during execution. Test cases are pure <em>what</em> and <em>with what data</em> — the <em>how</em> is handled by the module and the TBox engine.</p>
<p>Test steps can also be <strong>nested test cases</strong> (called <em>TestCase Blocks</em> or simply embedded test cases). This lets you build a library of reusable flows — a "Login" test case used as a step inside "Place Order" and "Reset Password" — without duplicating logic.</p>
<p><strong>TestCaseDesign</strong> is TCM's structured view for mapping test case steps to module attributes. Values can be static literals, references to <em>Configuration Parameters</em> <code>{P:param}</code>, or <em>Buffer</em> values <code>{B:buffer}</code> captured from previous steps.</p>`,
  syntax: `// Test Case structure
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
  ...`,
  examples: [
    {
      label: 'TestCase with reuse and data binding',
      code: `TestCase: TC_SearchProduct
  ├── Step 1: Login (embedded TC001_Login)
  ├── Step 2: SearchBar.SearchInput
  │     Value: {B:ProductName}   ← from Buffer
  ├── Step 3: SearchBar.SearchButton
  ├── Step 4: ResultsGrid.FirstResult [Verify]
  │     Value: {B:ProductName}   ← assert same value
  └── Step 5: Logout (embedded TC_Logout)`,
      out: 'Reuse login/logout steps; bind data via Buffers',
    },
    {
      label: 'Test Case Folder hierarchy',
      code: `TestCases/
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
    └── TC_Logout`,
      out: 'Folder hierarchy organises test cases into logical groups',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>A TOSCA test case is like a <strong>recipe card</strong>. The ingredients (data values) are listed on the card, but the cooking instructions (how to interact with the control) live in the module — the "kitchen manual." You can write a hundred recipes that use "whisk eggs" without redefining how whisking works each time.</p>`,
  flow: [
    'Create TestCase folder under TestCases section',
    'Add Test Steps by dragging Module attributes',
    'Supply values: literals, {P:param}, or {B:buffer}',
    'Embed reusable test cases as nested steps',
    'Set Condition / Recovery on steps if needed',
    'Add to ExecutionList to run',
  ],
},

// ── 4. Test Suites & Execution Lists ─────────────────────────
{
  id: 'testsuites',
  title: 'Test Suites & Execution Lists',
  icon: '▶️',
  explain: `<p>An <strong>Execution List</strong> is the ordered queue of test cases that TOSCA executes in one run. It lives under the <em>Execution</em> section of TCM. You drag test cases (or whole folders) into an Execution List and run it — TOSCA executes each entry in sequence, records pass/fail, captures logs and screenshots, and marks the overall list as passed or failed.</p>
<p>A <strong>Test Suite</strong> is a logical grouping of test cases used for <em>organisation and reporting</em> rather than direct execution. Test suites appear in the <em>TestCases</em> section and can be linked to requirements for traceability.</p>
<p>Within an Execution List you can configure <strong>Test Events</strong> (setup/teardown steps that run before or after every test case), set the execution <em>agent</em> (local or DEX), choose the <em>browser/device</em> configuration, and control <em>error handling</em> behaviour (continue on fail, retry count).</p>`,
  syntax: `// Execution List structure
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
  ToscaCI run --executionList "Regression_Sprint12"`,
  examples: [
    {
      label: 'Execution List with Test Events',
      code: `ExecutionList: DailySmoke
  Test Event (Before each): TC_OpenBrowser
  Test Event (After each):  TC_CloseBrowser

  Entry 1: TC001_Login
  Entry 2: TC002_Search
  Entry 3: TC003_Checkout

// Execution Order:
// TC_OpenBrowser → TC001_Login → TC_CloseBrowser
// TC_OpenBrowser → TC002_Search → TC_CloseBrowser
// TC_OpenBrowser → TC003_Checkout → TC_CloseBrowser`,
      out: 'Test Events wrap every test case with setup/teardown logic',
    },
    {
      label: 'Partial execution and re-run failed',
      code: `// Select specific entries to run
Right-click entry → Mark for execution → Run Marked

// Re-run only failed entries
After full run → Filter by Status = Failed
Right-click failed entries → Re-run

// Result states
Passed   ✓  all steps succeeded
Failed   ✗  at least one step failed
Error    !  unexpected exception
Skipped  –  marked to skip or condition not met`,
      out: 'Granular control over what to run and re-run',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>An Execution List is like a <strong>flight boarding manifest</strong>. The manifest lists passengers in boarding order; the airline (TOSCA) boards each one, notes whether they got on successfully, and at the end produces a gate report. If a passenger fails to board, the rest still proceed unless you specifically halt on error.</p>`,
  flow: [
    'Create Execution List under Execution section',
    'Drag test cases / folders into the list',
    'Add Test Events for setup/teardown per test',
    'Configure agent, browser, error handling',
    'Run list locally or schedule via DEX/CI',
    'Review Results — pass/fail per entry with logs',
  ],
},

// ── 5. Test Data Management (TDM) ────────────────────────────
{
  id: 'testdata',
  title: 'Test Data Management (TDM)',
  icon: '📊',
  explain: `<p><strong>Test Data Management (TDM)</strong> in TOSCA separates test data from test logic. Instead of hard-coding values in test steps, you externalise them into Excel sheets, databases, or TOSCA's own TDM service — and bind them to your test cases through <em>data partitioning</em>.</p>
<p>The simplest approach is <strong>Excel TDM</strong>: you create an Excel workbook where each row is a data set (a "partition"). TOSCA maps the columns to test case parameters so the same test case runs once per row with different data — this is called <em>TestCaseDesign with data partitions</em>.</p>
<p>For more complex scenarios, TOSCA supports <strong>Database TDM</strong> (SQL queries) and the enterprise <strong>Tricentis TDM Server</strong> — a dedicated data service that provisions, masks, reserves, and resets test data across environments, preventing data conflicts in parallel runs.</p>`,
  syntax: `// Excel TDM binding
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
Step 7: ConfirmOrderID [Verify] = {B:OrderID}`,
  examples: [
    {
      label: 'Data-driven test with Excel partitions',
      code: `// Excel: TestData_Login.xlsx
Row 1: Username=alice@test.com, Password=pass123, Role=Admin
Row 2: Username=bob@test.com,   Password=pass456, Role=User
Row 3: Username=invalid,        Password=wrong,   Role=None

// TCM maps rows → 3 partitions of TC001_Login
// Run produces 3 results:
Partition 1 (alice) → Passed
Partition 2 (bob)   → Passed
Partition 3 (invalid) → Failed (login rejected — expected)`,
      out: 'One test case, three data sets, three independent results',
    },
    {
      label: 'Database TDM connection',
      code: `// Add DB connection in TCM → Modules → Tosca DB module
Connection: TestDB
  Driver:   MSSQL / Oracle / MySQL
  Server:   db.test.internal
  Database: TestEnv

// SQL query as data source
SELECT username, password, role
FROM test_users
WHERE env = 'QA' AND active = 1

// Result rows become partitions — same as Excel TDM`,
      out: 'Pull live test data from SQL databases at run time',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>TDM is like a <strong>mail merge</strong> in word processing. You write the letter template once (test case), plug in a contacts spreadsheet (Excel TDM), and the software produces one personalised letter per contact row (partition). Change the contacts list — the letter template stays untouched.</p>`,
  flow: [
    'Create Excel workbook with one column per parameter',
    'Each row = one test data partition',
    'Link Excel to TestCase via TestData property',
    'Map column headers to Configuration Parameters',
    'Run TestCase → one execution per data row',
    'Review results per partition independently',
  ],
},

// ── 6. Configuration Parameters ──────────────────────────────
{
  id: 'config',
  title: 'Configuration Parameters',
  icon: '⚙️',
  explain: `<p><strong>Configuration Parameters</strong> (Config Params or simply <em>parameters</em>) are reusable, named values that can be referenced anywhere in your test suite using the syntax <code>{P:ParameterName}</code>. They act as global or local constants — store a URL, username, database connection string, or environment flag once and reference it everywhere.</p>
<p>Parameters live in a hierarchy: <strong>Global Parameters</strong> (workspace-level, shared across all test cases), <strong>Folder Parameters</strong> (scoped to a folder and its children), and <strong>TestCase-level Parameters</strong> (local to one test case). A parameter at a lower level overrides a same-named parameter at a higher level — allowing environment-specific overrides without changing test cases.</p>
<p><strong>PCDs</strong> (Parameter Container Definitions) are templates that group related parameters — for example, a "Browser" PCD that contains URL, browser type, and timeout — and can be attached to Execution Lists to easily swap configurations between environments.</p>`,
  syntax: `// Reference syntax
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
  Username     = test_user`,
  examples: [
    {
      label: 'Environment switching via parameters',
      code: `// Global parameter
BaseURL = https://qa.example.com

// Test step using parameter
Navigate: {P:BaseURL}/dashboard
Enter URL in SearchBar: {P:BaseURL}/api/search

// To switch to staging — change ONE parameter:
BaseURL = https://staging.example.com
// All test steps pointing to {P:BaseURL} now hit staging`,
      out: 'Single parameter change switches all tests to a new environment',
    },
    {
      label: 'PCD attached to Execution List',
      code: `PCD: QA_Config
  BaseURL  = https://qa.example.com
  Username = qa_admin
  Password = qa_pass123

PCD: Staging_Config
  BaseURL  = https://staging.example.com
  Username = stg_admin
  Password = stg_pass456

// Attach PCD to Execution List
ExecutionList → Properties → PCD = QA_Config
// → All {P:BaseURL} in this run resolve to QA values`,
      out: 'Swap PCDs to run the same tests against different environments',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Config Parameters work like <strong>environment variables</strong> in software development. You define <code>DATABASE_URL=postgres://prod/db</code> once; every service that needs it reads the variable — you don't embed the connection string inside each service's code. Swapping environments means changing one variable, not editing dozens of files.</p>`,
  flow: [
    'Define Global Parameters at workspace level',
    'Create Folder-level params for environment overrides',
    'Reference with {P:ParamName} in test steps and values',
    'Group related params into PCDs for easy swapping',
    'Attach PCD to Execution List before running',
    'Change PCD to change target environment instantly',
  ],
},

// ── 7. Steering (Buffers, Conditions, Loops) ─────────────────
{
  id: 'steering',
  title: 'Steering: Buffers, Conditions & Loops',
  icon: '🔀',
  explain: `<p><strong>Steering</strong> is TOSCA's mechanism for adding conditional logic and dynamic data flow to test cases — without writing code. It has three main pillars:</p>
<p><strong>Buffers</strong> capture runtime values from the application (text read from a label, a generated order ID, a date field) and store them for use in later steps using the syntax <code>{B:BufferName}</code>. An attribute set to <em>ActionMode = Output</em> writes its control's value into the buffer at execution time.</p>
<p><strong>Conditions</strong> evaluate a buffer or parameter value and skip or execute a block of test steps accordingly — like an if/else without scripting. <strong>While loops</strong> repeat a block of steps as long as a condition holds true, and <strong>For iterations</strong> repeat a block N times. Together, these let testers model dynamic, branching workflows entirely through the TCM UI.</p>`,
  syntax: `// Buffer: capture a value at runtime
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
  Step: AddItemToCart`,
  examples: [
    {
      label: 'Capture order ID and verify in email',
      code: `// Test Case: Place Order and Verify Confirmation
Step 1: PlaceOrderPage.SubmitBtn [click]
Step 2: ConfirmationPage.OrderNumber
         ActionMode = Output → {B:OrderID}
Step 3: ConfirmationPage.OrderNumber [Verify]
         Value = {B:OrderID}        ← self-verify readable
Step 4: EmailPage.SubjectLine [Verify]
         Value = "Order {B:OrderID} Confirmed"
// Buffer bridges steps 2 → 4 without hard-coding the ID`,
      out: 'Buffer captures dynamic order ID and asserts it in email subject',
    },
    {
      label: 'Retry loop with condition',
      code: `// Retry until status = "Ready" or 10 attempts
Buffer: AttemptCount = 0
Buffer: StatusValue  = ""

While: {B:StatusValue} != "Ready" AND {B:AttemptCount} < 10
  Step: StatusPage.StatusLabel
         ActionMode = Output → {B:StatusValue}
  Step: Math.Add
         {B:AttemptCount} + 1 → {B:AttemptCount}
  Step: Wait 2 seconds`,
      out: 'Poll a status field up to 10 times using While loop + Buffers',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Steering is like a <strong>traffic light controller</strong>. Buffers are the sensors in the road measuring car count. Conditions are the logic rules ("if north > south, give north a green"). Loops are the timer that keeps checking every 30 seconds. No one rewrites the controller's code every time traffic patterns change — the rules adapt dynamically.</p>`,
  flow: [
    'Set ActionMode = Output on attribute to capture value',
    'Reference captured value with {B:BufferName}',
    'Add Condition block → define true/false branches',
    'Add While loop → set exit condition on buffer',
    'Add For block → set fixed iteration count',
    'Combine buffers + conditions for dynamic branching',
  ],
},

// ── 8. Recovery Scenarios ────────────────────────────────────
{
  id: 'recovery',
  title: 'Recovery Scenarios',
  icon: '🛡️',
  explain: `<p>A <strong>Recovery Scenario</strong> is an error handler that TOSCA triggers automatically when a test step fails. Instead of letting a failed step abort the entire test case, you define a recovery that cleans up the broken state and either retries, skips ahead, or exits gracefully — preserving the ability of subsequent test cases in the Execution List to run.</p>
<p>Recovery Scenarios are associated at three levels: <em>TestStep</em> (handle one step's failure), <em>TestCase</em> (handle any failure in the case), or <em>ExecutionList</em> (global handler for the entire run). TOSCA evaluates them in priority order — lower priority numbers run first.</p>
<p>A recovery itself is a test case (a list of steps). Common patterns: close an unexpected dialog, take a screenshot, log an error message, navigate back to a known state, and then signal TOSCA to <em>Retry</em>, <em>Skip</em>, <em>Next TestCase</em>, or <em>Exit</em>.</p>`,
  syntax: `// Recovery actions (what happens after recovery TC runs)
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
  Step 3: [Recovery Action] = Skip`,
  examples: [
    {
      label: 'Recovery for unexpected popup dialog',
      code: `// Recovery TC: TC_ClosePopup
Step 1: BrowserEngine.SwitchToAlert [if exists]
Step 2: AlertDialog.AcceptButton [click]
Step 3: [Recovery Action] = Retry   ← re-try original step

// Attached to:
ExecutionList level → Priority 1
// Fires any time an unexpected alert blocks a step`,
      out: 'Automatically dismiss alert dialogs and retry the failed step',
    },
    {
      label: 'Session timeout recovery',
      code: `// Recovery TC: TC_HandleSessionTimeout
Step 1: LoginPage.Username → {P:Username}
Step 2: LoginPage.Password → {P:Password}
Step 3: LoginPage.LoginButton [click]
Step 4: [Recovery Action] = Retry   ← retry original step after re-login

// Attached at TestCase level with condition: OnError
// When session expires mid-test → auto re-login → retry`,
      out: 'Handle session timeouts by re-authenticating and retrying',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Recovery Scenarios are like an <strong>airbag system in a car</strong>. You don't re-engineer the car every time an accident happens — the airbag deploys automatically, protects the occupants (the subsequent test cases), and the car can be driven again after recovery. The driver (test run) continues rather than being completely totalled.</p>`,
  flow: [
    'Identify failure modes: unexpected dialogs, session expiry, network errors',
    'Create a Recovery TC with cleanup steps',
    'Set Recovery Action at the end (Retry/Skip/NextTC/Exit)',
    'Attach recovery to step, test case, or execution list',
    'Set Priority (1 = highest) and Condition (Always/OnError)',
    'Test: deliberately trigger the failure to verify recovery fires',
  ],
},

// ── 9. Execution & Reporting ─────────────────────────────────
{
  id: 'reporting',
  title: 'Execution & Reporting',
  icon: '📈',
  explain: `<p>When an Execution List runs, TOSCA records every step's outcome in real time. Each test case entry in the list gets a <strong>result state</strong> (Passed, Failed, Error, Skipped, Not Executed) along with a detailed <strong>execution log</strong> showing the value passed to each step, the actual value found in the application, and the pass/fail verdict.</p>
<p>Screenshots and videos can be automatically captured on failure (or always, if configured). Logs are stored in the repository database and viewable directly in TCM's <em>Execution</em> section under <em>Results</em>. For HTML/PDF reports, TCM ships a <strong>Tosca Report</strong> generator that produces structured, stakeholder-friendly documents.</p>
<p>TOSCA also integrates natively with defect trackers (Jira, Azure DevOps, ServiceNow) — failed test cases can auto-create defects with step details, screenshots, and environment info attached.</p>`,
  syntax: `// Result states
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
// Produces: ExecutionResults.xml  (JUnit-compatible)`,
  examples: [
    {
      label: 'Step-level execution log',
      code: `TestCase: TC001_Login  → FAILED
  Step 1: Navigate URL       → Passed   | Got: 200 OK
  Step 2: Enter Username     → Passed   | Typed: alice@test.com
  Step 3: Enter Password     → Passed   | Typed: ****
  Step 4: Click Login        → Passed   | Button clicked
  Step 5: Verify Welcome     → FAILED
    Expected: "Welcome, Alice"
    Actual:   "Account locked. Contact admin."
    Screenshot: step5_fail_2024-11-01_14-23-11.png`,
      out: 'Each step shows expected vs actual value — pinpoints the failure',
    },
    {
      label: 'JUnit XML for CI pipeline',
      code: `<!-- ExecutionResults.xml (auto-generated by ToscaCI) -->
<testsuite name="Regression_Sprint12" tests="45" failures="2" errors="1">
  <testcase name="TC001_Login" classname="Smoke" time="4.2"/>
  <testcase name="TC020_PlaceOrder" classname="Regression" time="12.8">
    <failure message="Verify WelcomeLabel failed">
      Expected: Welcome, Alice | Actual: Account locked
    </failure>
  </testcase>
</testsuite>`,
      out: 'JUnit XML lets Jenkins/Azure DevOps parse TOSCA results natively',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>TOSCA's reporting is like a <strong>flight data recorder (black box)</strong>. Every action taken during the flight (test run) is captured in chronological order. When something goes wrong, you replay the recording — you see exactly what was done, what was expected, and what actually happened, right down to the millisecond.</p>`,
  flow: [
    'Run Execution List → TOSCA records each step in real time',
    'Failed steps capture: expected value, actual value, screenshot',
    'Results stored in central repository database',
    'Open TCM Execution → Results to review step-level logs',
    'Generate HTML/PDF report for stakeholders',
    'Auto-create defects in Jira/ADO for failed test cases',
  ],
},

// ── 10. API Testing (ServiceV) ────────────────────────────────
{
  id: 'api',
  title: 'API Testing (ServiceV Engine)',
  icon: '🔌',
  explain: `<p>TOSCA's <strong>ServiceV Engine</strong> (formerly called Tosca API Engine) enables testing of REST, SOAP, GraphQL, and messaging-based APIs without any scripting. You define a <em>Service Endpoint</em> module that captures the API's URL, method, headers, and body schema — then test steps supply the data, just like UI testing.</p>
<p>ServiceV supports full request/response validation: assert HTTP status codes, response headers, and individual JSON/XML body fields. Captured response values can be stored in Buffers for chaining — e.g., extract an auth token from a login response and inject it into the Authorization header of the next request.</p>
<p>TOSCA also offers <strong>Service Virtualization</strong> (the SV side of ServiceV): stand up a virtual service that mimics a real backend dependency, so API tests aren't blocked by unavailable third-party services or incomplete backends.</p>`,
  syntax: `// REST API Module structure (created via ServiceV scan)
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
    Body.name [Verify]:  {P:ExpectedName}`,
  examples: [
    {
      label: 'Login API → extract token → call protected endpoint',
      code: `TestCase: TC_API_AuthFlow
Step 1: POST /api/auth/login
         username = {P:APIUser}
         password = {P:APIPass}
         [Response] StatusCode = 200  ← verify
         [Response] token → {B:Token} ← capture

Step 2: GET /api/user/profile
         Authorization = "Bearer {B:Token}"
         [Response] StatusCode = 200
         [Response] body.email [Verify] = {P:APIUser}`,
      out: 'Chain API calls: capture token in step 1, use in step 2',
    },
    {
      label: 'JSON response field verification',
      code: `// TOSCA uses JSONPath to target response fields
Response assertions:
  $.status           [Verify] = "success"
  $.data.userId      [Verify] = "12345"
  $.data.roles[0]    [Verify] = "admin"
  $.pagination.total [Output] → {B:TotalCount}

// XML (SOAP) uses XPath
  /Envelope/Body/GetOrderResponse/OrderId [Verify] = "ORD-001"`,
      out: 'JSONPath and XPath target nested fields in API responses',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>API testing in TOSCA is like using a <strong>universal remote control</strong>. The remote (ServiceV module) knows the signal format for each device (endpoint). You press the button (test step), supply the channel number (request data), and the remote verifies the TV changed to the right channel (response assertion) — no need to understand the infrared encoding protocol.</p>`,
  flow: [
    'Create Service Endpoint via ServiceV scan or import (Swagger/WSDL)',
    'Define Request: method, URL, headers, body schema',
    'Set Response assertions: status code, body fields via JSONPath',
    'Use Output steps to capture response values into Buffers',
    'Chain calls: pass {B:Token} to next request header',
    'Run via Execution List — results show request/response detail',
  ],
},

// ── 11. Distributed Execution (DEX) ──────────────────────────
{
  id: 'dex',
  title: 'Distributed Execution (DEX)',
  icon: '🌐',
  explain: `<p><strong>DEX (Distributed Execution)** is TOSCA's parallel test execution infrastructure. Instead of running everything on the tester's machine, DEX distributes test cases across a pool of <em>execution agents</em> (machines) managed by a central <em>DEX Server</em>. This cuts overall run time by running multiple tests simultaneously.</p>
<p>A DEX agent is a machine with TOSCA installed and the DEX Agent service running. It registers with the DEX Server and waits for work. When a run is triggered, the DEX Server slices the Execution List into units and dispatches them to available agents — each agent runs its slice independently and reports results back to the central repository.</p>
<p>TOSCA also offers <strong>Tosca Cloud (SaaS DEX)</strong> — a cloud-hosted pool of agents that you can scale on demand without managing your own VMs. It integrates directly into the TCM Execution List through a cloud agent configuration.</p>`,
  syntax: `// DEX architecture
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
  --executionList "Full_Regression"`,
  examples: [
    {
      label: 'Parallel execution across multiple agents',
      code: `// Without DEX: 100 test cases × 30s each = 50 minutes (serial)

// With DEX (4 agents):
Agent 1: TC001–TC025  → 12.5 minutes
Agent 2: TC026–TC050  → 12.5 minutes
Agent 3: TC051–TC075  → 12.5 minutes
Agent 4: TC076–TC100  → 12.5 minutes
Total wall-clock time: ~13 minutes (4× faster)`,
      out: 'DEX cuts a 50-minute serial run to 13 minutes with 4 agents',
    },
    {
      label: 'Agent requirements and routing',
      code: `// Agents can have tags/requirements
Agent 1: Tags = ["Windows", "Chrome", "English"]
Agent 2: Tags = ["Windows", "SAP", "German"]
Agent 3: Tags = ["Mac", "Safari", "iOS"]

// Test cases declare required agent tags
TC_SAP_Invoice: RequiresAgent = ["SAP", "German"]
→ DEX routes it only to Agent 2

TC_Safari_Checkout: RequiresAgent = ["Mac", "Safari"]
→ DEX routes it only to Agent 3`,
      out: 'Agent requirements ensure the right test runs on the right machine',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>DEX is like a <strong>food delivery dispatch centre</strong>. One central dispatcher (DEX Server) receives a large order (Execution List) and routes individual items to the nearest available delivery driver (agent). All drivers work in parallel; the dispatcher collects all delivery confirmations and sends one combined bill (results report) to the restaurant.</p>`,
  flow: [
    'Install DEX Server — central orchestrator',
    'Install DEX Agent on each test machine and register',
    'Tag agents with capabilities (OS, browser, language)',
    'Set ExecutionList mode = Distributed, choose agent group',
    'Run → DEX dispatches test cases to available agents',
    'Results merge back to central repository automatically',
  ],
},

// ── 12. CI/CD Integration ─────────────────────────────────────
{
  id: 'cicd',
  title: 'CI/CD Integration',
  icon: '🔄',
  explain: `<p>TOSCA integrates with CI/CD pipelines through <strong>ToscaCI</strong> — a command-line tool that triggers Execution Lists from build servers without opening TCM. Jenkins, Azure DevOps, GitHub Actions, and GitLab CI all use ToscaCI to add TOSCA as a pipeline stage after deployment.</p>
<p>ToscaCI executes an Execution List, waits for results, and returns a process exit code (0 = all passed, non-zero = failures) that the CI server uses to pass or fail the pipeline stage. Results are saved as JUnit-compatible XML so build servers can parse and display them natively in their test result dashboards.</p>
<p>A common pattern: <em>Deploy → Smoke TOSCA run (gate) → Full Regression TOSCA run → Publish report</em>. The smoke gate runs in minutes and blocks a bad deployment before spending 30 minutes on the full suite.</p>`,
  syntax: `// ToscaCI basic run
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
}`,
  examples: [
    {
      label: 'Azure DevOps pipeline with TOSCA stage',
      code: `# azure-pipelines.yml
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
          ToscaCI.exe run \
            --executionList "Smoke_QA" \
            --resultdir "$(Build.ArtifactStagingDirectory)"
    - task: PublishTestResults@2
      inputs:
        testResultsFormat: JUnit
        testResultsFiles: '**\\ExecutionResults.xml'`,
      out: 'TOSCA smoke tests gate the QA deployment in Azure DevOps',
    },
    {
      label: 'GitHub Actions with TOSCA Cloud',
      code: `# .github/workflows/tosca.yml
name: TOSCA Regression
on: [push]
jobs:
  tosca:
    runs-on: windows-latest
    steps:
      - name: Run TOSCA via DEX Cloud
        run: |
          ToscaCI.exe run \
            --executionEnvironment "Cloud" \
            --executionList "Full_Regression" \
            --resultdir "\$\{\{ github.workspace \}\}/results"
      - name: Publish results
        uses: dorny/test-reporter@v1
        with:
          name: TOSCA Results
          path: results/ExecutionResults.xml
          reporter: java-junit`,
      out: 'TOSCA Cloud agents run the full regression on every push',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>ToscaCI in a pipeline is like a <strong>quality inspector on a factory assembly line</strong>. After each assembly stage (deploy), the inspector runs automated checks (TOSCA tests). If the checks pass, the product moves to the next station. If they fail, the line halts and the fault is logged — defects never reach the customer.</p>`,
  flow: [
    'Install ToscaCI on CI server or agent',
    'Call ToscaCI.exe run with workspace + execution list args',
    'CI reads exit code: 0 = pass, non-zero = fail the stage',
    'Publish ExecutionResults.xml as JUnit test results',
    'Archive screenshots/logs as build artifacts on failure',
    'Optional: auto-create defects in Jira/ADO on failure',
  ],
},

// ── 13. Mobile Testing ────────────────────────────────────────
{
  id: 'mobile',
  title: 'Mobile Testing',
  icon: '📱',
  explain: `<p>TOSCA's <strong>Mobile Engine</strong> enables automated testing of native iOS and Android apps, as well as mobile-optimised web apps in mobile browsers. It uses the same module-scan-and-execute model as desktop — you scan the mobile app, TOSCA creates a module tree, and you build test cases exactly as you would for a web application.</p>
<p>For iOS, TOSCA communicates through Apple's XCUITest framework; for Android, it uses UIAutomator2/Appium under the hood. The physical device or emulator is connected to a <em>Mobile Engine Host</em> machine that bridges between TCM and the device. TOSCA Cloud and DEX can route mobile test cases to devices in a device farm.</p>
<p>Mobile test cases require a <strong>Device Configuration</strong> — specifying the device name, OS version, app bundle ID, and whether to use a real device or emulator. This configuration is attached to the Execution List so you can run the same test on multiple device/OS combinations.</p>`,
  syntax: `// Device Configuration (set in TCM → Modules → Mobile)
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
Tap:    coordinate-based or control-based`,
  examples: [
    {
      label: 'Mobile native app test: login',
      code: `Module: iOS_LoginScreen
  Attribute: UsernameField   [Input]   → tap + type
  Attribute: PasswordField   [Input]   → tap + type
  Attribute: SignInButton     [Input]   → tap
  Attribute: WelcomeText     [Verify]

TestCase: TC_Mobile_Login
  Step 1: iOS_LoginScreen.UsernameField = {P:MobileUser}
  Step 2: iOS_LoginScreen.PasswordField = {P:MobilePass}
  Step 3: iOS_LoginScreen.SignInButton  ← tap (no value)
  Step 4: iOS_LoginScreen.WelcomeText  [Verify] = "Hello!"`,
      out: 'Native iOS login test — identical structure to web tests',
    },
    {
      label: 'Cross-platform matrix with DEX',
      code: `ExecutionList: Mobile_Regression
  Agent Requirements per TC:
    TC_Login:
      Run on Agent[iPhone15_iOS17]
      Run on Agent[Pixel7_Android13]
      Run on Agent[Galaxy_Android14]
  → 3 parallel runs, one per device
  → Results show per-device pass/fail`,
      out: 'Same test runs on 3 devices in parallel via DEX agent routing',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Mobile testing in TOSCA is like having the same <strong>driving test examiner</strong> assess candidates on different car models (iOS, Android). The examiner follows the same checklist regardless of the car — check mirrors, signal, brake — and adapts naturally to each car's controls. The test script (checklist) doesn't change; only the vehicle (device) does.</p>`,
  flow: [
    'Connect device / start emulator on Mobile Engine Host',
    'Configure Device Configuration in TCM (platform, bundle ID)',
    'Scan the app with Mobile Engine → creates Module',
    'Build test cases using mobile module attributes',
    'Attach device config to Execution List',
    'Run locally or distribute to device farm via DEX',
  ],
},

// ── 14. Requirements & Traceability ──────────────────────────
{
  id: 'requirements',
  title: 'Requirements & Traceability',
  icon: '📌',
  explain: `<p>TOSCA's <strong>Requirements</strong> section provides a traceability matrix linking business requirements to the test cases that verify them. Every requirement can be tagged with a <em>risk level</em> (Low / Medium / High / Critical) and linked to one or more test cases. If a test case fails, TOSCA immediately shows which requirement is at risk.</p>
<p><strong>Test Optimisation (TO)</strong> uses requirement coverage analysis to automatically select the <em>minimum set of test cases</em> that covers all high-risk requirements. On large regression suites, TO can reduce execution time by 60–80% while maintaining the same risk coverage — this is TOSCA's flagship differentiator.</p>
<p>Requirements can be imported from external tools (Jira, Azure DevOps, IBM DOORS) via TOSCA's integration layer, keeping the traceability matrix automatically synchronised with your ALM tool.</p>`,
  syntax: `// Requirements structure in TCM
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
4. Execution List is auto-populated with optimised TC set`,
  examples: [
    {
      label: 'Requirements coverage matrix',
      code: `Requirement       | Risk    | TC001 | TC005 | TC010 | Coverage
US001 Login       | Critical|  ✓    |       |  ✓    |  100%
US002 Dashboard   | High    |  ✓    |       |       |  100%
US003 Password    | Medium  |       |  ✓    |       |  100%
US004 Logout      | Low     |       |       |       |   0%  ← gap!

// US004 has no test case → alert in TOSCA dashboard`,
      out: 'Coverage matrix reveals untested requirements at a glance',
    },
    {
      label: 'Test Optimisation result',
      code: `// Full regression: 200 test cases
// After Test Optimisation (focus on High/Critical risks):

Optimised set: 43 test cases
  ✓ Covers all Critical requirements
  ✓ Covers all High requirements
  – Skips 157 Low-risk test cases (still logged as skipped)

Execution time: 43 × 30s = ~22 minutes
  vs. 200 × 30s = 100 minutes (full run)
  → 78% time reduction with same risk coverage`,
      out: 'Test Optimisation reduces a 100-minute suite to 22 minutes',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>Requirements traceability is like a <strong>building inspection checklist</strong> cross-referenced with the building code. Each code clause (requirement) maps to specific inspection items (test cases). Test Optimisation is the inspector focusing only on load-bearing walls (critical requirements) when time is short — the cosmetic items (low-risk) get deferred without compromising structural safety.</p>`,
  flow: [
    'Import or create Requirements in TCM Requirements section',
    'Assign risk level (Critical / High / Medium / Low)',
    'Link test cases to requirements they verify',
    'View coverage matrix — identify gaps',
    'Run Test Optimisation → auto-select minimum covering set',
    'Requirements dashboard tracks pass/fail risk exposure',
  ],
},

// ── 15. Workspaces & Collaboration ───────────────────────────
{
  id: 'workspace',
  title: 'Workspaces & Collaboration',
  icon: '🤝',
  explain: `<p>TOSCA's <strong>Common Repository</strong> is a central SQL/Oracle database that all team members connect to, ensuring everyone works on the same single version of all test assets. Multi-user access is coordinated through <strong>check-out / check-in</strong> locking: when you edit a test case or module, you check it out (locking it for others), make changes, then check in — the new version is immediately available to the team.</p>
<p><strong>Workspaces</strong> are private sandboxes within the common repository. A tester can check out assets into their personal workspace, develop and test changes in isolation, then merge them back to the shared repository — similar to git branching. This prevents unstable work-in-progress from breaking other testers' runs.</p>
<p>TOSCA also integrates with external version control (Git) for exporting/importing repository snapshots, and provides a <strong>Merge Conflicts</strong> UI when two users have modified the same asset concurrently.</p>`,
  syntax: `// Check-out / Check-in flow
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
TCM → Options → Repository → Server URL + DB credentials`,
  examples: [
    {
      label: 'Team workflow with workspaces',
      code: `// Alice: develop new Login module in workspace
1. Alice creates Workspace_Alice
2. Checks out LoginPage module → moves to workspace
3. Adds new attribute: RememberMeCheckbox
4. Runs local tests in workspace → passes
5. Merges Workspace_Alice → Common Repository
6. Bob can now see and use RememberMeCheckbox

// Bob: blocked scenario (without workspace)
1. Bob opens LoginPage module → sees "Checked out by Alice"
2. Cannot edit until Alice checks in
// → Use workspaces to avoid this bottleneck`,
      out: 'Workspaces prevent blocking and enable parallel development',
    },
    {
      label: 'Conflict resolution',
      code: `// Two users edit same test case simultaneously
Alice: modifies TC001 Step 3 value to "admin@new.com"
Bob:   modifies TC001 Step 3 value to "user@new.com"

// When Bob merges:
TCM shows Merge Conflict dialog
  Alice's version: "admin@new.com"
  Bob's version:   "user@new.com"
  Current value:   "alice@test.com" (original)
→ Bob chooses: Keep Mine / Take Theirs / Merge manually`,
      out: 'TCM provides a visual conflict resolution dialog for concurrent edits',
    },
  ],
  svgHTML: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,
  analogy: `<p>The TOSCA repository is like a <strong>shared Google Doc with track-changes and private drafts</strong>. The main document (common repository) is always the official version. Workspaces are personal drafts — you refine your writing privately, then propose a merge into the main document. If someone else edited the same sentence, Google Docs highlights the conflict for manual resolution.</p>`,
  flow: [
    'Connect TCM to Common Repository (server + credentials)',
    'Check Out assets before editing — prevents concurrent overwrites',
    'Create personal Workspace for isolated development',
    'Test changes in workspace before merging to shared repo',
    'Check In / Merge Workspace → resolve any conflicts in TCM UI',
    'Run Execution List from Common Repository to validate merged work',
  ],
},

]; // end TOSCA_CONCEPTS
