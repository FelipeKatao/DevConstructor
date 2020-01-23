from flask import Flask
from flask import  jsonify
from flask import request
import json

USERS_ACTIVE=[]
CURRENT_FLAG=0

app = Flask(__name__)
@app.route("/",methods=['GET'])
def index():
    return jsonify(USERS_ACTIVE)

@app.route("/dev/addDev/<string:name>;<int:id>/",methods=['PUT'])
def addDev(name,id):
    dados = json.loads(request.data)
    dados['username']=name
    dados['id']= id
    USERS_ACTIVE.append(dados)
    return jsonify(dados)

@app.route("/dev/listDev/",methods=['GET'])
def listDevs():
    return jsonify(USERS_ACTIVE)
@app.route("/dev/editDev/<int:id>/",methods=['POST'])
def editdev(id):
    dados = json.loads(request.data)
    USERS_ACTIVE[id]["username"]=dados['username']
    return jsonify(USERS_ACTIVE[id])
@app.route("/dev/eraseDev/<int:id>/",methods=['DELETE'])
def erasedev(id):
    USERS_ACTIVE.pop(id)
    return jsonify(USERS_ACTIVE)
if __name__ == "__main__":
    app.run()
