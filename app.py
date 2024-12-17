from flask import Flask, render_template, jsonify 

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/hello', methods=['POST'])
def hello():
    return jsonify(message = 'Hello W !')

if __name__ == '__main__':
  app.run(debug=True)
