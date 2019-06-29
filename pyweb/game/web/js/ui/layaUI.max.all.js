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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var fuhuoUI = (function (_super) {
        __extends(fuhuoUI, _super);
        function fuhuoUI() {
            return _super.call(this) || this;
        }
        fuhuoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.fuhuoUI.uiView);
        };
        fuhuoUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1336 }, "child": [{ "type": "Image", "props": { "y": 293, "x": 86, "skin": "comp/fuhuobeijing.png" } }, { "type": "Image", "props": { "y": 729, "x": 270, "var": "fuhuo", "skin": "comp/fuhuo.png", "name": "fuhuo", "mouseEnabled": true } }] };
        return fuhuoUI;
    }(Dialog));
    ui.fuhuoUI = fuhuoUI;
})(ui || (ui = {}));
(function (ui) {
    var mainUI = (function (_super) {
        __extends(mainUI, _super);
        function mainUI() {
            return _super.call(this) || this;
        }
        mainUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.mainUI.uiView);
        };
        mainUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "name": "viewview", "height": 1 }, "child": [{ "type": "Image", "props": { "y": -10335, "x": 0, "width": 750, "var": "blue", "skin": "comp/blue.png", "name": "blue", "mouseEnabled": true, "height": 11135 } }, { "type": "Image", "props": { "y": 800, "x": 0, "width": 750, "var": "green", "skin": "comp/green.png", "name": "green" } }, { "type": "Image", "props": { "y": 470, "x": 85, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": 388, "x": 326, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": 274, "x": 150, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": 155, "x": 491, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -52, "x": 306, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -349, "x": 477, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -772, "x": 146, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -1400, "x": 444, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -2134, "x": -42, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -4000, "x": 435, "width": 155, "skin": "comp/yun.png", "height": 52 } }, { "type": "Image", "props": { "y": -2951, "x": -10, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -4866, "x": 53, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -6040, "x": 279, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -7126, "x": 45, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -8132, "x": 211, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -8807, "x": -48, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": -9408, "x": 136, "skin": "comp/yun.png" } }, { "type": "Image", "props": { "y": 1787, "x": 428, "var": "daodiImg", "skin": "comp/daodi.png", "name": "daodiImg" } }, { "type": "Animation", "props": { "y": 512, "x": -57, "var": "b1", "source": "bird.ani", "name": "b1", "autoPlay": true } }, { "type": "Animation", "props": { "y": 492, "x": -79, "var": "b2", "source": "bird.ani", "name": "b2", "autoPlay": true } }, { "type": "Animation", "props": { "y": 528, "x": -99, "var": "b3", "source": "bird.ani", "name": "b3", "autoPlay": true } }, { "type": "Animation", "props": { "y": 508, "x": 205, "var": "yanwu", "source": "yanwu.ani", "name": "yanwu" } }, { "type": "Text", "props": { "y": 601, "x": 411, "width": 400, "var": "_line", "text": "- - - - - - - - - - - - - - - - - - - - - - ", "rotation": 90, "pivotY": 31, "pivotX": 1, "overflow": "hidden", "name": "_line", "height": 64, "fontSize": 50, "color": "#ffffff" } }, { "type": "Text", "props": { "y": 820, "x": 412, "width": 552, "var": "tt", "text": "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ", "rotation": 90, "pivotY": 31, "pivotX": 1, "overflow": "hidden", "name": "tt", "height": 63, "fontSize": 50, "color": "#ffffff", "align": "left" } }, { "type": "Text", "props": { "y": 1739, "x": 0, "width": 750, "var": "daodi", "text": "- - - - - - - - - - - - - - - - - - - - - - - - - ", "name": "daodi", "height": 41, "fontSize": 50, "color": "#fb1b17" } }, { "type": "Animation", "props": { "y": 825, "x": 240, "var": "chuanDaiji", "source": "chuan1.ani", "name": "chuanDaiji", "autoPlay": true } }, { "type": "Animation", "props": { "y": 825, "x": 240, "var": "chuanDaqiang", "source": "chuan2.ani", "name": "chuanDaqiang", "autoPlay": true } }] };
        return mainUI;
    }(View));
    ui.mainUI = mainUI;
})(ui || (ui = {}));
(function (ui) {
    var startUI = (function (_super) {
        __extends(startUI, _super);
        function startUI() {
            return _super.call(this) || this;
        }
        startUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.startUI.uiView);
        };
        startUI.uiView = { "type": "View", "props": { "width": 750, "height": 1336 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "sBlue", "skin": "comp/blue.png", "name": "sBlue", "height": 1336 } }, { "type": "Image", "props": { "y": 436, "x": 235, "width": 252, "var": "img_start", "skin": "comp/start.png", "name": "img_start", "mouseEnabled": true, "height": 245 } }] };
        return startUI;
    }(View));
    ui.startUI = startUI;
})(ui || (ui = {}));
(function (ui) {
    var topUI = (function (_super) {
        __extends(topUI, _super);
        function topUI() {
            return _super.call(this) || this;
        }
        topUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.topUI.uiView);
        };
        topUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 224, "skin": "comp/mishu.png", "height": 104 } }, { "type": "Image", "props": { "y": 0, "x": 606, "width": 146, "skin": "comp/meiyuan.png", "height": 45 } }, { "type": "Image", "props": { "y": 40, "x": 701, "width": 49, "var": "zanting", "skin": "comp/zanting.png", "name": "zanting", "mouseEnabled": true, "height": 37 } }, { "type": "Label", "props": { "y": 3, "x": 63, "width": 77, "var": "totalHeight", "text": "0", "name": "totalHeight", "height": 36, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 26, "x": 54, "width": 94, "text": "———", "height": 25, "fontSize": 20, "font": "Microsoft YaHei", "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 45, "x": 63, "width": 70, "text": "100", "height": 25, "fontSize": 20, "font": "Microsoft YaHei", "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 4, "x": 633, "width": 112, "var": "score", "text": "0", "name": "score", "height": 31, "fontSize": 30, "color": "#ffffff", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 10, "x": 15, "var": "miaozhun2", "skin": "comp/miaozhun2.png" } }, { "type": "Image", "props": { "y": 10, "x": 15, "var": "miaozhun1", "skin": "comp/miaozhun1.png" } }, { "type": "Image", "props": { "y": 10, "x": 15, "var": "miaozhun3", "skin": "comp/miaozhun3.png" } }] };
        return topUI;
    }(View));
    ui.topUI = topUI;
})(ui || (ui = {}));
(function (ui) {
    var waterUI = (function (_super) {
        __extends(waterUI, _super);
        function waterUI() {
            return _super.call(this) || this;
        }
        waterUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.waterUI.uiView);
        };
        waterUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "child": [{ "type": "Image", "props": { "y": 523, "x": 289, "skin": "comp/fish/fish1.png" } }] };
        return waterUI;
    }(View));
    ui.waterUI = waterUI;
})(ui || (ui = {}));
(function (ui) {
    var yunUI = (function (_super) {
        __extends(yunUI, _super);
        function yunUI() {
            return _super.call(this) || this;
        }
        yunUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.yunUI.uiView);
        };
        yunUI.uiView = { "type": "View", "props": { "width": 750, "height": 1336 } };
        return yunUI;
    }(View));
    ui.yunUI = yunUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map