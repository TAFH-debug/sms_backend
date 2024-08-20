// repository file for user

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {

  constructor(private prismaService: PrismaService) {}

  create(createUser: CreateUserDto, hashed_password: string) {
    return this.prismaService.user.create({
      data: {
        ...createUser,
        hashed_password: hashed_password
      }
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findFirst({
      where: {
        id: id
      }
    });
  }

  findOneByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username: username
      }
    });
  }

  findOneById(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: id
      },
      include: {
        roles: true
      }
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {
        id: id
      },
      data: updateUserDto
    });
  }

  addRole(userId: string, roleId: string) {
    return this.prismaService.user.update({
      where: {
        id: userId
      },
      data: {
        roles: {
          connect: {
            id: roleId
          }
        }
      }
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: {
        id: id
      }
    });
  }
}