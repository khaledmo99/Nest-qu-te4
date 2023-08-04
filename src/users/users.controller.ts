import { UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt.auth.guards';
// src/app/users/users.controller.ts

import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUserByEmail(params.id);
  }
  @Get()
  getAll() {
    return this.service.getUsers();
  }

  @Post()
  @UseGuards(JwtAuthGuards)
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Put()
  @UseGuards(JwtAuthGuards)
  update(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuards)
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
