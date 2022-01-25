import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { IBaseRepository } from './ibase.repository';


@Injectable()
export abstract class BaseRepository<TEntity extends Document> implements IBaseRepository<TEntity> {

    constructor(private readonly basemodule: Model<TEntity>) { }

    async delete(id: string) {
        await this.basemodule.findByIdAndDelete({ _id: id });
    }

    async getAll(): Promise<TEntity[]> {
        return await this.basemodule.find({}).exec();
    }

    async getById(id: string): Promise<TEntity> {
        return await this.basemodule.findById(id).exec();
    }

    async update(entity: any): Promise<TEntity> {
        return await this.basemodule.findOneAndUpdate({ _id: entity.id }, entity, { new: true });
    }

    async create(entity: any): Promise<TEntity> {
        const response = new this.basemodule(entity);
        return response.save();
    }
}
