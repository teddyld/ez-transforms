from flask import Flask, jsonify, request
import signal
from json import dumps
from flask_cors import CORS

from transformsFactory import constructTransform

def quit_gracefully(*args):
    '''For coverage'''
    exit(0)

def defaultHandler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response

app = Flask(__name__)
CORS(app)

app.config['TRAP_HTTP_EXCEPTIONS'] = True
app.register_error_handler(Exception, defaultHandler)

@app.route('/transforms/generate', methods=['POST'])
def transforms_generate():
    jsonTransform = request.get_json()
    return constructTransform(jsonTransform)
    
if __name__ == "__main__":
    signal.signal(signal.SIGINT, quit_gracefully)  # For coverage
    app.run(debug=True, port=8080)  # Do not edit this port