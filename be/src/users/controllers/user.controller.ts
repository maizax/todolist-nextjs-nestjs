import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from '../services';
import { UserDto } from '../dto';
import { User } from '../../entities';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.findUsers();
  }

  @Post()
  createUser(@Body() user: UserDto): void {
    this.userService.createUser(user);
  }
}
