/*
Spanish verbs conjugation library. Based on Pythoñol (http://pythonol.sourceforge.net)

This software is distributed  free-of-charge and open source
under the terms of the Free Education Initiative License.

You should have received a copy  of this license with your copy of
this software. If you did not, you may get a copy of the
license at: http://github.com/voldmar/conjugation/blob/master/LICENSE

*/
var conjugate = (function () {

const irregular_verbs = require('../data/irregular-verbs.json');
const verbEndings = require('../data/verb-endings.json');

// " // Little hack to listen to reason Vim’s syntax higlighter
var reverse_irregular_verbs = {};

// We need default dict with list here because some verbs have same forms in various tenses
for (var verb in irregular_verbs) {
    if (irregular_verbs.hasOwnProperty(verb)) {
        for (var form in irregular_verbs[verb]) {
            if (irregular_verbs[verb].hasOwnProperty(form)) {
                var tension = irregular_verbs[verb][form];
                if (!reverse_irregular_verbs.hasOwnProperty(tension)) {
                    reverse_irregular_verbs[tension] = [];
                }
                reverse_irregular_verbs[tension].push(verb);
            }
        }
    }
}

var verb_endings = verbEndings.verbEndings;
var ir_endings = verbEndings.irEndings;
var er_endings = verbEndings.erEndings;
var ar_endings = verbEndings.arEndings;
var zar_endings = verbEndings.zarEndings;
var car_endings= verbEndings.carEndings;
var gar_endings= verbEndings.garEndings;

var endsWith = function(str, ending)
{
    var lastIndex = str.lastIndexOf(ending);
    return (lastIndex != -1) && (lastIndex + ending.length == str.length);
}

var isVerb = function (str) {
    for (var i = verb_endings.length - 1; i >= 0; i--) {
        if (endsWith(str, verb_endings[i])) {
            return true;
        }
    }
    return false;
}

var getRoot = function (verb) {
    for (var i = verb_endings.length - 1; i >= 0; i--) {
        if (endsWith(verb, verb_endings[i])) {
            return verb.substring(0, verb.length - verb_endings[i].length);
        }
    }
    return null;
}

var items = function(dict) {
    var items = [];
    for (var key in dict) {
        if (dict.hasOwnProperty(key)) {
            items.push([key, dict[key]]);
        }
    }
    return items;
}

var update = function(dict, other) {
    if (other instanceof Array) {
        for (var i = other.length - 1; i >= 0; i--) {
            if (other[i].length != 2) {
                throw "other array must contain pairs of [key, value]";
            }
            dict[other[i][0]] = other[i][1];
        }
        return
    }
    if (other instanceof Object) {
        for (var key in other) {
            if (other.hasOwnProperty(key)) {
                dict[key] = other[key];
            }
        }
    }
}

function conjugate(full_word) {
    full_word = full_word.toLowerCase().trim();
    if (!isVerb(full_word)) {
        return null;
    }

    var isReflexive = endsWith(full_word, "se");
    var base = isReflexive ? full_word.substring(0, full_word.length - 2) : full_word;
    var root = getRoot(full_word);
    var conjugations = {};

    // TODO: rename foo to something reasonable
    function foo (root, endings) {
        var tenses = {};
        for (var type in endings) {
            if (endings.hasOwnProperty(type)) {
                tenses[type] = root + endings[type];
            }
        }
        return tenses;
    }

    if (endsWith(base, "ir") || endsWith(base, "ír")) {
        update(conjugations, foo(root, ir_endings));
    }
    if (endsWith(base, "er") || endsWith(base, "ér")) {
        update(conjugations, foo(root, er_endings));
    }
    if (endsWith(base, "ar") || endsWith(base, "ár")) {
        update(conjugations, foo(root, ar_endings));
        var _root = root.slice(0, root.length - 1);
        if (endsWith(base, "zar")) {
            update(conjugations, foo(_root, zar_endings));
        }
        if (endsWith(base, "gar")) {
            update(conjugations, foo(_root, gar_endings));
        }
        if (endsWith(base, "car")) {
            update(conjugations, foo(_root, car_endings));
        }
    }

    if (irregular_verbs.hasOwnProperty(base)) {
        update(conjugations, irregular_verbs[base]);
    }

    if (isReflexive) {
        var _items = items(conjugations);
        for (var i = _items.length - 1; i >= 0; i--) {
            var type = _items[i][0];
            var form = _items[i][1];

            if (type === "2imp") {
                conjugations[type] = form + "te";
                continue;
            }

            var index = +type.charAt(0);
            if (isNaN(index)) {
                continue;
            }

            conjugations[type] = [null, "me", "te", "se", "nos", "os", "se"][index] + " " + form;
        }
    }

    // negative imperatives:
    if (conjugations.hasOwnProperty("2pres")) {
        conjugations["2impn"] = "no " + conjugations["2pres"];
    }
    if (conjugations.hasOwnProperty("3pres")) {
        conjugations["3impn"] = "no " + conjugations["3pres"];
    }
    if (conjugations.hasOwnProperty("4pres")) {
        conjugations["4impn"] = "no " + conjugations["4pres"];
    }
    if (conjugations.hasOwnProperty("5pres")) {
        conjugations["5impn"] = "no " + conjugations["5pres"];
    }
    if (conjugations.hasOwnProperty("6pres")) {
        conjugations["6impn"] = "no " + conjugations["6pres"];
    }

    return conjugations;
}

return conjugate;
})();

module.exports = conjugate;
