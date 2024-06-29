from LearnWithAIContent.TextGeneration import TextGenerator
import logging

logging.basicConfig(level=logging.INFO)

class ContentGeneration:
    def __init__(self, topic, level):
        self._topic = topic
        self._level = level

    def ContentGenerator(self):
        prompt = f"""List Content of {self._topic} topic for a {self._level}, 
                    does not include any practical topics and resources, 
                    only return the content, not anything else."""
        ai = TextGenerator(prompt)
        
        try:
            logging.info(f"Sending request to AI with prompt: {prompt}")
            out = ai.Text()
            logging.info(f"Received response from AI: {out}")
            with open("Content.txt", "w") as f:
                f.write(out)
            logging.info("Content generated successfully")
            return out
        except Exception as e:
            logging.error(f"Error generating content: {e}")
            return str(e)