# 加载话语的类
import pytoml as toml

class LoadMsg():
    # 保存msg对象内容
    msg_data = None
    # msg里的数量
    msg_count = 0
    
    # 初始化
    def __init__(self):
        with open('test.toml', 'rb') as fin:
            self.msg_data = toml.load(fin)
            self.msg_count = len(self.msg_data)
            


loadMsg = LoadMsg()
