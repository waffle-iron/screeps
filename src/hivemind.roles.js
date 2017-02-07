// TODO: Only require roles that are needed for the highest room level.

let Builder = require( 'role.builder' );
let Harvester = require( 'role.harvester' );
let Upgrader = require( 'role.upgrader' );
let Miner = require( 'role.miner' );

const builder = {
  klass: Builder,
  tier: {
    1: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
  },
}

const harvester = {
  klass: Harvester,
  tier: {
    1: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
  },
}

const upgrader = {
  klass: Upgrader,
  tier: {
    1: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
  },
}

const miner = {
  klass: Miner,
  tier: {
    1: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
    },
  },
}

const roles = {
  builder,
  harvester,
  upgrader,
  miner,
};

module.exports = roles;
