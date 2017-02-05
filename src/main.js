// const watcher = require('watch-client.js');
const queen = require('hivemind.queen');
const clearMemory = require('helpers').clearMemory;

const profiler = require('screeps-profiler');
profiler.enable();

module.exports.loop = function () {
    profiler.wrap(function () {
        clearMemory();
        queen.run()
        // watcher();
    });
};
