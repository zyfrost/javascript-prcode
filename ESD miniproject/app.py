from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from bson import ObjectId

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/tourist_places_db"  # Update the URI to match your MongoDB configuration
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/places", methods=["GET"])
def get_places():
    places = list(mongo.db.places.find())
    return jsonify(places), 200

# Rest of the Flask API routes...

if __name__ == "__main__":
    app.run(debug=True)
