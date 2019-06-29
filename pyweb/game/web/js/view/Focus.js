/*
* name;
*/
var Focus = (function () {
    function Focus() {
        this.init();
    }
    Object.defineProperty(Focus.prototype, "disObj", {
        get: function () {
            return this._disObj;
        },
        enumerable: true,
        configurable: true
    });
    Focus.prototype.init = function () {
        this._disObj = new Sprite();
        var spr = Sprite.fromImage("comp/gouzi.png");
        spr.pivot(62 / 2, 96 / 2);
        this._disObj.addChild(spr);
        // GameConfig.sprite_hook.addChild(this._disObj);
    };
    /**更换焦点目标 */
    Focus.prototype.changeFoucs = function (tatget) {
        this._disObj = new Sprite();
        this._disObj = tatget;
        this._disObj.pivot(tatget.width / 2, tatget.height / 2);
    };
    // private _tween: Tween;
    Focus.prototype.moveTo = function (pos) {
        // if (this._tween)
        //     this._tween.clear();
        // this._tween = Tween.to(this._disObj, { x: pos.x, y: pos.y }, 1000);
        this._disObj.x = pos.x;
        this._disObj.y = pos.y;
    };
    Object.defineProperty(Focus, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Focus();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Focus;
}());
//# sourceMappingURL=Focus.js.map