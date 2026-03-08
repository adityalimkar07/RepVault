/**
 * Header.js — App header with branding, title, subtitle, and tip bar.
 */

export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <span class="header-tag">💪 Beginner Program</span>
    <h1>REPVAULT<br><span class="title-sub">7‑DAY SPLIT</span></h1>
    <p class="header-sub">Legs on Saturday · Full recovery Sunday · Pick 2–3 exercises per muscle group</p>
  `;
    return header;
}

export function createTipBar() {
    const tip = document.createElement('div');
    tip.className = 'tip-bar';
    tip.innerHTML = `
    ⚡ <span>Pick <strong style="color:var(--accent1)">2–3 exercises</strong> from each muscle group · Do <strong style="color:var(--accent1)">3 sets × 10–12 reps</strong> each · Rest 60–90 sec between sets</span>
  `;
    return tip;
}
