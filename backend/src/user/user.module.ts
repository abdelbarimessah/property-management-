import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";

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
    controllers: [UsersController],
    providers: [UserService, PrismaService, JwtService],
    exports: [UserService],
  })
  export class UsersModule {}
  