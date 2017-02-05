let profiler = require('screeps-profiler');

class Base extends Creep {
    constructor(creep) {
        super(creep.id);
        this.creep = creep;
    }

    role() {
        return this.memory.role;
    }


    getSpawn() {
        const spawns = Object.keys(Game.spawns).map(spawnName => Game.spawns[spawnName]);
        const validSpawn = spawns.find(spawn => {
            return spawn.room === this.room;
        });
        const spawn = validSpawn || Game.spawns[this.memory.spawn];
        if (spawn) {
            return spawn.enhance();
        }
        return spawn;
    }
}

profiler.registerClass(Base, 'CreepBase');

module.exports = Base;
