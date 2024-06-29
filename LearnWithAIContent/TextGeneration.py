import google.generativeai as genai
import os
from dotenv import load_dotenv


class TextGenerator:
    def __init__(self, prompt):
        self._prompt = prompt

    def Text(self):
        load_dotenv()
        api_key = os.getenv('GOOGLE_API_KEY')
        genai.configure(api_key=api_key) 
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        response = model.generate_content([self._prompt])
        
        return response.text