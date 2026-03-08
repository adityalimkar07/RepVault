/**
 * main.js — App entry point.
 * Assembles all components and mounts to #app.
 */

import './styles/index.css';
import { SCHEDULE } from './data/schedule.js';
import { createHeader, createTipBar } from './components/Header.js';
import { createLegend } from './components/Legend.js';
import { createDayCard } from './components/DayCard.js';
import { createFooter } from './components/Footer.js';

function initApp() {
    const app = document.getElementById('app');

    // Container
    const container = document.createElement('div');
    container.className = 'container';

    // Header
    container.appendChild(createHeader());

    // Tip Bar
    container.appendChild(createTipBar());

    // Legend
    container.appendChild(createLegend());

    // Days Grid
    const daysGrid = document.createElement('div');
    daysGrid.className = 'days-grid';

    SCHEDULE.forEach((dayData, index) => {
        const openByDefault = index === 0; // Day 1 open by default
        daysGrid.appendChild(createDayCard(dayData, openByDefault));
    });

    container.appendChild(daysGrid);

    // Footer
    container.appendChild(createFooter());

    // Mount
    app.appendChild(container);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
