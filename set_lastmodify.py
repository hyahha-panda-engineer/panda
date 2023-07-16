import json 
import os
import datetime
import subprocess

with open("./public/setting.json", "r", encoding="utf-8") as f:
    jd = json.load(f)

for i in jd:
    filepath = f"./public/{i['rootdir']}{i['mdfile']}"
    lastmodify = os.path.getmtime(filepath)
    i["last_modify"] = datetime.datetime.fromtimestamp(lastmodify).strftime("%Y-%m-%d")

with open("./public/setting.json", "w", encoding="utf-8") as f:
    json.dump(jd, f, indent=4, ensure_ascii=False)