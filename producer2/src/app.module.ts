import { Module } from '@nestjs/common';
import { ContactModule } from './app/modules/contact-module/contact.module';
@Module({
  imports: [
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
