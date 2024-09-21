import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const logger: Logger = new Logger('-------------TheAppLoggerIs-----------');
  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
