export interface IBaseQueue<TEntity> {
    sendMessage(entity: TEntity): Promise<TEntity>;
}