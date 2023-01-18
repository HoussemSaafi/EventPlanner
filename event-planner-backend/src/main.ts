import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, Authorization',
    );
    next();
  });
  await app.listen(3000);
}
bootstrap();