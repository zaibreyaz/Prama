from LearnWithAIContent.TextGeneration import TextGenerator

class QuizGenerator:
        def __init__(self, context, number_of_questions):
                self.context = context
                self.number_of_questions = number_of_questions
        def run(self):
                prompt = f"""Generate a quiz based on the following context: {self.context}. 
                        The quiz should consist of a {self.number_of_questions} set of questions, each with four options. 
                        and Format the output in JSON as an array of objects,
                        where each object represents a header with its subheaders. 
                        Each option should be a nested subarray within the header object.
                        doesnot include and practical topics and resources, 
                        only return the content not anything else
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


