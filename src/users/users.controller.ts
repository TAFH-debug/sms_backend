import { Controller, Get, Body, Patch, Param, Delete, UseGuards, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard, Public } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleIDDto } from './dto/role-id.dto';
import { RequirePermissions } from 'src/permissions/permissions.decorator';
import { Permissions } from 'src/permissions/permissions.enum';
import { PermissionsGuard } from 'src/permissions/permissions.guard';

@Controller('users')
@UseGuards(JwtGuard, PermissionsGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@Req() req: Request) {
    return req['user'];
  }
  
  @Patch('/me')
  updateMe(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req['user'].id, updateUserDto);
  }

  @Public()
  @Get('/:username')
  findOneByUsername(@Param('username') username: string) {
    return this.usersService.findOneByUsername(username);
  }

  @RequirePermissions(Permissions.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @RequirePermissions(Permissions.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @RequirePermissions(Permissions.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @RequirePermissions(Permissions.ADMIN)
  @Put(':id/roles')
  addRole(@Param('id') id: string, @Body() roleIDDto: RoleIDDto) {
    return this.usersService.addRole(id, roleIDDto.id);
  }

  @RequirePermissions(Permissions.ADMIN)
  @Delete(':id/roles')
  deleteRole(@Param('id') id: string, @Body() roleIDDto: RoleIDDto) {
    return this.usersService.deleteRole(id, roleIDDto.id);
  }
}
