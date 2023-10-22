from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name)

@app.route('/api/ply_generator', methods=['POST'])
def generate_ply():
    # Ensure the 'movie_file' is included in the POST request
    if 'movie_file' not in request.files:
        return jsonify({"error": "No 'movie_file' provided in the request."}), 400

    # Save the uploaded movie file
    uploaded_file = request.files['movie_file']
    movie_path = 'uploaded_movie.mp4'
    uploaded_file.save(movie_path)

    # Run train.py to generate the .ply file
    try:
        # Replace 'command_to_run_train.py' with the actual command to run train.py
        # Ensure train.py reads 'uploaded_movie.mp4' and generates a .ply file
        subprocess.run(['python', 'command_to_run_train.py', movie_path])
    except Exception as e:
        return jsonify({"error": f"Error while running train.py: {str(e)}"}), 500

    # Assuming train.py generates 'output.ply' in the same directory
    ply_file_path = 'output.ply'

    # Check if the .ply file was generated
    if os.path.isfile(ply_file_path):
        return jsonify({"message": "PLY file generated successfully."}), 200
    else:
        return jsonify({"error": "Failed to generate PLY file."}), 500

if __name__ == '__main__':
    app.run(debug=True)


