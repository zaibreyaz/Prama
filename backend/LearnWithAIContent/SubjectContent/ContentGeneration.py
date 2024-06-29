from LearnWithAIContent.TextGeneration import TextGenerator
import logging

logging.basicConfig(level=logging.INFO)

class ContentGeneration:
    def __init__(self, topic, level):
        self._topic = topic
        self._level = level

    def ContentGenerator(self):
        prompt = f"""List Content of {self._topic} topic for a {self._level},
                    and format the output in json, and format heading as header and sub heading as subheader,
                    doesnot include and practical topics and resources, 
                    only return the content not anything else"""
        ai = TextGenerator(prompt)
        try:
            logging.info(f"Sending request to AI with prompt: {prompt}")
            response = ai.Text()
            if "```json" in response:
                response = response.replace("```json","")
            if "```" in response:
                response = response.replace("```","")
            logging.info(f"Received response from AI: {response}")
            with open("Content1.json", "w") as f:
                f.writelines(response)
            logging.info("Content generated successfully")
            return response
        except Exception as e:
            logging.error(f"Error generating content: {e}")
            return str(e)