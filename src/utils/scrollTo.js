/**
 * Smoothly scrolls to a DOM element, accounting for the fixed navbar height.
 */
export function scrollToElement(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  const navHeight =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--nav-height'
      ),
      10
    ) || 72;

  const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
