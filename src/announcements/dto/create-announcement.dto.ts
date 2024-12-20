import { IsNotEmpty } from "class-validator"

export class CreateAnnouncementDto {
    @IsNotEmpty()
    content: string
    @IsNotEmpty()
    author: string
}
