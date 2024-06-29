from LearnWithAIContent.TextGeneration import TextGenerator
from youtube_transcript_api import YouTubeTranscriptApi

class Transcript:
    def __init__(self, video_link):
        self.video_link = video_link

    def extract_transcript_details(self, youtube_video_url):
        try:
            video_id=youtube_video_url.split("=")[1]
            
            transcript_text=YouTubeTranscriptApi.get_transcript(video_id)

            transcript = ""
            for i in transcript_text:
                transcript += " " + i["text"]

            return transcript

        except Exception as e:
            raise e
    
    def TranscriptSummarizer(self):
        prompt="""You are a YouTube video summarizer. 
            Your task is to take the transcript text of a given video and create a detailed summary, 
            highlighting the key points in a concise and organized manner. 
            The summary should be within 500 words and presented in paragraph and bullet points for clarity. """
        transcript_text = self.extract_transcript_details(self.video_link)
        ai = TextGenerator(prompt=(prompt+transcript_text))
        summary = ai.Text()
        with open("TranscriptSummary.txt","w") as f:
            f.writelines(summary)

    
    


    

