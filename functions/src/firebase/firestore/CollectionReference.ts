import admin from "firebase-admin";
import DocumentReference from "./DocumentReference";
import Converter from "../../converters/Converter";
import { Model } from "../../Model";
import { firestore } from "../index";

export default class CollectionReference<T extends Model> {
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
    return firestore.collection(this.path).withConverter(this.converter);
  }
}
