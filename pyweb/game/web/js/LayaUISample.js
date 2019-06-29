var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var Rectangle = Laya.Rectangle;
var Sprite = Laya.Sprite;
var Point = Laya.Point;
var Tween = Laya.Tween;
var AccelerationInfo = Laya.AccelerationInfo;
var Accelerator = Laya.Accelerator;
var Browser = Laya.Browser;
//程序入口
//初始化小游戏适配库
Laya.MiniAdpter.init();
AppScaleMode.init();
// Laya.stage.screenAdaptationEnabled = true;
// Laya.Stat.show();
//激活资源版本控制
// Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
// function beginLoad() {
// }
Laya.loader.load(["comp/kongzhongshejiBGM.mp3", "comp/shuizhongshangshengGBM.mp3", "comp/shuizhongxiajiangBGM.mp3"], Handler.create(null, onLoadedMusic));
Laya.loader.load(["res/atlas/comp.atlas", "res/atlas/comp/fish.atlas", "res/atlas/comp/ff.atlas", "json/fish.json", "json/config.json", "comp/shangshuipingxian.png", "comp/waterLine.png", "comp/xian/shuxian.png"], Handler.create(null, onLoaded));
var _scene = new Sprite();
/**标识 */
var flag = true;
function onLoaded() {
    // Laya.stage.addChild(new Start());
    loadConfig();
    initFishData();
    initSprite();
    GameConfig.sprite_top.addChild(Top.instance);
    GameConfig.sprite_top.addChild(new Start());
    GameConfig.sprite_map.addChild(new Main());
}
/**初始化各个层次 */
function initSprite() {
    GameConfig.sprite_map = new Sprite();
    GameConfig.sprite_hook = new Sprite();
    GameConfig.sprite_top = new Sprite();
    _scene.addChild(GameConfig.sprite_map);
    _scene.addChild(GameConfig.sprite_hook);
    Laya.stage.addChild(_scene);
    Laya.stage.addChild(GameConfig.sprite_top);
    // AppScaleMode.adddddd();
}
function initFishData() {
    var json = Laya.loader.getRes("json/fish.json");
    var string = JSON.stringify(json);
    var arr = JSON.parse(string);
    var vo;
    GameData.fishConfig = [];
    for (var i = 1; i <= 12; i++) {
        vo = new FishVO();
        vo.id = i;
        vo.mixH = Number(arr[i].mixH);
        vo.maxH = Number(arr[i].maxH);
        vo.fishSpeed = Number(arr[i].fishSpeed);
        vo.life = Number(arr[i].life);
        vo.hookIntegral = Number(arr[i].hookIntegral);
        vo.killIntegral = Number(arr[i].killIntegral);
        vo.mixNum = Number(arr[i].mixNum);
        vo.maxNum = Number(arr[i].maxNum);
        vo.fx = Number(arr[i].fx);
        vo.fy = Number(arr[i].fy);
        GameData.fishConfig.push(vo);
    }
}
function loadConfig() {
    var json = Laya.loader.getRes("json/config.json");
    var string = JSON.stringify(json);
    var arr = JSON.parse(string);
    GameConfig.hookSpeed = arr[1];
    GameConfig.upSpeed = arr[2];
    GameConfig.paoGouSpeed = arr[3];
    GameConfig.currentTotalFishNum = arr[4];
    GameConfig.maxH = arr[5];
    GameConfig.isWeight = arr[6];
    GameConfig.trackId = arr[7];
    GameConfig.areaNum = arr[8];
    GameConfig.genzongSpeed = arr[9];
    GameConfig.paopaoTime = arr[10];
    GameConfig.zhongli = arr[11];
    GameConfig.yingyinyu = arr[12];
    GameConfig.yingyinyuMixH = arr[13];
    GameConfig.yingyinyuMaxH = arr[14];
    GameConfig.hengxiangMax = arr[15];
    GameConfig.yuxiajiang = arr[16];
    GameConfig.qiangjizhongfanwei = arr[17];
}
function onLoadedMusic() {
    console.log("背景音乐预加载完成");
}
function addText() {
    var text = new Laya.Text();
    text.color = "#FFFFFF";
    text.font = "Impact";
    text.fontSize = 50;
    text.text = "背景音乐预加载完成";
    text.borderColor = "#FFFF00";
    text.x = 400;
    text.y = 800;
    Laya.stage.addChild(text);
}
//# sourceMappingURL=LayaUISample.js.map