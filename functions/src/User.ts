// classes that contain data from firestore documents.
// Models should only perform simple changes.
// For more complex actions use other classes that use that model.
// Models can be placed at root level. Uncle bob: you should be able to identify the type of application from root level files.

import { Model } from "./Model";

export class User extends Model {
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
