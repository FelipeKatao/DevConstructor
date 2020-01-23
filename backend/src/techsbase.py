from flask import Flask,jsonify

TECHS_LIST={
    "IdTech":0,
    "Nametech":"Python",
    "OS":"ALL"
}

app= Flask(__name__)

@app.route("/techs")
def techsroute():
    return jsonify(TECHS_LIST)