from LearnWithAIContent.LearnTopic.MaterialGeneration import MaterialGeneration
from LearnWithAIContent.SubjectContent.ContentGeneration import ContentGeneration
from LearnWithAIContent.LearnWithTranscript.transcript import Transcript
from LearnWithAIContent.LearnWithFileUpload.PDFInformation import PDFChat
from LearnWithAIContent.LearnWithFileUpload.ImageInformation import InformationFromImage
from LearnWithAIContent.Quiz.Quiz import QuizGenerator
from LearnWithAIContent.ConvertTextToAudio.TextToAudio import TextAudio

topics = """**1. Introduction to Databases:**

* What is a database?
* Types of databases (relational, NoSQL, etc.)
* Why use a database?
* Benefits of using a DBMS"""

material = MaterialGeneration(topics)
material.MaterialGenerator()


subject = "Database Management System"
level = "Beginner"

content = ContentGeneration(subject, level)
content.ContentGenerator()


video_link = "https://www.youtube.com/watch?v=ErnWZxJovaM"

transcript = Transcript(video_link)
transcript.TranscriptSummarizer()


user_question = "Explain Data Mining process."
file = ["lecture.pdf"]
pdfchat = PDFChat()
pdfchat.PDFInformationRun(pdf_docs=file, user_question=user_question)


input_text = "Explain the process showed in the diagram."
image_path = "erq.jpg"
informationfromImage = InformationFromImage()
informationfromImage.get_gemini_response(input_text, image_path)


context = "Machine Learning"
number_of_questions = 10

quiz = QuizGenerator(context=context, number_of_questions=number_of_questions)
quiz.run()

text = ""
textaudio = TextAudio(text=text)
