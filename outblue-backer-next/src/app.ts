import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.use(express.static('../outblue-fronter-next/dist/outblue-fronter-next'));
  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
