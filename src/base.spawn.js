const randomNumber = require( 'helpers' ).randomNumber;

const ROLES = require('hivemind.roles');
const SPAWN_TIERS = require('config').SPAWN_TIERS;

StructureSpawn.prototype.execute = function() {
  this.calculateTier();
  this.manageProcreation();
}

StructureSpawn.prototype.calculateTier = function () {
  // Level of this spawn, ignoring RCL. Have a certain RCL tier doesn't mean the capacity is increased immediately.
  // TODO: only check this when there's a chance the spawn was upgraded. Time will increase with every upgrade.
  // TODO: if controller is downgraded, need to recheck tier immediately.
  for ( let amountNeeded in SPAWN_TIERS ) {
    if ( this.room.energyCapacityAvailable >= amountNeeded ) {
      this.memory.tier = SPAWN_TIERS[ amountNeeded ];
      break;
    }
  }
}

StructureSpawn.prototype.manageProcreation = function() {
  for ( let role in ROLES ) {
    // TODO: Count creeps in another tick then the procreation code
    // TODO: Filter on creeps that have this spawn as base
    let currentTier = this.memory.tier;
    if (ROLES[ role ].tier[currentTier]) { // Is this creep needed for this tier?
      let creeps = _.filter( Game.creeps, ( creep ) => creep.memory.role == role );
      let min = ROLES[ role ].tier[currentTier].min;
      let cost = ROLES[ role ].tier[currentTier].cost;
      if ( creeps.length < min && this.energy >= cost && !this.memory.spawning ) {
        let name = `${role}-${randomNumber()}-${currentTier}`;
          let result = this.createCreep(
            ROLES[ role ].tier[currentTier].parts,
            name,
            { role: role, base: this.name, notify_base: true }
          );
          this.memory.spawning = true;
          console.log( `${Game.time} - Spawning new ${role}: ${name}. Result: ${result}` );
      }
    }
  }
}
