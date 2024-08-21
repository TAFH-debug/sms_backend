import { Controller, Get, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleIDDto } from './dto/role-id.dto';

@Controller('users')
@UseGuards(JwtGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get('/me')
  // me(@Req() req: Request) {
  //   return this.usersService.findOneById(req['user'].id);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Put(':id/roles')
  addRole(@Param('id') id: string, @Body() roleIDDto: RoleIDDto) {
    return this.usersService.addRole(id, roleIDDto.id);
  }

  @Delete(':id/roles')
  deleteRole(@Param('id') id: string, @Body() roleIDDto: RoleIDDto) {
    return this.usersService.deleteRole(id, roleIDDto.id);
  }
}
