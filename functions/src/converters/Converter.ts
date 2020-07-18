import admin from "firebase-admin";
import { Model } from "../Model";

export default abstract class Converter<T extends Model> {
  fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): T {
    const model = this.modelFromFirestore(snapshot);
    model.id = snapshot.id;
    return model;
  }

  toFirestore(model: T): FirebaseFirestore.DocumentData {
    return this.modelToFirestore(model);
  }

  abstract modelToFirestore(model: T): admin.firestore.DocumentData;

  abstract modelFromFirestore(
    snapshot: admin.firestore.QueryDocumentSnapshot
  ): T;
}
