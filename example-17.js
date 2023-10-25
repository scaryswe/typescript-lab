"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var example_8_1 = require("./example-8");
// Giant Robot class
var GiantRobot = /** @class */ (function (_super) {
    __extends(GiantRobot, _super);
    function GiantRobot(name, power, type) {
        return _super.call(this, name, power, type) || this;
    }
    return GiantRobot;
}(example_8_1.Kaiju));
var biggieSmalls = new GiantRobot("Biggie Smalls", 100, example_8_1.KaijuType.Flying);
console.log(biggieSmalls.describe());
