import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ContactDto } from '../models/dtos/contact.dto';
import { ContactService } from '../services/contact.service';

@Controller()
export class ContactEvent {
  constructor(private service: ContactService) { }


  @EventPattern("contact-create")
  async contactCreate(@Payload() data: any, @Ctx() context: RmqContext) {
    console.info(`Event Pattern: contact-create Event Data: ${data}, starting create contact.`);

    const dto: ContactDto = JSON.parse(data);
    this.service.create(dto);

    console.info(`Event Pattern: contact-create Event Data: ${data}, successfully consumed.`);
  }

  @EventPattern("contact-update")
  async contactUpdate(@Payload() data: any, @Ctx() context: RmqContext) {
    console.info(`Event Pattern: contact-update Event Data: ${data}`);

    this.service.update(JSON.parse(data));

    console.info(`Event Pattern: contact-update Event Data: ${data}, successfully consumed.`)
  }

  @EventPattern("contact-delete")
  async contactDelete(@Payload() data: any, @Ctx() context: RmqContext) {
    console.info(`Event Pattern: contact-delete Event Data: ${data}`);

    this.service.delete(JSON.parse(data).id);

    console.info(`Event Pattern: contact-delete Event Data: ${data}, successfully consumed.`)
  }
}