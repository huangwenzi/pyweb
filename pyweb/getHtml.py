import socket
import random
import time

# 自写模块
from loadMsg import loadMsg
from tools.timeTool import timeTool
from configs.global_cfg import global_cfg

# 这个类用来专门返还html
class GetHtml():
    # 本机电脑名
    myName = ""

    # 初始化
    def __init__(self):
        pass
        #获取本机电脑名
        # self.myName = socket.getfqdn(socket.gethostname())
        # #获取本机ip
        # self.myAddr = socket.gethostbyname(self.myName)

    # 获取网站主页
    def getDogFood(self):
        # 先写入开头
        ret = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>来自仙女和仙男的仙粮</title></head><body>'

        # 添加内容
        # 随机抽取一个时间段的语句
        rand_num = random.randrange(loadMsg.msg_count) + 1
        msg_data = loadMsg.msg_data["_" + str(rand_num)]

        # 写入认识的日期
        ret += '<h3>相识于2018年11月8日21点52分</h3>'
        # # 加上一些空行
        # ret += "<br />"

        # 写入已经认识的时间
        # 2018/11/8 21:52:0 = 1541685120
        pass_time = timeTool.pass_time(1541685120, time.time())
        ret += "<h3>已相识%s年%s月%s日%s时%s分%s秒<h3>"%(pass_time.tm_year, pass_time.tm_mon, pass_time.tm_mday, pass_time.tm_hour, pass_time.tm_min, pass_time.tm_sec)
        ret += "<br />"

        # 写入时间
        # ret += "<h3> %s </h3>"%(msg_data["time"])
        # 写入对话
        dialogue_list = msg_data["dialogue"].split("|")
        for dialogue in dialogue_list:
            ret += "<p> %s </p>"%(dialogue)
        ret += "<br />"

        # 写入我们的回忆的跳转
        ret += '<a href="http://' + global_cfg.myAddr + ':' + str(global_cfg.prot) + '/getWeMemory" target="_blank">我们的回忆!</a>'
        ret += "<br />"
        # 写入仙女样子的跳转
        ret += '<a href="http://' + global_cfg.myAddr + ':' + str(global_cfg.prot) + '/getfairy" target="_blank">仙女的样子!</a>'
        ret += "<br />"

        return ret

    # 获取我们间的回忆
    def getWeMemory(self):
        # 先写入开头
        ret = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>我们间的回忆</title></head><body>'

        # 循环写入每一件事
        for index in range(1,loadMsg.weMemory_count + 1):
            # 拿到数据对象
            tmpData = loadMsg.weMemory_data["_" + str(index)]
            # 写入标题,时间
            ret += "<h5> %s </h5>"%(tmpData["event"])
            ret += "<h5> %s </h5>"%(tmpData["time"])
            # 循环加上图片
            photo_arr = tmpData["Photo"].split("|")
            for tmp_photo in photo_arr:
                ret += '<img src="%s" alt="angry" width="150" height="150">'%(tmp_photo)

        # 结束html
        ret += "</body></html>"

        return ret

    # 写入仙女样子的跳转
    def getfairy(self):
        # 先写入开头
        ret = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>来自仙女和仙男的回忆</title></head><body>'

        # 献上仙女的八十二变
        # 格式化布局
        # 声明table
        ret += '<table width="600" border="0">'
        ret += '<tr> <td colspan="5" style="background-color:#F8F8FF;"> <h3>仙女的八十二变</h3> </td> </tr>'
        # 第一行
        ret += '<tr>'
        ret += '<td style="background-color:#FFB6C1;width:150px;vertical-align:top;">'
        ret += '<b>她平时的样子</b> <br> <img src="/image/sisi_self/who.png" alt="who" width="150" height="150"> <br> </td>'
        ret += '<td style="background-color:#FFB6C1;width:150px;vertical-align:top;">'
        ret += '<b>当你问她是谁时</b> <br> <img src="/image/sisi_self/tell.png" alt="tell" width="150" height="150"> <br> </td>'
        ret += '<td style="background-color:#FFB6C1;width:150px;vertical-align:top;">'
        ret += '<b>当你要反驳她时</b> <br> <img src="/image/sisi_self/angry.png" alt="angry" width="150" height="150"> <br> </td>'
        ret += '<td style="background-color:#FFB6C1;width:150px;vertical-align:top;">'
        ret += '<b>当她撒娇时</b> <br> <img src="/image/sisi_self/coquetry.gif" alt="coquetry" width="150" height="150"> <br> </td>'
        ret += '</tr>'
        # 结束table
        ret += '</table>'

        # 结束html
        ret += "</body></html>"

        return ret

getHtml = GetHtml()
