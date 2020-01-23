#Codigo principal para executar as rotas no FLASK
from flask import Flask
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

class developerBase(Resource):
    def get(self):
        return {"nome":"Felipe"}
api.add_resource(developerBase,'/dev')
if __name__ == '__main__':
    app.run(debug=True)
