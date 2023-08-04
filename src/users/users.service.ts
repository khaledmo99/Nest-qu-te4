import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    console.log(
      'this.usersRepository.find() :>> ',
      await this.usersRepository.find(),
    );
    return await this.usersRepository.find();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email: email });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  deleteUser(user: User): void {
    this.usersRepository.delete(user);
  }
}
