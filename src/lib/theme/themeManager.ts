/**
 * Theme 2.0 Manager & Persistence Engine
 *
 * Implements strict state hierarchy:
 * Explicit User Selection -> Persisted Storage -> System Media Query -> Default (Dark)
 */

export type ThemeMode = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'ua_portfolio_theme';

/**
 * Generates the inline zero-FOUC initialization script to be injected into <head>.
 * Executes synchronously before browser paint to prevent flash of incorrect theme.
 */
export function getThemeInitScript(): string {
  return `
    (function() {
      try {
        var storageKey = '${THEME_STORAGE_KEY}';
        var savedTheme = localStorage.getItem(storageKey);
        var systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        var effectiveTheme = 'dark';
        if (savedTheme === 'light' || (savedTheme === 'system' && systemPrefersLight) || (!savedTheme && systemPrefersLight)) {
          effectiveTheme = 'light';
        } else {
          effectiveTheme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', effectiveTheme);
        document.documentElement.style.colorScheme = effectiveTheme;
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.colorScheme = 'dark';
      }
    })();
  `.trim();
}
