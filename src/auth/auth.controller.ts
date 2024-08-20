import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() createUserDto: LoginUserDto) {
        return this.authService.signIn(createUserDto.username, createUserDto.password);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.registerUser(createUserDto);
    }
}
