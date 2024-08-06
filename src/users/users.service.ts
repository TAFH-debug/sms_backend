import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  create(createUser: CreateUserDto, hashed_password: string) {
    return `This action adds a new user ${createUser.username} ${hashed_password}`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  findOneByUsername(username: string): User {
    return { id: '1', username: username, email: 'aushahman2007@gmail.com', hashed_password: '1712sgs1gs7812' };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${updateUserDto.username}`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
