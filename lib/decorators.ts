import { Repository, Connection } from 'typeorm';

export function InjectRepository(Entity: Function) {
  return (target, key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      get: function() {
        const connection: Connection = (this as any).app.typeorm;
        if (Entity.prototype instanceof Repository) {
          return connection.getCustomRepository(Entity);
        }
        return connection.options.type === 'mongodb'
          ? connection.getMongoRepository(Entity)
          : connection.getRepository(Entity);
      },
    });
  };
}
