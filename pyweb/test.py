import pytoml as toml

with open('100witness.toml', 'rb') as fin:
    msg_data = toml.load(fin)
    msg_count = len(msg_data)