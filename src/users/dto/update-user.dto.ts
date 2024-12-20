export class UpdateUserDto {
    username?: string;
    email?: string; // TODO: Add email verification check.
    surname?: string;
    name?: string;
    about?: string;
}