import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
  });
  app.use(compression());

  const options = new DocumentBuilder()
    .setTitle('Backend Contact Producer API')
    .setDescription('API backend to CRUD Contact')
    .setVersion('1.0.0')
    .build();

    const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
