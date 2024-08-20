import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: createRoleDto
    });
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: string) {
    return this.prisma.role.findFirst({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.prisma.role.update({
      where: {
        id: id
      },
      data: updateRoleDto
    });
  }

  remove(id: string) {
    return this.prisma.role.delete({
      where: {
        id: id
      }
    });
  }
}
