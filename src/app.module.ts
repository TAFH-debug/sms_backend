import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { VerifyModule } from './verify/verify.module';
import { RoleModule } from './role/role.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), UsersModule, AuthModule, PrismaModule, VerifyModule, RoleModule, AnnouncementsModule, ClubsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
