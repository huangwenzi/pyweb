# 加载话语的类
import pytoml as toml

class LoadMsg():
    # 保存msg对话内容
    msg_data = None
    # msg里的数量
    msg_count = 0

    # 我们间的100件事
    weMemory_data = None
    # msg里的数量
    weMemory_count = 0
    
    
    # 初始化
    def __init__(self):
        # 读取对话内容
        with open('data/msg_data.toml', 'r', encoding='utf-8') as fin:
            self.msg_data = toml.load(fin)
            self.msg_count = len(self.msg_data)

        # 读取weMemory数据
        with open('data/weMemory.toml', 'r', encoding='utf-8') as fin:
            self.weMemory_data = toml.load(fin)
            self.weMemory_count = len(self.weMemory_data)
            


loadMsg = LoadMsg()
