/**
 * Update page title with the specified template
 * @param title - The page title to display
 * @returns The full title with template
 */
export function setPageTitle(title: string): string {
  const fullTitle = `${title} - Ecwid Store`;
  document.title = fullTitle;
  return fullTitle;
}

/**
 * Set loading title for dynamic pages
 */
export function setLoadingTitle(): string {
  return setPageTitle("Loading...");
}
