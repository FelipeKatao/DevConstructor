from flask import Flask
from flask import  jsonify
from flask import request

app = Flask(__name__)
@app.route("/",methods=['GET'])
def index():
    return jsonify(username="felipe",tecnologia="Python",gitHub="FelipeKatao")
@app.route("/postUser",methods=['POST'])
def postrota():
    print(request.json)
    return jsonify(request.json)
if __name__ == "__main__":
    app.run()