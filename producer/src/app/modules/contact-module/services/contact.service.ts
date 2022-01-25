import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ContactEvent } from '../events/contact.event';
import { CreateContactDto } from '../models/dtos/create-contact.dto';
import { UpdateContactDto } from '../models/dtos/update-contact.dto';

@Injectable()
export class ContactService {
    constructor(
        private readonly event: ContactEvent
    ) { }

    async create(dto: CreateContactDto): Promise<boolean> {
        try {
            console.info(`Send Event Pattern: contact-create Event Data: ${JSON.stringify(dto)}`);
            await this.event.sendMessage('contact-create', dto);

            return true;
        } catch (error) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, dto: UpdateContactDto): Promise<boolean> {
        try {
            dto.id = id;

            console.info(`Send Event Pattern: contact-update Event Data: ${JSON.stringify(dto)}`);
            await this.event.sendMessage('contact-update', dto);

            return true;
        } catch (error) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const message = { id };
            console.info(`Send Event Pattern: contact-delete Event Data: ${JSON.stringify(message)}`);
            await this.event.sendMessage('contact-delete', message);

            return true;
        } catch (error) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

}