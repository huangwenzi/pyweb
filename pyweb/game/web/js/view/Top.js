/**Created by the LayaAirIDE
 * 最上层显示的东西(不随着镜头的变化而变化)
*/
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
var Top = (function (_super) {
    __extends(Top, _super);
    function Top() {
        var _this = _super.call(this) || this;
        _this.totalHeight.font = "LHFbostontruckstylesc";
        _this.score.font = "LHFbostontruckstylesc";
        EventConfig.getInstance().on(EventConfig.scoreEvent, _this, _this.handle);
        EventConfig.getInstance().on(EventConfig.heightEvent, _this, _this.handle);
        Laya.stage.frameLoop(1, _this, _this.frameHandler);
        return _this;
    }
    Object.defineProperty(Top, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Top();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Top.prototype.frameHandler = function () {
        if (GameData.flag_num == 1) {
            this.miaozhun1.visible = true;
            this.miaozhun2.visible = false;
            this.miaozhun3.visible = false;
        }
        else if (GameData.flag_num == 2 || GameData.flag_num == 0) {
            this.miaozhun1.visible = false;
            this.miaozhun2.visible = true;
            this.miaozhun3.visible = false;
        }
        else {
            this.miaozhun1.visible = false;
            this.miaozhun2.visible = false;
            this.miaozhun3.visible = true;
        }
    };
    Top.prototype.handle = function () {
        if (GameData.score <= 0) {
            GameData.score = 0;
        }
        this.score.changeText(String(GameData.score));
        this.totalHeight.changeText(String(GameData.totalHeight));
    };
    return Top;
}(ui.topUI));
//# sourceMappingURL=Top.js.map