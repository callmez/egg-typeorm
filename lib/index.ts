export * from './decorators';
export * from './interfaces';

import { EggTypeormOptions } from './interfaces';
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
