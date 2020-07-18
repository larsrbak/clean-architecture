// classes that contain data from firestore documents.
// Models should only perform simple changes.
// For more complex actions use other classes that use that model.
// Models can be placed at root level. Uncle bob: you should be able to identify the type of application from root level files.

export class Model {
  private _id?: string;

  public get id(): string {
    if (!this._id) {
      throw new Error("Model has no id");
    }

    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }
}
