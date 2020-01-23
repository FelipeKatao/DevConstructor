#Codigo principal para executar as rotas no FLASK
from flask import Flask,jsonify,request
from flask_restful import Resource, Api
import json


app = Flask(__name__)
api = Api(app)

#variavel para armazenar os devs
USERS_DEV=[]

class developerModify(Resource):
    def put(self,id,name,type):
        dados = json.loads(request.data)
        USERS_DEV.append(dados)
        return jsonify(dados)
        pass

class developerBase(Resource):
    def get(self):
        return jsonify(USERS_DEV)
        
api.add_resource(developerBase,'/dev/')
api.add_resource(developerModify,'/dev/<int:id>;<string:name>;<string:type>/')
if __name__ == '__main__':
    app.run(debug=True)
