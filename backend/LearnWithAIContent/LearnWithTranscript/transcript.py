from LearnWithAIContent.TextGeneration import TextGenerator
from youtube_transcript_api import YouTubeTranscriptApi
import logging
import os
import shutil
import requests

logging.basicConfig(level=logging.INFO)

class Transcript:
    def __init__(self, video_link):
        self.video_link = video_link

    def extract_transcript_details(self, youtube_video_url):
        try:
            if "v=" not in youtube_video_url:
                raise ValueError("Invalid YouTube video link format")
            video_id = youtube_video_url.split("v=")[1]
            if "&" in video_id:
                video_id = video_id.split("&")[0]
            transcript_text = YouTubeTranscriptApi.get_transcript(video_id)
            transcript = " ".join([i["text"] for i in transcript_text])
            logging.info("Extracted transcript successfully")
            return transcript
        except Exception as e:
            logging.error(f"Error extracting transcript: {e}")
            raise e
        
    def empty_directory(self,directory_path):
        if os.path.exists(directory_path):
            shutil.rmtree(directory_path)
        os.mkdirs(directory_path)
        
    def save_youtube_tumbnails(self):
        self.empty_directory("TranscriptImages")
        for i in range(1,4):
            img_url = f"http://img.youtube/vi/{self.video_id}/{i}.jpg"
            img_data = requests.get(img_url).content
            with open(f"TranscriptImages/{i}.jpg","wb") as handler:
                handler.write(img_data)
    
    def TranscriptSummarizer(self):
        prompt = """You are a YouTube video summarizer. 
            Your task is to take the transcript text of a given video and create a detailed summary, 
            highlighting the key points in a concise and organized manner. 
            The summary should be within 500 words and presented in paragraph and bullet points for clarity. """
        
        try:
            transcript_text = self.extract_transcript_details(self.video_link)
            logging.info("Transcript text for summarization retrieved successfully")
            ai = TextGenerator(prompt=(prompt + transcript_text))
            summary = ai.Text()
            logging.info("Received summary from AI successfully")
            with open("TranscriptSummary2.txt", "w") as f:
                f.write(summary)
            logging.info("Transcript summary generated successfully")
            return summary
        except Exception as e:
            logging.error(f"Error generating transcript summary: {e}")
            return str(e)