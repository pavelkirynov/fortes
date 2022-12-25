"use strict";
exports.__esModule = true;
exports.Formatter = void 0;
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.formatCurrency = function (num, maximumFractionDigits) {
        return Intl.NumberFormat("uk-UA", {
            maximumFractionDigits: maximumFractionDigits !== null && maximumFractionDigits !== void 0 ? maximumFractionDigits : 2
        }).format(num);
    };
    return Formatter;
}());
exports.Formatter = Formatter;
