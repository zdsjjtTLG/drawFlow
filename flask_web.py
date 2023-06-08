# -- coding: utf-8 --
# @Time    : 2023/6/8 0008 11:49
# @Author  : TangKai
# @Team    : SuperModel
# @File    : flask_web.py

from flask import Flask, render_template

app = Flask(__name__, template_folder='./')


@app.route("/tank/web")
def index():
    return "tank\'s web..."
    # return render_template('index.html')


if __name__ == '__main__':
    app.run(port=8000)