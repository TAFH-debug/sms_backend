import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClubsRepository } from './clubs.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClubsController],
  providers: [ClubsService, ClubsRepository],
})
export class ClubsModule {}
