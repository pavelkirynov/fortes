"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(cells) {
        this.cells = cells;
    }
    Table.prototype.getCell = function (address) {
        var result = this.cells.filter(function (item) { return item.address === address; });
        if (result.length == 0) {
            return null;
        }
        else {
            return result[0];
        }
    };
    return Table;
}());
exports.Table = Table;
