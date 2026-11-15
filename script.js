// Portfolio interactions — no framework required.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const themeKey = 'alberto-portfolio-theme';
  const storedTheme = (() => {
    try { return window.localStorage.getItem(themeKey); } catch (_) { return null; }
  })();
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme === 'dark' || storedTheme === 'light'
    ? storedTheme
    : (systemPrefersDark ? 'dark' : 'light');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  applyTheme(initialTheme);
  if (toggle) toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { window.localStorage.setItem(themeKey, next); } catch (_) { /* storage may be disabled */ }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
