export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'fmg-theme'

/**
 * Runs before first paint, inlined in <head>. Sets data-theme on <html> from
 * the stored choice, falling back to the OS preference, so the correct theme
 * is painted on the first frame rather than flashing light then swapping.
 *
 * Kept deliberately small and dependency-free — it is parsed and executed
 * synchronously on every page load.
 */
export const THEME_INIT_SCRIPT = `
(function(){
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`.trim()
