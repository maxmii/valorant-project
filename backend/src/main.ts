import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {VersioningType, Logger} from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Enable CORS for frontend development
  app.enableCors();

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);

  if (process.env.NODE_ENV === 'development') {
    logger.debug('Debug mode is enabled');
  }
}
bootstrap();
