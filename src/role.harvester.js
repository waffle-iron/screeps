let Base = require('base.role');

const HARVEST_STRUCTURES = [
    STRUCTURE_EXTENSION,
    STRUCTURE_SPAWN,
    STRUCTURE_TOWER,
];

class Harvester extends Base {
    run() {
        if (this.carry.energy < this.carryCapacity) {
            let sources = this.room.find(FIND_SOURCES);
            if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                this.moveTo(sources[0]);
            }
        }
        else {
            let targets = this.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ( _.includes(HARVEST_STRUCTURES, structure.structureType) ) && structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length > 0) {
                if (this.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    this.moveTo(targets[0]);
                }
            }
        }
    }
}

module.exports = Harvester;
