let profiler = require( 'screeps-profiler' );

class BaseRole extends Creep {
  constructor( creep ) {
    super( creep.id );
  }

  role() {
    return this.memory.role;
  }

  getSpawn() {
    const spawns = Object.keys( Game.spawns ).map( spawnName => Game.spawns[ spawnName ] );
    const validSpawn = spawns.find( spawn => {
      return spawn.room === this.room;
    } );
    const spawn = validSpawn || Game.spawns[ this.memory.spawn ];
    if ( spawn ) {
      return spawn.enhance();
    }
    return spawn;
  }
}

profiler.registerClass( BaseRole, 'CreepBase' );

module.exports = BaseRole;
