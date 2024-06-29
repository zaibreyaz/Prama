from LearnWithAIContent.TextGeneration import TextGenerator

class QuizGenerator:
        def __init__(self, context, number_of_questions):
                self.context = context
                self.number_of_questions = number_of_questions
        def run(self):
                prompt = f"""Generate a quiz based on the following context: {self.context}. 
                        The quiz should consist of a {self.number_of_questions} set of questions, each with four options. 
                        Provide the output in JSON format,
                        Make sure each question is relevant to the context and the correct answer is accurately indicated. 
                        Here is the context for the quiz:
                        Context: {self.context}"""
                quiz = TextGenerator(prompt)
                response = quiz.Text()
                if "```json" in response:
                        response = response.replace("```json","")
                if "```" in response:
                        response = response.replace("```","")
                with open("quizdata.json","w") as f:
                        f.writelines(response)


