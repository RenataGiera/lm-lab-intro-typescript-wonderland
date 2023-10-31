export const HOLES = ['Badger', 'Fox', 'Swiss Cheese', 'Donut', 'Rabbit'] as const; // 👉 FIXME ❌

// ⚠️ It can be very useful to make a custom type based on the contents of an array

// 👉 Hover 'Hole' in the below line and see that it's defined as
// 		the union of whatever is in the 'HOLES' array
export type Hole = typeof HOLES[number];
// 💡 This is because of the `as const` declaration above - that says that the *contents*
//     of the HOLES array are not allowed to change, so TypeScript can safely create a type
//     based on the contents of HOLES
