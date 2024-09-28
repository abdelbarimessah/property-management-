import { Body, Controller, UseGuards, Post, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TenantsService } from "./tenants.service";
import { PropertyManager } from "@prisma/client";
import { CurrentUser } from "src/auth/current-user.decorator";



@Controller('tenants')
@UseGuards(AuthGuard('jwt'))
export class TenantsController {
    constructor(private tenantsService: TenantsService) { }

    @Post('NewTenants')
    async setNewTenants(@Body() bodyData) {
        return await this.tenantsService.setNewTenants(bodyData);
    }

    @Post('UpdateTenants')
    async UpdateTenants(@Body() bodyData) {
        return await this.tenantsService.UpdateTenants(bodyData);
    }

    @Get('allTenants')
    async getAllTenants(@CurrentUser() user: PropertyManager) {
        return await this.tenantsService.getAllTenants(user);
    }

    @Post('removeTenant')
    async removeTenant(@Body() bodyData) {
        return await this.tenantsService.removeTenant(bodyData.id);
    }

}