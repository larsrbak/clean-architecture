// provide some sample here

import UserRepository from "../repositories/UserRepository";
import { User } from "../user";

export class CreateUser {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<void> {
    await this.userRepository.create("123", new User("Lars Bak"));
  }
}
