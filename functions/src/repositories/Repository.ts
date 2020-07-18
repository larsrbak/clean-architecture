import CollectionReference from "../firebase/firestore/CollectionReference";

// these classes are responsible for storing and receiving models.
// Including building queries and partial document updates.
export default class Repository<T> {
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

  async create(id: string, model: T): Promise<void> {
    await this.collectionReference.doc(id).ref.create(model);
  }
}
