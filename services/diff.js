const _ = require('lodash');
const GoogleDiff = require('googlediff');
const seedrandom = require('seedrandom');

const gdiff = new GoogleDiff();

const ITERATIONS = 10000;
const ALPHABET = 'GATTACA';
const LENGTH = 100;

const seed = Math.floor(Math.random() * 10000);
const random = seedrandom(seed);

console.log('Running computing ' + ITERATIONS + ' diffs with seed ' + seed + '...');

console.log('Generating strings...');
const strings = [];
for(let i = 0; i <= ITERATIONS; ++i) {
  const chars = [];
  for(let l = 0; l < LENGTH; ++l) {
    const letter = ALPHABET.substr(Math.floor(random() * ALPHABET.length), 1);
    chars.push(letter);
  }
  strings.push(chars.join(''));
}

console.log('Running tests *without* cursor information...');
for(let i = 0; i < ITERATIONS; ++i) {
  const result = diff(strings[i], strings[i+1]);
  const expected = gdiff.diff_main(strings[i], strings[i+1]);
  if (!_.isEqual(result, expected)) {
    console.log('Expected', expected);
    console.log('Result', result);
    throw new Error('Diff produced difference results.');
  }
}

console.log('Running tests *with* cursor information');
for(let i = 0; i < ITERATIONS; ++i) {
  const cursor_pos = Math.floor(random() * strings[i].length + 1);
  const diffs = diff(strings[i], strings[i+1], cursor_pos);
  const patch = gdiff.patch_make(strings[i], strings[i+1], diffs);
  const expected = gdiff.patch_apply(patch, strings[i])[0];
  if (expected !== strings[i+1]) {
    console.log('Expected', expected);
    console.log('Result', strings[i+1]);
    throw new Error('Diff produced difference results.');
  }
}

console.log("Success!");