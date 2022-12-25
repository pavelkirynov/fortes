"use strict";
exports.__esModule = true;
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.numberToEncodedLetter = function (number) {
        if (isNaN(number)) {
            return undefined;
        }
        number = Math.abs(Math.floor(number));
        var index = number % 26;
        var quotient = number / 26;
        var result;
        if (number <= 26) {
            return this.numToLetter(number);
        }
        if (quotient >= 1) {
            if (index === 0) {
                quotient--;
            }
            result = this.numberToEncodedLetter(quotient);
        }
        if (index === 0) {
            index = 26;
        }
        return result + this.numToLetter(index);
    };
    Utils.numToLetter = function (number) {
        if (number > 26 || number < 0) {
            return undefined;
        }
        if (number === 0) {
            return "";
        }
        else {
            return this.alphabet.slice(number - 1, number);
        }
    };
    Utils.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Utils;
}());
exports.Utils = Utils;
