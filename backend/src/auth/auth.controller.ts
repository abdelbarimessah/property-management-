import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { RegisterRequestDto } from '../dtos/register-request.dto';
import { Public } from '../decorators/public.decorator';
import { Response } from 'express';

@Public()
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req, @Res() res) {

        const token = this.authService.login(req.user);
        res.cookie('authorization', (await token).access_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        });

        return res.status(200).json({ message: "Login successful" });
        // return res.redirect("http://localhost:8000/")
    }

    @Post('register')
    async register(
        @Body() registerBody: RegisterRequestDto,
    ) {
        return await this.authService.register(registerBody);

    }


    @Get('logout')
    @UseGuards(AuthGuard('jwt'))
    async logout(@Res() res: Response) {
      res.clearCookie('authorization', {
        httpOnly: true,
      });
      return res.json({ success: true, message: 'Logged out successfully' });
    }
}