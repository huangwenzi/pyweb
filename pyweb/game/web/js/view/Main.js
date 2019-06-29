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
* 主界面;
*/
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        /**鱼钩匀速下降(拉升)的速度 */
        _this.speed = 0;
        /**表示点击开始游戏 */
        _this.isStart = false;
        /**标记是在水下还是水上  水下为1 水上为2 */
        _this.flag_num = 0;
        /**是否有一个鱼被捕捉 */
        _this.isFirstBuzhuo = false;
        /**是否可以更换焦点 */
        // private flag_foucs: boolean = false;
        /**记录是否是最低的y值 */
        // private mixFishY:number = 0;
        // private initialSegmentsAmount: number = 5;
        _this.vx = 0;
        /**游戏结束 */
        // private isGameOver: boolean = false;
        _this.paoGouSpeed = 0;
        /**是否可以点击开始游戏 */
        // private isStartGame: boolean = true;
        /**只会执行一次 */
        _this.isOnlyOne = true;
        /**每隔多少秒显示一个气泡 */
        _this.paopaoCount = 0;
        /**是否显示泡泡 */
        _this.paopaoBol = false;
        /**是否可以出现点击效果 */
        _this.dianjiEff = false;
        /**上一次计算得出的米数 */
        _this.lastHeight = 0;
        /**最大米数 */
        _this.maxHeight = 0;
        _this.height_bol = false;
        /**上升的最大高度 */
        _this.maxUpH = 0;
        /**播放水下背景音 */
        // public onPlaySoundDownM(): void {
        //     // console.log("downM播放音效");
        //     // Laya.SoundManager.musicVolume = 0.2;
        //     Laya.SoundManager.playMusic("comp/downM.mp3", 0);
        //     // addText();
        // }
        /**防止重复调用 */
        _this.currentBGM = 0;
        /**抛沟动画是否存在 */
        _this.paoGouBool = false;
        _this._camera = new Camera2D(_scene);
        Laya.timer.frameLoop(1, _this, _this.frameHandler);
        // GameConfig.sprite_map.on(Laya.Event.MOUSE_DOWN, this, this.clickHandler);
        Laya.stage.on(Laya.Event.CLICK, _this, _this.clickHandler);
        Laya.stage.on(Laya.Event.CLICK, _this, _this.addDianji);
        EventConfig.getInstance().on(EventConfig.yanwuEvent, _this, _this.addYanwu);
        EventConfig.getInstance().on(EventConfig.heightView, _this, _this.changeHeightView);
        // 监视加速器状态
        Accelerator.instance.on(Laya.Event.CHANGE, _this, _this.monitorAccelerator);
        _this.drawLineMax();
        /**默认 */
        _this.hookSprite = Focus.instance.disObj;
        _this.hookSprite.visible = false;
        _this.speed = GameConfig.hookSpeed;
        _this.paoGouSpeed = GameConfig.paoGouSpeed;
        _this.hookSprite.x = GameConfig.DeviceW / 2;
        _this._camera.focus(_this.hookSprite);
        _this.zhongxin();
        _this.addShoujiAni();
        _this._line.visible = false;
        _this.tt.visible = false;
        // this.daqiang.visible = false;
        // this.daqiangmaozi.visible = false;
        GameData.bol_bird = false;
        _this.paopaoSpr = Sprite.fromImage("comp/paopao3.png");
        GameConfig.sprite_map.addChild(_this.paopaoSpr);
        _this.paopaoSpr.visible = false;
        _this.chuanDaqiang.visible = false;
        _this.chuanDaiji.visible = true;
        return _this;
    }
    Object.defineProperty(Main.prototype, "camera", {
        get: function () {
            return this._camera;
        },
        enumerable: true,
        configurable: true
    });
    Main.prototype.changeHeightView = function () {
        GameData.isStartGame = true;
    };
    /**增加海底按图 */
    Main.prototype.addHaidiAnTu = function () {
        var spr;
        var num = 0;
        for (var index = 0; index < GameConfig.yingyinyu; index++) {
            num = parseInt(String(Math.random() * 4)) + 1;
            spr = Sprite.fromImage("comp/ff/H" + num + ".png");
            spr.y = Math.random() * (GameConfig.yingyinyuMaxH - GameConfig.yingyinyuMixH) + GameConfig.yingyinyuMixH;
            spr.x = Math.random() * 400 + 200;
            GameConfig.sprite_map.addChild(spr);
        }
    };
    /**添加鱼钩上的泡泡 */
    Main.prototype.addPaoPao = function () {
        this.paopaoSpr.x = this.hookPoint.x + 30;
        this.paopaoSpr.y = this.hookPoint.y;
        if (!this.paopaoArr)
            this.paopaoArr = [];
        this.paopaoArr.push(this.paopaoSpr);
        // console.log("显示了泡泡");
    };
    Main.prototype.addYanwu = function () {
        this.yanwu.play(1, false);
    };
    Main.prototype.addShoujiAni = function () {
        this.tl = new Laya.Animation();
        //加载动画文件
        this.tl.loadAnimation("shouji.ani");
        this.tl.x = 400;
        this.tl.y = 440;
        //添加到舞台
        this.addChild(this.tl);
        //播放Animation动画
        this.tl.play(0, true);
    };
    /**播放完成后移除 */
    Main.prototype.removeAni = function () {
        if (this.tl) {
            this.tl.removeSelf();
            this.tl = null;
        }
    };
    /**默认屏幕的中心点 */
    Main.prototype.zhongxin = function () {
        if (!this.hookPoint) {
            this.hookPoint = new Point();
        }
        this.hookPoint.x = GameConfig.DeviceW / 2;
        this.hookPoint.y = 825 - 350;
        Focus.instance.moveTo(this.hookPoint);
    };
    Main.prototype.frameHandler = function () {
        if (this.paoGouBool) {
            this.paoGou();
            this.move();
            return;
        }
        if (GameData.recP != 3) {
            this._camera.update();
        }
        if (this.yuxianAni) {
            this.yuxianAni.x = this.hookPoint.x - 33;
            this.yuxianAni.y = this.hookPoint.y;
        }
        if (GameData.bol_bird == true) {
            //鸟飞过
            this.b1.x += 4;
            this.b1.y -= 2;
            this.b2.x += 4;
            this.b2.y -= 2;
            this.b3.x += 4;
            this.b3.y -= 2;
        }
        if (this.flag_num == 1) {
            if (this.hookPoint.y >= GameConfig.maxH) {
                if (!this.yuxianAni) {
                    this.addYuxianAniAni();
                }
            }
            if (this.hookPoint.y >= GameConfig.maxH || this.isFirstBuzhuo == true) {
                GameData.flag_num = 1;
                GameData.state = 2;
                if (GameData.recP == 1) {
                    GameData.recP = 3;
                    this.changeMusic();
                }
                this.paopaoBol = false;
                this.paopaoSpr.visible = false;
                this.speed -= 0.14;
                if (this.speed < -GameConfig.hookSpeed) {
                    this.speed = -GameConfig.hookSpeed;
                }
                if (this.speed <= 0) {
                    if (GameData.recP != 2) {
                        GameData.recP = 2;
                    }
                    this.removeAniYuxian();
                }
            }
            this.hookPoint.y += this.speed;
            this.hookPoint.x += this.vx;
            if (GameData.isIPX) {
                this.green.height += this.speed + 400;
            }
            else {
                this.green.height += this.speed;
            }
            if (this.hookPoint.x <= 36) {
                this.hookPoint.x = 36;
            }
            if (this.hookPoint.x >= GameConfig.DeviceW - 36) {
                this.hookPoint.x = GameConfig.DeviceW - 36;
            }
            this.isCheckHit();
            Focus.instance.moveTo(this.hookPoint);
            if (this.hookPoint.y <= 825) {
                this.flag_num = 2;
                this.onPlaySound4();
                GameData.recP = 0;
                // this.changeMusic();
                this.hookSprite.visible = false;
                // this.daqiang.visible = true;
                // this.daqiangmaozi.visible = true;
                // this.zhengchangdiaoyuren.visible = false;
                // this.zhengchangmaozi.visible = false;
                this.chuanDaqiang.visible = true;
                this.chuanDaiji.visible = false;
            }
            this.move();
            this.changeTT();
            this.paopaoCount++;
            if (this.paopaoCount >= GameConfig.paopaoTime && this.paopaoBol) {
                this.paopaoCount = 0;
                this.addPaoPao();
            }
        }
        if (this.flag_num == 2) {
            GameData.isBolKill = true;
            if (this.currentBGM != 1)
                this.changeMusic();
            this._line.visible = false;
            this.tt.visible = false;
            this.dianjiEff = true;
            if (this.isBuzhuoArr && this.isBuzhuoArr.length > 0) {
                for (var i = 0; i < this.isBuzhuoArr.length; i++) {
                    if (this.isBuzhuoArr[i].isTouchBol == false) {
                        this.isBuzhuoArr[i].direction = 2;
                        this.isBuzhuoArr[i].isTouchBol = true;
                    }
                }
                this.findDownInBuzhuo();
            }
            else {
                //没捕捉到鱼 游戏结束,回到初始位置
                this.gameOver();
            }
        }
        this.caluateTopDataHeight();
    };
    Main.prototype.clickHandler = function (e) {
        if (GameData.isStartGame) {
            this.removeAni();
            if (this.isOnlyOne) {
                this.isOnlyOne = false;
                this.addHaidiAnTu();
                GameConfig.sprite_map.addChild(Focus.instance.disObj);
            }
            this.addFish();
            GameData.isStartGame = false;
            this.isFirstBuzhuo = false;
            this.speed = GameConfig.hookSpeed;
            this.flag_num = 1;
            GameData.state = 1;
            GameData.flag_num = 3;
            this.hookSprite.visible = true;
            flag = true;
            GameData.isBolKill = false;
            this.lastHeight = 0;
            this.lastHeight = 0;
            this.maxHeight = 0;
            this.height_bol = false;
            this.maxUpH = 0;
            this.changeMusic();
            this.hookPoint.y += 250;
            this.paoGouBool = true;
            this.paoGouSpeed = GameConfig.paoGouSpeed;
            this.hideOrShowBird(false);
            GameData.bol_bird = false;
            this.paopaoBol = true;
            this.paopaoSpr.visible = true;
            // this.onPlaySound1();
            GameData.recP = 1;
        }
        // // 是否在点击鱼的阶段
        // if (GameData.isBolKill == true) {
        //     this.panduanshifoubeidazhong(e.target.mouseX, e.target.mouseY);
        //     console.log("111");
        //     console.log("e.target.mouseY==" + e.target.mouseY);
        //     this.addAniYanwu2(e.target.mouseX, e.target.mouseY - 10145);
        // }
    };
    Main.prototype.addDianji = function (e) {
        if (this.dianjiEff == false)
            return;
        if (GameData.isBolKill == true) {
            this.addAniYanwu2(e.target.mouseX, e.target.mouseY);
            // console.log("e.target.mouseY2222222222222==" + e.target.mouseY);
            // console.log(" ");
            // this.panduanshifoubeidazhong(e.target.mouseX, e.target.mouseY);
        }
        // this.addAniYanwu2(e.target.mouseX, e.target.mouseY);
        // console.log("e.target.mouseY2222222222222==" + e.target.mouseY);
    };
    /**判断抢是否打中 */
    Main.prototype.panduanshifoubeidazhong = function (yx, yy) {
        if (this.isBuzhuoArr && this.isBuzhuoArr.length > 0) {
            for (var t = 0; t < this.isBuzhuoArr.length; t++) {
                console.log("ff=" + this.isBuzhuoArr[t].spr.y);
                console.log("this.camera.mouseY=" + this.camera.mouseY);
                console.log("x=" + Math.abs(this.isBuzhuoArr[t].spr.x - yx) + ", y=" + Math.abs(this.isBuzhuoArr[t].spr.y - this.camera.mouseY));
                if (Math.abs(this.isBuzhuoArr[t].spr.x - yx) <= GameConfig.qiangjizhongfanwei && Math.abs(this.isBuzhuoArr[t].spr.y - yy) <= GameConfig.qiangjizhongfanwei) {
                    //击中鱼
                    console.log("击中鱼");
                    EventConfig.getInstance().event(EventConfig.yanwuEvent);
                    this.isBuzhuoArr[t].clickHandler();
                }
            }
        }
    };
    /**添加动画效果 */
    Main.prototype.addAniYanwu2 = function (yx, yy) {
        // this.removeAni();
        //创建一个Animation实例
        this.yanwu2 = new Laya.Animation();
        //加载动画文件
        this.yanwu2.loadAnimation("yanwu2.ani");
        this.yanwu2.x = yx - 22;
        this.yanwu2.y = yy - 22;
        //添加到舞台
        GameConfig.sprite_map.addChild(this.yanwu2);
        Laya.stage.addChild(this.yanwu2);
        //播放Animation动画
        this.yanwu2.play(0, false);
        this.yanwu2.once(Laya.Event.COMPLETE, this, this.removeAniYanwu2);
    };
    /**播放完成后移除 */
    Main.prototype.removeAniYanwu2 = function () {
        if (this.yanwu2) {
            this.yanwu2.removeSelf();
            this.yanwu2 = null;
        }
    };
    Main.prototype.gameOver = function () {
        var _this = this;
        this.mouseEnabled = false;
        this.removeSomething();
        this.flag_num = 0;
        GameData.flag_num = 2;
        this._line.visible = false;
        this.tt.visible = false;
        this.addShoujiAni();
        this.zhongxin();
        GameData.isBolKill = false;
        GameData.state = 0;
        this.changeMusic();
        this.dianjiEff = false;
        // this.daqiang.visible = false;
        // this.daqiangmaozi.visible = false;
        // this.zhengchangdiaoyuren.visible = true;
        // this.zhengchangmaozi.visible = true;
        this.chuanDaqiang.visible = false;
        this.chuanDaiji.visible = true;
        this.paoGouBool = false;
        GameData.totalHeight = 0;
        EventConfig.getInstance().event(EventConfig.heightEvent);
        Laya.timer.once(1000, null, function () {
            _this.addFuhuo();
            _this.mouseEnabled = true;
        });
    };
    /**改表高度 */
    Main.prototype.changeTT = function () {
        if (this.hookPoint.y < 825 + GameConfig.DeviceH / 2) {
            this.tt.y = 825;
            this.tt.width = this.hookPoint.y - 825;
        }
        else {
            this.tt.y = this.hookPoint.y - GameConfig.DeviceH * 8 / 10;
            this.tt.width = GameConfig.DeviceH * 8 / 10;
        }
        this.tt.x = this.hookPoint.x;
    };
    /**游戏结束增加复活页面 */
    Main.prototype.addFuhuo = function () {
        var fh = new Fuhuo();
        GameConfig.sprite_top.addChild(fh);
        fh.popup();
    };
    /**游戏结束清除一些东西 */
    Main.prototype.removeSomething = function () {
        if (this.fishArr && this.fishArr.length > 0) {
            for (var i = 0; i < this.fishArr.length; i++) {
                this.fishArr[i].removeFish();
                // (this.fishArr[i] as Fish).destroy(true);
            }
        }
        if (this.isBuzhuoArr && this.isBuzhuoArr.length > 0) {
            for (var j = 0; j < this.fishArr.length; j++) {
                this.fishArr[j].removeSelf();
            }
        }
        this.fishArr = null;
        this.isBuzhuoArr = null;
    };
    /**计算高度  */
    Main.prototype.caluateTopDataHeight = function () {
        if (this.hookPoint && this.flag_num == 1) {
            var h = Math.abs(Math.floor((this.hookPoint.y - 825) / 200));
            if (this.lastHeight != h) {
                if (h <= 0) {
                    h = 0;
                }
                this.lastHeight = h;
                if (h > this.maxHeight) {
                    this.maxHeight = h;
                }
                else {
                    // if (this.height_bol == false) {
                    //     this.height_bol = true;
                    //     GameData.score += this.maxHeight * 10;
                    // }
                }
                GameData.totalHeight = h;
                if (this.maxHeight == h) {
                    GameData.score += 10;
                }
                EventConfig.getInstance().event(EventConfig.heightEvent);
            }
        }
    };
    //根据UI位置确认鱼钩掉落点的坐标为UI上的鱼竿末端
    Main.prototype.move = function () {
        var nn = 0;
        var dx = this.hookPoint.x - this._line.x;
        var dy = 0;
        if (this.paoGouBool) {
            dy = this.hookPoint.y - this._line.y;
            nn = Math.sqrt((this.hookPoint.x - this._line.x) * (this.hookPoint.x - this._line.x) + (this.hookPoint.y - this._line.y) * (this.hookPoint.y - this._line.y));
        }
        else {
            nn = Math.sqrt((this.hookPoint.x - this._line.x) * (this.hookPoint.x - this._line.x) + (825 - this._line.y) * (825 - this._line.y));
            dy = 825 - this._line.y;
        }
        this._line.width = nn;
        this._line.visible = true;
        var r = Math.atan2(dx, dy) * 180 / Math.PI;
        this._line.rotation = -r + 90;
    };
    /**找到捕捉的鱼中，最下面的一个鱼 */
    Main.prototype.findDownInBuzhuo = function () {
        var k = 0;
        var mixFishY = 0;
        var yArr = [];
        if (this.isBuzhuoArr && this.isBuzhuoArr.length > 0) {
            for (var t = 0; t < this.isBuzhuoArr.length; t++) {
                if (this.isBuzhuoArr[t].spr.y > (840 + this.isBuzhuoArr[t].spr.height) || this.isBuzhuoArr[t].isBuzhuo == false) {
                    //鱼回水里，删除数组元素
                    this.isBuzhuoArr.splice(t, 1);
                    t--;
                    continue;
                }
            }
            if (this.isBuzhuoArr.length <= 0) {
                this.gameOver();
                return;
            }
            var mixFish = this.isBuzhuoArr[0];
            var length = this.isBuzhuoArr.length;
            for (var i = 1; i < this.isBuzhuoArr.length; i++) {
                if (mixFish.spr.y < this.isBuzhuoArr[i].spr.y) {
                    mixFish = this.isBuzhuoArr[i];
                }
                // minIndex = i;
                // for (var j: number = i + 1; j < this.isBuzhuoArr.length; j++) {
                //     //在无序区中找到最小数据并保存其数组下标
                //     if (this.isBuzhuoArr[j] < this.isBuzhuoArr[minIndex]) {
                //         minIndex = j;
                //     }
                // }
            }
            flag = false;
            this.hookPoint = new Point(mixFish.spr.x, mixFish.spr.y);
            Focus.instance.moveTo(this.hookPoint);
            this.changeHeigth(mixFish.spr.y);
        }
        else {
            this.gameOver();
        }
    };
    Main.prototype.monitorAccelerator = function (acceleration, accelerationIncludingGravity, rotationRate, interval) {
        this.vx = 0;
        if (Laya.Browser.onWeiXin) {
            GameData.vx = accelerationIncludingGravity.x * 2;
        }
        else {
            GameData.vx = accelerationIncludingGravity.x;
        }
        if (Math.abs(rotationRate.gamma) < 1 && Math.abs(accelerationIncludingGravity.x) < 0.5) {
            return;
        }
        // if (Laya.Browser.onAndriod) {
        //     this.ceshi("安卓", "1");
        //     this.vx = -accelerationIncludingGravity.x * GameConfig.zhongli;
        // } else {
        //     this.ceshi("IOS", "1");
        //     this.vx = accelerationIncludingGravity.x * GameConfig.zhongli;
        // }
        if (Laya.Browser.onWeiXin) {
            if (Laya.Browser.onAndriod) {
                // this.ceshi("2", "onWeiXin && onAndroid");
                this.vx = -accelerationIncludingGravity.x * GameConfig.zhongli;
                GameData.vx = -accelerationIncludingGravity.x;
            }
            else if (Laya.Browser.onIOS) {
                // this.ceshi("2", "onWeiXin && onIOS");
                this.vx = accelerationIncludingGravity.x * GameConfig.zhongli;
            }
            else {
                // this.ceshi("2", "!!!!!!!onAndroid && !!!!!!!onIOS");
                this.vx = accelerationIncludingGravity.x * GameConfig.zhongli;
            }
        }
        else {
            // this.ceshi("3", "!!!!!!!!onWeiXin");
            this.vx = accelerationIncludingGravity.x * GameConfig.zhongli;
        }
    };
    Main.prototype.ceshi = function (str1, str2) {
        if (!this.text) {
            this.text = new Laya.Text();
            this.text.y = 600;
            this.text.x = 100;
            this.text.fontSize = 50;
            this.text.color = "#ff00ff";
            GameConfig.sprite_top.addChild(this.text);
        }
        this.text.text = str1;
        if (!this.text1) {
            this.text1 = new Laya.Text();
            this.text1.y = 700;
            this.text1.x = 100;
            this.text1.fontSize = 50;
            this.text1.color = "#ff00ff";
            GameConfig.sprite_top.addChild(this.text1);
        }
        this.text1.text = str2;
        // this.text.text = GameConfig.zhongli+",   " + this.vx + "";
        // this.text1.text = "" + rotationRate.gamma;
    };
    /**检测是否碰撞鱼 */
    Main.prototype.isCheckHit = function () {
        if (!this.isBuzhuoArr) {
            this.isBuzhuoArr = [];
        }
        if (!this.fishArr) {
            return;
        }
        var length = this.fishArr.length;
        for (var i = 0; i < length; i++) {
            var ff = this.fishArr[i];
            if (ff.isBuzhuo == true) {
                ff.spr.x = this.hookPoint.x;
                ff.spr.y = this.hookPoint.y + ff.spr.height / 2 + 15 + Focus.instance.disObj.height / 2;
                // Focus.instance.disObj.setChildIndex(Laya.stage.numChildren);
            }
            else {
                var dx = Math.abs(ff.spr.x - (this.hookPoint.x + this.hookSprite.width / 2));
                var dy = Math.abs(ff.spr.y - (this.hookPoint.y + this.hookSprite.height / 2));
                if (dx <= ff.spr.width / 4 * 3 && dy <= ff.spr.height / 4 * 3) {
                    ff.spr.scaleX = -1;
                    ff.spr.rotation = -90;
                    ff.spr.y += ff.spr.height / 2;
                    this.isBuzhuoArr.push(ff);
                    ff.isBuzhuo = true;
                    this.isFirstBuzhuo = true;
                    this.caluateScore(ff);
                    if (GameData.state == 2) {
                        this.onPlaySound3();
                    }
                    if (GameData.state == 1) {
                        this.onPlaySound2();
                    }
                }
            }
        }
    };
    Main.prototype.addFish = function () {
        if (!this.fishArr) {
            this.fishArr = [];
        }
        var fish;
        var totalNum = this.getCurrentTotalFishNum();
        console.log("总条数==" + totalNum);
        for (var i = 0; i < totalNum; i++) {
            fish = new Fish();
            fish.addFish(this.getFishId());
            // fish.addTest();
            this.fishArr.push(fish);
            GameConfig.sprite_map.addChild(fish);
        }
    };
    /**计算积分 */
    Main.prototype.caluateScore = function (ff) {
        GameData.score += ff._data.hookIntegral;
        EventConfig.getInstance().event(EventConfig.scoreEvent);
    };
    /**在最大的位置画一个虚线 */
    Main.prototype.drawLineMax = function () {
        this.daodi.y = GameConfig.maxH;
        this.daodiImg.y = GameConfig.maxH + 50;
    };
    /**改变天空底图高度 */
    Main.prototype.changeHeigth = function (yh) {
        this.blue.height = Math.abs(yh) + GameConfig.DeviceH + 825 + 800;
        // this.blue.height = 10000;
        this.blue.y = -this.blue.height + GameConfig.DeviceH - 335;
        // console.log("this.blue.y="+this.blue.y);
        if (this.flag_num == 2) {
            var h = Math.abs(Math.floor((yh - 825) / 200));
            if (this.lastHeight != h) {
                if (h <= 0) {
                    h = 0;
                }
                if (this.maxUpH < h) {
                    this.maxUpH = h;
                    if (this.lastHeight < h) {
                        GameData.score += 10;
                    }
                }
                this.lastHeight = h;
                GameData.totalHeight = h;
                EventConfig.getInstance().event(EventConfig.heightEvent);
            }
        }
    };
    /**随机得到当前鱼的总条数 */
    Main.prototype.getCurrentTotalFishNum = function () {
        // return 20;
        return Math.floor(Math.random() * GameConfig.currentTotalFishNum) + GameConfig.currentTotalFishNum;
    };
    /**根据权重得到鱼的id */
    Main.prototype.getFishId = function () {
        var id = 0;
        var rNum = 0;
        if (GameConfig.isWeight == 1) {
            while (id <= 0) {
                rNum = Math.floor(Math.random() * 105) + 1;
                if (1 <= rNum && rNum <= 30) {
                    id = 1;
                }
                else if (31 <= rNum && rNum <= 58) {
                    id = 2;
                }
                else if (59 <= rNum && rNum <= 74) {
                    id = 3;
                }
                else if (75 <= rNum && rNum <= 96) {
                    id = 4;
                }
                else if (97 <= rNum && rNum <= 104) {
                    id = 5;
                }
                else if (rNum == 105) {
                    id = 7;
                }
            }
        }
        if (GameConfig.isWeight == 2) {
            id = Math.floor(Math.random() * 12) + 1;
        }
        return id;
    };
    /**播放水上背景音 */
    Main.prototype.onPlaySoundUpM = function () {
        // console.log("upm播放音效");
        // Laya.SoundManager.musicVolume = 0.2;
        Laya.SoundManager.playMusic("comp/upM.mp3", 0);
        // addText();
    };
    Main.prototype.changeMusic = function () {
        console.log("调用背景音");
        if (GameData.isBolKill == true) {
            this.currentBGM = 1;
            this.playBGM1();
        }
        else if (GameData.state == 1) {
            this.currentBGM = 3;
            this.playBGM3();
        }
        else if (GameData.state == 2) {
            this.currentBGM = 2;
            this.playBGM2();
        }
        else {
            this.currentBGM = 0;
            this.closeMusic();
        }
        // if (this.flag_num == 1) {
        //     this.onPlaySoundUpM();
        // }
        // else if (this.flag_num == 2) {
        //     this.onPlaySoundDownM();
        // } else {
        //     this.closeMusic();
        // }
    };
    // /**鱼钩下水 */
    // public onPlaySound1(): void {
    //     console.log("播放音效1");
    //     Laya.SoundManager.playSound("comp/yugouxiashui.mp3", 1, new Handler(this, this.onComplete));
    // }
    // /**钩到鱼 */
    // public onPlaySound2(): void {
    //     console.log("播放音效2");
    //     Laya.SoundManager.playSound("comp/goudaoyu.mp3", 1, new Handler(this, this.onComplete));
    // }
    Main.prototype.onComplete = function () {
        // console.log("播放完成");
    };
    Main.prototype.closeMusic = function () {
        console.log("BGM关闭");
        Laya.SoundManager.stopMusic();
    };
    /**加上一个抛沟的动画 */
    Main.prototype.paoGou = function () {
        this.paoGouSpeed -= 0.5;
        if (this.paoGouSpeed < -GameConfig.paoGouSpeed) {
            this.paoGouSpeed = -GameConfig.paoGouSpeed;
        }
        this.hookPoint.y -= this.paoGouSpeed;
        this.hookPoint.x += this.vx;
        Focus.instance.moveTo(this.hookPoint);
        if (this.hookPoint.y >= 825) {
            //抛沟结束
            this.paoGouBool = false;
            this.tt.visible = true;
            this.onPlaySound5();
        }
    };
    /**隐藏或者显示鸟
     * @param bol true 显示
     */
    Main.prototype.hideOrShowBird = function (bol) {
        this.b1.visible = bol;
        this.b2.visible = bol;
        this.b3.visible = bol;
    };
    /**添加动画效果 */
    Main.prototype.addYuxianAniAni = function () {
        //创建一个Animation实例
        this.yuxianAni = new Laya.Animation();
        //加载动画文件
        this.yuxianAni.loadAnimation("xian.ani");
        //添加到舞台
        GameConfig.sprite_map.addChild(this.yuxianAni);
        //播放Animation动画
        this.yuxianAni.play(0, false);
    };
    /**播放完成后移除 */
    Main.prototype.removeAniYuxian = function () {
        if (this.yuxianAni) {
            this.yuxianAni.removeSelf();
            this.yuxianAni = null;
        }
    };
    //-------------------------------------所有音效&BGM处理----------------------------------------------------------
    /**空中射击BGM */
    Main.prototype.playBGM1 = function () {
        console.log("空中射击BGM");
        Laya.SoundManager.playMusic("comp/kongzhongshejiBGM.mp3", 0);
    };
    /**水中上升GBM */
    Main.prototype.playBGM2 = function () {
        console.log("水中上升GBM");
        Laya.SoundManager.playMusic("comp/shuizhongshangshengGBM.mp3", 0);
    };
    /**水中下降BGM */
    Main.prototype.playBGM3 = function () {
        console.log("水中下降BGM");
        Laya.SoundManager.playMusic("comp/shuizhongxiajiangBGM.mp3", 0);
    };
    // /**手枪音效音效 */
    // public onPlaySound1(): void {
    //     Laya.SoundManager.playSound("comp/shouqiangyinxiao.mp3", 1, new Handler(this, this.onComplete));
    // }
    /**水下碰到第一条鱼音效 */
    Main.prototype.onPlaySound2 = function () {
        console.log("水下碰到第一条鱼音效");
        Laya.SoundManager.playSound("comp/shuixiapengdaodiyitiaoyu.mp3", 1, new Handler(this, this.onComplete));
    };
    /**水下上升过程中碰到鱼音效 */
    Main.prototype.onPlaySound3 = function () {
        console.log("水下上升过程中碰到鱼音效");
        Laya.SoundManager.playSound("comp/shuixiashangshengpengdaoyu.mp3", 1, new Handler(this, this.onComplete));
    };
    /**下海和上升出海音效 */
    Main.prototype.onPlaySound4 = function () {
        console.log("下海和上升出海音效");
        Laya.SoundManager.playSound("comp/chuhai.mp3", 1, new Handler(this, this.onComplete));
    };
    /**鱼钩下水音效 */
    Main.prototype.onPlaySound5 = function () {
        console.log("鱼钩下水音效");
        Laya.SoundManager.playSound("comp/yugouxiashui.mp3", 1, new Handler(this, this.onComplete));
    };
    return Main;
}(ui.mainUI));
//# sourceMappingURL=Main.js.map