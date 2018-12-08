
#!/usr/bin/evn python
# coding=utf-8
# 系统或三方库
from bottle import default_app, get, run
from bottle import static_file
from beaker.middleware import SessionMiddleware
import random
import time

# 自写模块
from addMsg import loadMsg
from tool.time_tool import time_tool

# 公司地址 http://192.168.4.65:9090/getDogFood
# 神舟地址 http://192.168.239.1:9090/getDogFood
# 公网地址 http://118.126.112.214:9090/getDogFood

# 设置session参数
session_opts = {
    'session.type': 'file',
    'session.cookie_expires': 3600,
    'session.data_dir': '/tmp/sessions/simple',
    'session.auto': True
}

# 获取静态文件
@get('/image/sisi_self/<filename>')
def server_static(filename):
    print(filename)
    return static_file(filename, root='D:/git/excel/pyweb/pyweb/image/sisi_self')

@get('/getDogFood')
def callback():
    # 先写入开头
    ret = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>来自仙女和仙男的仙粮</title></head><body>'

    # 添加内容
    # 随机抽取一个时间段的语句
    rand_num = random.randrange(loadMsg.msg_count) + 1
    msg_data = loadMsg.msg_data["_" + str(rand_num)]

    # 写入时间
    ret += "<h3> %s </h3>"%(msg_data["time"])

    # 写入对话
    dialogue_list = msg_data["dialogue"].split("|")
    for dialogue in dialogue_list:
        ret += "<p> %s </p>"%(dialogue)

    # 加上一些空行
    ret += "<br />"

    # 写入认识的日期
    ret += '<h3>相识于2018年11月8日21点52分</h3>'

    # 写入已经认识的时间
    # 2018/11/8 21:52:0 = 1541685120
    pass_time = time_tool.pass_time(1541685120, time.time())
    ret += "<h3>已相识%s年%s月%s日%s时%s分%s秒<h3>"%(pass_time.tm_year, pass_time.tm_mon, pass_time.tm_mday, pass_time.tm_hour, pass_time.tm_min, pass_time.tm_sec)

    # 加上一些空行
    ret += "<br />"

    # 我们间的第一次
    ret += "<h3>我们间的第一次<h3>"
    for event in loadMsg.one_data:
        ret += "<p>" + loadMsg.one_data[event]["time"] + "</p>"
        ret += "<p>" + loadMsg.one_data[event]["event"] + "</p>"

    # 加上一些空行
    ret += "<br />"

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

# 函数主入口
if __name__ == '__main__':
    app_argv = SessionMiddleware(default_app(), session_opts)
    run(app=app_argv, host='0.0.0.0', port=9090, debug=True, reloader=True)
