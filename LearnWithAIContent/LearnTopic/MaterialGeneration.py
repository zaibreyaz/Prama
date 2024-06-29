from LearnWithAIContent.TextGeneration import TextGenerator


class MaterialGeneration:

    def __init__(self, topics):
        self._topics = topics

    def MaterialGenerator(self):
        prompt =  f"""Explain these {self._topics} in detail and also by using suitable examples.
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

        with open("Material.json", "w") as f:
            f.writelines(response)

