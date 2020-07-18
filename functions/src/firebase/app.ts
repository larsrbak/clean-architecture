import admin from "firebase-admin";

export default function (): admin.app.App {
  return admin.initializeApp();
}
