
export interface IBaseService<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
    update(dto: T): Promise<boolean>;
    create(dto: T): Promise<boolean>;
}