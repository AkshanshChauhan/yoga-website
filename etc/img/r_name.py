import glob
import os

gl = glob.glob("*")

name = "image_"
index = 0
for i in gl:
    if(i=="r_name.py"):
        print("hello")
    else:
        print(i)
        index = index + 1
        index_str = str(index)
        name_str = name + index_str
        os.rename(i, name_str + ".jpg")