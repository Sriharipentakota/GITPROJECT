import type { Concept } from '../types';


export const PLAYWRIGHT_CONCEPTS: Concept[] = [

// ── 1. Installation & Setup ────────────────────────────────────
{
  id: 'setup',
  title: 'Installation & Setup',
  icon: '🔧',
  explain: `
<p><strong>Playwright</strong> is a modern, cross-browser end-to-end testing framework from Microsoft. A single API drives Chromium, Firefox, and WebKit — the engines powering Chrome/Edge, Firefox, and Safari. It ships with its own test runner, assertion library, and browser management so you don't need to wire up third-party tools.</p>
<p>The easiest entry point is <code>npm init playwright@latest</code>, an interactive wizard that asks whether you want TypeScript or JavaScript, names your test directory, generates <code>playwright.config.ts</code>, writes a sample test, optionally scaffolds a GitHub Actions workflow, and then downloads the three browser binaries automatically.</p>
<p>Day-to-day you interact with Playwright through its CLI: <code>npx playwright test</code> runs all tests, <code>--headed</code> shows the browser window, <code>--ui</code> opens a visual dashboard with time-travel debugging, and <code>--debug</code> launches Playwright Inspector for step-by-step execution. The HTML reporter produces rich, self-contained reports with screenshots, video, and traces.</p>`,
  syntax: `// ── Bootstrap ────────────────────────────────────────
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
npx playwright --version`,
  examples: [
    {
      label: 'Minimal playwright.config.ts',
      code: `import { defineConfig, devices } from '@playwright/test';

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
});`,
      out: 'Three-browser config with base URL, HTML report, and CI retries',
    },
    {
      label: 'package.json scripts',
      code: `{
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
}`,
      out: 'Convenient scripts for every common Playwright workflow',
    },
    {
      label: 'GitHub Actions CI workflow',
      code: `name: Playwright Tests
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
          path: playwright-report/`,
      out: 'CI workflow that installs browsers, runs tests, uploads HTML report on failure',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Setting up Playwright is like <strong>equipping a professional testing lab</strong>. The <code>npm init playwright@latest</code> command is the lab builder — it installs the equipment (browsers), draws the floor plan (config file), writes the first experiment protocol (sample test), and even configures the automated lab schedule (GitHub Actions).</p>
<p>Once the lab is ready, <code>npx playwright test</code> is the scientist running experiments. You can run in the dark (headless), observe live (--headed), pause and inspect (--debug), or ask the lab manager for a full visual dashboard (--ui). The HTML report is your printed experiment journal — shareable and self-contained.</p>`,
  flow: [
    'Run <code>npm init playwright@latest</code> — the wizard scaffolds the entire project',
    'Answer prompts: TypeScript or JavaScript, test directory name, add GitHub Actions workflow?',
    'Playwright installs <code>@playwright/test</code> and downloads Chromium, Firefox, WebKit binaries',
    '<code>playwright.config.ts</code> is created with multi-browser projects, timeout, retries, reporter',
    'A sample <code>example.spec.ts</code> is placed in your test directory — run it immediately',
    'Use <code>npx playwright test --ui</code> for interactive development, <code>--reporter=html</code> + <code>show-report</code> for CI results',
  ],
},

// ── 2–15: stubs (filled in progressively) ─────────────────────
// ── 2. Writing Your First Test ────────────────────────────────
{
  id: 'firsttest',
  title: 'Writing Your First Test',
  icon: '✍️',
  explain: `
<p>A Playwright test file is a TypeScript (or JavaScript) module. Everything starts with <code>import { test, expect } from '@playwright/test'</code>. Individual tests are defined with <code>test('description', async ({ page }) => { … })</code>, where <strong>page</strong> is a built-in <em>fixture</em> — Playwright creates the browser page before your test runs and closes it automatically afterwards. You never instantiate or tear down the page yourself.</p>
<p>Every browser operation is asynchronous, so <strong>every action and assertion must be prefixed with <code>await</code></strong>. Omitting <code>await</code> is the single biggest source of flaky Playwright tests — the test moves on before the browser has done anything. The callback is marked <code>async</code> so you can write sequential, readable code instead of nested callbacks.</p>
<p>Use <code>test.describe('Group', () => { … })</code> to group related tests; this scopes <code>beforeEach</code>/<code>afterEach</code> hooks and improves report readability. During development, <code>test.only()</code> isolates a single test in the file, <code>test.skip()</code> excludes one, and <code>test.fixme()</code> marks a known failure. Add tags like <code>@smoke</code> in the test title to filter with <code>--grep "@smoke"</code> at the CLI.</p>`,
  syntax: `import { test, expect } from '@playwright/test';

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
}, async ({ page }) => { … });`,
  examples: [
    {
      label: 'First test: navigate and assert title',
      code: `import { test, expect } from '@playwright/test';

test('Playwright homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Auto-retrying title assertion
  await expect(page).toHaveTitle(/Playwright/);
});`,
      out: 'PASSED — title matches regex /Playwright/',
    },
    {
      label: 'test.describe with beforeEach hook',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Both tests run; beforeEach navigates to /products/1 before each',
    },
    {
      label: 'test.only and test.skip in development',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Only the .only test runs; 2 skipped (1 explicit, 1 implicit)',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:monospace;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Writing a Playwright test is like writing a <strong>recipe card</strong>. The recipe title is <code>test('makes chocolate cake', …)</code> — it describes the goal in plain English. The chef arriving at the kitchen is <code>async ({ page })</code> — Playwright hands you a fully-equipped kitchen (browser page) at the start and cleans it up when you're done. Each <code>await</code> is a mandatory step you must finish before continuing; you cannot frost the cake before it comes out of the oven.</p>
<p><code>test.describe</code> groups your recipes into a chapter. <code>test.only</code> marks the one recipe you're perfecting today — the rest sit on the shelf. <code>test.fixme</code> is a sticky note that says "this recipe is broken and we know it" so the book doesn't fall apart just because one dish isn't right yet.</p>`,
  flow: [
    'Import <code>test</code> and <code>expect</code> from <code>\'@playwright/test\'</code> at the top of every spec file',
    'Define a test with <code>test(\'descriptive title\', async ({ page }) => { … })</code>',
    'Navigate with <code>await page.goto(\'/path\')</code> — Playwright\'s baseURL is prepended automatically',
    'Interact: <code>await page.getByRole(\'button\').click()</code>, <code>await page.getByLabel(\'Email\').fill(\'…\')</code>',
    'Assert with <code>await expect(locator).toBeVisible()</code> — assertions auto-retry until they pass or time out',
    'Group related tests in <code>test.describe()</code> and share setup with <code>test.beforeEach()</code>',
    'Use <code>test.only</code> while developing, <code>test.skip</code> / <code>test.fixme</code> for known issues — remove before merge',
  ],
},
// ── 3. Browsers & Contexts ────────────────────────────────────
{
  id: 'browsers',
  title: 'Browsers & Contexts',
  icon: '🌐',
  explain: `
<p>Playwright's object model has three levels: <strong>Browser → BrowserContext → Page</strong>. The <strong>Browser</strong> is the running browser process (Chromium, Firefox, or WebKit). A <strong>BrowserContext</strong> is an isolated session inside that browser — each context has its own cookies, localStorage, cache, and authentication state, like a private/incognito window. A <strong>Page</strong> is a single tab within a context.</p>
<p>In normal tests you receive the <code>page</code> fixture automatically — Playwright has already created a context and a page for you using the project's <code>use</code> settings. You create contexts explicitly with <code>browser.newContext(options)</code> when you need <strong>custom configuration</strong>: a specific viewport, locale, timezone, geolocation, granted permissions, pre-loaded auth state via <code>storageState</code>, or video recording.</p>
<p>The killer use-case for multiple contexts is <strong>multi-user testing</strong>. Because each context is completely isolated, Context A's cookies and localStorage never leak into Context B. Two users can interact with the same page in the same test without any interference. When a context is closed, all its pages close automatically — no manual cleanup needed.</p>`,
  syntax: `import { browser } from '@playwright/test'; // available as a fixture

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
await context.close();   // closes all pages within it`,
  examples: [
    {
      label: 'Custom viewport and locale context',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Context uses French locale; date element shows "juillet" (July in French)',
    },
    {
      label: 'Two-user collaboration test',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Two isolated contexts; guest message visible to admin without state bleed',
    },
    {
      label: 'Geolocation permission grant',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Browser reports Paris coordinates; nearest store shows Paris location',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>A Browser is like a <strong>hotel building</strong>. Each BrowserContext is a <strong>guest room</strong> — it has its own key card, minibar, and personal safe (cookies, localStorage, authentication). Different guests (contexts) cannot access each other's rooms even though they share the same building. A Page is a <strong>window</strong> in that room — a room can have multiple windows open, and they all belong to the same guest.</p>
<p>The <code>storageState</code> option is the <strong>pre-packed suitcase</strong>: you pack it once (save the logged-in session to a file) and every new guest arrives already unpacked. Multi-user testing is simply <em>checking two guests into two separate rooms simultaneously</em> — they can watch each other through the windows (interact via the page) but their personal belongings stay separate.</p>`,
  flow: [
    'Playwright launches a <strong>Browser</strong> (Chromium, Firefox, or WebKit) from the project config',
    'A <strong>BrowserContext</strong> is created — isolated with its own cookies, localStorage, and auth',
    'The <code>page</code> fixture hands you a <strong>Page</strong> inside that context automatically',
    'Call <code>browser.newContext(options)</code> when you need custom viewport, locale, geolocation, or permissions',
    'Create additional pages in the context with <code>context.newPage()</code>',
    'For multi-user tests, create separate contexts — each with its own <code>storageState</code>',
    'Call <code>context.close()</code> to tear down; all pages inside close automatically',
  ],
},
// ── 4. Page & Navigation ──────────────────────────────────────
{
  id: 'navigation',
  title: 'Page & Navigation',
  icon: '🧭',
  explain: `
<p><code>page.goto(url, options)</code> is the primary navigation method. It accepts a full URL or a path when <code>baseURL</code> is set in the config. By default it waits for the <strong>load</strong> event — all resources (scripts, images, stylesheets) have loaded. Control this with the <code>waitUntil</code> option: <code>'domcontentloaded'</code> (HTML parsed, no waiting for resources), <code>'networkidle'</code> (no network activity for 500 ms), or <code>'commit'</code> (first byte received — earliest possible).</p>
<p>After clicking a link or submitting a form that triggers navigation, use <code>await page.waitForURL('/target')</code> to assert the destination URL, or <code>await page.waitForLoadState('networkidle')</code> to wait for the page to fully settle. Note that <code>page.url()</code> is <strong>synchronous</strong> (returns the current URL string immediately), while <code>page.title()</code> is <strong>async</strong> and must be awaited.</p>
<p>For assertions, always prefer <code>await expect(page).toHaveURL('/dashboard')</code> and <code>await expect(page).toHaveTitle(/Home/)</code> over calling <code>page.url()</code> and comparing manually. The <code>expect</code> versions <strong>auto-retry</strong> until the condition is met or the timeout expires — making them resilient to redirects and async navigation.</p>`,
  syntax: `// ── Navigate to a URL ────────────────────────────────────────
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
await page.waitForURL(/\/profile\/\d+/);            // regex pattern
await page.waitForURL('**/checkout**');             // glob pattern
await page.waitForLoadState('load');                // default
await page.waitForLoadState('domcontentloaded');
await page.waitForLoadState('networkidle');

// ── Read current state ────────────────────────────────────────
const url   = page.url();                           // ← synchronous
const title = await page.title();                   // ← async Promise

// ── Assertions (auto-retry) ───────────────────────────────────
await expect(page).toHaveURL('/dashboard');
await expect(page).toHaveURL(/\/user\/\d+/);
await expect(page).toHaveTitle('My App — Home');
await expect(page).toHaveTitle(/Dashboard/);`,
  examples: [
    {
      label: 'Navigate and assert URL + title',
      code: `import { test, expect } from '@playwright/test';

test('login redirects to dashboard', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('secret');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Auto-retries until the redirect completes
  await expect(page).toHaveURL('/dashboard');
  await expect(page).toHaveTitle(/Dashboard/);
});`,
      out: 'PASSED — URL and title match after redirect from /login to /dashboard',
    },
    {
      label: 'waitUntil options comparison',
      code: `import { test } from '@playwright/test';

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
});`,
      out: 'Each strategy waits for a different stage of the page lifecycle',
    },
    {
      label: 'Browser history navigation',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'PASSED — back, forward, and reload all navigate correctly',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p><code>page.goto()</code> is like telling your <strong>GPS a destination</strong> — you give it the address and wait until you arrive. The <code>waitUntil</code> option decides what "arrived" means: <code>'commit'</code> is turning onto the street, <code>'domcontentloaded'</code> is parking the car, <code>'load'</code> is walking inside, and <code>'networkidle'</code> is sitting down and everything going quiet.</p>
<p><code>page.goBack()</code> is the browser back button — same as a physical GPS recalculating to the previous stop. <code>expect(page).toHaveURL()</code> is checking the street sign after you park — and if you're still pulling into the space it <em>waits</em> for you to fully stop before deciding you're in the wrong spot.</p>`,
  flow: [
    'Call <code>await page.goto(url)</code> — waits for <code>load</code> event by default',
    'Use <code>waitUntil: \'domcontentloaded\'</code> for SPAs; <code>\'networkidle\'</code> for data-heavy pages',
    'After clicks that trigger navigation, call <code>await page.waitForURL(\'/target\')</code>',
    'Assert the URL with <code>await expect(page).toHaveURL(\'…\')</code> — auto-retries through redirects',
    'Assert the title with <code>await expect(page).toHaveTitle(/…/)</code> — accepts string or regex',
    'Use <code>page.goBack()</code>, <code>page.goForward()</code>, <code>page.reload()</code> for history navigation',
    'Note: <code>page.url()</code> is <strong>synchronous</strong>; <code>page.title()</code> returns a Promise',
  ],
},
// ── 5. Locators & Selectors ───────────────────────────────────
{
  id: 'locators',
  title: 'Locators & Selectors',
  icon: '🎯',
  explain: `
<p>Playwright's <strong>locators</strong> are the recommended way to find DOM elements. Unlike raw CSS/XPath selectors, locators are <em>lazy</em> — they don't search the DOM until an action or assertion is performed — and they <em>auto-wait</em> until the element is visible, attached, and stable before interacting. This auto-waiting behaviour eliminates most "element not found" flakiness without requiring manual waits.</p>
<p>Choose locators in this priority order: <code>getByRole()</code> (closest to how ARIA and screen readers see the page) → <code>getByLabel()</code> (form inputs by their label) → <code>getByPlaceholder()</code> (unlabelled inputs) → <code>getByText()</code> (visible text) → <code>getByAltText()</code> (images) → <code>getByTitle()</code> (tooltip titles) → <code>getByTestId()</code> (explicit <code>data-testid</code> attributes) → CSS / XPath as a last resort. Higher-priority strategies are more resilient to style and layout refactoring.</p>
<p>Locators can be <strong>chained</strong> to scope a search within a parent (<code>page.locator('.card').getByRole('button')</code>), <strong>filtered</strong> to narrow a list (<code>.filter({ hasText: 'Sale' })</code>), and <strong>indexed</strong> with <code>.first()</code>, <code>.last()</code>, or <code>.nth(n)</code>. Strict mode means an un-narrowed locator that matches multiple elements throws an error — always narrow to one.</p>`,
  syntax: `// ── Semantic locators (recommended, in priority order) ────────
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
page.getByRole('button').and(page.getByTitle('Save file'))`,
  examples: [
    {
      label: 'Form interaction with semantic locators',
      code: `import { test, expect } from '@playwright/test';

test('fill and submit login form', async ({ page }) => {
  await page.goto('/login');

  // getByLabel links the locator to the visible form label
  await page.getByLabel('Email address').fill('user@example.com');
  await page.getByLabel('Password').fill('secret123');

  // getByRole with name targets the visible button text
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('/dashboard');
});`,
      out: 'Fills email + password fields by label, clicks Sign in, asserts redirect',
    },
    {
      label: 'Filtering a list of items',
      code: `import { test, expect } from '@playwright/test';

test('remove only the "Playwright" item from the cart', async ({ page }) => {
  await page.goto('/cart');

  // Scope to the list item that contains "Playwright"
  const playwrightRow = page.getByRole('row').filter({ hasText: 'Playwright' });

  // Then find the Remove button within only that row
  await playwrightRow.getByRole('button', { name: 'Remove' }).click();

  await expect(page.getByRole('row').filter({ hasText: 'Playwright' })).toHaveCount(0);
});`,
      out: 'Only the Playwright row is removed; other cart items remain',
    },
    {
      label: 'Chaining locators to scope within a component',
      code: `import { test, expect } from '@playwright/test';

test('like the second product card', async ({ page }) => {
  await page.goto('/products');

  // Scope into the second .product-card (0-indexed)
  const secondCard = page.locator('.product-card').nth(1);

  // getByRole searches only within that card
  await secondCard.getByRole('button', { name: 'Like' }).click();

  // Verify the like count updated inside the same card
  await expect(secondCard.getByTestId('like-count')).toHaveText('1');
});`,
      out: 'Likes the second card only; other cards\' like counts are unaffected',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 215" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Locators are like instructions for finding a specific person in a crowded room. The best instruction is <em>"find the person whose badge says Manager"</em> (<code>getByRole</code>) — meaningful and stable regardless of where they stand. Worse is <em>"find the person in the blue shirt"</em> (<code>CSS class</code>) — might match many, and they could change clothes. Worst is <em>"the third person in the second row"</em> (<code>XPath index</code>) — completely wrong if anyone moves.</p>
<p><code>.filter({ hasText })</code> is adding <em>"…who is holding a coffee cup"</em> to narrow the group. <code>.nth(1)</code> is <em>"the second matching person"</em>. Chaining is <em>"within the VIP section, find the manager"</em> — you scope your search to a subsection first, then find the person inside it.</p>`,
  flow: [
    'Start with <code>getByRole()</code> — use the element\'s ARIA role and accessible name',
    'For form controls, prefer <code>getByLabel()</code> — it mirrors how users read the form',
    'Use <code>getByPlaceholder()</code> for unlabelled inputs; <code>getByText()</code> for non-interactive content',
    'Fall back to <code>getByTestId()</code> for elements with no natural role or label',
    'Use CSS / XPath selectors only when semantic locators can\'t reach the element',
    'Chain locators (<code>parent.getByRole(…)</code>) to scope searches inside a component',
    'Narrow multiple matches with <code>.filter({ hasText })</code>, <code>.first()</code>, <code>.last()</code>, or <code>.nth(n)</code>',
  ],
},
// ── 6. Interactions & Actions ─────────────────────────────────
{
  id: 'actions',
  title: 'Interactions & Actions',
  icon: '🖱️',
  explain: `
<p>Before performing any action, Playwright automatically checks that the target element is <strong>attached</strong> to the DOM, <strong>visible</strong>, <strong>stable</strong> (not animating), <strong>enabled</strong>, and <strong>receiving events</strong> (not obscured by another element). These <em>actionability checks</em> run silently on every <code>click()</code>, <code>fill()</code>, <code>check()</code>, and so on — eliminating most race conditions without manual waits. Use <code>{ force: true }</code> to bypass them when you deliberately need to interact with hidden or covered elements.</p>
<p>For text input, <code>fill(text)</code> is the standard method — it clears the field and sets the value atomically, matching how programmatic form population works. Use <code>pressSequentially(text, { delay })</code> when the app has custom key-event listeners that <code>fill()</code> bypasses. <code>press(key)</code> dispatches a single key event (e.g. <code>'Enter'</code>, <code>'Tab'</code>, <code>'Control+A'</code>, <code>'ArrowDown'</code>). For checkboxes use <code>check()</code> / <code>uncheck()</code>; for <code>&lt;select&gt;</code> dropdowns use <code>selectOption()</code>.</p>
<p>Mouse interactions beyond clicking include <code>hover()</code> to reveal dropdown menus or tooltips, <code>dblclick()</code> for double-clicks, <code>click({ button: 'right' })</code> for context menus, and <code>dragTo(target)</code> for drag-and-drop. File inputs are handled with <code>setInputFiles(path)</code>. All actions accept <code>{ timeout }</code> to override the default per-action timeout.</p>`,
  syntax: `// ── Click variants ────────────────────────────────────────────
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
await locator.click({ timeout: 10_000 });`,
  examples: [
    {
      label: 'Filling a complete registration form',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'All fields filled, checkbox checked, country selected, form submitted',
    },
    {
      label: 'Keyboard navigation and shortcuts',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Autocomplete triggered by pressSequentially; Enter selects suggestion',
    },
    {
      label: 'Hover, right-click, and file upload',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Tooltip shown on hover; context menu opened via right-click; file uploaded',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Playwright actions are like a test pilot at a fully instrumented cockpit. Before pressing any button, the system automatically verifies the instrument panel is on, the button is lit up (visible), not currently moving (stable), and reachable (not behind a cover). Only then does it press the button — that's the actionability check. You never have to manually ask "is the panel ready?" before each action.</p>
<p><code>fill()</code> is the autopilot data entry — it clears the old destination and sets the new one precisely in one step. <code>pressSequentially()</code> is the human co-pilot manually dialling in each character — slower, but it triggers every intermediate instrument reaction. <code>press('Enter')</code> is pulling the throttle lever. <code>hover()</code> is putting your hand near a switch to see which indicator lights up.</p>`,
  flow: [
    'Playwright runs <strong>actionability checks</strong> automatically before every action — no manual waits needed',
    'Use <code>fill(text)</code> for text inputs — clears existing content and sets the new value atomically',
    'Use <code>pressSequentially(text, { delay })</code> when the app reacts to individual key events',
    'Use <code>press(key)</code> for Enter, Tab, arrow keys, and keyboard shortcuts like <code>\'Control+A\'</code>',
    'Use <code>check()</code> / <code>uncheck()</code> for checkboxes; <code>selectOption(value)</code> for <code>&lt;select&gt;</code> dropdowns',
    'Use <code>hover()</code> before clicking sub-menu items revealed by hover; <code>click({ button: \'right\' })</code> for context menus',
    'Use <code>setInputFiles(path)</code> for file uploads; <code>dragTo(target)</code> for drag-and-drop',
  ],
},
// ── 7. Assertions with expect() ───────────────────────────────
{
  id: 'assertions',
  title: 'Assertions with expect()',
  icon: '✅',
  explain: `
<p>Playwright's <code>expect()</code> comes in two flavors. <strong>Web-first assertions</strong> accept a <code>Locator</code> or <code>Page</code> and <strong>auto-retry</strong> on a polling interval until the condition passes or a timeout expires. <code>await expect(locator).toBeVisible()</code> will keep re-checking if the element is momentarily hidden during a CSS transition — you never need a manual sleep before an assertion. Always <code>await</code> web-first assertions; without it, the check runs detached and failures go unreported. <strong>Generic assertions</strong> accept plain JS values and evaluate once with no retry, exactly like Jest/Vitest.</p>
<p>Key locator assertions: <code>toBeVisible()</code>, <code>toBeHidden()</code>, <code>toBeEnabled()</code>, <code>toBeDisabled()</code>, <code>toBeChecked()</code>, <code>toBeEditable()</code>, <code>toBeEmpty()</code>, <code>toHaveText()</code> (full match), <code>toContainText()</code> (partial), <code>toHaveValue()</code>, <code>toHaveValues()</code>, <code>toHaveAttribute(name, val)</code>, <code>toHaveClass()</code>, <code>toHaveCSS(prop, val)</code>, <code>toHaveCount(n)</code>. Page assertions include <code>toHaveURL()</code> and <code>toHaveTitle()</code>. All accept a <code>{ timeout }</code> option to override the 5 s default. Negate any assertion with <code>.not</code>.</p>
<p><strong>Soft assertions</strong> (<code>expect.soft()</code>) record a failure without stopping the test, letting you collect every broken check in one run — all accumulated failures are reported together at the end. For custom async conditions, <code>expect.poll(fn)</code> polls the function until its return value satisfies the matcher — use it when there is no locator to observe (e.g. polling a REST endpoint).</p>`,
  syntax: `// ── Locator assertions (auto-retry) ──────────────────────────
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
expect(str).toContain('hello');`,
  examples: [
    {
      label: 'Core web-first assertions on a login flow',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'All assertions auto-retry; no manual waits needed',
    },
    {
      label: 'Soft assertions — collect all failures at once',
      code: `import { test, expect } from '@playwright/test';

test('profile page completeness check', async ({ page }) => {
  await page.goto('/profile');

  // None of these stop the test on failure
  await expect.soft(page.getByTestId('avatar')).toBeVisible();
  await expect.soft(page.getByTestId('display-name')).not.toBeEmpty();
  await expect.soft(page.getByTestId('bio')).toContainText('engineer');
  await expect.soft(page.getByRole('link', { name: 'Edit profile' })).toBeVisible();

  // All soft failures aggregated and reported here
});`,
      out: 'All checks run regardless of failures; report shows every broken assertion',
    },
    {
      label: 'expect.poll() for a custom async condition',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'poll() retries at increasing intervals until status === "completed"',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Web-first assertions are like a patient security guard checking an ID: they don't glance once and immediately turn you away — they watch until the ID is fully presented, then verify it. If you're still pulling it out of your wallet (the page is mid-animation), they wait. Only after the timeout do they say "sorry, took too long." Generic assertions are like a vending machine: insert coin, get result immediately, no waiting.</p>
<p><code>expect.soft()</code> is a quality inspector walking the production line with a clipboard: they mark every defect they find but keep walking — they don't stop the line at the first flaw. At the end of the shift they hand you the full defect report. <code>expect.poll()</code> is refreshing the delivery tracking page repeatedly — you have no direct view of the package, so you call the API again and again until it says "delivered".</p>`,
  flow: [
    'Pass a <strong>Locator or Page</strong> to get web-first auto-retrying assertions; pass a <strong>plain value</strong> for one-shot generic assertions',
    'Always <code>await</code> web-first assertions — without it the check runs detached and failures go unreported',
    'Use <code>toHaveText()</code> for full text match and <code>toContainText()</code> for partial; both accept strings or RegExp',
    'Use <code>.not</code> to negate any assertion: <code>expect(locator).not.toBeVisible()</code>',
    'Override the default 5 s retry window with <code>{ timeout: ms }</code> on any web-first assertion',
    'Use <code>expect.soft()</code> to collect all failures in one test run instead of stopping at the first failure',
    'Use <code>expect.poll(fn)</code> when you need to retry a custom async function (e.g. polling an API) rather than observing a locator',
  ],
},
// ── 8. Test Configuration ─────────────────────────────────────
{
  id: 'config',
  title: 'Test Configuration',
  icon: '⚙️',
  explain: `
<p>All Playwright configuration lives in <code>playwright.config.ts</code> at the project root, exported via <code>defineConfig()</code>. The <strong><code>use</code> block</strong> sets browser-level defaults for every test: <code>baseURL</code> (so tests can use relative paths like <code>page.goto('/login')</code>), <code>headless</code>, <code>viewport</code>, <code>trace</code>, <code>screenshot</code>, and <code>video</code>. The <strong><code>projects</code> array</strong> defines which browsers and devices tests run against — each project inherits <code>use</code> but can add its own overrides. Spreading <code>...devices['Desktop Chrome']</code> loads Playwright's built-in browser and viewport presets.</p>
<p><code>timeout</code> is the per-test wall-clock limit; <code>expect.timeout</code> is the auto-retry window for web-first assertions (default 5 s). <code>retries</code> re-runs a failed test up to N times — the standard pattern is <code>process.env.CI ? 2 : 0</code> so local runs fail fast. <code>workers</code> controls concurrency; <code>fullyParallel: true</code> runs tests within the same file in parallel (without it, only different files run in parallel). Setting <code>workers: 1</code> is useful for debugging flaky sequential state.</p>
<p>The <code>webServer</code> option starts a local dev server before the suite and tears it down after — no separate terminal needed. Use <code>reuseExistingServer: !process.env.CI</code> to skip the startup if a server is already running locally. <code>globalSetup</code> and <code>globalTeardown</code> point to TypeScript files that run once for the entire suite — the canonical use case is authenticating once and saving the browser storage state so individual tests can skip the login flow.</p>`,
  syntax: `import { defineConfig, devices } from '@playwright/test';

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
});`,
  examples: [
    {
      label: 'Minimal config with baseURL and two browser projects',
      code: `import { defineConfig, devices } from '@playwright/test';

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
});`,
      out: 'Tests run in Chromium and WebKit; dev server starts automatically',
    },
    {
      label: 'CI vs local tuning with retries and workers',
      code: `import { defineConfig } from '@playwright/test';

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
});`,
      out: 'CI gets retries + HTML report; local gets fast dot output',
    },
    {
      label: 'globalSetup for once-per-suite authentication',
      code: `// global-setup.ts
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
// globalSetup: './global-setup.ts',`,
      out: 'Login runs once; auth cookies reused in all tests via storageState',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p><code>playwright.config.ts</code> is like a flight operations manual. The <code>use</code> block is the standard operating procedure applied to every flight — default cruising altitude, cabin pressure, safety protocol. <code>projects</code> are different aircraft types: the A320 (Chromium), the 737 (Firefox), and the A380 (WebKit) all follow the same SOP but have model-specific overrides. <code>retries</code> is the emergency protocol — attempt the procedure again if the first try fails; in a real flight (CI), you retry twice; in a simulator (local dev) you don't bother.</p>
<p><code>webServer</code> is the ground crew that fuels and pre-positions the aircraft before every flight — no pilot should have to start the engines manually. <code>globalSetup</code> is the pre-season safety training that runs once before the entire schedule: authenticate an admin user, seed the database, prepare the gate. Every individual test (flight) benefits from that preparation without repeating it.</p>`,
  flow: [
    '<code>playwright.config.ts</code> exports a <code>defineConfig()</code> object at the project root',
    'The <code>use</code> block sets browser defaults for all tests: <code>baseURL</code>, <code>headless</code>, <code>viewport</code>, <code>trace</code>, <code>screenshot</code>, <code>video</code>',
    'The <code>projects</code> array defines target browsers/devices — each spreads a <code>devices[…]</code> preset and can override <code>use</code>',
    '<code>timeout</code> limits per-test wall-clock time; <code>expect.timeout</code> controls how long assertions auto-retry',
    'Use <code>retries: process.env.CI ? 2 : 0</code> and <code>workers: process.env.CI ? 2 : undefined</code> to tune CI vs local behavior',
    '<code>webServer</code> starts your dev server before tests and shuts it down after; <code>reuseExistingServer: !process.env.CI</code> avoids double-starts locally',
    '<code>globalSetup</code> runs once before all tests — the canonical pattern is logging in once and saving <code>storageState</code> for all tests to reuse',
  ],
},
// ── 9. Fixtures & Hooks ───────────────────────────────────────
{
  id: 'fixtures',
  title: 'Fixtures & Hooks',
  icon: '🔩',
  explain: `
<p>Playwright's fixture system is its most powerful organisational tool. A fixture is a named function that sets up a resource before a test and tears it down automatically afterward. The built-in fixtures — <code>page</code>, <code>browser</code>, <code>context</code>, <code>browserName</code>, and <code>request</code> — are available in every test with no configuration. Tests declare which fixtures they need through object destructuring in the callback signature: <code>async ({ page, request }) =&gt; { … }</code>. Playwright only sets up the fixtures a test actually requests.</p>
<p>Custom fixtures are created with <code>test.extend()</code>. The fixture function receives any fixtures it depends on plus a special <code>use</code> callback. Calling <code>await use(value)</code> hands the value to the test and pauses there; any code <em>after</em> <code>use()</code> runs as teardown once the test finishes. Fixture <strong>scope</strong> controls lifetime: <code>'test'</code> (default) creates a fresh instance per test; <code>'worker'</code> shares one instance across all tests running in the same worker process (ideal for expensive setups like database connections); <code>'file'</code> shares across tests in one spec file. Setting <code>auto: true</code> runs the fixture for every test even if it isn't requested.</p>
<p>Traditional hooks (<code>beforeEach</code>, <code>afterEach</code>, <code>beforeAll</code>, <code>afterAll</code>) work inside <code>test.describe()</code> blocks for file-scoped setup. The key rule: prefer fixtures over hooks when the setup is reused across multiple spec files — fixtures compose naturally and are tree-shaken. Use <code>test.use({ … })</code> at the top of a file or describe block to override a fixture's value for that scope only.</p>`,
  syntax: `// ── Built-in fixtures ────────────────────────────────────────
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
});`,
  examples: [
    {
      label: 'Custom fixture: logged-in page',
      code: `import { test as base, expect } from '@playwright/test';

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
});`,
      out: 'Setup and teardown are co-located in the fixture; test body stays clean',
    },
    {
      label: 'Worker-scoped database fixture',
      code: `import { test as base } from '@playwright/test';

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
});`,
      out: 'Database connects once per worker — no reconnect overhead per test',
    },
    {
      label: 'Auto fixture + describe-scoped hooks',
      code: `import { test as base, expect } from '@playwright/test';

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
});`,
      out: 'auto: true runs frozenTime for every test without explicit declaration',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Fixtures are like hotel room service. When you check into a room (a test), towels (<code>page</code>), pillows (<code>context</code>), and Wi-Fi (<code>browser</code>) are already waiting — you didn't set them up, the hotel (Playwright) did. Custom fixtures are like ordering a specific item: room service delivers it before you need it and quietly removes it after you check out. <code>await use(value)</code> is the moment you receive the delivery; code after it runs when they collect it at checkout.</p>
<p>Worker-scoped fixtures are like the hotel lobby's shared coffee machine — one instance for everyone staying in the building, not one per room. You wouldn't brew a fresh pot for each guest. <code>auto: true</code> is like having a no-touch ambient thermostat that adjusts the room temperature for every guest without them requesting it. Hooks (<code>beforeEach</code>) are like the housekeeper who checks the room before each guest — useful, but harder to share across hotel chains (files).</p>`,
  flow: [
    'Built-in fixtures (<code>page</code>, <code>context</code>, <code>browser</code>, <code>request</code>, <code>browserName</code>) are destructured in the test callback — no imports needed',
    'Create custom fixtures with <code>const test = base.extend({ … })</code> — always import the extended <code>test</code>, not the base',
    'Inside the fixture: setup code runs first, then <code>await use(value)</code> gives the value to the test; teardown code goes <em>after</em> <code>use()</code>',
    'Default <code>scope: \'test\'</code> creates a fresh instance per test; <code>scope: \'worker\'</code> shares one instance across all tests in a worker',
    'Set <code>auto: true</code> to run a fixture for every test without the test explicitly requesting it',
    'Use <code>test.use({ storageState: \'auth.json\' })</code> at file or describe level to override a fixture for that scope',
    'Prefer fixtures over <code>beforeEach</code> for cross-file reuse; use hooks for logic that is genuinely local to one spec file',
  ],
},
// ── 10. API Testing ───────────────────────────────────────────
{
  id: 'api',
  title: 'API Testing',
  icon: '🔌',
  explain: `
<p>Playwright includes a built-in HTTP client called <code>APIRequestContext</code> — no axios, node-fetch, or supertest needed. The <code>request</code> fixture in every test gives you this client pre-configured with your <code>baseURL</code> and any <code>extraHTTPHeaders</code> from <code>playwright.config.ts</code>. You can use it for three purposes: <strong>pure API tests</strong> that validate REST or GraphQL endpoints directly; <strong>test setup/teardown</strong> that creates and deletes data faster than navigating the UI; and <strong>hybrid tests</strong> that seed state through the API and then assert the UI reflects it correctly.</p>
<p>Every request method returns an <code>APIResponse</code>. Call <code>response.ok()</code> for a quick true/false (status 200–299), <code>response.status()</code> for the exact code, <code>response.json()</code> to parse the body as JSON, and <code>response.text()</code> for raw text. Use <code>await expect(response).toBeOK()</code> as the assertion form. Pass request bodies as <code>data: { … }</code> for JSON, <code>form: { … }</code> for <code>application/x-www-form-urlencoded</code>, or <code>multipart: { … }</code> for file uploads. Query string parameters go in <code>params: { … }</code>.</p>
<p><code>page.request</code> is the same HTTP client but shares the browser's cookie jar — useful when the app authenticates via browser session cookies and you want to make API calls as that logged-in user. <code>request.newContext({ baseURL, extraHTTPHeaders })</code> creates a completely standalone client with its own session — the right choice for <code>globalSetup</code> where no browser exists yet.</p>`,
  syntax: `// ── GET ──────────────────────────────────────────────────────
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
await api.dispose();          // release when done`,
  examples: [
    {
      label: 'Pure API test: create, read, delete a resource',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Full CRUD cycle tested directly against the API — no browser needed',
    },
    {
      label: 'API seed + UI assertion hybrid test',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'API creates data instantly; UI test only asserts the display layer',
    },
    {
      label: 'Standalone API context in globalSetup',
      code: `// global-setup.ts
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
}`,
      out: 'globalSetup uses a standalone API context — no browser required',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
<text x="210" y="178" fill="#44445a" font-size="8.5" text-anchor="middle">data: { json }  ·  form: { key: val }  ·  params: { q: \'search\' }  ·  multipart: { … }</text>
<text x="210" y="194" fill="#44445a" font-size="8.5" text-anchor="middle">request.newContext({ baseURL, extraHTTPHeaders }) — standalone, dispose() when done</text>
</svg>`,
  analogy: `<p>The <code>request</code> fixture is a programmable courier service. You hand it a parcel (request body) and an address (URL), and it delivers it and brings back the receipt (response). Unlike the browser — which renders HTML, applies CSS, runs JavaScript, and manages a visual viewport — the API client is a lean, direct messenger with no overhead. It's 10× faster for setup tasks because it skips all the rendering work.</p>
<p><code>page.request</code> is the same courier but wearing the browser's uniform. Because the server sees the same credentials (cookies) as the logged-in browser, it treats the request as coming from the authenticated user. <code>request.newContext()</code> is hiring an entirely separate courier agency with its own credentials and tracking number — completely independent of any existing browser session. Always call <code>dispose()</code> when you're done so the agency releases its connections.</p>`,
  flow: [
    'The <code>request</code> fixture is available in every test — use it for HTTP calls without opening a browser',
    'Call <code>request.get/post/put/patch/delete(url, options)</code> — pass JSON bodies in <code>data: { … }</code>, query params in <code>params: { … }</code>',
    'Inspect the response: <code>response.ok()</code> for 200–299, <code>response.status()</code> for the exact code, <code>await response.json()</code> for the body',
    'Use <code>await expect(response).toBeOK()</code> as the assertion form in test files',
    'Use <code>page.request</code> when you need the browser\'s cookie session for authenticated API calls',
    'Use the API in <code>beforeEach</code> or fixtures to seed test data quickly; clean up in teardown with <code>DELETE</code>',
    'For <code>globalSetup</code>, create a standalone client with <code>await request.newContext({ baseURL, extraHTTPHeaders })</code> and call <code>dispose()</code> when done',
  ],
},
// ── 11. Network Interception ──────────────────────────────────
{
  id: 'network',
  title: 'Network Interception',
  icon: '🕸️',
  explain: `
<p><code>page.route(pattern, handler)</code> places a handler between the browser and the network. Every request whose URL matches the pattern stops at your handler before leaving the browser. Inside the handler you receive a <code>Route</code> object and must call exactly one of: <strong><code>route.fulfill()</code></strong> — return a mocked response (status, headers, body, JSON); <strong><code>route.abort()</code></strong> — block the request so the browser sees a network error; or <strong><code>route.continue()</code></strong> — forward it unchanged (or with modified headers/body). Forgetting to call one causes the request to hang until the test timeout. Always register routes <em>before</em> calling <code>page.goto()</code> so the very first request is intercepted.</p>
<p>For a "spy-and-modify" pattern use <strong><code>route.fetch()</code></strong>: Playwright sends the request to the real server, resolves the response, and hands it back to you so you can modify the body before calling <code>route.fulfill()</code>. URL patterns accept glob strings (<code>**/api/users**</code>), exact strings, or <code>RegExp</code>. <code>context.route()</code> works identically but applies to every page in the browser context, including newly opened ones. Remove a handler with <code>page.unroute(pattern)</code>. Multiple routes matching the same URL fire in <em>LIFO</em> order (last registered wins).</p>
<p>For passive inspection without intercepting, use the event listeners <code>page.on('request', fn)</code> and <code>page.on('response', fn)</code> — they receive the request/response objects but cannot alter them. <code>page.routeFromHAR('recorded.har')</code> replays a previously captured HTTP Archive file, letting you mock an entire API surface without hand-coding responses.</p>`,
  syntax: `// ── Register before page.goto() ──────────────────────────────
await page.route('**/api/users', route => route.fulfill({
  status: 200,
  contentType: 'application/json',
  json: [{ id: 1, name: 'Alice' }],
}));
await page.goto('/');

// ── Block requests (ads, analytics, images) ───────────────────
await page.route(/google-analytics\.com/, route => route.abort());
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
await page.routeFromHAR('fixtures/api.har', { url: '**/api/**' });`,
  examples: [
    {
      label: 'Mock an API response to test a specific UI state',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Both states tested without real server errors or empty DB',
    },
    {
      label: 'Fetch real response and inject extra data',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Real server data augmented with a synthetic record for targeted testing',
    },
    {
      label: 'Passive monitoring and blocking analytics',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: 'Analytics blocked; API call list verified without a network proxy',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p><code>page.route()</code> is a traffic cop standing between your browser and the internet. Every car (request) whose licence plate matches your pattern stops at the checkpoint. The cop has three choices: stamp a fake ID card and send the car home (<code>fulfill</code> — mock response); lower the barrier and turn it back (<code>abort</code> — network error); or wave it through to the real destination (<code>continue</code>). The <em>fetch + fulfill</em> pattern is the cop escorting the car to the real destination, opening the returned parcel, repackaging it with a surprise extra item, then delivering it.</p>
<p><code>context.route()</code> is the same cop but stationed at the city's main highway — covering all traffic from all browser tabs, not just one road. <code>page.on('request')</code> is a surveillance camera: it records every car that passes but cannot stop any of them.</p>`,
  flow: [
    'Register routes with <code>page.route(pattern, handler)</code> <em>before</em> <code>page.goto()</code> to intercept from the very first request',
    'Inside the handler call exactly one of: <code>route.fulfill()</code> (mock), <code>route.abort()</code> (block), or <code>route.continue()</code> (pass through) — forgetting causes a timeout',
    'Pass <code>json: data</code> to <code>fulfill()</code> for automatic JSON serialisation; use <code>status</code> and <code>body</code> for error simulation',
    'Use <code>await route.fetch()</code> to forward the request to the real server and receive the real response for modification before calling <code>fulfill()</code>',
    'Patterns accept glob strings (<code>**/api/**</code>), exact strings, or <code>RegExp</code> — test your pattern against real URLs before relying on it',
    'Use <code>context.route()</code> for context-wide interception covering all pages; use <code>page.on(\'request\')</code> / <code>page.on(\'response\')</code> for passive read-only monitoring',
    'Remove a handler with <code>page.unroute(pattern)</code>; multiple handlers matching the same URL fire in LIFO order',
  ],
},
// ── 12. Screenshots, Videos & Traces ──────────────────────────
{
  id: 'visual',
  title: 'Screenshots, Videos & Traces',
  icon: '📸',
  explain: `
<p>Playwright provides three complementary tools for debugging and visual verification. <strong>Screenshots</strong> save a PNG of the page or a specific element at a point in time — useful for ad-hoc debugging or as golden baselines for visual regression. <code>expect(page).toHaveScreenshot('name.png')</code> creates a baseline on first run and compares pixel-by-pixel on subsequent runs (with a configurable tolerance). Re-generate baselines with <code>npx playwright test --update-snapshots</code>. Baselines are committed to version control so CI can detect regressions.</p>
<p><strong>Videos</strong> record the entire browser session as a WebM file. The recommended config is <code>video: 'on-first-retry'</code> — only record when a test is retried, keeping disk usage low while still capturing evidence of failures. Access the file after the test with <code>page.video()?.saveAs('path.webm')</code>. <strong>Traces</strong> are the most powerful debugging artifact: a single <code>.zip</code> containing DOM snapshots at every action, a network request waterfall, console messages, and timestamped screenshots. Open with <code>npx playwright show-trace trace.zip</code> or drag onto <code>trace.playwright.dev</code>.</p>
<p>All three can be configured globally in <code>playwright.config.ts</code> via the <code>use</code> block, or started/stopped manually with <code>context.tracing.start()</code> and <code>context.tracing.stop({ path })</code>. The four recording modes are: <code>'off'</code> (never), <code>'on'</code> (always), <code>'on-first-retry'</code> (record only when retried), and <code>'retain-on-failure'</code> (record always but delete if the test passes).</p>`,
  syntax: `// ── Screenshots ───────────────────────────────────────────────
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
// Or:   drag trace.zip onto trace.playwright.dev`,
  examples: [
    {
      label: 'Visual regression: baseline creation and comparison',
      code: `import { test, expect } from '@playwright/test';

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
// Update:    npx playwright test --update-snapshots`,
      out: 'Baselines created on first run; diffs reported with an overlay image on failure',
    },
    {
      label: 'Manual trace for a specific failing scenario',
      code: `import { test } from '@playwright/test';

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

// View: npx playwright show-trace test-results/checkout-trace.zip`,
      out: 'Trace zip contains DOM snapshots, network timeline, console logs, and screenshots',
    },
    {
      label: 'Screenshot on demand with clip and element capture',
      code: `import { test } from '@playwright/test';

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
});`,
      out: 'Three different screenshot modes: full page, clipped region, single element',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
<text x="210" y="79" fill="#888" font-size="8" text-anchor="middle">video: \'on-first-retry\'</text>
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
</svg>`,
  analogy: `<p>Think of a crime scene investigation. <strong>Screenshots</strong> are the crime scene photographs — a snapshot of exactly what things looked like at a precise moment. <strong>Videos</strong> are the CCTV recording — continuous footage from start to finish, showing every movement. <strong>Traces</strong> are the full forensics kit: not just photographs but also fingerprints (DOM snapshots you can hover to inspect), every phone call made (network requests with full payloads), every note left behind (console messages), and a precise event timeline. The Trace Viewer is the detective's evidence board where you replay the scene step-by-step and jump to any point in time.</p>
<p>Visual regression with <code>toHaveScreenshot()</code> is like a building inspector who photographs each floor on opening day, locks the photos in a vault, and returns on subsequent visits to compare: even one misplaced tile fails the inspection. <code>--update-snapshots</code> is giving the inspector a new set of reference photos after a deliberate renovation.</p>`,
  flow: [
    'Use <code>page.screenshot({ path: \'debug.png\' })</code> for ad-hoc debugging; <code>locator.screenshot()</code> to capture a single element',
    'Use <code>expect(page).toHaveScreenshot(\'name.png\')</code> for visual regression — first run creates the baseline, subsequent runs compare it',
    'Pass <code>mask: [locator]</code> and <code>maxDiffPixels</code> to toHaveScreenshot() to handle dynamic content and tolerate minor rendering differences',
    'Run <code>npx playwright test --update-snapshots</code> to regenerate baselines after deliberate UI changes; commit the baseline files to VCS',
    'Configure <code>video: \'on-first-retry\'</code> and <code>trace: \'on-first-retry\'</code> in the config <code>use</code> block for CI-friendly artifact capture',
    'For manual control call <code>context.tracing.start({ screenshots, snapshots })</code> before actions and <code>context.tracing.stop({ path: \'trace.zip\' })</code> to save',
    'Open a trace with <code>npx playwright show-trace trace.zip</code> to see DOM snapshots, network waterfall, console logs, and a full action timeline',
  ],
},
// ── 13. Page Object Model ─────────────────────────────────────
{
  id: 'pom',
  title: 'Page Object Model',
  icon: '🏗️',
  explain: `
<p>The Page Object Model (POM) is a design pattern that encapsulates a page's locators and user interactions into a reusable TypeScript class. Instead of repeating <code>page.getByRole('button', { name: 'Sign in' })</code> across dozens of tests, you create a <code>LoginPage</code> class with a <code>signIn(email, password)</code> method. When the UI changes — say, the button label becomes "Log in" — you fix it in one class and every test is automatically correct. Tests become short, readable, and resilient: they describe <em>what</em> the user does, not <em>how</em> the DOM is structured.</p>
<p>A page object has three parts: a <strong>constructor</strong> that receives <code>page</code> (and optionally <code>context</code> or <code>request</code>); <strong>locator properties</strong> declared as <code>readonly</code> using <code>page.getByRole(…)</code> etc. — these are lazy and re-evaluated on every access, so they always reflect the current DOM; and <strong>action methods</strong> that group related interactions into meaningful steps. The golden rule is: <em>actions in the page object, assertions in the test</em>. Page objects are action libraries, not validators — mixing in <code>expect()</code> calls makes them harder to reuse and debug.</p>
<p>Page objects pair perfectly with Playwright's fixture system. Define a fixture that <code>new</code>s the page object and passes it via <code>use()</code>, then any test in the suite can request it by name. For complex UIs, break your page objects into <strong>component objects</strong> — a <code>NavigationBar</code>, a <code>DataTable</code>, a <code>Modal</code> — and compose them inside the full page object. This mirrors how real UIs are built from components.</p>`,
  syntax: `// ── pages/LoginPage.ts ───────────────────────────────────────
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
});`,
  examples: [
    {
      label: 'Full LoginPage class with fixture',
      code: `// pages/LoginPage.ts
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
});`,
      out: 'All DOM details hidden in the page object; test reads like a user story',
    },
    {
      label: 'Nested component objects',
      code: `// components/Header.ts
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
});`,
      out: 'Header component is reused across DashboardPage, ProfilePage, and SettingsPage',
    },
    {
      label: 'Multi-page object fixture for an entire user journey',
      code: `// fixtures/pages.ts
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
});`,
      out: 'Multi-step journey expressed as readable page object method calls',
    },
  ],
  svgHTML: `<svg viewBox="0 0 420 215" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;width:100%;max-width:420px">
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
</svg>`,
  analogy: `<p>Without POM, your tests are like a tourist who memorises exact street-level directions to every destination: "turn left at the red building, go three blocks, enter the third door on the right." When the city installs a new building that shifts the numbering, all 50 sets of directions break. With POM, you hire a <em>tour guide</em> (the page object). The guide knows where everything is and how to get there — you just say <code>await loginPage.signIn(email, password)</code>. When the sign-in button moves, only the guide needs updating, not every tourist who used those directions.</p>
<p>The <code>readonly</code> locator properties are like the guide's map — it's always the latest edition, not a photocopy from last year. Component objects are like specialised sub-guides: the hotel lobby guide handles check-in, the restaurant guide handles dinner, and the city guide composes them all. You don't ask the hotel guide how to find a restaurant.</p>`,
  flow: [
    'Create one class per page or feature with a <code>constructor(private readonly page: Page)</code>',
    'Declare locators as <code>readonly</code> class properties using <code>page.getByRole(…)</code> — they are lazy and re-evaluated on each access',
    'Define <code>async</code> action methods that group related interactions into meaningful steps (<code>goto()</code>, <code>signIn()</code>, <code>placeOrder()</code>)',
    'Keep <code>expect()</code> assertions in the test, not in the page object — POs are action libraries, not validators',
    'Integrate with fixtures: create a fixture that <code>new</code>s the page object and passes it via <code>use()</code> so tests can request it by name',
    'For shared UI components (header, modal, table), create component objects and compose them as properties of the full page object',
    'When the UI changes, update one class — every test that uses it is automatically correct',
  ],
},
{
  id: 'auth',
  title: 'Authentication & State',
  icon: '🔐',

  explain: `
<p><strong>Authentication & State</strong> management is one of Playwright's killer features. Instead of logging in before <em>every single test</em>, Playwright lets you save a browser context's cookies, localStorage, and sessionStorage to a JSON file — then reload that state instantly in any subsequent test or project. A login that takes 2 seconds per test costs 200 seconds on 100 tests; with state reuse it costs 2 seconds total.</p>

<p>The recommended pattern has three parts. First, a dedicated <strong>auth setup project</strong> (often <code>auth.setup.ts</code>) logs in once and calls <code>await page.context().storageState({ path: 'playwright/.auth/user.json' })</code> to persist the session. Second, real test projects list that setup project in their <code>dependencies</code> array in <code>playwright.config.ts</code>, so Playwright runs auth first and test projects only start after the state file exists. Third, each test project sets <code>storageState: 'playwright/.auth/user.json'</code> in its <code>use</code> block, so every new browser context starts pre-authenticated.</p>

<p>Beyond cookies and storage, Playwright handles HTTP Basic Auth via the <code>httpCredentials</code> config option, supports multiple roles (admin, editor, viewer) by maintaining multiple state files, and gives you fine-grained control over cookies, localStorage, and sessionStorage through <code>context.cookies()</code>, <code>context.addCookies()</code>, and <code>page.evaluate(() => localStorage.setItem(…))</code>. This makes end-to-end tests of role-based access control straightforward.</p>
`,

  syntax: `// ── 1. Save auth state after login ──────────────────────────────
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
`,

  examples: [
    {
      label: 'Basic login & save state',
      code: `// auth.setup.ts
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
});`,
      out: '→ playwright/.auth/alice.json created with cookies & localStorage',
    },
    {
      label: 'Multiple roles in parallel projects',
      code: `// playwright.config.ts
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
});`,
      out: '→ User and admin tests run in parallel, each with correct session',
    },
    {
      label: 'API-based login (no UI, fastest)',
      code: `// auth.setup.ts
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
});`,
      out: '→ Login completes via API in ~100ms vs 1-2 s through the UI',
    },
  ],

  svgHTML: `<svg viewBox="0 0 780 370" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="13">
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
</svg>`,

  analogy: `<p>Think of <strong>storageState</strong> like a <em>hotel key card</em>. The front desk (auth setup) does the identity check once and programs a key card for you. Every time you return to your room (each test), you just tap the card — no re-checking ID. The key card (JSON file) carries all the access rights (cookies, tokens) the hotel system recognises. Different guests (admin, regular user) get different key cards, and the hotel can revoke or replace them at any time.</p>`,

  flow: [
    'auth.setup.ts navigates to the login page and fills credentials',
    'Successful login triggers a redirect — waitForURL confirms auth succeeded',
    'context.storageState() serialises cookies + localStorage to playwright/.auth/user.json',
    'playwright.config.ts lists the setup project in dependencies of real test projects',
    'Before real tests start, Playwright runs the setup project to generate the state file',
    'Each new browser context in test projects loads the state file automatically',
    'Tests begin already authenticated — no login step needed in individual tests',
  ],
},
{
  id: 'parallel',
  title: 'Parallel Execution',
  icon: '⚡',

  explain: `
<p><strong>Parallel Execution</strong> is how Playwright compresses a 10-minute test suite into a 2-minute CI check. Playwright uses <em>workers</em> — independent Node.js processes, each with its own browser — to run tests concurrently. By default, test files run in parallel (each file gets its own worker) but tests <em>within</em> a file run serially. Setting <code>fullyParallel: true</code> breaks that file-level grouping and runs every individual test concurrently, which is the fastest mode when tests have no shared state.</p>

<p>The <code>workers</code> config option (or <code>--workers N</code> CLI flag) controls how many parallel workers run simultaneously. The default is half the number of logical CPU cores. <code>test.describe.parallel()</code> opts a describe block into parallel within its file; <code>test.describe.serial()</code> forces sequential within a block even when fullyParallel is on — useful for ordered flows like "create then edit then delete". Worker-scoped fixtures (<code>scope: 'worker'</code>) are created once per worker and shared across all tests in that worker, enabling expensive setup (like a signed-in browser context) to be amortised.</p>

<p>For very large suites, <strong>sharding</strong> splits the test suite across multiple CI machines: each machine runs <code>npx playwright test --shard=1/3</code> (or 2/3, 3/3). Reports from all shards are merged with <code>npx playwright merge-reports</code> into a single HTML report. Combining sharding with <code>--reporter=blob</code> on each shard is the standard pattern for distributed CI at scale.</p>
`,

  syntax: `// ── playwright.config.ts ─────────────────────────────────────
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
`,

  examples: [
    {
      label: 'fullyParallel + workers config',
      code: `// playwright.config.ts
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
});`,
      out: '→ Each test runs in parallel across chromium and firefox workers',
    },
    {
      label: 'serial describe for ordered flows',
      code: `import { test, expect } from '@playwright/test';

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
});`,
      out: '→ Create → Edit → Delete runs in guaranteed sequence even with fullyParallel',
    },
    {
      label: 'Sharding across CI machines',
      code: `# GitHub Actions parallel sharding example
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
        with: { name: html-report, path: playwright-report/ }`,
      out: '→ Suite split across 3 machines, merged into one HTML report',
    },
  ],

  svgHTML: `<svg viewBox="0 0 780 380" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="12">
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
</svg>`,

  analogy: `<p>Think of parallel workers like <em>checkout lanes at a supermarket</em>. One cashier (single worker) serves every customer in sequence — the queue grows long. Open four lanes (four workers) and customers are served simultaneously — the same total work finishes in a quarter of the time. Sharding adds a second <em>store</em> entirely: you split the customer list between two stores, both run at full speed in parallel, and at closing time you merge their receipts into one daily report. <code>describe.serial</code> is the occasional express lane for items that must be rung up in order (create before pay, pay before bag).</p>`,

  flow: [
    'Playwright launches N worker processes (each an isolated Node.js + browser instance)',
    'Test files (or individual tests with fullyParallel) are distributed across available workers',
    'Each worker runs its assigned tests independently — no shared memory between workers',
    'Worker-scoped fixtures are created once per worker and shared by all tests in that worker',
    'describe.serial groups force sequential order within a worker regardless of fullyParallel',
    'With sharding, each CI machine runs a subset (--shard=M/N) and emits a blob report',
    'npx playwright merge-reports combines all shard blobs into a single HTML report',
  ],
},
];
