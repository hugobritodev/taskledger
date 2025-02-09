import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPrefix('api'); // Optional: Set a global prefix for all routes
  await app.listen(3000);
}

bootstrap();
