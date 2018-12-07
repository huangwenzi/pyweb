
#!/usr/bin/evn python
# coding=utf-8

from bottle import default_app, get, run
from beaker.middleware import SessionMiddleware
from addMsg import loadMsg
import random
import time

# 设置session参数
session_opts = {
    'session.type': 'file',
    'session.cookie_expires': 3600,
    'session.data_dir': '/tmp/sessions/simple',
    'session.auto': True
}
from bottle import static_file
@get('/static/<filename>')
def server_static(filename):
    return static_file(filename, root='G:/huangwen/code/pyweb')

# 公司地址 http://192.168.4.65:9090/getDogFood
# 神舟地址 http://192.168.239.1:9090/getDogFood
# 公网地址 http://118.126.112.214:9090/getDogFood
@get('/getDogFood')
def callback():
    # 先写入开头
    ret = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>1</title></head><body>'

    # 添加内容
    # 随机抽取一个时间段的语句
    rand_num = random.randrange(loadMsg.msg_count) + 1
    msg_data = loadMsg.msg_data["_" + str(rand_num)]

    # 写入时间
    time_msg = "<h3>" + msg_data["time"] + "</h3>"
    ret += time_msg

    # 写入对话
    dialogue_list = msg_data["dialogue"].split("|")
    for dialogue in dialogue_list:
        dialogue_msg = "<p>" + dialogue + "</p>"
        ret += dialogue_msg

    # 加上一些空行
    ret += "<p>.</p>"
    ret += "<p>.</p>"
    ret += "<p>.</p>"

    # 写入认识的日期
   # ret += "<h3>" + "相识于2018年11月8日21点52分" + "</h3>"
    # 写入已经认识的时间
    # 2018/11/8 21:52:0 = 1541685120
    now_time = time.time()
    pass_time = time.localtime(now_time - 1541685120)
    # time_msg = "已相识" + str(pass_time.tm_year - 1970) + "年" + str(pass_time.tm_mon - 1) + "月" + str(pass_time.tm_mday) + "日" + str(pass_time.tm_hour) + "时" + str(pass_time.tm_min) + "分" + str(pass_time.tm_sec) + "秒"
    # time_msg = "<h3>" + time_msg + "<h3>"
    ret += time_msg
    ret += "<img src='/static/1.png'"
    ret += "</body></html>"

    return ret

# 函数主入口
if __name__ == '__main__':
    app_argv = SessionMiddleware(default_app(), session_opts)
    run(app=app_argv, host='0.0.0.0', port=9090, debug=True, reloader=True)
