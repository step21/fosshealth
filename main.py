from flask import Flask, request, jsonify
from db_utils import *

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello from fosssearch'

@app.route('/api/{repo_id}/')
def repo_id():
    d = select_query(conn, f"SELECT * FROM repo_metadata WHERE id = {repo_id}")
    return jsonify(d)
    

@app.route('/api/leaderboard')
def api_data():
    return {'data': 'This is the API endpoint'}

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000)

