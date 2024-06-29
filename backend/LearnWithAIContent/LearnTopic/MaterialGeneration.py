from LearnWithAIContent.TextGeneration import TextGenerator
import logging

logging.basicConfig(level=logging.INFO)

class MaterialGeneration:
    def __init__(self, topics):
        self._topics = topics

    def MaterialGenerator(self):
        prompt = f"""Explain these {self._topics} in detail and also by using suitable examples."""
        ai = TextGenerator(prompt)
        
        try:
            print("Sending request to AI with prompt:", prompt)
            out = ai.Text()
            print("Received response from AI:", out)
            with open("Material.txt", "w",encoding="utf-8") as f:
                f.write(out)
            logging.info("Material generated successfully")
            return out
        except Exception as e:
            logging.error(f"Error generating material: {e}")
            return str(e)
