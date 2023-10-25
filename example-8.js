"use strict";
// We need a Kaiju class
// All Kaiju have name, power and type.
// Kaiju should have a describe method that
// prints: name:<name> type:<type> power:<power>
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaijuType = exports.Kaiju = void 0;
// Type can be: lizard, flying, or ape.
// Use an enum to define the type
// Be sure to include a constructor in the
// Kaiju class that initializes it's properties!
var KaijuType;
(function (KaijuType) {
    KaijuType["Lizard"] = "Lizard";
    KaijuType["Flying"] = "Flying";
    KaijuType["Ape"] = "Ape";
})(KaijuType || (exports.KaijuType = KaijuType = {}));
var Kaiju = /** @class */ (function () {
    function Kaiju(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    Kaiju.prototype.describe = function () {
        return "Name: ".concat(this.name, "\n Type: ").concat(this.type, "\n Power: ").concat(this.power, "\n");
    };
    return Kaiju;
}());
exports.Kaiju = Kaiju;
