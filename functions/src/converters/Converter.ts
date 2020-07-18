import admin from "firebase-admin";

export default abstract class Converter<T> {
  abstract toFirestore(model: T): admin.firestore.DocumentData;
  abstract fromFirestore(snapshot: admin.firestore.QueryDocumentSnapshot): T;
}
