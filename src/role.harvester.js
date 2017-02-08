let Base = require( 'base.role' );

const ENERGY_DESTINATIONS = [
    STRUCTURE_EXTENSION,
    STRUCTURE_SPAWN,
    STRUCTURE_TOWER,
];

class Harvester extends Base {
  run() {
    // TODO: find nearest source that is not occupied
    if ( this.carry.energy < this.carryCapacity ) {
      let sources = this.room.find( FIND_SOURCES );
      if ( this.harvest( sources[ 0 ] ) == ERR_NOT_IN_RANGE ) {
        this.moveTo( sources[ 0 ] );
      }
    }
    else {
      // TODO: Find nearest structures, or structures that really lack energy
      let targets = this.room.find( FIND_STRUCTURES, {
        filter: ( structure ) => {
          return ( _.includes( ENERGY_DESTINATIONS, structure.structureType ) ) && structure.energy < structure.energyCapacity;
        }
      } );
      if ( targets.length > 0 ) {
        if ( this.transfer( targets[ 0 ], RESOURCE_ENERGY ) == ERR_NOT_IN_RANGE ) {
          this.moveTo( targets[ 0 ] );
        }
      }
    }
  }
}

module.exports = Harvester;
