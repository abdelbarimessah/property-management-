import { Body, Controller, Get, Logger, Post, UseGuards } from "@nestjs/common";
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
        return user;
    }

    @Post('NewProperty')
    async setNewProperty(@Body() bodyData, @CurrentUser() user: PropertyManager) {
        console.log("bodyData: ", bodyData);
        return await this.userService.addNewProperty(bodyData, user);
    }

    @Get('allProperty')
    async getAllProperty(@CurrentUser() user: PropertyManager) {
        return await this.userService.getAllProperty(user)
    }

    @Post('removeProperty')
    async removeProperty (@Body() bodyData)
    {
        return await this.userService.removeProperty(bodyData.id);
    }
}