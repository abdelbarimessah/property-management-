import { Controller, Get, Logger, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PropertyManager } from '@prisma/client';
import { AuthGuard } from "@nestjs/passport";

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor(private userService: UserService) { }


    @Get('All')
    async findAll() {
        return await this.userService.getAllUsers();
    }

    @Get('me')
    async getProfile(@CurrentUser() user: PropertyManager) {
        Logger.log("the current use is ", user);
        return user;
    }
}