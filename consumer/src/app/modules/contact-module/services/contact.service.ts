import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseService } from 'src/app/base/ibase.service';
import { ContactDto } from '../models/dtos/contact.dto';
import { ContactRepository } from '../repositories/contact.repository';

@Injectable()
export class ContactService implements IBaseService<ContactDto> {
    constructor(
        private readonly repository: ContactRepository,
    ) { }

    async getAll(): Promise<ContactDto[]> {
        try {
            return await this.repository.getAll();
        } catch (error: any) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async getById(id: string): Promise<ContactDto> {
        try {
            return await this.repository.getById(id);;
        } catch (error: any) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async verifyEmail(email: string): Promise<boolean> {
        try {
            return await this.repository.verifyEmail(email.toLocaleLowerCase());
        } catch (error: any) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async getByEmail(email: string): Promise<ContactDto> {
        try {
            return await this.repository.getByEmail(email.toLocaleLowerCase());
        } catch (error: any) {
            const messageError = 'Error: ' + error.message;
            console.error(messageError)
            throw new HttpException(messageError, HttpStatus.BAD_REQUEST);
        }
    }

    async update(dto: any): Promise<boolean> {
        try {
            if (dto.email)
                dto.email = dto.email.toLocaleLowerCase();

            await this.repository.update(dto);
            return true;
        } catch (error) {
            console.error('Error: ' + error.message)
        }
    }

    async create(dto: ContactDto): Promise<boolean> {
        try {
            dto.email = dto.email.toLocaleLowerCase();
            await this.repository.create(dto);
            return true;
        } catch (error) {
            console.error('Error: ' + error.message);
        }
    }

    async delete(id): Promise<boolean> {
        try {
            await this.repository.delete(id);
            return true;
        } catch (error) {
            console.error('Error: ' + error.message);
        }
    }
}