const roles = require('hivemind.roles');
const procreation = require('hivemind.procreation');

class Queen {
    gatherCreeps() {
        return Object.keys(Game.creeps).map(creepName => {
            const creep = Game.creeps[creepName];
            return new roles[creep.memory.role](creep);
        });
    }

    creepsWithRole(role) {
        return this.creeps().filter(creep => creep.memory.role === role);
    }

    run() {
        this.creeps = this.gatherCreeps();
        procreation.run();
        _.each(this.creeps, creep => creep.run());
        console.log(`Creeps: ${this.creeps.length}`);
    }
}

let queen = new Queen;

module.exports = queen;
