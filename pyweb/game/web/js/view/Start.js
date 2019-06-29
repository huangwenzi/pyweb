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
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super.call(this) || this;
        _this.sBlue.height = GameConfig.DeviceH;
        _this.img_start.once(Laya.Event.MOUSE_DOWN, _this, _this.click);
        return _this;
    }
    Start.prototype.click = function (e) {
        GameData.bol_bird = true;
        this.removeSelf();
        // GameData.isStartGame = true;
        EventConfig.getInstance().event(EventConfig.heightView);
    };
    return Start;
}(ui.startUI));
//# sourceMappingURL=Start.js.map