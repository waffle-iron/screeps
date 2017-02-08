// TODO: Only require roles that are needed for the highest room level. id:5

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
      priority: 50,
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
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
      priority: 1,
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
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
      priority: 50,
    },
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
  },
}

const miner = {
  klass: Miner,
  tier: {
    2: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    3: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    4: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    5: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    6: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    7: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
    },
    8: {
      min: 2,
      cost: 200,
      parts: [ WORK, CARRY, MOVE ],
      priority: 50,
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
