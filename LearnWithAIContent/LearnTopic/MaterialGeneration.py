from LearnWithAIContent.TextGeneration import TextGenerator


class MaterialGeneration:

    def __init__(self, topics):
        self._topics = topics

    def MaterialGenerator(self):
        prompt =  f"""Explain these {self._topics} in detail and also by using suitable examples."""
        ai = TextGenerator(prompt)
        out = ai.Text()

        with open("Material.txt", "w") as f:
            f.writelines(out)

