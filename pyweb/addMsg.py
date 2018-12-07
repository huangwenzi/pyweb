# 加载话语的类
import pytoml as toml

class LoadMsg():
    # 保存msg对话内容
    msg_data = None
    # 我们间的第一次
    one_data = None
    # msg里的数量
    msg_count = 0
    
    # 初始化
    def __init__(self):
        # 读取对话内容
        with open('data/msg_data.toml', 'r', encoding='utf-8') as fin:
            self.msg_data = toml.load(fin)
            self.msg_count = len(self.msg_data)

        # 读取第一次数据
        with open('data/one_data.toml', 'r', encoding='utf-8') as fin:
            self.one_data = toml.load(fin)
            self.one_count = len(self.one_data)
            


loadMsg = LoadMsg()
