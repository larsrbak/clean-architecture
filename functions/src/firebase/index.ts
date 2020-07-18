import initializeApp from "./app";

export const app = initializeApp();

export const auth = app.auth();
export const firestore = app.firestore();
