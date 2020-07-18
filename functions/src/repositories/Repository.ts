import CollectionReference from "../firebase/firestore/CollectionReference";
import { Model } from "../Model";

// these classes are responsible for storing and receiving models.
// Including building queries and partial document updates.
export default class Repository<T extends Model> {
  private collectionReference: CollectionReference<T>;

  constructor(collectionReference: CollectionReference<T>) {
    this.collectionReference = collectionReference;
  }

  async get(id: string): Promise<T> {
    const snapshot = await this.collectionReference.doc(id).get();

    if (!snapshot.exists) {
      throw new Error(`Document ${snapshot.ref.path} did not exist.`);
    }

    const model = snapshot.data();

    if (!model) {
      throw new Error(`Data of ${snapshot.ref.path} was undefined.`);
    }

    return model;
  }

  async create(model: T): Promise<void> {
    await this.collectionReference.doc(model.id).ref.create(model);
  }

  async delete(model: T): Promise<void> {
    await this.collectionReference.doc(model.id).ref.delete();
  }

  async update(model: T): Promise<void> {
    await this.collectionReference.doc(model.id).ref.update(model);
  }

  async add(model: T): Promise<T> {
    const reference = await this.collectionReference.ref.add(model);
    model.id = reference.id;
    return model;
  }
}
