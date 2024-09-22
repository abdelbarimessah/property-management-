import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { PropertyManager } from "@prisma/client";
import *  as bcrypt from 'bcrypt'
import { RegisterRequestDto } from '../dtos/register-request.dto';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {

  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }


  async validateUser(username: string, password: string) {
    const user = await this.prismaService.propertyManager.findUnique({
      where: { username },
    })

    if (!user)
      throw new Error("User not found");

    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  // async login(user: PropertyManager) {
    
  //   const payload = { username: user.username, sub: user.id };
    
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }

  async login(user: PropertyManager) {
    const payload = { username: user.username, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
    };
  }


  async register(registerBody: RegisterRequestDto) {

    const { username, password } = registerBody;

    const existingUser = await this.prismaService.propertyManager.findUnique({
      where: { username },
    })

    if (existingUser)
      throw new Error("User Already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: RegisterRequestDto = { ...registerBody, password: hashedPassword };

    const createUser = await this.prismaService.propertyManager.create({
      data: newUser,
    });
    return this.login(createUser);
  }

}
