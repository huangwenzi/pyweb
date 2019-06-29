/*
* 游戏中的一些常量;
*/
var GameConfig = (function () {
    function GameConfig() {
    }
    GameConfig.DeviceW = 750;
    GameConfig.DeviceH = 1336;
    /**鱼钩下降的速度 */
    GameConfig.hookSpeed = 15;
    /**向上抛出的速度为 */
    GameConfig.upSpeed = 10;
    /**抛沟的初始速度 */
    GameConfig.paoGouSpeed = 5;
    /**鱼的最大总条数的一半 */
    GameConfig.currentTotalFishNum = 0;
    /**下降的最大的值 */
    GameConfig.maxH = 200 * 100 + 825;
    /**是否按权重来生成鱼1为是2为否 */
    GameConfig.isWeight = 0;
    /**会跟踪鱼的id */
    GameConfig.trackId = 4;
    /**跟踪的范围 */
    GameConfig.areaNum = 400;
    /**跟踪鱼的速度 */
    GameConfig.genzongSpeed = 5;
    /**显示泡泡时间间隔 */
    GameConfig.paopaoTime = 180;
    /**左右重力感应的系数 */
    GameConfig.zhongli = 0;
    /**海底阴影鱼的数量 */
    GameConfig.yingyinyu = 20;
    /**海底阴影鱼出现的最小高度 */
    GameConfig.yingyinyuMixH = 200 * 50;
    /**海底阴影鱼出现的最大高度 */
    GameConfig.yingyinyuMaxH = 200 * 100;
    /**空中的鱼横向移动的最大速度 */
    GameConfig.hengxiangMax = 5;
    /**空中的鱼下降的速度 */
    GameConfig.yuxiajiang = 5;
    /**抢击中的范围 */
    GameConfig.qiangjizhongfanwei = 200;
    return GameConfig;
}());
//# sourceMappingURL=GameConfig.js.map