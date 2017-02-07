const roles = require( 'hivemind.roles' );
const procreation = require( 'hivemind.procreation' );

class Queen {
  // TODO: Only get creeps every few ticks. If a creep is killed, a task assigned to it will cause an error and that should trigger an immediate recount.
  gatherCreeps() {
    if ( true ) {
      return Object.keys( Game.creeps ).map( creepName => {
        const creep = Game.creeps[ creepName ];
        return new roles[ creep.memory.role ]( creep );
      } );
    }
  }

  creepsWithRole( role ) {
    return this.creeps().filter( creep => creep.memory.role === role );
  }

  run() {
    this.creeps = this.gatherCreeps();
    procreation.run();
    _.each( this.creeps, creep => creep.run() );
  }
}

let queen = new Queen;

module.exports = queen;
