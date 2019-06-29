/*
* name;
*/
var GameData = (function () {
    function GameData() {
    }
    GameData.totalHeight = 0;
    /**总积分 */
    GameData.score = 0;
    /**上一次的成绩，用来计算一局的分数 */
    GameData.grade = 0;
    /**是否可以点击屏幕 杀鱼 */
    GameData.isBolKill = false;
    /**当前是1上升 2 0不动 3 下降 */
    GameData.flag_num = 0;
    /**当然重力感应监听 */
    GameData.vx = 0;
    /**当前的状态 1下降 2 上升 */
    GameData.state = 0;
    /**调整视口的位置rec 1下降 2上升 3不动*/
    GameData.recP = 0;
    /**是否可以点击开始游戏 */
    GameData.isStartGame = false;
    /**是否这ipx上 */
    GameData.isIPX = false;
    return GameData;
}());
//# sourceMappingURL=GameData.js.map