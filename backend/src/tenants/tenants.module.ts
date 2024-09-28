import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { TenantsController } from "./tenants.controller";
import { TenantsService } from "./tenants.service";

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
    controllers: [TenantsController],
    providers: [TenantsService, PrismaService, JwtService],
    exports: [TenantsService],
  })
  export class TenantsModule {}
  