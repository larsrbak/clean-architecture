import Converter from "../../converters/Converter";
import admin from "firebase-admin";
import { Model } from "../../Model";
import { firestore } from "../index";

export default class DocumentReference<T extends Model> {
  private readonly path: string;

  private readonly converter: Converter<T>;

  constructor(id: string, prefix: string, converter: Converter<T>) {
    this.path = [prefix, "/", id].join("");
    this.converter = converter;
  }

  get(): Promise<admin.firestore.DocumentSnapshot<T>> {
    return admin.firestore().doc(this.path).withConverter(this.converter).get();
  }

  get ref(): admin.firestore.DocumentReference<T> {
    return firestore.doc(this.path).withConverter(this.converter);
  }
}
