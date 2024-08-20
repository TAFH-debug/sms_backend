import { IsNotEmpty } from "class-validator";

export class AddRoleDto {
    @IsNotEmpty()
    roleID: string;
}