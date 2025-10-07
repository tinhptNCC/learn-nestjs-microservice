import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3001, // Port cho microservice
      },
    },
  );
  await app.listen();
}
void bootstrap();
