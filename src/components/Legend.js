/**
 * Legend.js — Muscle group color legend.
 */

const LEGEND_ITEMS = [
    { dotClass: 'dot-chest', label: 'Chest' },
    { dotClass: 'dot-back', label: 'Back' },
    { dotClass: 'dot-bicep', label: 'Biceps' },
    { dotClass: 'dot-shoulder', label: 'Shoulders' },
    { dotClass: 'dot-core', label: 'Core' },
    { dotClass: 'dot-legs', label: 'Legs' },
    { dotClass: 'dot-glutes', label: 'Glutes' },
];

export function createLegend() {
    const legend = document.createElement('div');
    legend.className = 'legend';

    LEGEND_ITEMS.forEach(({ dotClass, label }) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<div class="legend-dot ${dotClass}"></div> ${label}`;
        legend.appendChild(item);
    });

    return legend;
}
