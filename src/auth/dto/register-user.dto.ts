import { IsNotEmpty } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    surname: string;

    about: string;
    
    @IsNotEmpty()
    password: string;
}