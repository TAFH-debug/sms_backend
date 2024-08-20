import { Controller, Get, Patch, Query, Req, UseGuards } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { JwtGuard } from 'src/auth/auth.guard';

@Controller('verify')
@UseGuards(JwtGuard)
export class VerifyController {
    constructor(private verifyService: VerifyService) {}
    
    @Get()
    async getToken(@Req() req) {
        return this.verifyService.getToken(req['user'].id);
    }

    @Patch()
    async verify(@Query('token') token: string) {
        return this.verifyService.verify(token);
    }
}
