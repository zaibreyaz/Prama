from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from LearnWithAIContent.LearnTopic.MaterialGeneration import MaterialGeneration
from LearnWithAIContent.SubjectContent.ContentGeneration import ContentGeneration
from LearnWithAIContent.LearnWithTranscript.transcript import Transcript
from LearnWithAIContent.TextGeneration import TextGenerator
from LearnWithAIContent.LearnWithFileUpload.PDFInformation import PDFChat
from LearnWithAIContent.Quiz.Quiz import QuizGenerator
from LearnWithAIContent.LearnWithFileUpload.ImageInformation import InformationFromImage
import logging
import json
import os

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Configuration
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    phone_number = db.Column(db.String(15), nullable=True)

# Create tables if not exists
with app.app_context():
    db.create_all()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password, phone_number=phone_number)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@app.route('/', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login successful"}), 200

    return jsonify({"error": "Invalid credentials"}), 401

@app.route("/logout", methods=["POST"])
def logout():
    return jsonify({"message": "Logout successful"}), 200

@app.route('/get-text', methods=['GET'])
def get_text():
    try:
        with open('test3.txt', 'r') as file:
            content = file.read()
        return jsonify({"content": content}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

#ML PART:
@app.route('/generate_material', methods=['POST'])
def generate_material():
    try:
        data = request.get_json()
        topics = data.get('topics')
        
        if not topics:
            return jsonify({"error": "No topics provided"}), 400
        
        material = MaterialGeneration(topics)
        generated_material = material.MaterialGenerator()
        
        return jsonify({"generated_material": generated_material})
    except Exception as e:
        logging.error(f"Error in /generate_material: {e}")
        return jsonify({"error": str(e)}), 500
    
@app.route('/generate_content', methods=['POST'])
def generate_content():
    try:
        data = request.get_json()
        subject = data.get('subject')
        level = data.get('level')
        
        if not subject or not level:
            return jsonify({"error": "Subject and level must be provided"}), 400
        
        content = ContentGeneration(subject, level)
        generated_content = content.ContentGenerator()
        return jsonify({"generated_content": generated_content})
    
    except Exception as e:
        logging.error(f"Error in /generate_content: {e}")
        return jsonify({"error": str(e)}), 500
    
@app.route('/summarize_transcript', methods=['POST'])
def summarize_transcript():
    try:
        data = request.get_json()
        video_link = data.get('video_link')
        
        if not video_link:
            return jsonify({"error": "Video link must be provided"}), 400
        
        transcript = Transcript(video_link)
        transcript_summary = transcript.TranscriptSummarizer()
        
        return jsonify({"transcript_summary": transcript_summary})
    except Exception as e:
        logging.error(f"Error in /summarize_transcript: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/quiz', methods=['GET'])
def get_quiz():
    if not os.path.exists('quizdata.json'):
        return jsonify({'error': 'Quiz data not found'}), 404

    with open('quizdata.json') as f:
        quiz_data = json.load(f)
    
    quiz_title = quiz_data['quiz']['title']
    quiz_questions = quiz_data['quiz']['questions']

    return jsonify({'title': quiz_title, 'questions': quiz_questions})

@app.route('/api/submit', methods=['POST'])
def submit_quiz():
    if not os.path.exists('quizdata.json'):
        return jsonify({'error': 'Quiz data not found'}), 404

    with open('quizdata.json') as f:
        quiz_data = json.load(f)
        quiz_questions = quiz_data['quiz']['questions']

    answers = request.json.get('answers', {})
    score = 0
    wrong_answers = []

    for i, question in enumerate(quiz_questions):
        user_answer = answers.get(f'question_{i}')
        if user_answer != question['correct_answer']:
            wrong_answers.append({
                'question': question['question'],
                'correct_answer': question['correct_answer'],
                'user_answer': user_answer
            })
        else:
            score += 1

    return jsonify({'score': score, 'total': len(quiz_questions), 'wrong_answers': wrong_answers})

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

class InformationFromImage:
    def get_gemini_response(self, input_text, image_path):
        # Placeholder for the actual implementation
        return f"Information from image for input "

class PDFChat:
    def PDFInformationRun(self, pdf_docs, user_question):
        # Placeholder for the actual implementation
        return f"PDF information for question '{user_question}'"

@app.route('/file-upload', methods=['POST'])
def upload_file():
    input_text = request.form['userName']
    image_file = request.files.get('imageFile')
    pdf_file = request.files.get('pdfFile')

    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    image_path = None
    pdf_path = None
    information = None
    pdf_information = None

    if image_file:
        image_path = os.path.join(UPLOAD_FOLDER, image_file.filename)
        image_file.save(image_path)
        informationfromImage = InformationFromImage()
        information = informationfromImage.get_gemini_response(input_text, image_path)
    
    if pdf_file:
        pdf_path = os.path.join(UPLOAD_FOLDER, pdf_file.filename)
        pdf_file.save(pdf_path)
        pdfchat = PDFChat()
        pdf_information = pdfchat.PDFInformationRun(pdf_docs=pdf_path, user_question=input_text)

    result_data = f"Files uploaded successfully for user {input_text}"

    return jsonify({
        'imagePath': image_path,
        'pdfPath': pdf_path,
        'resultData': result_data,
        'imageInformation': information,
        'pdfInformation': pdf_information
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
