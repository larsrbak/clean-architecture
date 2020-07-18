import Converter from "./Converter";
import { User } from "../user";

export default class UserConverter extends Converter<User> {
  fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): User {
    return new User(snapshot.get("name"));
  }

  toFirestore(user: User): FirebaseFirestore.DocumentData {
    return {
      name: user.name,
    };
  }
}
