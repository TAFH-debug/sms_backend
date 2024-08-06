import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);
    const isPasswordValid = await compare(pass, user.hashed_password);

    if (isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async registerUser(
    // user: CreateUserDto
  ) {
    // const hashed_password = await bcrypt.hash(user.password, 10);
    
    // creating user
  }
}