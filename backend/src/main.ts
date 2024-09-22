import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  app.enableCors({
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  require("dotenv").config();
  const logger: Logger = new Logger('-------------TheAppLoggerIs-----------');
  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
