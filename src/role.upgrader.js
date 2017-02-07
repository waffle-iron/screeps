let Base = require( 'base.role' );

class Upgrader extends Base {
  run() {
    if ( this.memory.upgrading && this.carry.energy == 0 ) {
      this.memory.upgrading = false;
      this.say( '(U) harvesting' );
    }
    if ( !this.memory.upgrading && this.carry.energy == this.carryCapacity ) {
      this.memory.upgrading = true;
      this.say( '(U) upgrading' );
    }

    if ( this.memory.upgrading ) {
      if ( this.upgradeController( this.room.controller ) == ERR_NOT_IN_RANGE ) {
        this.moveTo( this.room.controller );
      }
    } else {
      let sources = this.room.find( FIND_SOURCES );
      if ( this.harvest( sources[ 0 ] ) == ERR_NOT_IN_RANGE ) {
        this.moveTo( sources[ 0 ] );
      }
    }
  }
}

module.exports = Upgrader;
