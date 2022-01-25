export interface IBaseRepository<TEntity> {
    getAll(): Promise<TEntity[]>;
    getById(id: string): Promise<TEntity>;
    delete(id: string);
    update(entity: TEntity | any): Promise<TEntity>;
    create(entity: TEntity | any): Promise<TEntity>;
}