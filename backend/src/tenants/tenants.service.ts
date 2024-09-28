import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TenantsService {
    constructor(
        private prismaService: PrismaService,
    ) { }


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
}