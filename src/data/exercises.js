/**
 * exercises.js — All exercise data grouped by muscle group.
 * Each exercise is { name: string, tag: string }.
 * Edit this file to add/remove exercises from any muscle group.
 */

export const chestExercises = [
    { name: 'Barbell Bench Press', tag: 'Compound · Heavy' },
    { name: 'Dumbbell Bench Press', tag: 'Compound · Balanced' },
    { name: 'Incline Bench Press', tag: 'Upper chest focus' },
    { name: 'Decline Bench Press', tag: 'Lower chest focus' },
    { name: 'Push-Ups', tag: 'Bodyweight · Beginner' },
    { name: 'Incline Push-Ups', tag: 'Bodyweight · Easier' },
    { name: 'Dumbbell Flyes', tag: 'Isolation · Stretch' },
    { name: 'Cable Chest Fly', tag: 'Cable · Isolation' },
    { name: 'Machine Chest Press', tag: 'Machine · Safe' },
    { name: 'Pec Deck Machine', tag: 'Isolation · Machine' },
    { name: 'Dips (chest lean)', tag: 'Bodyweight · Advanced' },
    { name: 'Smith Machine Press', tag: 'Guided · Safe' },
];

export const chestExercisesAlt = [
    { name: 'Incline Dumbbell Press', tag: 'Upper chest · Key lift' },
    { name: 'Cable Crossover', tag: 'Cable · Full stretch' },
    { name: 'Low-to-High Cable Fly', tag: 'Upper chest · Cable' },
    { name: 'High-to-Low Cable Fly', tag: 'Lower chest · Cable' },
    { name: 'Dumbbell Pullover', tag: 'Chest + serratus' },
    { name: 'Wide-Grip Push-Ups', tag: 'Outer chest' },
    { name: 'Decline Push-Ups', tag: 'Upper chest' },
    { name: 'Chest Dips', tag: 'Lower chest · BW' },
];

export const tricepExercises = [
    { name: 'Tricep Pushdown', tag: 'Cable · Classic' },
    { name: 'Overhead Tricep Extension', tag: 'Dumbbell · Long head' },
    { name: 'Skull Crushers (EZ bar)', tag: 'Barbell · Isolation' },
    { name: 'Close-Grip Bench Press', tag: 'Compound · Heavy' },
    { name: 'Tricep Dips (bench)', tag: 'Bodyweight · Beginner' },
    { name: 'Diamond Push-Ups', tag: 'Bodyweight' },
    { name: 'Rope Pushdown', tag: 'Cable · Squeeze' },
    { name: 'Single-Arm Extension', tag: 'Dumbbell · Unilateral' },
    { name: 'Kickbacks', tag: 'Dumbbell · Isolation' },
    { name: 'Machine Tricep Press', tag: 'Machine · Safe' },
];

export const backExercises = [
    { name: 'Lat Pulldown', tag: 'Cable · Beginner Friendly' },
    { name: 'Seated Cable Row', tag: 'Cable · Mid-back' },
    { name: 'Barbell Bent-Over Row', tag: 'Compound · Heavy' },
    { name: 'Dumbbell Row', tag: 'Unilateral · Beginner' },
    { name: 'T-Bar Row', tag: 'Machine · Mid-back' },
    { name: 'Pull-Ups / Assisted Pull-Ups', tag: 'Bodyweight · Lats' },
    { name: 'Chin-Ups', tag: 'Bodyweight + Biceps' },
    { name: 'Smith Machine Row', tag: 'Guided · Safe' },
    { name: 'Machine High Row', tag: 'Machine · Upper back' },
    { name: 'Face Pulls', tag: 'Cable · Rear delts' },
    { name: 'Hyperextensions', tag: 'Lower back · Machine' },
    { name: 'Straight Arm Pulldown', tag: 'Cable · Lats' },
];

export const backExercisesAlt = [
    { name: 'Wide-Grip Lat Pulldown', tag: 'Width focus' },
    { name: 'Close-Grip Pulldown', tag: 'Thickness focus' },
    { name: 'Chest-Supported Row', tag: 'Machine · No cheat' },
    { name: 'Single-Arm DB Row', tag: 'Unilateral · Heavy' },
    { name: 'Meadows Row', tag: 'Advanced variation' },
    { name: 'Cable Pull-Over', tag: 'Lats · Isolation' },
    { name: 'Deadlift (light)', tag: 'Compound · Lower back' },
    { name: 'Rack Pull', tag: 'Partial DL · Upper back' },
];

