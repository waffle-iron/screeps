const roles = require( 'hivemind.roles' );
const BaseSpawn = require( 'base.spawn');

class Queen {
  // TODO: Only get creeps every few ticks. If a creep is killed, a task assigned to it will cause an error and that should trigger an immediate recount.
  creepsInventory() {
    if ( true ) {
      return Object.keys( Game.creeps ).map( creepName => {
        const creep = Game.creeps[ creepName ];
        return new roles[ creep.memory.role ].klass( creep );
      } );
    }
  }

  creepsWithRole( role ) {
    return this.creeps().filter( creep => creep.memory.role === role );
  }

  run() {
    this.memory = Memory.queen;
    this.creeps = this.creepsInventory();
    if (Game.spawns) { _.each( Game.spawns, spawn => spawn.execute() ) };
    _.each( this.creeps, creep => creep.run() );
  }
}

let queen = new Queen;

module.exports = queen;
