#Codigo principal para executar as rotas no FLASK
from flask import Flask,jsonify,request
from flask_restful import Resource, Api
import json


app = Flask(__name__)
api = Api(app)

#variavel para armazenar os devs
USERS_DEV=[
      {
    "github": "MarcoHub",
    "id": 1,
    "techs": "JavaScript",
    "username": "Marcos"
  },
  {
    "github": "FelipeKatao",
    "id": 0,
    "techs": "Python",
    "username": "Felipe"
  },
  {
    "github": "LeYorn",
    "id": 0,
    "techs": "C#",
    "username": "Leonardo"
  }
]

#Modifica desenvolvedores adiciona ou remove
class developerModify(Resource):
    def put(self,id,name,type):
        dados = json.loads(request.data)
        dados['id']=id
        dados['username']=name
        USERS_DEV.append(dados)
        return jsonify(dados)
    def delete(self,id,name,type):
        USERS_DEV.pop(id)
        return jsonify({"Status":"User deleted from system with sucess"})

#Retorna todos os desenvolvedores
class developerBase(Resource):
     def get(self):
        return jsonify(USERS_DEV)

#Procura os desenvolvedores pelo nome
class searchBase(Resource):
    def get(self):
        SearchEngine = request.args.get('developer')
        flag=""
        for item in USERS_DEV:
            if item['username'] == SearchEngine:
                return jsonify(item)
                break
            else:
                flag="Dont found developer"
        return  flag

api.add_resource(developerBase,'/dev/')
api.add_resource(developerModify,'/dev/mod/<int:id>;<string:name>;<string:type>/')
api.add_resource(searchBase,'/dev/search/')
if __name__ == '__main__':
    app.run(debug=True)