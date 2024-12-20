// repository file for user

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';

@Injectable()
export class UsersRepository {

  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findFirst({
      where: {
        id: id
      },
      include: {
        roles: true
      }
    });
  }

  findOneByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username: username
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

  deleteRole(userId: string, roleId: string) {
    return this.prismaService.user.update({
      where: {
        id: userId
      },
      data: {
        roles: {
          disconnect: {
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

  verify(id: string) {
    return this.prismaService.user.update({
      where: {
        id: id
      },
      data: {
        isVerified: true
      }
    });
  }

  create(createUser: RegisterUserDto, hashed_password: string) {
    return this.prismaService.user.create({
      data: {
        email: createUser.email,
        name: createUser.name,
        surname: createUser.surname,
        username: createUser.username,
        hashed_password
      }
    });
  }
}