/**
 * schedule.js — The 7-day workout schedule.
 * Each day has: day number, name, muscle focus, badge, sections, and a tip.
 * Sections reference exercise arrays from exercises.js.
 */

import {
    chestExercises,
    chestExercisesAlt,
    tricepExercises,
    backExercises,
    backExercisesAlt,
    bicepExercises,
    bicepExercisesAlt,
    shoulderExercises,
    shoulderExercisesAlt,
    coreExercises,
    coreExercisesAlt,
    coreExercisesSunday,
    legExercises,
    gluteExercises,
} from './exercises.js';

export const SCHEDULE = [
    {
        day: 1,
        dayName: 'Monday',
        muscles: 'Chest + Triceps',
        badge: 'Push Day',
        sections: [
            {
                muscle: 'Chest',
                dotClass: 'dot-chest',
                hint: '12 options · pick 2–3',
                exercises: chestExercises,
            },
            {
                muscle: 'Triceps',
                dotClass: 'dot-tricep',
                hint: '10 options · pick 2–3',
                exercises: tricepExercises,
            },
        ],
        tip: '★ Chest gets worked by tricep exercises too — they pair perfectly!',
    },
    {
        day: 2,
        dayName: 'Tuesday',
        muscles: 'Back + Biceps',
        badge: 'Pull Day',
        sections: [
            {
                muscle: 'Back',
                dotClass: 'dot-back',
                hint: '12 options · pick 2–3',
                exercises: backExercises,
            },
            {
                muscle: 'Biceps',
                dotClass: 'dot-bicep',
                hint: '12 options · pick 2–3',
                exercises: bicepExercises,
            },
        ],
        tip: '★ Back pulls naturally activate biceps — a perfect combo!',
    },
    {
        day: 3,
        dayName: 'Wednesday',
        muscles: 'Shoulders + Core',
        badge: 'Press + Stability',
        sections: [
            {
                muscle: 'Shoulders',
                dotClass: 'dot-shoulder',
                hint: '14 options · pick 2–3',
                exercises: shoulderExercises,
            },
            {
                muscle: 'Core',
                dotClass: 'dot-core',
                hint: '14 options · pick 2–3',
                exercises: coreExercises,
            },
        ],
        tip: '★ Core can be done at the END of any session, not just today',
    },
    {
        day: 4,
        dayName: 'Thursday',
        muscles: 'Chest + Core',
        badge: 'Push + Abs',
        sections: [
            {
                muscle: 'Chest (different angles)',
                dotClass: 'dot-chest',
                hint: 'Pick 2–3 different from Monday',
                exercises: chestExercisesAlt,
            },
            {
                muscle: 'Core (pick different from Wed)',
                dotClass: 'dot-core',
                hint: 'Pick 2–3 different exercises',
                exercises: coreExercisesAlt,
            },
        ],
        tip: '★ Repeating chest with new movements = more volume, better growth!',
    },
    {
        day: 5,
        dayName: 'Friday',
        muscles: 'Back + Shoulders',
        badge: 'Pull + Press',
        sections: [
            {
                muscle: 'Back (different from Tuesday)',
                dotClass: 'dot-back',
                hint: 'Pick 2–3 different exercises',
                exercises: backExercisesAlt,
            },
            {
                muscle: 'Shoulders (different from Wed)',
                dotClass: 'dot-shoulder',
                hint: 'Pick 2–3 different exercises',
                exercises: shoulderExercisesAlt,
            },
        ],
        tip: '★ Shoulders + Back = full upper body. Go light on shoulder pressing.',
    },
    {
        day: 6,
        dayName: 'Saturday',
        muscles: 'Legs + Glutes',
        badge: '🦵 Leg Day!',
        sections: [
            {
                muscle: 'Legs (Quads, Hamstrings, Calves)',
                dotClass: 'dot-legs',
                hint: '15 options · pick 2–3',
                exercises: legExercises,
            },
            {
                muscle: 'Glutes',
                dotClass: 'dot-glutes',
                hint: '10 options · pick 2',
                exercises: gluteExercises,
            },
        ],
        tip: '★ Saturday legs = Sunday is your natural rest + recovery day. Perfect timing!',
    },
    {
        day: 7,
        dayName: 'Sunday',
        muscles: 'Biceps + Core',
        badge: 'Light Day',
        sections: [
            {
                muscle: 'Biceps (light & focused)',
                dotClass: 'dot-bicep',
                hint: '10 options · pick 2–3',
                exercises: bicepExercisesAlt,
            },
            {
                muscle: 'Core (fresh options)',
                dotClass: 'dot-core',
                hint: '12 options · pick 2–3',
                exercises: coreExercisesSunday,
            },
        ],
        tip: '★ Light bicep curls + core = low stress on your system, easy to recover from overnight. Take rest whenever YOU feel like it!',
    },
];
