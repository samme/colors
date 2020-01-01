const assert = require('assert');
const colors = require('..');

const { cssColors, hexColors } = colors;

assert.equal(Object.keys(cssColors).length, 17);
assert.equal(Object.keys(hexColors).length, 17);
assert.equal(cssColors.aqua, '#7fdbff');
assert.equal(hexColors.aqua, 0x7fdbff);
