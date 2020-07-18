import CollectionReference from "./CollectionReference";
import UserConverter from "../../converters/UserConverter";

export const collections = {
  users: new CollectionReference("users", new UserConverter()),
};
