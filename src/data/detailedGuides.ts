/**
 * Optional "Detailed Guide" — a full standalone HTML deep-dive for a concept,
 * separate from the in-app Explanation/Syntax/Visual/Examples sections.
 * Files live under public/guides/<pathId>/<conceptId>.html (served as-is by
 * Vite, no bundling needed) and are opened in a new tab, exactly like opening
 * a downloaded HTML file in the browser.
 *
 * Deliberately just a lookup table, not a Concept field: this keeps every
 * existing concept data file untouched. Currently covers all 15 concepts in
 * each of the three tracks (45 guides total).
 */
const DETAILED_GUIDES: Record<string, Record<string, string>> = {
  javascript: {
    variables: '/guides/javascript/variables.html',
    datatypes: '/guides/javascript/datatypes.html',
    operators: '/guides/javascript/operators.html',
    conditionals: '/guides/javascript/conditionals.html',
    loops: '/guides/javascript/loops.html',
    functions: '/guides/javascript/functions.html',
    arrays: '/guides/javascript/arrays.html',
    objects: '/guides/javascript/objects.html',
    scope: '/guides/javascript/scope.html',
    closures: '/guides/javascript/closures.html',
    promises: '/guides/javascript/promises.html',
    asyncawait: '/guides/javascript/asyncawait.html',
    dom: '/guides/javascript/dom.html',
    events: '/guides/javascript/events.html',
    errorhandling: '/guides/javascript/errorhandling.html',
  },
  playwright: {
    setup: '/guides/playwright/setup.html',
    firsttest: '/guides/playwright/firsttest.html',
    browsers: '/guides/playwright/browsers.html',
    navigation: '/guides/playwright/navigation.html',
    locators: '/guides/playwright/locators.html',
    actions: '/guides/playwright/actions.html',
    assertions: '/guides/playwright/assertions.html',
    config: '/guides/playwright/config.html',
    fixtures: '/guides/playwright/fixtures.html',
    api: '/guides/playwright/api.html',
    network: '/guides/playwright/network.html',
    visual: '/guides/playwright/visual.html',
    pom: '/guides/playwright/pom.html',
    auth: '/guides/playwright/auth.html',
    parallel: '/guides/playwright/parallel.html',
  },
  tosca: {
    intro: '/guides/tosca/intro.html',
    scanning: '/guides/tosca/scanning.html',
    testcases: '/guides/tosca/testcases.html',
    testsuites: '/guides/tosca/testsuites.html',
    testdata: '/guides/tosca/testdata.html',
    config: '/guides/tosca/config.html',
    steering: '/guides/tosca/steering.html',
    recovery: '/guides/tosca/recovery.html',
    reporting: '/guides/tosca/reporting.html',
    api: '/guides/tosca/api.html',
    dex: '/guides/tosca/dex.html',
    cicd: '/guides/tosca/cicd.html',
    mobile: '/guides/tosca/mobile.html',
    requirements: '/guides/tosca/requirements.html',
    workspace: '/guides/tosca/workspace.html',
  },
};

export function getDetailedGuideUrl(pathId: string, conceptId: string): string | null {
  return DETAILED_GUIDES[pathId]?.[conceptId] ?? null;
}
