import { IsNotEmpty } from "class-validator";

export class RoleIDDto {
    @IsNotEmpty()
    id: string;
}