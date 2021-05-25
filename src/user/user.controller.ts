import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Sse,
  MessageEvent,
} from '@nestjs/common';

import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CreateUserDto } from './DTO/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): User {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `Name: ${createUserDto.name} Age: ${createUserDto.age}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string {
    return `Update ${IDBRequest}`;
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({
        data: [{ hello: 'world' }, { hello: 'world' }, { hello: 'world' }],
      })),
    );
  }
}
