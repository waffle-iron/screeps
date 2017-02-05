let Base = require('roles.base');

class Builder extends Base {
    run() {

        if (this.memory.building && this.carry.energy == 0) {
            this.memory.building = false;
            this.memory.task = 'harvesting';
            this.say('(b) harvesting');
        }

        if (!this.memory.building && this.carry.energy == this.carryCapacity) {
            this.memory.building = true;
            this.say('(b) building');
        }

        if (this.memory.building) {
            let targets = this.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length) {
                if (this.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    this.moveTo(targets[0]);
                }
            }
        } else {
            let sources = this.room.find(FIND_SOURCES);
            if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                this.moveTo(sources[0]);
            }
        }
    }
}
;

module.exports = Builder;
