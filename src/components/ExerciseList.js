/**
 * ExerciseList.js — Renders exercise items and muscle sections.
 */

/**
 * Create a single exercise item element.
 * @param {{ name: string, tag: string }} exercise
 * @param {number} index — 0-based index
 * @returns {HTMLElement}
 */
export function createExerciseItem(exercise, index) {
    const item = document.createElement('div');
    item.className = 'exercise-item';
    item.innerHTML = `
    <span class="ex-num">${String(index + 1).padStart(2, '0')}</span>
    <div>
      <span class="ex-name">${exercise.name}</span>
      <span class="ex-tag">${exercise.tag}</span>
    </div>
  `;
    return item;
}

/**
 * Create the exercise grid for a list of exercises.
 * @param {Array<{ name: string, tag: string }>} exercises
 * @returns {HTMLElement}
 */
export function createExerciseGrid(exercises) {
    const grid = document.createElement('div');
    grid.className = 'exercises-list';
    exercises.forEach((ex, i) => grid.appendChild(createExerciseItem(ex, i)));
    return grid;
}

/**
 * Create a complete muscle section with title, dot, count hint, and exercise grid.
 * @param {{ muscle: string, dotClass: string, hint: string, exercises: Array }} section
 * @returns {HTMLElement}
 */
export function createMuscleSection(section) {
    const wrapper = document.createElement('div');
    wrapper.className = 'muscle-section';

    const titleRow = document.createElement('div');
    titleRow.className = 'muscle-title';
    titleRow.innerHTML = `
    <div class="muscle-dot ${section.dotClass}"></div>
    <div class="muscle-label">${section.muscle}</div>
    <div class="muscle-count">${section.hint}</div>
  `;

    wrapper.appendChild(titleRow);
    wrapper.appendChild(createExerciseGrid(section.exercises));

    return wrapper;
}
