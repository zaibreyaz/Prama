from LearnWithAIContent.TextGeneration import TextGenerator

topic = "Machine Learning"
level = "Intermediate"

class ContentGeneration:

    def __init__(self, topic, level):
        self._topic = topic
        self._level = level

    def ContentGenerator(self):
        prompt = f"""List Content of {self._topic} topic for a {self._level},
                    and Format the output in JSON as an array of objects,
                    where each object represents a header with its subheaders. 
                    Each option should be a nested subarray within the header object.
                    doesnot include and practical topics and resources, 
                    only return the content not anything else"""
        ai = TextGenerator(prompt)
        response = ai.Text()
        if "```json" in response:
            response = response.replace("```json","")
        if "```" in response:
            response = response.replace("```","")
        with open("Content.json", "w") as f:
            f.writelines(response)
