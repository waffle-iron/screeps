let Base = require( 'base.role' );

class Miner extends Base {
  run() {
    // TODO: Find nearest source that is not occupied
    let sources = this.room.find( FIND_SOURCES );
    if ( this.harvest( sources[ 0 ] ) == ERR_NOT_IN_RANGE ) {
      this.moveTo( sources[ 0 ] );
    }
    this.drop( RESOURCE_ENERGY );
  }
}

module.exports = Miner;
