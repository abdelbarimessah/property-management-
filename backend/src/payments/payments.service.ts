import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PaymentsService {
    constructor(
        private prismaService: PrismaService,
    ) { }
    async setNewPayment(bodyData) {

        const payment_date = new Date(bodyData.payment_date);
        return await this.prismaService.rentalPayment.create({
            data: {
                tenant_id: bodyData.tenant_id,
                amount: bodyData.amount,
                payment_date: payment_date,
                settled: bodyData.settled,
            }
        })
    }

    async getAllPayment(user) {
        const propertyManagerId = user.id;

        return await this.prismaService.rentalPayment.findMany({
            where: {
                tenant: {
                    property: {
                        propertyManagerId: propertyManagerId,
                    },
                },
            },
            include: {
                tenant: {
                    include: {
                        property: true,
                    },
                },
            },
        });
    }

    async removePayment(bodyData) {
        return await this.prismaService.rentalPayment.delete({
            where: {
                id: bodyData.id
            }
        })
    }

}