export const bicepExercises = [
    { name: 'Barbell Curl', tag: 'Classic · Heavy' },
    { name: 'Dumbbell Curl', tag: 'Unilateral · Beginner' },
    { name: 'Hammer Curl', tag: 'Neutral grip · Brachialis' },
    { name: 'Incline Dumbbell Curl', tag: 'Stretch position' },
    { name: 'Concentration Curl', tag: 'Isolation · Peak' },
    { name: 'Cable Curl', tag: 'Constant tension' },
    { name: 'EZ Bar Curl', tag: 'Wrist-friendly' },
    { name: 'Preacher Curl', tag: 'Machine or barbell' },
    { name: 'Spider Curl', tag: 'Isolation · Peak' },
    { name: 'Reverse Curl', tag: 'Forearm + brachialis' },
    { name: 'Cable Hammer Curl (rope)', tag: 'Cable · Brachialis' },
    { name: 'Machine Curl', tag: 'Machine · Beginner' },
];

export const bicepExercisesAlt = [
    { name: 'Concentration Curl', tag: 'Isolation · Mind-muscle' },
    { name: 'Incline Dumbbell Curl', tag: 'Stretch position · Light' },
    { name: 'Cable Curl', tag: 'Constant tension · Smooth' },
    { name: 'Hammer Curl', tag: 'Brachialis + forearm' },
    { name: 'Preacher Curl (light)', tag: 'Machine · No cheat' },
    { name: 'Spider Curl', tag: 'Peak contraction' },
    { name: 'EZ Bar Curl', tag: 'Wrist-friendly · Classic' },
    { name: 'Rope Hammer Curl', tag: 'Cable · Brachialis' },
    { name: 'Reverse Curl', tag: 'Forearms + brachialis' },
    { name: 'Cross-Body Hammer Curl', tag: 'Unilateral · Light' },
];

export const shoulderExercises = [
    { name: 'Overhead Press (Barbell)', tag: 'Compound · Heavy' },
    { name: 'Dumbbell Shoulder Press', tag: 'Compound · Balanced' },
    { name: 'Arnold Press', tag: 'All 3 heads · Rotation' },
    { name: 'Lateral Raises', tag: 'Side delts · Isolation' },
    { name: 'Front Raises', tag: 'Front delts' },
    { name: 'Rear Delt Fly', tag: 'Rear delts · Machine' },
    { name: 'Cable Lateral Raise', tag: 'Cable · Constant tension' },
    { name: 'Machine Shoulder Press', tag: 'Machine · Guided' },
    { name: 'Upright Row', tag: 'Compound · Side delts' },
    { name: 'Shrugs (Dumbbell/Barbell)', tag: 'Traps · Heavy' },
    { name: 'Face Pulls', tag: 'Rear delts · Cable' },
    { name: 'Plate Front Raise', tag: 'Front delts · Simple' },
    { name: 'Seated DB Press', tag: 'Supported · Beginner' },
    { name: 'Single-Arm Lateral Cable', tag: 'Unilateral · Isolation' },
];

export const shoulderExercisesAlt = [
    { name: 'Cable Lateral Raises', tag: 'Side delts · Tension' },
    { name: 'Rear Delt Fly (cable)', tag: 'Rear delts' },
    { name: 'Seated Dumbbell Press', tag: 'Supported pressing' },
    { name: 'W-Raises (floor)', tag: 'Rear delts · Light' },
    { name: 'Bent-Over Rear Delt', tag: 'Rear delts · Dumbbell' },
    { name: 'Around-the-World', tag: 'Circular · Light DB' },
];

