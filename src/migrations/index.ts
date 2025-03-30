import * as migration_20250329_212155 from './20250329_212155'

export const migrations = [
  {
    up: migration_20250329_212155.up,
    down: migration_20250329_212155.down,
    name: '20250329_212155',
  },
]
