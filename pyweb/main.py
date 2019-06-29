
#!/usr/bin/evn python
# coding=utf-8
# 系统或三方库
from bottle import default_app, get, run, post
from bottle import static_file, request
from beaker.middleware import SessionMiddleware

# 自写模块
from control.getHtml import getHtml
from configs.global_cfg import global_cfg

# 公司地址 http://192.168.4.65:9999/getDogFood
# 神舟地址 http://192.168.235.1:9999/getDogFood
# 公网地址 http://118.126.112.214:9999/getDogFood
# 域名地址 http://thiswen.cn:9999/getDogFood

# 设置session参数
session_opts = {
    'session.type': 'file',
    'session.cookie_expires': 3600,
    'session.data_dir': '/tmp/sessions/simple',
    'session.auto': True
}

# 获取静态文件
# 目前没办法做到跨文件
# @get('/image/sisi_self/<filename>')
# def server_static(filename):
#     print(filename)
#     return static_file(filename, root='./image/sisi_self')
# @get('/image/memory/<filename>')
# def server_memory(filename):
#     print(filename)
#     return static_file(filename, root='./image/memory')
# 获取黄涛的文件

# 游戏主页面
@get('/getGame/<filename>/index')
def getWeMemory(filename):
    print("getGame" + filename)
    if "." in filename:
        print("获取文件")
        return static_file(filename, root='./game')
    return getHtml.getGame(filename)
# 游戏文件
@get('/getGame/<path:path>')
def server_memory(path):
    print("path")
    print(path)
    return static_file(path, root='./game')
# @get('/a/<filename>')
# def server_memory(filename):
#     print("filename")
#     print(filename)
#     return static_file(filename, root='./webFile')
# @get('/a/<path:path>')
# def server_memory(path):
#     print("path")
#     print(path)
#     return static_file(path, root='./json')

# 获取网页部分
# 获取网站主页
@get('/getDogFood')
def callback():
    return getHtml.getDogFood()
# 获取我们间的回忆
@get('/getfairy')
def getfairy():
    return getHtml.getfairy()
# 写入仙女样子的跳转
@get('/getWeMemory')
def getWeMemory():
    return getHtml.getWeMemory()



# 函数主入口
if __name__ == '__main__':
    app_argv = SessionMiddleware(default_app(), session_opts)
    run(app=app_argv, host='0.0.0.0', port=global_cfg.prot, debug=True, reloader=True)

