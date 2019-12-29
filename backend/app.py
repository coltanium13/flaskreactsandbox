from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

# declare constants
HOST = '0.0.0.0'
PORT = 5000

# initialize flask application
app = Flask(__name__)
app.config['CORS_SUPPORTS_CREDENTIALS'] = True
app.config['CORS_ORIGINS'] = '*'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

# sample hello world page
@app.route('/')
@cross_origin()
def hello():
    return "<h1>Hello World</h1>"

# sample api endpoint
@app.route('/api/test', methods=['GET', 'POST'])
@cross_origin()
def test():
    if request.method == 'POST':
        # get parameters from post request
        parameters = request.get_json()
        if 'test' in parameters:
            return jsonify({'value': parameters['test']})
        return jsonify({'error'})
    else:
        response = jsonify({'test': 'success! stupid thing..'})
        return response


if __name__ == '__main__':
    app.run(host=HOST,
            debug=True,
            port=PORT)
