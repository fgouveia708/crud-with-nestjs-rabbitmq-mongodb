import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ContactEvent {
  constructor(
    @Inject('contact-client')
    private readonly client: ClientProxy,
  ) { }

  public sendMessage(pattern: string, data: any) {
    return this.client.emit(pattern, JSON.stringify(data));
  }
}
