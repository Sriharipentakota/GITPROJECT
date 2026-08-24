export interface MissionTask {
  id: number;
  title: string;
  description: string;
  hint: string;
  validation: string;
}

export interface Mission {
  id: string;
  title: string;
  path: 'javascript' | 'playwright' | 'tosca' | 'typescript';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  tags: string[];
  icon: string;
  scenario: string;
  description: string;
  objectives: string[];
  requiredSkills: string[];
  tasks: MissionTask[];
  completionCriteria: string;
  solutionNotes: string;
}

export const MISSIONS: Mission[] = [
  // ─── JavaScript Missions ───────────────────────────────────────────────────
  {
    id: 'js-async-workflow',
    title: 'Orchestrate Async Operations',
    path: 'javascript',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
    tags: ['async', 'promises', 'parallel', 'timeout', 'retry'],
    icon: '⚡',
    scenario:
      'Your test suite must perform several async setup steps before any test can run: fetching the authenticated user profile, obtaining a short-lived login token, and loading environment-specific configuration. These calls are currently executed sequentially, causing a 6-second setup delay. Your mission is to parallelise them safely, add timeout guards so a slow service never blocks the suite indefinitely, and implement retry logic for transient failures.',
    description:
      'Refactor a sequential async test-setup routine into a robust, parallel workflow using Promise.all, AbortController-based timeouts, and an exponential-backoff retry helper.',
    objectives: [
      'Execute independent async calls in parallel using Promise.all to reduce total setup time',
      'Wrap each fetch with a configurable timeout so no single call can block the suite',
      'Implement an exponential-backoff retry helper that retries up to N times on network errors',
      'Surface clear, actionable error messages when setup fails after all retries are exhausted',
    ],
    requiredSkills: ['Promises and async/await', 'Error handling', 'AbortController / fetch API'],
    tasks: [
      {
        id: 1,
        title: 'Fetch setup data in parallel with Promise.all',
        description:
          'Replace the sequential await chain in setupTestEnvironment() with a single Promise.all call that concurrently fetches the user profile (/api/user), the auth token (/api/token), and the config (/api/config). Destructure the results and return them as { user, token, config }.',
        hint: 'Call all three fetch functions before awaiting any of them: `const [user, token, config] = await Promise.all([fetchUser(), fetchToken(), fetchConfig()]);`',
        validation:
          'The three network requests must overlap in time (check DevTools waterfall). The return object must contain valid user, token, and config shapes.',
      },
      {
        id: 2,
        title: 'Handle race conditions with Promise.race',
        description:
          'Some environments return stale config from a secondary replica. Add a withFallback(primary, secondary, timeoutMs) utility that races the primary call against the secondary. If primary resolves first, use its value; if secondary wins and primary is still pending after timeoutMs, use the secondary value as a fallback.',
        hint: 'Use Promise.race([primary, delayedSecondary]) where delayedSecondary only starts after a brief delay so primary gets first priority.',
        validation:
          'When the primary resolves in under timeoutMs, its value is always used. When the primary is artificially slowed past timeoutMs, the secondary value is returned without throwing.',
      },
      {
        id: 3,
        title: 'Add per-call timeout guards',
        description:
          'Wrap each individual fetch call with a withTimeout(promise, ms, label) helper. The helper should race the original promise against a rejection that fires after ms milliseconds, throwing a descriptive TimeoutError("label timed out after Xms") so logs clearly identify which service was slow.',
        hint: 'Create a timeout promise with `new Promise((_, reject) => setTimeout(() => reject(new TimeoutError(...)), ms))` and race it against the input promise.',
        validation:
          'When a mock fetch is delayed beyond the configured timeout, withTimeout throws a TimeoutError containing the label and duration. Calls that resolve in time pass through unchanged.',
      },
      {
        id: 4,
        title: 'Implement exponential-backoff retry logic',
        description:
          'Write a withRetry(fn, { retries, baseDelayMs, shouldRetry }) helper. It should call fn(), and on failure, wait baseDelayMs * 2^attempt milliseconds before retrying, up to retries times. The optional shouldRetry predicate lets callers skip retry for non-transient errors (e.g. 401 Unauthorized).',
        hint: 'Track the attempt count in a loop. Calculate delay as `baseDelayMs * Math.pow(2, attempt)`. Use `await new Promise(r => setTimeout(r, delay))` to wait between retries.',
        validation:
          'A fn that fails twice then succeeds is called exactly 3 times. A fn that always fails is called retries + 1 times total. A 401 error with a shouldRetry guard that returns false causes an immediate throw without retrying.',
      },
      {
        id: 5,
        title: 'Compose the full resilient setup function',
        description:
          'Combine withTimeout, withRetry, and Promise.all into a single setupTestEnvironment({ timeoutMs, retries }) function. Each of the three fetches should be individually retried and individually guarded by a timeout. If any fetch fails after all retries, throw a SetupError listing which service failed and why.',
        hint: 'Wrap each fetch: `withRetry(() => withTimeout(fetchUser(), timeoutMs, "user"), { retries })`. Then pass all three wrapped calls to Promise.all.',
        validation:
          'The function returns a complete { user, token, config } object when all services succeed. It throws a SetupError identifying the failing service when one service is permanently unreachable.',
      },
    ],
    completionCriteria:
      'All five tasks pass. The composed setupTestEnvironment function reduces wall-clock setup time by at least 50% compared to the sequential baseline, correctly surfaces per-service errors, and passes the provided unit-test suite without modification.',
    solutionNotes:
      'Key insight: parallelism with Promise.all handles independent I/O; timeout guards prevent unbounded blocking; retry logic handles transient network flakiness. Compose these three primitives rather than mixing their logic inside a single function.',
  },

  {
    id: 'js-array-processing',
    title: 'Process Test Result Data',
    path: 'javascript',
    difficulty: 'beginner',
    estimatedMinutes: 30,
    tags: ['arrays', 'filter', 'map', 'reduce', 'sort', 'groupBy'],
    icon: '⚡',
    scenario:
      'After each CI run your test reporter dumps a flat JSON array of raw TestResult objects. Before the results can be sent to the dashboard, they must be cleaned up: failures isolated, durations normalised, results grouped by suite, and the top slow tests surfaced. You will build a pipeline of pure array-transformation functions over that data.',
    description:
      'Build a data-transformation pipeline using filter, map, reduce, sort, and a group-by pattern to turn raw test-run output into a structured, dashboard-ready report object.',
    objectives: [
      'Filter and isolate failed and skipped tests from a mixed-result array',
      'Map raw result objects to a normalised shape with computed fields',
      'Aggregate totals and suite-level statistics using reduce',
      'Group results by test suite and surface the slowest tests per suite',
    ],
    requiredSkills: ['Array higher-order functions', 'Object destructuring', 'Functional programming patterns'],
    tasks: [
      {
        id: 1,
        title: 'Filter failing and skipped tests',
        description:
          'Implement getFailures(results: TestResult[]): TestResult[] that returns only results where status is "failed" or "error", and getSkipped(results): TestResult[] that returns only "skipped" results. Both functions must not mutate the input array.',
        hint: 'Use `results.filter(r => r.status === "failed" || r.status === "error")`. For multiple statuses consider a Set: `const failStatuses = new Set(["failed","error"])` then `failStatuses.has(r.status)`.',
        validation:
          'getFailures returns zero results when all tests pass. It returns the exact failing subset from a mixed array. getSkipped never includes failed tests.',
      },
      {
        id: 2,
        title: 'Map raw results to a normalised shape',
        description:
          'Implement normalise(results: TestResult[]): NormalisedResult[] using map. Each NormalisedResult must include: id, title, suite, status, durationMs (from the raw durationMs field), durationLabel (e.g. "1.23s" or "450ms"), passed (boolean), and failureMessage (the first line of the error message, or null).',
        hint: 'Compute durationLabel inside the map callback: `durationMs >= 1000 ? \`${(durationMs/1000).toFixed(2)}s\` : \`${durationMs}ms\``. Extract the first line of error with `(error ?? "").split("\\n")[0] || null`.',
        validation:
          'Every output object has all six fields. durationLabel is "450ms" for 450 ms and "1.23s" for 1230 ms. failureMessage is null when there is no error.',
      },
      {
        id: 3,
        title: 'Aggregate run-level statistics with reduce',
        description:
          'Implement summarise(results: TestResult[]): RunSummary using a single reduce call. RunSummary must contain: total, passed, failed, skipped, totalDurationMs, averageDurationMs, and slowestTest (the full TestResult object with the highest durationMs, or null if the array is empty).',
        hint: 'Start the accumulator as `{ total: 0, passed: 0, failed: 0, skipped: 0, totalDurationMs: 0, slowestTest: null }`. Track slowestTest by comparing `r.durationMs > acc.slowestTest?.durationMs ?? -1`.',
        validation:
          'summarise([]) returns all-zero counts and null slowestTest. On a mixed array, passed + failed + skipped equals total. averageDurationMs equals totalDurationMs / total (rounded to 2 decimal places).',
      },
      {
        id: 4,
        title: 'Sort results by duration descending',
        description:
          'Implement sortByDuration(results: TestResult[], order: "asc" | "desc" = "desc"): TestResult[] that returns a new sorted array. The original array must remain unmodified. When order is "desc" the slowest test appears first.',
        hint: 'Spread the array before sorting to avoid mutation: `[...results].sort((a, b) => order === "desc" ? b.durationMs - a.durationMs : a.durationMs - b.durationMs)`.',
        validation:
          'The input array is unchanged after calling sortByDuration. The first element of the desc result has the highest durationMs. The function works correctly on a single-element array.',
      },
      {
        id: 5,
        title: 'Group results by test suite',
        description:
          'Implement groupBySuite(results: TestResult[]): Record<string, SuiteGroup> where SuiteGroup = { tests: TestResult[]; passRate: number; totalDurationMs: number }. The passRate should be a value between 0 and 1 representing the fraction of passed tests in that suite.',
        hint: 'Use reduce with an object accumulator. For each result: `acc[r.suite] ??= { tests: [], passRate: 0, totalDurationMs: 0 }`. After building the groups, compute passRate in a second pass over the keys.',
        validation:
          'Each suite key maps to the correct subset of tests. passRate is 1.0 when all tests in the suite pass and 0.0 when all fail. totalDurationMs equals the sum of durationMs for that suite.',
      },
    ],
    completionCriteria:
      'All five transformation functions are implemented, pass the provided unit tests, and correctly handle edge cases: empty arrays, single-element arrays, and suites where every test fails.',
    solutionNotes:
      'Prefer immutable array operations (filter, map, reduce returning new values) over loops with push. Compose the functions into a pipeline: raw results -> normalise -> summarise + groupBySuite + sortByDuration -> report object.',
  },

  {
    id: 'js-error-handling',
    title: 'Build Resilient Test Helpers',
    path: 'javascript',
    difficulty: 'intermediate',
    estimatedMinutes: 40,
    tags: ['error-handling', 'try-catch', 'custom-errors', 'graceful-degradation'],
    icon: '⚡',
    scenario:
      'Your team\'s shared test-helper library currently lets uncaught exceptions crash entire test runs, swallows errors silently in some paths, and provides no structured way to distinguish a "test infrastructure" failure from a "product under test" failure. You will harden the library with proper try/catch patterns, a custom error hierarchy, graceful degradation strategies, and a centralised error-reporting hook.',
    description:
      'Harden a shared test-helper library by introducing structured try/catch patterns, a custom error class hierarchy, graceful-degradation wrappers, and a pluggable error-reporting pipeline.',
    objectives: [
      'Distinguish infrastructure errors from test assertion errors using a custom error hierarchy',
      'Wrap unsafe operations so a single failure degrades gracefully rather than crashing the suite',
      'Aggregate and report errors in a structured format consumable by CI dashboards',
      'Apply the finally pattern to guarantee cleanup even when a step throws',
    ],
    requiredSkills: ['try/catch/finally', 'Custom Error classes', 'Error propagation strategies'],
    tasks: [
      {
        id: 1,
        title: 'Define a custom error class hierarchy',
        description:
          'Create three error classes: TestHelperError (base, adds context: Record<string,unknown> to the Error prototype), InfrastructureError extends TestHelperError (for setup/teardown/network failures), and AssertionHelperError extends TestHelperError (for helper-level assertion mismatches). Each class must set this.name correctly and preserve the stack trace.',
        hint: 'Extend the built-in Error class: `class TestHelperError extends Error { constructor(message, context = {}) { super(message); this.name = this.constructor.name; this.context = context; if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor); } }`.',
        validation:
          'instanceof checks work correctly: new InfrastructureError() instanceof TestHelperError is true. error.name equals the class name as a string. error.context is the object passed at construction.',
      },
      {
        id: 2,
        title: 'Wrap unsafe operations with structured try/catch',
        description:
          'Implement safeRun<T>(label: string, fn: () => Promise<T>): Promise<{ ok: true; value: T } | { ok: false; error: TestHelperError }>. If fn() throws a TestHelperError, wrap it as-is in the error branch. If fn() throws a plain Error or unknown, wrap it in a new InfrastructureError with the original error attached as context.cause.',
        hint: 'Inside the catch, check `if (err instanceof TestHelperError) return { ok: false, error: err }`. Otherwise: `return { ok: false, error: new InfrastructureError(label + " failed", { cause: err }) }`.',
        validation:
          'When fn() resolves, safeRun returns { ok: true, value }. When fn() throws a TestHelperError, it is returned unwrapped. When fn() throws a generic Error, the result.error is an InfrastructureError containing the original as context.cause.',
      },
      {
        id: 3,
        title: 'Apply finally for guaranteed cleanup',
        description:
          'Implement withCleanup<T>(setup: () => Promise<T>, test: (resource: T) => Promise<void>, teardown: (resource: T | null) => Promise<void>): Promise<void>. The teardown must run even if setup or test throws. If both test and teardown throw, re-throw the test error with the teardown error attached as context.teardownError.',
        hint: 'Store the resource in a variable initialised to null before the try block. In finally, call teardown(resource). To attach the teardown error: catch it, then `testError.context.teardownError = teardownErr; throw testError`.',
        validation:
          'teardown is always called. When test throws and teardown succeeds, the test error propagates. When both throw, the test error propagates and has context.teardownError set to the teardown error.',
      },
      {
        id: 4,
        title: 'Implement graceful degradation with fallback values',
        description:
          'Implement withFallback<T>(fn: () => Promise<T>, fallback: T, options?: { onError?: (e: unknown) => void }): Promise<T>. If fn() resolves, return its value. If fn() rejects, call options.onError if provided (for logging), then return fallback without re-throwing. This is appropriate for non-critical helpers like screenshot capture.',
        hint: 'Use a try/catch that returns fallback in the catch block. Call `options?.onError?.(err)` before returning fallback so callers can log without needing to catch.',
        validation:
          'Returns fn\'s resolved value on success. Returns fallback when fn rejects. Calls onError with the thrown error. Never throws even when fn throws and onError throws.',
      },
      {
        id: 5,
        title: 'Build a centralised error-reporting pipeline',
        description:
          'Implement an ErrorReporter class with: addHandler(fn: (e: TestHelperError) => Promise<void>): void, report(error: unknown): Promise<void>, and getHistory(): TestHelperError[]. report() should coerce non-TestHelperError values into InfrastructureErrors, push to history, then call each handler in sequence (not in parallel) so handlers can be ordered by priority.',
        hint: 'Store handlers in a private array. In report(), normalise the error, push to this.history, then `for (const handler of this.handlers) { await handler(error); }`. Wrap the handler loop in try/catch so a failing handler does not block subsequent ones.',
        validation:
          'Handlers are called in registration order. A failing handler does not prevent later handlers from running. report() with a plain string wraps it in an InfrastructureError. getHistory() returns all reported errors in order.',
      },
    ],
    completionCriteria:
      'All five tasks pass their unit tests. The error hierarchy is correctly typed. withCleanup always runs teardown. withFallback never propagates errors. ErrorReporter calls all handlers even when one fails.',
    solutionNotes:
      'The result/error pattern from safeRun (inspired by Rust\'s Result type) avoids try/catch at call sites. Reserve try/catch for genuine boundaries: module entry points, top-level test hooks, and withCleanup teardown blocks.',
  },

  // ─── Playwright Missions ──────────────────────────────────────────────────
  {
    id: 'pw-login-flow',
    title: 'Automate Login Workflow',
    path: 'playwright',
    difficulty: 'beginner',
    estimatedMinutes: 35,
    tags: ['login', 'forms', 'assertions', 'session', 'negative-testing'],
    icon: '🎭',
    scenario:
      'The QA team for an e-commerce platform needs automated coverage of the login page. The page has email and password fields, a submit button, success redirect to /dashboard, and an inline error banner for invalid credentials. Tests must cover the happy path, invalid-credential rejection, and session persistence across a page reload so that logged-in users are not asked to log in again.',
    description:
      'Write a Playwright test suite that automates the full login workflow: navigation, credential entry, success assertion, negative-path testing, and session-persistence verification.',
    objectives: [
      'Navigate to the login page and successfully log in with valid credentials',
      'Assert that invalid credentials display the correct error message without redirecting',
      'Verify that an authenticated session persists after a full page reload',
      'Structure tests so they are independent and can run in any order',
    ],
    requiredSkills: ['Playwright locators', 'page.fill / page.click', 'expect assertions'],
    tasks: [
      {
        id: 1,
        title: 'Navigate to the login page and verify its structure',
        description:
          'Write a test that navigates to https://practice.example.com/login, then asserts: the page title contains "Login", an email input is visible, a password input is visible, and a submit button with text "Sign In" is visible. Use role-based locators where possible.',
        hint: 'Use `page.getByRole("textbox", { name: /email/i })` and `page.getByRole("button", { name: "Sign In" })`. Assert visibility with `await expect(locator).toBeVisible()`.',
        validation:
          'The test navigates without timeout. All three element assertions pass. The test does not hard-code element IDs (use role or label locators).',
      },
      {
        id: 2,
        title: 'Fill credentials and assert a successful login',
        description:
          'Extend the happy-path test: fill the email field with "user@example.com" and the password field with "Password123!", click Sign In, and assert that the URL changes to /dashboard and that a heading "Welcome back" is visible on the resulting page.',
        hint: 'Use `await page.fill(...)` then `await page.click(...)`. For URL assertion: `await expect(page).toHaveURL(/\\/dashboard/)`. For heading: `await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible()`.',
        validation:
          'URL assertion passes after clicking Sign In. The welcome heading is visible. The test completes in under 10 seconds.',
      },
      {
        id: 3,
        title: 'Test invalid credentials show an error banner',
        description:
          'Write a separate test that fills the email field with "wrong@example.com" and password "badpassword", clicks Sign In, and asserts that: (a) an element with role "alert" containing text "Invalid email or password" is visible, (b) the URL has NOT changed to /dashboard, and (c) the password field is cleared.',
        hint: 'Use `expect(page).not.toHaveURL(/\\/dashboard/)` for the URL assertion. Check that the password input value is empty with `await expect(passwordInput).toHaveValue("")`.',
        validation:
          'The alert role element is visible with the correct text. The URL stays on /login. The password field value is empty after the failed attempt.',
      },
      {
        id: 4,
        title: 'Verify session persistence across a page reload',
        description:
          'After a successful login (reuse the happy-path setup), call page.reload() and assert that the user remains on the /dashboard URL and the "Welcome back" heading is still visible. This confirms the session cookie is set correctly and survives a reload.',
        hint: 'Call `await page.reload()` then re-assert URL and heading. If the app uses localStorage, you may need to check `await page.evaluate(() => localStorage.getItem("auth_token"))` to confirm it survived.',
        validation:
          'After reload, toHaveURL(/\\/dashboard/) passes. The welcome heading is visible. The test does not re-submit the login form.',
      },
      {
        id: 5,
        title: 'Parameterise credential tests with a data table',
        description:
          'Refactor the invalid-credentials test into a data-driven test using test.each (or a for-of loop over a credentials array). Cover at least three invalid cases: wrong password, unregistered email, and empty fields. Each case should assert the specific error message text returned by the API for that scenario.',
        hint: 'Define `const cases = [{ email: "...", password: "...", expected: "..." }, ...]` and loop with `for (const { email, password, expected } of cases) { ... }` inside a single test, or use `test.each(cases)("invalid login %#", async ({ ... }) => { ... })`.',
        validation:
          'All three invalid scenarios are covered in a single parameterised block. Each assertion checks the specific error text. Adding a fourth case requires only a new entry in the data array.',
      },
    ],
    completionCriteria:
      'All five tasks produce passing tests. The suite runs in headed and headless modes. No test shares mutable state with another (each test navigates independently). The parameterised invalid-login test covers all three required scenarios.',
    solutionNotes:
      'Use page.getByRole and page.getByLabel as primary locators — they are resilient to CSS changes. Avoid page.locator("input[type=email]") unless the element has no accessible role or label. Store the base URL in playwright.config.ts to avoid repeating it in each test.',
  },

  {
    id: 'pw-api-validation',
    title: 'Validate REST API Responses',
    path: 'playwright',
    difficulty: 'intermediate',
    estimatedMinutes: 40,
    tags: ['api-testing', 'request', 'schema-validation', 'pagination', 'error-responses'],
    icon: '🎭',
    scenario:
      'The product search API (GET /api/products?q=&page=&limit=) has just been updated to support pagination and must be regression-tested before release. You need to validate status codes, response body schemas, correct pagination behaviour, and the error responses returned for malformed requests — all without opening a browser page.',
    description:
      'Use Playwright\'s APIRequestContext to write an API test suite that validates status codes, response schemas, pagination metadata, and error-response shapes for the product search endpoint.',
    objectives: [
      'Make authenticated GET requests using Playwright\'s request fixture and check HTTP status codes',
      'Validate response body schema field by field without a third-party schema library',
      'Confirm that pagination metadata (page, limit, total, hasMore) is accurate',
      'Assert that the API returns well-formed error objects for invalid query parameters',
    ],
    requiredSkills: ['Playwright APIRequestContext', 'JSON assertion patterns', 'HTTP status codes'],
    tasks: [
      {
        id: 1,
        title: 'Make an authenticated GET request and check the status code',
        description:
          'Use the Playwright request fixture to GET /api/products?q=laptop. Assert the status is 200. Assert the Content-Type header includes "application/json". Store the parsed JSON body for subsequent assertions.',
        hint: 'In an API test: `const response = await request.get("/api/products", { params: { q: "laptop" }, headers: { Authorization: "Bearer " + token } })`. Then `expect(response.status()).toBe(200)` and `const body = await response.json()`.',
        validation:
          'Status is 200. Content-Type header contains "application/json". body is a parsed JavaScript object (not a string).',
      },
      {
        id: 2,
        title: 'Validate the response body schema',
        description:
          'Assert that the response body matches this shape: { data: Product[], meta: { page: number, limit: number, total: number, hasMore: boolean } }. Check that data is an array, each Product has id (string), name (string), price (number), and category (string). Use expect().toMatchObject() for partial matches.',
        hint: 'Use `expect(body).toMatchObject({ data: expect.any(Array), meta: { page: expect.any(Number), ... } })`. For individual items: `body.data.forEach(p => expect(p).toMatchObject({ id: expect.any(String), ... }))`.',
        validation:
          'The top-level shape assertion passes. The per-item assertion runs for every element in data. The test fails explicitly (not silently) when a field is missing.',
      },
      {
        id: 3,
        title: 'Test pagination metadata accuracy',
        description:
          'Request page 1 with limit 5 (/api/products?q=&page=1&limit=5), then page 2 with the same limit. Assert: page-1 meta.page is 1, meta.limit is 5, data.length is 5 (or less if fewer results exist). Assert: page-2 meta.page is 2. If meta.hasMore is false on page 1, assert data.length < 5.',
        hint: 'Make two separate requests. Compare `body1.meta.total === body2.meta.total` to confirm the total does not shift between pages. Check `body1.data[0].id !== body2.data[0].id` to verify pages return different items.',
        validation:
          'meta.page matches the requested page number. meta.limit matches the requested limit. The first items of page 1 and page 2 are different. If hasMore is true on page 1, a page 2 request returns at least one item.',
      },
      {
        id: 4,
        title: 'Assert error responses for invalid query parameters',
        description:
          'Send three requests with invalid parameters: (a) limit=0, (b) limit=abc, (c) page=-1. For each, assert the HTTP status is 400 and the body matches { error: string, code: string } where code is a machine-readable string like "INVALID_LIMIT" or "INVALID_PAGE".',
        hint: 'Use `expect(response.ok()).toBe(false)` as a quick check before asserting the status. For the body: `expect(errorBody).toMatchObject({ error: expect.any(String), code: expect.stringMatching(/^[A-Z_]+$/) })`.',
        validation:
          'All three requests return status 400. Each body has a non-empty error string. Each body has a code matching the screaming-snake-case pattern.',
      },
      {
        id: 5,
        title: 'Intercept and mock the API at the network layer',
        description:
          'Write a browser-based test that intercepts GET requests to /api/products* using page.route() and returns a mocked response body with exactly two products. Then navigate to the product listing page and assert that exactly two product cards are rendered in the DOM — proving the UI correctly renders what the API returns.',
        hint: '`await page.route("**/api/products**", route => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ data: [mockProduct1, mockProduct2], meta: { ... } }) }))`. Then navigate and count cards.',
        validation:
          'page.route intercepts the request before it hits the network. The page renders exactly two product cards (assert count with expect(page.getByTestId("product-card")).toHaveCount(2)). The real API is never called.',
      },
    ],
    completionCriteria:
      'All five API tasks pass. Status-code, schema, pagination, and error-response tests are independent and can run in parallel. The mock-intercept test proves UI-to-API contract without relying on live data.',
    solutionNotes:
      'Prefer Playwright\'s built-in request fixture over third-party HTTP clients inside Playwright tests — it shares the browser context\'s cookies and storage by default. Use expect().toMatchObject() for structural validation and reserve deep equality (toEqual) for cases where extra fields must not be present.',
  },

  {
    id: 'pw-pom-build',
    title: 'Build a Page Object Model',
    path: 'playwright',
    difficulty: 'advanced',
    estimatedMinutes: 55,
    tags: ['POM', 'page-objects', 'fixtures', 'refactoring', 'maintainability'],
    icon: '🎭',
    scenario:
      'The e-commerce test suite has grown to 40 tests that all hard-code locators and navigation steps inline. A single CSS class rename broke 18 tests last sprint. The team has decided to refactor to a Page Object Model: each page gets a class encapsulating its locators and actions, and Playwright fixtures inject the pages so tests stay declarative and free of implementation details.',
    description:
      'Refactor brittle inline-locator tests into a maintainable Page Object Model by creating LoginPage and CheckoutPage classes, writing clean tests against those classes, and wiring them into Playwright fixtures.',
    objectives: [
      'Create a LoginPage class that exposes intent-revealing action methods rather than raw locators',
      'Create a CheckoutPage class with typed form-filling methods and assertion helpers',
      'Write tests that read like specifications using only the public POM API',
      'Wire page objects into Playwright fixtures so they are injected rather than instantiated inline',
    ],
    requiredSkills: ['TypeScript classes', 'Playwright fixtures', 'POM design pattern'],
    tasks: [
      {
        id: 1,
        title: 'Create the LoginPage page object',
        description:
          'Create src/pages/LoginPage.ts. The class constructor accepts a Playwright Page. Expose these public methods: goto(): Promise<void> (navigates to /login), login(email: string, password: string): Promise<void> (fills and submits the form), getErrorMessage(): Promise<string> (returns the text of the error alert), and isLoggedIn(): Promise<boolean> (returns true if the URL contains /dashboard). All locators must be private.',
        hint: 'Define private locators in the constructor: `this.emailInput = page.getByLabel("Email")`. Public methods call the private locators. Example: `async login(email, password) { await this.emailInput.fill(email); await this.passwordInput.fill(password); await this.submitButton.click(); }`.',
        validation:
          'All locators are private (not exported). Public methods match the specified signatures. goto() navigates to /login. login() fills both fields and clicks submit. getErrorMessage() returns the alert text.',
      },
      {
        id: 2,
        title: 'Create the CheckoutPage page object',
        description:
          'Create src/pages/CheckoutPage.ts. Expose: goto(): Promise<void>, fillShipping(details: ShippingDetails): Promise<void> (fills first name, last name, address, city, zip), selectPayment(method: "credit" | "paypal"): Promise<void>, placeOrder(): Promise<void>, and getOrderConfirmationNumber(): Promise<string>. Define the ShippingDetails interface in the same file and export it.',
        hint: 'For selectPayment, use a radio-button locator: `page.getByRole("radio", { name: method === "credit" ? "Credit Card" : "PayPal" })`. Group the shipping fields in fillShipping with a helper that fills each by label.',
        validation:
          'ShippingDetails interface is exported. fillShipping fills all five fields. selectPayment clicks the correct radio button for both values. getOrderConfirmationNumber returns a non-empty string.',
      },
      {
        id: 3,
        title: 'Write clean specification-style tests using the page objects',
        description:
          'Write at least four tests in src/tests/checkout.spec.ts that use only the public POM API (no page.fill, page.click, or raw locators in the test body). Required scenarios: (1) happy-path checkout, (2) login redirect when unauthenticated, (3) validation errors shown for empty shipping form, (4) PayPal payment selection.',
        hint: 'A clean test body should read like prose: `await loginPage.login(user.email, user.password); await checkoutPage.goto(); await checkoutPage.fillShipping(shippingDetails); await checkoutPage.placeOrder(); expect(await checkoutPage.getOrderConfirmationNumber()).toMatch(/ORD-\\d+/)`.',
        validation:
          'No raw Playwright locator calls appear in the test file. All four scenarios are present. Each test is independent (no shared mutable state). Tests pass in headless mode.',
      },
      {
        id: 4,
        title: 'Add Playwright fixtures to inject page objects',
        description:
          'Create src/fixtures/pages.ts that extends Playwright\'s base test to add two fixtures: loginPage (type LoginPage) and checkoutPage (type CheckoutPage). Each fixture should instantiate the page object with the current page and perform any per-test setup (e.g. loginPage fixture navigates to /login automatically). Export the extended test and expect from this file.',
        hint: 'Use `test.extend<{ loginPage: LoginPage; checkoutPage: CheckoutPage }>({ loginPage: async ({ page }, use) => { const lp = new LoginPage(page); await lp.goto(); await use(lp); }, ... })`. Import this extended test in all spec files instead of "@playwright/test".',
        validation:
          'The fixtures file exports test and expect. loginPage fixture navigates to /login before handing control to the test. checkoutPage fixture is available in the same test as loginPage without conflict.',
      },
      {
        id: 5,
        title: 'Refactor existing tests to use fixtures',
        description:
          'Update src/tests/checkout.spec.ts to import { test, expect } from "../fixtures/pages" instead of "@playwright/test". Replace any inline `new LoginPage(page)` or `new CheckoutPage(page)` calls with the injected fixture parameters. Confirm all four tests still pass after the refactor.',
        hint: 'Change the test signature to `test("...", async ({ loginPage, checkoutPage }) => { ... })`. Remove all page object instantiation from the test body — the fixture handles it. Run `npx playwright test` to confirm.',
        validation:
          'The spec file imports from the fixtures file, not from "@playwright/test" directly. No new keyword appears in the test body for page objects. All four tests pass after refactoring.',
      },
    ],
    completionCriteria:
      'Both page object classes are implemented with private locators. All four spec tests pass using only the public POM API. Fixtures are wired correctly and inject both page objects. No raw Playwright calls appear in any spec file.',
    solutionNotes:
      'The key POM principle: tests describe what, page objects describe how. If a test contains a CSS selector or calls page.fill directly, the abstraction is leaking. Fixtures take POM further by removing even the instantiation boilerplate — tests become pure specification.',
  },

  // ─── Tosca Missions ───────────────────────────────────────────────────────
  {
    id: 'tosca-regression-suite',
    title: 'Design Regression Test Suite',
    path: 'tosca',
    difficulty: 'intermediate',
    estimatedMinutes: 50,
    tags: ['regression', 'test-design', 'test-data', 'module-library', 'banking'],
    icon: '🔬',
    scenario:
      'A regional bank is migrating its retail banking portal to a new frontend framework. The QA lead must design an automated regression suite in Tosca that covers the critical user journeys — account login, balance inquiry, fund transfer, and statement download — before the migration goes live. The suite must be modular, data-driven, and mapped to requirements so that traceability reports can be generated for the change-advisory board.',
    description:
      'Design and document a structured Tosca regression suite for a banking portal: define scope, create test case skeletons, prepare test data sets, build a reusable module library, and map every test case to its parent requirement.',
    objectives: [
      'Define the regression scope by classifying features as in-scope, out-of-scope, or deferred',
      'Create atomic, reusable Tosca test cases that cover all critical banking journeys',
      'Prepare parameterised test data sets covering valid, boundary, and invalid inputs',
      'Map each test case to its source requirement to enable automated traceability reporting',
    ],
    requiredSkills: ['Tosca test case design', 'Test data management', 'Requirements traceability'],
    tasks: [
      {
        id: 1,
        title: 'Define regression scope and risk classification',
        description:
          'Produce a scope document that lists the banking portal features and classifies each as: (a) must-automate (high business risk, frequently executed), (b) automate-later (medium risk), or (c) manual-only (low frequency or UI-only). Must-automate features for this sprint: account login/logout, account balance display, fund transfer between own accounts, and PDF statement download. Justify each classification with a risk rating (High/Medium/Low) and estimated execution frequency (daily/weekly/monthly).',
        hint: 'Use a table with columns: Feature | Risk | Frequency | Classification | Justification. Login is always High risk / daily frequency. PDF generation may be Low risk / monthly if it has separate unit tests.',
        validation:
          'All four must-automate features are listed and justified. At least two features are classified as automate-later or manual-only with rationale. Risk ratings are consistent with the stated execution frequency.',
      },
      {
        id: 2,
        title: 'Create atomic Tosca test case skeletons',
        description:
          'For each must-automate feature, define at least two test cases (positive and negative/boundary). Each test case skeleton must include: Test Case ID (e.g. TC-LOGIN-001), Title, Preconditions, Steps (numbered, action-level), Expected Result, and Postconditions. Total minimum: 8 test cases across 4 features. Steps should reference Tosca module names (e.g. "Execute Module: Login_EnterCredentials") rather than raw UI actions.',
        hint: 'TC-LOGIN-001 (Successful login): Precondition: user exists in test environment; Steps: 1. Execute Module: Browser_Navigate (URL=portal URL), 2. Execute Module: Login_EnterCredentials (username, password), 3. Execute Module: Login_VerifyDashboard; Expected: Dashboard heading visible, session cookie set.',
        validation:
          'Minimum 8 test cases are defined (2 per feature). Each has all six required fields. Steps reference module names rather than raw element IDs. Each feature has at least one positive and one negative test case.',
      },
      {
        id: 3,
        title: 'Prepare parameterised test data sets',
        description:
          'Create a test data table for each of the four features. Each table must have at minimum: one valid/happy-path row, one boundary row (e.g. transfer amount = 0.01 or max allowed), and one invalid row (e.g. wrong password, insufficient funds). Columns must include all input parameters and the expected outcome. Data must be environment-agnostic (use placeholders like {BASE_URL} for environment-specific values).',
        hint: 'For the Fund Transfer data table: columns = SourceAccount, TargetAccount, Amount, Memo, ExpectedStatus. Rows: (valid transfer), (transfer of exactly the daily limit), (transfer exceeding daily limit → expect "Limit exceeded" error).',
        validation:
          'Each feature has its own data table. Every table has at least 3 rows (valid, boundary, invalid). Environment-specific values use placeholder notation. Expected outcome column is present and unambiguous.',
      },
      {
        id: 4,
        title: 'Build a reusable Tosca module library',
        description:
          'Design the module library structure for the banking portal suite. Define at least 8 modules grouped into folders: Navigation/ (Navigate_To_Portal, Navigate_To_Transfer), Login/ (Login_EnterCredentials, Login_Verify_Success, Login_Verify_Error), Account/ (Account_Check_Balance, Account_Download_Statement), Transfer/ (Transfer_Enter_Details, Transfer_Confirm). For each module, specify: Name, Folder path, Input parameters with types, Output parameters (if any), and the UI action(s) it encapsulates.',
        hint: 'Login_EnterCredentials inputs: Username (String), Password (String, sensitive=true). No outputs. UI actions: Fill field[id=username], Fill field[id=password], Click button[id=submit]. Transfer_Enter_Details inputs: FromAccount (String), ToAccount (String), Amount (Decimal), Memo (String optional).',
        validation:
          'At least 8 modules are defined across all four folders. Each module has a name, folder path, and typed input parameters. Sensitive parameters (passwords) are flagged. At least one module has an output parameter.',
      },
      {
        id: 5,
        title: 'Map test cases to requirements',
        description:
          'Assign each of the 8 test cases to its parent requirement ID from the system requirements document. Use the requirement IDs: REQ-AUTH-001 (user authentication), REQ-AUTH-002 (session management), REQ-ACC-001 (balance display), REQ-TRF-001 (fund transfer), REQ-TRF-002 (transfer limits), REQ-RPT-001 (statement generation). Ensure every requirement has at least one test case. Identify any requirement with no test case as a coverage gap.',
        hint: 'Create a mapping table: TestCaseID | RequirementID | Coverage Type (positive/negative/boundary). A single test case may cover multiple requirements. If REQ-AUTH-002 has no test cases, flag it as a gap and create a stub test case TC-AUTH-003.',
        validation:
          'All 6 requirement IDs appear in the mapping table. Every requirement has at least one test case. Any gap is explicitly documented with a remediation plan. The mapping table can be imported into a traceability report.',
      },
    ],
    completionCriteria:
      'Scope document is complete with risk classifications. A minimum of 8 test case skeletons reference Tosca module names. Test data tables cover valid, boundary, and invalid inputs for all four features. Module library defines at least 8 reusable modules. All 6 requirements are mapped to at least one test case.',
    solutionNotes:
      'Tosca\'s strength is the module library: invest time making modules atomic (one responsibility) and parameterised. Hardcoded values inside modules are a maintenance liability — push all variable data into test data tables. Traceability is most valuable when requirement IDs are maintained in the same system as test cases (Tosca\'s Requirements workspace), not in a separate spreadsheet.',
  },

  {
    id: 'tosca-requirements-trace',
    title: 'Requirements Traceability Matrix',
    path: 'tosca',
    difficulty: 'advanced',
    estimatedMinutes: 60,
    tags: ['traceability', 'RTM', 'coverage', 'audit', 'compliance'],
    icon: '🔬',
    scenario:
      'The banking portal release is subject to an internal audit. The auditors require a Requirements Traceability Matrix (RTM) demonstrating that every business requirement is covered by at least one test case, every test case traces back to a requirement, and any coverage gaps are formally documented with a risk acceptance sign-off. You must produce the RTM and present coverage metrics to the audit committee.',
    description:
      'Build a complete Requirements Traceability Matrix for the banking portal: gather requirements, link test cases bidirectionally, calculate coverage metrics, identify and document gaps, and produce an audit-ready summary report.',
    objectives: [
      'Catalogue all business requirements from source documents and assign unique IDs',
      'Link test cases to requirements bidirectionally and verify no orphaned test cases exist',
      'Calculate requirement coverage, test-case-to-requirement ratio, and gap percentage',
      'Formally document coverage gaps with risk rating and acceptance or remediation plan',
    ],
    requiredSkills: ['Requirements analysis', 'Traceability matrix design', 'Coverage metrics', 'Audit documentation'],
    tasks: [
      {
        id: 1,
        title: 'Catalogue requirements from source documents',
        description:
          'Review the provided Business Requirements Document (BRD) and System Requirements Specification (SRS) and extract all testable requirements. Assign each a unique ID using the convention REQ-[DOMAIN]-[NNN] (e.g. REQ-AUTH-001). Group requirements by domain: Authentication, Account Management, Fund Transfer, Reporting, Security. For each requirement, record: ID, Source document and section, Requirement statement, Priority (Must-Have/Should-Have/Nice-to-Have), and Testability (Testable/Non-Testable with reason).',
        hint: 'Non-testable requirements are typically architectural or performance-related ("The system shall be built on microservices" — architectural, non-testable from a functional perspective). Flag these separately so they don\'t inflate gap counts.',
        validation:
          'All extracted requirements have unique IDs following the convention. Each has source, statement, priority, and testability fields. Non-testable requirements are flagged and excluded from coverage calculations. At least 15 requirements are catalogued across all 5 domains.',
      },
      {
        id: 2,
        title: 'Create the bidirectional traceability matrix',
        description:
          'Build the RTM with two views: (a) Requirements view — for each requirement, list all test cases that cover it; (b) Test Case view — for each test case, list all requirements it covers. Flag any test case that covers no requirement as "orphaned". The matrix must support filtering by domain, priority, and coverage status (covered/uncovered/partial).',
        hint: 'Use a spreadsheet with sheets: "By Requirement" (rows = requirements, columns = TC IDs marked with X or coverage type), "By Test Case" (rows = TCs, columns = REQ IDs), "Summary" (pivot metrics). An X in cell (REQ-AUTH-001, TC-LOGIN-001) means TC-LOGIN-001 covers REQ-AUTH-001.',
        validation:
          'Both views are present. Every test case appears in at least one row of the By Requirement view. Orphaned test cases are flagged in the By Test Case view. The matrix can be filtered by domain and priority.',
      },
      {
        id: 3,
        title: 'Calculate coverage metrics',
        description:
          'Compute and document the following metrics from the RTM: (1) Requirement Coverage % = (requirements with at least one test case / total testable requirements) × 100; (2) Must-Have Coverage % (same calculation restricted to Must-Have requirements); (3) Average test cases per requirement; (4) Orphaned test case count and %; (5) Gap count (testable requirements with zero test cases). Present metrics in a summary table with traffic-light status: Green ≥ 90%, Amber 70-89%, Red < 70%.',
        hint: 'Separate testable from non-testable requirements before calculating. Must-Have Coverage is the most important metric for the audit — if it is below 100%, each gap needs a formal risk acceptance. Average TCs per requirement is a quality indicator: too high may mean redundancy, too low may mean shallow coverage.',
        validation:
          'All five metrics are calculated and documented. The traffic-light status is applied correctly. Must-Have Coverage is calculated separately from overall coverage. Orphaned test case count is consistent with the By Test Case view.',
      },
      {
        id: 4,
        title: 'Identify, classify, and document coverage gaps',
        description:
          'For every testable requirement with zero test cases, create a Gap Record with: Gap ID, Requirement ID, Requirement statement, Domain, Priority, Gap Reason (no test designed / test exists but not linked / feature not yet implemented), Risk Rating (Critical/High/Medium/Low), and Remediation Plan (write test by date X / accept risk with sign-off / defer to next release). Must-Have requirements with no coverage must be rated Critical or High.',
        hint: 'Gap Reason matters for remediation: "no test designed" → write test; "test exists but not linked" → update RTM; "feature not yet implemented" → defer with date. A Critical gap for a Must-Have requirement requires a named sign-off, not just a plan.',
        validation:
          'Every coverage gap has a Gap Record. Must-Have gaps are rated Critical or High. Each gap has a specific remediation plan with an action and owner. The total gap count in Gap Records matches the gap count in the metrics summary.',
      },
      {
        id: 5,
        title: 'Produce an audit-ready traceability summary report',
        description:
          'Compile a one-page executive summary suitable for the audit committee. It must include: project and release name, date, author, overall coverage metric with traffic-light, Must-Have coverage metric, gap summary table (count by domain and risk), top 3 critical gaps with remediation plans, and a sign-off section with space for QA Lead and Project Manager signatures. Format the summary so it can be exported as a PDF.',
        hint: 'Structure the report: Header (project info), Coverage Dashboard (metrics + traffic lights), Gap Heat Map (domain vs risk matrix), Critical Gaps Detail (3 rows max, each with ID, statement, risk, owner, date), Sign-Off section. Keep prose minimal — use tables and numbers.',
        validation:
          'The summary contains all required sections. Coverage metrics match the calculated values from Task 3. Gap counts match Gap Records from Task 4. The sign-off section has named roles. The document can be exported as a PDF without layout breakage.',
      },
    ],
    completionCriteria:
      'At least 15 testable requirements are catalogued with IDs. The RTM has both By Requirement and By Test Case views. All five coverage metrics are calculated with traffic-light status. Every gap has a Gap Record with risk rating and remediation plan. The executive summary is audit-ready and consistent with all underlying data.',
    solutionNotes:
      'The RTM is a living document — it must be updated every sprint as new requirements are added and new test cases are written. Automate the metrics calculation (even a spreadsheet formula) so the summary is never out of date. Auditors look for three things: completeness (every requirement has an ID), consistency (metrics match the matrix), and accountability (gaps have named owners and dates).',
  },

  // ─── TypeScript Missions ───────────────────────────────────────────────────
  {
    id: 'ts-api-client',
    title: 'Build a Type-Safe API Client',
    path: 'typescript',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
    tags: ['generics', 'interfaces', 'utility types', 'type inference'],
    icon: '🔷',
    scenario:
      'Your team\'s frontend currently calls the backend with plain `fetch()` and casts every response `as any`, so typos in response handling only surface as runtime bugs. Your mission is to build a small, fully generic `ApiClient` that infers the correct response shape at every call site, with zero `any` in its public surface.',
    description:
      'Design a generic ApiClient class whose get/post methods are parameterized by the expected response type, using interfaces to describe each endpoint\'s shape and utility types to derive request payload types from response types.',
    objectives: [
      'Define interfaces describing at least two real resource shapes (e.g. User, Post)',
      'Implement a generic `get<T>(url: string): Promise<T>` method with no `any` in its signature',
      'Derive a "create" payload type from a resource interface using `Omit<>` so callers can\'t supply a server-generated `id`',
      'Use a discriminated union to type a `Result<T>` success/failure return value instead of throwing on expected failures',
    ],
    requiredSkills: ['Interfaces & Type Aliases', 'Generics', 'Advanced & Utility Types'],
    tasks: [
      {
        id: 1,
        title: 'Define the resource interfaces',
        description:
          'Create a `User` interface (`id: number`, `name: string`, `email: string`) and a `Post` interface (`id: number`, `title: string`, `body: string`, `authorId: number`). Export both.',
        hint: 'Keep them as plain interfaces — no optional fields yet. `id` should be a `number` on both, since that is what the server assigns.',
        validation:
          'Both interfaces compile with strict mode on. Attempting to assign an object missing any required field to a `User` or `Post` variable produces a compile error.',
      },
      {
        id: 2,
        title: 'Write a fully generic get<T>() method',
        description:
          'On an `ApiClient` class, implement `async get<T>(url: string): Promise<T>` that calls `fetch(url)`, parses the JSON body, and returns it typed as `T`. Do not use `any` anywhere in the method signature or body — the one unavoidable cast (`response.json()` is typed `Promise<any>` by `lib.dom.d.ts`) must be written as `as unknown as T`, never a bare `as T` or `any`.',
        hint: '`const data = (await response.json()) as unknown as T; return data;` — going through `unknown` first is the type-safe way to perform a cast the compiler cannot verify on its own.',
        validation:
          '`const user = await client.get<User>("/users/1")` — `user` is inferred as `User`, and `user.notAField` is a compile error.',
      },
      {
        id: 3,
        title: 'Derive a create-payload type with Omit<>',
        description:
          'Define `type CreateUserPayload = Omit<User, "id">` and implement `async post<T, P>(url: string, payload: P): Promise<T>`. Calling `client.post<User, CreateUserPayload>("/users", { name, email })` should type-check, but including an `id` field in the payload object literal should be a compile error.',
        hint: '`Omit<User, "id">` produces every field of `User` except `id`. Object literals assigned to a type with `Omit` are checked structurally — an extra `id` property triggers excess-property-check errors.',
        validation:
          'A `CreateUserPayload` object literal with an `id` field fails to compile. One without `id` compiles and the post() call type-checks end to end.',
      },
      {
        id: 4,
        title: 'Model failures with a discriminated union Result<T>',
        description:
          'Define `type Result<T> = { ok: true; data: T } | { ok: false; error: string }`. Change `get<T>` to catch fetch/parse errors and return `Result<T>` instead of throwing. At the call site, narrow on `result.ok` before accessing `.data` or `.error`.',
        hint: 'The literal types `true`/`false` on the `ok` field are what make this a discriminated union — TypeScript narrows the whole object based on which branch of the union `ok` matches.',
        validation:
          'Accessing `result.data` before checking `result.ok === true` is a compile error. After the check, TypeScript narrows correctly inside each branch.',
      },
      {
        id: 5,
        title: 'Wire it together end to end',
        description:
          'Write a small script that fetches a `User`, creates a `Post` for that user via the typed `post<T,P>()`, and handles both success and failure via the `Result<T>` pattern — with no `any`, no unchecked casts besides the one documented `as unknown as T`, and `strict: true` passing cleanly.',
        hint: 'This task is really a compile check — if every earlier task is done correctly, this composition should just fall into place with full inference and no additional annotations needed at the call site.',
        validation:
          'Running `tsc --noEmit` on the file reports zero errors, and there is no occurrence of the bare `any` keyword anywhere in the file.',
      },
    ],
    completionCriteria:
      'ApiClient exposes fully generic get<T>/post<T,P> methods with no `any` in any public signature, a Result<T> discriminated union replaces thrown errors for expected failure cases, and Omit<> is used to derive at least one request-payload type from a response type. `tsc --noEmit --strict` passes with zero errors.',
    solutionNotes:
      'The core lesson is that generics let one implementation serve many call sites without sacrificing type safety — the alternative (typing get() to return `any` and casting at each call site) pushes the same unsafe cast into every caller instead of writing it once, deliberately, in one place.',
  },
  {
    id: 'ts-state-machine',
    title: 'Model a Type-Safe UI State Machine',
    path: 'typescript',
    difficulty: 'advanced',
    estimatedMinutes: 50,
    tags: ['discriminated unions', 'narrowing', 'generics', 'exhaustiveness'],
    icon: '🔀',
    scenario:
      'A data-loading component in your app currently tracks `isLoading`, `data`, and `error` as three separate, independently-settable booleans/fields — which allows impossible states like `isLoading: true` and `error: "failed"` being true at once. Your mission is to replace that with a single discriminated-union state that makes impossible states unrepresentable, and to make the compiler enforce that every state is handled.',
    description:
      'Design a generic RequestState<T> discriminated union (idle/loading/success/error), a reducer-style transition function typed so illegal transitions are compile errors, and an exhaustive render function that fails to compile if a new state is ever added and left unhandled.',
    objectives: [
      'Define `RequestState<T>` as a discriminated union with a literal `status` field distinguishing 4 states',
      'Write a `transition()` function whose parameter types make invalid state transitions a compile error',
      'Write a render/handling function that switches on `status` and uses a `never`-typed exhaustiveness check in the default case',
      'Prove the exhaustiveness check works by intentionally adding a 5th state and observing the compile error, then handle it',
    ],
    requiredSkills: ['Union & Intersection Types', 'Type Narrowing & Guards', 'Generics'],
    tasks: [
      {
        id: 1,
        title: 'Define the RequestState<T> discriminated union',
        description:
          'Define `type RequestState<T> = { status: "idle" } | { status: "loading" } | { status: "success"; data: T } | { status: "error"; error: string }`. Note that `data` only exists on the `success` variant and `error` only exists on the `error` variant — this is intentional.',
        hint: 'Because each variant has its own literal `status` value, TypeScript can narrow the whole union down to exactly one variant once you check `status` — that narrowing is what makes `data`/`error` safely accessible only where they actually exist.',
        validation:
          'Accessing `.data` on a `RequestState<T>` value without first narrowing on `status === "success"` is a compile error.',
      },
      {
        id: 2,
        title: 'Write a transition() function with legal-transition typing',
        description:
          'Implement `function transition<T>(current: RequestState<T>, event: { type: "FETCH" } | { type: "RESOLVE"; data: T } | { type: "REJECT"; error: string } | { type: "RESET" }): RequestState<T>`. FETCH is only valid from `idle` or `error`; RESOLVE/REJECT are only valid from `loading`; RESET is valid from any state. Invalid combinations should return the current state unchanged (not throw).',
        hint: 'A `switch` on `event.type` nested with a check on `current.status` is the clearest way to encode "this event is only legal from these states."',
        validation:
          'transition({status:"idle"}, {type:"RESOLVE", data:...}) returns the state unchanged, since RESOLVE is invalid from idle. transition({status:"loading"}, {type:"RESOLVE", data:X}) returns {status:"success", data:X}.',
      },
      {
        id: 3,
        title: 'Write an exhaustive render function using never',
        description:
          'Implement `function render<T>(state: RequestState<T>): string` with a `switch (state.status)` covering all 4 cases, and a `default` branch that assigns `state` to a variable typed `never` (e.g. `const _exhaustive: never = state;`) and throws. If every real case is handled, TypeScript proves the default is unreachable and `state` is legitimately `never` there.',
        hint: 'If you forget a case, TypeScript will NOT let you assign the remaining un-narrowed union to a `never`-typed variable — the assignment itself becomes the compile error that tells you a case is missing.',
        validation:
          'render() correctly produces a distinct string for each of the 4 states, and the `never` assignment in the default branch compiles cleanly only because all 4 cases are handled above it.',
      },
      {
        id: 4,
        title: 'Break exhaustiveness on purpose, then fix it',
        description:
          'Add a 5th variant, `{ status: "cancelled" }`, to the `RequestState<T>` union. Do NOT add a case for it in render() yet — confirm this produces a compile error at the `never` assignment (this is the exhaustiveness check doing its job). Then add the missing case to render() and confirm the error disappears.',
        hint: 'This step has no "correct" code beyond demonstrating the failure and the fix — the point is seeing the compiler catch a genuinely missed case before it becomes a runtime bug.',
        validation:
          'Before adding the case: `tsc --noEmit` reports a type error at the `never` assignment naming `"cancelled"`. After adding the case: zero errors.',
      },
      {
        id: 5,
        title: 'Prove impossible states are actually unrepresentable',
        description:
          'Try to construct an object literal `{ status: "loading", data: 5, error: "x" }` and confirm TypeScript rejects it as not assignable to `RequestState<number>`. Write a one-paragraph explanation (as a code comment) of why the old `{ isLoading, data, error }` boolean-flags design could not have caught this, but the discriminated union can.',
        hint: 'The old design has three independent fields with no relationship enforced between them — nothing stops `isLoading: true` and `error: "x"` from both being set simultaneously, because they are not variants of one type, just three separate optional-ish fields.',
        validation:
          'The object literal with mismatched fields fails to compile with an excess-property or type-mismatch error. The comment correctly identifies that a discriminated union\'s variants are mutually exclusive by construction, while independent flags are not.',
      },
    ],
    completionCriteria:
      'RequestState<T> is a 5-variant (after task 4) discriminated union with no way to construct a state with fields from the wrong variant. transition() only allows legal state changes. render() is provably exhaustive via a never-typed default branch, verified by the intentional-break-then-fix exercise in task 4.',
    solutionNotes:
      'Discriminated unions plus exhaustiveness checking is the single highest-leverage TypeScript pattern for UI state: it converts "did we forget to handle a case" from a runtime bug discovered in production into a compile-time error caught before the code ships.',
  },
];
