var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 水下的Ui;
*/
var Water = (function (_super) {
    __extends(Water, _super);
    function Water() {
        return _super.call(this) || this;
    }
    Water.prototype.addFish = function () {
    };
    Water.prototype.removeWater = function () {
        this.removeSelf();
    };
    return Water;
}(ui.waterUI));
//# sourceMappingURL=Water.js.map