import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function parseAllowedOrigins(origins: string | undefined): string[] {
  if (!origins) return [];
  return origins.split(',').map(origin => origin.trim());
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Read origins from environment
  const allowedOrigins = parseAllowedOrigins(process.env.ALLOWED_ORIGINS);

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
