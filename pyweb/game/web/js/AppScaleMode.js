/*
* name;
*/
var AppScaleMode = (function () {
    function AppScaleMode() {
        this.clientWidth = 0;
        this.clientHeight = 0;
    }
    AppScaleMode.init = function () {
        if (Math.abs(Browser.pixelRatio - 3) < 0.01) {
            this.setIPX();
            return;
        }
        //初始化引擎
        Laya.init(GameConfig.DeviceW, GameConfig.DeviceH, WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        this.setScaleMode();
        Laya.stage.bgColor = "#cccccc";
    };
    AppScaleMode.setIPX = function () {
        // var onIPhoneX: boolean = false;
        // if (Browser.onIPhone && Math.abs(Browser.pixelRatio - 3) < 0.01) {
        //     onIPhoneX = (Browser.clientWidth == 375 && Browser.clientHeight == 812) || (Browser.clientWidth == 812 && Browser.clientHeight == 375);
        // }
        // if ((Browser.clientWidth == 1125) && Browser.clientHeight == 2436) {
        // }
        //程序入口  这里高度写成1624为了兼容iphoneX屏幕底部点击失效的问题
        Laya.init(750, 1624, Laya.WebGL);
        GameConfig.DeviceW = 750;
        GameConfig.DeviceH = 1624;
        //适配模式 宽度100%
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.bgColor = "#cccccc";
        //初始化引擎
        // this.ceshi("onIPhoneX", "11");
        GameData.isIPX = true;
    };
    /**
      * 设置合适的显示模式
      */
    AppScaleMode.setScaleMode = function () {
        var clientWidth = Laya.Browser.width;
        var clientHeight = Laya.Browser.height;
        if (Laya.Browser.onPC) {
            console.log("在pc端");
            if (clientWidth > GameConfig.DeviceW && clientHeight > GameConfig.DeviceH) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
            }
            else {
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
        }
        else {
            console.log("在移动端");
            // if (!Laya.Browser.onWeiXin && Config.fullScreenEnabled)
            //     Laya.stage.fullScreenEnabled = true;
            var gameWidthHeightRatio = GameConfig.DeviceW / GameConfig.DeviceH;
            var clientWidthHeightRatio = clientWidth / clientHeight;
            console.log("在移动端游戏宽高比例:" + gameWidthHeightRatio);
            console.log("在移动端设备宽高比例:" + clientWidthHeightRatio);
            if (clientWidthHeightRatio < (gameWidthHeightRatio - 0.18) || clientWidthHeightRatio > (gameWidthHeightRatio + 0.18)) {
                console.log("最小比例缩放");
                // this.ceshi("最小比例缩放", String(clientHeight));
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            else {
                console.log("满屏");
                // this.ceshi("满屏", String(clientHeight));
                Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
            }
        }
    };
    AppScaleMode.adddddd = function () {
        Laya.stage.addChild(this.text);
        Laya.stage.addChild(this.text1);
    };
    AppScaleMode.ceshi = function (str1, str2) {
        if (!this.text) {
            this.text = new Laya.Text();
            this.text.y = 600;
            this.text.x = 100;
            this.text.fontSize = 50;
            this.text.color = "#ff00ff";
            this.text.text = str1;
            this.text.autoSize = true;
            // GameConfig.sprite_top.addChild(this.text);
        }
        this.text.text = str1;
        if (!this.text1) {
            this.text1 = new Laya.Text();
            this.text1.y = 700;
            this.text1.x = 100;
            this.text1.fontSize = 50;
            this.text1.color = "#ff00ff";
            this.text1.text = str2;
        }
        this.text1.text = str2;
    };
    return AppScaleMode;
}());
//# sourceMappingURL=AppScaleMode.js.map