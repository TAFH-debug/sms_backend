import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findOneByUsername(loginUserDto.username);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await compare(loginUserDto.password, user.hashed_password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: "smth"
    };
  }

  async register(registerUserDto: RegisterUserDto) {
    const hashed_password = await hash(registerUserDto.password, 10);

    return this.usersService.create(registerUserDto, hashed_password);
  }
}