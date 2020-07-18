import { CreateUser } from "../../interactors/CreateUser";
import UserRepository from "../../repositories/UserRepository";

export default async function (name: string): Promise<void> {
  const repository = new UserRepository();
  const interactor = new CreateUser(repository, name);
  const user = await interactor.execute();
  console.log(`Created user ${user.id}, with name ${user.name}`);
}
