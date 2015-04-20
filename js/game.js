// Pseudocode:

// Storage:
// Nested array of Square objects.

// How do blocks spawn?
// For the first 4 moves, a 2 randomly spawns in an empty space.
// After that, a 2 or a 4 randomly spawns in an empty space.

// When does the game disallow a movement?
// No empty spaces in the direction of any occupied squares AND
// no squares that can combine in that direction.

// How do blocks merge?
// 2 blocks have the same number property AND are next to each other in the direction of movement.
// First check the squares at the destination of the direction of motion.
// When 2 blocks merge, move the other blocks in the direction accordingly.

// How do blocks slide?
// Move as far as possible in the direction, before hitting a boundary or another square.
