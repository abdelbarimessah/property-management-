import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
    ) { }


    async getUserById(id: number) {
        const user = await this.prismaService.propertyManager.findUnique({
            where: {
                id: id,
            },
        })
        if (!user)
            throw new NotFoundException('not found user');
        return user;
    }

    async getAllUsers() {
        const all = await this.prismaService.propertyManager.findMany();
        if (!all)
            throw new NotFoundException('no user in this table');
        return all;
    }

    async addNewProperty(bodyData, user) {
        return await this.prismaService.property.create({
            data: {
                name: bodyData.name,
                type: bodyData.type,
                number_of_units: Number(bodyData.number_of_units),
                rental_cost: Number(bodyData.rental_cost),
                propertyManagerId: user.id
            },
        });
    }

    async getAllProperty(user) {
        return await this.prismaService.property.findMany({
            where: {
                propertyManagerId: user.id
            },
            include: {
                tenants: true,
            },
        });
    }

    async removeProperty(id) {
        return await this.prismaService.property.delete({
            where: {
                id: id
            }
        });
    }

    async setNewTenants(bodyData) {
        return await this.prismaService.tenant.create({
            data: {
                name: bodyData.name,
                contact_details: bodyData.contact_details,
                section: bodyData.section,
                property: {
                    connect: { id: bodyData.property_id },
                },
            }
        })
    }


    async UpdateTenants(bodyData) {
        return await this.prismaService.tenant.update({
            where: {
                id: bodyData.id
            },
            data: {
                name: bodyData.name,
                contact_details: bodyData.contact_details,
                section: bodyData.section,
                property_id: bodyData.property_id,
            }
        });
    }

    async getAllTenants(user) {
        return await this.prismaService.tenant.findMany({
            where: {
                property: {
                    propertyManagerId: user.id
                },
            },
            include: {
                property: true,
            },
        })
    }

    async removeTenant(id) {
        return await this.prismaService.tenant.delete({
            where: {
                id: id
            }
        });
    }

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
}