// TODO: Only require roles that are needed for the highest room level.

let Builder = require( 'roles.builder' );
let Harvester = require( 'roles.harvester' );
let Upgrader = require( 'roles.upgrader' );
let Miner = require( 'roles.miner' );

const roles = {
  builder: Builder,
  harvester: Harvester,
  upgrader: Upgrader,
  miner: Miner,
};

module.exports = roles;
