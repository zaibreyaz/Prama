import streamlit as st
import os
from dotenv import load_dotenv
import youtube_dl
load_dotenv() 
import google.generativeai as genai

from youtube_transcript_api import YouTubeTranscriptApi

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt="""You are a YouTube video summarizer. Your task is to take the transcript text of a given video and create a detailed summary, highlighting the key points in a concise and organized manner. The summary should be within 500 words and presented in paragraph and bullet points for clarity. After providing the summary, ask the user if they are ready to take a quiz and  generate a quiz with 10-15 questions based on the video's content to test their understanding. Please provide the summary of the text given here:  """


##  transcript  from yt 
def extract_transcript_details(youtube_video_url):
    try:
        video_id=youtube_video_url.split("=")[1]
        
        transcript_text=YouTubeTranscriptApi.get_transcript(video_id)

        transcript = ""
        for i in transcript_text:
            transcript += " " + i["text"]

        return transcript

    except Exception as e:
        raise e
    
## Google Gemini Pro
def generate_gemini_content(transcript_text,prompt):

    model=genai.GenerativeModel("gemini-pro")
    response=model.generate_content(prompt+transcript_text)
    return response.text

def generate_quiz(transcript_text):
    # generate quiz based on transcript_text
    pass

st.title("YouTube Transcript to Detailed Notes Converter")
youtube_link = st.text_input("Enter YouTube Video Link:")
if youtube_link:
    video_id = youtube_link.split("=")[1]
    st.image(f"http://img.youtube.com/vi/{video_id}/0.jpg", use_column_width=True)

if st.button("Extract Frames"):
    ydl_opts = {'outtmpl': '%(id)s.%(ext)s'}
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download([youtube_link])

    video_path = f"{video_id}.mp4"

    # Define timestamps to capture frames (in seconds)
    timestamps = [10, 30, 60, 90]  # capture frames at 10, 30, 60, and 90 seconds

    cap = cv2.VideoCapture(video_path)

    for timestamp in timestamps:
        cap.set(cv2.CAP_PROP_POS_MSEC, timestamp * 1000)  # set timestamp in milliseconds
        ret, frame = cap.read()
        if ret:
            cv2.imwrite(f"frame_{timestamp}.jpg", frame)  # save frame as image
            st.image(f"frame_{timestamp}.jpg", use_column_width=True)
            st.write(f"Frame at {timestamp} seconds:")
        else:
            st.write(f"Failed to capture frame at {timestamp} seconds")

    cap.release()
    cv2.destroyAllWindows()

if st.button("Get Detailed Notes"):
    transcript_text=extract_transcript_details(youtube_link)

    if transcript_text:
        summary=generate_gemini_content(transcript_text,prompt)
        st.markdown("## Detailed Notes:")
        st.write(summary)

        if st.button("Press For Quiz"):
            quiz = generate_quiz(transcript_text)
            st.write(quiz)