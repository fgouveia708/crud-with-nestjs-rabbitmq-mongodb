import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ContactController } from './controllers/contact.controller';
import { ContactEvent } from './events/contact.event';
import { ContactService } from './services/contact.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'contact-client',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://admin:admin@localhost:5672'
          ],
          queue: 'contact',
        },
      }
    ]),
    HttpModule,
  ],
  providers: [
    ContactEvent,
    ContactService
  ],
  exports: [
  ],
  controllers: [
    ContactController
  ],
})
export class ContactModule { }
