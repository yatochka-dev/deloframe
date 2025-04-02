import * as migration_20250402_210645 from './20250402_210645';

export const migrations = [
  {
    up: migration_20250402_210645.up,
    down: migration_20250402_210645.down,
    name: '20250402_210645'
  },
];
