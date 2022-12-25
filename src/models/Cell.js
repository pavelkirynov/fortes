"use strict";
exports.__esModule = true;
exports.Cell = void 0;
var Formatter_1 = require("../utils/Formatter");
var Cell = /** @class */ (function () {
    function Cell(address, value) {
        this.address = address;
        this._value = value;
    }
    Cell.prototype.hasValue = function () {
        return this._value !== null && this._value.length > 0;
    };
    Cell.prototype.value = function () {
        return this._value;
    };
    Cell.prototype.numeric = function () {
        return parseFloat(this._value);
    };
    Cell.prototype.formattedNumerical = function () {
        return Formatter_1.Formatter.formatCurrency(parseFloat(this.value()));
    };
    return Cell;
}());
exports.Cell = Cell;
