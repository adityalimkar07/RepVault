/**
 * DayCard.js — Collapsible day card with header and body.
 */

import { createMuscleSection } from './ExerciseList.js';

/**
 * Create a day card element.
 * @param {Object} dayData — a day object from schedule.js
 * @param {boolean} openByDefault — whether to start expanded
 * @returns {HTMLElement}
 */
export function createDayCard(dayData, openByDefault = false) {
    const card = document.createElement('div');
    card.className = `day-card d${dayData.day}`;
    if (openByDefault) card.classList.add('open');

    // Header
    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `
    <div class="day-number">${String(dayData.day).padStart(2, '0')}</div>
    <div class="day-info">
      <div class="day-name">${dayData.dayName}</div>
      <div class="day-muscles">${dayData.muscles}</div>
    </div>
    <div class="day-badge">${dayData.badge}</div>
    <div class="chevron">▾</div>
  `;

    header.addEventListener('click', () => {
        card.classList.toggle('open');
    });

    // Body
    const body = document.createElement('div');
    body.className = 'day-body';

    dayData.sections.forEach((section, idx) => {
        if (idx > 0) {
            const divider = document.createElement('div');
            divider.className = 'divider';
            body.appendChild(divider);
        }
        body.appendChild(createMuscleSection(section));
    });

    // Tip
    if (dayData.tip) {
        const pickHint = document.createElement('div');
        pickHint.className = 'pick-hint';
        pickHint.textContent = dayData.tip;
        body.appendChild(pickHint);
    }

    card.appendChild(header);
    card.appendChild(body);

    return card;
}
