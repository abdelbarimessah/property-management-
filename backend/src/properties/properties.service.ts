import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class PropertiesService {
    constructor(
        private prismaService: PrismaService,
    ) { }

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


}