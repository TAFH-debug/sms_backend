import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { JwtGuard } from 'src/auth/auth.guard';
import { VerifyDto } from './dto/verify.dto';

@Controller('verify')
@UseGuards(JwtGuard)
export class VerifyController {
    constructor(private verifyService: VerifyService) {}
    
    @Get()
    async getToken(@Req() req) {
        return this.verifyService.getToken(req['user'].id);
    }

    @Post()
    async verify(@Body() verifyDto: VerifyDto) {
        return this.verifyService.verify(verifyDto.token);
    }
}
