import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as mailer from 'nodemailer';

@Injectable()
export class VerifyService {

    transporter: mailer.Transporter;

    constructor(
        private jwtService: JwtService,
        private userService: UsersService
    ) {
        this.transporter = mailer.createTransport({
            host: "smtp.yandex.com",
            port: 465,
            secure: true,
            auth: {
              user: "auschahman@yandex.kz",
              pass: "scchhyxxgvqgbdiy",
            },
        });
    }

    async getToken(userId: string) {
        const payload = { id: userId };
        const token = this.jwtService.sign(payload);
        const user = await this.userService.findOne(userId);
        return await this.sendEmail(token, user.email);
    }

    async verify(token: string) {
        const payload = this.jwtService.verify(token);
        return this.userService.verify(payload.id);
    }

    async sendEmail(token: string, email: string) {
        const info = await this.transporter.sendMail({
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL}>`,
            to: `${email}`,
            subject: "Verification email from SMS",
            html: `<b>Your verification link is ${process.env.IP_ADDRESS + "/verify?token=" + token}</b>`,
        });
        
        console.log("Message sent: %s", info.messageId);
    }
}