export const coreExercises = [
    { name: 'Plank', tag: 'Stability · Hold 30–60s' },
    { name: 'Crunches', tag: 'Classic · Upper abs' },
    { name: 'Bicycle Crunches', tag: 'Obliques + upper abs' },
    { name: 'Leg Raises', tag: 'Lower abs' },
    { name: 'Russian Twists', tag: 'Obliques · Rotational' },
    { name: 'Dead Bug', tag: 'Stability · Beginner' },
    { name: 'Hanging Knee Raises', tag: 'Lower abs · Bar' },
    { name: 'Ab Wheel Rollout', tag: 'Full core · Advanced' },
    { name: 'Side Plank', tag: 'Obliques · Stability' },
    { name: 'Cable Crunch', tag: 'Weighted · Cable' },
    { name: 'Mountain Climbers', tag: 'Core + cardio' },
    { name: 'Flutter Kicks', tag: 'Lower abs' },
    { name: 'V-Ups', tag: 'Full abs' },
    { name: 'Pallof Press', tag: 'Anti-rotation · Cable' },
];

export const coreExercisesAlt = [
    { name: 'Hanging Leg Raises', tag: 'Lower abs · Bar' },
    { name: 'Dragon Flag (modified)', tag: 'Advanced · Full core' },
    { name: 'Toe Touches', tag: 'Upper abs' },
    { name: 'Windshield Wipers', tag: 'Obliques · Bar' },
    { name: 'Plank Shoulder Taps', tag: 'Stability + core' },
    { name: 'Seated Knee Tucks', tag: 'Lower abs · Beginner' },
];

export const coreExercisesSunday = [
    { name: 'Plank Hold', tag: 'Stability · 30–60s' },
    { name: 'Hanging Knee Raises', tag: 'Lower abs · Bar' },
    { name: 'Cable Crunch', tag: 'Weighted abs' },
    { name: 'Russian Twists', tag: 'Obliques · Rotational' },
    { name: 'Ab Wheel Rollout', tag: 'Full core · Advanced' },
    { name: 'Bicycle Crunches', tag: 'Obliques + upper abs' },
    { name: 'Leg Raises (lying)', tag: 'Lower abs' },
    { name: 'Side Plank', tag: 'Obliques · Hold' },
    { name: 'V-Ups', tag: 'Full abs · Dynamic' },
    { name: 'Dead Bug', tag: 'Stability · Beginner' },
    { name: 'Flutter Kicks', tag: 'Lower abs · Endurance' },
    { name: 'Pallof Press', tag: 'Anti-rotation · Cable' },
];

export const legExercises = [
    { name: 'Barbell Back Squat', tag: 'King of legs · Compound' },
    { name: 'Goblet Squat', tag: 'Beginner · Dumbbell' },
    { name: 'Leg Press', tag: 'Machine · Heavy safe' },
    { name: 'Hack Squat', tag: 'Machine · Quad focus' },
    { name: 'Leg Extension', tag: 'Machine · Quad isolation' },
    { name: 'Leg Curl (Lying)', tag: 'Machine · Hamstrings' },
    { name: 'Romanian Deadlift (RDL)', tag: 'Hamstrings · Hip hinge' },
    { name: 'Lunges (walking/stationary)', tag: 'Unilateral · Quads' },
    { name: 'Bulgarian Split Squat', tag: 'Unilateral · Advanced' },
    { name: 'Standing Calf Raises', tag: 'Calves · Machine/BB' },
    { name: 'Seated Calf Raises', tag: 'Calves · Soleus' },
    { name: 'Box Squats', tag: 'Depth control · Beginner' },
    { name: 'Step-Ups (DB)', tag: 'Unilateral · Functional' },
    { name: 'Sissy Squats', tag: 'Quad isolation · BW' },
    { name: 'Nordic Curl', tag: 'Hamstrings · Advanced' },
];

export const gluteExercises = [
    { name: 'Hip Thrust (Barbell)', tag: 'Best glute exercise' },
    { name: 'Glute Bridge', tag: 'Floor · Beginner' },
    { name: 'Cable Kickbacks', tag: 'Isolation · Cable' },
    { name: 'Sumo Squat', tag: 'Wide stance · Glutes' },
    { name: 'Romanian Deadlift', tag: 'Glutes + hamstrings' },
    { name: 'Abductor Machine', tag: 'Outer glutes' },
    { name: 'Fire Hydrants', tag: 'Bodyweight · Activation' },
    { name: 'Frog Pumps', tag: 'Floor · Glute squeeze' },
    { name: 'Step-Ups (high box)', tag: 'Glute activation' },
    { name: 'Reverse Hyperextension', tag: 'Machine · Glutes+lower' },
];
