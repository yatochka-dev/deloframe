import * as migration_20250329_211918 from './20250329_211918';

export const migrations = [
  {
    up: migration_20250329_211918.up,
    down: migration_20250329_211918.down,
    name: '20250329_211918'
  },
];
