function randomNumber() {
    let min = Math.ceil(100);
    let max = Math.floor(999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearMemory() {
    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log(`Clearing non-existing creep memory: ${name}`);
        }
    }
}

module.exports = {
    randomNumber,
    clearMemory,
};
