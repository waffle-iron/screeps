let randomNumber = require( 'helpers' ).randomNumber;

const ROLES = {
  'harvester': 2,
  'upgrader': 2,
  'builder': 2,
  'miner': 2,
};

class Procreation {
  run() {
    for ( let role in ROLES ) {
      // TODO: Count creeps in another tick then the procreation code
      let creeps = _.filter( Game.creeps, ( creep ) => creep.memory.role == role );
      let amountNeeded = ROLES[ role ];
      if ( creeps.length < amountNeeded ) {
        let name = `${role}-${randomNumber()}`;
        let result = Game.spawns[ 'Spawn1' ].createCreep(
          [ WORK, CARRY, MOVE ],
          name,
          { role: role }
        );
        console.log( `Spawning new ${role}: ${name}. Result: ${result}` );
      }
    }
  }
}

let procreation = new Procreation;

module.exports = procreation;
