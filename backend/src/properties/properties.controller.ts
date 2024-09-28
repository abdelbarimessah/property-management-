import { Body, Controller, Get, Logger, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PropertiesService } from "./properties.service";
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PropertyManager } from '@prisma/client';

@Controller('properties')
@UseGuards(AuthGuard('jwt'))
export class PropertiesController {

    constructor(
        private propertiesService: PropertiesService,
    ) {}


    @Post('NewProperty')
    async setNewProperty(@Body() bodyData, @CurrentUser() user: PropertyManager) {
        return await this.propertiesService.addNewProperty(bodyData, user);
    }

    @Get('allProperty')
    async getAllProperty(@CurrentUser() user: PropertyManager) {
        return await this.propertiesService.getAllProperty(user)
    }

    @Post('removeProperty')
    async removeProperty(@Body() bodyData) {
        return await this.propertiesService.removeProperty(bodyData.id);
    }

}