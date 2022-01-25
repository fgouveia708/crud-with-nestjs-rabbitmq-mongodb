import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/app/base/base.repository';
import { Contact } from '../models/entities/contact.entity';

@Injectable()
export class ContactRepository extends BaseRepository<Contact> {
    constructor(@InjectModel('ContactSchema') private contactModel: Model<Contact>) {
        super(contactModel);
    }

    async verifyEmail(email: string): Promise<boolean> {
        return await this.contactModel.exists({ email: email });
    }

    async getByEmail(email: string): Promise<Contact> {
        return await this.contactModel.findOne({ email: email });
    }
}