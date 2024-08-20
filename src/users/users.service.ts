import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    private usersRepository: UsersRepository
  ) {}

  create(createUser: CreateUserDto, hashed_password: string) {
    return this.usersRepository.create(createUser, hashed_password);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOneByUsername(username);
  }

  findOneById(id: string) {
    return this.usersRepository.findOneById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  addRole(userId: string, roleId: string) {
    return this.usersRepository.addRole(userId, roleId);
  }

  remove(id: string) {
    return this.usersRepository.remove(id);
  }
}
