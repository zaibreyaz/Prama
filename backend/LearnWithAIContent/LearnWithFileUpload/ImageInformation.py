from dotenv import load_dotenv
import os
import google.generativeai as genai
from PIL import Image
import pathlib

class InformationFromImage:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("GOOGLE_API_KEY")
        genai.configure(api_key=self.api_key)
        self.model = genai.GenerativeModel('gemini-pro-vision')
    
    def get_gemini_response(self, input_text, image_path=None):
        image = None
        if image_path:
            image = Image.open(image_path)
        if input_text:
            response = self.model.generate_content([input_text, image])
        else:
            response = self.model.generate_content(image)
        with open("ImageInformation.txt", "w") as f:
            f.writelines(response.text)
        # return response.text

if __name__ == "__main__":
    chatbot = InformationFromImage()
    input_text = input("Input Prompt: ")
    image_path = input("Enter the path to the image file (or leave empty if none): ")
    
    if image_path and not pathlib.Path(image_path).is_file():
        print("Invalid image path. Please check the file path and try again.")
    else:
        response = chatbot.get_gemini_response(input_text, image_path if image_path else None)
        print("The Response is:")
        print(response)
