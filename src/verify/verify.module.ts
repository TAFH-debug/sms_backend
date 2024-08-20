import { Module } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { VerifyController } from './verify.controller';


@Module({
  exports: [VerifyService],
  imports: [UsersModule, JwtModule.register({
    secret: `${process.env.VERIFY_JWT_SECRET}`,
    signOptions: { expiresIn: '5m' }
  })],
  controllers: [VerifyController],
  providers: [VerifyService]
})
export class VerifyModule {}
