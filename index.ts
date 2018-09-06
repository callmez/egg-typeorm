export * from './lib/decorators';
export * from './lib/interfaces';

import { EggTypeormOptions } from './lib/interfaces';
import { Connection } from 'typeorm';
import 'egg';

declare module 'egg' {
  // extend app
  interface Application {
    typeorm: Connection;
  }

  // extend context
  interface Context {}

  // extend your config
  interface EggAppConfig {
    typeorm: EggTypeormOptions;
  }
}
