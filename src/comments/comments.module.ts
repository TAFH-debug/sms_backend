import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentsController } from './comments.controller';

@Module({
    imports: [PrismaModule],
    controllers: [CommentsController],
    providers: [],
})
export class CommentsModule {}
