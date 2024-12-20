import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';

@Injectable()
export class UsersService {

  constructor(
    private usersRepository: UsersRepository
  ) {}

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOneByUsername(username);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  addRole(userId: string, roleId: string) {
    return this.usersRepository.addRole(userId, roleId);
  }

  deleteRole(userId: string, roleId: string) {
    return this.usersRepository.deleteRole(userId, roleId);
  }

  remove(id: string) {
    return this.usersRepository.remove(id);
  }

  verify(id: string) {
    return this.usersRepository.verify(id);
  }

  create(createUser: RegisterUserDto, hashed_password: string) {
    return this.usersRepository.create(createUser, hashed_password);
  }
}
