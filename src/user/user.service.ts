import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
   { id: '1234',
  name: 'Christian',
  age: 26,
  catchPhrase: 'I\'ll be back.'},
  { id: '5678',
  name: 'Michael',
  age: 25,
  catchPhrase: 'Go ahead, make my day.'},
  { id: '90123',
  name: 'Austin',
  age: 25,
  catchPhrase: 'Build it and they will come.'}
  ];


  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find(user => user.id ===id)
  }

}
