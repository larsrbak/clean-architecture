// provide some sample here

import UserRepository from "../repositories/UserRepository";
import { User } from "../User";

export class CreateUser {
  private readonly userRepository: UserRepository;
  private readonly name: string;

  constructor(userRepository: UserRepository, name: string) {
    this.userRepository = userRepository;
    this.name = name;
  }

  async execute(): Promise<User> {
    return await this.userRepository.add(new User(this.name));
  }
}
