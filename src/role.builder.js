let Base = require( 'base.role' );

class Builder extends Base {
  run() {
    if ( this.memory.building && this.carry.energy == 0 ) {
      this.memory.building = false;
      this.memory.task = 'harvesting';
      this.say( 'harvesting' );
    }

    if ( !this.memory.building && this.carry.energy == this.carryCapacity ) {
      this.memory.building = true;
      this.say( 'building' );
    }

    // TODO: Make this smarter: go to nearest contruction site id:6 +enhancement gh:6
    if ( this.memory.building ) {
      let targets = this.room.find( FIND_CONSTRUCTION_SITES );
      if ( targets.length ) {
        if ( this.build( targets[ 0 ] ) == ERR_NOT_IN_RANGE ) {
          this.moveTo( targets[ 0 ] );
        }
      }
    } else {
      // TODO: Find nearest source that is not occupied id:7 +enhancement gh:5
      let sources = this.room.find( FIND_SOURCES );
      if ( this.harvest( sources[ 0 ] ) == ERR_NOT_IN_RANGE ) {
        this.moveTo( sources[ 0 ] );
      }
    }
  }
}

module.exports = Builder;
