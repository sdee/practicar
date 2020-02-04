const numberToSpanish = function (number) {
    const numbers = new Map([
        [1, "uno"],
        [2, "dos"],
        [3, "tres"],
        [4, "cuatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "siete"],
        [8, "ocho"],
        [9, "nueve"],
        [10, "diez"],
        [11, "once"],
        [12, "doce"],
        [13, "trece"],
        [14, "catorce"],
        [15, "quince"],
        [16, "dieciséis"],
        [20, "veinte"],
        [22, "veintidós"], // accent
        [23, "veintitrés"], // accent
        [26, "veintiséis"], // accent
        [30, "treinta"],
        [40, "cuarenta"],
        [50, "cincuenta"],
        [60, "sesenta"],
        [70, "setenta"],
        [80, "ochenta"],
        [90, "noventa"],
        [100, "cien"],
        [200, "doscientos"],
        [300, "trescientos"],
        [400, "cuatrocientos"],
        [500, "quinientos"],
        [600, "seiscientos"],
        [700, "setecientos"],
        [800, "ochocientos"],
        [900, "novecientos"],
        [1000, "mil"]
    ]);

    if (numbers.has(number)) {
        return numbers.get(number);
    } else if (number > 10 && number < 20) {
        return "dieci" + numbers.get(number - 10);
    } else if (number > 20 && number < 30) {
        return "veinti" + numbers.get(number - 20);
    } else if (number > 30 && number < 100) {
        const tensDigit = number.toString().slice(-2, -1);
        const tens = parseInt(tensDigit, 10) * 10;
        const ones = number % tens;
        return numbers.get(tens) + " y " + numberToSpanish(ones);
    } else if (number > 100 && number < 1000) {
        const hundredsDigit = number.toString().slice(-3, -2);
        const hundreds = parseInt(hundredsDigit, 10);
        return (
            (hundreds === 1 ? 'ciento' : numbers.get(hundreds * 100)) +
            " " +
            numberToSpanish(number % (hundreds * 100))
        );
    } else if (number > 1000 && number < 1000000) {
        const thousandsDigit = number.toString().slice(0, -3);
        const thousands = parseInt(thousandsDigit, 10);
        const remainder = number % (thousands * 1000);

        return (thousands > 1 ? numberToSpanish(thousands) + ' ' : '') + "mil " + (remainder > 0
            ? numberToSpanish(remainder)
            : "");
    }
}
exports.numberToSpanish = numberToSpanish;