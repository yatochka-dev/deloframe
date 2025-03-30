import * as migration_20250329_212155 from './20250329_212155';
import * as migration_20250330_191000 from './20250330_191000';

export const migrations = [
  {
    up: migration_20250329_212155.up,
    down: migration_20250329_212155.down,
    name: '20250329_212155',
  },
  {
    up: migration_20250330_191000.up,
    down: migration_20250330_191000.down,
    name: '20250330_191000'
  },
];
