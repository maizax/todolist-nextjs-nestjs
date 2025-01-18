import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entities';
import { UserDto } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(user: UserDto): Promise<User> {
    const newUser = this.userRepository.create({
      ...user,
      createdAt: new Date(),
    });

    return this.userRepository.save(newUser);
  }
}
