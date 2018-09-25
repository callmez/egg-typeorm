import { EggTypeormOptions } from './lib/interfaces';
import { Connection } from 'typeorm';
import 'egg';

export * from './lib/decorators';
export * from './lib/interfaces';

declare module 'egg' {
  // extend app
  interface Application {
    typeorm: Connection;
  }

  // extend your config
  interface EggAppConfig {
    typeorm: EggTypeormOptions;
  }
}
