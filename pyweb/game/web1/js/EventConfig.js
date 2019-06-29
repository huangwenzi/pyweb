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
var EventConfig = (function (_super) {
    __extends(EventConfig, _super);
    function EventConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventConfig.getInstance = function () {
        if (!this._instance) {
            this._instance = new EventConfig();
        }
        return this._instance;
    };
    EventConfig.scoreEvent = "SCOREEVENT";
    EventConfig.heightEvent = "HEIGHTEVENT";
    /**烟雾动画事件 */
    EventConfig.yanwuEvent = "YANWUEVENT";
    EventConfig.heightView = "HEIGHTVIEW";
    return EventConfig;
}(Laya.EventDispatcher));
//# sourceMappingURL=EventConfig.js.map