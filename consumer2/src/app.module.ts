import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './app/modules/contact-module/contact.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://sa:Password@localhost:27017'),
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
