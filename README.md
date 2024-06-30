# Pramā

Pramā is a comprehensive learning management system (LMS) that leverages artificial intelligence (AI) to personalize the learning experience and empower knowledge acquisition. By combining adaptive learning algorithms, knowledge testing, AI-powered summarization, natural language processing (NLP) for rich PDF interaction, and gamification, Prama offers a versatile solution catering to a wide range of learners and educational needs.

## Features

- *AI Teacher Function:* Utilizes adaptive learning algorithms to tailor content delivery and learning paths to individual student needs and styles.
- *Knowledge Testing:* Incorporates topic-based quizzes with personalized learning paths to address knowledge gaps and ensure appropriate challenges.
- *AI-powered Summarization:* Extracts key information from YouTube videos and generates quizzes to assess knowledge retention.
- *Interactive PDF Exploration:* Allows students to upload PDFs and interact with them using NLP to ask questions, receive explanations, or generate creative text formats directly within the document.
- *Gamification:* Features a leaderboard system that showcases scores in a game-like manner to motivate users to learn and progress.

## Setup Instructions

1. *Clone the Repository:*
   ```
    sh
    git clone https://github.com/zaibreyaz/Prama.git
    cd Prama
    ```

3. *Install Dependencies:*
    Ensure you have Python 3.8+ installed. Then, install the required Python packages:
   ```
    sh
    pip install -r requirements.txt
   ```
    

5. *Environment Variables:*
    Create a ```.env``` file in the root directory and add the following environment variables:
    ```
    GOOGLE_API_KEY = "your_api_key"
    ```
    

6. *Start the Development Server:*
    Launch the development server:
   ```
    sh
    python backend/main.py
   ```
    
8. *Go to frontend side:*
    ```
    cd frontend
    ```
    
9. *Install all dependencies:*
    ```
   npm i
    ```
    
10. *Start your frontend:*
    ```
    npm start
    ```

11. *Access Prama:*
    Open your web browser and go to http://localhost:5000 to start using Prama.

## Usage

### AI Teacher Function

1. *Student Registration:* Students can register and log in to the platform.
2. *Personalized Learning Paths:* Once logged in, students will receive personalized content and learning paths based on their performance and learning style.

### Knowledge Testing

1. *Topic-based Quizzes:* Students can take quizzes on various topics, and the system will adapt future quizzes based on their performance.
2. *Review Results:* Students can review their quiz results and receive feedback on areas that need improvement.

### AI-powered Summarization

1. *Upload YouTube Links:* Students can upload YouTube video links.
2. *Generate Summaries and Quizzes:* The system will generate a summary of the video and create quizzes to test knowledge retention.

### Interactive PDF Exploration

1. *Upload PDFs:* Students can upload PDF documents.
2. *Interact with PDFs:* Use the AI assistant to ask questions, get explanations, or generate creative content within the PDF.

### Gamification

1. *Leaderboard:* View the leaderboard to see top-performing students and get motivated to improve your own score.
2. *Earn Points:* Students earn points by completing quizzes, interacting with content, and achieving learning milestones.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, please contact our support team at any one of these ahmedayaan570@gmail.com, zaibreyazmd@gmail.com, messi10.pratikbiswas@gmail.com, chandrimakar16@gmail.com.


## Tech Stack

*Client:* React, Redux, TailwindCSS

*Server:* Flask, Sqlalchemy
