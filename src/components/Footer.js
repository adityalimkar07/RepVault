/**
 * Footer.js — App footer with beginner tips.
 */

export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <p style="margin-bottom:8px">BEGINNER TIP — Start with lighter weights &amp; master form first</p>
    <p>3 sets × 10–12 reps · 60–90s rest · Progressive overload every 1–2 weeks</p>
  `;
    return footer;
}
