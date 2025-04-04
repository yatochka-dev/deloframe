import * as migration_20250402_210645 from './20250402_210645';
import * as migration_20250404_143826 from './20250404_143826';

export const migrations = [
  {
    up: migration_20250402_210645.up,
    down: migration_20250402_210645.down,
    name: '20250402_210645',
  },
  {
    up: migration_20250404_143826.up,
    down: migration_20250404_143826.down,
    name: '20250404_143826'
  },
];
