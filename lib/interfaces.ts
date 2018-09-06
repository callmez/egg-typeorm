import { ConnectionOptions } from 'typeorm';

export interface EggTypeormOptions {
  client?: ConnectionOptions;
  clients?: ConnectionOptions[];
}
