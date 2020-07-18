import Converter from "./Converter";
import { User } from "../User";

export default class UserConverter extends Converter<User> {
  modelFromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): User {
    return new User(snapshot.get("name"));
  }

  modelToFirestore(user: User): FirebaseFirestore.DocumentData {
    return {
      name: user.name,
    };
  }
}
