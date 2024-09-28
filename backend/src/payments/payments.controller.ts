
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from 'src/auth/current-user.decorator';
import { PropertyManager } from '@prisma/client';
import { AuthGuard } from "@nestjs/passport";
import { PaymentsService } from "./payments.service";



@Controller('payments')
@UseGuards(AuthGuard('jwt'))
export class PaymentsController {
    constructor(private paymentsService: PaymentsService) { }

    @Post('NewPayment')
    async newPayment(@Body() bodyData) {
        return await this.paymentsService.setNewPayment(bodyData);
    }

    @Get('AllPayments')
    async getAllPayments(@CurrentUser() user: PropertyManager) {
        return await this.paymentsService.getAllPayment(user)
    }

    @Post('removePayment')
    async removePayment(@Body() bodyData) {
        return await this.paymentsService.removePayment(bodyData);
    }

}