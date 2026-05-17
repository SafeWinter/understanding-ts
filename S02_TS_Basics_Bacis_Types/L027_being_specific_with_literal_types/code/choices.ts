// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// let userRole: Role = Role.Admin;
let userRole: 'admin' | 'editor' | 'guest' = 'admin';

// ...

// userRole = Role.Guest;
userRole = 'guest';

// ----------------
// Combined with tuple & union types:
// let possibleResults: [number, number];
let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, -1];