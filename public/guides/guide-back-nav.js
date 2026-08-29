/**
 * "Back to Mastery Lab" bar — shared across every detailed-guide HTML page
 * (linked from all 60 files under public/guides/). Keeping this in one file
 * means the button's markup, styling hook, and navigation logic only ever
 * need to change here, not in every guide.
 *
 * Navigation logic, in priority order:
 *   1. If this tab has its own prior history (reached via a normal link/
 *      bookmark/direct nav within the same tab), go back in that history —
 *      the most correct "back" for that case.
 *   2. Otherwise, this is almost certainly a tab opened via
 *      window.open(url, '_blank', 'noopener') from the app's own "Detailed
 *      Guide" button (the app's only entry point to these pages) — try
 *      closing it, which returns focus to the app tab the user came from.
 *   3. window.close() is a silent no-op if the browser doesn't permit it
 *      (varies by browser/opener state) — if we're still here, the <a>'s
 *      real href carries out the fallback: navigate to the app's root.
 */
(function () {
  var BACK_HREF = '../../index.html';

  function handleClick(e) {
    if (window.history.length > 1) {
      e.preventDefault();
      window.history.back();
      return;
    }
    window.close();
    // If close() didn't actually close this tab, let the click continue
    // as a normal link navigation to BACK_HREF below.
  }

  function inject() {
    var bar = document.createElement('div');
    bar.className = 'guide-back-bar';

    var inner = document.createElement('div');
    inner.className = 'guide-back-bar-inner';

    var link = document.createElement('a');
    link.className = 'guide-back-btn';
    link.href = BACK_HREF;
    link.setAttribute('aria-label', 'Back to Mastery Lab');
    link.innerHTML =
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
      '<span>Back to Mastery Lab</span>';
    link.addEventListener('click', handleClick);

    inner.appendChild(link);
    bar.appendChild(inner);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
