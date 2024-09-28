import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { PrismaService } from "src/prisma/prisma.service";




@Module({
    imports: [
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: configService.get('JWT_EXPIRES_IN'),
                },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [PropertiesController],
    providers: [PropertiesService, PrismaService, JwtService],
    exports: [PropertiesService],
})
export class PropertiesModule { }
