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

var verb_endings = [
    "ar", "er", "ir",
    "arse", "erse", "irse",
    "ár", "ér", "ír",
    "árse", "érse", "írse"
]

var ir_endings = {
    "1pre": "o", "2pre": "es", "3pre": "e",
    "4pre": "imos", "5pre": "ís", "6pre": "en",
    "1pas": "í", "2pas": "iste", "3pas": "ió",
    "4pas": "imos", "5pas": "isteis", "6pas": "ieron",
    "1fut": "iré", "2fut": "irás", "3fut": "irá",
    "4fut": "iremos", "5fut": "iréis", "6fut": "irán",
    "1cop": "ía", "2cop": "ías", "3cop": "ía",
    "4cop": "íamos", "5cop": "íais", "6cop": "ían",
    "1pos": "iría", "2pos": "irías", "3pos": "iría",
    "4pos": "iríamos", "5pos": "iríais", "6pos": "irían",
    "1pres": "a", "2pres": "as", "3pres": "a",
    "4pres": "amos", "5pres": "áis", "6pres": "an",
    "1pass": "iera", "2pass": "ieras", "3pass": "iera",
    "4pass": "iéramos", "5pass": "ierais", "6pass": "ieran",
    "1passb": "iese", "2passb": "ieses", "3passb": "iese",
    "4passb": "iésemos", "5passb": "ieseis", "6passb": "iesen",
    "1futs": "iere", "2futs": "ieres", "3futs": "iere",
    "4futs": "iéremos", "5futs": "iereis", "6futs": "ieren",
    "2imp": "e", "3imp": "a",
    "4imp": "amos", "5imp": "id", "6imp": "an",
    "gerundio": "iendo", "participio": "ido"
}

var er_endings = {
    "1pre": "o", "2pre": "es", "3pre": "e",
    "4pre": "emos", "5pre": "éis", "6pre": "en",
    "1pas": "í", "2pas": "iste", "3pas": "ió",
    "4pas": "imos", "5pas": "isteis", "6pas": "ieron",
    "1fut": "eré", "2fut": "erás", "3fut": "erá",
    "4fut": "eremos", "5fut": "eréis", "6fut": "erán",
    "1cop": "ía", "2cop": "ías", "3cop": "ía",
    "4cop": "íamos", "5cop": "íais", "6cop": "ían",
    "1pos": "ería", "2pos": "erías", "3pos": "ería",
    "4pos": "eríamos", "5pos": "eríais", "6pos": "erían",
    "1pres": "a", "2pres": "as", "3pres": "a",
    "4pres": "amos", "5pres": "áis", "6pres": "an",
    "1pass": "iera", "2pass": "ieras", "3pass": "iera",
    "4pass": "iéramos", "5pass": "ierais", "6pass": "ieran",
    "1passb": "iese", "2passb": "ieses", "3passb": "iese",
    "4passb": "iésemos", "5passb": "ieseis", "6passb": "iesen",
    "1futs": "iere", "2futs": "ieres", "3futs": "iere",
    "4futs": "iéremos", "5futs": "iereis", "6futs": "ieren",
    "2imp": "e", "3imp": "a",
    "4imp": "amos", "5imp": "ed", "6imp": "an",
    "gerundio": "iendo", "participio": "ido"
}

var ar_endings = {
    "1pre": "o", "2pre": "as", "3pre": "a",
    "4pre": "amos", "5pre": "áis", "6pre": "an",
    "1pas": "é", "2pas": "aste", "3pas": "ó",
    "4pas": "amos", "5pas": "steis", "6pas": "aron",
    "1fut": "aré", "2fut": "arás", "3fut": "ará",
    "4fut": "aremos", "5fut": "aréis", "6fut": "arán",
    "1cop": "aba", "2cop": "abas", "3cop": "aba",
    "4cop": "ábamos", "5cop": "abais", "6cop": "aban",
    "1pos": "aría", "2pos": "arías", "3pos": "aría",
    "4pos": "aríamos", "5pos": "aríais", "6pos": "arían",
    "1pres": "e", "2pres": "es", "3pres": "e",
    "4pres": "emos", "5pres": "éis", "6pres": "en",
    "1pass": "ara", "2pass": "aras", "3pass": "ara",
    "4pass": "áramos", "5pass": "arais", "6pass": "aran",
    "1passb": "ase", "2passb": "ases", "3passb": "ase",
    "4passb": "ásemos", "5passb": "aseis", "6passb": "asen",
    "1futs": "are", "2futs": "ares", "3futs": "are",
    "4futs": "áremos", "5futs": "areis", "6futs": "aren",
    "2imp": "a", "3imp": "e",
    "4imp": "emos", "5imp": "ad", "6imp": "en",
    "gerundio": "ando", "participio": "ado"
}

var zar_endings = {
    "1pas": "cé",
    "1pres": "ce", "2pres": "ces", "3pres": "ce",
    "4pres": "cemos", "5pres": "céis", "6pres": "cen",
    "3imp": "ce", "4imp": "cemos", "6imp": "cen"
}

var car_endings={
    "1pas": "qué",
    "1pres": "que", "2pres": "ques", "3pres": "que",
    "4pres": "quemos", "5pres": "quéis", "6pres": "quen",
    "3imp": "que", "4imp": "quemos", "6imp": "quen"
}

var gar_endings={
    "1pas": "ué",
    "1pres": "ue", "2pres": "ues", "3pres": "ue",
    "4pres": "uemos", "5pres": "uéis", "6pres": "uen",
    "3imp": "ue", "4imp": "uemos", "6imp": "uen"
}

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
