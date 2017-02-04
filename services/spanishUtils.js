/*
Utilities to supplement conjugation library.
*/


/*shows what a verb would look like if it wasn't irregular. wraps the conjugation logic from the conjuation library
but decouples from irregularity.
*/

const conjugate = require('./conjugation');

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

var endsWith = function(str, ending)
{
    var lastIndex = str.lastIndexOf(ending);
    return (lastIndex != -1) && (lastIndex + ending.length == str.length);
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

exports.conjugate2 = function (full_word) {
	root = getRoot(full_word);
	conjugations ={};

	function addEndings (root, endings) {
		var tenses = {};
		var conjugations = {};
		for (var type in endings) {
			if (endings.hasOwnProperty(type)) {
				tenses[type] = root + endings[type];
			}
		}
		return tenses;
	}

	    var isReflexive = endsWith(full_word, "se");
    var base = isReflexive ? full_word.substring(0, full_word.length - 2) : full_word;

	if (endsWith(base, "ir") || endsWith(base, "ír")) {
		update(conjugations, addEndings(root, ir_endings));
	}
	if (endsWith(base, "er") || endsWith(base, "ér")) {
		update(conjugations, addEndings(root, er_endings));
	}
	if (endsWith(base, "ar") || endsWith(base, "ár")) {
		update(conjugations, addEndings(root, ar_endings));
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
    return conjugations;

}
