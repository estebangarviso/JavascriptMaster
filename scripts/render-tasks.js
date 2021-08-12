'use strict';
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderTasks() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/tasks');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');

    sh.cp('-R', sourcePath, destPath)
};
