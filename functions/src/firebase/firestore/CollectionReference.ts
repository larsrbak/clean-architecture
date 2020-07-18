import admin from "firebase-admin";
import DocumentReference from "./DocumentReference";
import Converter from "../../converters/Converter";

export default class CollectionReference<T> {
  private readonly path: string;
  private readonly converter: Converter<T>;

  constructor(name: string, converter: Converter<T>, prefix?: string) {
    this.path = prefix ? [prefix, "/", name].join("") : name;
    this.converter = converter;
  }

  doc(id: string): DocumentReference<T> {
    return new DocumentReference(id, this.path, this.converter);
  }

  get ref(): admin.firestore.CollectionReference<T> {
    return admin
      .firestore()
      .collection(this.path)
      .withConverter(this.converter);
  }
}
