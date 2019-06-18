
#!/usr/bin/evn python
# coding=utf-8
# 系统或三方库
from bottle import default_app, get, run
from bottle import static_file
from beaker.middleware import SessionMiddleware

# 自写模块
from getHtml import getHtml
from config.global_cfg import global_cfg

# 公司地址 http://192.168.4.65:9090/getDogFood
# 神舟地址 http://192.168.235.1:9090/getDogFood
# 公网地址 http://118.126.112.214:9090/getDogFood

# 设置session参数
session_opts = {
    'session.type': 'file',
    'session.cookie_expires': 3600,
    'session.data_dir': '/tmp/sessions/simple',
    'session.auto': True
}

# 获取静态文件
# 目前没办法做到跨文件


@get('/image/sisi_self/<filename>')
def server_static(filename):
    print(filename)
    return static_file(filename, root='./image/sisi_self')


@get('/image/memory/<filename>')
def server_memory(filename):
    print(filename)
    return static_file(filename, root='./image/memory')


# 获取网页部分
# 获取网站主页
@get('/getDogFood')
def callback():
    return getHtml.getDogFood()

# 获取我们间的回忆


@get('/getfairy')
def callback():
    return getHtml.getfairy()

# 写入仙女样子的跳转


@get('/getWeMemory')
def callback():
    return getHtml.getWeMemory()

# 仙女的寻人启事


@get('/find')
def callback():
    tmp_str = "<h3>你好，打扰了，我是吴静的男朋友，QQ的加好友提示字数限制，写不了太多，我只能通过这个方式来说明。\n吴静她手机关机了，微信QQ都不在线，我联系不上她，只知道她今晚和同学一起去玩,所以冒昧打扰一下，问下她现在在你身边吗？如果在，麻烦告诉她，和我报下平安，麻烦你了。如果不在，打扰了，不好意思</h3>"
    return tmp_str


# 函数主入口
if __name__ == '__main__':
    app_argv = SessionMiddleware(default_app(), session_opts)
    run(app=app_argv, host='0.0.0.0',
        port=global_cfg.prot, debug=True, reloader=True)
