import time
import json
# 这个系一个时间工具，用来计算技能时间

# 时间对象
class timr_dbj():
    tm_year = 0
    tm_mon = 0
    tm_mday = 0
    tm_hour = 0
    tm_min = 0
    tm_sec = 0

# 这个系一个时间工具，用来计算时间
class TimeTool():

    # 计算两个时间的时间差
    # time1 : 时间戳
    # time2 : 时间戳
    def pass_time(self, time_1, time_2):
        # 要返回的时间对象
        pass_time = timr_dbj()
        max_time = time_1
        min_time = time_2
        # 区分大小顺序
        if max_time < min_time:
            tmp = max_time
            max_time = min_time
            min_time = tmp

        # 转换时间结构
        max_time = time.localtime(max_time)
        min_time = time.localtime(min_time)

        # 开始计算
        # 先都取他们的时间差
        pass_time.tm_year = max_time.tm_year - min_time.tm_year
        pass_time.tm_mon = max_time.tm_mon - min_time.tm_mon
        pass_time.tm_mday = max_time.tm_mday - min_time.tm_mday
        pass_time.tm_hour = max_time.tm_hour - min_time.tm_hour
        pass_time.tm_min = max_time.tm_min - min_time.tm_min
        pass_time.tm_sec = max_time.tm_sec - min_time.tm_sec
        # 计算处理负数情况
        # 秒
        if pass_time.tm_sec < 0:
            pass_time.tm_min -= 1
            pass_time.tm_sec += 60
        # 分
        if pass_time.tm_min < 0:
            pass_time.tm_hour -= 1
            pass_time.tm_min += 60
        # 时
        if pass_time.tm_hour < 0:
            pass_time.tm_mday -= 1
            pass_time.tm_hour += 24
        # 日
        if pass_time.tm_mday < 0:
            pass_time.tm_mon -= 1
            pass_time.tm_mday += 30
        # 月
        if pass_time.tm_mon < 0:
            pass_time.tm_year -= 1
            pass_time.tm_mon += 12
        # # 年 这个哪里还用的到
        # if pass_time.tm_min < 0:
        #     pass_time.tm_hour -= 1
        #     pass_time.tm_min += 60


        return pass_time

timeTool = TimeTool()