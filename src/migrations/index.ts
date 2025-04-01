import * as migration_20250329_212155 from './20250329_212155';
import * as migration_20250330_191000 from './20250330_191000';
import * as migration_20250330_211514 from './20250330_211514';
import * as migration_20250401_124111 from './20250401_124111';
import * as migration_20250401_202908 from './20250401_202908';

export const migrations = [
  {
    up: migration_20250329_212155.up,
    down: migration_20250329_212155.down,
    name: '20250329_212155',
  },
  {
    up: migration_20250330_191000.up,
    down: migration_20250330_191000.down,
    name: '20250330_191000',
  },
  {
    up: migration_20250330_211514.up,
    down: migration_20250330_211514.down,
    name: '20250330_211514',
  },
  {
    up: migration_20250401_124111.up,
    down: migration_20250401_124111.down,
    name: '20250401_124111',
  },
  {
    up: migration_20250401_202908.up,
    down: migration_20250401_202908.down,
    name: '20250401_202908'
  },
];
