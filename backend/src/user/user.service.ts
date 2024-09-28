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

  
}