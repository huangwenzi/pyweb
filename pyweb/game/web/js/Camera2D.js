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
* 镜头;
*/
var Camera2D = (function (_super) {
    __extends(Camera2D, _super);
    function Camera2D(scene) {
        var _this = _super.call(this) || this;
        _this._ease = 0.0025;
        _this._pos = new Point();
        _this.init(scene);
        return _this;
    }
    Object.defineProperty(Camera2D.prototype, "cameraView", {
        get: function () {
            return this._cameraView;
        },
        enumerable: true,
        configurable: true
    });
    Camera2D.prototype.init = function (scene) {
        this._cameraView = new Rectangle(0, 0, GameConfig.DeviceW, GameConfig.DeviceH);
        this._scene = scene;
        this._scene.scrollRect = this._cameraView;
    };
    /**
         * 镜头跟随
         */
    Camera2D.prototype.focus = function (target) {
        if (!this.lastSprite && this.lastSprite != target) {
            this.lastSprite = target;
            this._focusTarget = target;
            this._cameraView.x = 0;
            this._cameraView.y = 0;
        }
    };
    Camera2D.prototype.update = function () {
        if (this._focusTarget) {
            if (GameData.recP == 1) {
                this._pos.y = (this._focusTarget.y - (GameConfig.DeviceH >> 1));
                if (flag == false) {
                    this._cameraView.y += (this._pos.y - this._cameraView.y + GameConfig.DeviceH * 3 / 10) * Laya.timer.delta * this._ease;
                }
                else {
                    this._cameraView.y += (this._pos.y - this._cameraView.y + GameConfig.DeviceH * 3 / 10);
                }
                return;
            }
            if (GameData.recP == 2) {
                this._pos.y = (this._focusTarget.y - (GameConfig.DeviceH >> 1));
                if (flag == false) {
                    this._cameraView.y += (this._pos.y - this._cameraView.y - GameConfig.DeviceH * 3 / 10) * Laya.timer.delta * this._ease;
                }
                else {
                    this._cameraView.y += (this._pos.y - this._cameraView.y - GameConfig.DeviceH * 3 / 10);
                }
                return;
            }
            this._pos.y = (this._focusTarget.y - (GameConfig.DeviceH >> 1));
            if (flag == false) {
                this._cameraView.y += (this._pos.y - this._cameraView.y) * Laya.timer.delta * this._ease;
            }
            else {
                this._cameraView.y += (this._pos.y - this._cameraView.y);
            }
            // this._cameraView.y += (this._pos.y - this._cameraView.y);
        }
    };
    return Camera2D;
}(Laya.Sprite));
//# sourceMappingURL=Camera2D.js.map