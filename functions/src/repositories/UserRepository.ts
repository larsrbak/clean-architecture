import Repository from "./Repository";
import { User } from "../User";
import { collections } from "../firebase/firestore";

export default class UserRepository extends Repository<User> {
  constructor() {
    super(collections.users);
  }
}
