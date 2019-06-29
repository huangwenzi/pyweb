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
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super.call(this) || this;
        /**1向左 2向右 */
        _this.direction = 1;
        /**是否被捕捉 */
        _this.isBuzhuo = false;
        /**向上抛出的速度为 */
        _this.isUpSpeed = 0;
        /**当前的鱼是否可点击 */
        _this.isTouchBol = false;
        /**抛出的随机x方向移动的值 */
        _this.rx = 0;
        _this._flag = false;
        /**临时存储旋转的角度 */
        _this.angel = 0;
        _this._id = 0;
        _this.checkPoint = new Point();
        Laya.stage.frameLoop(1, _this, _this.frameHandler);
        return _this;
        // Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.clickBlue);
    }
    Fish.prototype.clickBlue = function (e) {
        this.addAniYanwu2(e.target.mouseX, e.target.mouseY);
        console.log("e.target.mouseY==" + e.target.mouseY);
    };
    Fish.prototype.clickHandler = function () {
        EventConfig.getInstance().event(EventConfig.yanwuEvent);
        if (GameData.isBolKill == true) {
            this._data.life--;
            this.onPlaySound1();
            if (this._data.life <= 0) {
                this.removeFish();
                this.caluateScore();
            }
            else {
                this.isUpSpeed = this.rUpSpeed();
                this._flag = false;
            }
            this.addAni();
        }
    };
    /**随机向上的速度 */
    Fish.prototype.rUpSpeed = function () {
        return Math.random() * GameConfig.upSpeed + 8;
    };
    Fish.prototype.onPlaySound = function () {
        console.log("播放音效");
        Laya.SoundManager.playSound("comp/bomb.mp3", 1, new Handler(this, this.onComplete));
    };
    /**手枪音效音效 */
    Fish.prototype.onPlaySound1 = function () {
        console.log("手枪音效音效");
        Laya.SoundManager.playSound("comp/shouqiangyinxiao.mp3", 1, new Handler(this, this.onComplete));
    };
    Fish.prototype.onComplete = function () {
        console.log("播放完成");
    };
    /**计算积分 */
    Fish.prototype.caluateScore = function () {
        GameData.score += this._data.killIntegral;
        EventConfig.getInstance().event(EventConfig.scoreEvent);
    };
    /**添加动画效果 */
    Fish.prototype.addAni = function () {
        // this.removeAni();
        //创建一个Animation实例
        this.tl = new Laya.Animation();
        //加载动画文件
        this.tl.loadAnimation("baozha.ani");
        this.tl.x = this.spr.x;
        this.tl.y = this.spr.y;
        //添加到舞台
        GameConfig.sprite_map.addChild(this.tl);
        //播放Animation动画
        this.tl.play(0, false);
        this.tl.once(Laya.Event.COMPLETE, this, this.removeAni);
    };
    /**播放完成后移除 */
    Fish.prototype.removeAni = function () {
        if (this.tl) {
            this.tl.removeSelf();
            this.tl = null;
        }
    };
    Fish.prototype.frameHandler = function () {
        if (GameData.state == 1) {
            if (Math.abs(Focus.instance.disObj.y - this.spr.y) <= GameConfig.areaNum) {
                if (GameConfig.trackId == this._data.id) {
                    this.trackHook();
                }
                else {
                    this.swim();
                }
            }
            else {
                this.swim();
            }
        }
        else {
            this.swim();
        }
    };
    //鱼随鱼钩摆动 中心轴放在鱼的嘴部前面一点的地方
    Fish.prototype.trackHook = function () {
        if (Focus.instance.disObj.x > this.spr.x) {
            if (this.direction == 1) {
                this.direction = 2;
                this.spr.scaleX = 1;
            }
        }
        if (Focus.instance.disObj.x <= this.spr.x) {
            if (this.direction == 2) {
                this.direction = 1;
                this.spr.scaleX = -1;
            }
        }
        if (this.direction == 1) {
            // this.spr.x -= parseInt(String(this._data.fishSpeed));
            // this.spr.y -= parseInt(String(this._data.fishSpeed));
            this.spr.x -= GameConfig.genzongSpeed;
            this.spr.y -= GameConfig.genzongSpeed;
        }
        else {
            // this.spr.x += parseInt(String(this._data.fishSpeed));
            this.spr.x += GameConfig.genzongSpeed;
            this.spr.y -= GameConfig.genzongSpeed;
        }
    };
    Fish.prototype.trackHook2 = function (r) {
        this.spr.x -= Math.cos(r);
        this.spr.y -= Math.sin(r);
    };
    Fish.prototype.addTest = function () {
        this._data = GameData.fishConfig[1 - 1];
        this.spr = Sprite.fromImage("comp/fish/fish" + 8 + ".png");
        GameConfig.sprite_map.addChild(this.spr);
        this.randomDirection();
        this.spr.x = this.randomX();
        this.spr.y = Math.random() * 1000 + 825;
        // this.spr.pivot(this.spr.width / 2, this.spr.height / 2);
        this.spr.pivot(this._data.fx, this._data.fy);
        this.spr.on(Laya.Event.MOUSE_DOWN, this, this.clickHandler);
        this.isUpSpeed = this.rUpSpeed();
        this.isTouchBol = false;
    };
    Fish.prototype.addFish = function (num) {
        // this._data = GameData.fishConfig[num - 1];
        this.copyFish(GameData.fishConfig[num - 1]);
        this.spr = Sprite.fromImage("comp/fish/fish" + num + ".png");
        GameConfig.sprite_map.addChild(this.spr);
        GameConfig.sprite_map.addChild(this.spr);
        this.randomDirection();
        this.spr.x = this.randomX();
        this.spr.y = this.randomY();
        // this.spr.y = 825;
        // this.spr.pivot(this.spr.width / 2, this.spr.height / 2);
        this.spr.pivot(this._data.fx, this._data.fy);
        this.spr.on(Laya.Event.MOUSE_DOWN, this, this.clickHandler);
        this.isUpSpeed = this.rUpSpeed();
        this.isTouchBol = false;
    };
    Fish.prototype.copyFish = function (ff) {
        this._data = new FishVO();
        this._data.id = ff.id;
        this._data.fishSpeed = ff.fishSpeed;
        this._data.hookIntegral = ff.hookIntegral;
        this._data.killIntegral = ff.killIntegral;
        this._data.life = ff.life;
        this._data.maxH = ff.maxH;
        this._data.maxNum = ff.maxNum;
        this._data.mixH = ff.mixH;
        this._data.mixNum = ff.mixNum;
        this._data.fx = ff.fx;
        this._data.fy = ff.fy;
    };
    Fish.prototype.removeFish = function () {
        this.isBuzhuo = false;
        this.spr.visible = false;
        this.removeSelf();
    };
    Fish.prototype.swim = function () {
        if (!this._data) {
            return;
        }
        if (GameData.isBolKill == true) {
            this.spr.pivot(this.spr.width / 2, this.spr.height / 2);
        }
        else {
            this.spr.pivot(this._data.fx, this._data.fy);
        }
        if (this.isTouchBol) {
            if (this._flag == false) {
                this.randomXUp();
                this.angel = parseInt(String(Math.random() * 10)) + 1;
                this._flag = true;
            }
            this.isUpSpeed -= 0.1;
            if (this.isUpSpeed < -GameConfig.yuxiajiang) {
                // this.isUpSpeed = -GameConfig.upSpeed;
                this.isUpSpeed = -GameConfig.yuxiajiang;
            }
            this.spr.y -= this.isUpSpeed;
            // console.log("df"+this.isUpSpeed);
            this.spr.rotation += this.angel;
            if (this.direction == 1) {
                // this.spr.x -= parseInt(String(this._data.fishSpeed));
                this.spr.x -= this.rx;
            }
            else {
                // this.spr.x += parseInt(String(this._data.fishSpeed));
                this.spr.x += this.rx;
            }
            if (this.spr.x <= 0) {
                this.direction = 2;
            }
            if (this.spr.x >= GameConfig.DeviceW - this.spr.width) {
                this.direction = 1;
            }
            return;
        }
        if (this.isBuzhuo) {
            this.xuanZhuan();
            return;
        }
        if (this.direction == 1) {
            this.spr.x -= parseInt(String(this._data.fishSpeed));
        }
        else {
            this.spr.x += parseInt(String(this._data.fishSpeed));
        }
        if (this.spr.x <= -this.spr.width) {
            this.direction = 2;
            this.spr.scaleX = 1;
        }
        if (this.spr.x >= GameConfig.DeviceW + this.spr.width) {
            this.direction = 1;
            this.spr.scaleX = -1;
        }
    };
    Fish.prototype.xuanZhuan = function () {
        var r = 90 + 90 * (GameData.vx * GameConfig.zhongli / 2) / 9.8;
        this.spr.rotation = r;
    };
    /**x方向上每帧移动的像素 */
    Fish.prototype.randomXUp = function () {
        this.rx = Math.random() * GameConfig.hengxiangMax + 1;
    };
    Fish.prototype.randomX = function () {
        return Math.random() * (GameConfig.DeviceW - this.spr.width);
    };
    //每100米增加鱼类
    Fish.prototype.randomY = function () {
        // console.log("   "+Math.random() * (this._data.maxH * 200) + 825 + (this._data.mixH * 200));
        return Math.random() * (this._data.maxH * 200) + 825 + (this._data.mixH * 200);
    };
    Fish.prototype.randomDirection = function () {
        this.direction = parseInt(String(Math.random() * 2 + 1));
        if (this.direction == 1) {
            this.spr.scaleX = -1;
        }
    };
    /**添加动画效果 */
    Fish.prototype.addAniYanwu2 = function (yx, yy) {
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
    Fish.prototype.removeAniYanwu2 = function () {
        if (this.yanwu2) {
            this.yanwu2.removeSelf();
            this.yanwu2 = null;
        }
    };
    Fish.ROTATE = "rotate";
    return Fish;
}(Laya.Sprite));
//# sourceMappingURL=Fish.js.map