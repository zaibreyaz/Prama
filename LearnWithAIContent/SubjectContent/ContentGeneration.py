from LearnWithAIContent.TextGeneration import TextGenerator

topic = "Machine Learning"
level = "Intermediate"

class ContentGeneration:

    def __init__(self, topic, level):
        self._topic = topic
        self._level = level

    def ContentGenerator(self):
        prompt = f"""List Content of {self._topic} topic for a {self._level}, 
                    doesnot include and practical topics and resources, 
                    only return the content not anything else"""
        ai = TextGenerator(prompt)
        out = ai.Text()

        with open("Content.txt", "w") as f:
            f.writelines(out)

