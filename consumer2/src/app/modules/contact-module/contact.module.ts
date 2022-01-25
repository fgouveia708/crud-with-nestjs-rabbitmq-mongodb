import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactController } from './controllers/contact.controller';
import { ContactEvent } from './events/contact.event';
import { ContactSchema } from './models/databases/schemas/contact.schema';
import { ContactRepository } from './repositories/contact.repository';
import { ContactService } from './services/contact.service';
@Module({

  imports: [
    
    MongooseModule.forFeature([
      {
        name: 'ContactSchema',
        schema: ContactSchema,
      }
    ]),
    HttpModule
  ],
  controllers: [
    ContactController,
    ContactEvent
  ],
  providers: [
    ContactService,
    ContactRepository
  ],
})
export class ContactModule { }