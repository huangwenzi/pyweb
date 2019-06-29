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
* name;
*/
var Fuhuo = (function (_super) {
    __extends(Fuhuo, _super);
    function Fuhuo() {
        var _this = _super.call(this) || this;
        _this.fuhuo.once(Laya.Event.MOUSE_DOWN, _this, _this.click);
        return _this;
    }
    Fuhuo.prototype.click = function (e) {
        GameData.bol_bird = true;
        initFishData();
        this.close();
        EventConfig.getInstance().event(EventConfig.heightView);
    };
    return Fuhuo;
}(ui.fuhuoUI));
//# sourceMappingURL=Fuhuo.js.map