/*
 * Utilities to supplement conjugation library.
 */

/* Shows what a verb would look like if it wasn't irregular.
 * Wraps the conjugation logic from the conjugation library
 * but decouples from irregularity.
 */

const conjugate = require('./conjugation');
const verbEndings = require('../data/verb-endings.json');

const verb_endings = verbEndings.verbEndings;
const ir_endings = verbEndings.irEndings;
const er_endings = verbEndings.erEndings;
const ar_endings = verbEndings.arEndings;

const endsWith = function(str, ending) {
	const lastIndex = str.lastIndexOf(ending);
	return (lastIndex !== -1) && (lastIndex + ending.length === str.length);
}

const update = function(dict, other) {
	if (other instanceof Array) {
		for (let i = other.length - 1; i >= 0; i--) {
			if (other[i].length !== 2) {
				throw 'other array must contain pairs of [key, value]';
			}
			dict[other[i][0]] = other[i][1];
		}
		return
	}
	if (other instanceof Object) {
		for (let key in other) {
			if (other.hasOwnProperty(key)) {
				dict[key] = other[key];
			}
		}
	}
}


const getRoot = function (verb) {
	for (let i = verb_endings.length - 1; i >= 0; i--) {
		if (endsWith(verb, verb_endings[i])) {
			return verb.substring(0, verb.length - verb_endings[i].length);
		}
	}
	return null;
}


const items = function(dict) {
	const items = [];
	for (let key in dict) {
		if (dict.hasOwnProperty(key)) {
			items.push([key, dict[key]]);
		}
	}
	return items;
}

exports.conjugate2 = function (full_word) {
	root = getRoot(full_word);
	conjugations = {};

	function addEndings (root, endings) {
		const tenses = {};
		const conjugations = {};
		for (let type in endings) {
			if (endings.hasOwnProperty(type)) {
				tenses[type] = root + endings[type];
			}
		}
		return tenses;
	}

	const isReflexive = endsWith(full_word, 'se');
	const base = isReflexive ? full_word.substring(0, full_word.length - 2) : full_word;

	if (endsWith(base, 'ir') || endsWith(base, 'ír')) {
		update(conjugations, addEndings(root, ir_endings));
	}
	if (endsWith(base, 'er') || endsWith(base, 'ér')) {
		update(conjugations, addEndings(root, er_endings));
	}
	if (endsWith(base, 'ar') || endsWith(base, 'ár')) {
		update(conjugations, addEndings(root, ar_endings));
	}

	if (isReflexive) {
		const _items = items(conjugations);
		for (let i = _items.length - 1; i >= 0; i--) {
			const type = _items[i][0];
			const form = _items[i][1];

			if (type === '2imp') {
				conjugations[type] = form + 'te';
				continue;
			}

			const index = +type.charAt(0);
			if (isNaN(index)) {
				continue;
			}

			conjugations[type] = [null, 'me', 'te', 'se', 'nos', 'os', 'se'][index] + ' ' + form;
		}
	}
	return conjugations;
}
