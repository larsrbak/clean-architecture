// is where the firebase functions live.
// I have found that structuring the files into folders based on what invokes them works best.
// Eg. firestore/users/onCreate.f.ts.
// I then prefer to have a plain nodejs file that dynamically imports these .f.ts files.
// The typescript compiler can handle both nodejs and typescript files with a single configuration line.
// Functions files should contain next to no code and tests could be omitted here.

