import { createConnection } from 'typeorm';

export default function loader(app) {
  app.addSingleton('typeorm', createModel);

  async function createModel(config) {
    const connection = await createConnection(config);
    return connection;
  }
}
